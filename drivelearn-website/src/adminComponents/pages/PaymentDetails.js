import React from 'react';
import '../css/PaymentDetails.css';
import ReactDOM from 'react-dom';

function PaymentDetails() {
    return (
        <div className ="emp-card-container">
        <form className="searchbar-admin" method="POST">
        <input type="text" class="searchbar-admin_search" placeholder="Search user by name or id"></input>
        <div className="search-icon"><i class="fas fa-search"></i></div>
        </form>
        <a href="" className="btn btn-square-blue">
        <div className="btn-square-blue_text">Add User <i class="fas fa-plus-circle"></i></div>
        
        </a>
        <div className ="filter_container">
        <div className ="filter">
            <label className="margin-r-s"></label>
            <select className="form__input">
                <option value="admin">Admin</option>
                <option value="user">User</option>
            </select>
        </div>
        <div className ="filter"></div>
        </div>
        
        <div className ="fullCard">
             <p>Hasani Nimeshika</p> 
        </div>
        <div className ="fullCard">
             <p>Hasani Nimeshika</p> 
        </div>
        
        </div>
       
    )
}

export default PaymentDetails;
