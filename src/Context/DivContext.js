import { createContext, useState } from "react";

export const DivContext = createContext([]);

const DivContextProvider = (props) => {
  const [divsOrders, setDivsOrders] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const changeDivOrderLeft = (indexDiv) => {
    const divsOrders2 = [...divsOrders];
    console.log("divsOrders2 = ", divsOrders2);

    const findIndexBefore = divsOrders2.indexOf(divsOrders2[indexDiv] - 1);
    divsOrders2[findIndexBefore] += 1;
    console.log("FindiNDEXBefore", findIndexBefore);
    // divsOrders2[divsOrders2.indexOf(indexDiv-1)]+=1;
    divsOrders2[indexDiv] -= 1;
    console.log("indexDiv = ", indexDiv);
    console.log("divsOrders2 = ", divsOrders2);

    setDivsOrders(divsOrders2);
  };

  const changeDivOrderRight = (indexDiv) => {
    const divsOrders2 = [...divsOrders];
    const findIndexAfter = divsOrders2.indexOf(divsOrders2[indexDiv] + 1);

    divsOrders2[findIndexAfter] -= 1;
    divsOrders2[indexDiv] += 1;
    setDivsOrders(divsOrders2);
  };

  return (
    <DivContext.Provider
      value={{ divsOrders, changeDivOrderLeft, changeDivOrderRight }}
    >
      {props.children}
    </DivContext.Provider>
  );
};

export default DivContextProvider;
