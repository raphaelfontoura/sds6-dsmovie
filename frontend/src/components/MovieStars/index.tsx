import "./styles.css";

import { ReactComponent as StarFull } from "assets/img/star-full.svg";
import { ReactComponent as StarHalf } from "assets/img/star-half.svg";
import { ReactComponent as StarEmpty } from "assets/img/star-empty.svg";

type Props = {
  score: number;
}

type StarProps = {
  fill: number;
}

function getFills(score: number) {

  const fills = [0, 0, 0, 0, 0];

  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;
  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
}

function Star({ fill }: StarProps) {
  if (fill === 0) {
    return <StarEmpty />
  }
  else if (fill === 1) {
    return <StarFull />
  }
  else {
    return <StarHalf />
  }
}

const MovieStars = ({ score }: Props) => {

  const fills = getFills(score);

  return (
    <div className="dsmovie-stars-container">
      {fills.map(
        (item,index) => (
          <Star fill={item} key={index}/>
        )
      )}
    </div>
  )
}

export default MovieStars
