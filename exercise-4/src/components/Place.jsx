export default function Place({Place}) {
  return (
    <li key={Place.id} className="place-item">
      <button>
        <img src={Place.image.src} alt={Place.image.alt} />
        <h3>{Place.title}</h3>
      </button>
    </li>
  );
}
