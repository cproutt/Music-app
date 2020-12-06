import React from 'react';
import './TrackList.css';
import Track from '../Track/Track.js';

class TrackList extends React.Component{
    render(){
        return(
            <div class="TrackList">
         {
            this.props.tracks.map(track => {
            return <Track tracks={this.props.playlistTracks}
            key={track.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval='true' />
            })}
            </div>
        );
    }
}

export default TrackList;