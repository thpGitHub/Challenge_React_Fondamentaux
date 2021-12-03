import { useContext } from "react";
import "./DivPage.css";
import DivComponent from "../Components/DivComponent";
import { DivContext } from "../Context/DivContext.js";

export default function DivPages() {
  const { divsOrders } = useContext(DivContext);

  console.log("divvvvvorder", divsOrders);

  return (
    <div id="container">
      {divsOrders.map((divOrder, index) => (
        <DivComponent order={divOrder} indexDiv={index} key={index + 1}>
          élément {index + 1}
        </DivComponent>
      ))}
      {/* <button onClick={()=>changeDivOrder()}>+</button> */}
      {/* <DivComponent>toto</DivComponent> */}
    </div>
  );
}
