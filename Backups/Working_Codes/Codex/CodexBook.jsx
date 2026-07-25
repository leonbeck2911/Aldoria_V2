import { AnimatePresence, motion } from "framer-motion";
import { bookAnimation } from "./pageAnimations";

export default function CodexBook({
    isOpen,
    onClose,
    children,
}) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="codex-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="codex-book-wrapper"
                        variants={bookAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Leather Spine */}
                        <div className="codex-spine">

                            <div className="spine-gold-line top"></div>

                            <div className="spine-title">
                                ALDORIA
                            </div>

                            <div className="spine-gold-line bottom"></div>

                        </div>

                        {/* Cover */}

                        <div className="codex-book">

                            <div className="codex-gold-corner tl"></div>
                            <div className="codex-gold-corner tr"></div>
                            <div className="codex-gold-corner bl"></div>
                            <div className="codex-gold-corner br"></div>

                            {children}

                        </div>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}