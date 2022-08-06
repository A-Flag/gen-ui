// import logo from './logo.svg';

import './App.css';
import { Button } from 'antd';
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import Login from './pages/login/index.jsx';
import Admin from './pages/Admin/index'
//将所有 Switch 改为 Routes，Redirect 改为 Navigate ，withRouter改为 useNavigate 


function App() {
  return (
    <div className="App">
      {/* <Button type="primary">Button1</Button> */}
      <BrowserRouter>
        <Switch>
            <Route exact component={Login} path="/"></Route>
            <Route exact component={Login} path="/login"></Route>
            <Route  component={Admin}  path="/index"></Route>
          {/* <Route exact path="/" element={<Login />} />
          <Route exact path="Login" element={<Login />} />
          <Route path="Admin" element={<Admin />} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


