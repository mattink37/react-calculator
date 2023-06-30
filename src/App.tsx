import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import { evaluate } from "./calculator";

function App() {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "lightblue",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <Keypad />
    </Grid>
  );
}

const Keypad = () => {
  const [fieldValue, setFieldValue] = React.useState(0);
  const [value1, setValue1] = React.useState<number | undefined>(undefined);
  const [value2, setValue2] = React.useState<number | undefined>(undefined);
  const [operator, setOperator] = React.useState("");
  const onNumberClick = (number: number) => {
    const newFieldValue = fieldValue * 10 + number;
    setFieldValue(newFieldValue);
    updateValues(newFieldValue);
  };

  const updateValues = (value: number) => {
    if (operator === "") {
      setValue1(value);
    }
    if (operator !== "") {
      setValue2(value);
    }
  };
  const resetOperatorColors = () => {
    const operators = ["+", "-", "*", "/"].filter((op) => op !== operator);
    operators.forEach((operator) => {
      const element = document.getElementById(operator);
      if (element) {
        element.style.backgroundColor = "#1976d2";
      }
    });
  };
  useEffect(() => {
    if (operator !== "") {
      setFieldValue(0);
      const element = document.getElementById(operator);
      if (element) {
        element.style.backgroundColor = "red";
      }
    }
    resetOperatorColors();
  }, [operator]);
  return (
    <Card sx={{ height: "30vh", width: "40vh" }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField value={fieldValue} sx={{ width: "100%" }} />
          </Grid>
          {[7, 8, 9]
            .map((number) => {
              return (
                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    sx={{ width: "100%" }}
                    onClick={() => onNumberClick(number)}
                  >
                    {number}
                  </Button>
                </Grid>
              );
            })
            .concat(
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  sx={{ width: "100%" }}
                  onClick={() => {
                    setFieldValue(0);
                    updateValues(fieldValue);
                  }}
                >
                  C
                </Button>
              </Grid>
            )}
          {[4, 5, 6]
            .map((number) => {
              return (
                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    sx={{ width: "100%" }}
                    onClick={() => onNumberClick(number)}
                  >
                    {number}
                  </Button>
                </Grid>
              );
            })
            .concat(
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  sx={{ width: "100%" }}
                  id="/"
                  onClick={() => {
                    setOperator("/");
                  }}
                >
                  ÷
                </Button>
              </Grid>
            )}
          {[1, 2, 3]
            .map((number) => {
              return (
                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    sx={{ width: "100%" }}
                    onClick={() => onNumberClick(number)}
                  >
                    {number}
                  </Button>
                </Grid>
              );
            })
            .concat(
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  sx={{ width: "100%" }}
                  id="*"
                  onClick={() => setOperator("*")}
                >
                  ×
                </Button>
              </Grid>
            )}
          <Grid item xs={6}>
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={() => {
                const result = evaluate(value1, value2, operator);
                setFieldValue(result);
                setValue1(result);
                setValue2(undefined);
                setOperator("");
              }}
            >
              =
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              id="+"
              onClick={() => setOperator("+")}
            >
              +
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              id="-"
              onClick={() => setOperator("-")}
            >
              -
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default App;
