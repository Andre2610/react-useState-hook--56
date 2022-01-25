import AnotherComponent from './AnotherComponent';

export default function Planet(props) {
  console.log('What are my props', props);
  return (
    <div>
      <h4>{props.name}</h4>
    </div>
  );
}
