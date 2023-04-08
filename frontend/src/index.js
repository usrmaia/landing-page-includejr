import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import Services from "./Services";
import Citation from "./Citation";
import AboutUs from "./AboutUs";
import OurClients from "./OurClients";
import Benefits from "./Benefits";
import BudgetForm from "./BudgetForm";
import Contact from "./Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <NavBar />
      <Welcome />
    </div>
    <Services />
    <Citation />
    <AboutUs />
    <OurClients />
    <Benefits />
    <BudgetForm />
    <Contact />
  </React.StrictMode>
);
