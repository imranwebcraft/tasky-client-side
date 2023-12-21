import { AnimatePresence, motion } from 'framer-motion';

const PageAnimation = ({
	children,
	initial = { opacity: 0 },
	animate = { opacity: 1 },
	transition = { duration: 0.5 },
	keyValue,
}) => {
	return (
		<>
			<AnimatePresence>
				<motion.div
					initial={initial}
					animate={animate}
					transition={transition}
					key={keyValue}
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</>
	);
};

export default PageAnimation;
