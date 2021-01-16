import React, {useEffect, useState} from "./_snowpack/pkg/react.js";
import Modal from "./_snowpack/pkg/react-modal.js";
import {Rates} from "./Rates.js";
import {Spinner} from "./Spinner.js";
Modal.setAppElement("#root");
const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState([]);
  const [loading, setLoading] = useState(true);
  const codes = ["AUD", "NZD", "USD", "EUR", "GBP", "CAD", "JPY"];
  useEffect(() => {
    const fetchAll = async (codes2) => {
      const results = await Promise.all(codes2.map((code) => fetch(`https://api.exchangeratesapi.io/latest?base=${code}`)));
      const data = await Promise.all(results.map((result) => result.json()));
      setCurrencies(data);
      setLoading(false);
    };
    fetchAll(codes);
  }, []);
  const handleClick = (e) => {
    const data = currencies.filter((currency) => currency.base === e.target.innerText);
    setSelectedCurrency(data);
    setModalOpen(true);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-full"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "m-8 text-2xl font-semibold text-center text-blue-600 sm:m-10 md:m-12 sm:text-3xl md:text-4xl"
  }, "Exchange Rates"), /* @__PURE__ */ React.createElement("ul", {
    className: "space-y-6 sm:space-y-8 md:space-y-10"
  }, loading && /* @__PURE__ */ React.createElement("div", {
    className: "grid mt-10 sm:mt-14 md:mt-20 gap-y-24 sm:gap-y-28 md:gap-y-36"
  }, /* @__PURE__ */ React.createElement(Spinner, null), /* @__PURE__ */ React.createElement(Spinner, null)), !loading && currencies.map((currency) => /* @__PURE__ */ React.createElement("li", {
    key: currency.base,
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: (e) => handleClick(e),
    className: "px-4 py-2 font-bold text-blue-600 border-2 border-blue-600 sm:px-6 sm:py-3 md:px-8 md:py-4 sm:text-lg md:text-xl rounded-2xl focus:outline-none"
  }, currency.base)))), /* @__PURE__ */ React.createElement("p", {
    className: "mt-20 text-xs text-center sm:mt-24 md:mt-28 sm:text-sm md:text-base"
  }, "\xA9 2021 Vegas Newn"), /* @__PURE__ */ React.createElement(Modal, {
    isOpen: modalOpen,
    onRequestClose: () => setModalOpen(false),
    style: {content: {left: "auto"}}
  }, /* @__PURE__ */ React.createElement(Rates, {
    selectedCurrency: selectedCurrency[0]
  })));
};
export {App};
