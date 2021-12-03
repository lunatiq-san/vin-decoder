import axios from "axios";
import carsActions from "./cars-actions";

axios.defaults.baseURL = "https://vpic.nhtsa.dot.gov/api/";

const getCarInfoByVin = (vin) => async (dispatch) => {
  dispatch(carsActions.fetchCarInfoByVinRequest());

  try {
    const { data } = await axios.get(`vehicles/DecodeVin/${vin}?format=json`);
    const { Results } = data;

    dispatch(carsActions.fetchCarInfoByVinSuccess(Results));
  } catch (error) {
    dispatch(carsActions.fetchCarInfoByVinError(error));
  }
};

// const getVehicleVariablesList = () => async (dispatch) => {};

const carsOperations = { getCarInfoByVin };

export default carsOperations;
