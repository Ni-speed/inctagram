import * as React from 'react'
import { SVGProps, memo } from 'react'
export const ArrowLeftIcon = ({ height = 10, width = 7, ...props }: SVGProps<SVGSVGElement>) => (
  <svg fill={'none'} height={height} width={width} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path d={'M5 10 0 5l5-5 1.06 1.06L2.13 5l3.93 3.94L5 10Z'} fill={'#fff'} />
  </svg>
)
