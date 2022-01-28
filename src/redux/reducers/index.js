import { ADD_TO_LIKED_SONGS, ADD_TO_PLAYING_QUEUE, SELECT_SONG, SET_SELECTED_ARTIST, SET_SELECTED_ALBUM } from '../actions'
import { initialState } from '../store'

export const songsReducer = (state = initialState.songs, action) => {
    switch (action.type) {
        case ADD_TO_PLAYING_QUEUE: {
            return {
                ...state,
                playingQueue: [...state.songs.playingQueue, action.payload]
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
                likedSongs: [...state.songs.likedSongs, action.payload]
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
        default: return state
    }
}