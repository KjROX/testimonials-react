const Card = (props) => {
  const {
    testimonialNum,
    dpNum,
    isBlackNameColor,
    name,
    isQuotationImg,
    isBlackHeadingColor,
    quoteHeading,
    isBlackCommentColor,
    quote,
  } = props;

  return (
    <div className={`testimonials ${testimonialNum}`}>
      <div className="profile">
        <div className={`dps ${dpNum}`}></div>
        <div className={`name ${isBlackNameColor ? "blackNameColor" : ""}`}>
          <h1>{name}</h1>
          <p>Verified Graduate</p>
        </div>
      </div>
      {isQuotationImg && (
        <img src="../../assets/images/bg-pattern-quotation.svg" alt="" />
      )}
      <h1
        className={`heading ${isBlackHeadingColor ? "blackHeadingColor" : ""}`}
      >
        {quoteHeading}
      </h1>
      <p
        className={`comment ${isBlackCommentColor ? "blackCommentColor" : ""}`}
      >
        {quote}
      </p>
    </div>
  );
};
export default Card;
