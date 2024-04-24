//--------------------------------------------------
//Footer for the application
//--------------------------------------------------
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { MDBFooter } from 'mdb-react-ui-kit';
import gmail from '../../Images/gmail.svg'; 
import linkedin from '../../Images/linkedin.svg'; 
import github from '../../Images/Tools/github.svg'; 

const Footer = ({}) => {
    return (
        <Fragment>
            <div className='footer'>
                <MDBFooter>
                <div className='text-center footer-info'>
                    <div className='footer-line'></div>
                    <div className='socials'>
                        <a href="https://www.linkedin.com/in/alexanderspoon" target="_blank"><img className='social' src={linkedin} alt="Placeholder Image" /></a>
                        <a href="mailto:alexanderspoon@u.boisestate.edu" target="_blank"><img className='social' src={gmail} alt="Placeholder Image" /></a>
                        <a href="https://github.com/alexanderspoon/alexanderspoon" target="_blank"><img className='social' src={github} alt="Placeholder Image" /></a>
                    </div>
                    <div className='footer-line'></div>
                    <div>
                        Developed and Designed by Alexander Spoon.
                        &copy; {new Date().getFullYear()} Copyright{' '} All Rights Reserved
                    </div>
                </div>
                </MDBFooter>
            </div>
        </Fragment>
    )
};

function mapState(state) {
}

const actionCreators = {
};

const connection = connect(mapState, actionCreators)(Footer);
export { connection as Footer };