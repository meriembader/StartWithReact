import "./App.css";
import products from "./products.json";
import Product from "./components/Product";
import styled from "styled-components";
import Header from "./components/Header";
function App() {
  return (
    <>
    <Header></Header>
    <AppFrame className="App">
    {products.map((product, index) => (
    <Product product={product} key={index}></Product>
    ))}
    </AppFrame>
    </>
    );
    }

    const AppFrame = styled.div`
    text-align: center;
    display: flex;
    `;
export default App;