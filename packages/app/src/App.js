import { Provider } from 'react-redux';

import Router from './Router';

import { useStore } from '@monorepo/common/lib//store';

const App = () => {
  const store = useStore({});
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;