import React from "react";

const clearButton = (props) => {
    function handleClick(e) {
        props.clear();
      }

    return (
        <button
            type="button"
            className="btn toggle-btn"
            onClick={handleClick}>

                <span>Clear</span>


        </button>



      );
}

export default clearButton