import  { useState } from "react";

const Quiz = () => {

  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [quizData, setQuizData] = useState([]);

  const handleQuestionChange = (event, questionIndex) => {
    const { name, value } = event.target;

    setQuizData((prevData) => {
      const newData = [...prevData];
      newData[questionIndex][name] = value;
      return newData;
    });
  };

  const handleCorrectOptionChange = (event, questionIndex) => {
    const { value } = event.target;

    setQuizData((prevData) => {
      const newData = [...prevData];
      newData[questionIndex].correctOption = value;
      return newData;
    });
  };

  const renderQuestions = () => {


  return [...Array(numberOfQuestions)].map((_, index) => (
    <div key={index} className="flex items-center justify-center mx-auto">
      <div className="flex mx-3">
        <div className="w-full px-3 mb-5 mt-2">
          <label
            htmlFor={`question${index + 1}`}
            className="text-xl font-semibold px-1"
          >
            Question {index + 1}
          </label>
          <div className="flex mt-2">
            <textarea
              type="text"
              id={`question${index + 1}`}
              name={`question${index + 1}`}
              className="w-96 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 bg-white outline-none focus:border-indigo-500"
              placeholder={`Enter question ${index + 1}`}
              onChange={(e) => handleQuestionChange(e, index)}
            />
          </div>
        </div>
      </div>

      <div className="flex mx-3">
        <div className="w-full px-3 mb-5 mt-2">
          <label
            htmlFor={`option${index + 1}_1`}
            className="text-xl font-semibold px-1"
          >
            Option 1
          </label>
          <div className="flex mt-2">
            <input
              type="text"
              id={`option${index + 1}_1`}
              name={`option${index + 1}_1`}
              className="w-32 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 bg-white outline-none focus:border-indigo-500"
              placeholder={`Option 1`}
              onChange={(e) => handleQuestionChange(e, index)}
            />
          </div>
        </div>
      </div>

      <div className="flex mx-3">
        <div className="w-full px-3 mb-5 mt-2">
          <label
            htmlFor={`option${index + 1}_2`}
            className="text-xl font-semibold px-1"
          >
            Option 2
          </label>
          <div className="flex mt-2">
            <input
              type="text"
              id={`option${index + 1}_2`}
              name={`option${index + 1}_2`}
              className="w-32 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 bg-white outline-none focus:border-indigo-500"
              placeholder={`Option 2`}
              onChange={(e) => handleQuestionChange(e, index)}
            />
          </div>
        </div>
      </div>

      <div className="flex mx-3">
        <div className="w-full px-3 mb-5 mt-2">
          <label
            htmlFor={`option${index + 1}_3`}
            className="text-xl font-semibold px-1"
          >
            Option 3
          </label>
          <div className="flex mt-2">
            <input
              type="text"
              id={`option${index + 1}_3`}
              name={`option${index + 1}_3`}
              className="w-32 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 bg-white outline-none focus:border-indigo-500"
              placeholder={`Option 3`}
              onChange={(e) => handleQuestionChange(e, index)}
            />
          </div>
        </div>
      </div>

      <div className="flex mx-3">
        <div className="w-full px-3 mb-5 mt-2">
          <label
            htmlFor={`option${index + 1}_4`}
            className="text-xl font-semibold px-1"
          >
            Option 4
          </label>
          <div className="flex mt-2">
            <input
              type="text"
              id={`option${index + 1}_4`}
              name={`option${index + 1}_4`}
              className="w-32 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 bg-white outline-none focus:border-indigo-500"
              placeholder={`Option 4`}
              onChange={(e) => handleQuestionChange(e, index)}
            />
          </div>
        </div>
      </div>

      <div className="flex mx-3">
        <div className="w-full px-3 mb-5 mt-2">
          <label
            htmlFor={`correctOption${index + 1}`}
            className="text-xl font-semibold px-1"
          >
            Correct Option
          </label>
          <div className="flex mt-2">
            <input
              type="text"
              id={`correctOption${index + 1}`}
              name={`correctOption${index + 1}`}
              className="w-32 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 bg-white outline-none focus:border-indigo-500"
              placeholder={`Correct Option`}
              onChange={(e) => handleCorrectOptionChange(e, index)}
            />
          </div>
        </div>
      </div>
    </div>
  ));
};




  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl">Hello John Doe </h1>
      </div>

      <div className="mt-5 text-center">
        <h1 className="text-5xl">Enter the questions for the quiz </h1>
      </div>
      <div className="flex items-center justify-center mx-auto">
        <div className="flex mx-3">
          <div className="w-full px-3 mb-5 mt-5" >
            <label htmlFor="quizTitle" className="text-xl font-semibold px-1">
              Quiz Name
            </label>
            <div className="flex mt-2">
              <input
                type="text"
                id="quizTitle"
                name="quizName"
                className="w-96 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 bg-white outline-none focus:border-indigo-500"
                placeholder="Guitar Tone"
                // onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mx-auto">
        <div className="flex mx-3">
          <div className="w-full px-3 mb-5 mt-2" >
            <label htmlFor="quizTitle" className="text-xl font-semibold px-1">
              Quiz Description
            </label>
            <div className="flex mt-2">
              <textarea
                type="text"
                id="quizTitle"
                name="quizName"
                className="w-96 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="Guitar Tone"
                // onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mx-auto">
        <div className="flex mx-3">
          <div className="w-full px-3 mb-5 mt-2" >
            <label htmlFor="quizTitle" className="text-xl font-semibold px-1">
              No of Questions
            </label>
            <div className="flex mt-2">
              <input
                type="number"
                id="quizTitle"
                name="quizName"
                className="w-96 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 bg-white outline-none focus:border-indigo-500"
                placeholder="5"
                // onChange={handleChange}
                value={numberOfQuestions}
                onChange={(e) => setNumberOfQuestions(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
      </div>

      
      {renderQuestions()}
      { numberOfQuestions > 0 && <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <button
                  className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                  type="submit"
                  // onClick={handleRegister}
                >
                  Upload Quiz
                </button>
              </div>
            </div>

      }
      

    </>
  );
};

export default Quiz;
