import React from "react";

const Planets = () => {

    return(
        <>
        <h3 className="text-danger mt-4">Planets</h3>

        <div className="card w-25">
        <img className="card-img-top" src="..." alt="Card image cap"></img>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-danger me-1"><i class="fa fa-heart ms-1"></i></a>
            <a href="#" className="btn btn-primary">Learn More</a>
            </div>
        </div> 
      </>
    );
}


export default Planets