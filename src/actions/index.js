import axios from "axios";

export function getStatePosts(str) {
    return (dispatch) => {
        return axios.get(`http://localhost:8080/activities?locationstate=${str}`).then((response) => {
            dispatch(setStatePosts(response.data.data))
        }).catch((error) => {
            throw error;
        })
    }
}

export function loadMarkers() {
    return (dispatch) => {
        return axios.get("http://localhost:8080/activities").then((response) => {
            dispatch(setMarkers(response.data.data));
        }).catch((err) => {
            throw err;
        });
    }
}

export function deleteMarker(data) {
    return (dispatch) => {
        return axios.delete(`http://localhost:8080/activities/${data._id}`).then((response) => {
            dispatch(loadMarkers());
            dispatch(setCurrent(data));
        }).catch((err) => {
            throw err;
        })
    }
}

export function loadData() {
    return (dispatch) => {
        return axios.get("http://localhost:8080/activities").then((response) => {
            dispatch(setData(response.data.data));
        }).catch((error) => {
            throw error;
        })
    }
}

export function addData(data) {
    return (dispatch) => {
        return axios.post("http://localhost:8080/activities", data).then((response) => {
            dispatch(loadData());
        }).catch((error) => {
            throw error;
        })
    }
}

export function deleteData(id) {
    return (dispatch) => {
        return axios.delete(`http://localhost:8080/activities/${id}`).then((response) => {
            dispatch(loadData());
        }).catch((error) => {
            throw error;
        })
    }
}

export function updateData(id, data) {
    return (dispatch) => {
        return axios.put(`http://localhost:8080/activities/${id}`, data).then((response) => {
            dispatch(loadData());
        }).catch((error) => {
            throw error;
        })
    }
}

export function upVoteData(id) {
    return (dispatch) => {
        return axios.put(`http://localhost:8080/activities/upvotes/${id}`).then((response) => {
            dispatch(loadData());
        }).catch((error) => {
            throw error;
        })
    }
}

export function downVoteData(id) {
    return (dispatch) => {
        return axios.put(`http://localhost:8080/activities/downvotes/${id}`).then((response) => {
            dispatch(loadData());
        }).catch((error) => {
            throw error;
        })
    }
}

export function addMarker(input) {

    return (dispatch) => {
        let data = {
            sport: input.sport,
            locationstate: input.locationstate,
            day: input.day,
            time: input.time,
            position: {
                lat: input.lat,
                lng: input.lng
            },
            label: input.label,
            details: input.details
        };
        return axios.post("http://localhost:8080/activities", data).then((response) => {
            dispatch(loadMarkers());
        }).catch((err) => {
            throw err;
        })
    }
}

export function setData(data) {
    return {
        type: "SET_DATA",
        data
    }
}

export function setStatePosts(data){
    return {
        type: "SET_STATE_POST",
        data
    }
}

export function setMarkers(data) {
    return {
        type: "SET_MARKERS",
        data
    }
}

export function setCurrent(data) {
    return {
        type: "SET_CURRENT",
        data
    }
}


