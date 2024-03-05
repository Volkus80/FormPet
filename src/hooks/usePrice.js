import { useSelector } from "react-redux";
import { termSelector } from "../store/terms/termsSelectors";

function usePrice(price, additional = false) {
  const isMonthly = useSelector(termSelector);
  const rate = isMonthly ? 1 : 10;
  const prefix = additional ? "+" : "";
  const postfix = isMonthly ? "mo" : "yr";

  return `${prefix}$${price * rate}/${postfix}`;
}

export { usePrice };
