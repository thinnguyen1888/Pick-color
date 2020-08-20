import React, { Component } from 'react'

export default class Reset extends Component {
    
    onResetDefault=()=>{
        this.props.onSettingDefault(true)
    }
    
    render() {
        return (
            <button type="button" className="btn btn-default" onClick={this.onResetDefault}>reset</button>
        )
    }
}
