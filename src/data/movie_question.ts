interface IAskQuestion {
  id: number;
  question: string;
  answer: string;
}

class AskQuestion implements IAskQuestion {
  id: number;
  question: string;
  answer: string;

  constructor(id: number, question: string, answer: string) {
    this.id = id;
    this.question = question;
    this.answer = answer;
  }
}

const ask_question: AskQuestion[] = [
  new AskQuestion(
    1,
    "What is StreamVibe?",
    "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
  ),
  new AskQuestion(
    2,
    "How much does StreamVibe cost?",
    "StreamVibe offers on-demand movies and TV shows, so you can watch your favourite titles whenever you like."
  ),
  new AskQuestion(
    3,
    "What content is available on StreamVibe?",
    "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
  ),
  new AskQuestion(
    4,
    "How can I watch StreamVibe?",
    "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
  ),
  new AskQuestion(
    5,
    "How do I sign up for StreamVibe?",
    "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
  ),
  new AskQuestion(
    6,
    "What is the StreamVibe free trial?",
    "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
  ),
  new AskQuestion(
    7,
    "How do I contact StreamVibe customer support?",
    "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
  ),
  new AskQuestion(
    8,
    "What are the StreamVibe payment methods?",
    "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
  ),
];

export default ask_question;
