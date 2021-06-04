import React from 'react'

class AddContactList extends React.Component{
  
    render() {
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form">
                  <div className="feild">
                  <label>Name</label> 
                  <input type="text" name="name" placeholder="Name" /> 
                  </div>
                  <div className="feild">
                  <label>Email</label> 
                  <input type="text" name="email" placeholder="Email" /> 
                  </div>
                  <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContactList;