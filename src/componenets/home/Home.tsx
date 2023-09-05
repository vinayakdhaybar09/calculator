import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { CalculaterBox, ActionButton } from "./home.style";
import ButtonTab from "../button/ButtonTab";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);

  const handleCalculateResult = () => {
    try {
      const calculatedResult = eval(inputValue);
      console.log(calculatedResult);
      setInputValue(calculatedResult.toString());
    } catch (error) {
      setInputValue("Error...");
    }
  };

  const handleAllClear = () => {
    setInputValue("");
  };

  const handleClearLast = () => {
    setInputValue(inputValue.slice(0, -1));
  };
  return (
    <CalculaterBox>
      {/* <Box sx={{}}> */}
      <Grid container spacing={1}>
        {/* <Grid item > */}
        <input
          data-testid="inputBox"
          placeholder="0"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          inputMode="none"
          type="string"
          style={{
            width: "100%",
            padding: "20px 20px",
            outline: "none",
            fontSize: "30px",
            fontWeight: "600",
            textAlign: "right",
            borderRadius: "4px",
            border: "none",
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
            // margin: "0",
          }}
        />
        {/* </Grid> */}
        <Grid item xs={3}>
          <ButtonTab btnValue={"AC"} handleAllClear={handleAllClear} />
        </Grid>
        <Grid item xs={3}>
          <ButtonTab btnValue={"Clear"} handleClearLast={handleClearLast} />
        </Grid>
        <Grid item xs={3}>
          <ButtonTab btnValue={"/"} setInputValue={setInputValue} />
        </Grid>
        <Grid item xs={3}>
          <ButtonTab btnValue={"*"} setInputValue={setInputValue} />
        </Grid>
        <Grid item xs={3}>
          <ButtonTab btnValue={"7"} setInputValue={setInputValue} />
        </Grid>
        <Grid item xs={3}>
          <ButtonTab btnValue={"8"} setInputValue={setInputValue} />
        </Grid>
        <Grid item xs={3}>
          <ButtonTab btnValue={"9"} setInputValue={setInputValue} />
        </Grid>
        <Grid item xs={3}>
          <ButtonTab btnValue={"-"} setInputValue={setInputValue} />
        </Grid>
        <Grid item xs={3}>
          <ButtonTab btnValue={"4"} setInputValue={setInputValue} />
        </Grid>
        <Grid item xs={3}>
          <ButtonTab btnValue={"5"} setInputValue={setInputValue} />
        </Grid>
        <Grid item xs={3}>
          <ButtonTab btnValue={"6"} setInputValue={setInputValue} />
        </Grid>
        <Grid item xs={3}>
          <ButtonTab btnValue={"+"} setInputValue={setInputValue} />
        </Grid>
        <Grid item xs={3}>
          <ButtonTab btnValue={"1"} setInputValue={setInputValue} />
        </Grid>
        <Grid item xs={3}>
          <ButtonTab btnValue={"2"} setInputValue={setInputValue} />
        </Grid>
        <Grid item xs={3}>
          <ButtonTab btnValue={"3"} setInputValue={setInputValue} />
        </Grid>
        <Grid item xs={3}>
          <ButtonTab btnValue={"."} setInputValue={setInputValue} />
        </Grid>
        <Grid item xs={6}>
          <ButtonTab btnValue={"0"} setInputValue={setInputValue} />
        </Grid>
        <Grid item xs={6}>
          <ButtonTab
            btnValue={"="}
            handleCalculateResult={handleCalculateResult}
          />
        </Grid>
      </Grid>
      {/* </Box> */}
    </CalculaterBox>
  );
};

export default Home;
