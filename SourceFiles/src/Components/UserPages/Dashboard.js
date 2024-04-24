import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ProfilePicture from '../../Images/ProfilePicture.png'; 

const Dashboard = ({ }) => {
    return (
        <Fragment>
            <div className='main-container Dashboard'>
                <div class="profile-picture-container">
                    <img className='profile-picture' src={ProfilePicture} alt="Profile Picture" />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 introduction'>
                            <h1>Alex Spoon</h1>
                            <h3>Web Developer / Game Developer / Interactive Media</h3>
                            <div className='description'>
                                <h3>Boise State University Graduate </h3><span>(May 2024)</span>
                                <p>Bachelors of Science in GIMM (Games, Interactive Media, Mobile Technology) </p>
                                <button className='more-projects' onClick={() => {window.location.assign(`${window.location.origin}/#/Projects`);}}>
                                    See my work {"->"}
                                </button>
                            </div>
                        </div>
                        <div className='col-lg-6'></div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

function mapState(state) {
    const { session } = state;
    return { session };
}

const actionCreators = {
};

const connection = connect(mapState, actionCreators)(Dashboard);
export { connection as Dashboard };