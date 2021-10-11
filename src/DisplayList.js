import { handleDisplayData } from "./ourDbFunctions";
import { useState, useEffect } from "react";

const DisplayList = () => {
  const [matchList, setMatchList] = useState([]);
  useEffect(() => {
    handleDisplayData((snapshot) => {
      const data = snapshot.val();
      setMatchList(data);
    });
  }, []);

  return (
    <div>
      <p></p>
    </div>
  );
};

export default DisplayList;
