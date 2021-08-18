import React, { Fragment } from 'react'

const Spinner: React.FC = () => (
  <Fragment>
    <svg
      style={{margin: '2rem auto 0', background: 'none', display: 'block', shapeRendering: 'auto'}}
      width="150px"
      height="150px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="rotate(0 50 50)">
        <rect x="47" y="23" rx="3" ry="4.32" width="6" height="16" fill="#e2e2e2">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.0204081632653061s"
            begin="-0.9183673469387754s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(36 50 50)">
        <rect x="47" y="23" rx="3" ry="4.32" width="6" height="16" fill="#e2e2e2">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.0204081632653061s"
            begin="-0.8163265306122448s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(72 50 50)">
        <rect x="47" y="23" rx="3" ry="4.32" width="6" height="16" fill="#e2e2e2">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.0204081632653061s"
            begin="-0.7142857142857142s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(108 50 50)">
        <rect x="47" y="23" rx="3" ry="4.32" width="6" height="16" fill="#e2e2e2">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.0204081632653061s"
            begin="-0.6122448979591836s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(144 50 50)">
        <rect x="47" y="23" rx="3" ry="4.32" width="6" height="16" fill="#e2e2e2">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.0204081632653061s"
            begin="-0.5102040816326531s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(180 50 50)">
        <rect x="47" y="23" rx="3" ry="4.32" width="6" height="16" fill="#e2e2e2">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.0204081632653061s"
            begin="-0.4081632653061224s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(216 50 50)">
        <rect x="47" y="23" rx="3" ry="4.32" width="6" height="16" fill="#e2e2e2">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.0204081632653061s"
            begin="-0.3061224489795918s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(252 50 50)">
        <rect x="47" y="23" rx="3" ry="4.32" width="6" height="16" fill="#e2e2e2">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.0204081632653061s"
            begin="-0.2040816326530612s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(288 50 50)">
        <rect x="47" y="23" rx="3" ry="4.32" width="6" height="16" fill="#e2e2e2">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.0204081632653061s"
            begin="-0.1020408163265306s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(324 50 50)">
        <rect x="47" y="23" rx="3" ry="4.32" width="6" height="16" fill="#e2e2e2">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.0204081632653061s"
            begin="0s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
    </svg>
  </Fragment>
)

export default Spinner
