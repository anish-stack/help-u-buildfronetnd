import React, { useState } from 'react'
import loginimage from './login-img.webp'
import axios from 'axios';
import toast from 'react-hot-toast';
import { setData } from '../../utils/sessionStoreage';


function Login() {
    const [logindata, setLoginData] = useState({
        any: '',
        password: ''
    });
    const [error, setError] = useState(null);


    const handleChange = (e) => {
        const { name, value } = e.target

        setLoginData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleloginSubmit = async (e) => {
        console.log("first")
        e.preventDefault()
        try {
            const { data } = await axios.post('http://localhost:5000/api/v1/login', logindata);
            console.log(data)
            const { token, user, message } = data
            setData('token', token)
            setData('islogin', token ? true : false)
            setData('user', JSON.stringify(user))


            if (user.role === 'provider') {
                if (user.isProfileComplete === false) {
                    window.location.href = `/profile-page/${user._id}`
                    // toast.error('Please complete your profile before login.')
                    // return;
                }
            }

            toast.success(message)
            window.location.href = `/`
        } catch (error) {
            console.log(error)
            console.log('An err or occurred. Please try again.')
        }
    };


    return (
        <>
            <section className="bg-light">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col col-xl-10">
                            <div className="card login-bg" style={{ borderRadius: "1rem" }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-6 d-none d-md-block">
                                        <img
                                            src={loginimage}
                                            alt="login form"
                                            className="img-fluid"
                                            style={{ borderRadius: "1rem 0 0 1rem" }}
                                        />
                                    </div>
                                    <div className="col-md-6 col-lg-6 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">
                                            <form>
                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <span className="h1 fw-bold mb-0 text-white">Login</span>
                                                </div>
                                                <h5
                                                    className="fw-normal mb-3 pb-3 text-white"
                                                    style={{ letterSpacing: 1 }}
                                                >
                                                    Sign into your account
                                                </h5>
                                                <div data-mdb-input-init="" className="form-outline mb-4">
                                                    <label className="form-label text-white" htmlFor="form2Example17">
                                                        Email or Phone
                                                    </label>
                                                    <input
                                                        onChange={handleChange}
                                                        name="any"
                                                        type="text"
                                                        value={logindata.any}
                                                        id="form2Example17"
                                                        className="form-control form-control-lg input-shape"
                                                    />
                                                </div>

                                                <div data-mdb-input-init="" className="form-outline mb-4">
                                                    <label className="form-label text-white" htmlFor="form2Example27">
                                                        Password
                                                    </label>
                                                    <input
                                                        onChange={handleChange}
                                                        name="password"
                                                        type="password"
                                                        value={logindata.password}
                                                        id="form2Example27"
                                                        className="form-control form-control-lg input-shape"
                                                    />

                                                </div>
                                                <div className="pt-1 mb-4">
                                                    <button
                                                        onClick={handleloginSubmit}
                                                        data-mdb-button-init=""
                                                        data-mdb-ripple-init=""
                                                        className="btn as_btn btn-lg btn-block"
                                                        type="button"
                                                    >
                                                        Login Now
                                                    </button>
                                                </div>
                                                <a className="small text-white" href="#!">Forgot password?
                                                </a>
                                                <p className="mb-5 mt-3 pb-lg-2 text-white">
                                                    Don't have an account? {""}
                                                    <a href="/user-register" className="text-warning">
                                                        Register here
                                                    </a>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login