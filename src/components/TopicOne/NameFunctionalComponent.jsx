export function NameFunctionalComponent(props) {
  const { name, message } = props;
  return (
    <div>
      <h2>Name Functional Component</h2>
      <h3>Name: {name}</h3>
      <h4>Message :{message}</h4>
    </div>
  );
}
