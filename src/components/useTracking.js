import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default PageTracking = () => {
    const loc = useLocation();

    useEffect(() => {
        window.gtag("event", "page_view", {
            page_path: loc.pathname
        })
    }, [loc]);
};