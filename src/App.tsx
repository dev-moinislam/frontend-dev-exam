import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Header from "./components/Header";


function App() {
  
   return(
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books/:id" element={<BookDetails/>} />
      </Routes>
    </>
  );
}

export default App;