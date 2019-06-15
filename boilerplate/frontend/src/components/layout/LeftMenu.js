import React from "react";
import { Layout, Tabs } from "antd";

const { TabPane } = Tabs;

import Form from "../leads/Form";
import Leads from "../leads/Leads";
import Treaties from "../treaties/Treaties";
import FormForTreaties from "../treaties/FormForTreaties";

function callback(key) {
  console.log(key);
}

class LeftMenu extends React.Component {
  render() {
    return (
      <Layout>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Продам" key="1">
            <div className="container">
              <Leads />
            </div>
          </TabPane>
          <TabPane tab="Куплю" key="2">
            <div className="container">
              <Treaties />
            </div>
          </TabPane>
          <TabPane tab="Подать объявление о продаже" key="3">
            <Form />
          </TabPane>
          <TabPane tab="Подать объявление о покупке" key="4">
            <FormForTreaties />
          </TabPane>
        </Tabs>
      </Layout>
    );
  }
}
export default LeftMenu;
