import { ReactElement } from "react";

interface Props {
  handle: string;
  hexColor?: string;
}

const MarkerIcon = ({ handle, hexColor = "green" }: Props): ReactElement => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="37" fill="none">
      <path
        fill={hexColor}
        stroke="#fff"
        strokeWidth="2"
        d="m14 34 .8-.2.7-.5c.4-.3 1-.7 1.5-1.3a38.7 38.7 0 0 0 7.4-10.3c1-2.1 1.6-4.3 1.6-6.4C26 8.5 20.7 3 14 3S2 8.5 2 15.3c0 2.1.7 4.3 1.6 6.4a34.4 34.4 0 0 0 9.6 12c.2.2.5.3.8.3Z"
      />

      <text
        xmlSpace="preserve"
        fill="#fff"
        fontFamily="Open Sans"
        fontSize="10.5"
        fontWeight="600"
        letterSpacing="0em"
        style={{ whiteSpace: "pre" }}
      >
        <tspan x="50%" y="55%" textAnchor="middle">
          {handle}
        </tspan>
      </text>
    </svg>
  );
};

export default MarkerIcon;
