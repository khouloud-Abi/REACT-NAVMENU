import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route } from "react-router-dom";

const Home = () => <h1>Home component here</h1>;

const Services = () => <h1>Services component here</h1>;

const Entrepreneurs = () => <h1>Entrepreneurs</h1>;
const Students = () => <h1>Students</h1>;
const Hobby = () => <h1>Hobbyists</h1>;

const Contact = () => <h1>Contact component here</h1>;

const Main = () => (
  <div>
    <Link to="/home" className="btn">
      Home{" "}
    </Link>

    <Link to="/services">
      <div className="dropdown">
        <Link to="/services/" className="btn">
          Services
          <div className="dropdown-content">
            <Link to="/services/entrepreneurs">For entrepreneurs</Link>
            <Link to="/services/students">For students</Link>
            <Link to="/services/hobby">For hobbyists</Link>
          </div>
        </Link>
      </div>
    </Link>

    <Link to="/contact" className="btn">
      Contact
    </Link>
    <div>
      <Route exact path="/home" component={Home} />

      <Route path="/services" component={Services} />
      <Route
        path="/services/entrepreneurs"
        component={(Services, Entrepreneurs)}
      />
      <Route path="/services/students" component={(Services, Students)} />
      <Route path="/services/hobby" component={(Services, Hobby)} />

      <Route path="/contact" component={Contact} />
    </div>
  </div>
);

export default Main;
