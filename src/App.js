import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import Table from "./containers/Table/Table";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Table></Table>
        </Layout>
      </div>
    );
  }
}

export default App;
