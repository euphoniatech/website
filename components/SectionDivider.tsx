import React from "react";

interface SectionDividerProps {
  color: string;
}

const SectionDivider = ({ color }: SectionDividerProps) => {
  return (
    <div className="custom-shape-divider-bottom-1676987994">
      <style jsx>
        {`
          .custom-shape-divider-bottom-1676987994 {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            overflow: hidden;
            line-height: 0;
          }

          .custom-shape-divider-bottom-1676987994 svg {
            position: relative;
            display: block;
            width: calc(100% + 1.3px);
            height: 100px;
          }
        `}
      </style>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          style={{ fill: color }}
        ></path>
      </svg>
    </div>
  );
};

export default SectionDivider;
