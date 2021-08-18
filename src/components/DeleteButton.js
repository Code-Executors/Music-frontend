import axios from 'axios'
import React, { Component } from 'react'

export class DeleteButton extends Component {
    
    deleteHandler() {
        axios.delete(`http://localhost:3001/songs/${this.props.id}`).then((response) => {
            this.props.afterDelete(response.data.playlist)
        })
    }

    render() {
        console.log(this.props.id);
        return (
            <div>
                <button onClick={() => this.deleteHandler()}>Delete Song</button>
            </div>
        )
    }
}

export default DeleteButton
