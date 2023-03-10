import { Link } from "react-router-dom";

export const CardPage = (props) => (
      <div className="w-full md:w-4/12 mb-6 md:mb-0 md:p-3">
        <Card>
            {console.log(props)}
          <img
            className="max-w-full h-auto md:h-48"
            src={props.value.thumbnail}
            alt="image"
          />
          <CardBody>
            <CardTitle className="text-lg">{props.value.title}</CardTitle>
            <CardText>
            {props.value.description}
            </CardText>
            <Link to={`products/${props.value.id}`} className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer">
              View Details
              <ArrowIcon />
            </Link>
          </CardBody>
        </Card>
      </div>
  );
  
  /* Logic */
  
  const style = {
    card: `relative flex flex-col border-2 border-gray-200 rounded-lg`,
    cardBody: `block flex-grow flex-shrink p-5`,
    cardTitle: `font-medium text-gray-700 mb-3`,
    cardText: `text-gray-500`,
  };
  
  const inlineStyle = {
    boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
  };
  
  function Card({ children }) {
    return (
      <div className={style.card} style={inlineStyle}>
        {children}
      </div>
    );
  }
  
  function CardBody({ children }) {
    return <div className={style.cardBody}>{children}</div>;
  }
  
  function CardTitle({ children }) {
    return <div className={style.cardTitle}>{children}</div>;
  }
  
  function CardText({ children }) {
    return <div className={style.cardText}>{children}</div>;
  }
  
  const ArrowIcon = () => (
    <svg
      className="w-4 h-4 ml-2"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );