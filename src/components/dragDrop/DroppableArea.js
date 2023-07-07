import { useDrop } from 'react-dnd';
import { Box } from '@chakra-ui/react';

const DroppableArea = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'box',
    drop: item => onDrop(item.id),
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <Box
      ref={drop}
      p={4}
      bg={isOver ? 'gray.300' : 'gray.100'}
      rounded="md"
    >
      Drop here
    </Box>
  );
};

export default DroppableArea;
