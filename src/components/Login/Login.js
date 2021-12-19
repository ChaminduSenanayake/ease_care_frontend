import {useForm} from "react-hook-form";
import '../../assets/css/Login-Style.css';
import logo from '../../assets/images/logo.png'
import {notifyToast} from "../Common/ToastNotification";
import $ from "jquery";

function Login(props) {
    const {register, handleSubmit} = useForm();
    const loginHandler = data => {
        let userName = data?.userName;
        let password = data?.password;
        if(userName==="admin" && password==="admin"){
            props.setToken(121);
        }else{
            $("#userName").val("")
            $("#password").val("")
            notifyToast("Invalid Inputs","error");
        }

    }
    return (
        <div className="login fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                    <img src={logo} id="icon"
                         alt="User Icon"/>
                    <h1>Log In</h1>
                </div>

                <form onSubmit={handleSubmit(loginHandler)}>
                    <input id="userName" className="fadeIn second" {...register("userName")}
                           placeholder="username" autoComplete="off"/>
                    <input type="password" id="password" className="fadeIn third " {...register("password")}
                           placeholder="password" autoComplete="off"/>
                    <input type="submit" className="fadeIn fourth mt-4" value="Log In"/>
                </form>


            </div>
        </div>
    )
}
export default Login;
