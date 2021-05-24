import { BrowserRouter, Route, Switch, useParams } from "react-router-dom"
import './App.css';
import Navbar from './components/navbar2/Navbar';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import 'office-ui-fabric-react/dist/css/fabric.css';
import NoData from "./components/no-data/NoData";
import MonthlyReport from "./features/MonthlyReport";
import DailyTrendReport from "./features/DailyTrendReport";
import WordCloudReport from "./features/WordCloudReport";
import AdminReport from "./features/AdminReport";
import moment from 'moment';
import { useQuery } from '@apollo/client';
import createAppState from './operations/mutations/setAppState';
import { GET_APP_STATE } from './operations/queries/getAppState';
import AppState from "./models/AppState";
import { orgPattern } from "./components/navbar2/SidebarData";


function App() {
  initializeIcons();
  const { org: paramOrg, year: paramYear } = useParams<AppState>();
  //create appstate
  const initialState: AppState = {
    org: paramOrg || process.env.REACT_APP_ORG,
    year: paramYear || moment().year().toString()
  }
  createAppState(initialState);
  // use local app state example
  const { data: { appState: { org, year } } } = useQuery(GET_APP_STATE);
  console.log(`app state ${org} year ${year}`);


  return (
    <BrowserRouter >
      <Navbar />
      <div>
        <Switch>
          <Route exact path={orgPattern} >
            <MonthlyReport compact={false} />
          </Route>
          <Route exact path="/monthly-compact" >
            <MonthlyReport compact />
          </Route>

          <Route exact path={`${orgPattern}/monthly-all`} >
            <MonthlyReport compact={false} />
          </Route>
          <Route exact path="/monthly-all" >
            <MonthlyReport compact={false} />
          </Route>

          <Route exact path={`${orgPattern}/daily`} >
            <DailyTrendReport />
          </Route>
          <Route exact path="/daily" >
            <DailyTrendReport />
          </Route>
          <Route exact path={`${orgPattern}/wordcloud`} >
            <WordCloudReport />
          </Route>
          <Route exact path='/wordcloud' >
            <WordCloudReport />
          </Route>

          <Route exact path={`${orgPattern}/admin-reports`} >
            <AdminReport />
          </Route>
          <Route exact path={`/admin-reports`} >
            <AdminReport />
          </Route>
          <Route path='*' component={NoData} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
