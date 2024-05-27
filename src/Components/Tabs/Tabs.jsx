import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function FillExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill style={{fontFamily:"bold",fontSize:"20px"}}
    >
      <Tab eventKey="all" title="All">
        Tab content for All
      </Tab>
      <Tab eventKey="ongoing" title="Ongoing">
        Tab content for Ongoing
      </Tab>
      <Tab eventKey="waiting" title="Waiting">
        Tab content for Waiting
      </Tab>
      <Tab eventKey="unpayed" title="Unpayed" >
        Tab content for Unpayed
      </Tab>
      <Tab eventKey="details" title="Details">
        Tab content for Details
      </Tab>
    </Tabs>
  );
}

export default FillExample;