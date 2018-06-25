import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import Videos from './components/Videos';
import Player from './components/Player';

const API_KEY = 'AIzaSyCPEl4Afw6gmJpyZndGuIJPXYtEC5gwCrI';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selection: null
    };
    this.search('world cup');
  }

  search(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selection: videos[0]
      }); //set
    });
  }

  render() {
    return (
      <div className="card">
        <SearchBar onTermChange={term => { this.search(term) }} />
        <Player video={this.state.selection} />
        <Videos onSelect={selection => this.setState({ selection })} videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));