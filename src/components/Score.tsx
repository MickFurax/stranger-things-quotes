interface Props {
  score: number;
}

const Score = (props: Props) => {
  const { score } = props;

  return (
    <div className="text-white">
      <p>Score: {score}</p>
    </div>
  );
};

export default Score;
