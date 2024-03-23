
import { axiosInstance } from "../app/auth";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../app/context";

const AuthData = () => {

    const { login, logout } = useContext(AuthContext);

    const http = axiosInstance();

    const [apiRequestMade, setApiRequestMade] = useState(false);

   

    useEffect(() => {

        if (!apiRequestMade) {
            setApiRequestMade(true); // Set the flag to true to avoid making multiple requests

            http.post("loadUser")
                .then((response) => {
                    // console.log("response: ", response);
                    if (response.status === 200) {
                        if (response.data.status===1){
                            const user = response.data.data;
                            login(user.token, user);
                        } else {
                            logout("Invalid or Expired Token");
                            // console.log("NO USER DATA");
                        }
                    }
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error);
                    logout("Error fetching user data");
                });

        }
    }, [apiRequestMade]); // Only run the effect when apiRequestMade changes


    return (<></>);
}

export default AuthData;