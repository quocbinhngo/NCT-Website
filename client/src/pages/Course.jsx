import React from "react";

const Course = () => {
  return (
    <div className="text-[#e7e7e7]">
      <h1 className="mb-14 text-primary text-center text-4xl font-bold ">
        Introduction to Programming
        <h2 className="text-secondary mt-2">(COSC32421)</h2>
      </h1>
      <div>
        <div className="section">
          <h2 className="title text-primary">Disclaimer</h2>
          <p className="paragraph">
            At RMIT, courses get changed and evolve all the time. This review is
            written with experience from its
            <span className="text-secondary font-medium mx-1">
              SEMC 2020 version.
            </span>
            It will not go into details on explaining course concepts since
            those are accessible via Canvas.
          </p>
        </div>
        <div className="section">
          <h2 className="title text-primary">
            Difficulty Rating:
            <span className="text-secondary font-medium mx-1 text-lg">
              6 out of 10
            </span>
          </h2>
        </div>
        <div className="section">
          <h2 className="title text-primary">Overview</h2>
          <p className="paragraph">
            Despite being the first programming course on the program map, and
            likely the first course freshmen will have in the first year,
            Engineering Computing should not be underestimated, especially if
            you have little to no programming experience beforehand. The
            programming language taught in this course is C, which is not known
            to be the most beginner-friendly of languages. Almost all aspects of
            this programming language are covered within the course content,
            ranging from basic variable types to pointers.
          </p>
        </div>
        <div className="section">
          <h2 className="title text-primary">Assessment</h2>
          <p className="paragraph">
            The main form of testing this course uses is via programming exams,
            conducted live on RMIT Campus. These assessments should not be
            underestimated as they can also include concepts and techniques not
            formally covered in tutorial sessions. On top of this, if a student
            does not work well under the pressure of time constraints, which
            many are likely to not be familiar with, it can be extra difficult
            to perform to the best of their ability.
          </p>
        </div>
        <div className="section">
          <h2 className="title text-primary">Time Recommended</h2>
          <ul className="flex flex-col gap-1">
            <li>
              <span className="text-secondary font-medium ">Beginner:</span>{" "}
              9-11 hours per week
            </li>
            <li>
              <span className="text-secondary font-medium ">Expert:</span> 5-7
              hours per week
            </li>
          </ul>
        </div>
        <div className="section">
          <h2 className="title text-primary">Recommendations</h2>
          <p className="paragraph">
            Outside of time spent working on tutorial exercises, students are
            encouraged to spend extra time doing additional problems on sites
            like{" "}
            <a href="/" className="paragraph-link">
              LeetCode - The World's Leading Online Programming Learning
              Platform
            </a>{" "}
            or{" "}
            <a href="/" className="paragraph-link">
              Codewars - Achieve mastery through coding practice and developer
              mentorship
            </a>{" "}
            to get used to working under a time constraint.
          </p>
          <p className="paragraph">
            All tutorial exercises are encouraged to be done before joining
            tutorials. This is to help them get used to working under (albeit
            more lenient) time constraints. Students will definitely encounter
            difficult problems they won’t be able to solve yet, but attempts to
            understand the problem can make it easier for the student to grasp
            when they get solved in tutorials.
          </p>
          <p className="paragraph">
            It is also encouraged students spend some time solving the problems
            by themselves before asking for help, either from googling or their
            peers. Although, googling should not be considered a taboo to help
            you solve your problems, as long as you thoroughly understand the
            results you find and not just blindly copy and paste.
          </p>
          <p className="paragraph">
            For students 100% new to programming, you are also recommended to
            spend some time going through all concepts being taught in the
            lecture before attending the lecture. Not understanding a key/
            foundation concept, which is almost everything taught in the course,
            can make it demoralizing to continue studying.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Course;
