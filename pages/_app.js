import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

function App({ Component, pageProps }) {
  return (
    <div className="bg-gray-200 text-black min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default App;


