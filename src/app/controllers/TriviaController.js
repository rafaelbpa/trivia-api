import TriviaQuestion from '../schemas/TriviaQuestion';

class TriviaController {
  async index(req, res) {
    const data = await TriviaQuestion.find();

    res.json(data);
  }

  async store(req, res) {
    const data = req.body;

    const trivia = await TriviaQuestion.create(data);

    res.json(trivia);
  }
}

export default new TriviaController();
