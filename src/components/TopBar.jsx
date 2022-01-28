import { Link } from 'react-router-dom'


const TopBar = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                <Link to="/"><div id="Rock" href="#">ROCK</div></Link>
                <Link to="/"><div id="Pop" href="#">POP</div></Link>
                <Link to="/"><div id="Hip Hop" href="#">HIP HOP</div></Link>
                <Link to="/"><div href="#">NEW RELEASES</div></Link>
                <Link to="/"><div href="#">DISCOVER</div></Link>
            </div>
        </div>
    )
}

export default TopBar