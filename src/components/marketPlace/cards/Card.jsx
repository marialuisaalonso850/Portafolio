import React, { useState } from "react";

const Card = ({ product, addItem, addedItems }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddItem = () => {
    addItem(product);
    setIsAdded(true);
  };

  const isProductAdded = addedItems.some((addedItem) => addedItem.id === product.id);

  return (
    <div className="border rounded-lg overflow-hidden shadow-md mx-4 my-6 max-w-lg h-[500px] relative bg-white">
           <button
       className={`absolute right-0 py-1 text-white rounded-full cursor-pointer text-1xl font-bold bg-slate-700   border-slate-950`}
       style={{
         width: "40px", 
         height: "40px",
         display: "flex",
         justifyContent: "center", 
         alignItems: "center", 
       }}
       onClick={handleAddItem}
     >
       {isProductAdded ? "✔" : "+"}
     </button>
     <img className="w-full h-40 object-cover mx-auto my-4" src={product.image} alt="" />
     
 
      <div className="p-4 h-[60%] flex flex-col justify-between">
        <div className="flex flex-col h-full">
          <h2 className="text-lg font-semibold text-black bg-purple py-2 px-4 rounded-md">{product.category}</h2>
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
