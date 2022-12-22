import reactLogo from './assets/react.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hook';
import { decremented, incremented, increaseByAmount } from './features/counter/counterSlice';
import { store } from './app/store';
import { useGetPostsQuery, useGetCommentsQuery} from './features/dog/dogSlice';
function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const { data = [] , isFetching } = useGetPostsQuery(5);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p> { count }</p>
        <button onClick={() => dispatch(incremented())}>
          increment
        </button>
        <button onClick={() => dispatch(decremented())}>
          decrement
        </button>
        <button onClick={() => dispatch(increaseByAmount(4))}>
          increment by 4
        </button>

        {/* Api */}
        <div>
          <h3>Post</h3>
          <p>status: {isFetching? 'Loading': 'Done'}</p>
        </div>

        <div>
          {data?.map(post => (
            <div key={post.id}>
              <h4>{post.title}</h4>
            </div>
          ))}
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App;
