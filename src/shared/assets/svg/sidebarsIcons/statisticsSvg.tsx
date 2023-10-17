import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={24}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={24}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M21.0001 7C21.0095 6.93032 21.0095 6.85968 21.0001 6.79C20.9913 6.73129 20.9745 6.67407 20.9501 6.62C20.9236 6.57113 20.8935 6.52433 20.8601 6.48C20.822 6.41675 20.7748 6.35947 20.7201 6.31L20.6001 6.24C20.5423 6.19696 20.4782 6.16321 20.4101 6.14H20.2101C20.1491 6.08099 20.078 6.03356 20.0001 6H15.0001C14.7348 6 14.4805 6.10536 14.2929 6.29289C14.1054 6.48043 14.0001 6.73478 14.0001 7C14.0001 7.26522 14.1054 7.51957 14.2929 7.70711C14.4805 7.89464 14.7348 8 15.0001 8H17.8301L13.8301 12.71L9.51005 10.14C9.30543 10.0183 9.06411 9.97359 8.82948 10.0139C8.59484 10.0542 8.38229 10.177 8.23005 10.36L3.23005 16.36C3.14585 16.461 3.08241 16.5777 3.04336 16.7033C3.00432 16.8289 2.99044 16.961 3.00251 17.092C3.01459 17.2229 3.05239 17.3503 3.11374 17.4666C3.17509 17.5829 3.25879 17.6861 3.36005 17.77C3.53996 17.9191 3.7664 18.0005 4.00005 18C4.14696 18.0002 4.29212 17.9681 4.4252 17.9059C4.55829 17.8437 4.67603 17.7529 4.77005 17.64L9.22005 12.3L13.4901 14.86C13.6926 14.9801 13.931 15.0249 14.1633 14.9865C14.3957 14.9481 14.607 14.8289 14.7601 14.65L19.0001 9.7V12C19.0001 12.2652 19.1054 12.5196 19.2929 12.7071C19.4805 12.8946 19.7348 13 20.0001 13C20.2653 13 20.5196 12.8946 20.7072 12.7071C20.8947 12.5196 21.0001 12.2652 21.0001 12V7Z'
      }
      fill={'white'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const statisticsSvg = memo(ForwardRef)

export default statisticsSvg