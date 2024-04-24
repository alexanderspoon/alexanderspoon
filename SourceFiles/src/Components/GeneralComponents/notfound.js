//--------------------------------------------------
//Rendered Component when URL path is not defined
//--------------------------------------------------

import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const PageNotFound = ({ access }) => {

    return (
        <Fragment>
            <div className='main-container pagenotfound'>
                <div className='container'>
                    <h1>Page Not Found</h1>
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

const connection = connect(mapState, actionCreators)(PageNotFound);
export { connection as PageNotFound };