import React, { Component } from 'react';

export class NavBar extends Component {
    render() {
        return (
            <>
               <nav>
                   <ul>
                       <li><a href="/">Home</a></li>
                       <li>Play Music</li>
                       <li>Playlist</li>
                       <li><a href="/about"> About us</a></li>
                   </ul>
               </nav>
           </>
        )
    }
}

export default NavBar;
