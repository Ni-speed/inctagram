import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill={"none"} height={36} ref={ref} width={36} xmlns={"http://www.w3.org/2000/svg"} {...props}>
    <g clipPath={"url(#a)"}>
      <path d={"M7.9 14.6a10.6 10.6 0 0 1 16.7-4.9L30 4.5A18 18 0 0 0 2 10l6 4.6Z"} fill={"#EA4335"} />
      <path
        d={"M24 27a11 11 0 0 1-6 1.6c-4.7 0-8.7-3-10-7.2L1.8 26a18 18 0 0 0 27.9 5.5L24 27Z"}
        fill={"#34A853"}
      />
      <path 
        d={"M29.8 31.5a18 18 0 0 0 5-16.8H18v7h9.7A8.1 8.1 0 0 1 24 27l5.7 4.5Z"}
        fill={"#4A90E2"}
      />
      <path d={"M8 21.4a10.7 10.7 0 0 1-.1-6.8l-6-4.6a17.9 17.9 0 0 0 0 16l6-4.6Z"} fill={"#FBBC05"} />
    </g>
    <defs>
      <clipPath id={"a"}>
        <path d={"M0 0h36v36H0z"} fill={"#fff"} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
