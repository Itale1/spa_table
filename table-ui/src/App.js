
<<<<<<< HEAD

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navigation/Navbar";
import CategoryDetail from "./components/Category/CategoryDetail";
import PostDetail from "./components/Posts/PostDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

=======
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navigation/Navbar";
import CategoryDetail from "./components/Category/CategoryDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
>>>>>>> origin/master

function App() {

return (
    <div className="App">
        <Router>
            <Navbar />
            <Switch>
<<<<<<< HEAD
                <Route path="/posts/:id" exact component={PostDetail}></Route>
                <Route path="/category/:id" exact component={CategoryDetail}></Route>
=======
                <Route path="/category/:id" exact component={CategoryDetail }></Route>
>>>>>>> origin/master
            </Switch>
        </Router>

    </div>
  );
}

export default App;
