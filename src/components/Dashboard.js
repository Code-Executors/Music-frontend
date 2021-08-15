import {useState, useEffect} from 'react'
import useAuth from './useAuth'
import { Container, Form } from 'react-bootstrap';
import SpotifyWebApi from 'spotify-web-api-node';
import TrackSearchResult from './TrackSearchResult';
import Player from './Player';
// import { access } from 'fs';

const spotifyApi = new SpotifyWebApi({
    clientId:'29100d22a56f419e846f66a430615533',
})
export default function Dashboard({code}) {
    const accessToken = useAuth(code);
    const [search,setSearch] = useState('');
    const [searchResult,setSearchResult] = useState([]);

    useEffect(()=>{
        if(!accessToken) return spotifyApi.setAccessToken(accessToken)
    },[accessToken]);

    useEffect(()=>{
        if(!search) return setSearchResult([]);
        if(accessToken) return 
        // there is an error here in this line
        let cancel = false;
        spotifyApi.searchTracks(search).then(res=>{
            if(cancel) return
            console.log(res.body.tracks.items);
            setSearchResult(res.body.tracks.items.map(track=>{
                const smallestAlbumImage = track.album.images.reduce((smallest,image)=>{
                    if(image.height<smallest.height) return image
                    return smallest;

                },track.album.images[0]);
                return{
                    artist:track.artists[0].name,
                    title:track.name,
                    uri:track.uri,
                    albumUrl: smallestAlbumImage.url,
                }
            }));
            
        });
        return () => cancel = true;

    },[search,accessToken]);
    return (
        <Container className= 'd-flex-column py-2' style={{height:'100vh'}}>
            <Form.Control type ='search' placeholder='Search for Song/Artist' value = {search} onChange={e=>setSearch(e.target.value)}/>

            <div className ='flex-grow-1 my-2' style ={{overflowY:'auto'}}>
                {searchResult.map(track =>(
                    <TrackSearchResult track = {track} key = {track.uri} />
                ))}
            </div>
            <div>
                <Player accessToken ={accessToken}/>
            </div>
        </Container>
    )
}
