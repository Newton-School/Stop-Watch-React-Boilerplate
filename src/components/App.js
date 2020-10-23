import React, {Component, useState} from "react";
import '../styles/App.css';
const Clock=require('./clock')

class App extends Component {
    render() {

        return(
            <div>
                <Clock/>
            </div>
        )
    }
}


export default App;