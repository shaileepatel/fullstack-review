import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  search(e) {
    e.preventDefault();
    this.props.onSearch(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <div>
        <h4>Add more repos!</h4>
        <form onSubmit = {this.search}>
          Enter a github username: <input name = 'term' value={this.state.term} onChange={this.onChange}/>
          <button> Add Repos </button>
        </form>
      </div>
    )
  }
}

export default Search;