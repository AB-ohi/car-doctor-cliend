import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import OtherLogin from "../otherLogin/OtherLogin";
const Login = () => {

  const {singIn} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/'

  const handelToLogin = event =>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = {email, password};
    console.log(user)

    singIn(email, password)
    .then(result =>{
      const user = result.user;
      
      console.log(user)
      navigate(from, {replace: true})
      

      
    })
    .catch(error =>console.log(error));
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-10 lg:flex-row">
          <div className="w-1/2 text-center lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <form onSubmit={handelToLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p className="text-center mt-3">Or Sign In with</p>
              <OtherLogin></OtherLogin>
              <p className="text-center mt-3">Have an account? <Link to='/singUp' className="text-orange-600">Sign In</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
