const CustomGreeting = (props) => {
  const userName = props.name;
  const favoriteColor = props.favoriteColor;

  return (
    <>
      <p
        style={{
          color: favoriteColor,
        }}
        className='underline'
      >
        Hi {userName}, your favorite: {favoriteColor && favoriteColor}
      </p>
    </>
  );
};

export default CustomGreeting;
