import { combineReducers } from 'redux';

import prototype3 from './modules/prototype3';
import prototype4 from './modules/prototype4';

const rootReducer = combineReducers({
  prototype3,
  prototype4,
});

export default rootReducer;
