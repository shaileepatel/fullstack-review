import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.onSearch = this.onSearch.bind(this);
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
      },
      contentType: "application/json",
      dataType: 'json'
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.onSearch}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));