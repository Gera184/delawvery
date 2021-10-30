import React, { useState, useEffect, useRef } from "react";
import { List } from "../orderList/List";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Edit(props) {
  const dispatch = useDispatch();
  const { userdId } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  let history = useHistory();

  const submitHundler = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, date);
    dispatch(
      props.editSelectedUser(userdId, {
        id: props.users.user.arr[userdId].id,
        firstName: firstName,
        lastName: lastName,
        date: date,
      })
    );

    if (firstName && lastName && date) {
      history.push("/");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center pt-3">
          <h1>{userdId} הזמנה </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 text-right pt-2">
          <form className="contact-form row" onSubmit={submitHundler}>
            <div className="form-field col-lg-6">
              <div key={props.users.user.arr[userdId].firstName}>
                <input
                  name="firstName"
                  className="input-text js-input"
                  type="text"
                  required
                  defaultValue={props.users.user.arr[userdId].firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>

              <label className="label" for="name">
                שם פרטי
              </label>
            </div>
            <div className="form-field col-lg-6">
              <div key={props.users.user.arr[userdId].lastName}>
                <input
                  id="name"
                  className="input-text js-input"
                  type="text"
                  required
                  defaultValue={props.users.user.arr[userdId].lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
              <label className="label" for="name">
                שם משפחה
              </label>
            </div>
            <div className="form-field col-lg-6">
              <div key={props.users.user.arr[userdId].date}>
                <input
                  id="name"
                  className="input-text js-input"
                  type="date"
                  required
                  defaultValue={props.users.user.arr[userdId].date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>

              <label className="label" for="name">
                תאריך
              </label>
            </div>

            <div className="form-field col-lg-12 text-right">
              <input className="submit-btn" type="submit" value="עדכון" />
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
