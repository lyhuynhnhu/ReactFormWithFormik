// import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Parent from './views/Parent/Parent';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Parent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
