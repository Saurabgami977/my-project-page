import { Route, Switch } from 'react-router-dom';
import './App.css';

import AdminPanel from './Containers/Admin/AdminPanel';
import Homepage from './Containers/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Route path="/" component={Navbar} />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/admin" exact component={AdminPanel} />
      </Switch>
    </div >
  );
}

export default App;
