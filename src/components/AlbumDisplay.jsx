import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToPlayingQueueAction, getAlbumAction, selectSongAction } from '../redux/actions'
import { ListStars } from 'react-bootstrap-icons'

const mapStateToProps = state => ({
    selectedSong: state.songs.selectedSong,
    albumToDisplay: state.album.selectedAlbum,
    albumIdToFetch: state.album.albumIdToFetch,
    playingQueue: state.songs.playingQueue

})
const mapDispatchToProps = dispatch => ({
    selectSong: (song) => { dispatch(selectSongAction(song)) },
    getAlbum: (albumId) => { dispatch(getAlbumAction(albumId)) },
    addToPlayingQueue: (song) => { dispatch(addToPlayingQueueAction(song)) }
})


const AlbumDisplay = ({ selectSong, getAlbum, albumToDisplay, addToPlayingQueue, playingQueue }) => {

    const params = useParams()

    const [isError, setIsError] = useState(false)

    const getDuration = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const secondsRemaining = seconds - minutes * 60
        return `${ minutes }:${ secondsRemaining }`
    }

    useEffect(() => {
        getAlbum(params.albumId)
        console.log('inside useEffect:', albumToDisplay);
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
                                <div class="py-3 trackHover">
                                    {
                                        !playingQueue.includes(track.id) && <ListStars color="white" size={24} onClick={() => addToPlayingQueue(track.id)} />
                                    }
                                    <span class="card-title trackHover px-3" style={{ color: "white" }} onClick={() => selectSong(track)}>{track.title}</span>
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