import {  Router, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route } from "react-router-dom";
import ChatBot from './ChatBot'
import './App.css';
import Home from './Home';
import Study from './Study';
import Romance from './Romance';
import TextBooks from './Subjective';
import IndianWriting from './IndianWriting';
import Business from './Business';
import Crime from './Crime';
import Biographies from './Biographies';
import Scifantasy from './Sci-fi';
import Children from './Children';
import Login_signup from './Login-Signup';



function App() {
  const history = createBrowserHistory();
  return (
    <BrowserRouter>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route  exact path="/Order" component={Study}></Route>
        <Route exact path="/Order/Romance" component={Romance}></Route>
        <Route exact path="/Order/Biographies" component={Biographies}></Route>
        <Route exact path="/Order/Sci-fi" component={Scifantasy}></Route>
        <Route exact path="/Order/Crime" component={Crime}></Route>
        <Route exact path="/Order/Business" component={Business}></Route>
        <Route exact path="/Order/Indian-Writing" component={IndianWriting}></Route>
        <Route exact path="/Order/TextBooks" component={TextBooks}></Route>
        <Route exact path="/Order/Children" component={Children}></Route>
        <Route exact path="/Login" component={Login_signup}></Route>
        <Route exact path="/Chatbot" component={ChatBot}></Route>
       
      </Switch>
    </Router>
    </BrowserRouter>
  );
}

export default App;