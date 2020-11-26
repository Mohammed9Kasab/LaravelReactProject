import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import axios from 'axios';



class Chart1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           dataArr:[]
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8000/api/expenses/chart')
            .then(response => {
                console.log(response)
                this.setState({dataArr: response.data.result});
            })
    }

    // async function getdata(){
    //     const response= await fetch ("http://localhost:8000/api/expenses/chart",{
    //         method:'GET'
    //     });
    //     const body= await response.json();
    //     serData(this.state.dataArr.body.result)
    //     console.log(this.state.dataArr.body.result)
    // }
    render() {
        return (
            <center>
                <div className="App">
                    <h1>{this.state.dataArr}</h1>
                    <Chart
                        chartType="PieChart"
                        width="100%"
                        height="400px"
                        data={this.state.dataArr}
                        // options={options}
                    />
                </div>
            </center>
        );
    }
}

export default Chart1;



