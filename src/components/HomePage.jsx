import TopBar from './TopBar'
import HomeDisplay from './HomeDisplay'


const HomePage = () => {
    return (
        <div className="col-12 col-md-9 offset-md-3 mainPage">
            <TopBar />
            <HomeDisplay />
        </div>
    )
}

export default HomePage