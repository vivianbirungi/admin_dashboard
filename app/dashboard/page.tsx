'use client'

import Auth from "../../features/auth";
const dashboard = () => {
  try {
    Auth.login({ phone: '07034568787' })
      .then((response) => {
      

          console.log(response);
        }
      )
      .catch((error) => {
        console.log("Error => ", error);
      });
  
  } catch (error) {
    console.log(error);
  }
  return (
    <div>
      dashboardComponent
    </div>
  )
}

export default dashboard
