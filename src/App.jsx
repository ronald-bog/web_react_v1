import './styles.scss'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { News } from './components/News'
import { Cursos } from './components/Cursos'
import { Videos } from './components/Videos'
import { Demos } from './components/Demos'
import { Head } from './components/Head'
import { Curso } from './components/Curso'
import { Code } from './components/Code'
import { Contact } from './components/Contact'

export const App = () => {
  return (
    <>
      <Head />
      <Routes>
        <Route path='/' element={<Cursos />} />
        <Route path='tecnologia' element={<News />} />
        <Route path='ciencia' element={<News />} />
        <Route path='cursos' element={<Cursos />} />
        <Route path='videos' element={<Videos />} />
        <Route path='code/:id' element={<Code />} />
        <Route path='demos' element={<Demos />} />
        <Route path='contact' element={<Contact />} />
        <Route path="/cursos/python" element={<Curso />} />
        <Route path="/cursos/javascript" element={<Curso />} />
        <Route path="/cursos/java" element={<Curso />} />
        <Route path="/cursos/angular" element={<Curso />} />
        <Route path="/cursos/html" element={<Curso />} />
        <Route path="/cursos/php" element={<Curso />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </>
  )
}

// import { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// // Componentes lazy-loaded
// const NewsComponent = lazy(() => import('./components/News'));
// const CursosComponent = lazy(() => import('./components/Cursos'));
// const VideosComponent = lazy(() => import('./components/Videos'));
// const CodeComponent = lazy(() => import('./components/Code'));
// const DemosComponent = lazy(() => import('./components/Demos'));
// const ContactoComponent = lazy(() => import('./components/Contact'));
// const CursoComponent = lazy(() => import('./components/curso'));

// function App() {
//   return (
//     <Router>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<Navigate replace to="/tecnologia" />} />
//           <Route path="/tecnologia" element={<NewsComponent />} />
//           <Route path="/ciencia" element={<NewsComponent />} />
//           <Route path="/cursos" element={<CursosComponent />} />
//           <Route path="/videos" element={<VideosComponent />} />
//           <Route path="/code/:id" element={<CodeComponent />} />
//           <Route path="/demos" element={<DemosComponent />} />
//           <Route path="/contacto" element={<ContactoComponent />} />
//           <Route path="/cursos/python" element={<CursoComponent />} />
//           <Route path="/cursos/javascript" element={<CursoComponent />} />
//           <Route path="/cursos/java" element={<CursoComponent />} />
//           <Route path="/cursos/angular" element={<CursoComponent />} />
//           <Route path="/cursos/html" element={<CursoComponent />} />
//           <Route path="/cursos/php" element={<CursoComponent />} />
//           {/* ... otras rutas ... */}
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// }

// export default App;
