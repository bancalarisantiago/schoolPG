//css
import styles from "./App.module.css";
//from modules
import { Routes, Route } from "react-router";

//pages
import Login from "./pages/Desktop/Login/Login";
import Home from './pages/Desktop/Home/Home'

function App() {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
