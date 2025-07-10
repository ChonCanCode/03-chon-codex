export default function ZeroFiveReactMovieApp() {
  return (
    <>
      <h1 className="font-bold">05-react-movies</h1>
      <div className="pageBody">
        <div className="sub-pageBody">
          <h2>useEffect</h2>
          <span>
            It is a React Hook used in functional components to perform side
            effects.Side effects are things like:
          </span>
          <ul>
            <li>Fetching data from an API</li>
            <li>Setting up subscriptions or timers</li>
            <li>Manually manipulating the DOM</li>
            <li>Logging, analytics</li>
            <li>Updating document title, etc.</li>
          </ul>
          <code>
            <span className="text-red-300">Original code:</span>
            <br />
            {`  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);
`}

            <span className="text-green-300">My codes:</span>
            <span>
              As this useEffect only required to render once, I wonder what was
              the purpose of having it named. So IIFE(Immediately Invoked
              Function Expression) was used. As logically if it doesn't require
              reusability why not have a simpler code? But having it named could
              be better for for telling a story and debugging.
            </span>
            <br />
            {`useEffect(() => {
  (async () => {
    try {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    } catch (err) {
      console.log(err);
      setError("Failed to load movies...");
    } finally {
      setLoading(false);
    }
  })();
}, []);`}
          </code>

          <h3>Takeaway</h3>
          <h4>{`useEffect(() => { ... }, [])`}</h4>
          <span></span>

          <h4>{`try/catch/finally`}</h4>
          <span>
            You want to attempt code that might throw an error, especially:
          </span>
          <ul>
            <li>Async operations (e.g., fetch, axios, await)</li>
            <li>Parsing data (e.g., JSON.parse)</li>
            <li>Working with external inputs (e.g., forms, APIs)</li>
            <li>File system operations (Node.js)</li>
            <li>Dangerous logic that might break under edge cases</li>
          </ul>
          <span>Breakdown:</span>
          <code>{`try {
  // Code that might fail
} catch (err) {
  // Handle the error (e.g., show error message)
} finally {
  // Always runs, success or error (e.g., hide loading spinner)
}`}</code>
          <ul>
            <span>Examples:</span>
            <li>
              1. Fetching data (React or plain JS)
              <code>{`try {
  const res = await fetch('/api/data');
  const data = await res.json();
  setData(data);
} catch (err) {
  setError('Something went wrong!');
} finally {
  setLoading(false); // Stop loading spinner
}`}</code>
            </li>
            <li>
              2. JSON parsing
              <code>{`try {
  const user = JSON.parse(localStorage.getItem('user'));
} catch (err) {
  console.error('Invalid JSON in localStorage');
}`}</code>
            </li>
            <li>
              3. Always cleaning up
              <code>{`try {
  openFile();
  readFile();
} catch (err) {
  console.error('Read error:', err);
} finally {
  closeFile(); // Always close the file
}`}</code>
            </li>
          </ul>
          <br />
          <hr />
        </div>
      </div>
    </>
  );
}
