import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
const AppRoutes = () => {
  return (
    <div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
};

export default AppRoutes;
