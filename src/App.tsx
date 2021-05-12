import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import './App.css';
import Navbar from './components/navbar/Navbar';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import 'office-ui-fabric-react/dist/css/fabric.css';
import NoData from "./components/no-data/NoData";
import MonthlyReport from "./features/MonthlyReport";

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
            <Switch>
              <Redirect exact from='/' to='/monthly-compact' strict />
              <Route exact path="/monthly-compact" >
                <MonthlyReport compact />
              </Route>
              <Route exact path="/monthly-all" >
                <MonthlyReport compact={false} />
              </Route>
              <Route path='*' component={NoData} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
