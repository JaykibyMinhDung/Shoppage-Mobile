import classes from "./LoaddingPage.module.css";

const LoadingSpinner = () => {
  //   return <div className={classes.spinner}></div>;
  return (
    <div className={classes.loader}>
      <div className={`${classes.inner} ${classes.one}`}></div>
      <div className={`${classes.inner} ${classes.two}`}></div>
      <div className={`${classes.inner} ${classes.three}`}></div>
    </div>
  );
};

export default LoadingSpinner;
