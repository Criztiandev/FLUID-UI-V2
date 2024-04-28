import Button from "./components/forms/Button";

function App() {
  return (
    <div className="p-4">
      <Button>Button</Button>
      <Button variant={"outlined"}>Button</Button>
      <Button variant={"ghost"}>Button</Button>
      <Button variant={"link"}>Button</Button>
      <Button>Button</Button>
      <Button size={"icon"}>T</Button>
      <Button disabled>T</Button>
    </div>
  );
}

export default App;
