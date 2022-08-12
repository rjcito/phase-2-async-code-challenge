import MovieContainer from "./Components/MovieContainer";
import Form from "./Components/Form";
import './App.css';
import {useState} from 'react'

function App() {

  const [hidden, setHidden] = useState(false)

  return (
    <div className="app">
      <div className="sidebar">
        <button>Show/hide form</button>
        {hidden ? null : <Form />}
      </div>
      <MovieContainer />
      
    </div>
  );
}

export default App;