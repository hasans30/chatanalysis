import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import './App.css';
import Navbar from './components/navbar2/Navbar';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import 'office-ui-fabric-react/dist/css/fabric.css';
import NoData from "./components/no-data/NoData";
import MonthlyReport from "./features/MonthlyReport";
import DailyTrendReport from "./features/DailyTrendReport";
import WordCloudReport from "./features/WordCloudReport";
import AdminReport from "./features/AdminReport";

import { useQuery } from '@apollo/client';
import { GET_APP_STATE } from './operations/queries/getAppState';

function App() {
  initializeIcons();
  // use local app state example
  const appStateResult = useQuery(GET_APP_STATE);
  console.log(`app state ${appStateResult.data.appState.org}`)

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
          <Route exact path='/admin-reports' >
            <AdminReport />
          </Route>
          <Route path='*' component={NoData} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
