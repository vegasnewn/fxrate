import React from "./_snowpack/pkg/react.js";
import {Spinner} from "./Spinner.js";
import useSWR from "./_snowpack/pkg/swr.js";
const fetcher = async (currencyCode) => {
  const url = `https://api.exchangeratesapi.io/latest?base=${currencyCode}`;
  const res = await fetch(url);
  return await res.json();
};
const Rates = ({currencyCode}) => {
  const {data} = useSWR(currencyCode, fetcher);
  if (!data) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "flex flex-col items-center h-screen justify-evenly"
    }, /* @__PURE__ */ React.createElement(Spinner, null), /* @__PURE__ */ React.createElement(Spinner, null));
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", {
    className: "mb-4 text-lg font-bold text-center text-blue-600 sm:text-xl md:text-2xl"
  }, "Rates for ", currencyCode, " (", data.date, ")"), /* @__PURE__ */ React.createElement("ul", {
    className: "ml-8 sm:ml-10 md:ml-12"
  }, Object.entries(data.rates).map(([code, rate]) => /* @__PURE__ */ React.createElement("li", {
    key: code,
    className: "my-2 sm:text-lg md:text-xl"
  }, /* @__PURE__ */ React.createElement("strong", null, code, ": "), " ", rate))));
};
export {Rates};
