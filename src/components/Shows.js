import React, { Component } from 'react';

class Shows extends Component {
    state={
        showbtns: false
    }
    
    render() {
        return (
            <div className="col-xs-2">
                <div className="panel panel-default" onMouseLeave={()=>this.setState({showbtns: false})} onMouseOver={()=>this.setState({showbtns: true})}>
                    <div className="panel-heading" style={{backgroundColor: "#222", color: "white"}}>{this.props.detail.title}</div>
                    <div className="panel-body" style={{backgroundColor: "#222", color: "white"}}>
                        <img className="col-xs-12" alt="" src={this.props.detail.img} />
                    </div>
                    <div className="panel-footer" style={{backgroundColor: "#222", color: "white"}}>
                        {this.state.showbtns && <button type="button" onClick={()=>this.props.onRemove(this.props.detail)} className="btn btn-danger">{this.props.action}</button>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Shows;