import React from 'react';


export default function Form() {
  return (
      <>
        <div className="form">
          <div> 
            <span className="icon icon-move"></span>
          </div>
          <div className="search-text">   <span>Enter movie name</span></div>
        </div>
        <button type="submit" className="button">
        <span className="icon icon-search"></span>
          </button>
    </>
  );
}

