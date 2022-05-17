import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navigation">
        <div className="nav-container">
          <div className="brand">
            <a href="#!">Logo</a>
          </div>
          <nav>
            <div className="nav-mobile">
              <a id="nav-toggle" href="#!">
                <span></span>
              </a>
            </div>
            <ul className="nav-list">
              <li>
                <a href="#!">Company</a>
              </li>
              <li>
                <a href="#!">Brands</a>
              </li>
              <li>
                <a href="#!">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="slider">
        <input
          class="slider__dot"
          type="radio"
          name="slider"
          title="slide1"
          checked="checked"
        />
        <input class="slider__dot" type="radio" name="slider" title="slide2" />
        <input class="slider__dot" type="radio" name="slider" title="slide3" />
        <input class="slider__dot" type="radio" name="slider" title="slide4" />
        <div class="slider__inner">
          <div class="slider__body">
            <i class="slider__image fa fa-codepen"></i>
            <h2 class="slider__caption">codepen</h2>
            <p class="slider__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              cupiditate omnis possimus illo quos, corporis minima!
            </p>
          </div>
          <div class="slider__body">
            <i class="slider__image fa fa-newspaper-o"></i>
            <h2 class="slider__caption">newspaper-o</h2>
            <p class="slider__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              cupiditate omnis possimus illo quos, corporis minima!
            </p>
          </div>
          <div class="slider__body">
            <i class="slider__image fa fa-television"></i>
            <h2 class="slider__caption">television</h2>
            <p class="slider__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              cupiditate omnis possimus illo quos, corporis minima!
            </p>
          </div>
          <div class="slider__body">
            <i class="slider__image fa fa-diamond"></i>
            <h2 class="slider__caption">diamond</h2>
            <p class="slider__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              cupiditate omnis possimus illo quos, corporis minima!
            </p>
          </div>
        </div>
      </div>
      <div class="person">
        <div class="container">
          <div class="container-inner">
            <div class="circle" />
            <img
              class="img img1"
              src="https://simba.co.za/image-files/brand-flavours/lay's-japanese-teriyaki-chicken.png"
            />
          </div>
        </div>
        <div class="divider"></div>
        <div class="name">Alma</div>
        <div class="title">Product Manager</div>
      </div>
      <div class="person">
        <div class="container">
          <div class="container-inner">
            <div class="circle" />
            <img
              class="img img1"
              src="https://simba.co.za/image-files/brand-flavours/lay's-japanese-teriyaki-chicken.png"
            />
          </div>
        </div>
        <div class="divider"></div>
        <div class="name">Alma</div>
        <div class="title">Product Manager</div>
      </div>
      <div class="person">
        <div class="container">
          <div class="container-inner">
            <div class="circle" />
            <img
              class="img img1"
              src="https://simba.co.za/image-files/brand-flavours/lay's-japanese-teriyaki-chicken.png"
            />
          </div>
        </div>
        <div class="divider"></div>
        <div class="name">Alma</div>
        <div class="title">Product Manager</div>
      </div>
      <div class="person">
        <div class="container">
          <div class="container-inner">
            <div class="circle" />
            <img
              class="img img1"
              src="https://simba.co.za/image-files/brand-flavours/lay's-japanese-teriyaki-chicken.png"
            />
          </div>
        </div>
        <div class="divider"></div>
        <div class="name">Alma</div>
        <div class="title">Product Manager</div>
      </div>
      <div class="person">
        <div class="container">
          <div class="container-inner">
            <div class="circle" />
            <img
              class="img img1"
              src="https://simba.co.za/image-files/brand-flavours/lay's-japanese-teriyaki-chicken.png"
            />
          </div>
        </div>
        <div class="divider"></div>
        <div class="name">Alma</div>
        <div class="title">Product Manager</div>
      </div>
      <footer>
        <div class="top_header">
          <section>
            <span>
              <i class="fa fa-map-marker"></i>
            </span>
            <span>Street, full address, state/province, country, pincode</span>
          </section>
          <section>
            <span>
              <i class="fa fa-phone"></i>
            </span>
            <span>(00) 0000 0000</span>
          </section>
          <section>
            <span>
              <i class="fa fa-envelope"></i>
            </span>
            <span>info@websitename.com</span>
          </section>
        </div>

        <div class="bottom_content">
          <section>
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-telegram"></i>
            </a>
          </section>
        </div>
        <div class="copyright">
          Copyright © 2021 websitename - All rights reserved
        </div>
      </footer>
    </div>
  );
}

export default App;
