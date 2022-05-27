import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { HomeScreen, ProductScreen } from "./screens";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">borneo</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
