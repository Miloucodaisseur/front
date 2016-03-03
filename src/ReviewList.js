import React from 'react';
import JQuery from 'jquery';
import ReviewForm from './ReviewForm';

class ReviewList extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  reloadList(event) {
    let component = this;
    let artId = this.props.artId;

    jQuery.getJSON("http://damp-wave-16968.herokuapp.com/arts/" + artId + "/reviews", function(data){
      component.setState({
        reviews: data.reviews
      });
    });
  }

  componentDidMount() {
    this.reloadList();
  }

  render() {
    return
    <div>
      <h2>Reviews</h2>
      <div>

        <ReviewForm artId={this.props.artId} onChange={this.reloadList.bind(this)} />
      </div>
      {this.state.reviews.map(function(review, i) {
        return(
          <div>
            <p><strong>{review.name}</strong> rated it {review.rating}</p>
            <p>"{review.description}"</p>
          </div>
        );
      })}
    </div>
  }
}

export default ReviewList;
