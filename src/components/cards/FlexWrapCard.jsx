import { Card } from "flowbite-react";
import "../../customcss/custom.css";

const FlexWrapCard = ({ image, cardClassName, children, ...props }) => {
  return (
    <div {...props}>
      <Card
        className={`${cardClassName} flex-wrap-card flex`}
        imgAlt="Image"
        imgSrc={image}
      >
        {children}
      </Card>
    </div>
  );
};

export default FlexWrapCard;
