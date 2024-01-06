import axios from "axios";

const getProductsAPI = "https://fakestoreapi.com/products";
export const getProductsDetails = async () => {
  try {
    const productResp = await axios.get(getProductsAPI);
    console.log(productResp);

    if (productResp?.data && productResp?.status === 200){
      return {
        data: productResp?.data,
        err: "",
      };
    };
    return {
        data: "",
        err: "error while getting products details",
      };
  } catch (err) {
    return {
      data: "",
      err:"api hits the error",
      errCode : "get error code and display on the screen"
    };
  }
};
