import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../styles/login.css";

export function Login() {
  const [user, setUser] = useState({
    login: null,
    password: null,
  });
  const [disable, setDisable] = useState(true);
  const users = useSelector((state) => state.auth.users);
  const history = useHistory();
  useEffect(() => {
    if (user.login == users[0].login) {
      setDisable(false);
    }
    if (user.password == users[0].password) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [user]);

  const send = (e) => {
    e.preventDefault();
    history.push("/profile");
  };

  return (
    <div>
      <div className="login">
        <div className="login_wrapper">
          <div className="form_login">
            <div className="form_head">
              <div className="head_text">
                <h4>Login</h4>
              </div>
            </div>
            <div className="form_login_group">
              <form>
                <input
                  type="text"
                  name="login"
                  placeholder="user Name"
                  onChange={(e) => setUser({ ...user, login: e.target.value })}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <a
                  className={disable === true ? "disableBtn" : ""}
                  onClick={(e) => send(e)}
                >
                  Отправить
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
