import { useState, useEffect } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};
const Register = () => {
  const [values, setValues] = useState(initialState);
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  // redux toolkit and useNavigate later

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />

        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* name field */}

        {/* toggle name */}

        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email field */}
        <div className="form-row">
          <FormRow
            type="email"
            value={values.email}
            name="email"
            handleChange={handleChange}
            className="form-input"
          />
        </div>
        {/* password field */}
        <div className="form-row">
          <FormRow
            type="password"
            value={values.password}
            name="password"
            handleChange={handleChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>

        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}

          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
