import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from "./Components/contact";
import Users from "./Components/users";
import NotFound from "./Components/notFound";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
      <switch>
        <Route exact path="/" component={App} />
        <Route path="/contact" component={Contact} />
        <Route path="/users" component={Users} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </switch>
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
