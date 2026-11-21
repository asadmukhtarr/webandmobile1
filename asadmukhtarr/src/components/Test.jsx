import React from 'react'
import { useState, useEffect } from 'react'
export default function Test() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();

    const save = (e) => {
        e.preventDefault();
        const user = {
            name: name,
            email: email,
            password: password,
            confirm_password: confirmpassword
        }
        console.log(user);
    }
    const fetchProducts = () => {
        console.log('fetch products function is working');
    }
    useEffect(() => {
        fetchProducts();
    });
    return (
        <div className='container mt-4'>
            <div className="row">
                <div className='col-lg-4'>
                    <form onSubmit={save}>
                        <div className="card">
                            <div className="card-body">
                                <div className='form-group'>
                                    <label htmlFor="">Name</label>
                                    <input type="text" onKeyUp={(e) => setName(e.target.value)} className='form-control' />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="">Email</label>
                                    <input type="text" onKeyUp={(e) => setEmail(e.target.value)} className='form-control' />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="">Password</label>
                                    <input type="text" onKeyUp={(e) => setPassword(e.target.value)} className='form-control' />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="">Confirm Password</label>
                                    <input type="text" onKeyUp={(e) => setConfirmpassword(e.target.value)} className='form-control' />
                                </div>
                            </div>
                            <div className="card-footer">
                                <button type='submit' className='btn btn-danger float-end'>Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='col-lg-8'>

                </div>
            </div>
        </div>
    )
}
