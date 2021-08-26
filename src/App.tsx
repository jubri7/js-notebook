import CellList from "./components/cellList";
import startService from "./bundler/startBundler";
import { useEffect } from "react";


const App = () => {
  useEffect(()=>{
    startService()
  },[])
  
  return (
    <div >
      <CellList/>
    </div>
  );
}

export default App;
