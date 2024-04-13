import css from "./CircleBlock.module.css";
import { useMediaQuery } from "@mui/material";
const CircleBlock = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  if (isMobile) {
    return null;
  }
  return (
    <div className={css.circleContainer}>
      <div className={css.circleBig}></div>
      <div className={css.circleSmall}></div>
      <div className={css.circleMedium}></div>
    </div>
  );
};

export default CircleBlock;
