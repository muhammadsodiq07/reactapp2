import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Motts from "./components/Motts/Motts";
import Table from "./components/Table/Table";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Motts />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
