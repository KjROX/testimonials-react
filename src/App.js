import "./App.css";
import Card from "./components/Card/Card";

import { studentInfos } from "./assets/user-data/data";

function App() {
  return (
    <section className="full">
      {studentInfos.map((studentInfo) => {
        return (
          <Card
            name={studentInfo.name}
            quoteHeading={studentInfo.quoteHeading}
            quote={studentInfo.quote}
            testimonialNum={studentInfo.testimonialNum}
            dpNum={studentInfo.dpNum}
            isQuotationImg={studentInfo.isQuotationImg}
            isBlackNameColor={studentInfo.isBlackNameColor}
            isBlackHeadingColor={studentInfo.isBlackHeadingColor}
            isBlackCommentColor={studentInfo.isBlackCommentColor}
            key={studentInfo.key}
          />
        );
      })}
    </section>
  );
}

export default App;
