import Layout from "./components/layout";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailedInfo from "./components/DetailedInfo";
import Home from "./Pages/Home";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/" component={Home}></Route>
          <Route path="/DetailedInfo/:id" component={DetailedInfo}></Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
