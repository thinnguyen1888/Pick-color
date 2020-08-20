import React, { Component } from 'react'

export default class Result extends Component {
    
    setStyle(){
        return {
            color:this.props.color,
            borderColor:this.props.color,   
            fontSize:this.props.fontSize    
        }
    }
    
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Color : {this.props.color} - fontsize: {this.props.fontSize}px</p>
                <div id='content' style={this.setStyle()}> {/**style = {{color: 'red'}} */}
                    Kimuchi
                </div>
            </div>
        )
    }
}
