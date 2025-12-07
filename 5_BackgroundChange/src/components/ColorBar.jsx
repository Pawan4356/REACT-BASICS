import Colors from "./Colors";

function ColorBar() {
  return (
    <div className="h-auto w-auto rounded-[150px] bg-gray-500 flex flex-wrap justify-around">
      <Colors color='black' />
      <Colors color='blue' />
      <Colors color='red' />
      <Colors color='green' />
      <Colors color='yellow' />
      <Colors color='cyan' />
      <Colors color='olive' />
      <Colors color='magenta' />
      <Colors color='orange' />
    </div>
  );
}

export default ColorBar;