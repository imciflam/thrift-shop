import React from "react"; 
import { Layout, Tabs} from "antd";
 
const { TabPane } = Tabs;

import Form from "../leads/Form";
import Leads from "../leads/Leads";


  function callback(key) {
    console.log(key);
  }

class LeftMenu extends React.Component {
  
  render() {
    return (
      <Layout>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Tab 1" key="1">
            <Form />
          </TabPane>
          <TabPane tab="Tab 2" key="2">
           <div className="container">
            <Leads />
            </div>
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </Layout>
    );
  }
}
export default LeftMenu;
