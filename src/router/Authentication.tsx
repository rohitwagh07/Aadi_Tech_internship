import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import AddEmployee from 'src/components/Employee/AddEmployee';
import SuspenseLoader from 'src/layouts/components/SuspenseLoader';

const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Dashboards
//const SchoolList = Loader(lazy(() => import('src/RITeSchool/authentication/schoolList/schoolList')));

const TermAndCondition = Loader(lazy(() =>
  import('src/components/Authentication/TermAndConditions/TermAndCondition')
));
const EmployeeList = Loader(lazy(() =>
  import('src/components/Employee/EmployeeList')
));
const Home = Loader(
  lazy(() => import('src/components/Home/Home'))
);

const AuthenticationRoute = [
  {
    path: '/',
    element: <Navigate to="AddEmployee" replace />
  },
  {
    path: 'EmployeeList',
    element: <EmployeeList />
  },
  {
    path: 'Home',
    element: <Home />
  },
  {
    path: 'AddEmployee',
    element: <AddEmployee />
  },
  {
    path: 'AddEmployee/:Id',
    element: <AddEmployee />
  },
  {
    path: 'TermAndCondition',
    element: <TermAndCondition />
  }
];

export default AuthenticationRoute;
