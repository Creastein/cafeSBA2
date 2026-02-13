import { useEffect } from 'react';


const ScrollManager: React.FC = () => {
    // Use location (if using router) or just run on mount
    // Since we might not be inside Router here, let's keep it simple first
    // But usually ScrollManager is inside Router. Let's assume it's just a top-level component.

    useEffect(() => {
        // 1. Immediate reset on mount
        window.scrollTo(0, 0);

        // 2. Disable browser's scroll restoration
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        // 3. Brutal force: check repeatedly in the first second
        // varying intervals to catch layout shifts
        const timeouts = [0, 10, 50, 100, 200, 300, 500, 1000].map(delay =>
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, delay)
        );

        // 4. Reset on unload to ensure next visit starts at top
        const handleUnload = () => {
            window.scrollTo(0, 0);
        };
        window.addEventListener('beforeunload', handleUnload);

        return () => {
            timeouts.forEach(clearTimeout);
            window.removeEventListener('beforeunload', handleUnload);
        };
    }, []);

    return null;
};

export default ScrollManager;
