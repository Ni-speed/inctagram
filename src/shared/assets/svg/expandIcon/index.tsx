import { SVGProps } from 'react'

export const ExpandIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg fill={'none'} height={24} width={24} xmlns={'http://www.w3.org/2000/svg'} {...props}>
      <path
        d={
          'M20 5a1 1 0 0 0-1-1h-5a1 1 0 1 0 0 2h2.6l-3.3 3.3A1 1 0 0 0 14 11a1 1 0 0 0 .7-.3L18 7.4V10a1 1 0 0 0 2 0V5Zm-9.3 8.3a1 1 0 0 0-1.4 0L6 16.6V14a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H7.4l3.3-3.3a1 1 0 0 0 0-1.4Z'
        }
      />
    </svg>
  )
}
