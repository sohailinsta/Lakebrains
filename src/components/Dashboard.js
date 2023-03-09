import React from "react";
import "./Dashboard.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
function Dasboard() {
  return (
    <div className="container">
      <div className="dashboardContainer">
        <div className="navbar container pt-4">
          <div className="navbarItems d-flex">
            <MenuIcon />
            <img
              className="NavbarLogo"
              src="https://www.seekpng.com/png/full/1-15578_nike-logo-png-nike-logo-white-png.png"
              alt="logo"
              width="50px"
              height="20px"
            ></img>
            <div className="d-flex ms-5">
              <h6 className="ms-4">New Releases</h6>
              <h6 className="ms-4">Men</h6>
              <h6 className="ms-4">Women</h6>
              <h6 className="ms-4">Girls</h6>
              <h6 className="ms-4">Kids</h6>
              <h6 className="ms-4">Sales</h6>
              <h6 className="ms-4">Collections</h6>
            </div>
            <div className="search-box">
              <SearchIcon className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search"
              />
            </div>
            <HomeOutlinedIcon className="ms-4" />
            <Person2OutlinedIcon className="ms-4" />
          </div>
        </div>
        <hr className="horiontalLine"></hr>
        <div className="section container mt-5">
          <div className="row">
            <div className="col-6">
              <h5 className="sectionTitle mt-4">Zoom Pegasus</h5>
              <h1 className="sectionSubTitle mt-4">Air 32</h1>
              <p className="sectionText mt-4">
                The Men’s Nike AIR Zoom Pegasus 32 is a sports shoe combines a
                lightweight contoured nylon plate for firm grip.
              </p>
              <div className="sectionSubText d-flex align-items-center">
                <p className="priceTag">$170</p>
                <p className="priceTagTwo">$120</p>
              </div>
              <button type="button" class="btn btn-primary sectionButton">
                Get This Product
              </button>
            </div>
            <div className="col-6">
              <div className="sectionLeft">
                <div className="sectionLeftTitle"></div>
                <img
                  className="sectionLeftImg"
                  src="/images/nike.png"
                  alt="nike"
                />
              </div>
              <div className="sectionLeftRating">
                <span class="fa fa-star checked sectionRatingStart ms-2"></span>
                <span class="fa fa-star checked sectionRatingStart ms-1"></span>
                <span class="fa fa-star checked sectionRatingStart ms-1"></span>
                <span class="fa fa-star checked sectionRatingStart ms-1"></span>
                <span class="fa fa-star ms-1"></span>
                <p className="ratingText">4 out of 5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dasboard;
