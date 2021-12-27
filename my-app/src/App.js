import logo from './logo.svg';
import './App.css';

import Profile from "./Components/Profile";
function App() {

  const ArrayOfStudents = [
    { studentName: "salem", isPresent: true },
    { studentName: "ahmed", isPresent: false },
    { studentName: "wafi", isPresent: true },
  ];
  const prudoct={name:'qsfqef',price:'200dt'}
  const person = { firstName: "salem", lastName: "bouaziz" ,adress:'tunis'};
  const arrayOfHobbies = [
    "running",
    "playing football",
    "go to the restaurant",
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <div>
      <Profile
        person={person}
        arrayOfHobbies={arrayOfHobbies}
        ArrayOfStudents={ArrayOfStudents}
      />
    </div>
  );
}

export default App;