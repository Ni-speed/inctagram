import {Ref, SVGProps, forwardRef, memo} from "react"

const SvgComponent = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill={"none"}
        height={24}
        ref={ref}
        viewBox={"0 0 24 24"}
        width={24}
        xmlns={"http://www.w3.org/2000/svg"}
        {...props}
    >
        <g id={"Layer 2"}>
            <g id={"home"}>
                <path
                    d={"M20.42 10.1799L12.71 2.29995C12.617 2.20622 12.5064 2.13183 12.3846 2.08106C12.2627 2.03029 12.132 2.00415 12 2.00415C11.868 2.00415 11.7373 2.03029 11.6154 2.08106C11.4936 2.13183 11.383 2.20622 11.29 2.29995L3.57999 10.1899C3.39343 10.378 3.24609 10.6013 3.14652 10.8468C3.04695 11.0922 2.99715 11.3551 2.99999 11.6199V19.9999C2.99922 20.5119 3.19477 21.0046 3.54637 21.3766C3.89797 21.7487 4.37885 21.9718 4.88999 21.9999H19.11C19.6211 21.9718 20.102 21.7487 20.4536 21.3766C20.8052 21.0046 21.0008 20.5119 21 19.9999V11.6199C21.0008 11.0829 20.7928 10.5665 20.42 10.1799ZM9.99999 19.9999V13.9999H14V19.9999H9.99999ZM19 19.9999H16V12.9999C16 12.7347 15.8946 12.4804 15.7071 12.2928C15.5196 12.1053 15.2652 11.9999 15 11.9999H8.99999C8.73478 11.9999 8.48042 12.1053 8.29289 12.2928C8.10535 12.4804 7.99999 12.7347 7.99999 12.9999V19.9999H4.99999V11.5799L12 4.42995L19 11.6199V19.9999Z"}
                    fill={"white"}
                    id={"Vector"}
                />
            </g>
        </g>
    </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const HomeIconSvg = memo(ForwardRef)

export default HomeIconSvg

