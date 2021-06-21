import {combineReducers} from 'redux';
import {reducer as network} from 'react-native-offline';
import RandomUserDataReducer from './RandomUserDataReducer';

const appReducer=combineReducers({
    RandomUserDataReducer,
    network
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
}
export default rootReducer;