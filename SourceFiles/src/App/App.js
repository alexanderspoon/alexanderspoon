//--------------------------------------------------
//Root logic for client rendering down from index.js
//--------------------------------------------------
import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Route, Routes, HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Projects, Dashboard, Account} from '../Components/UserPages';
import {NavigationBar, PageNotFound, Footer} from '../Components/GeneralComponents';

const App = ({ }) => {   
  return (
    <HashRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Account" element={<Account />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

function mapState(state) {
  const { } = state
  return { };
}

const actionCreators = {
};

export default connect(mapState, actionCreators)(App);