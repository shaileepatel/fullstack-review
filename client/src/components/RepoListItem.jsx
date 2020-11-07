import React from 'react';

var RepoListItem = (props) => {
  return (
    <div>
      <div>
        User: {props.repo.ownerName}
      </div>
      <div>
        Repo Name: {props.repo.name}
      </div>
      <div>
        Repo Link: <a href={props.repo.link}>{props.repo.link}</a>
      </div>
      <br/>
    </div>
  )
}

export default RepoListItem;