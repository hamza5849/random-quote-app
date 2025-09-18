import Quote from "./Components/Quote";// Import the Quote component

  

function App() {
  return (
    // Outer div: full screen height, flex center, gradient background
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">

      <Quote />
    </div>
  );
}

export default App;
// Export App as the root component