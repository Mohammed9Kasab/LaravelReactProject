import React, {Component} from 'react';
import axios from 'axios';
class EditExpenses extends Component {
    constructor(props) {
        super(props);
        this.onSubmit=this.onSubmit.bind(this)
        this.onChangeDescription=this.onChangeDescription.bind(this)
        this.categoryChange = this.categoryChange.bind(this);
        this.currencyChange = this.currencyChange.bind(this);
        this.amountChange = this.amountChange.bind(this);
        this.state = {
            categories:[],
            expense_description: "",
            category_id:"",
            currency:"",
            amount:""
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8000/api/expenses/AddExpenses')
            .then(response => {
                this.setState({categories: response.data});
            })

        axios.get('http://localhost:8000/api/expense/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({expense_description: response.data.description});
                this.setState({category_id: response.data.category_id});
                this.setState({currency: response.data.currency});
                this.setState({amount: response.data.amount});
            })
    }

    onChangeDescription(event){
        this.setState({expense_description:event.target.value});
    }
    onSubmit(event){
        event.preventDefault();
        const expense={
            expense_description:this.state.expense_description,
            category_id:this.state.category_id,
            currency:this.state.currency,
            amount:this.state.amount
        }
        axios.put('http://localhost:8000/api/expense/update/'+this.props.match.params.id,expense)
            .then(response=>console.log(response.data))
    }
    categoryChange(e) {
        this.setState({ category_id: e.target.value });
    }
    currencyChange(e) {
        this.setState({ currency: e.target.value });
    }
    amountChange(e) {
        this.setState({ amount: e.target.value });
    }
    render() {
        return (
            <div>
                <hr/>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="expense_description">Expense Description</label>
                        <input type="text"
                               className="form-control"
                               id="expense_description"
                               value={this.state.expense_description}
                               onChange={this.onChangeDescription}
                               placeholder="Enter Description"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="Currency">Currency</label>
                        <select  id="Currency" className="form-control" value={this.state.currency}
                                 onChange={this.currencyChange} >
                            <option value="Dollar">Dollar</option>
                            <option value="Euro">Euro</option>
                            <option value="LBP">LBP</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Amount">Amount</label>
                        <input type="number" className="form-control" id="Amount"
                               value={this.state.amount}
                               onChange={this.amountChange}
                               placeholder="Amount"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Category">Category</label>
                        <select id="Category" value={this.state.category_id}
                                onChange={this.categoryChange}
                                className="form-control" >
                            {
                                this.state.categories.map(category => {
                                    return (
                                        <option value={category.id}>{category.name}</option>
                                    )
                                })
                            }

                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default EditExpenses;


