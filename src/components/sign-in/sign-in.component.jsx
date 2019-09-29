import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from "../../firebase/firebase.utils";

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = (event) => {
        // event.target chính là đối tượng kích hoạt function này,
        // trong trường hợp này chính là phần tử input (HTML).
        // Các thuộc tính name, value được lấy ra từ phần tử input.
        const { value, name } = event.target;

        // Cập nhật state của component.
        // Sử dụng cú pháp [] để gán động tên của thuộc tính.
        // Ví dụ, khi phần tử input có name là email làm kích hoạt
        // handler này thì [name] sẽ là email.
        this.setState({ [name]: value });
    }

    render(){
        return (
            <div className='sign-in'>
                <h2 className='title'>Tôi đã có tài khoản</h2>
                <span>Đăng nhập bằng email và mật khẩu</span>

                <form onSubmit={ this.handleSubmit }>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={ this.handleChange }
                        label='Email'
                        required 
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={ this.handleChange }
                        label='Password'
                        required 
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>
                            Đăng nhập
                        </CustomButton>
                        {
                        // Lưu ý cú pháp tạo thuộc tính isGoogleSigIn, nếu không
                        // truyền giá trị cho nó, nó tự có giá trị là true
                        }
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn >
                            Đăng nhập với Google
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;