// import { Routes, Route } from 'react-router-dom';
// import SinglePost from '../Components/SinglePost';
// import Posts from '../Components/Posts';


// const Router = () => {
//   return (
//     <Routes>
//         <Route path="/" element={<Posts />}>
//           <Route
//             index
//             element={
//               <>
//                 <Posts />
//               </>
//             }
//           />
//         </Route>
//         <Route element={<SinglePost />}>
//             <Route 
//             path='/posts/:id'
//             element={
//                 <>
//                 <SinglePost />
//                 </>
//             }
//             />
//         </Route>
//     </Routes>
//   );
// };

// export default Router;

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
