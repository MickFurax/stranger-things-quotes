interface Props {
  life: number;
}

const Life = (props: Props) => {
  const { life } = props;

  return (
    <div className="text-white">
      <p>Life: {life}</p>
    </div>
  );
};

export default Life;
