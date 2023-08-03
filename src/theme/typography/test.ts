import { createTheme } from '@mui/material'
const theme = createTheme()
export const typography = {
    button: {
        //fontWeight: 600
    },
    fontFamily: '"Raleway", sans-serif',
    display: {
        fontSize: '36px',
        lineHeight: '44px',
        fontWeight: 400,
        [theme.breakpoints.up('sm')]: {
            fontSize: '45px',
            lineHeight: '52px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '57px',
            lineHeight: '64px'
        }
    },
    heading: {
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: 800,
        [theme.breakpoints.up('sm')]: {
            fontSize: '28px',
            lineHeight: '36px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '32px',
            lineHeight: '40px'
        }
    },
    title: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 400,
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
            lineHeight: '24px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '22px',
            lineHeight: '28px'
        }
    },
    label: {
        fontSize: '11px',
        lineHeight: '16px',
        fontWeight: 400,
        [theme.breakpoints.up('sm')]: {
            fontSize: '12px',
            lineHeight: '16px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '14px',
            lineHeight: '20px'
        }
    },
    body: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 400,
        [theme.breakpoints.up('sm')]: {
            fontSize: '14px',
            lineHeight: '20px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '16px',
            lineHeight: '24px'
        }
    }
    // body1: {
    //     fontSize: "1rem",
    //     fontWeight: 400,
    //     lineHeight: 1.5,
    // },
    // body2: {
    //     fontSize: "0.875rem",
    //     fontWeight: 400,
    //     lineHeight: 1.57,
    // },
    // subtitle1: {
    //     fontSize: "1rem",
    //     fontWeight: 500,
    //     lineHeight: 1.75,
    // },
    // subtitle2: {
    //     fontSize: "0.875rem",
    //     fontWeight: 500,
    //     lineHeight: 1.57,
    // },
    // overline: {
    //     fontSize: "0.75rem",
    //     fontWeight: 600,
    //     letterSpacing: "0.5px",
    //     lineHeight: 2.5,
    //     textTransform: "uppercase",
    // },
    // caption: {
    //     fontSize: "0.75rem",
    //     fontWeight: 400,
    //     lineHeight: 1.66,
    // },
    // title: {},
    // h1: {
    //     fontWeight: 700,
    //     fontSize: "3.5rem",
    //     lineHeight: 1.375,
    // },
    // h2: {
    //     fontWeight: 700,
    //     fontSize: "3rem",
    //     lineHeight: 1.375,
    // },
    // h3: {
    //     fontWeight: 700,
    //     lineHeight: 1.375,
    //     fontSize: "1.2rem",
    //     // "@media (min-width:600px)": {
    //     //     fontSize: "1.5rem",
    //     // },
    //     [theme.breakpoints.up("md")]: {
    //         fontSize: "2.4rem",
    //     },
    // },
    // h4: {
    //     fontWeight: 700,
    //     fontSize: "2rem",
    //     lineHeight: 1.375,
    // },
    // h5: {
    //     fontWeight: 600,
    //     fontSize: "1.5rem",
    //     lineHeight: 1.375,
    // },
    // h6: {
    //     fontWeight: 600,
    //     fontSize: "1.125rem",
    //     lineHeight: 1.375,
    // },
    // text: {
    //     sizeSmall: {
    //         fontSize: "1.125rem",
    //     },
    //     sizeMedium: {
    //         fontSize: "1.125rem",
    //     },
    //     sizeLarge: {
    //         fontSize: "1.125rem",
    //     },
    // },
}
