import { RouterProvider } from 'react-router-dom';
import router from './providers/router';
import './styles/App.scss';

const App = () => <RouterProvider router={router} />;

export default App;
