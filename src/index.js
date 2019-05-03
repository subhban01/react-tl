import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import './style/all.less';
import reducers from './reducers/index';
import EmployeeList from './components/EmployeeContainer';
import App from './components/App';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

const Root = () => {
    return (
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={EmployeeList}/>
                </Route>
            </Router>
        </Provider>
    );
};

ReactDOM.render(
    <Root/>,
    document.querySelector('#root')
);
