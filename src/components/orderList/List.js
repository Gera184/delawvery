import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export const List = (props) => {
  const users = props.users.user.arr;
  const dispatch = useDispatch();

  return (
    <div className="container">
      <>
        <div className="row">
          <div className="col">
            <h3>רשימת הזמנות </h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>מספר הזמנות: {users.length}</p>
          </div>
        </div>

        {users.map((user, index) => (
          <div
            key={index}
            className="container"
            style={{ border: "1px solid lightgray" }}
          >
            <div className="row p-2">
              <div className="col">
                <ul className="social-network ">
                  <Link to={`/${index}`}>
                    <a style={{ color: "black" }}>
                      <i className="far fa-edit"></i>
                    </a>
                  </Link>

                  <a
                    onClick={() => dispatch(props.removeSelectedUser(index))}
                    className="pl-2"
                  >
                    <i className="fas fa-times"></i>
                  </a>
                </ul>
              </div>
              <div className="col">
                <p>הזמנה: {index}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <strong>פרטים</strong>
              </div>
            </div>
            <div className="row">
              <div className="col">
                {user.firstName} , {user.lastName}{" "}
              </div>
            </div>
            <div className="row">
              <div className="col">{user.date}</div>
            </div>
          </div>
        ))}
      </>
    </div>
  );
};
