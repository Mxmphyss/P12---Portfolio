import { useDispatch } from "react-redux";
import { setThemeColor } from "@redux/reducers/colorReducer";

const BouncingBall = ({ color }) => {
  const dispatch = useDispatch();

  const handleBounce = () => {
    dispatch(setThemeColor(color));
  };

  return (
    <div
      className="bouncing-ball"
      style={{ backgroundColor: color }}
      onAnimationIteration={handleBounce}
    ></div>
  );
};

export default BouncingBall;