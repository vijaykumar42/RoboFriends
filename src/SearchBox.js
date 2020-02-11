import React from "react";
import "./SearchBox.css";

const SearchBox = ({ search, frobots }) => {
  return (
    <div className="ma1">
      <input
        type="text"
        placeholder="search robots..."
        className="input shadow-3"
        search={search}
        fr={frobots}
      />
    </div>
  );
};

export default SearchBox;
