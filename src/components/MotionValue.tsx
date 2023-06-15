import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default function MotionValue() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  useEffect(() => {
    //x.on('change', () => console.log(x.get()));
    scale.on('change', () => console.log(scale.get()));
  }, [scale]);

  return (
    <>
      <Box drag='x' dragSnapToOrigin style={{ x, scale }} />
    </>
  );
}