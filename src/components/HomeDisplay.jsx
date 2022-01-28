import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getHomeDataAction } from '../redux/actions'

const mapStateToProps = state => ({
    searchTerm: state.artist.searchTerm,
    homeDisplay: state.artist.homeDisplay
})
const mapDispatchToProps = dispatch => ({
    getHomeData: (searchTerm) => {
        dispatch(getHomeDataAction(searchTerm))
    }
})


const HomeDisplay = ({ searchTerm, getHomeData, homeDisplay }) => {

    const [results, setResults] = useState([])
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        getHomeData(searchTerm)
    }, [searchTerm])

    return (
        <div className="row justify-content-center">
            <div className="col-10">
                <div id="results">
                    <h2 className="ps-3 text-white">Recently Played</h2>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                        {
                            homeDisplay.slice(0, 12).map(r => (
                                <div key={r.id} className="col text-center">
                                    <Link to={"/album-page/" + r.album.id}>
                                        <img
                                            className="img-fluid"
                                            src={r.album.cover_medium}
                                            alt={r.album.title + " cover"}
                                        />
                                    </Link>
                                    <p>
                                        <Link to={"/album-page/" + r.album.id}>
                                            <div>{r.album.title}</div>
                                        </Link>
                                        <br />
                                        <Link to={"/artist-page/" + r.artist.id}>
                                            <div>{r.artist.name}</div>
                                        </Link>
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeDisplay)