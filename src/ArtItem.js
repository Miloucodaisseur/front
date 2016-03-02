import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';


class ArtItem extends React.Component {
  constructor() {
    super();
  }

componentDidMount(){
  this.setState({
    id: this.props.id,
    name: this.props.name,
    rating: this.props.rating,
    created_at: this.props.created_at,
    updated_at: this.props.updated_at
  })
}

render() {
  return(
    <div>
  <li><Link to={'/arts/${this.state.id}'}>{this.state.name}</Link> {this.state.rating}</li>
    </div>
  )
 }
}

export default ArtItem;
