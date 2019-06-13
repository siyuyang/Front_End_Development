import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div className="navbar navbar-default" style={{ backgroundColor: "#222" }}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" style={{ color: "red", fontSize: "150%", fontWeight: "bold" }} href="/#">NETFLIX</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation;