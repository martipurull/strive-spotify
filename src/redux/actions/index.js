import axios from 'axios'

export const ADD_TO_PLAYING_QUEUE = 'ADD_TO_PLAYING_QUEUE'
export const SELECT_SONG = 'SELECT_SONG'
export const ADD_TO_LIKED_SONGS = 'ADD_TO_LIKED_SONGS'
export const SET_SELECTED_ARTIST = 'SET_SELECTED_ARTIST'
export const SET_SELECTED_ALBUM = 'SET_SELECTED_ALBUM'

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

export const getArtistAction = (artistId) => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/' + artistId, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGY4NmFhY2FhMjAwMTU1MmExODAiLCJpYXQiOjE2MzY2MzY5MzcsImV4cCI6MTYzNzg0NjUzN30.uqOJ27uEjuSzPvSujE9DuNRI0lJELmoanrTPYDsO6qU"
                }
            })
            if (response.ok) {
                const artistData = await response.json()
                dispatch({ type: SET_SELECTED_ARTIST, payload: artistData })
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const getAlbumAction = (albumId) => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/' + albumId, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGY4NmFhY2FhMjAwMTU1MmExODAiLCJpYXQiOjE2MzY2MzY5MzcsImV4cCI6MTYzNzg0NjUzN30.uqOJ27uEjuSzPvSujE9DuNRI0lJELmoanrTPYDsO6qU"
                }
            })
            if (response.ok) {
                const albumData = await response.json()
                dispatch({ type: SET_SELECTED_ALBUM, payload: albumData })
            }
        } catch (error) {
            console.log(error);
        }
    }
}