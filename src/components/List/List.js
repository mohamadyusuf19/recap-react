import React from "react";
import "./List.css";
const List = ({ nomor, email }) => {
  return (
    <div className="card">
      <p>
        {nomor}.{email}
      </p>
    </div>
  );
};

export default List;
