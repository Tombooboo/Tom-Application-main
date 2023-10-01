import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import AddNewNode from './AddNewNode';
import RemoveNode from './RemoveNode';
import ModifyNode from './ModifyNode';
import DrawNetworkGraph from './DrawNetworkGraph';
import CloseProgram from './CloseProgram';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/add-new-node" element={<AddNewNode />} />
        <Route path="/remove-node" element={<RemoveNode />} />
        <Route path="/modify-node" element={<ModifyNode />} />
        <Route path="/draw-network-graph" element={<DrawNetworkGraph />} />
        <Route path="/close-program" element={<CloseProgram />} /> 
      </Routes>
    </div>
  );
}

export default App;

