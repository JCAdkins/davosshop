const FlexWrapContainer = ({ children, ...props }) => {
  return (
    <div className="featured-pc-container" {...props}>
      <div className="featured-flex-container flex flex-wrap justify-evenly mb-4">
        {children}
      </div>
    </div>
  );
};

export default FlexWrapContainer;
