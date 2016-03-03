import React from 'react';
import jQuery from 'jquery';

class ReviewItem extends React.Component {
  constructor() {
    super();
  }

    componentDidMount() {
      this.setState({
        id: this.props.id,
        name: this.props.name,
        description: this.props.description,
        rating: this.props.rating,
      });
    }

    render() {
      return(
        <div>
        <p>name: {this.props.name}</p>
        <p>description: {this.props.description}</p>
        <p>rating: {this.props.rating}</p>
        </div>
      );
    }
  }

  export default ReviewItem;
