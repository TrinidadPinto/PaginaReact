import React from "react";

const Card = (props) => {
    const { title, description } = props.cards;
    return (
        <div className="card h-100">
            <div className="bg-light d-flex justify-content-center align-items-center" 
                style={{ height: "200px" }}
            >
                <div className="text-muted">500x325</div>
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <hr style={{ border: 'none', height: '1px', backgroundColor: '#343a40', margin: '0 -15px', marginBottom: '20px' }} />
                <button className="btn btn-primary">Find out More!</button>
            </div>
        </div>
    );
};

export default Card;