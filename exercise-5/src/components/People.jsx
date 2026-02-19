export default function People({people}) {
  return (
    <li key={people.id} className="people-item">
      <div className="image">
          <img src={people.img} alt={people.name} />
      </div>
      <h2 className="people-name">{people.name}</h2>
      <div className="mid">
        <p>Gender: {people.gender}</p>
        <p>Address: {people.address}</p>
        <p>Hobbies: {people.hobby.join(", ")}</p>
        <p>{people.description}</p>
      </div>
      <button className="people-button">Learn More</button>
    </li>
  );
}
