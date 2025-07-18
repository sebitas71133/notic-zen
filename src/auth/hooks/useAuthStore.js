import { useDispatch, useSelector } from "react-redux";

export const useAuthStore = () => {
  //     const { status, user, errorMessage } = useSelector((s) => s.auth);
  //   const dispatch = useDispatch();

  /* ---------- login ---------- */
  const startLogin = async ({ email, password }) => {
    // try {
    //   dispatch(checkingReducer());
    //   const { data, token } = await loginRequest({ email, password }).unwrap(); //lanza el error el unwrap
    //   dispatch(loginReducer({ token: token, user: data }));
    //   toast.success(`¡Bienvenido, ${data.name}!`);
    // } catch (err) {
    //   console.log(err);
    //   //dispatch(logoutReducer());
    //   startLogout();
    //   toast.error(err.data?.error || "Credenciales incorrectas");
    //   dispatch(setErrorReducer(err.data?.error || "Credenciales incorrectas"));
    //   setTimeout(() => dispatch(clearErrorMessageReducer()), 10);
    // }
  };

  //   const startLogout = () => {
  //     dispatch(logoutReducer());
  //   };

  return {
    // state
    // status,
    // user,
    // errorMessage,

    // isLoading,

    // actions
    startLogin,
    // startRegister,
    // checkAuthToken,
    // startLogout,
  };
};
