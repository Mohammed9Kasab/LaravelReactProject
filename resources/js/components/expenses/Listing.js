import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from "react-router-dom";

import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Header from "../header";

// import ReactDOM from 'react-dom';

class Listing extends Component {
    constructor() {
        super();
        this.state = {
            expenses: [],
        }
    }

    componentDidMount() {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiOTEzMTcxN2FkYjdhYjdmODEzZGUzY2E4OWQ2NzFiZmNlM2YwNDIyZmFiNWIyMjZjYzZlOGUxMzY2YmE0ZjY1YTRjZWZiMjQ5MGFkZTdkYmMiLCJpYXQiOjE2MDYyMTgwNjgsIm5iZiI6MTYwNjIxODA2OCwiZXhwIjoxNjM3NzU0MDY4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.MW6I2-YrRmHwE0rj0Up3Abz7y5MC2MuRtV9v7OkNzpHhQtLTp-KJeqkqXOY7CJJ15GnGr3j2yXswBUL183-YyxYkxlq8CbMxPUPXS6Ny0YaNZQgpd7Ah3LvVk7Gc2dHMMzVO0ZLmh7Jaipxhrz0060H7nH2jgsYsLq-t0p3FLL5MHfw1K1_270ucYKbbckJ3stDze17A6fJ28W1QSH43-GQD2z2jxTceDSVIiDvL8ziTy7mwfcB5MzeqWcUVBYHgJ77SVilaIewlV3JfQhXL2fLc5ZNQ1SCy21nVhS8hULW-ZyGp5tcO8uSPBfhxieo4JD9S5f47XYE1eEQM7Vma8_Xt7ytTHX8Btixd4ba_opv05gngcdh2uA2DilsKn8qqnHSGj9RlO9GaSoj_LVKjo_5yf6eLuEiIfJusqWXC-QPYjzCVSOeLpLx4-6Mof7b_0NjR1s5mrlZZ27dBZvRY0Zte3LGTg_8_dDJH1OOh8h8pEaQ1UN_mvjyceP0kTtqklESMU1rLs4uRpt-7T3CCxvSBGCs4qVV9ShEu7XMyjw8cuXCz67BWIybt42Zp7Puu9JO3qJzj0qtWwRaRCLGh7NtRh7rirqc-Jr3W6mgQI_E2opXVZjvqgZXHPg9l5OvWUP8Y1iCtEFdiS5UCD-D40Th0ZDcQPpvzDA7Y2Tnd6NQ";
        axios.get('http://localhost:8000/api/expenses', {
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token // token
            }
        })
            .then(response => {
                this.setState({expenses: response.data});
            })
    }

    onDelete(expense_id) {
        axios.delete('http://localhost:8000/api/expense/delete/' + expense_id)
            .then(response => {
                let expenses = this.state.expenses;
                for (let i = 0; i < expenses.length; i++) {
                    if (expenses[i].id == expense_id) {
                        expenses.splice(i, 1);
                        this.setState({expenses: expenses})
                    }
                }

            })
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Description</th>
                        <th scope="col">Currency</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Category Name</th>
                        <th scope="col">Created_at</th>
                        <th scope="col">Updated_at</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.expenses.map(expense => {
                            return (
                                <tr>
                                    <th scope="row">{expense.id}</th>
                                    <td>{expense.description}</td>
                                    <td>{expense.currency}</td>
                                    <td>{expense.amount}</td>
                                    <td>{expense.category_id}</td>
                                    <td>{expense.created_at}</td>
                                    <td>{expense.updated_at}</td>

                                    <td>
                                        <Link to={'/expense/edit/' + expense.id}>Edit</Link>
                                        <a href="#" onClick={this.onDelete.bind(this, expense.id)}>Delete</a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Listing;


