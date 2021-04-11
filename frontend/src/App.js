import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ExploresMain from './features/explores/pages/ExploresMain';

function App() {
  return (
    <Router>
      <div className="App">

        <Header />
        <div className="test">
          <Route path='/explore' component={ExploresMain} />
        </div>
      </div>
    </Router >
  );
}

export default App;
