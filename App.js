import React, {useState} from "./_snowpack/pkg/react.js";
import Modal from "./_snowpack/pkg/react-modal.js";
import {Rates} from "./Rates.js";
Modal.setAppElement("#root");
const currencies = ["AUD", "NZD", "USD", "EUR", "GBP", "CAD", "JPY"];
const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currencyCode, setCurrencyCode] = useState("");
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", {
    className: "m-8 text-2xl font-semibold text-center text-blue-600 sm:m-10 md:m-12 sm:text-3xl md:text-4xl"
  }, "Exchange Rates"), /* @__PURE__ */ React.createElement("ul", {
    className: "space-y-6 sm:space-y-8 md:space-y-10"
  }, currencies.map((currency) => /* @__PURE__ */ React.createElement("li", {
    key: currency,
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: (e) => {
      setModalOpen(true);
      setCurrencyCode(e.target.innerText);
    },
    className: "px-4 py-2 font-bold text-blue-600 border-2 border-blue-600 sm:px-6 sm:py-3 md:px-8 md:py-4 sm:text-lg md:text-xl rounded-2xl focus:outline-none"
  }, currency)))), /* @__PURE__ */ React.createElement("p", {
    className: "mt-20 text-xs text-center sm:mt-24 md:mt-28 sm:text-sm md:text-base"
  }, "\xA9 2021 Vegas Newn"), /* @__PURE__ */ React.createElement(Modal, {
    isOpen: modalOpen,
    onRequestClose: () => setModalOpen(false),
    style: {content: {left: "auto"}}
  }, /* @__PURE__ */ React.createElement(Rates, {
    currencyCode
  })));
};
export {App};
