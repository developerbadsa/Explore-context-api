import {  onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import Auth from "../Firebase_config/Firebase_config";



const Login = () => {

    const [login, setLogin] = useState(false)
    const [loginErr, setLoginErr] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(Auth, email, password)

            .then((userCredential) => {
                const user = userCredential.user;
                setLogin(true)
                console.log("User signed in:", user);
                setLoginErr(false)
            })
            .catch((error) => {
                setLogin(false)
                setLoginErr(true)
                console.error("Error signing in:", error);
            });

        console.log(email, password);
    };


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    {login ? <div> Log in Successfully</div>:''}{loginErr ? <div className="text-red-300"> Error happen</div>:''}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login