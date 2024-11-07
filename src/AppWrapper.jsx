import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { StrictMode } from "react";
import { ThemeProvider } from "./context/themeContext.jsx";
import { createRoot } from "react-dom/client";
import i18n from "./locales/translation.js";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { keycloak } from "../keycloak.config.js";
import App from "./App.js";

const keycloakInitOptions = {
  // onLoad :'login-required',
};

const eventlog = (event, error) => {
  console.log("even", event, error);
};

createRoot(document.getElementById("root")).render(
  <ReactKeycloakProvider
    onEvent={eventlog}
    initOptions={keycloakInitOptions}
    authClient={keycloak}
  >
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </I18nextProvider>
    </StrictMode>
  </ReactKeycloakProvider>
);
