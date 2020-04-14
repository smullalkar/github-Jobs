import React from 'react'

function Signup() {
    return (
        <div className='col-6 p-5' style={{margin:'auto'}}>
            <form>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" >Remember me</label>
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </div>
    )
}

export default Signup