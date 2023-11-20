import * as React from 'react'
import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={20}
    ref={ref}
    width={18}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M15 2h-1V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3ZM5 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm8 0H9a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2Zm3-6H2V5a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V4h6v1a1 1 0 0 0 2 0V4h1a1 1 0 0 1 1 1v4Z'
      }
      fill={'#fff'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const CalendarIcon = memo(ForwardRef)
