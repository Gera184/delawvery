import React from "react";
import {
  setUserDeatils,
  removeSelectedUser,
  editSelectedUser,
} from "../../redux/actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import Form from "../form/Form";
import Edit from "../edit-page/Edit";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Main() {
  const users = useSelector((state) => state);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Form
              users={users}
              setUserDeatils={setUserDeatils}
              removeSelectedUser={removeSelectedUser}
            />
          </Route>
          <Route exact path="/:userdId">
            <Edit
              users={users}
              removeSelectedUser={removeSelectedUser}
              editSelectedUser={editSelectedUser}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
