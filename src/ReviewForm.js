import React from 'react';
import jQuery from 'jquery';

class ReviewForm extends React.Component {
  constructor() {
    super();
  }

  createReview(event) {
    event.preventDefault();


  let component = this;
      let artId = this.props.artId;
      let name = this.refs.inputName.value;
      let rating = this.refs.inputRating.value;
      let description = this.refs.inputDescription.value;
      let newReview = {
        id: null,
        name: name,
        rating: rating,
        description: description
      };

      jQuery.ajax({
        type: "POST",
        url: "http://damp-wave-16968.herokuapp.com/arts/" + artId + "/reviews",
        data: JSON.stringify({
            review: newReview
        }),
        contentType: "application/json",
        dataType: "json"
      })

      .done(function(data) {
        component.props.onChange();
        component.refs.inputName.value = "";
        component.refs.inputRating.value = "";
        component.refs.inputDescription.value = "";
      })


    }

    render() {
      return(
        <div>
          <p><strong>Add review</strong></p>

          <form onSubmit={this.createReview.bind(this)}>
            <p>Name:</p> <input ref="inputName" />
            <p>Rating (1-5):</p> <input ref="inputRating" />
            <p>Description:</p> <input ref="inputDescription" />

            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
  }

  export default ReviewForm;
