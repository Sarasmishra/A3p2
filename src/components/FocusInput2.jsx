// src/components/FocusInput2.jsx

import { useRef, useEffect } from "react";

function FocusInput2() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Focus me on component mount"
        style={{marginTop:"10px" , marginBottom:"10px"}}
      />
    </div>
  );
}

export default FocusInput2;
