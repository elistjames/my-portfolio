
import {motion, useMotionTemplate, useScroll, useSpring, useTransform} from "framer-motion";
import {useRef} from "react";


const AnimateContainer = ({children, slideIn, amount = 0}) => {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start center"]
    });

    const x = useTransform(scrollYProgress, [0,1], [100,amount]);
    const moveX = useSpring(x, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });

    const transform = useMotionTemplate`translateX(${moveX}vw)`;

    // Most containers only fade. Leaving transform undefined for those emits no
    // transform at all, so they never get promoted to their own compositor layer.
    return (
        <motion.div ref={ref} style={{overflow: 'hidden', opacity: scrollYProgress, transform: slideIn ? transform : undefined}}>{children}</motion.div>
    );

}

export default AnimateContainer