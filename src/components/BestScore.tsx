interface Props {
  bestScore: number;
}

const BestScore = (props: Props) => {
  const { bestScore } = props;

  return (
    <div className="text-white">
      <p>Best Score: {bestScore}</p>
    </div>
  );
};

export default BestScore;
