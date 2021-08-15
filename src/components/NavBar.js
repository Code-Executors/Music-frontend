import React, { Component } from 'react'
import AboutUs from './AboutUs'

export class NavBar extends Component {
    render() {
        return (
            <div>
               <nav>
                   <ul>
                       <li>Home</li>
                       <li>Play Music</li>
                       <li>Playlist</li>
                       <li>About us</li>
                   </ul>
               </nav> 
            </div>
        )
    }
}

export default NavBar
