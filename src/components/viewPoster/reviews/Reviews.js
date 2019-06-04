import React, { Component } from "react";

export class Reviews extends Component {
  render() {
    return (
      <div id="reviews" className="tab-pane fade post-review">
        <div className="review mt-4">
          <h3 className="font-bold">Reviews (0)</h3>
          <p>There are no reviews yet.</p>
        </div>
        <div className="idea mt-2">
          <h3 className="font-bold">Be the first to review “Ship Your Idea”</h3>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <form>
            <div className="rating form-group">
              <p>Your rating *</p>
              <div>
                <fieldset className="rating">
                  <input
                    type="radio"
                    id="star5"
                    name="rating"
                    defaultValue={5}
                  />
                  <label
                    className="full"
                    htmlFor="star5"
                    title="Awesome - 5 stars"
                  />
                  <input
                    type="radio"
                    id="star4half"
                    name="rating"
                    defaultValue="4 and a half"
                  />
                  <label
                    className="half"
                    htmlFor="star4half"
                    title="Pretty good - 4.5 stars"
                  />
                  <input
                    type="radio"
                    id="star4"
                    name="rating"
                    defaultValue={4}
                  />
                  <label
                    className="full"
                    htmlFor="star4"
                    title="Pretty good - 4 stars"
                  />
                  <input
                    type="radio"
                    id="star3half"
                    name="rating"
                    defaultValue="3 and a half"
                  />
                  <label
                    className="half"
                    htmlFor="star3half"
                    title="Meh - 3.5 stars"
                  />
                  <input
                    type="radio"
                    id="star3"
                    name="rating"
                    defaultValue={3}
                  />
                  <label
                    className="full"
                    htmlFor="star3"
                    title="Meh - 3 stars"
                  />
                  <input
                    type="radio"
                    id="star2half"
                    name="rating"
                    defaultValue="2 and a half"
                  />
                  <label
                    className="half"
                    htmlFor="star2half"
                    title="Kinda bad - 2.5 stars"
                  />
                  <input
                    type="radio"
                    id="star2"
                    name="rating"
                    defaultValue={2}
                  />
                  <label
                    className="full"
                    htmlFor="star2"
                    title="Kinda bad - 2 stars"
                  />
                  <input
                    type="radio"
                    id="star1half"
                    name="rating"
                    defaultValue="1 and a half"
                  />
                  <label
                    className="half"
                    htmlFor="star1half"
                    title="Meh - 1.5 stars"
                  />
                  <input
                    type="radio"
                    id="star1"
                    name="rating"
                    defaultValue={1}
                  />
                  <label
                    className="full"
                    htmlFor="star1"
                    title="Sucks big time - 1 star"
                  />
                  <input
                    type="radio"
                    id="starhalf"
                    name="rating"
                    defaultValue="half"
                  />
                  <label
                    className="half"
                    htmlFor="starhalf"
                    title="Sucks big time - 0.5 stars"
                  />
                </fieldset>
              </div>
            </div>
            <div className="clearfix" />
            <div className="form-group">
              <label>Your review *</label>
              <textarea className="form-control" rows="5" id="comment" />
            </div>
            <div className="form-group row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                <label>Name *</label>
                <input className="form-control" id="name" type="text" />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                <label>Email *</label>
                <input className="form-control" id="email" type="text" />
              </div>
            </div>
            <div className="form-group form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" />
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Reviews;
