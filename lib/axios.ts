import axios from "axios";
import Base_URL from "./constants";

const USERNAME ="rentalynk_admin";
const PASSWORD = "5b738ddf-cc8d-4037";
const API_KEY = "33d391f8-turo-8920-kwyc-87bc93b9c733"
const axiosinstance = axios.create({
     baseURL:Base_URL.Base_URL,
     headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
        'Authorization': `Basic ${Buffer.from(`${USERNAME}:${PASSWORD}`).toString('base64')}`
      },
    });

    
      
      export default axiosinstance;