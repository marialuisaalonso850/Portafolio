import React from "react";
import Card from "./Card";

const CardBody = ({ products, addItem, addedItems }) => {
  return (
    <div className="bg-transparent p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Card
              key={product.id}
              product={product}
              addItem={addItem}
              addedItems={addedItems}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardBody;
