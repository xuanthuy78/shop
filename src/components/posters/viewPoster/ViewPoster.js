import React, { Component } from "react";
import imgPoster from '../../../../src/images/poster.jpg';
import './ViewPoster.scss';

export class ViewPoster extends Component {
  render() {
    return (
      <div className="ViewPoster">
        <div className="container">
          <div className="poster-content mt-5">
            <div className="row">
              <div className="col-sm-4 poster-image">
                <img className="image-resize" src={imgPoster} alt="Poster"/>
              </div>
              <div className="col-sm-8">
                <div className="single-item-body">
                  <h3 className="single-item-title">Premium Quality</h3>
                  <h3 className="single-item-price">
                    <span>$34.55</span>
                  </h3>
                </div>
                <div className="single-item-desc">
                  <p>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                  </p>
                </div>
                <div className="single-item-options">
                  <div className="shop-cart"> 
                    <form class="form-inline shop-cart" action="/action_page.php">
                      <input type="number" className="form-control form-control-lg" />
                      <button type="button" class="btn btn-primary btn-lg">Add to cart</button>
                    </form>
                  </div>
                  <div className="category">
                    <p class="category-title">SKU: POSTER-PREMIUM-QUALITY Category: Posters</p>
                  </div> 
                </div>
              </div>
            </div>
          </div>
          <div className="woocommerce-nav mt-5">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#menu1">
                  Menu 1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#menu2">
                  Menu 2
                </a>
              </li>
            </ul>
            {/* Tab panes */}
            <div className="tab-content">
              <div id="home" className="container tab-pane active">
                <br />
                <h3>HOME</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div id="menu1" className="container tab-pane fade">
                <br />
                <h3>Menu 1</h3>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div id="menu2" className="container tab-pane fade">
                <br />
                <h3>Menu 2</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewPoster;
