import plates from './plates.json';

export default function handler(req, res) {
  res.status(200).json(plates);
}
