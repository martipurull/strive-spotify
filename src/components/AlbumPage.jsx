import TopBar from './TopBar'
import AlbumDisplay from './AlbumDisplay'


const AlbumPage = () => {
    return (
        <div className="col-12 col-md-9 offset-md-3 mainPage">
            <TopBar />
            <AlbumDisplay />
        </div>
    )
}

export default AlbumPage