import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiUrl = MENU_URL + resId;

    const data = await fetch(
      "https://corsproxy.io/?url=" + encodeURIComponent(apiUrl),
    );
    const json = await data?.json();

    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;
