
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Link } from "react-router-dom";

function Navbar() {

    const [categories,setCategories] = useState( [])
    useEffect(() => {
        axios({
            method:"GET",
            url: 'http://127.0.0.1:8000/api/category/'
        }).then(response => {
            setCategories(response.data)
        })
    },[])

return (
    <div className="App">
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {categories.map(c =>(
                        <Link className="nav-link" to={{ pathname: `/category/${c.id}/`, fromDashboard: false}}>{c.name}</Link>
                        ))}

                    </ul>
                    <span className="navbar-text">
        Navbar text with an inline element
      </span>
                </div>
            </div>
        </nav>    </div>
  );
}

export default Navbar ;
