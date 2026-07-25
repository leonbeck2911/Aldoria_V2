export const pageVariants = {

    initial: {
        opacity: 0,
        rotateY: -35,
        x: 60,
        scale: 0.98
    },

    animate: {
        opacity: 1,
        rotateY: 0,
        x: 0,
        scale: 1,

        transition: {
            duration: .45,
            ease: [0.22,1,0.36,1]
        }
    },

    exit: {
        opacity: 0,
        rotateY: 30,
        x: -60,
        scale: .98,

        transition:{
            duration:.35,
            ease:[0.22,1,0.36,1]
        }
    }

};

export const bookAnimation = {

    initial: {
        opacity: 0,
        x: -250,
        rotateY: -20,
        scale: 0.92
    },

    animate: {
        opacity: 1,
        x: 0,
        rotateY: 0,
        scale: 1,

        transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1]
        }
    },

    exit: {
        opacity: 0,
        x: -250,
        rotateY: -15,
        scale: 0.95,

        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1]
        }
    }

};