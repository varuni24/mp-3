import { useState } from "react";

export default function useCalculator() {
  const [res, setRes] = useState("");
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");

  const compute = (op) => {
    const a = Number(n1);
    const b = Number(n2);
    let res = 0;

    switch (op) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        res = b !== 0 ? a / b : "Cannot divide by zero";
        break;
      case "**":
        res = 1;
        for (let i = 0; i < b; i++) res *= a;
        break;
      default:
        res = 0;
    }
    setRes(res);
  };

  const clear = () => {
    setN1("");
    setN2("");
    setRes("");
  };

  return { n1, n2, res, setN1, setN2, compute, clear };
}
