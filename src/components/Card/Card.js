const Card = (props) => {
  return (
    <div className={`testimonials ${props.testimonialNum}`}>
      <div className="profile">
        <div className={`dps ${props.dpNum}`}></div>
        <div
          className={`name ${props.isBlackNameColor ? "blackNameColor" : ""}`}
        >
          <h1>{props.name}</h1>
          <p>Verified Graduate</p>
        </div>
      </div>
      {props.isQuotationImg && (
        <img
          src="../../../../testimonials-grid-section-main/images/bg-pattern-quotation.svg"
          alt=""
        />
      )}
      <h1
        className={`heading ${
          props.isBlackHeadingColor ? "blackHeadingColor" : ""
        }`}
      >
        {props.quoteHeading}
      </h1>
      <p
        className={`comment ${
          props.isBlackCommentColor ? "blackCommentColor" : ""
        }`}
      >
        {props.quote}
      </p>
    </div>
  );
};
export default Card;
