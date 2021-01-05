import React from "react";
import { Divider } from "antd";
import Helmet from "react-helmet";
import ReactPlayer from "react-player/lazy";
import { Link } from "react-router-dom";
import "./GuideContainer.scss";

export default function GuideContainer() {
  return (
    <div className="guide-container">
      <Helmet>
        <title>Speed reading Guide</title>
        <meta
          name="description"
          content="Improve your reading speed with various techniques taught by experts all around the world. When you increase your reading speed, automatically your ability to memorize and comprehension will increase gradually. Use our free online tool to measure your progress and become an expert of speed reading. "
        />
      </Helmet>
      <h1>A guide to improve your reading speed</h1>
      <Divider />
      <h2>Techniques to improve your speed</h2>
      <p>
        There are many Techniques to improve your reading speed. Refer these
        videos from experts and follow step by step.
      </p>
      <div className="youtube-video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=xiTK523Ot5U"
          width="100%"
        />
      </div>
      <div>
        <h2>Techniques:</h2>

        <h4>Stop sub-vocalization:</h4>
        <p>
          Listen to classical music or Chew gums or start humming in your voice
          while you are reading. And This is the primary reason for reducing our
          reading speed. We have trained to subvocalize from our childhood. So,
          Fixing this is not the easiest thing, and it requires a lot of time
          and effort.
        </p>
        <h4>Using pointers:</h4>
        <p>
          Children use these Techniques naturally, but we forcefully make them
          stop using pointers while reading. There are many benefits to use
          pointers like markers, pens, or a finger while reading.One of the
          biggest points for speed reading and learning how to speed read is to
          use your finger whenever you read and force your eye to follow your
          finger. This will keep your eye from bouncing around the page because
          this does slow you down.
        </p>
        <h4>Do not read every word:</h4>
        <p>
          Make 2 or 3 words as a group and read them. If you fix your eye on the
          middle or middle-word you can grasp their neighboring words. With
          progress, you can&nbsp;
          <a href="https://learningcenter.unc.edu/tips-and-tools/skimming/">
            skimming
          </a>
          &nbsp;through any texts. But this is an advanced technique and should
          not be used for all types of textual knowledge.
        </p>
      </div>
      <Divider />

      <h3>Advise from Michel Wozniak(Speed reader)</h3>
      <div className="youtube-video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=HKYmwD_weE8"
          width="100%"
        />
      </div>
      <h2>It's a long process</h2>
      <p>
        From our childhood, everyone taught us to read every word aloud. And our
        brain doesn't know an alternative way. For this reason, everyone thinks
        speed reading is difficult to achieve. But we can change any habits
        through repetition, but it may take some time to rewire our brain. It
        will take a lot of effort, time, and energy to achieve this. Mentally be
        prepare for the journey and take every tiny step to achieve your goal.
        There are many books{" "}
        <a href="https://www.google.com/search?rlz=1C5CHFA_enIN926IN926&ei=JV70X6qtL5DRrQH_kb24DA&q=the+speed+reading+book+tony+buzan&oq=The+speed+reading+book+tony&gs_lcp=CgZwc3ktYWIQAxgAMgcIABDJAxBDMgIIADIGCAAQFhAeOgcIABBHELADOgQIABBDUKQmWPkrYII0aAFwAngAgAGVAYgBqgSSAQMzLjKYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=psy-ab">
          The speed reading book by tony buzan
        </a>{" "}
        and{" "}
        <a href="https://www.amazon.com/First-90-Days-Strategies-Expanded/dp/1422188612">
          The First 90 Days, by Michael Watkins{" "}
        </a>
        may help you.
      </p>
      <b>
        Track your progress with <Link to="/">Reading speed test</Link>
      </b>
    </div>
  );
}
