// Next
import dynamic from "next/dynamic"

const AutoScroll = dynamic(() => import('./AutoScroll'))
const AutoPlay = dynamic(() => import('./AutoPlay'))

export {
    AutoScroll,
    AutoPlay
}