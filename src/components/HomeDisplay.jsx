import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'



const HomeDisplay = () => {

    const [results, setResults] = useState([])
    const [isError, setIsError] = useState(false)

    const getData = async (artist) => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + artist, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGY4NmFhY2FhMjAwMTU1MmExODAiLCJpYXQiOjE2MzY2MzY5MzcsImV4cCI6MTYzNzg0NjUzN30.uqOJ27uEjuSzPvSujE9DuNRI0lJELmoanrTPYDsO6qU"
                }
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data.data)
                setResults(data.data)
            } else {
                console.log('There was an error')
                setIsError(true)
            }
        } catch (error) {
            setIsError(true)
            console.log(error.message)
        }
    }

    useEffect(() => {
        getData('bowie')
    }, [])

    return (
        <div className="row justify-content-center">
            <div className="col-10">
                <div id="results">
                    <h2 className="ps-3 text-white">Recently Played</h2>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                        {
                            results.slice(0, 12).map(r => (
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

export default HomeDisplay