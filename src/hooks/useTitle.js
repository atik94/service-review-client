import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} -MyLaundryHouse`;
  }, [title]);
};
export default useTitle;
