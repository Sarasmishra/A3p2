// src/components/ChangeColor2.jsx

import { useEffect, useRef } from "react";

function ChangeColor2() {
  const divRef = useRef(null);

  const handleChangeColor = () => {
        divRef.current.style.backgroundColor = "Pink"
        
  };

  return (
    <div>
      <div
        ref={divRef}
        style={{ width: "100px", height: "100px", marginTop:"10px" ,marginBottom:"10px" , backgroundColor: "red" }}
      >
        Color Box
      </div>
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  );
}

export default ChangeColor2;
