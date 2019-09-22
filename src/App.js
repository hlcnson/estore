import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
);

function App() {
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
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/hats' component={HatsPage} />
            </Switch>
        </div>
    );
}

export default App;
