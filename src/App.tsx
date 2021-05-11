import { BrowserRouter, Route } from "react-router-dom"
import { Page } from './pages/Page';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import 'office-ui-fabric-react/dist/css/fabric.css';

function App() {
  initializeIcons();
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm1 ms-xl2">
          <Navbar name='test' />
        </div>
        <div className="main-element ms-Grid-col ms-sm11 ms-xl10">
          <BrowserRouter >
            <Route exact path="/" component={Page} />
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
