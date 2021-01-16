import * as __SNOWPACK_ENV__ from './_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React, {StrictMode} from "./_snowpack/pkg/react.js";
import {render} from "./_snowpack/pkg/react-dom.js";
import {App} from "./App.js";
import "./index.css.proxy.js";
render(/* @__PURE__ */ React.createElement(StrictMode, null, /* @__PURE__ */ React.createElement(App, null)), document.getElementById("root"));
if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
}
