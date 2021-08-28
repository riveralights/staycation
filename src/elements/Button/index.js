import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function Button(props) {
  // variabel classname yang berupa array
  // array nya menampung props classname
  const className = [props.className];

  // kalau ada props isPrimary, tambahin btn-primary di array className
  if (props.isPrimary) className.push("btn-primary");
  // kalau ada props isLarge, tambahin btn-lg di array className
  if (props.isLarge) className.push("btn-lg");
  // kalau ada props isSmall, tambahin btn-sm di array className
  if (props.isSmall) className.push("btn-sm");
  // kalau ada props isBlock, tambahin btn-block di array className
  if (props.isBlock) className.push("btn-block");
  // kalau ada props hasShadow, tambahin btn-shadow di array className
  if (props.hasShadow) className.push("btn-shadow");

  const onClick = () => {
    // kalau ada props onClick, jalanin props onClick nya
    if (props.onClick) props.onClick();
  };

  // Cek apakah ada props isDisabled atau isLoading
  if (props.isDisabled || props.isLoading) {
    // kalau ada isDisabled, tambahin disabled di array className
    if (props.isDisabled) className.push("disabled");
    return (
      // kembalikan span dengan classname dan style
      <span className={className.join(" ")} style={props.style}>
        {/* cek isinya, kalau isLoading, span  ini isinya spinner */}
        {props.isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  // cek apakah props type nya bernilai link
  if (props.type === "link") {
    // cek lagi, apakah ada props isExternal
    if (props.isExternal) {
      // kalau ada isExternal, kembaliin tag <a>
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      // kembalin <Link>
      return (
        <Link
          to={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]), // typenya, antara hanya button atau link
  onClick: propTypes.func, // onClick bentuknya berupa function
  href: propTypes.string, // Bentuknya berupa string
  target: propTypes.string,
  className: propTypes.string,
  isDisabled: propTypes.bool, // Bentuknya berupa boolean
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isPrimary: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  isExternal: propTypes.bool,
  hasShadow: propTypes.bool,
};
