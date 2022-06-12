const createUserData = (): any[] => {
  const users: any[] = [];
  for (let i = 0; i < 1000; i++) {
    users.push({
      id: 10000 + i,
      name: i + ' name',
      dob: new Date(),
      /* favColor: colors[randomIntFromInterval(0, 19)], */
      city: 'cities[randomIntFromInterval(0, 9)]',
    });
  }
  return users;
};

export const userData = {
  users: createUserData(),
};
