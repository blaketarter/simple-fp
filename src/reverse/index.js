export const reverse = (data) => {
  const newData = [];
  for (let i = data.length - 1; i >= 0; i--) {
    newData.push(data[i]);
  }
  return newData;
};
