export const signup = (user, success, error) => {
  $.ajax({
    method: 'post',
    url: 'api/users',
    data: {user},
    success,
    error

  });
};

export const login = (user, success, error) => {
  $.ajax({
    method:'post',
    url: 'api/session/',
    data: {user},
    success,
    error
  });
};

export const logout = (success) => {
  $.ajax({
    method:'delete',
    url: 'api/session',
    success
  });
};
