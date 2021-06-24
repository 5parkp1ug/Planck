import React from "react";

const LinkTracking = () => {
    return (
        <div>
            <div className="page-header">
                <h3 className="page-title"> Link Tracking </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tracking</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Link Tracking</li>
                    </ol>
                </nav>
            </div>
        </div>
    );
}

export default LinkTracking;