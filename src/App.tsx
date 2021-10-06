import CellList from "./components/cellList";
import startService from "./bundler/startBundler";
import Header from "./components/header";
import { Route,Switch } from "react-router";
import Guide from "./components/guide";
import { useEffect } from "react";


const App = () => {
  useEffect(()=>{
    startService()
  },[])
  return (
    <div >
      <Header/>
      <Switch>
      <Route path="/guide" component={Guide}/>
      <Route path="/" component={CellList}/>
      </Switch>
    </div>
  );
}

export default App;
