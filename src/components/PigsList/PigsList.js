import { Box } from 'components/Box/Box';
import { PigInfo } from 'components/PigInfo/PigInfo';
import { useState } from 'react';

export const PigsList = ({ dataPigs, onSelect }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  const selectImg = img => setSelectedImg(img);

  return (
    <Box as="ul" display="flex" p={5} gridGap={4}>
      {dataPigs.map((pig, i) => (
        <li key={i}>
          <PigInfo
            pig={pig}
            onSelect={onSelect}
            onToggle={selectImg}
            currentImg={selectedImg === pig.img}
          />
        </li>
      ))}
    </Box>
  );
};
