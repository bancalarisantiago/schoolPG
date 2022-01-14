//css
import styles from "./App.module.css";
//from modules
import { Routes, Route } from "react-router-dom";

//pages
import Login from "./pages/Desktop/Login/Login";
import AddSchool from "./components/Admin/AddSchool";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminSchool" element={<AddSchool />} />
      </Routes>
    </div>
  );
}

export default App;
