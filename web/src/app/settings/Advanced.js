import React from "react";

const Advanced = () => {
    return (
        <div>
            <div className="page-header">
                <h3 className="page-title"> Advanced </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Settings</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Advanced</li>
                    </ol>
                </nav>
            </div>
        </div>
    );
}

export default Advanced;