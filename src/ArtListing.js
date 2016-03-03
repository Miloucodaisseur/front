import React from 'react';
import jQuery from 'jquery';
import ArtItem from './ArtItem';
import { Link } from 'react-router';

class ArtListing extends React.Component {
  constructor() {
    super();

    this.state = {
      arts: []
    };
console.log(this.state.arts);
  }


  componentDidMount() {
    let component = this;

    jQuery.getJSON("http://damp-wave-16968.herokuapp.com/arts/", function(data) {
     console.log("getting data");

    component.setState({
      arts: data.arts
    });
  });
}

render() {
  return (
    <div>
    <h1>List of Art</h1>
    {this.state.arts.map(function(art, i) {
      return(
        <ArtItem key={art.id} id={art.id} name={art.name} description={art.description} origin={art.origin} rating={art.rating} />
      );
    }, this)}
  </div>
  );
 }
}

export default ArtListing;
