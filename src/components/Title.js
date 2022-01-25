export default function Title(props) {
  console.log('My props inside of title', props);
  return (
    <div>
      <h1>{props.content}</h1>
      <h2>{props.anotherProp}</h2>
    </div>
  );
}
