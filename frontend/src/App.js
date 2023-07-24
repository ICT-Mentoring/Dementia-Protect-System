import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageMain from "./pages/PageMain";
import PageLogin from "./pages/PageLogin";

function App() {
  return (
    <Router>
      <Helmet>
        <title>치매노인 보호 시스템</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<PageMain />} />
        <Route path="/login" element={<PageLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
