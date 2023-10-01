import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'

function AtomIcon() {
    return (
        <img src="https://i.ibb.co/jM29XDw/node.png" alt="node" className="atom-image" />
    );
}

function Homepage() {
  return (
    <div className="home-page">
      <h1>Node Tool</h1>
      <hr />
      <h2>Current node</h2>
      <AtomIcon />
      
      <div className="buttons">
        <Link to="/add-new-node">
          <button>Add New Node</button>
        </Link>
        
        <Link to="/remove-node">
          <button>Remove Node</button>
        </Link>

        <Link to="/Modify-node">
        <button>Modify Node</button> 
        </Link>
      
        <Link to="/draw-network-graph">
        <button>Draw Network Graph</button>
        </Link>
        

        <Link to="/close-program">
        <button>Close Program</button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
