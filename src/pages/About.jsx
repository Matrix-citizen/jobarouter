import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function About() {
  const [user, setUser] = useState('mario')

  if (!user) {
    return <Navigate to="/" replace={true} />
  }

  return (
    <div className="about">
      <h2>About us</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum laudantium
        dolorum maiores inventore minima debitis, repellat quae, adipisci ut
        assumenda voluptatum asperiores, quaerat suscipit laborum? Beatae
        consectetur incidunt temporibus quam.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum laudantium
        dolorum maiores inventore minima debitis, repellat quae, adipisci ut
        assumenda voluptatum asperiores, quaerat suscipit laborum? Beatae
        consectetur incidunt temporibus quam.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum laudantium
        dolorum maiores inventore minima debitis, repellat quae, adipisci ut
        assumenda voluptatum asperiores, quaerat suscipit laborum? Beatae
        consectetur incidunt temporibus quam.
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}
