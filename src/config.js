const config = {
    animationType: 'slide', // slide or fade
    animationSpeed: '.5s',
    slideWidth: 700,
    loop: false,
    autoPlay: true,
    autoPlayInterval: 3000,
    slides: [
        {
            id: 0,
            img: {
                src: 'img/slide1.jpg',
                alt: 'Slide 1'
            }
        },
        {
            id: 1,
            img: {
                src: 'img/slide2.jpg',
                alt: 'Slide 2'
            }
        },
        {
            id: 2,
            img: {
                src: 'img/slide3.jpg',
                alt: 'Slide 3'
            }
        },
        {
            id: 3,
            img: {
                src: 'img/slide4.jpg',
                alt: 'Slide 4'
            }
        }
    ]
};

export default config;