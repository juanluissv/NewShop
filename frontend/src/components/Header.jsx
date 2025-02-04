import React from 'react';
import { Badge, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { resetCart } from '../slices/cartSlice';

const Header = () => {
  const { cartItems } = useSelector(state => state.cart);
  const { userInfo } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try{
      await logoutApiCall().unwrap();
      dispatch(logout());
      dispatch(resetCart())
      navigate('/login');
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <header id="header" class="site-header header-scrolled position-fixed text-black bg-light">
      <Navbar id="header-nav" class="navbar navbar-expand-lg px-3 mb-3">
        <div class="container-fluid">
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src="https://png.pngtree.com/png-vector/20221222/ourmid/pngtree-blue-technological-sense-glowing-brain-png-image_6503119.png"  className='log11' alt="logo" width="45px" />
              <span >Techshop</span>
            </Navbar.Brand>       
          </LinkContainer>   
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-5 customMenu">
              <LinkContainer to="/cart" >
                <Nav.Link className=''> <FaShoppingCart /> Cart
                    {
                      cartItems.length > 0 && (
                        <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                          {cartItems.reduce((a, c) => a + c.qty, 0)}
                        </Badge>  
                      )
                    }
                </Nav.Link>
              </LinkContainer>
              { userInfo ? (  
                <>
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
                ) : (
                <LinkContainer to="/login">
                  <Nav.Link> <FaUser /> Sign In</Nav.Link>
                </LinkContainer>
              )}
              { userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>                               
        </div>
      </Navbar>
    </header>
  )
}

export default Header