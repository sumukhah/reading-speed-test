import React, { useContext } from "react";
import Helmet from "react-helmet";
import "./StatisticsContainer.scss";
import ReadMeasurementTable from "../../components/ReadMeasurementTable/ReadMeasurementTable";
import ResultDisplay from "../../components/ResultDisplay/ResultDisplay";
import wpmContext from "../../context/wpmContext";
import ComprehensionText from "../../components/ComprehensionText/ComprehensionText";
import { useHistory } from "react-router-dom";

const switchImage = (wpm: number) => {
  switch (true) {
    case wpm <= 120:
      return { character: "sloth", betterThan: 0 };
    case wpm > 120 && wpm < 250:
      return { character: "fox", betterThan: 20 };
    case wpm > 250 && wpm < 500:
      return { character: "lion", betterThan: 50 };
    case wpm > 500:
      return { character: "cheetah", betterThan: 80 };
    default:
      return { character: "fox", betterThan: 20 };
  }
};

export default function StatisticsContainer() {
  const { wpm } = useContext(wpmContext);
  const { character, betterThan } = switchImage(wpm);
  const history = useHistory();

  const onPressChallengeAgain = () => {
    history.replace("/");
  };
  return (
    <div className="statistics-container">
      <Helmet>
        <title>Speed Reading Test and Reading Comprehension Test</title>
        <meta
          name="description"
          content="Free speed reading online test.Check your reading speed and test your
          Comprehension.Check your average reading speed. learn to speed read
          .The average wpm is 150 to 200 wpm.reading wpm test.words per minute
          reading test.reading wpm test.Check your average reading speed.train
          yourself with speed reading exercises"
        />
      </Helmet>
      <div>
        {wpm > 10 && (
          <ResultDisplay
            character={character}
            wpm={wpm}
            betterThan={betterThan}
            readAgain={onPressChallengeAgain}
          />
        )}
      </div>
      <ReadMeasurementTable />
      <ComprehensionText />
    </div>
  );
}
