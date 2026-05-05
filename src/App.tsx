import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import ViewAdPage from "./viewPage";
import TermsAndConditions from "./tems&condition";
import PrivacyPolicy from "./privacyPolicy";

function App() {
  return (
    <div style={{ background: "white" }} className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ad/:id" element={<ViewAdPage />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default App;