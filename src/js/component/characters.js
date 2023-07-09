import React from "react";

const Characters = () => {

    return( 
        <>
            <h3 className="text-danger">Characters</h3>

            <div className="card w-25">
            <img className="card-img-top" src="..." alt="Card image cap"></img>
                <div className="card-body">
                <h5 className="card-title">url/prop charcter name</h5>
                <p className="card-text">url/prop character description</p>
                <a href="#" className="btn btn-danger me-1"><i class="fa fa-heart ms-1"></i></a>
                <a href="#" className="btn btn-primary">Learn More</a>
                </div>
            </div> 
        </>
    );
}


export default Characters
