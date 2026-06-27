// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Product name="iphone" price={70000} color="blue" />
      {/* Data passing from parent to child */}
    </>
  );
}

export default App;
