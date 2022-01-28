import { Heart, HeartFill, VolumeUp } from 'react-bootstrap-icons'
import NextIcon from '../assets/playerbuttons/Next.png'
// import PauseIcon from '../assets/playerbuttons/Pause.png'
import PlayIcon from '../assets/playerbuttons/Play.png'
import PauseIcon from '../assets/playerbuttons/Pause.png'
import PreviousIcon from '../assets/playerbuttons/Previous.png'
import RepeatIcon from '../assets/playerbuttons/Repeat.png'
import ShuffleIcon from '../assets/playerbuttons/Shuffle.png'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import { addToLikedSongsAction, removeFromLikedSongsAction } from '../redux/actions'

const mapStateToProps = state => ({
    selectedSong: state.songs.selectedSong,
    likedSongs: state.songs.likedSongs
})
const mapDispatchToProps = dispatch => ({
    addToLikedSongs: (song) => dispatch(addToLikedSongsAction(song)),
    removeFromLikedSongs: (song) => dispatch(removeFromLikedSongsAction(song))
})

const BottomBar = ({ selectedSong, likedSongs, addToLikedSongs, removeFromLikedSongs }) => {
    const [audio, setAudio] = useState(new Audio(selectedSong.preview))
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        playing ? audio.play() : audio.pause()
    }, [playing])

    useEffect(() => {
        setAudio(new Audio(selectedSong.preview))
    }, [selectedSong])


    return (
        <div className="player container-fluid fixed-bottom bg-container pt-1" style={{
            position: 'fixed',
            left: "auto",
            right: -"17px"
        }} >
            <div className="row">
                <div className="col-lg-10">
                    <div className="row flex-nowrap justify-content-between playBar py-3">
                        <div className="col-auto">
                            <div className="playerArtistInfo d-flex">
                                <div>{selectedSong?.title}</div>

                            </div>
                        </div>
                        <div className="col-4">
                            <div className="playerControls w-100 d-flex justify-content-between">
                                <div>
                                    <img src={ShuffleIcon} alt="shuffle" />
                                </div>
                                <div>
                                    <img src={PreviousIcon} alt="previous" />
                                </div>
                                <div>
                                    {
                                        playing
                                            ? <img src={PauseIcon} alt="play" onClick={() => setPlaying(!playing)} />
                                            : <img src={PlayIcon} alt="play" onClick={() => setPlaying(!playing)} />
                                    }
                                </div>
                                <div>
                                    <img src={NextIcon} alt="next" />
                                </div>
                                <div>
                                    <img src={RepeatIcon} alt="repeat" />
                                </div>
                            </div>
                            <div className="progressContainer d-flex align-items-center">
                                <span className="currentTime">{selectedSong?.duration}</span>
                                <div className="progress w-100">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow="0"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        <audio></audio>
                                    </div>
                                </div>
                                <span className="duration">00:00</span>
                            </div>
                        </div>

                        <Col xs='10' lg='4'>
                            <div className="song-info-footer d-flex justify-content-center justify-content-lg-start">
                                <img className="d-none d-xl-block" src="../assets/cards/9.jpg" alt="" />
                                <div className="d-flex flex-column">
                                    <p className="ml-3 mb-0 font-weight-bold">{selectedSong?.title_short}</p>
                                    <p className="ml-3 light-gray-text smaller-text mb-0">{selectedSong?.artist?.name}</p>
                                </div>
                                <i className="bi bi-heart ml-2"></i>
                            </div>

                        </Col>
                        <div className="col-auto me-3">
                            <div className="playerVolume">
                                <VolumeUp className="fa fa-volume-up"></VolumeUp>
                                {
                                    !likedSongs.includes(selectedSong.id)
                                        ? <Heart size={20} color="gray" className='mx-5' onClick={() => addToLikedSongs(selectedSong?.id)} />
                                        : <HeartFill size={20} color="gray" className='mx-5' onClick={() => removeFromLikedSongs(selectedSong?.id)} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar)



