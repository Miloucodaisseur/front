import React from 'react';
import ArtListing from './ArtListing'

class App extends React.Component {
  constructor(){
    super();
  }

    render() {
        return (
          <div>
          <h1>List of various paintings and photographs</h1>
            <ArtListing />
          </div>
        );
    }
}

export default App;
