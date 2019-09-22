import React from 'react';
// withRouter là một higher order component, về cơ bản là một function
// nhận vào tham số là một component và trả về một component có điều chỉnh
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

// history, match là các thuộc tính được tạo ra bởi react-router-dom
const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => (
    // React cho phép thuộc tính style chứa một JSON object
    // gồm các thuộc tính CSS (theo cú pháp Camel case của React)
    // để định dạng component.
    // Thuộc tính url của component match chứa route (url) kích hoạt 
    // component MenuItem
    <div className={`${size} menu-item`} 
    onClick={ () => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }}>
        </div>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

// Hàm withRouter nhận vào component MenuItem và trả về component
// có cùng tên nhưng đã được điều chỉnh để có thể truy cập các
// thuộc tính được tạo ra bởi react-router-dom như: location, match, history...
export default withRouter(MenuItem);