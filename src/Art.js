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
        <h1>{this.state.art.name}</h1>
        <h2>Author: {this.state.art.description}</h2>
        <p><strong>Summary:</strong> {this.state.art.origin}</p>
        <p><strong>Publication date:</strong> {this.state.art.origin_date}</p>

        <ReviewList artId={this.props.params.artId} />
      </div>
    );
  }
}

export default Art;
