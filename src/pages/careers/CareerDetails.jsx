import { useLoaderData } from 'react-router-dom';

export default function CareerDetails() {
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum iure eius eveniet possimus cum. Voluptatibus sequi distinctio nihil dolores nesciunt.</p>
      </div>
    </div>
  )
}

// loader function
export const CareerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch('http://localhost:4000/careers/' + id);

  if (!res.ok) {
    throw Error('Could not find that career');
  }

  return res.json();
}
