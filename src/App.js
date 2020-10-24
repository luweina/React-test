import React, {useState} from "react";
import Home from "./components/Home";
import about from "./components/About";
import error from "./components/error";
import NavBar from "./components/nav";
import { Route, Switch } from "react-router-dom";
import ThemeContext, { themes } from "./components/theme-context";
import ApiData from "./components/ApiData"

function App(props) {
  const [theme, setTheme] = useState(themes.dark)
  const toggleThemes = () => {
    theme === themes.dark
    ? setTheme(themes.light)
    : setTheme(themes.dark)
  }
  return (
    <div className="todoapp stack-large">
      <ThemeContext.Provider value = {theme}>
      <button onClick={toggleThemes}>Change Theme</button>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={about} />
          <Route path="/api" component={ApiData} />
          <Route component={error} />

        </Switch>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
