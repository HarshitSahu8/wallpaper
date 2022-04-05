import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cards from "../cards";
import DetailedInfo from "../DetailedInfo";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Cards} />
        <Route exact path="/Detail/:id" component={DetailedInfo} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;

// <div
//   style={{
//     display: "flex",
//     alignItems: "center",
//     flexDirection: "column",
//   }}
// >
//   <h2>Wallpaper List</h2>
//   <Cards />
// </div>;
