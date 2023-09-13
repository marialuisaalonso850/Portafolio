import React from "react";

const Button = ({ num, click }) => {
  const isCartEmpty = num === 0;
  const buttonClassName = isCartEmpty ? "bg-red-500 text-white" : "bg-green-500 text-white";

  return (
    <button
      className={`px-4 py-2 rounded-full border border-black ${buttonClassName}`}
      onClick={() => click(!isCartEmpty)}
    >
      <span>{num}</span> {isCartEmpty ? "Empty" : num === 1 ? "Product" : "Products"}
    </button>
  );
};

export default Button;
