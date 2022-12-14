import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";
import { useNavigate } from "react-router-dom";
import { check } from "../../modules/slices/user";
import { selectUser } from "../../modules/slices/user";
import { useState } from "react";
import {
  changefile,
  initializeform,
  login,
  selectAuth,
} from "../../modules/slices/auth";

const LoginForm = () => {
  const dispatch = useDispatch();
  const form = useSelector(selectAuth);
  const user = useSelector(selectUser);

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const onChange = (e) => {
    const { value, name } = e.target;

    dispatch(
      changefile({
        form: "login",
        key: name,
        value,
      })
    );
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form.login;
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeform("login"));
  }, [dispatch]);

  useEffect(() => {
    if (form.authError) {
      setError("오류 발생");
      return;
    }
    if (form.auth !== null) {
      setError(null);
      dispatch(check(form.auth));
    }
  }, [form.auth, form.authError, dispatch]);

  useEffect(() => {
    if (user.user !== null) {
      console.log("성공");
      navigate("/");
      try {
        localStorage.setItem("user", JSON.stringify(user.user));
      } catch (e) {
        console.log("local storage is not working");
      }
    }
  }, [user]);

  return (
    <AuthForm
      type="login"
      form={form.login}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    ></AuthForm>
  );
};
export default LoginForm;
