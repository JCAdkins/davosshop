import { Card } from "flowbite-react";
import "../../customcss/custom.css";

const FlexWrapCard = ({ image, className, children, ...props }) => {
  return (
    <div className="w-[30ch] flex flex-col p-4" {...props}>
      <Card
        className={`${className} flex-wrap-card flex`}
        imgAlt="Image"
        imgSrc={image}
      >
        {children}
      </Card>
    </div>
  );
};

export default FlexWrapCard;
