import { useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import './Profile.sass';

import { Button } from '../../components';
import { profilePng } from '../../assets/images';
import { logoutUser } from '../../redux/actions/user';

function Profile({ dispatch }) {
    const state = useSelector(state => state);

    if (!state.user.loggedIn) {
        return <Redirect to="/login" />
    }
    const { name, surname, email, phone } = state.user.currentUser;

    const handleLogOut = () => {
        if (window.confirm('Вы действительно хотите выйти?')) {
            dispatch(logoutUser());
        }
    };

    return (
        <div className="content">
            <div className="header_bg"></div>
            <div className="profile_bg">
                <div className="container">
                    <div className="profile_wrapper">
                        <img src={profilePng} alt="pic" className="profile_img"/>
                        <div className="profile_user-data">
                            <div className="profile_user-name">{`${name} ${surname}`}</div>
                            <div className="profile_user-string">
                                <div className="profile_user-label">E-mail </div>
                                <div className="profile_user-value">{email}</div>
                            </div>
                            <div className="profile_user-string">
                                <div className="profile_user-label">Телефон </div>
                                <div className="profile_user-value">{phone}</div>
                            </div>
                        </div>
                        <Button onClickAction={handleLogOut}>Выйти</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;