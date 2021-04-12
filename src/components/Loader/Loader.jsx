import Loader from "react-loader-spinner";
import styles from "./Loader.module.css";

const LoaderComponent = () => {
  return (
    <div className={styles.loader}>
      <Loader type="Circles" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default LoaderComponent;
