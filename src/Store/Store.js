import { legacy_createStore as createStore} from 'redux';


 import reducers from '../Reducer/RootMacReducer';

 const store = createStore(reducers);

 export default store;