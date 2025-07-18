import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Routes, Route, Link, Navigate, useLocation, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';
import { setRegion } from './slices/regionSlice';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const location = useLocation();
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

function Layout() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const dispatch = useDispatch();
  const selectedRegion = useSelector(state => state.region.selectedRegion);
  const tabs = ['All', 'Asia', 'Europe'];
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoginPage && (
        <header className='header'>
        <Navbar bg="white" variant="light" expand="lg" className="">
          <Container className="d-flex justify-content-between align-items-center position-relative">
            <div className="fw-bold navbar-title">Countries</div>
            {/* Hamburger for mobile */}
            <div className="d-lg-none">
              <FiMenu size={28} className="navbar-hamburger" onClick={() => setMenuOpen(true)} />
            </div>
            {/* Tabs for desktop */}
            <div className="banner-tabs d-none d-lg-flex align-items-center navbar-tabs-desktop">
              {tabs.map(tab => (
                <span
                  key={tab}
                  className={`tab${selectedRegion === tab ? ' active' : ''}`}
                  onClick={() => dispatch(setRegion(tab))}
                >
                  {tab}
                </span>
              ))}
            </div>
            {/* Slide-in menu for mobile */}
            {menuOpen && (
              <>
                <div className="navmenu-overlay" onClick={() => setMenuOpen(false)}></div>
                <div className="navmenu-slide-in">
                  <div className="d-flex justify-content-end p-3">
                    <FiX size={28} className="navbar-close" onClick={() => setMenuOpen(false)} />
                  </div>
                  <div className="banner-tabs flex-column align-items-start px-4 navbar-tabs-mobile">
                    {tabs.map(tab => (
                      <span
                        key={tab}
                        className={`tab${selectedRegion === tab ? ' active' : ''}`}
                        onClick={() => { dispatch(setRegion(tab)); setMenuOpen(false); }}
                      >
                        {tab}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}
          </Container>
        </Navbar>
        </header>
      )}
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
      </Route>
    </Routes>
  );
}

export default App;
