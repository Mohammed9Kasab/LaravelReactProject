import React, {Component} from 'react';
import axios from 'axios';
class AddCategory extends Component {
    constructor() {
        super();
        this.onSubmit=this.onSubmit.bind(this)
        this.onChangeCategoryName=this.onChangeCategoryName.bind(this)
        this.state = {
            category_name: "",
        }
    }
    onChangeCategoryName(event){
        this.setState({category_name:event.target.value});
    }
    onSubmit(event){
        event.preventDefault();
        const category={
            category_name:this.state.category_name
        }
        axios.post('http://localhost:8000/api/category/store',category)
            .then(response=> {
                console.log(response.data)
                this.props.history.push('/expenses/AddExpenses');
            })
    }
    render() {
        return (
            <div>
                <hr/>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="category_name">Category Name</label>
                        <input type="text"
                               className="form-control"
                               id="category_name"
                               value={this.state.category_name}
                               onChange={this.onChangeCategoryName}
                                placeholder="Enter Category"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
    );
    }
    }

    export default AddCategory;

