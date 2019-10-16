import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import OrderView from "./views/OrderView";

class ApplicationViews extends Component {

  render() {
    return (
      <>
        <Route path="/ordernow" render={props => {
          return <OrderView />
        }} />
      </>
    )
  }
}

export default ApplicationViews;