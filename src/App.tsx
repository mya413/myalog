import { Routes, Route, HashRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Basic from "./layout/Basic";
import Readme from "./pages/Readme";
import Portfolio from "./pages/Portfolio";

export default function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Basic />}>
          <Route path="/" element={<Readme />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
