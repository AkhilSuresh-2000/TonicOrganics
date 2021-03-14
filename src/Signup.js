import React from "react";

export default function Signup() {
  return (
    <div className="container">
      <div className="col-12">
        <h1 className="text-center">Signup to start buying products!</h1>
        <form id="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <br/>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <br/>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Password</label>
            <input
              type="password"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <br/>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Re-enter Password</label>
            <input
              type="password"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <br/>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
