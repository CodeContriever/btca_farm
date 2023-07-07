import { useDrag } from 'react-dnd';
import { Box } from '@chakra-ui/react';

const DraggableBox = ({ id, text }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'box', id },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Box
      ref={drag}
      opacity={isDragging ? 0.5 : 1}
      cursor="move"
      p={4}
      bg="gray.200"
      rounded="md"
    >
      {text}
    </Box>
  );
};

export default DraggableBox;
