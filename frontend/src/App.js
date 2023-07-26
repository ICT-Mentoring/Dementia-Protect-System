import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageMain from "./pages/PageMain";
import PageLogin from "./pages/PageLogin";
import PageUserInfo from "./pages/PageUserInfo";

function App() {
  return (
    <Router>
      <Helmet>
        <title>치매노인 보호 시스템</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<PageMain />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/user/:id" element={<PageUserInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
