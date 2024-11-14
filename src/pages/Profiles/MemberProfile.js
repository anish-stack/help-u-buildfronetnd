import React from 'react'
import { useParams } from 'react-router-dom';

function MemberProfile() {
  const { id } = useParams();
  console.log(id)
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
                        Member Registration Form
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
                                  First Name
                                </label>
                                <input
                                  onChange={handleChange}
                                  name='first_name' value={memberData.first_name}
                                  type="text"
                                  id="form3Example1c"
                                  className="form-control input-shape px-5"
                                />

                              </div>
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className="d-flex flex-row mb-4">
                              <i className="fas fa-pencil fa-lg me-3 fa-fw lable-icon" />
                              <div
                                data-mdb-input-init=""
                                className="form-outline flex-fill mb-0"
                              >
                                <label className="form-label text-white" htmlFor="form3Example3c">
                                  Last Name
                                </label>
                                <input
                                  onChange={handleChange}
                                  name='last_name' value={memberData.last_name}
                                  type="text"
                                  id="form3Example3c"
                                  className="form-control input-shape px-5"
                                />

                              </div>
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className="d-flex">
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
                                  name='phone_number' value={memberData.phone_number}
                                  type="tel"
                                  maxlength="10"
                                  minLength="10"
                                  pattern="[1-9]{1}[0-9]{9}"
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
                                  Member Type
                                </label>
                                <select name="type" onChange={handleChange} className="form-control form-select  input-shape px-5" value={memberData.type} >
                                  <option>Select Your Membership</option>
                                  <option value={"Architect"}>Architect Membership</option>
                                  <option value={"Interior"}>Interior Membership</option>
                                  <option value={"Vastu"}>Vastu Membership</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className='col-lg-12'>
                            <div className="d-flex flex-row">
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
                                  name='password'
                                  value={memberData.password}
                                  type={isPasswordShow ? 'text' : 'password'}
                                  id="form3Example4c"
                                  className="form-control input-shape px-5"
                                />
                                <span type='button' onClick={() => setIsPasswordShow(!isPasswordShow)}><i class="far fa-eye pass-showhide"></i></span>

                              </div>
                            </div>

                          </div>

                        </div>

                        <div className="d-flex justify-content-center mx-5 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg mt-4 as_btn"
                            disabled={loading}
                          >
                            {loading ? (
                              <span>
                                Please wait
                                <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>
                              </span>
                            ) : (
                              "Register"
                            )}
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
          </div >
        </div >
      </section >
    </>
  )
}

export default MemberProfile;