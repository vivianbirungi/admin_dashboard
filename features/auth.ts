import axiosinstance from '../lib/axios';
const login = async (user:any) => {
    console.log(JSON.stringify(user));
      const response = await axiosinstance.post(
        '/login',
        JSON.stringify({
            "country_code": "+256", 
            "phone": "700937149"
        }),
      );
      return response;
    };

    export default {login};