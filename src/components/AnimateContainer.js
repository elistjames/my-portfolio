
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

    const transform = useMotionTemplate`translateX(${slideIn ? moveX : 0}vw)`;

    return (
        <motion.div ref={ref} style={{overflow: 'hidden', opacity: scrollYProgress, transform: transform}}>{children}</motion.div>
    );

}

export default AnimateContainer