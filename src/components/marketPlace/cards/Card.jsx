import React, { useState } from "react";

const Card = ({ product, addItem, addedItems }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddItem = () => {
    addItem(product);
    setIsAdded(true);
  };

  const isProductAdded = addedItems.some((addedItem) => addedItem.id === product.id);

  return (
    <div className="border rounded-lg overflow-hidden shadow-md mx-4 my-6 max-w-lg h-[400px] relative bg-white">
      <img className="w-full h-40 object-cover mx-auto my-4" src={product.image} alt="" />
      <button
        className={`absolute top-0 right-0  text-white rounded-full  cursor-pointer text-3xl font-bold bg-gray-700`}
        style={{ maxWidth: "10%", maxHeight: "15%" }}
        onClick={handleAddItem}
      >
        {isProductAdded ? "✔" : "+"}
      </button>
      <div className="p-4 h-[50%] flex flex-col justify-between">
        <div className="flex flex-col h-full">
          <h2 className="text-lg font-semibold text-teal-600 bg-teal-200 py-2 px-4 rounded-md">{product.category}</h2>
          <h4 className="text-md text-gray-800">{product.title}</h4>
          <div className="overflow-hidden flex-grow">
            <p className="text-sm text-justify h-14 mx-8 text-gray-600">{product.description}</p>
          </div>
          <div className="mt-2 text-right">
            <span className="text-red-600 font-bold">
              Price: <span className="text-lg">${product.price}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
