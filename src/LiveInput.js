import React, { useState } from 'react';

function LiveInput() {
  const [name, setName] = useState('');

  return (
    <div style={{ marginTop: '20px' }}>
      <input
        type="text"
        value={name}
        placeholder="Type your name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name || 'Stranger'}!</p>
    </div>
  );
}

export default LiveInput;
