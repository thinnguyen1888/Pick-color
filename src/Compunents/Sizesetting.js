import React, { Component } from 'react'

export default class Sizesetting extends Component {
    
    changSize(value){
        this.props.onChangeSize(value)
    }
    
    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size : {this.props.fontSize}px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-default" onClick={()=>this.changSize(-2)}>Giảm</button>&nbsp;
                    <button type="button" className="btn btn-default" onClick={()=>this.changSize(+2)}>Tăng</button>
                </div>
            </div>
        )
    }
}
