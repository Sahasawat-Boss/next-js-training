import Card from "./components/Card";
import Box from "./components/Box";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Card title='Card 1' description='Comp 1 description' />
      <Card title='Card 2' description='Comp 2 description' />
      <Card title='Card 3' description='Comp 3 description' />
      <Box content='Content in Box'/>
    </div>
  );
}
