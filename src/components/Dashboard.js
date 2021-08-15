import {useState, useEffect} from 'react'
import useAuth from './useAuth'
import { Container, Form } from 'react-bootstrap';
import SpotifyWebApi from 'spotify-web-api-node';
// import { access } from 'fs';

const spotifyApi = new SpotifyWebApi({
    clientId:'e1fe8085e345416ea70a5881724413af',
})
export default function Dashboard({code}) {
    const accessToken = useAuth(code);
    const [search,setSearch] = useState();
    const [searchResult,setSearchResult] = useState([]);

    useEffect(()=>{
        if(!accessToken) return spotifyApi.setAccessToken(accessToken)
    },[accessToken]);

    useEffect(()=>{
        if(!search) return setSearchResult([]);
        if(accessToken) return 
        // there is an error here in this line
        spotifyApi.searchTracks(search).then(res=>{
            res.body.tracks.items.map(track=>{
                return{
                    artist: track.artists[0].name,
                    title:track.name,
                    uri:track.uri,
                    albumUrl: track.albumUrl.images,
                }
            });
            
        });

    },[search,accessToken])
    return (
        <Container className= 'd-flex-column py-2' style={{height:'100vh'}}>
            <Form.Control type ='search' placeholder='Search for Song/Artist' value = {search} onChange={e=>setSearch(e.target.value)}/>

            <div className ='flex-grow-1 my-2' style ={{overflowY:'auto'}}>
                Songs
            </div>
            <div>
                Bottom
            </div>
        </Container>
    )
}
