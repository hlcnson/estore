import React from 'react';
import { Link } from 'react-router-dom';

// Import module auth của firebase
import {auth} from '../../firebase/firebase.utils';

// Đây là cú pháp đặc biệt để import một file SVG trong React.
// This is a a new special syntax when importing SVG in React.
// The ReactComponent import name is special and 
// tells Create React App that you want a React component that 
// renders an SVG, rather than its filename. 
// You can read more about it here, but keep in mind that this 
// is a React library special syntax:
// https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';


// Route: / - Trang chủ
const Header = ({ currentUser }) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>MUA SẮM</Link>
            <Link className='option' to='/shop'>LIÊN HỆ</Link>
            {
                // Dùng toán tử ternary
                currentUser ?
                (<div 
                    className='option' 
                    onClick={() => auth.signOut()}
                >
                    ĐĂNG XUẤT
                </div>)
                :
                (<Link className='option' to='/signin'>ĐĂNG NHẬP</Link>)
            }
        </div>
    </div>
);

export default Header;