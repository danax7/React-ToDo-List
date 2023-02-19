import { IButtonProps } from '../lib/types/types';
import style from './style.module.scss';

export const Button = (props: IButtonProps) => (
  <button onClick={() => props.onButtonClick()} className={style.button}>
    {props.text}
  </button>
);
