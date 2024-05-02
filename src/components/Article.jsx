import React from "react";

const Article = () => {
  return (
    <>
      <div className="mainBox">
        <div className="dateOne">11/12/2020</div>
        <div className="titleOne">On the Street in Brooklyn</div>
        <div className="imgOne">
          <img src="/blog-image-1.jpg" alt="" className="img1" />
        </div>
        <div className="txtContainerOne">
          <p className="Lorem">
            <span className="firstLetterLarge">L</span>orem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div className="box3">
            <div className="continues">
              <a href="/link">Continues...</a>
            </div>
          </div>
        </div>
        <div className="dateTwo">11/12/2020</div>
        <div className="titleTwo">Vintage in Vogue</div>
        <div className="imgTwo">
          <img src="/blog-image-2.jpg" alt="" className="img2" />
        </div>
        <div className="txtContainerTwo">
          <p className="Lorem">
            <span className="firstLetterLarge">L</span>orem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div className="box4">
            <div className="continues">
              <a href="/link">Continues...</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
