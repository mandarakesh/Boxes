const Box = (props) => {
  //  Write your code here.
  const { className, heading, boxText } = props;
  return (
    <div className={className}>
      <h1 className={heading}>{boxText}</h1>
    </div>
  );
};

const element = (
  <div class="bg-container">
    <h1 class="main">Boxes</h1>
    <div className="card">
      <Box className="first" heading="box1" boxText="Small" />
      <Box className="second" heading="box1" boxText="Small" />
      <Box className="third" heading="box1" boxText="Small" />
    </div>
  </div>
  //  Write your code here.
);

ReactDOM.render(element, document.getElementById("root"));
