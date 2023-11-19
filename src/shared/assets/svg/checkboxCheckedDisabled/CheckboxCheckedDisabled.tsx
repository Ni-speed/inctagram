import { SVGProps } from 'react'

type PropsType = {
  size?: number
} & SVGProps<SVGSVGElement>
export const CheckboxCheckedDisabled = ({ size = 18, ...props }: PropsType) => (
  <svg
    fill={'none'}
    height={size}
    viewBox={'0 0 24 24'}
    width={size}
    xmlns={'http://www.w3.org/2000/svg'}
  >
    <path d={'M4 6h16v12H4z'} fill={'#DCDAE0'} />
    <path
      d={
        'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z'
      }
      fill={'gray'}
    />
  </svg>
)
