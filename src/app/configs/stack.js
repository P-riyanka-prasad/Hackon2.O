import React, { useContext } from 'react';
import {DataContext} from './context';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
    Redirect
} from "react-router-dom";
import '../css/stack.css';
import Avatar from '@material-ui/core/Avatar';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AddPhotoAlternateRoundedIcon from '@material-ui/icons/AddPhotoAlternateRounded';
import ContactSupportRoundedIcon from '@material-ui/icons/ContactSupportRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import { useLocation } from 'react-router-dom';





const Stack = (props) => {
    const location = useLocation();
    const context = useContext(DataContext);
    
    if (context.User) {
        if (context.User.isLoggedin === true) {
            return(
                <main>
                    <div className="top-nav">
                        <div className="top-nav-logo">
                            <span>Te</span>ch<span>V</span>ed<span>a</span>
                        </div>

                        <div className="profile-info">
                            <span>{context.User.data.username} </span>
                            <Avatar src={context.User.data.photo} />
                        </div>
                    </div>
                    <div className="nav-container">
                        <div className="sidebar">
                            <div className="sidebar-content">
                                <di className={(location.pathname === "/dashboard") ? "sidebar-item active-item" : "sidebar-item"}>
                                    <HomeRoundedIcon className="sidebar-icon" />
                                    <div className="sidebar-label">Home</div>
                                </di>
                                <div className={(location.pathname === "/dashboard/explore") ? "sidebar-item active-item" : "sidebar-item"}>
                                    <SearchRoundedIcon className="sidebar-icon" />
                                    <div className="sidebar-label">Explore</div>
                                </div>
                                <div className={(location.pathname === "/dashboard/new-post") ? "sidebar-item active-item" : "sidebar-item"}>
                                    <AddPhotoAlternateRoundedIcon className="sidebar-icon" />
                                    <div className="sidebar-label">Add Post</div>
                                </div>
                                <div className={(location.pathname === "/dashboard/doubts") ? "sidebar-item active-item" : "sidebar-item"}>
                                    <ContactSupportRoundedIcon className="sidebar-icon" />
                                    <div className="sidebar-label">Doubts</div>
                                </div>
                                <div className={(location.pathname === "/dashboard/settings") ? "sidebar-item active-item" : "sidebar-item"}>
                                    <SettingsIcon className="sidebar-icon" />
                                    <div className="sidebar-label">Settings</div>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            {props.children}
                        </div>
                    </div>
                </main>
            );
        } else {
            return(
                <Redirect to='/login' />
            )       
        }
    } else {
        return(
            <div style={{display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }} >
                <CircularProgress />
            </div>
        )
    }
}


export default Stack;