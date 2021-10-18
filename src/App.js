import { useEffect, useState } from "react";
import { getAll } from "./api/ProductAPI";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import Bang from "./Bang";
import "bootstrap/dist/css/bootstrap.css";
export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // getAll().then((response) => setProducts(response.data));
    fetch("https://615dd9d812571a0017207926.mockapi.io/api/v1/meo")
      .then(response => response.json())
      .then(data => setProducts(data));
    console.log(products);
  }, []);
  const onHandleAdd = (product) => {
    setProducts([...products, product]);
  };
  const onHandleDelete = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };
  const onHandleUpdate = (product) => {
    const newProducts = products.map((item) =>
      item.id === product.id ? product : item
    );
    setProducts(newProducts);
  };
  return (
    <div className="App">
      <Routes
        products={products}
        onAdd={onHandleAdd}
        onDelete={onHandleDelete}
        onUpdate={onHandleUpdate}
      />
      {/* <Bang products={products}
        // products={products}
        onAdd={onHandleAdd}
        onDelete={onHandleDelete}
        onUpdate={onHandleUpdate}
      /> */}
    </div>
  );
}
