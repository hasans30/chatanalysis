import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';
import Navbar from './components/navbar2/Navbar';
import 'office-ui-fabric-react/dist/css/fabric.css';
import NoData from "./components/no-data/NoData";
import MonthlyReport from "./features/MonthlyReport";
import DailyTrendReport from "./features/DailyTrendReport";
import WordCloudReport from "./features/WordCloudReport";
import AdminReport from "./features/AdminReport";
import AppState from "./models/AppState";
import createAppState from "./operations/mutations/setAppState";
import ErrorPage from "./pages/ErrorPage";




const App: ({ org, year }: AppState) => JSX.Element = ({ org, year }) => {
  const reportComponent = <> <Navbar />
    <div>
      <Switch>
        <Route exact path="/report/monthly-all" >
          <MonthlyReport compact={false} />
        </Route>
        <Route exact path="/report/monthly-compact" >
          <MonthlyReport compact />
        </Route>
        <Route exact path="/report/daily" >
          <DailyTrendReport />
        </Route>
        <Route exact path='/report/wordcloud' >
          <WordCloudReport />
        </Route>
        <Route exact path={`/report/admin-reports`} >
          <AdminReport />
        </Route>
        <Route path='*' component={NoData} />
      </Switch>
    </div>
  </>;

  const appBody = org === 'demo' ? <ErrorPage /> : reportComponent;

  createAppState({ org, year });
  return (
    <BrowserRouter >
      {appBody}
    </BrowserRouter>
  );
}

export default App;

