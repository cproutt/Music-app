import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList.js';

class Playlist extends React.Component {
    constructor(props){
        super(props);
        this.handleNameChange = this.handleNameChange.bind();
    }
    
    handleNameChange(event){
       event.target.onNameChange(); 
    }
    
    render(){
        return(
            <div className="Playlist">
  <input value="New Playlist"/>
  <TrackList onRemove={this.props.onRemove} isRemoval='true' onchange={this.handleNameChange}/>
  <button className="Playlist-save" onclick={this.props.onSave}>SAVE TO SPOTIFY</button>
</div>
        );
    }
}

export default Playlist;