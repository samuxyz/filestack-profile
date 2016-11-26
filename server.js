import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 8080;

//Log with Morgan
app.use(morgan('dev'));

//accept encoded data as well as json format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Static files
app.use(express.static(__dirname + '/dist'));


const profileList = [
	{
		key: 0,
		img: 'https://process.filestackapi.com/crop_faces=mode:fill/rounded_corners=radius:10000/SEbrGeiTTF2X7N2A8sAD',
    name: 'Gimli',
    description: 'Pop culture ninja. General social media buff. Coffee fanatic. Hardcore music lover.'
	},
	{
		key: 1,
    img: 'https://process.filestackapi.com/crop_faces=mode:fill/rounded_corners=radius:10000/VJJBXCkDSXCVL1HMJsDN',
		name: 'Legolas',
    description: 'Certified troublemaker. Bacon lover. Avid web maven. Reader. Subtly charming tv expert. Freelance twitter evangelist.'
	},
	{
    key: 2,
    img: 'https://process.filestackapi.com/crop_faces=mode:fill/rounded_corners=radius:10000/FdNUZiSmTLOma9s3t7H0',
		name: 'Arwen',
    description: 'Communicator. Proud problem solver. Internet lover. Award-winning food scholar. Bacon practitioner.'
	},
  {
    key: 3,
    img: 'https://process.filestackapi.com/crop_faces=mode:fill/rounded_corners=radius:10000/JyjUZnHySfW6017jF1V7',
		name: 'Saruman',
    description: 'Internet fanatic. General pop culture guru. Hipster-friendly beer junkie. Friend of animals everywhere.'
	},
	{
		key: 4,
    img: 'https://process.filestackapi.com/crop_faces=mode:fill/rounded_corners=radius:10000/fX62SLijSPSBZ2cNdACg',
		name: 'Frodo',
    description: 'Tv practitioner. Introvert. Coffee scholar. Hardcore entrepreneur. Incurable gamer. Extreme thinker. Friendly creator.'
	},
  {
		key: 5,
    img: 'https://process.filestackapi.com/crop_faces=mode:fill/rounded_corners=radius:10000/06CjjJuKTn25upr2xjUw',
		name: 'Aragorn',
    description: 'Extreme analyst. Communicator. Incurable food ninja. Evil social media expert.'
	}
];

app.route('/profiles')
	.get((req, res) => res.json(profileList))
	.post((req, res) => {
    const profile = req.body;
		profileList.push(Object.assign(
        { key: profileList.length },
  			profile
  		)
    );
		res.json({
			success: 1,
			message:'Image Successfully added!'
		});
	});

app.listen(port);

console.log(`listening on port ${port}`);
