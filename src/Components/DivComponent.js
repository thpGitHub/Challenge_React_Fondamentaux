import { Children, useContext } from "react";
import "./DivComponent.css";
import { DivContext } from "../Context/DivContext.js";
import { IconContext } from "react-icons";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export default function DivComponent({ children, order, indexDiv }) {
  const { divsOrders, changeDivOrderLeft, changeDivOrderRight } =
    useContext(DivContext);

  return (
    <div className="element" style={{ order: order }}>
      <IconContext.Provider value={{ className: "react-icons" }}>
        {children}
        {order > 1 && (
          <button onClick={() => changeDivOrderLeft(indexDiv)}>
            <BsFillArrowLeftCircleFill />
          </button>
        )}
        {order < 8 && (
          <button onClick={() => changeDivOrderRight(indexDiv)}>
            <BsFillArrowRightCircleFill />
          </button>
        )}
      </IconContext.Provider>
    </div>
  );
}
