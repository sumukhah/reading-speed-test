import React, { useContext } from "react";
import Helmet from "react-helmet";
import "./StatisticsContainer.scss";
import ReadMeasurementTable from "../../components/ReadMeasurementTable/ReadMeasurementTable";
import ResultDisplay from "../../components/ResultDisplay/ResultDisplay";
import wpmContext from "../../context/wpmContext";
import ComprehensionText from "../../components/ComprehensionText/ComprehensionText";
import { Link, useHistory } from "react-router-dom";
import { Button, Card } from "antd";

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
        <title>Speed reading statistics</title>
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
      <ComprehensionText />
      <h2>
        The following table shows how reading speed and Comprehensions are
        related
      </h2>
      <ReadMeasurementTable />
      <div className="benefits-container">
        <h2>Benefits of speed reading</h2>
        <Card>
          <b>Read more in less time: </b>
          <span>
            By learning to speed read, you can double or triple the amount that
            you read in the same amount of time. You may find that you only need
            to skim material to understand what is being discussed. So that you
            can spend less time to gain knowledge.
          </span>
        </Card>
        <Card>
          <b>Better Concentration: </b>
          <span>
            Speed reading improves your ability to focus your attention on
            completing a text before moving to achieve other tasks. Your mind
            stops wandering while reading faster, And the attention and focus
            will be on the book you are reading.
          </span>
        </Card>
        <Card>
          <b>Improves Comprehension: </b>
          <span>
            Speed reading helps you quit sub-vocalization and focus on the text
            you are reading, And your ability to remember the contents will
            gradually increase.
          </span>
        </Card>
        <h4>
          Check how to improve your reading speed in the&nbsp;
          <Link to="/guide">Guide</Link>
        </h4>
      </div>
    </div>
  );
}
