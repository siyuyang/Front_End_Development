import { FETCH_SHOWS, DELETE_SHOWS, ADD_SHOWS } from '../actions/shows';

const initialAppState = {
    mylist: [],
    recommendations: []
};

var appReducer = (state = initialAppState, action) => {
    switch (action.type) {
        case ADD_SHOWS:
            var newrecommend = state.recommendations.filter((item) => {
                if (item.id === action.shows.id) {
                    return false;
                }
                return true;
            });
            var newlist = state.mylist;
            newlist.push(action.shows);
            return {
                mylist: newlist,
                recommendations: newrecommend
            }
            break;
        case DELETE_SHOWS:
            var newlist = state.mylist.filter((item) => {
                if (item.id === action.shows.id) {
                    return false;
                }
                return true;
            });
            var newrecommendations = state.recommendations;
            newrecommendations.push(action.shows);
            return {
                mylist: newlist,
                recommendations: newrecommendations
            }
            break;
        case FETCH_SHOWS:
            return {
                mylist: action.payload.mylist,
                recommendations: action.payload.recommendations
            };
            break;
        default:
            return state;
    }
    return state;
}

export default appReducer;