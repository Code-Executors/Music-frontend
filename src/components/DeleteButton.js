import axios from 'axios'
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export class DeleteButton extends Component {
    deleteHandler(){
        axios.delete(`http://localhost:3001/songs/${this.props.id}`).then((response)=>{
            
            this.props.afterDelete(response.data.playlist)
        })
    }
    render() {
        console.log(this.props.id);
        return (
            <div>
                <Button onClick ={()=>this.deleteHandler()} variant="primary" style={{ width: "100%"}}>Delete Music</Button>{' '}
            </div>
        )
    }
}

export default DeleteButton
