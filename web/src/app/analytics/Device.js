import React from "react";

const Device = () => {
    return (
        <div>
            <div className="page-header">
                <h3 className="page-title"> Device </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Analytics</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Device</li>
                    </ol>
                </nav>
            </div>
        </div>
    );
}

export default Device;