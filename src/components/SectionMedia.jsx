import React from "react";
import Image from 'react-bootstrap/Image';
import {useMediaQuery} from "react-responsive";

/**
 * Renders a project image, or a looping muted video for the entries that used to
 * be animated GIFs. `image.data` is the still (and doubles as the video poster);
 * `image.video` is the mp4, present only on animated entries.
 *
 * Those recordings are device mockups that floated on a transparent background,
 * which H.264 cannot carry. Their alpha is identical on every frame, so
 * `image.mask` is a static PNG whose alpha channel is the device silhouette, and
 * CSS masks the video back into that shape. The mp4 is filled with the site's
 * background navy underneath, so a browser without mask support degrades to a
 * dark rectangle rather than a white one.
 */
const SectionMedia = ({image, className, alt, eager = false}) => {

    const reducedMotion = useMediaQuery({query: '(prefers-reduced-motion: reduce)'});

    if (image.video) {
        // A mask clips the element, native video controls included. Under reduced
        // motion we drop the mask so the controls stay usable; the navy fill then
        // shows, which reads as a dark panel against the dark page.
        const masked = image.mask && !reducedMotion;
        const maskStyle = masked ? {
            WebkitMaskImage: `url(${image.mask})`,
            maskImage: `url(${image.mask})`,
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
        } : null;

        return (
            <video className={className}
                   src={image.video}
                   poster={image.data}
                   style={{objectFit: image.fit, ...maskStyle}}
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
