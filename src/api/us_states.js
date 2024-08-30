import states from './us_states.json';

export default function handler(req, res) {
  res.status(200).json(states);
}
