import { SVGProps } from 'react'
export const Plus = (props: SVGProps<SVGSVGElement>) => (
  <svg fill={'fff'} height={24} width={24} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={
        'M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12Z'
      }
      fill={'fff'}
    />
    <path
      d={'M15 11h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z'}
      fill={'fff'}
    />
  </svg>
)
