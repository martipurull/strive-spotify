export const ADD_TO_PLAYING_QUEUE = 'ADD_TO_PLAYING_QUEUE'
export const SELECT_SONG = 'SELECT_SONG'
export const ADD_TO_LIKED_SONGS = 'ADD_TO_LIKED_SONGS'

export const addToPlayingQueueAction = (song) => ({
    type: ADD_TO_PLAYING_QUEUE,
    payload: song
})

export const selectSongAction = (song) => ({
    type: SELECT_SONG,
    payload: song
})

export const addToLikedSongsAction = (song) => ({
    type: ADD_TO_LIKED_SONGS,
    payload: song
})