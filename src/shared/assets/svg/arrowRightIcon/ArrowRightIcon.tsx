import * as React from 'react'
import { SVGProps } from 'react'
export const ArrowRightIcon = ({ height = 10, width = 7, ...props }: SVGProps<SVGSVGElement>) => (
  <svg fill={'none'} height={height} width={width} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path d={'M2 10 .94 8.94 4.87 5 .94 1.06 2 0l5 5-5 5Z'} fill={'#fff'} />
  </svg>
)
