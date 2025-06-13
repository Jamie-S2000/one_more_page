import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./api/axiosDefaults";
import Register from "./pages/auth/Register";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/login" element={<h1>Log in</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="*" element={<p>Page not found!</p>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
