import React from 'react';

export const CharitySvg: React.FC = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={40}
      height={40}
      fill='none'
    >
      <rect
        width={40}
        height={40}
        fill='#FFF7F2'
        rx={20}
      />
      <g>
        <path
          fill='#040325'
          d='M24.707 8.804A7.151 7.151 0 0 0 20 10.558a7.151 7.151 0 0 0-4.707-1.754C11.272 8.804 8 12.134 8 16.227c0 1.942.746 3.772 2.102 5.154l9.414 9.601a.703.703 0 0 0 1.01 0c.144-.149 9.32-9.506 9.413-9.6C31.287 20.005 32 18.223 32 16.226c0-4.093-3.271-7.423-7.293-7.423Zm-4.643 3.426c1.026 0 1.861.835 1.861 1.86a3.05 3.05 0 0 1-.915 2.171l-.951.91-.938-.907a3.05 3.05 0 0 1-.917-2.173c0-1.026.834-1.861 1.86-1.861ZM9.406 16.227c0-3.317 2.64-6.017 5.887-6.017 1.171 0 2.289.348 3.242.995a3.27 3.27 0 0 0-1.738 2.886c0 1.19.49 2.35 1.344 3.181l.901.873-5.234 5.008-2.702-2.756a5.842 5.842 0 0 1-1.7-4.17ZM20.02 29.488l-5.227-5.33 5.26-5.035 5.197 5.031-5.23 5.334Zm8.915-9.091-2.7 2.753-5.165-5 .915-.875.004-.004a4.464 4.464 0 0 0 1.342-3.18 3.27 3.27 0 0 0-1.81-2.924 5.745 5.745 0 0 1 3.186-.957c3.246 0 5.887 2.7 5.887 6.017 0 1.621-.574 3.063-1.66 4.17Z'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path
            fill='#fff'
            d='M8 8h24v24H8z'
          />
        </clipPath>
      </defs>
    </svg>
  );
};
