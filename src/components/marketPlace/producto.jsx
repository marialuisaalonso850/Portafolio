import React, { useEffect, useState } from "react";
import CardBody from "./cards/CardBody";
import Button from "./button/Button";
import { Header } from "../Header/Header";
import { Footer } from "../../Footer";


export const Producto = () => {
  const [items, setItem] = useState([]);
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItem(data));
    console.count("hi");
  }, []);

  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }

  return (
    <div>
      <Header /> 
      <div className="bg-transparent min-h-screen">
        <div className="body__container max-w-7xl mx-auto p-4 bg-transparent">
          <div className="nav-right flex items-center bg-transparent">
            <div id="carrito" className="mr-4">
              <img className="w-14 mx-5" src="https://ceicid.es/wp-content/uploads/2017/07/icono-carrito-compra.png" alt="" />
            </div>
            <Button num={addedItems.length} click={setShowAddProducts} />
          </div>
          <CardBody products={items} addItem={addItem} addedItems={addedItems} />
        </div>
      </div>
     <Footer/>
    </div>
  );
};
