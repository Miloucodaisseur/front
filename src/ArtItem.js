import React from 'react';
import jQuery from 'jquery';

class ArtItem extends React.Component {
  constructor(){
    super();
  }

componentDidMount(){
  this.setState({
    id: this.props.id,
    name: this.props.name,
    description: this.props.description,
    origin: this.props.origin,
    date_origin: this.props.date_origin,
    image: this.props.image,
    rating: this.props.rating,
    created_at: this.props.created_at,
    updated_at: this.props.updated_at
  })
}

render() {
  return(
    <div>
    <ul>
    <li><strong>{this.state.name} ({this.state.rating})</strong></li>
    <li><em>Description:</em> {this.state.description}</li>
    <li><em>Origin:</em> {this.state.origin}</li>
    <li><em>Date origin:</em> {this.state.date_origin}</li>
    </ul>
  )
 }
}

export default ArtItem;
