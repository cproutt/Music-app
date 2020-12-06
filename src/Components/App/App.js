import React from 'react';
import './App.css';
import SearchBar from '../Playlist/Playlist.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import '../../util/Spotify.js';

class App extends React.Component {
    constuctor(props){
        this.state = {
            searchResults: [],
            playlistName: 'Playlist Name',
            playlistTracks: [{
                name: 'Kendrick Lamar',
                artist: 'Kendrick Lamar',
                album: 'Kendrick Lamar',
                id: 'Kendrick Lamar'
            }]
        };
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.search = this.search.bind(this);
    }
    
    addTrack(track){
        let tracks = this.state.playlistTracks;
        if(tracks.find(savedTrack => savedTrack.id === track.id)){
           return;
           } else {
            tracks.push(track);
            this.setState({playlistTracks: tracks});
           }
    }
    
    removeTrack(track){
       let tracks = this.state.playlistTracks;
        tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
        
        this.setState({playlistTracks: tracks});
    }
    
    updatePlaylistName(name){
        this.setState({playlistTracks: name});
    }
    
    savePlaylist(){
        const trackURIs = track.state.playlistTracks.map(track => track.uri);
    }
    
    search(term){
        Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults});
    });
    }
    
    render(){
        return(
            <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
      <Playlist platlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
    </div>
  </div>
</div>
        )
    }
}

export default App;
