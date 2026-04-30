export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
      <h1 className="text-xl font-bold">{"</> Victor"}</h1>
      <div className="flex gap-6 text-gray-300">
        <a href="#">Home</a>
        <a href="#">Portfolio</a>
        <a href="#">Resume</a>
      </div>
    </nav>
  );
}
