import { SVGProps } from 'react'
export const Message = (props: SVGProps<SVGSVGElement>) => (
  <svg fill={'fff'} height={24} width={24} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={
        'M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
      }
      fill={'fff'}
    />
    <path
      d={
        'M19.07 4.93a10 10 0 0 0-16.28 11c.1.2.13.42.09.64L2 20.8A1 1 0 0 0 3 22h.2l4.28-.86c.22-.03.44 0 .64.09a10 10 0 0 0 11-16.28l-.05-.02Zm.83 8.36a8 8 0 0 1-11 6.08 3.26 3.26 0 0 0-1.81-.21l-2.82.57.57-2.82c.11-.61.04-1.24-.21-1.81a8 8 0 1 1 15.27-1.81Z'
      }
      fill={'fff'}
    />
  </svg>
)
