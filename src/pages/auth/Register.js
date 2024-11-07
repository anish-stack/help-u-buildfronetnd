import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
function Register() {
    const [formData, setFormData] = useState({
        Gender: '',
        name: '',
        email: '',
        PhoneNumber: '',
        Password: '',
        cPassword: ''
    })


    const handleChange = (e) => {
        const { name, value } = e.target
        // console.log(name)
        setFormData((prev) => ({
            ...prev,
            [name]: value
        })) 
       
        if (name === 'Password' || name === 'cPassword') {
            if (name === 'cPassword' && formData.Password !== value) {
                // message.error('Passwords do not match!');
                console.log('Passwords do not match!')
            } else if (name === 'Password' && formData.cPassword && formData.cPassword !== value) {
                // message.error('Passwords do not match!');
                console.log('Passwords do not match!')
            }
        }
    }

    
     

    const handlSubmit = async (e) => {
        console.log("first")
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:5000/api/v1/register', formData)
            console.log(res.data)
            toast.success(res.data.message)
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.errors?.[0] || error?.response?.data?.message || "Invalid Error")

        }
    }


    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: 25 }}>
                                <div className="card-body register-bg p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-12 col-xl-12 col-md-10order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-white">
                                                User Registration Form
                                            </p>
                                            <form onSubmit={handlSubmit} className="mx-1 mx-md-4">
                                                <div className='row'>
                                                    <div className='col-lg-6'>
                                                        <div className="d-flex flex-row mb-4">
                                                            <i className="fas fa-user fa-lg me-3 fa-fw lable-icon" />
                                                            <div
                                                                data-mdb-input-init=""
                                                                className="form-outline flex-fill mb-0"
                                                            >
                                                                <label className="form-label text-white" htmlFor="form3Example1c">
                                                                    Your Name
                                                                </label>
                                                                <input
                                                                    onChange={handleChange}
                                                                    name='name' value={formData.name}
                                                                    type="text"
                                                                    id="form3Example1c"
                                                                    className="form-control input-shape px-5"
                                                                />

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6'>
                                                        <div className="d-flex flex-row mb-4">
                                                            <i className="fas fa-envelope fa-lg me-3 fa-fw lable-icon" />
                                                            <div
                                                                data-mdb-input-init=""
                                                                className="form-outline flex-fill mb-0"
                                                            >
                                                                <label className="form-label text-white" htmlFor="form3Example3c">
                                                                    Your Email
                                                                </label>
                                                                <input
                                                                    onChange={handleChange}
                                                                    name='email' value={formData.email}
                                                                    type="email"
                                                                    id="form3Example3c"
                                                                    className="form-control input-shape px-5"
                                                                />

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6'>
                                                        <div className="d-flex flex-row mb-4">
                                                            <i className="fas fa-phone fa-lg me-3 fa-fw lable-icon" />
                                                            <div
                                                                data-mdb-input-init=""
                                                                className="form-outline flex-fill mb-0"
                                                            >
                                                                <label className="form-label text-white" htmlFor="form3Example3c">
                                                                    Your Phone
                                                                </label>
                                                                <input
                                                                    onChange={handleChange}
                                                                    name='PhoneNumber' value={formData.PhoneNumber}
                                                                    type="tel"
                                                                    id="form3Example3c"
                                                                    className="form-control input-shape px-5"
                                                                />

                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className='col-lg-6'>
                                                        <div className="d-flex flex-row mb-4">
                                                            <i className="fas fa-user fa-lg me-3 fa-fw lable-icon" />
                                                            <div
                                                                data-mdb-input-init=""
                                                                className="form-outline flex-fill mb-0"
                                                            >   <label className="form-label text-white" htmlFor="form3Example3c">
                                                                    Your Gender
                                                                </label>
                                                                <input
                                                                    onChange={handleChange}
                                                                    name='Gender' value={formData.Gender}
                                                                    type="text"
                                                                    id="form3Example3c"
                                                                    className="form-control input-shape px-5"
                                                                />

                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className='col-lg-6'>
                                                        <div className="d-flex flex-row mb-4">
                                                            <i className="fas fa-lock fa-lg me-3 fa-fw lable-icon" />
                                                            <div
                                                                data-mdb-input-init=""
                                                                className="form-outline flex-fill mb-0"
                                                            >
                                                                <label className="form-label text-white" htmlFor="form3Example4c">
                                                                    Password
                                                                </label>
                                                                <input
                                                                    onChange={handleChange}
                                                                    name='Password' value={formData.Password}
                                                                    type="password"
                                                                    id="form3Example4c"
                                                                    className="form-control input-shape px-5"
                                                                />

                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className='col-lg-6'>
                                                        <div className="d-flex flex-row mb-4">
                                                            <i className="fas fa-key fa-lg me-3 fa-fw lable-icon" />
                                                            <div data-mdb-input-init=""
                                                                className="form-outline flex-fill mb-0" >
                                                                <label className="form-label text-white" htmlFor="form3Example4cd">
                                                                    Repeat your password
                                                                </label>
                                                                <input
                                                                    onChange={handleChange}
                                                                    id="form3Example4cd"
                                                                    name='cPassword' value={formData.cPassword}
                                                                    type="password"
                                                                    className="form-control input-shape px-5"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="d-flex justify-content-center mx-5 mb-3 mb-lg-4">
                                                    <button
                                                        type="submit"
                                                        data-mdb-button-init=""
                                                        data-mdb-ripple-init=""
                                                        className="btn as_btn  btn-lg mt-4"
                                                    >
                                                        Register Now
                                                    </button>
                                                </div>
                                                
                                                <div className='col-lg-12'>
                                                        <div class="form-check d-flex justify-content-center mb-5">

                                                            <label class="form-check-label text-white" for="form2Example3">
                                                            Already have an Account? <a href="/login" class="text-warning">Login here</a>
                                                            </label>
                                                        </div>
                                                    </div>
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

export default Register