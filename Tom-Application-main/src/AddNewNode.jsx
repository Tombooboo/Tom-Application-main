import React, { useRef, useState } from 'react';
import './AddNewNode.css';
import { Link } from 'react-router-dom'; 

function AtomIcon() {
    return (
        <img src="https://i.ibb.co/jM29XDw/node.png" alt="node" className="atom-image" />
    );
}

function AddNewNode() {
  const nodeNameRef = useRef(null);
  const segment1 = useRef(null);
  const segment2 = useRef(null);
  const segment3 = useRef(null);
  const segment4 = useRef(null);
  const [showImage, setShowImage] = useState(false);  

  const handleInputChange = (event, nextSegment) => {
    if (event.target.value.length === 3 && nextSegment) {
      nextSegment.current.focus();
    }
  };

  const handleCreateNodeClick = () => {
    setShowImage(true);  
  };

  const handleCancelClick = () => {
    setShowImage(false);  
    
    nodeNameRef.current.value = ''; 
    segment1.current.value = '';
    segment2.current.value = '';
    segment3.current.value = '';
    segment4.current.value = '';
  };

  return (
    <div className="add-node-page">
      <h1>Add New Node</h1>
      <hr />
      <h2>Current node</h2>
      {showImage && <AtomIcon />}  {/* Conditional rendering of the image */}

      <div className="label-container">Node Name</div>
      <input type="text" placeholder="Enter Node Name" className="full-width-input" ref={nodeNameRef} />
      
      <div className="label-container">IP address for node</div>
      <div className="ip-group">
        <input 
          type="text" 
          maxLength="3" 
          placeholder="xxx" 
          ref={segment1}
          onChange={(e) => handleInputChange(e, segment2)}
        />
        <span>.</span>
        <input 
          type="text" 
          maxLength="3" 
          placeholder="xxx" 
          ref={segment2}
          onChange={(e) => handleInputChange(e, segment3)}
        />
        <span>.</span>
        <input 
          type="text" 
          maxLength="3" 
          placeholder="xxx" 
          ref={segment3}
          onChange={(e) => handleInputChange(e, segment4)}
        />
        <span>.</span>
        <input 
          type="text" 
          maxLength="3" 
          placeholder="xxx" 
          ref={segment4}
        />
      </div>

      <button className="primary-btn" onClick={handleCreateNodeClick}>Create node</button>
      <button className="secondary-btn" onClick={handleCancelClick}>Cancel</button>
      <Link to="/" className="back-btn-link">Back</Link>
    </div>
  );
}

export default AddNewNode;

