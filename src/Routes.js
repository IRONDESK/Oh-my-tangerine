import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";
import ChatRoom from "./pages/Chat/ChatRoom";
import Modification from "./pages/Modification/Modification";
import Profile from "./pages/Profile/Profile";
import Setting from "./pages/Profile/Setting";
import Post from "./pages/Post/Post";
import Upload from "./pages/Upload/Upload";
import UploadRework from "./pages/Upload/UploadRework";
import Followers from "./pages/Follow/Followers";
import Registration from "./pages/Registration/Registration";
import Search from "./pages/Search/Search";
import LoginEmail from "./pages/Login/LoginEmail";
import LoginMembership from "./pages/Login/LoginMembership";
import Followings from "./pages/Follow/Followings";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/chat" component={Chat} />
            <Route exact path="/chat/:id" component={ChatRoom} />
          <Route exact path="/modification" component={Modification} />
          <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/setting" component={Setting} />
          <Route exact path="/post/:id" component={Post} />
          <Route exact path="/upload" component={Upload} />
            <Route exact path="/UploadRework" component={UploadRework} />
          <Route exact path="/followers" component={Followers} />
            <Route exact path="/followers/:id" component={Followers} />
          <Route exact path="/followings" component={Followings} />
            <Route exact path="/followings/:id" component={Followings} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/login/email" component={LoginEmail} />
          <Route exact path="/login/membership" component={LoginMembership} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;