import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { mainReducer } from '../reducers'

const ultimateCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
    songs: {
        playingQueue: [],
        selectedSong: {},
        likedSongs: []
    },
    artist: {

    },
    album: {

    }
}

const configureStore = createStore(
    mainReducer,
    initialState,
    ultimateCompose(applyMiddleware(thunk))
)

export default configureStore