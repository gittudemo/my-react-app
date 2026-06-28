// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";
import Product from "./components/Product";
// import Items from "./components/Items";

function App() {
  // const obj = {
  //   ram: "128GB",
  //   rom: "100GB",
  // };
  return (
    <>
      <Product name="iphone 7" price={70000} color="blue" />
      <Product name="iphone 8" price={80000} color="black" />
      {/* <Items /> */}
    </>
  );
}

export default App;
