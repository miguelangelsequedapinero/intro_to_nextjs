import data from '../../../database.json';

export default function handler(req, res) {
  const { usersId } = req.query;
  try {
    usersId.length == 1 ?
      res.status(200).json(data[usersId.length - 1]) :
      usersId.length == 2 ?
        res.status(200).json(data[usersId[0] - 1][usersId[1]]) :
        usersId.length == 3 ?
          res.status(200).json(data[usersId[0] - 1][usersId[1]][usersId[2] - 1]) :
          res.send('Endpoint does not exits yet :-)');
  } catch (err) {
    res.status(500).send('There is an issue with the data')
  }
}