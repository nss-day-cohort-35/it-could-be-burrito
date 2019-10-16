import React, { Component } from 'react'
import TacoList from "../tacos/TacoList";
import OrderList from "../orders/OrderList";

class OrderView extends Component {
  state = {

  }

  render(){

    return(
      <>
      <TacoList />
      <OrderList />
      </>
    )
  }

}

export default OrderView;