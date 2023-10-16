import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout.jsx/SharedLayout';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

// export const App = () => {
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectErrorValue);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//   );
// };
