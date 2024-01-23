import { appCheck } from "../utils/firebase";
import { getToken } from "firebase/app-check";

const checkSessionCookie = async () => {
  const url = "https://shop.adadkins.com/authStatus";
  try {
    const appToken = await getToken(appCheck, false);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-Firebase-AppCheck": `Bearer ${appToken.token}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching event:", error.message);
  }
};

export default checkSessionCookie;
