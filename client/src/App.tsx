//css
import styles from "./App.module.css";
//from modules
import { Routes, Route } from "react-router";

//pages
import Login from "./pages/Desktop/Login/Login";

function App() {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
