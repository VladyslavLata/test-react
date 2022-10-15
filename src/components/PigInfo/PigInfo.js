import { Box } from 'components/Box/Box';

export const PigInfo = ({
  pig: { img, label },
  onSelect,
  onToggle,
  currentImg,
}) => {
  return (
    <Box
      border="normal"
      onClick={() => {
        onSelect(label);
        onToggle(img);
      }}
    >
      <img src={img} alt={label} />
      {currentImg && <h2>{label}</h2>}
    </Box>
  );
};
