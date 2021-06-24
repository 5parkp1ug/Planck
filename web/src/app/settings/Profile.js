import React from "react";

const Profile = () => {
    return (
        <div>
            <div className="page-header">
                <h3 className="page-title"> Profile </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Settings</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Profile</li>
                    </ol>
                </nav>
            </div>
        </div>
    );
}

export default Profile;