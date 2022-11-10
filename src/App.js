import "./App.css";
import { Route, Routes } from "react-router-dom";
import All from "./Pages/All";
import Faviorites from "./Pages/Faviorites";
import About from "./Pages/About";
import Layout from "./Components/Layout/Layout";
import AuthPage from "./Pages/AuthPage";
import Customize from "./Pages/Customize";

// import Todos from "./Components/Todos";
// import LoginFrom from "./Component/LoginFrom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/favorites" element={<Faviorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/customize" element={<Customize />} />
      </Routes>
    </Layout>
  );
}

export default App;
