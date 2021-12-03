const getCarInfo = (state) => state.car.entities;
const isLoading = (state) => state.car.isLoading;
const getError = (state) => state.car.error;
const getLastRequests = (state) => state.car.lastRequests;

const carsSelectors = {
  getCarInfo,
  isLoading,
  getError,
  getLastRequests,
};

export default carsSelectors;
