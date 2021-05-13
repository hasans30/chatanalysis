import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import './App.css';
import Navbar from './components/navbar2/Navbar';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import 'office-ui-fabric-react/dist/css/fabric.css';
import NoData from "./components/no-data/NoData";
import MonthlyReport from "./features/MonthlyReport";

function App() {
  initializeIcons();
  return (
    <BrowserRouter >
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          position: "absolute",
          flexWrap: "wrap",
          left: "20%"
        }}
      >
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
      </div>
    </BrowserRouter>
  );
}

export default App;
