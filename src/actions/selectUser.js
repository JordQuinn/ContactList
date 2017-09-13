export const selectUser = (user) => {
  console.log('you clicked on:', user.name.first)
  return{
    type:'USER_SELECTED',
    payload: user
  }
};
