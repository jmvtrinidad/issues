import * as React from 'react';
import { DatePicker as DatePickerLib1 } from 'lib1';
import clsx from 'clsx';

const DatePicker = React.lazy(() => import('./date-picker'));
const Remote1 = React.lazy(() => import('remote1/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <DatePicker />
      DatePicker from remote1
      <React.Suspense fallback={null}>
        <Remote1 />
      </React.Suspense>
      <DatePickerLib1 />
      <div className={clsx('App')}>hello</div>
    </React.Suspense>
  );
}

export default App;
