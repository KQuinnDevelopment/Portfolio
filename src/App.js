import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
import { Container } from 'reactstrap';
import { NavMenu } from './components/NavMenu';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { About } from './components/About';
import useToken from './components/useToken';
//import { Resume } from './components/Resume';

const ReactProject = lazy(() => import('./components/projects/reactProject'));
const MathematicsProject = lazy(() => import('./components/projects/mathematicsProject'));
//const ParallelProject = lazy(() => import('./components/projects/parallelProject'));
const CoOpProject = lazy(() => import('./components/projects/coopProject'));
const CapstoneProject = lazy(() => import('./components/projects/capstoneProject'));

function Loading() {
    return (
        <div className="min-vh-100 d-flex justify-content-center">
            <h2 className="text-info"><i>Loading...</i></h2>
        </div>
    );
}

export default function App() {
    const { token, setToken } = useToken();
    const user = sessionStorage.getItem('user');

    if (!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div>
            <NavMenu userName={user} />
            <Container>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path='/about' element={<About title="About Me" />} />
                        <Route path='/react' element={<ReactProject projectName="React" />} />
                        <Route path='/mathematics' element={<MathematicsProject projectName="Mathematics" />} />
                        <Route path='/coop' element={<CoOpProject projectName="CoOp" />} />
                        <Route path='/capstone' element={<CapstoneProject projectName="Capstone" />} />
                        <Route exact path='/' element={<Home />} />
                    </Routes>
                </Suspense>
            </Container>
        </div>
    );
}