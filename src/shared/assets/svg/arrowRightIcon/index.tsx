import * as React from 'react'
import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={props.height}
    width={props.width}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M9.22 12.67a.67.67 0 0 1-.52-.25l-3.22-4a.67.67 0 0 1 0-.85l3.33-4a.67.67 0 0 1 1.03.86L6.86 8l2.88 3.57a.67.67 0 0 1-.52 1.1Z'
      }
      fill={'#fff'}
    />
  </svg>
)

export const ArrowRightIcon = memo(SvgComponent)
