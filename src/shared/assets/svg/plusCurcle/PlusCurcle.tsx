import { SVGProps } from 'react'
export const PlusCurcle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill={'#fff'}
    height={36}
    viewBox={'0 0 24 24'}
    width={36}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path d={'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z'} />
    <path d={'M15 11h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z'} />
  </svg>
)
