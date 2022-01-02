import React from "react";

function Body() {
  return (
    <div>
      {/* first section */}
      <div className="container text-center mt-5">
        <p>lorem lorem lorem</p>
        <h2>Products</h2>
      </div>

      <div class="row p-5 row-cols-1 row-cols-md-3 g-4 container-fluid" style={{marginLeft: "50px"}}>
        <div class="col" style={{ height: "300px" }}>
          <div class="card h-100 bg-light" style={{width:"80%"}}></div>
        </div>
        <div class="col" style={{ height: "300px" }}>
          <div class="card h-100 bg-light" style={{width:"80%"}}></div>
        </div>
        <div class="col" style={{ height: "300px" }}>
          <div class="card h-100 bg-light" style={{width:"80%"}}></div>
        </div>
      </div>

      {/* second section */}
      <div className="container text-center mt-3">
        <p>lorem lorem lorem</p>
        <h2>Services</h2>
      </div>

      <div class="row row-cols-1 row-cols-md-3 g-4 container-fluid p-5" style={{marginLeft: "50px"}}>
        <div class="col">
          <div class="card h-100 text-center" style={{ width: "80%" }}>
            <img
              src="..."
              class="card-img-top bg-light"
              style={{ height: "150px" }}
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Website Design & Developement</h5>
              <p class="card-text">
                This is a wider card witht equal height action.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Read More</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 text-center" style={{ width: "80%" }}>
            <img
              src="..."
              class="card-img-top bg-light"
              style={{ height: "150px" }}
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Website Design & Developement</h5>
              <p class="card-text">
                This is a wider card witht equal height action.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Read More</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 text-center" style={{ width: "80%" }}>
            <img
              src="..."
              class="card-img-top bg-light"
              style={{ height: "150px" }}
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Website Design & Developement</h5>
              <p class="card-text">
                This is a wider card witht equal height action.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Read More</small>
            </div>
          </div>
        </div>
        
      </div>

      {/* third section */}
      <div className="container text-center mt-3">
        <p>lorem lorem lorem</p>
        <h2>Portfolio/Case Studies</h2>
      </div>

      <div class="row p-5 row-cols-1 row-cols-md-3 g-4 container-fluid" style={{marginLeft: "50px"}}>
        <div class="col" style={{ height: "300px" }}>
          <div class="card h-100 bg-light" style={{width:"80%"}}></div>
        </div>
        <div class="col" style={{ height: "300px" }}>
          <div class="card h-100 bg-light" style={{width:"80%"}}></div>
        </div>
        <div class="col" style={{ height: "300px" }}>
          <div class="card h-100 bg-light" style={{width:"80%"}}></div>
        </div>
      </div>

      {/* fourth section */}
      <div className="container text-center mt-3">
        <p>lorem lorem lorem</p>
        <h2>Developer On Demand</h2>
      </div>

      <div class="row p-5 row-cols-1 row-cols-md-3 g-4 container-fluid" style={{marginLeft: "50px"}}>
        <div class="col" style={{ height: "300px" }}>
          <div class="card h-100 bg-light" style={{width:"80%"}}></div>
        </div>
        <div class="col" style={{ height: "300px" }}>
          <div class="card h-100 bg-light" style={{width:"80%"}}></div>
        </div>
        <div class="col" style={{ height: "300px" }}>
          <div class="card h-100 bg-light" style={{width:"80%"}}></div>
        </div>
      </div>

      {/* last section */}
      <div className="p-5  pt-5 pb-3 w-100 h-50 container-fluid bg-primary text-white d-flex">
        <div className="w-50">
          <h1>Let's Discuss</h1>
          <p>lorem jdf djfkjdkfj jhdf dfjhs dfkdf hfggf hdsfk</p>
        </div>
        <div style={{ marginLeft: "150px" }} class="w-50">
          <form class="d-flex h-50">
            <input
              class="form-control me-10"
              type="search"
              placeholder=""
              aria-label="Search"
            />
            <button
              class="btn w-50 btn-danger btn-outline-warning text-white align-middle"
              type="submit"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Body;
