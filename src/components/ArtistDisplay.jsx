import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getArtistAction, getTopThreeAction } from "../redux/actions"

const mapStateToProps = state => ({
    artistToDisplay: state.artist.selectedArtist,
    topThreeSongs: state.artist.topThreeSongs
})

const mapDispatchToProps = dispatch => ({
    getArtist: (artistId) => dispatch(getArtistAction(artistId)),
    getTopThree: (artistId) => dispatch(getTopThreeAction(artistId))
})

const ArtistDisplay = ({ artistToDisplay, topThreeSongs, getArtist, getTopThree }) => {
    // const [artistToDisplay, setArtistToDisplay] = useState({})
    // const [topThreeSongs, setTopThreeSongs] = useState([])

    const params = useParams()


    const [isError, setIsError] = useState(false)

    // const getArtist = async (artistId) => {
    //     try {
    //         const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/' + artistId, {
    //             headers: {
    //                 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGY4NmFhY2FhMjAwMTU1MmExODAiLCJpYXQiOjE2MzY2MzY5MzcsImV4cCI6MTYzNzg0NjUzN30.uqOJ27uEjuSzPvSujE9DuNRI0lJELmoanrTPYDsO6qU"
    //             }
    //         })
    //         if (response.ok) {
    //             const artistData = await response.json()
    //             setArtistToDisplay(artistData)
    //             console.log(artistToDisplay)
    //         } else {
    //             console.log('response error!')
    //             setIsError(true)
    //         }
    //     } catch (error) {
    //         console.log('fetch error!')
    //         setIsError(true)
    //     }

    // }

    // const getTopThree = async (artistId) => {
    //     try {
    //         const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/' + artistId + '/top?limit=3', {
    //             headers: {
    //                 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGY4NmFhY2FhMjAwMTU1MmExODAiLCJpYXQiOjE2MzY2MzY5MzcsImV4cCI6MTYzNzg0NjUzN30.uqOJ27uEjuSzPvSujE9DuNRI0lJELmoanrTPYDsO6qU"
    //             }
    //         })
    //         if (response.ok) {
    //             const topThreeData = await response.json()
    //             setTopThreeSongs(topThreeData.data)
    //         } else {
    //             console.log('response error!')
    //             setIsError(true)
    //         }
    //     } catch (error) {
    //         console.log('fetch error!')
    //         setIsError(true)
    //     }
    // }

    useEffect(() => {
        getArtist(params.artistId)
        getTopThree(params.artistId)
    }, [])

    console.log(topThreeSongs)
    return (
        <>
            <div className="row">
                <div className="col-12 col-md-10 col-lg-10 mt-5">
                    <h2 className="titleMain">{artistToDisplay.name}</h2>
                    <div id="followers">{artistToDisplay.nb_fan} followers</div>
                    <div className="d-flex justify-content-center" id="button-container">
                        <button className="btn btn-success me-2 mainButton" id="playButton">
                            PLAY
                        </button>
                        <button className="btn btn-outline-light mainButton" id="followButton">
                            FOLLOW
                        </button>
                    </div>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-10 offset-1 col-md-10 col-lg-10 p-0">
                    <div class="mt-4 d-flex justify-content-start">
                        <h2 class="text-white font-weight-bold">Tracks</h2>
                    </div>
                    <div class="pt-5 mb-5">
                        <div class="row" id="apiLoaded">
                            {
                                topThreeSongs?.map((song) => (
                                    <div class="col-sm-auto col-md-auto text-center mb-5">
                                        <Link to="/">
                                            <img
                                                class="img-fluid"
                                                src={song?.album?.cover_xl}
                                                alt="1"
                                            />
                                        </Link>
                                        <p>
                                            <Link to='/'><div> Song:  {song.title_short} </div></Link>
                                            <br />
                                            <Link to={"/album-page/" + song?.album?.id}><div> Album: {song?.album?.title} </div></Link>
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDisplay)