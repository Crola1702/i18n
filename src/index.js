import React from "react";
import ReactDOM from "react-dom";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import { IntlProvider } from "react-intl";

import JobsList from "./components/jobslist";

const userLocale =
  navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language;

const messages =
  userLocale.startsWith("es") === true ? localeEsMessages : localeEnMessages;

ReactDOM.render(
  <IntlProvider locale={userLocale} messages={messages}>
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);
