import "./App.css";
import { Route, Routes } from "react-router-dom";
import All from "./Pages/All";
import Faviorites from "./Pages/Faviorites";
import About from "./Pages/About";
import Layout from "./Components/Layout/Layout";

// import Todos from "./Components/Todos";
// import LoginFrom from "./Component/LoginFrom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/favorites" element={<Faviorites />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
