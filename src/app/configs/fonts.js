import localFont from "next/font/local";

const primary = localFont({
    src: [
        {
            path: '../../fonts/SF-Pro-Display-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../fonts/SF-Pro-Display-Medium.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../fonts/SF-Pro-Display-Bold.otf',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../fonts/SF-Pro-Display-Black.otf',
            weight: '500',
            style: 'normal',
        },
    ],
    variable: '--font-primary',
    subsets: ['latin'],
    display: 'swap',
});

export { primary }