import React from "react";
import "../styles/Categories.css";

const Categories = ({ children, title }) => (
  <React.Fragment>
    <div className="categories">
        <h3 class="categories__title">{title}</h3>
        {children}
    </div>
  </React.Fragment>
);

export default Categories;
