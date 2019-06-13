import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getShows, deleteFn, addFn } from '../store/actions/shows.js';
import Shows from './Shows.js';
import Navigation from './Navigation';
import '../App.css';

class App extends Component {
    componentDidMount() {
        if (this.props.mylist.length === 0 && this.props.recommendations.length === 0) {
            this.props.dispatch(getShows());
        }
    }

    removeFromList = (show) => {
        this.props.dispatch(deleteFn(show))
    }

    addToList = (show) => {
        this.props.dispatch(addFn(show))
    }

    render() {
        var list = [];
        for (let i = 0; i < this.props.mylist.length; i++) {
            list.push(<Shows action={'Remove'} detail={this.props.mylist[i]} onRemove={this.removeFromList} />)
        }
        var recommend = [];
        for (let i = 0; i < this.props.recommendations.length; i++) {
            recommend.push(<Shows action={'Add'} detail={this.props.recommendations[i]} onRemove={this.addToList} />)
        }
        return (
            <div className="App">
                <Navigation />
                <div style={{ backgroundColor: "#222" }} className="panel panel-default">
                    <div className="panel-heading" style={{ backgroundColor: "#4d4d4d", color: "white" }}>My List</div>
                    <div className="panel-body">{list}</div>
                </div>
                <div style={{ backgroundColor: "#222" }} className="panel panel-default">
                    <div className="panel-heading" style={{ backgroundColor: "#4d4d4d", color: "white" }}>Recommendations</div>
                    <div className="panel-body">{recommend}</div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ mylist, recommendations }) {
    return {
        mylist,
        recommendations
    };
}

export default connect(mapStateToProps)(App);