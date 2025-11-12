// Example reusable component
// You can delete this file when you start building your own components

interface ExampleComponentProps {
  title?: string;
}

export default function ExampleComponent({ title = "Example" }: ExampleComponentProps) {
  return (
    <div className="p-4 border rounded">
      <h2>{title}</h2>
      <p>This is an example component in the components folder</p>
    </div>
  );
}


