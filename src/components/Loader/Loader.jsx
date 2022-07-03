import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { BallTriangle } from 'react-loader-spinner';
import s from '../Loader/Loader.module.css';

export default function Loader() {
  return (
    <div className={s.Loader}>
      <BallTriangle
        heigth="100"
        width="100"
        color="red"
        ariaLabel="loading-indicator"
      />
    </div>
  );
}
