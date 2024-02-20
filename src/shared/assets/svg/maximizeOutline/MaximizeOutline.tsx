import { SVGProps } from 'react'

export const MaximizeOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg fill={'fff'} height={24} width={24} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <g clipPath={'url(#a)'}>
      <path
        d={
          'm20.7 19.3-3.4-3.4a8 8 0 0 0 .4-9.3 8 8 0 1 0-1.8 10.7l3.4 3.4a1 1 0 1 0 1.4-1.4ZM5 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z'
        }
      />
      <path
        d={'M13 10h-1V9a1 1 0 0 0-2 0v1H9a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2Z'}
      />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M0 0h24v24H0z'} />
      </clipPath>
    </defs>
  </svg>
)
