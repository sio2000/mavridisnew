declare module 'react-slick' {
  import { ReactNode } from 'react';
  
  interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    nextArrow?: ReactNode;
    prevArrow?: ReactNode;
  }

  export default class Slider extends React.Component<Settings> {}
} 