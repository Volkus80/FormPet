import IconArcade from "../images/icon-advanced.svg";
import IconAdvanced from "../images/icon-arcade.svg";
import IconPro from "../images/icon-pro.svg";

export const plans = [
  {
    id: 1,
    name: "Arcade",
    price: 9,
    image: IconAdvanced,
    selected: true,
  },
  {
    id: 2,
    name: "Advanced",
    price: 12,
    image: IconArcade,
    selected: false,
  },
  {
    id: 3,
    name: "Pro",
    price: 15,
    image: IconPro,
    selected: false,
  },
];
