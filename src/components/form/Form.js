import React, { useState, useEffect } from "react";
import { List } from "../orderList/List";
import "./Form.css";
import { useDispatch } from "react-redux";
import { uuid } from "uuidv4";

export default function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();

  const submitHundler = (e) => {
    e.preventDefault();
    dispatch(
      props.setUserDeatils({
        id: uuid(),
        firstName: firstName,
        lastName: lastName,
        date: date,
      })
    );
    setFirstName("");
    setLastName("");
    setDate("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center pt-3">
          <h1>הזמנה חדשה</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 text-right pt-2">
          <form className="contact-form row" onSubmit={submitHundler}>
            <div className="form-field col-lg-6">
              <input
                id="name"
                className="input-text js-input"
                type="text"
                required
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <label className="label" for="name">
                שם פרטי
              </label>
            </div>
            <div className="form-field col-lg-6">
              <input
                id="name"
                className="input-text js-input"
                type="text"
                required
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <label className="label" for="name">
                שם משפחה
              </label>
            </div>
            <div className="form-field col-lg-6">
              <input
                id="name"
                className="input-text js-input"
                type="date"
                required
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
              <label className="label" for="name">
                תאריך
              </label>
            </div>

            <div className="form-field col-lg-12 text-right">
              <input className="submit-btn" type="submit" value="הוספה" />
            </div>
          </form>
        </div>
        <div className="col-md-6 text-right">
          {props.users.user.arr.length > 0 && (
            <List
              users={props.users}
              removeSelectedUser={props.removeSelectedUser}
            />
          )}
        </div>
      </div>
    </div>
  );
}
