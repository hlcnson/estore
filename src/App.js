import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth } from "./firebase/firebase.utils";


class App extends React.Component{
    constructor(){
        super();

        this.state = {
            currentUser: null
        }
    }

    // Tạo method để lưu trữ Open subsciption với Firebase auth.
    // Tạm thời gán giá trị null
    unsubscribeFromAuth = null;

    // Đây là React life cycle method
    componentDidMount(){
        // Kích hoạt phương thức onAuthStateChanged của auth để tạo một open subscription
        // để lắng nghe sự thay đổi trạng thái của auth (xảy ra khi user thực
        // hiện signin/signout).
        // Phương thức này nhận tham số là một function có tham số
        // là user state của auth. Trong function này, viết code để
        // xử lý signin/signout.
        // Open subscription cho phép thông điệp được trao đổi giứa
        // ứng dụng và firebase auth để nhận biết trạng thái của user.
        // Phương thức onAuthStateChanged trả về function để unsubscribe
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });
            console.log(user);
        });
    }

    // Đây là React life cycle method
    componentWillUnmount(){
        // Kích hoạt phương thức unsubscribe của firebase auth để đóng 
        // subsrcibtion của ứng dụng với firebase auth.
        this.unsubscribeFromAuth();
    }

    render(){
        // Tạo ra các route bằng các component của gói react-router-dom.
        // Component Route tạo ra các route cho ứng dụng.
        // Route component có các thuộc tính:
        // path: url để kích hoạt component
        // component: Component để kích hoạt khi người dùng nhập vào url
        // trùng khớp với path.

        // Các route được Route component tạo ra được so khớp theo qui tắc:
        // Nếu người dùng nhập vào url là /hats thì có hai route là / và /hats
        // được so khớp trùng vì / cũng là một phần của /hats -> do vậy sẽ có
        // hai component được render cùng lúc là HomePage và HatsPage.

        // Thuộc tính exact (mặc định mang giá trị true) khi được thiết lập true
        // sẽ buộc so khớp toàn bộ route. Ví dụ: url /hats sẽ không khớp với /

        // Component switch có chức năng kết thúc việc so khớp các route bên trong
        // sau khi đã match được một route. Ví dụ: nếu người dùng nhập vào url /hats
        // thì chỉ có route / được so khớp và chỉ có component Homepage được render.

        // Component Header được đặt bên ngoài component Switch để nó luôn được render
        // bất kể route nào đang được component Switch và Route kích hoạt.

        // Truyền giá trị thuộc tính currentUser cho component Header để hiển thị
        // trên header 
        return (
            <div>
                <Header currentUser={ this.state.currentUser } />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={SignInAndSignUp} />
                </Switch>
            </div>
        );
    }
    
}

export default App;
