import React, { useState } from "react";
import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./ui/Footer";
import LandingPage from "./Pages/LandingPage";
import ServicePage from "./Pages/ServicePage";
import CustomSoftwarePage from "./Pages/CustomSoftwarePage";
import MobileAppsPage from "./Pages/MobileAppsPage";
import WebsitePage from "./Pages/WebsitePage";
import RevolutionPage from "./Pages/RevolutionPage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactPage from "./Pages/ContactPage";
import EstimatePage from "./Pages/EstimatePage";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/services"
            render={(props) => (
              <ServicePage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/customsoftware"
            render={(props) => (
              <CustomSoftwarePage
                {...props}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/mobileapps"
            render={(props) => (
              <MobileAppsPage {...props} setSelectedIndex={setSelectedIndex} />
            )}
          />
          <Route
            exact
            path="/websites"
            render={(props) => (
              <WebsitePage {...props} setSelectedIndex={setSelectedIndex} />
            )}
          />
          <Route
            exact
            path="/revolution"
            render={(props) => (
              <RevolutionPage {...props} setValue={setValue} />
            )}
          />
          <Route
            exact
            path="/about"
            render={(props) => <AboutUsPage {...props} setValue={setValue} />}
          />
          <Route
            exact
            path="/contact"
            render={(props) => <ContactPage {...props} setValue={setValue} />}
          />
          <Route
            exact
            path="/estimate"
            render={(props) => <EstimatePage {...props} setValue={setValue} />}
          />
        </Switch>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
