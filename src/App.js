import React, { Component, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
import { Container } from 'reactstrap';
import { NavMenu } from './components/NavMenu';
import { Home } from './components/Home';
import { About } from './components/About';

const ReactProject = lazy(() => import('./components/projects/reactProject'));
const MathematicsProject = lazy(() => import('./components/projects/mathematicsProject'));
const CoOpProject = lazy(() => import('./components/projects/coopProject'));
const CapstoneProject = lazy(() => import('./components/projects/capstoneProject'));

function Loading() {
    return (
        <div className="min-vh-100 d-flex justify-content-center">
            <h2 className="text-info"><i>Loading...</i></h2>
        </div>
    );
}

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videoActive: true };
        // It makes the most sense to manage video state at this level given that video can appear
        // throughout the application, turning it on and off from wherever
        this.handleVideoToggle = this.handleVideoToggle.bind(this);
    }

    //PageTracking();

    handleVideoToggle() {
        this.setState(prevState => ({ videoActive: !prevState.videoActive }));
    }

    render() {
        // why pass a function through multiple layers when I can pass a button?
        const videoToggle = <button type="button" onMouseUp={this.handleVideoToggle}
            className={"mx-auto text-light btn " + (this.state.videoActive ? "btn-danger" : "btn-accent")}>
                {this.state.videoActive ? "Hide" : "Show"} Video
            </button>;
        return (
            <div>
                <NavMenu />
                <Container>
                    <Suspense fallback={<Loading />}>
                        <Routes>
                            <Route path='/about' element={<About title="About Me" />} />
                            <Route path='/react' element={<ReactProject projectName="React"
                                showVideo={this.state.videoActive}
                                toggle={videoToggle} />} />
                            <Route path='/mathematics' element={<MathematicsProject projectName="Mathematics"
                                showVideo={this.state.videoActive}
                                toggle={videoToggle} />} />
                            <Route path='/coop' element={<CoOpProject projectName="CoOp"
                                showVideo={this.state.videoActive}
                                toggle={videoToggle} />} />
                            <Route path='/capstone' element={<CapstoneProject projectName="Capstone"
                                showVideo={this.state.videoActive}
                                toggle={videoToggle} />} />
                            <Route exact path='/' element={<Home />} />
                        </Routes>
                    </Suspense>
                </Container>
            </div>
        );
    }
}