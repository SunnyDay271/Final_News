import { Routes, Route } from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage"
import NewsPage from "./pages/NewsPage"
import NewsDetail from "./pages/NewsDetail"
import FaqPage from "./pages/FaqPage"
import { useState } from "react";


function App() {
  const [ theme, setTheme ] = useState("")
  return (
          <div>
              <NavbarComponent />
              <Routes>
              <Route path="/" Component={HomePage}/>
              <Route path="/faq" Component={FaqPage}/>
              <Route path="/detail/:id" Component={NewsDetail}/>
              <Route path="/news" Component={NewsPage}/>
              </Routes>
              <FooterComponent />
          </div>
    );
}
 
export default App