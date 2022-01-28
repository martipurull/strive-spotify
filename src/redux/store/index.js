import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { albumReducer, artistReducer, songsReducer } from '../reducers'

const ultimateCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
    songs: {
        playingQueue: [],
        selectedSong: {},
        likedSongs: []
    },
    artist: {
        artistId: 368,
        selectedArtist: {}
    },
    album: {
        selectedAlbum: {}
    }
}

const mainReducer = combineReducers({
    songs: songsReducer,
    artist: artistReducer,
    album: albumReducer
})

const configureStore = createStore(
    mainReducer,
    initialState,
    ultimateCompose(applyMiddleware(thunk))
)

export default configureStore