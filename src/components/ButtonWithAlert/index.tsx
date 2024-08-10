import { Button } from '../Button';

export function ButtonWithAlert() {
  function handleClick() {
    window.alert('Hello, World!');
  }

  return <Button onClick={handleClick}>click here</Button>;
}
