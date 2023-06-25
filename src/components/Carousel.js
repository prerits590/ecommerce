import React from "react";

const Carousel=({h2Text})=> {
  productScroll();

  function productScroll() {
    let slider = document.getElementById("slider");
    let next = document.getElementsByClassName("pro-next");
    let prev = document.getElementsByClassName("pro-prev");
    // let slide = document.getElementById("slide");
    let item = document.getElementById("slide");

    for (let i = 0; i < next.length; i++) {
      //refer elements by className name

      let position = 0; //slider postion

      prev[i].addEventListener("click", function () {
        //click previos button
        if (position > 0) {
          //avoid slide left beyond the first item
          position -= 1;
          translateX(position); //translate items
        }
      });

      next[i].addEventListener("click", function () {
        if (position >= 0 && position < hiddenItems()) {
          //avoid slide right beyond the last item
          position += 1;
          translateX(position); //translate items
        }
      });
    }

    function hiddenItems() {
      //get hidden items
      let items = getCount(item, false);
      let visibleItems = slider.offsetWidth / 210;
      return items - Math.ceil(visibleItems);
    }
  }
  let slide = document.getElementById("slide");
  function translateX(position) {
    //translate items
    slide.style.left = position * -210 + "px";
  }

  function getCount(parent, getChildrensChildren) {
    //count no of items
    let relevantChildren = 0;
    let children = parent.childNodes.length;
    for (let i = 0; i < children; i++) {
      if (parent.childNodes[i].nodeType != 3) {
        if (getChildrensChildren)
          relevantChildren += getCount(parent.childNodes[i], true);
        relevantChildren++;
      }
    }
    return relevantChildren;
  }

  return (
    <div className="container px-0">
      <div className="row px-0">
        <div className="col px-0 py-5">
          <h2>{h2Text}</h2>
          <div className="slider " id="slider">
            <div className="slide" id="slide">
              <div className="item"></div>

              <div className="item">
                <div className="card2">
                  <img
                    src="	https://www.3sixteen.com/cdn/shop/files/Pic_52_of_96_900x.jpg?v=1680202393"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body2">
                    <p className="card-title2">Card title</p>
                    <p className="card-text2">Some quick</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card2">
                  <img
                    src="	https://www.3sixteen.com/cdn/shop/files/Pic_52_of_96_900x.jpg?v=1680202393"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body2">
                    <p className="card-title2">Card title</p>
                    <p className="card-text2">Some quick</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card2">
                  <img
                    src="	https://www.3sixteen.com/cdn/shop/files/Pic_52_of_96_900x.jpg?v=1680202393"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body2">
                    <p className="card-title2">Card title</p>
                    <p className="card-text2">Some quick</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card2">
                  <img
                    src="	https://www.3sixteen.com/cdn/shop/files/Pic_52_of_96_900x.jpg?v=1680202393"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body2">
                    <p className="card-title2">Card title</p>
                    <p className="card-text2">Some quick</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card2">
                  <img
                    src="	https://www.3sixteen.com/cdn/shop/files/Pic_52_of_96_900x.jpg?v=1680202393"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body2">
                    <p className="card-title2">Card title</p>
                    <p className="card-text2">Some quick</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card2">
                  <img
                    src="	https://www.3sixteen.com/cdn/shop/files/Pic_52_of_96_900x.jpg?v=1680202393"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body2">
                    <p className="card-title2">Card title</p>
                    <p className="card-text2">Some quick</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card2">
                  <img
                    src="	https://www.3sixteen.com/cdn/shop/files/Pic_52_of_96_900x.jpg?v=1680202393"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body2">
                    <p className="card-title2">Card title</p>
                    <p className="card-text2">Some quick</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card2">
                  <img
                    src="	https://www.3sixteen.com/cdn/shop/files/Pic_52_of_96_900x.jpg?v=1680202393"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body2">
                    <p className="card-title2">Card title</p>
                    <p className="card-text2">Some quick</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card2">
                  <img
                    src="	https://www.3sixteen.com/cdn/shop/files/Pic_52_of_96_900x.jpg?v=1680202393"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body2">
                    <p className="card-title2">Card title</p>
                    <p className="card-text2">Some quick</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card2">
                  <img
                    src="	https://www.3sixteen.com/cdn/shop/files/Pic_52_of_96_900x.jpg?v=1680202393"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body2">
                    <p className="card-title2">Card title</p>
                    <p className="card-text2">Some quick</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card2">
                  <img
                    src="	https://www.3sixteen.com/cdn/shop/files/Pic_52_of_96_900x.jpg?v=1680202393"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body2">
                    <p className="card-title2">Card title</p>
                    <p className="card-text2">Some quick</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="ctrl-btn pro-prev">
              <i class="fa-solid fa-arrow-left"></i>
            </button>
            <button className="ctrl-btn pro-next">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
