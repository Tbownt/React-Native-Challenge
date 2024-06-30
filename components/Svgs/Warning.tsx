import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface WarningProps extends SvgProps {}

const Warning: React.FC<WarningProps> = (props) => (
  <Svg
    width={100}
    height={115}
    fill="#1ED6EB"
    stroke="#002859"
    viewBox="0 0 554.2 554.199"
    {...props}
  >
    <Path
      d="M538.5 386.199 356.5 70.8a91.803 91.803 0 0 0-79.501-45.9c-32.8 0-63.1 17.5-79.5 45.9L12.3 391.6a91.793 91.793 0 0 0 0 91.8c16.4 28.4 46.7 45.9 79.5 45.9H462.4c50.7 0 91.8-41.101 91.8-91.8 0-19-5.8-36.7-15.7-51.301zm-222.2 30.7c0 21.7-16.7 38.3-39.2 38.3s-39.2-16.6-39.2-38.3V416c0-21.601 16.7-38.301 39.2-38.301S316.3 394.3 316.3 416v.899zm.9-258.199-19.4 169.4c-1.3 12.2-9.4 19.8-20.7 19.8s-19.4-7.7-20.7-19.8L237 158.6c-1.3-13.1 5.801-23 18-23h44.1c12.2.1 19.4 10 18.1 23.1z"
      fill="#1ED6EB"
      stroke="#002859"
    />
  </Svg>
);
export default Warning;
