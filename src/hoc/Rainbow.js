import React from "react";
// we are using this function to wrap a component
// in this case, we will wrap about page
const Rainbow = (WrappedComponent) => {
  const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  const RandomColor = colors[Math.floor(Math.random() * 6)];
  const className = RandomColor + "-text";
  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
// we take the spread operateor to take in the props in the wrapped component
