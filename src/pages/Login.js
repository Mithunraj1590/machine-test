import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../slices/authSlice';
import { FaEye } from 'react-icons/fa';
import './Login.css';
import { SlSocialFacebook ,SlSocialLinkedin,SlSocialGoogle } from "react-icons/sl";
import { FiTwitter } from "react-icons/fi";

function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const validatePassword = (pwd) => {
    // At least 8 chars, 1 capital, 1 number, 1 symbol
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(pwd);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!usernameOrEmail) {
      setError('Username or Email is required');
      return;
    }
    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters, include 1 capital letter, 1 number, and 1 symbol.');
      return;
    }
    dispatch(login({ keepSignedIn }));
  };

  const handleShowPassword = () => {
    setShowPassword(true);
    setTimeout(() => setShowPassword(false), 1000);
  };

  return (
    <Container className="vh-100 login-bg">
      <Row className="w-100">
        {/* Left: Form */}
        <Col md={6} className="d-flex align-items-center ">
          <div style={{ width: '100%', maxWidth: 350 }} className="login-form-container">
            <h2 className="mb-3 fw-bold ">Sign In</h2>
            <div className="mb-3 " style={{ fontSize: 14, fontWeight: 600 }}>
              <span>New user? </span>
              <a href="#" style={{ color: '#2563eb'}}>Create an account</a>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit} className='login-form'>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Username or email"
                  value={usernameOrEmail}
                  onChange={e => setUsernameOrEmail(e.target.value)}
                  className="rounded-0"
                />
              </Form.Group>
              <Form.Group className="mb-3" style={{ position: 'relative' }}>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="rounded-0"
                />
                {password && (
                  <FaEye
                    onClick={handleShowPassword}
                    style={{
                      position: 'absolute',
                      right: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer',
                      color: '#888'
                    }}
                    size={18}
                  />
                )}
              </Form.Group>
              <div className="mb-3 d-flex align-items-center">
                <label className="custom-checkbox-label me-2">
                  <input
                    type="checkbox"
                    checked={keepSignedIn}
                    onChange={e => setKeepSignedIn(e.target.checked)}
                    className="custom-checkbox-input"
                  />
                  <span className="custom-checkbox-box"></span>
                </label>
                <span style={{ fontSize: 16, fontWeight: 600 }}>Keep me signed in</span>
              </div>
              <Button type="submit" className="w-100 rounded-0" style={{ background: '#333', border: 'none' }}>
                Sign In
              </Button>
            </Form>
            <div className="d-flex align-items-center my-3">
              <hr className="flex-grow-1" />
              <span className="mx-3" style={{ fontSize: 14,fontWeight:600 }}>Or Sign In With</span>
              <hr className="flex-grow-1" />
            </div>
            <div className="d-flex justify-content-between">
              <span className="icon-circle"><SlSocialGoogle /></span>
              <span className="icon-circle"><SlSocialFacebook /></span>
              <span className="icon-circle"><SlSocialLinkedin /></span>
              <span className="icon-circle"><FiTwitter /></span>
            </div>
          </div>
        </Col>
        {/* Right: Illustration */}
        <Col md={6} className="d-flex align-items-center justify-content-center flex-column">
        <div className='login-img'>
        <img src="/Sign-In.png" alt="" />
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login; 