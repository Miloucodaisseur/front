import React from 'react';
import jQuery from 'jquery';

class ArtListing extends React.Component {
  constructor() {
    super();

    this.state = {
      arts: []
    };
  }

  componentDidMount() {
    let component = this;

    component.setState({
      arts: data.arts
    });
  });
}

render() {
  return (
    <div>
    <h1>Art list</h1>
    </div>
  );
 }
}

export default ArtListing;
