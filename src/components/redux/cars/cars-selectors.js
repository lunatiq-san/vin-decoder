const getCar = (state) => state.car.entities;
const isLoading = (state) => state.car.isLoading;
const getError = (state) => state.car.error;

const carsSelectors = {
  getCar,
  isLoading,
  getError,
};

export default carsSelectors;
