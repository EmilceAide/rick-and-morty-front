export const validation = (userData) => {
  const errors = {};
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)) {
    errors.username = "El email es inválido";
  }
  if (userData.username === "") {
    errors.username = "El campo email esta vacío";
  }

  if (userData.username.length > 35) {
    errors.username = "El email no puede superar los 35 caracteres";
  }

  if (!userData.password.match(/\d/)) {
    errors.password = "La contraseña debe contener al menos un número";
  }

  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "La contraseña de contener entre 6 y 10 caracteres";
  }

  return errors;
};
