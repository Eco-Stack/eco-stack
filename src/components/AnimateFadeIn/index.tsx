import { motion } from 'framer-motion';

export default function AnimateFadeIn({
  children,
  delay = 0,
  initialDelay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
  initialDelay?: number;
}) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 * delay + initialDelay }}>
      {children}
    </motion.div>
  );
}
