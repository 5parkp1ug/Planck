import React from "react";

const Overview = () => {
    return (
        <div>
            <div className="page-header">
                <h3 className="page-title"> Overview </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Analytics</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Overview</li>
                    </ol>
                </nav>
            </div>
        </div>
    );
}

export default Overview;
