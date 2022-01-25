import './App.css';
import Title from './components/Title';
import Planet from './components/Planets';
import State from './components/State';

function App() {
  const planets = [
    {
      name: 'Mercury',
      imgUrl: 'https://cdn.mos.cms.futurecdn.net/KqzWwkCMPeZHFra2hkiJWj.jpg',
      diameter: 4878,
      hasRings: false,
      moons: [],
    },
    {
      name: 'Venus',
      imgUrl:
        'https://cdn.mos.cms.futurecdn.net/dzxtQ2dXH9SVKztJTbAXSA-480-80.jpg',
      diameter: 12104,
      hasRings: false,
      moons: [],
    },
    {
      name: 'Earth',
      imgUrl:
        'https://thumbs.dreamstime.com/b/planet-earth-europe-view-isolated-white-background-d-render-planet-earth-europe-view-isolated-166881212.jpg',
      diameter: 12760,
      hasRings: false,
      moons: ['Moon'],
    },
    {
      name: 'Mars',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/250px-OSIRIS_Mars_true_color.jpg',
      diameter: 6787,
      hasRings: true,
      moons: ['Phobos', 'Deimos'],
    },
    {
      name: 'Jupiter',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg',
      diameter: 139822,
      hasRings: true,
      moons: ['Io', 'Europa', 'Ganymede', 'and more...'],
    },
    {
      name: 'Saturn',
      imgUrl:
        'http://astronomy.com/~/media/8869F96544004BA298FE10708769601D.jpg',
      diameter: 120500,
      hasRings: true,
      moons: ['Mimas', 'Enceladus', 'Thethys', 'and more...'],
    },
    {
      name: 'Uranus',
      imgUrl:
        'https://cdn.mos.cms.futurecdn.net/NVAnBwuGufg8cf2RXkZigd-480-80.jpg',
      diameter: 51120,
      hasRings: true,
      moons: ['Ariel', 'Umbriel', 'Titania', 'Oberon', 'and more'],
    },
    {
      name: 'Neptune',
      imgUrl:
        'https://i.natgeofe.com/n/1b1a3bb9-19e4-4f27-938e-5b989955a82c/00000169-c04b-d507-af6b-c44f589a0000.jpg?w=636&h=358',
      diameter: 49530,
      hasRings: true,
      moons: ['Triton', 'Nereid', 'Naiad', 'Thalassa', 'and more'],
    },
    {
      name: 'Neptune',
      imgUrl:
        'https://i.natgeofe.com/n/1b1a3bb9-19e4-4f27-938e-5b989955a82c/00000169-c04b-d507-af6b-c44f589a0000.jpg?w=636&h=358',
      diameter: 49530,
      hasRings: true,
      moons: ['Triton', 'Nereid', 'Naiad', 'Thalassa', 'and more'],
    },
  ];

  const parentComponentVariable =
    'This is a variable declared in the parent component';

  return (
    <div className="App">
      {/* <Title
        content={'This is being passed down as a prop'}
        anotherProp={parentComponentVariable}
      />
      <Planet /> */}
      <State />
    </div>
  );
}

export default App;
