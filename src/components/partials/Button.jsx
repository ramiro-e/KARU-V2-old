import React from "react";

const Button = ({ children, type, onClick, classes }) => {

  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 text-neutral-600 hover:text-orange-950  tablet:first:ml-0
      ${classes} link`}
    >
      {children}
    </button>
  );
};

export default Button;
