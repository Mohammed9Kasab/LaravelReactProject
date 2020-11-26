import React,{Component} from 'react';
import {BrowserRouter as Router,Link,Route} from "react-router-dom";
import AddExpenses from "./AddExpenses";
import AddCategory from "./AddCategory";
import Listing from "./Listing";
import EditExpenses from "./EditExpenses";
import Chart1 from "./Chart";

class Index extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <hr/>
                        <Link to="/expenses" className="btn btn-primary">Listing</Link>&nbsp;
                        <Link to="/expenses/AddExpenses"className=" btn btn-primary" >Add Expenses </Link>&nbsp;
                        <Link to="/category/Add"className="btn btn-primary" >Add Category </Link>&nbsp;
                        <Link to="/expense/chart"className="btn btn-primary" >Chart</Link>
                        <Route exact path='/expenses' component={Listing} />
                        <Route exact path='/expenses/AddExpenses' component={AddExpenses} />
                        <Route exact path='/category/Add' component={AddCategory} />
                        <Route exact path='/expense/edit/:id' component={EditExpenses} />
                        <Route exact path='/expense/chart' component={Chart1} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default Index;


