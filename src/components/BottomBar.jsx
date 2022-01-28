import { VolumeUp } from 'react-bootstrap-icons'
import NextIcon from '../assets/playerbuttons/Next.png'
// import PauseIcon from '../assets/playerbuttons/Pause.png'
import PlayIcon from '../assets/playerbuttons/Play.png'
import PreviousIcon from '../assets/playerbuttons/Previous.png'
import RepeatIcon from '../assets/playerbuttons/Repeat.png'
import ShuffleIcon from '../assets/playerbuttons/Shuffle.png'
import { connect } from 'react-redux'

const mapStateToProps = state => ({ selectedSong: state.songs.selectedSong })

const BottomBar = ({ selectedSong }) => {

    return (
        <div className="player container-fluid fixed-bottom bg-container pt-1">
            <div className="row">
                <div className="col-lg-10">
                    <div className="row flex-nowrap justify-content-between playBar py-3">
                        <div className="col-auto">
                            <div className="playerArtistInfo d-flex">
                                <img />
                                <div className="d-flex flex-column ps-2">
                                    <h6></h6>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="playerControls w-50 d-flex justify-content-between">
                                <div>
                                    <img src={ShuffleIcon} alt="shuffle" />
                                </div>
                                <div>
                                    <img src={PreviousIcon} alt="previous" />
                                </div>
                                <div>
                                    <img src={PlayIcon} alt="play" />
                                </div>
                                <div>
                                    <img src={NextIcon} alt="next" />
                                </div>
                                <div>
                                    <img src={RepeatIcon} alt="repeat" />
                                </div>
                            </div>
                            <div className="progressContainer d-flex align-items-center">
                                <span className="currentTime">00:00</span>
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
                        <div className="col-auto me-3">
                            <div className="playerVolume">
                                <VolumeUp className="fa fa-volume-up"></VolumeUp>
                                <input type="range" value="100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(BottomBar)