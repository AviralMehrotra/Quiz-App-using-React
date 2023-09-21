# Quiz App using React 🚀

A web application built with React for creating and playing quizzes. Users can answer a series of questions and receive points based on their answers. The app features a timer ⏲️, progress tracking 📊, and a user-friendly interface 🌟. In this updated version, we have integrated the JSONbin API to fetch quiz questions.

## Demo 🎮

You can experience the Quiz App live by visiting the [Demo](https://dsa-quiz-app.vercel.app/).

## Features 📋

- **JSONbin API Integration**: Fetches quiz questions from the JSONbin API.
- **Progress Tracking**: Tracks and displays the user's progress and points.
- **Timer**: Implements a timer for each question to keep the game challenging.
- **User-Friendly Interface**: Provides a user-friendly interface with interactive components.
- **Quiz Restart**: Allows users to restart the quiz after completion.

## Getting Started 🛠️

### Prerequisites 📝

Before you begin, make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (usually included with Node.js)

### Installation 🚀

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/AviralMehrotra/Quiz-App-using-React.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Quiz-App-using-React
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

### JSONbin API Setup 🔑

To use your own quiz questions with the app, follow these steps to set up your JSONbin Bin:

1. Go to [JSONbin](https://jsonbin.io/).
2. Sign up for an account or log in if you already have one.
3. Create a new Bin and note down the Bin's ID.
4. Obtain your API key from the JSONbin dashboard.
5. In the project, locate the `secret/Keys.js` file.
6. Replace the placeholder values for `JSONBIN_ID` and `JSONBIN_API_KEY` with your Bin's ID and API key respectively.

Your `secret/Keys.js` file should look like this:

```javascript
export const JSONBIN_ID = 'your_bin_id_here';
export const JSONBIN_API_KEY = 'your_api_key_here';
```

### Adding Quiz Questions 🧩

To add your own quiz questions, follow the format below and replace the existing questions in your JSONbin Bin:

```json
{
  "questions": [
    {
      "question": "Here goes Question 1",
      "options": [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
      ],
      "correctOption": 3,
      "points": 10
    },
    {
      "question": "Here goes Question 2",
      "options": [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
      ],
      "correctOption": 2,
      "points": 10
    },
    {
      "question": "Here goes Question 3",
      "options": [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
      ],
      "correctOption": 1,
      "points": 10
    }
  ]
}
```

Ensure that your JSONbin Bin contains an array of questions under the key `"questions"`, with each question following the specified format.

## Usage 🎯

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to use the Quiz App with your custom quiz questions.

3. Answer the quiz questions, keep an eye on the timer ⏲️, and see your progress 📈.

4. After completing the quiz, you can choose to restart it or explore the code to understand how it works.

## Contributing 🤝

Contributions are welcome! If you have any suggestions for improvements or encounter any bugs, please feel free to open issues or submit pull requests.

## License 📄

This project is licensed under the MIT License. For more details, please refer to the [LICENSE](LICENSE) file.
