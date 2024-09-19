import React from 'react'

const UserForm = () => {
  return (
    <div>
       <form className="fillbox">
            <div className="mb-3">
              <input type="text" placeholder="Name" />
            </div>
            <div className="mb-3">
              <input type="email" placeholder="Email" />
            </div>
            <div className="mb-3">
              <input type="number" placeholder="Phone No." />
            </div>
            <div className="mb-3">
              <input type="text" placeholder="Education" />
            </div>
            <div className="mb-3">
              <input type="text" placeholder="Project Summery" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
    </div>
  )
}

export default UserForm
