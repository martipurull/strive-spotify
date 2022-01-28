import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SideBar from './components/SideBar'
import HomePage from './components/HomePage'
import AlbumPage from './components/AlbumPage'
import ArtistPage from './components/ArtistPage'
import NotFound from './components/NotFound'
import BottomBar from './components/BottomBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useState } from 'react';

function App() {
  const [albumId, setAlbumId] = useState(null)
  const [artistId, setArtistId] = useState(null)

  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid>
          <SideBar />
          <Row>
            <Routes>
              <Route path="/" element={<HomePage setAlbumId={setAlbumId} setArtistId={setArtistId} />} />
              <Route path="/album-page/:albumId" element={<AlbumPage albumId={albumId} />} />
              <Route path="/artist-page/:artistId" element={<ArtistPage artistId={artistId} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Row>
          <BottomBar />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;