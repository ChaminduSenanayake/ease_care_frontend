import {useForm} from "react-hook-form";
import '../../assets/css/Login-Style.css';
import logo from '../../assets/images/logo.png'

function Login(props) {
    const {register, handleSubmit} = useForm();
    const loginHandler = data => {
        // let userName = data?.userName;
        // let password = data?.password;
        props.setToken(121);
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
                    <input type="text" id="userName" className="fadeIn second" {...register("userName")}
                           placeholder="username" autocomplete="off"/>
                    <input type="text" id="password" className="fadeIn third" {...register("password")}
                           placeholder="password" autocomplete="off"/>
                    <input type="submit" className="fadeIn fourth mt-4" value="Log In"/>
                </form>


            </div>
        </div>
    )
}
export default Login;
