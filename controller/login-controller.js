function LoginController() {

  function isvaliduser(userList, user) {
    return userList.indexOf(user) >= 0;
  }

  return {
    isvaliduser
  }

}

module.exports = LoginController();
