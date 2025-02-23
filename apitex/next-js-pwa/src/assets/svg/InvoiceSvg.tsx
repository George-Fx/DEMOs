import React from 'react';

export const InvoiceSvg: React.FC = () => {
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
      <g fill='#040325'>
        <path d='M29.832 9.036a.524.524 0 0 0-.274-.078H13.892c-1.347 0-2.443 1.085-2.443 2.415l-.092 13.49h-2.83A.526.526 0 0 0 8 25.39v2.43a3.236 3.236 0 0 0 3.233 3.233.532.532 0 0 0 .108-.011h13.07a3.286 3.286 0 0 0 3.516-3.276V19.88h3.547c.29 0 .526-.236.526-.526v-7.81a2.55 2.55 0 0 0-2.168-2.508ZM9.052 27.82v-1.904h12.314v1.85c0 .824.31 1.618.869 2.224H11.161a.52.52 0 0 0-.074.006 2.183 2.183 0 0 1-2.035-2.176Zm17.824-16.276v16.222a2.224 2.224 0 0 1-.65 1.567 2.203 2.203 0 0 1-1.507.665.516.516 0 0 0-.087-.008h-.184a2.25 2.25 0 0 1-2.03-2.224V25.39a.526.526 0 0 0-.526-.527H12.41l.092-13.486a1.38 1.38 0 0 1 1.39-1.367h13.507a2.51 2.51 0 0 0-.522 1.534Zm4.072 7.283h-3.02v-7.283a1.51 1.51 0 0 1 3.02 0v7.283Z' />
        <path d='M14.754 14.657h4.982a.526.526 0 1 0 0-1.052h-4.982a.526.526 0 1 0 0 1.052ZM24.048 17.366h-9.294a.526.526 0 1 0 0 1.053h9.294a.526.526 0 0 0 0-1.053ZM24.048 21.128h-9.294a.526.526 0 0 0 0 1.052h9.294a.526.526 0 0 0 0-1.052Z' />
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
