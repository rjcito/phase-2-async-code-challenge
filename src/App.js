import MovieContainer from "./Components/MovieContainer";
import Form from "./Components/Form";
import Home from "./Components/Home";
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {


  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* Add route /movies, which renders <MovieContainer/>
        Add route /movies/new, which renders <Form/> */}
      </Routes>
      
    </div>
  );
}

export default App;