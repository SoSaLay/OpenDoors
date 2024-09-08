import { useAuth0 } from '@auth0/auth0-react';
import "../CSS/Profile.css";

const Profile = () => {
    const { user, isAuthenticated, loginWithRedirect } = useAuth0();

    if (!isAuthenticated) {
        return (
            <div className="login-prompt">
                <h2>Please log in to view your profile</h2>
                <button className="login-button" onClick={loginWithRedirect}>
                    Log In
                </button>
            </div>
        );
    }

    return (
        <article className="profile-container">
            {user?.picture && (
                <div className="profile-image">
                    <img src={user?.picture || ''} alt="Profile" />
                </div>
            )}

            <div className="profile-info">
                <h2>{user?.name || "User"}</h2>

                <ul>
                    <li>Subscription: Free</li>
                    <li>Current Role: Student</li>
                </ul>

                <button className="edit-profile-button">Edit Profile</button>
            </div>
        </article>
    );
};

export default Profile;
