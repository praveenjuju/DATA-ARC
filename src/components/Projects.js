// src/components/Projects.js
import React, { useEffect, useState } from 'react';

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/octocat/repos') // Replace with your GitHub username
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <section id="projects" style={{ padding: '40px', textAlign: 'center' }}>
      <h2>Projects</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {repos.slice(0, 5).map(repo => (
          <div key={repo.id} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '10px', width: '250px' }}>
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description"}</p>
            <a href={repo.html_url} target="_blank" rel="noreferrer">View Repo</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
