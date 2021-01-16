import './App.css';
import axios from './axios';
import AdminPanel from './Components/Admin/AdminPanel';

function App() {
  // {
  //   axios.get('/projects/Advanced.json')
  //     .then(res => console.log(res.data))
  // }
  return (
    <div className="App">
      <AdminPanel />
    </div>
  );
}

export default App;
