import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.onSearch = this.onSearch.bind(this);
    this.showRepos = this.showRepos.bind(this);
  }

  onSearch (term) {
    console.log(`${term} was searched`);
    var obj = {repoName: term};
    $.ajax({
      type: "POST",
      url: '/repos',
      data: JSON.stringify(obj),
      success: () => {
        console.log('success');
        this.showRepos();
      },
      contentType: "application/json",
    });
  }

  showRepos() {
    axios.get('/repos')
    .then((response) => {
      this.setState({repos: response.data})
    })
    .catch((err) => {console.log(err);})
  }

  componentDidMount() {
    this.showRepos();
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.onSearch}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));