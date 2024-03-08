import { createStore } from "redux";
import Reducer1 from "./Reducer1";


//  const toEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
 const Store = createStore (Reducer1)

 export default Store;
