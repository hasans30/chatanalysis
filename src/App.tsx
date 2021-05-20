import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import './App.css';
import Navbar from './components/navbar2/Navbar';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import 'office-ui-fabric-react/dist/css/fabric.css';
import NoData from "./components/no-data/NoData";
import MonthlyReport from "./features/MonthlyReport";
import DailyTrendReport from "./features/DailyTrendReport";
import WordCloudReport from "./features/WordCloudReport";

function App() {
  initializeIcons();
  return (
    <BrowserRouter >
      <Navbar />
      <div>
        <Switch>
          <Redirect exact from='/' to='/monthly-compact' strict />
          <Route exact path="/monthly-compact" >
            <MonthlyReport compact />
          </Route>
          <Route exact path="/monthly-all" >
            <MonthlyReport compact={false} />
          </Route>
          <Route exact path="/daily" >
            <DailyTrendReport />
          </Route>
          <Route exact path='/wordcloud' >
            <WordCloudReport />
          </Route>
          <Route path='*' component={NoData} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
