import React, { Component } from "react";
import Header from "./components/Header";
import Images from "./components/Images";
import Image from "./components/Image";
import "./css/app.css";
import "./css/image.css";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { Route, BrowserRouter, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <div>
              <Header />
            </div>
            <Switch>
              <Route exact path='/' component={Images}/>
              <Route path='/:nasa_id' component={Image} />
            </Switch>
        </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

