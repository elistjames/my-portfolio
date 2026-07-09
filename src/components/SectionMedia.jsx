import React from "react";
import Image from 'react-bootstrap/Image';
import {useMediaQuery} from "react-responsive";

/**
 * Renders a project image, or a looping muted video for the entries that used to
 * be animated GIFs. `image.data` is the still (and doubles as the video poster);
 * `image.video` is the mp4, present only on animated entries.
 */
const SectionMedia = ({image, className, alt, eager = false}) => {

    const reducedMotion = useMediaQuery({query: '(prefers-reduced-motion: reduce)'});

    if (image.video) {
        // Autoplaying muted video is the GIF replacement, so it carries no
        // controls. Under reduced motion it stops autoplaying and gains controls
        // instead, leaving the poster frame on screen until the user asks for it.
        return (
            <video className={className}
                   src={image.video}
                   poster={image.data}
                   style={{objectFit: image.fit}}
                   aria-label={alt}
                   preload={reducedMotion ? "none" : "metadata"}
                   autoPlay={!reducedMotion}
                   controls={reducedMotion}
                   muted
                   loop
                   playsInline/>
        );
    }

    return (
        <Image className={className}
               src={image.data}
               alt={alt}
               style={{objectFit: image.fit}}
               loading={eager ? undefined : "lazy"}
               decoding="async"
               fetchPriority={eager ? "high" : undefined}/>
    );
}

export default SectionMedia;
