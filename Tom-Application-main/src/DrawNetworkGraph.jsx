import React from 'react';
import { Link } from 'react-router-dom';
import './DrawNetworkGraph.css';

function AtomIcon() {
    return (
        <img src="https://i.ibb.co/jM29XDw/node.png" alt="node" className="atom-image" />
    );
}

function DrawNetworkGraph() {

  const handleConnectClick = () => {
    alert("Connected successfully!");
  };

  return (
    <div className="draw-network-graph">
      <h1>Node Tool</h1>
      <hr />
      <h2>Current node</h2>
      <h4>Component 1</h4>
      <AtomIcon />
      <h3> Connected Nodes</h3>
      <h4>Tristan</h4>
      
      <div className="buttons">
        <button onClick={handleConnectClick}>Connect a node</button>
        
        <Link to="/">
          <button>Disconnect a node</button>
        </Link>
      </div>
    </div>
  );
}

export default DrawNetworkGraph;
