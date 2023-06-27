const ColorFullMessage = (props) => {
  const { color, fontSize, children } = props;
  const contentStyle = {
    color: color,
    fontSize: fontSize
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorFullMessage;
