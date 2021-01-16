import React from "./_snowpack/pkg/react.js";
const Rates = ({selectedCurrency: {base, date, rates}}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", {
    className: "mb-4 text-lg font-bold text-center text-blue-600 sm:text-xl md:text-2xl"
  }, "Rates for ", base, " (", date, ")"), /* @__PURE__ */ React.createElement("ul", {
    className: "ml-8 sm:ml-10 md:ml-12"
  }, Object.entries(rates).map(([code, rate]) => /* @__PURE__ */ React.createElement("li", {
    key: code,
    className: "my-2 sm:text-lg md:text-xl"
  }, /* @__PURE__ */ React.createElement("strong", null, code, ": "), " ", rate))));
};
export {Rates};
