import React from 'react';
import jQuery from 'jquery';
import Artitem from 'Artitem';

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
    {this.state.arts.map(function(art, i) {
      return(
        <ArtItem key={art.id} id={art.id} name={art.name} description={art.description} origin={art.origin} origin_date={art.origin_date} rating={art.rating} />
      );
    })}
  </div>
  );
 }
}

export default ArtListing;
