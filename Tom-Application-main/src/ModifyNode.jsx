import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ModifyNode.css';

function AtomIcon() {
    return (
        <img src="https://i.ibb.co/jM29XDw/node.png" alt="node" className="atom-image" />
    );
}

function ModifyNode() {
  const [nodeName, setNodeName] = useState('');
  const [ipSegments, setIpSegments] = useState(['', '', '', '']);

  const handleUpdate = () => {
    alert("Your node has successfully been modified.");
  };

  const handleRemove = () => {
    alert("Your node has been removed.");
    setNodeName('');
    setIpSegments(['', '', '', '']);
  };

  const handleIpChange = (index, value) => {
    const newSegments = [...ipSegments];
    newSegments[index] = value;
    setIpSegments(newSegments);
  };

  return (
    <div className="modify-node-page">
      <h1>Modify Node</h1>
      
      <input 
        type="text" 
        placeholder="Enter Node Name" 
        value={nodeName}
        onChange={(e) => setNodeName(e.target.value)}
        className="full-width-input" 
      />
      
      <h2>Current node</h2>
      <AtomIcon />
      
      <div className="ip-group">
        {ipSegments.map((segment, index) => (
          <>
            <input 
              key={index}
              type="text" 
              maxLength="3" 
              placeholder="xxx"
              value={segment}
              onChange={(e) => handleIpChange(index, e.target.value)}
            />
            {index < 3 && <span>.</span>}
          </>
        ))}
      </div>

      <div className="action-buttons">
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleRemove}>Remove</button>
        <Link to="/"><button>Cancel</button></Link>
      </div>
    </div>
  );
}

export default ModifyNode;
