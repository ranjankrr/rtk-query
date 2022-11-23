import "antd/dist/antd.css";
import { Layout } from "antd";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Students from "./pages/student/students";
import AddStudent from "./pages/student/add-student";
import EditStudent from "./pages/student/edit-student";
import Student from "./pages/student/student";
const { Content } = Layout;

function App() {
  return (
    <div className="App">
    <Router>
      <Layout className="layout-wrapper">
        <header
          style={{
            display: "flex",
            justifyContent:"center",
            alignItems: "center",
          }}
        >
          <Link className="btn-add" to="/students/add">
            Add User
          </Link>
        </header>
        <Content className="content-wrapper" style={{ padding: "20px 50px" }}>
          <Switch>
            <Route exact path="/" component={Students} />
            <Route exact path="/students/add" component={AddStudent} />
            <Route exact path="/students/:id" component={Student} />
            <Route exact path="/students/edit/:id" component={EditStudent} />
          </Switch>
        </Content>
      </Layout>
    </Router>
    </div>
  );
}

export default App;
