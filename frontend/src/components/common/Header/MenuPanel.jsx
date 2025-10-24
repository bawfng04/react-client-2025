import { React } from "react";

const MenuPanel = () => {
    return (
        <div className="menu-panel-container">
            <div className="menu-panel-content">
                <h2 className="menu-panel-title">Menu</h2>
                <ul className="menu-panel-list">
                    <li className="menu-panel-item">
                        <a href="/login" className="menu-panel-link">Login</a>
                    </li>
                    <li className="menu-panel-item">
                        <a href="/register" className="menu-panel-link">Register</a>
                    </li>
                    <li className="menu-panel-item">
                        <a href="/change-password" className="menu-panel-link">Change Password</a>
                    </li>
                    <li className="menu-panel-item">
                        <a href="/unauthorized" className="menu-panel-link">Unauthorized</a>
                    </li>
                    <li className="menu-panel-item">
                        <a href="/not-found" className="menu-panel-link">Not Found</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MenuPanel;