import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";
import Modification from "./pages/Modification/Modification";
import Profile from "./pages/Profile/Profile";
import Setting from "./pages/Profile/Setting";
import Post from "./pages/Post/Post";
import Upload from "./pages/Upload/Upload";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/modification" component={Modification} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/setting" component={Setting} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/Upload" component={Upload} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
