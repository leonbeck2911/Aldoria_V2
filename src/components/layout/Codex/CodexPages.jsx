import { AnimatePresence, motion } from "framer-motion";
import { pageVariants } from "./pageAnimations";

export default function CodexPages({
    page,
    children,
}) {
    return (
        <div className="codex-pages">

            <AnimatePresence mode="wait">

                <motion.div
                    key={page}
                    className="codex-page"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    {children}
                </motion.div>

            </AnimatePresence>

        </div>
    );
}