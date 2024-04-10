import css from "./CircleBlock.module.css";
const CircleBlock = () => {
  return (
    <div className={css.circleContainer}>
      <div className={css.circleBig}></div>
      <div className={css.circleSmall}></div>
      <div className={css.circleMedium}></div>
    </div>
  );
};

export default CircleBlock;
