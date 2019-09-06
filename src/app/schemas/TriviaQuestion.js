import mongoose from 'mongoose';

const TriviaQuestionSchema = new mongoose.Schema({
  question_number: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  user_answer: {
    type: String,
    required: true,
  },
  correct_answer: {
    type: String,
    required: true,
  },
  is_correct: {
    type: Boolean,
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model('TriviaQuestion', TriviaQuestionSchema);
