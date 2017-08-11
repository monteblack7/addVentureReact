let defaultState = {
    posts: [],
    currentStatePosts: [],
    lat: 40.7608,
    lng: -111.8910,
    markers: [],
    selected: null
};

let mainReducer = (state = defaultState, action) => {
    if(action.type === "SET_DATA"){
        return {
            ...state,
            posts: action.data
        }
    } else if(action.type === "SET_STATE_POST") {
        return {
            ...state,
            currentStatePosts: action.data
        }
    } else if(action.type === "SET_MARKERS"){
        return{
            ...state,
            markers: action.data
        }
    } else if(action.type === "SET_CURRENT") {
        return{
            ...state,
            selected: action.data
        }
    }else {
        return {
            ...state
        }
    }
};

export default mainReducer;