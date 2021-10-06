import "bulmaswatch/superhero/bulmaswatch.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import {store} from "./redux"
import { BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
