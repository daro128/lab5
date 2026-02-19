import { All_person } from "./data";
import People from "./components/People";


function App() {
  return (
    <>
    <div>
      <h1 className="header">ALL Of My teamate</h1>
    </div>
    
    <div className="card">
      <ul className="each_card">
        {All_person.map((person) => (
        <People key={person.id} people={person} />
      ))}
      </ul>
    </div>
    </>
  );
}

export default App;
