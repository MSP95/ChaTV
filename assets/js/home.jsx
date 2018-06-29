import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import ChatBox from './chatbox';
import Login from './login';

export default function home_init(root, store) {
  ReactDOM.render(<Provider store={store}><Init state={store.getState()}/></Provider>, root);

}

let Init = connect((state)=> state)(Home)

function Home(props){
    return(
    <Router>
      <div>
        <Route path="/chatbox" render={()=><ChatBox/>}/>
        <Route path="/" render={()=><Login/>}/>
      </div>
    </Router>
  )
}
