import { Route, Routes } from 'react-router-dom';
import Posts from '../Components/Posts';
import SinglePost from '../Components/SinglePost';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/posts/:id" element={<SinglePost />} />
    </Routes>
  );
}

export default AppRoutes;
