import React, { useState } from "react";

const PrivatePage = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [form, setForm] = useState({
    login: "",
    password: "",
  });

  const changehandler = ({ currentTarget }) => {
    setForm((prevState) => ({
      ...prevState,
      [currentTarget.name]: currentTarget.value,
    }));
  };


  const clickHandler = async (e) => {
    e.preventDefault();
    await fetch(`/api/private?login=${form.login}&password=${form.password}`)
      .then((res) => {
        if (res.ok) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={styles.pageWrapper}>
      {isAuth ? (
        <p>U have access to private content</p>
      ) : (
        <form>
          <input
            onChange={changehandler}
            value={form.login}
            name="login"
            placeholder="enter user name"
          />
          <input
            onChange={changehandler}
            value={form.password}
            name="password"
            placeholder="enter password"
          />
          <button onClick={clickHandler}>sing in</button>
        </form>
      )}
    </div>
  );
};

export default PrivatePage;

const styles = {
  pageWrapper: {
    padding: 15,
  },
};
