import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Chapter from "./pages/Chapter";
import Courses from "./pages/Courses";
import GamePlay from "./pages/GamePlay";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import Scheduler from "./pages/Scheduler";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path="/course/:id" element={<Chapter/>}/>
        <Route path="/play/:id" element={  <GamePlay />}/>
        <Route path="/scheduler" element={<Scheduler />} />
        <Route path="/ranking" element={<Ranking/>} />
      </Routes>
    </div>
  );
}

export default App;
