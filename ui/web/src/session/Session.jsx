export const startsession = (email, flag) => {
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("flag", flag);
};
export const endsession = () => {
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("flag");
};
export const getuseremail = () => {
  const useremail = sessionStorage.getItem("email");
  if (useremail) {
    return useremail;
  } else {
    return null;
  }
};
