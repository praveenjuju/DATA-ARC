//task 1
/*import React from 'react';
import './App.css';
import photo from './photo.JPG'; // Place your image in src folder

function App() {
  return (
    <div className="App">
      <h1>Hello React! 👋</h1>
      <h2>I’m Juju</h2>
      <img src={photo} alt="Juju" style={{ width: '200px', borderRadius: '10px' }} />
    </div>
  );
}

export default App;*/

//task 2
/*import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import photo from './photo.JPG';
import photo1 from './photo1.JPG';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>Our Team</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <TeamMemberCard name="Juju" role="Frontend Developer" photo={photo} />
        <TeamMemberCard name="parthi" role="Backend Developer" photo={photo1} />
      </div>
    </div>
  );
}

export default App;*/

//task 3

/*import React, { useState } from 'react';
import './App.css'; // ✅ Import the CSS

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: task,
      date: new Date().toLocaleDateString(),
      done: false
    };

    setTodos([...todos, newTodo]);
    setTask('');
  };

  const toggleDone = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1>📝 To-Do List</h1>

      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {todos.length > 0 ? (
        <div className="table-wrapper">
          <table className="todo-table">
            <thead>
              <tr>
                <th>✔️</th>
                <th>Task</th>
                <th>Date</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {todos.map(todo => (
                <tr key={todo.id} className={todo.done ? 'done' : ''}>
                  <td><input type="checkbox" checked={todo.done} onChange={() => toggleDone(todo.id)} /></td>
                  <td>{todo.text}</td>
                  <td>{todo.date}</td>
                  <td><button onClick={() => handleDelete(todo.id)}>❌</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No tasks added yet.</p>
      )}
    </div>
  );
}

export default App;*/


//task 5
/*import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching data on component mount
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching users:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>User List from API</h1>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          marginTop: '30px'
        }}>
          {users.map(user => (
            <div key={user.id} style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '16px',
              width: '200px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
            }}>
              <h3>{user.name}</h3>
              <p><b>Email:</b> {user.email}</p>
              <p><b>City:</b> {user.address.city}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;*/

// task 6



/*import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;*/

