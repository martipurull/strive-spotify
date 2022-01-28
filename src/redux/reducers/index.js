import { ADD_TO_LIKED_SONGS, ADD_TO_PLAYING_QUEUE, SELECT_SONG } from '../actions'
import { initialState } from '../store'

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_PLAYING_QUEUE: {
            return {
                ...state,
                songs: {
                    ...state.songs,
                    playingQueue: [...state.songs.playingQueue, action.payload]
                }
            }
        }
        case SELECT_SONG: {
            return {
                ...state,
                songs: {
                    ...state.songs,
                    selectedSong: action.payload
                }
            }
        }
        case ADD_TO_LIKED_SONGS: {
            return {
                ...state,
                songs: {
                    ...state.songs,
                    likedSongs: [...state.songs.likedSongs, action.payload]
                }
            }
        }
        default: return state
    }
}