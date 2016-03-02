import React from 'react';
import jQuery from 'jquery';


class Art extends React.Component {
  constructor() {
    super();

    this.state = {
      art: {}
    };
  }

  componentDidMount() {
    this.findArt();
  }

  findArt() {
    let artId = this.props.params.artId;
    let component = this;

    jQuery.getJSON("https://bookreviewapi.herokuapp.com/books/" + artId, function(data) {
      console.log(data);

      component.setState({
        art: data.art,
      });
    });
  }

  render() {
    return(
      <div>
        <h1><strong>Name:</strong> {this.state.art.name} ({this.state.art.rating})</h1>
        <h2><strong>Description:</strong> {this.state.art.description}</h2>
        <p><strong>Origin:</strong> {this.state.art.origin}</p>

        <ReviewList artId={this.props.params.artId} />
      </div>
    );
  }
}

export default Art;
