import axios from "axios";

export const getBooking =
  (page = 1, sortorder = "asc") =>
  async (dispatch) => {
    try {
      dispatch({ type: "GET_BOOKING_PENDING" });
      console.log(sortorder);
      const result = await axios.get(`${process.env.REACT_APP_API_BACKEND}/orderticket?sortby=price&sortorder=${sortorder}&page=${page}&limit=10`);
      console.log("dari action", result.data);
      const booking = result.data;

      dispatch({ type: "GET_BOOKING_SUCCESS", payload: booking });
      // navigate('/home')
    } catch (error) {
      console.log(error);
    }
  };

export const getBookingDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_BOOKING_DETAIL_PENDING" });
    const result = await axios.get(`${process.env.REACT_APP_API_BACKEND}/orderticket/${id}`);
    console.log("dari action", result.data);
    const bookingDetail = result.data;
    dispatch({ type: "GET_BOOKING_DETAIL_SUCCESS", payload: bookingDetail });
    // navigate('/home')
  } catch (error) {
    console.log(error);
  }
};
