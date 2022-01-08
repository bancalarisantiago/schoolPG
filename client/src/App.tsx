//from modules
import { Routes, Route } from "react-router";

//pages
//import Login from "./pages/Login";
import FormLogin from "./components/Desktop/FormLogin/FormLogin";

function App() {
  return (
    <div>
      <FormLogin />
      {/* <Routes>
        <Route path="/" element={<Login />} />
      </Routes> */}
    </div>
  );
}

export default App;
