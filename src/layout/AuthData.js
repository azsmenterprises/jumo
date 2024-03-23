
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

            http.get("loadUser")
                .then((response) => {
                    // console.log("response: ", response);
                    if (response.status === 200) {
                        const user = response.data.data;
                        login(user.token, user);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error);
                    // logout();
                });

        }
    }, [apiRequestMade]); // Only run the effect when apiRequestMade changes


    return (<></>);
}

export default AuthData;