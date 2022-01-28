import { ADD_TO_LIKED_SONGS, ADD_TO_PLAYING_QUEUE, SELECT_SONG, SET_SELECTED_ARTIST, SET_SELECTED_ALBUM, SET_HOME_DISPLAY, SET_ALBUM_ID_TO_FETCH, REMOVE_FROM_LIKED_SONGS } from '../actions'
import { initialState } from '../store'

export const songsReducer = (state = initialState.songs, action) => {
    switch (action.type) {
        case ADD_TO_PLAYING_QUEUE: {
            return {
                ...state,
                playingQueue: [...state.playingQueue, action.payload]
            }
        }
        case SELECT_SONG: {
            return {
                ...state,
                selectedSong: action.payload
            }
        }
        case ADD_TO_LIKED_SONGS: {
            return {
                ...state,
                likedSongs: [...state.likedSongs, action.payload]
            }
        }
        case REMOVE_FROM_LIKED_SONGS: {
            return {
                ...state,
                likedSongs: state.likedSongs.filter(s => s !== action.payload)
            }
        }
        default: return state
    }
}

export const artistReducer = (state = initialState.artist, action) => {
    switch (action.type) {
        case SET_SELECTED_ARTIST: {
            return {
                ...state,
                selectedArtist: action.payload
            }
        }
        case SET_HOME_DISPLAY: {
            return {
                ...state,
                homeDisplay: action.payload
            }
        }
        default: return state
    }
}

export const albumReducer = (state = initialState.album, action) => {
    switch (action.type) {
        case SET_SELECTED_ALBUM: {
            return {
                ...state,
                selectedAlbum: action.payload
            }
        }
        case SET_ALBUM_ID_TO_FETCH: {
            return {
                ...state,
                albumIdToFetch: action.payload
            }
        }
        default: return state
    }
}