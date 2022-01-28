import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectSongAction } from '../redux/actions'

const mapStateToProps = state => ({ selectedSong: state.songs.selectedSong })
const mapDispatchToProps = dispatch => ({
    selectSong: (song) => dispatch(selectSongAction(song))
})


const AlbumDisplay = ({ selectedSong, selectSong }) => {

    const [albumToDisplay, setAlbumToDisplay] = useState({})

    const params = useParams()
    console.log(params)

    const [isError, setIsError] = useState(false)

    const getAlbum = async (albumId) => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/album/' + albumId, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGY4NmFhY2FhMjAwMTU1MmExODAiLCJpYXQiOjE2MzY2MzY5MzcsImV4cCI6MTYzNzg0NjUzN30.uqOJ27uEjuSzPvSujE9DuNRI0lJELmoanrTPYDsO6qU"
                }
            })
            if (response.ok) {
                const albumData = await response.json()
                setAlbumToDisplay(albumData)
                console.log(albumToDisplay)
            } else {
                console.log('response error!')
                setIsError(true)
            }
        } catch (error) {
            console.log('fetch error!')
            setIsError(true)
        }
    }

    const getDuration = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const secondsRemaining = seconds - minutes * 60
        return `${ minutes }:${ secondsRemaining }`
    }

    useEffect(() => {
        console.log(params)
        getAlbum(params.albumId)
        // eslint-disable-next-line
    }, [])

    return (
        <div class="row">
            <div id="img-container" class="col-md-3 pt-5 text-center">
                <img
                    src={albumToDisplay.cover_big}
                    class="card-img img-fluid"
                    alt="Album"
                />
                <div class="mt-4 text-center">
                    <p class="album-title">{albumToDisplay.title}</p>
                </div>
                <div class="text-center">
                    <p class="artist-name">{albumToDisplay?.artist?.name}</p>
                </div>
                <div class="mt-4 text-center">
                    <button id="btnPlay" class="btn btn-success" type="button">
                        Play
                    </button>
                </div>
            </div>
            <div class="col-md-8 p-5">
                {
                    albumToDisplay?.tracks?.data.map(track => (
                        <div key={track.id} class="row">
                            <div id="trackList" class="col-md-10 mb-5">
                                <div id="err"></div>
                                <div class="py-3 trackHover" onClick={() => selectSong(track)}>
                                    <span class="card-title trackHover px-3" style={{ color: "white" }}>{track.title}</span>
                                    <small class="duration pe-3" style={{ color: "white" }}>{getDuration(track.duration)}</small>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDisplay)