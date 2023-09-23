import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

export const animations = () => {

    /**
     * Smoth scroll
     */
    const lenis = new Lenis({
        lerp: 0.1,
        smooth: true
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time)=>{
        lenis.raf(time * 1000)
    });

    gsap.ticker.lagSmoothing(0);

    /**
     * Animation
     */
    gsap.registerPlugin(ScrollTrigger);

    const firstBottomPathTo	= document.querySelector('.first__bottom path').dataset.pathTo;
    gsap.timeline({
        scrollTrigger: {
        trigger: '.section.first',
        endTrigger: '.section.third',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
        }
    }).to( '.first__bottom path', {
        ease: 'none',
        attr: { d: firstBottomPathTo }
    });
    gsap.timeline({
        scrollTrigger: {
        trigger: '.section.first',
        endTrigger: '.section.third',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
        }
    }).to( '.first__bottom', {
        ease: 'none',
        attr: { viewBox: '0 0 100 8' }
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: '.section.first',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            pin: true
        }
    }).to( '.letter.g', {
        width: '0',
    }).to( '.letter.f', {
        width: '0',
    }).to( '.letter.e', {
        width: '0',
    }).to( '.letter.d', {
        width: '0',
    }).to( '.letter.c', {
        width: '0',
    }).to( '.letter.b', {
        width: '0',
    }).to( '.letter.a', {
        width: '0',
    });

    gsap.to( '.image.a', {
        scrollTrigger: {
            trigger: '.section.second',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            pin: '.first'
        },
        scale: 1.5,
        yPercent: -100,
        width: '15vw'
    });

    gsap.to( '.image.b', {
        scrollTrigger: {
            trigger: '.section.second',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        scale: 2.5,
        yPercent: 100,
        width: '15vw'
    });

    gsap.to( '.image.c', {
        scrollTrigger: {
            trigger: '.section.second',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        yPercent: -100,
        width: '15vw'
    });

    gsap.to( '.image .image-content img', {
        scrollTrigger: {
            trigger: '.section.third',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            pin: '.first'
        },
        scale: 1,
        opacity: 1
    });

    gsap.to( '.image .image-text', {
        scrollTrigger: {
            trigger: '.section.third',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        opacity: 1
    });
}