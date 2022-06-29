import _find from 'lodash/find';

const userList = [
 {
  name: 'João Pedro',
  password: '123',
 },
 {
  name: 'admin',
  password: 'admin'
 }
]

export const isAuthenticated = () => !!localStorage.getItem('accessToken');

export const login = (userData) => {
 const validatedUser = _find(userList, userData);

 if(validatedUser) {
  localStorage.setItem('accessToken', validatedUser.name);
  window.location.replace('/dashboard');
 }
}

export const register = (userDataRegister) => {
 userList.push(userDataRegister);
 window.location.replace('/login');
}

export const logout = () => {
 localStorage.removeItem('accessToken');
 window.location.replace('/');
}