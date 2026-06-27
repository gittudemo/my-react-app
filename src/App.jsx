// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";
import Product from "./components/Product";

function App() {
  const obj = {
    ram: "128GB",
    rom: "100GB",
  };
  return (
    <>
      <Product name="iphone 7" price={70000} color="blue" data={obj} />
      <Product name="iphone 8" price={80000} color="black" />
      {/* Data passing from parent to child */}
    </>
  );
}

export default App;
