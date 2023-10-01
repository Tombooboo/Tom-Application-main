import React from 'react';

function AtomIcon() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      {/* Background circle */}
      <circle cx="100" cy="100" r="95" fill="none" stroke="black" strokeWidth="2" />

      {/* Orbit ellipses */}
      <ellipse cx="100" cy="100" rx="90" ry="50" fill="none" stroke="black" strokeWidth="1" />
      <ellipse cx="100" cy="100" rx="50" ry="90" fill="none" stroke="black" strokeWidth="1" />
      <ellipse cx="100" cy="100" rx="70" ry="70" fill="none" stroke="black" strokeWidth="1" />

      {/* Central dot */}
      <circle cx="100" cy="100" r="5" fill="black" />
    </svg>
  );
}

export default AtomIcon;
