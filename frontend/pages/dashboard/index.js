import React, { Component } from "react";
import DashBoardContainer from "../../components/DashBoardContainer";
import Head from "next/head";

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Head>
        <link rel="stylesheet" type="text/css" href="../../static/css/dashboard.css"></link>
        </Head>
        
        <DashBoardContainer />
      </React.Fragment>
    );
  }
}

export default Dashboard;
