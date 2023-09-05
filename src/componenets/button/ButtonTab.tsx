import React from "react";
import { ActionButton } from "../home/home.style";

const ButtonTab = ({
  btnValue,
  setInputValue,
  handleCalculateResult,
  handleAllClear,
  handleClearLast,
}) => {
  const handleBtnClick = () => {
    switch (btnValue) {
      case "Clear":
        handleClearLast();
        break;

      case "AC":
        handleAllClear();
        break;

      case "=":
        handleCalculateResult();
        break;

      default:
        setInputValue((prevInputValue) => prevInputValue + btnValue.toString());
        break;
    }
  };
  return <ActionButton onClick={handleBtnClick}>{btnValue}</ActionButton>;
};

export default ButtonTab;
