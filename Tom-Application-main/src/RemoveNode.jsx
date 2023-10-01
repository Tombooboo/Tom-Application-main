import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import './RemoveNode.css';

function AtomIcon() {
    return (
        <img src="https://i.ibb.co/jM29XDw/node.png" alt="node" className="atom-image" />
    );
}

function RemoveNode() {
  const [showComponents, setShowComponents] = useState(false);
  const [filterText, setFilterText] = useState('');
  const initialComponents = ['Component 1', 'Component 2', 'Component 3', 'Component 4'];
  const [components, setComponents] = useState(initialComponents);
  const [lastDeleted, setLastDeleted] = useState([]);  // Store the last deleted components
  
  const filteredComponents = components.filter(comp => comp.toLowerCase().includes(filterText.toLowerCase()));

  const handleListViewClick = () => {
    setShowComponents(prevShow => !prevShow);  // Toggle the showComponents state
};

  const handleDeleteNodes = () => {
    setLastDeleted(filteredComponents);
    setComponents(components.filter(comp => !filteredComponents.includes(comp)));
  };

  const handleCancel = () => {
    setComponents(prevComponents => [...prevComponents, ...lastDeleted]);
    setLastDeleted([]);
  };

  return (
    <div className="remove-node-page">
      <h1>Remove Node</h1>
      <hr />
      <h2>Current node</h2>
      <AtomIcon />

      <div className="label-container">Choose your Node to Remove</div>
      
      <div className="filter-group">
        <input 
          type="text" 
          placeholder="Enter Node name" 
          className="filter-input"
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
        />
        <button onClick={handleListViewClick} className="list-view-btn">
          <FontAwesomeIcon icon={faList} />
        </button>
      </div>

      {showComponents && (
        <div className="components-list">
          {filteredComponents.map(comp => (
            <div key={comp} className="component-container">{comp}</div>
          ))}
        </div>
      )}

      <button className="primary-btn" onClick={handleDeleteNodes}>Delete nodes</button>
      <button className="secondary-btn" onClick={handleCancel}>Cancel</button>
      <Link to="/" className="back-btn-link">Back</Link>
    </div>
  );
}

export default RemoveNode;