import { createAction } from "@reduxjs/toolkit";

const fetchCarInfoByVinRequest = createAction("car/fetchCarInfoByVinRequest");
const fetchCarInfoByVinSuccess = createAction("car/fetchCarInfoByVinSuccess");
const fetchCarInfoByVinError = createAction("car/fetchCarInfoByVinError");

const carsActions = {
  fetchCarInfoByVinRequest,
  fetchCarInfoByVinSuccess,
  fetchCarInfoByVinError,
};

export default carsActions;
