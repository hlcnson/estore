// Import module này để sử dụng các thư viện của firebase
import firebase from "firebase/app";
// Import thư viện liên quan đến DB và chứng thực của firebase.
// Cả hai thư viện này sẽ được truy cập thông qua module firebase
// đã import ở trên
import "firebase/firestore";
import "firebase/auth";

// Tạo đối tượng chứa thông tin cấu hình firebase
const config = {
    apiKey: "AIzaSyCvaU1-YuVY0Gj5BJGAixfl7IC0s4x3AjA",
    authDomain: "estore-2d121.firebaseapp.com",
    databaseURL: "https://estore-2d121.firebaseio.com",
    projectId: "estore-2d121",
    storageBucket: "",
    messagingSenderId: "535796329674",
    appId: "1:535796329674:web:a3f603049b3a5b6d98d833",
    measurementId: "G-W1SZ5X0Q28"
};

// Kích hoạt firebase
firebase.initializeApp(config);

// Export thư viện auth của firebase để có thể sử dụng bất kỳ nơi nào
// chức năng auth của firebase.
export const auth = firebase.auth();

// Export đối tượng firestore để có thể sử dụng bất kỳ nơi nào
// chức năng DB của firebase.
export const firestore = firebase.firestore();

// Tạo class GoogleAuthProvider
const provider = new firebase.auth.GoogleAuthProvider();

// Thiết lập tham số cho GoogleAuthProvider.
// Thiết lập giá trị cho tham số prompt là select_account sẽ làm
// kích hoạt popup cho phép chọn tài khoản Google khi user
// chọn đăng nhập bằng Google account.
provider.setCustomParameters({
    prompt: 'select_account'
});

// Export phương thức sigin with Google.
// Phương thức này kích hoạt phương thức signInWithPopup và nhận
// tham số provider là class provider đã tạo ở trên để đăng nhập
// bằng tài khoản Google
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Export toàn bộ thư viện firebase để sử dụng khi cần
export default firebase;