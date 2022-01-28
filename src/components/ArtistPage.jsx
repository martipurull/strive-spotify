import TopBar from './TopBar'
import ArtistDisplay from './ArtistDisplay'


const ArtistPage = () => {

    return (
        <div className="col-12 col-md-9 offset-md-3 mainPage">
            <TopBar />
            <ArtistDisplay />
        </div>
    )
}

export default ArtistPage