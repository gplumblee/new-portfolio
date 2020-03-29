import React from "react";

export default () => {
  return (
    <div id="contact" className="container">
      <div className="card">
        <img src="images/head-shot.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Greg Plumblee</h5>
          <p className="card-text">Studio City, CA</p>
          <p className="card-text">gplumblee@hotmail.com</p>
          <p className="card-text">(818) 522-5772</p>
          <div className="alert alert-secondary" role="alert">
            CONNECT
          </div>
          <a
            href="http://www.linkedin.com/in/gplumblee"
            className="fa fa-linkedin"
          ></a>
        </div>
      </div>
    </div>
  );
};
