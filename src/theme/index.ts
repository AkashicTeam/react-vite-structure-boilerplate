import { darkMode } from './palette/darkMode'
import { lightMode } from './palette/lightMode'
import { typography } from './typography'
export type ModeType = 'light' | 'dark'
const getDesignTokens = (mode: ModeType) => ({
    //-------Palette-------
    palette: {
        mode,
        ...(mode === 'light' ? lightMode : darkMode)
    },

    //-------Typography-------
    typography: {
        ...typography
    },

    //-------Styling components-------
    components: {}
})

export default getDesignTokens

/**
import { createTheme } from '@mui/material'
import { darkMode } from './palette/darkMode'
import { lightMode } from './palette/lightMode'
import { typography } from './typography'
import { flexMixin, centerFlex, textOverflowEllipse, textClamp, breadcrumbs } from './mixins'

const defaultTheme = createTheme()

const getDesignTokens = (mode: 'light' | 'dark') => ({
    //-----Responsive
    breakpoints: {
        // values: {
        //     xs: 0,
        //     sm: 600,
        //     md: 1000,
        //     lg: 1200,
        //     xl: 1920,
        // },
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: false
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },

                root: ({ ownerState }) => ({
                    ...(ownerState.variant2 === 'contained' &&
                      ownerState.color2 === 'primary' && {
                        backgroundColor: 'red',
                        color: '#fff',
                      }),
                }),

                // Style CSS of MUI
                root: ({ theme }: any) =>
                    theme.unstable_sx({
                        borderRadius: 12
                    }),

                sizeSmall: {
                    padding: "6px 16px",
                },
                sizeMedium: {
                    padding: "8px 20px",
                },
                sizeLarge: {
                    padding: "11px 24px",
                },
                sizeTiny: {
                    width: "500px",
                },
                sizeTiny2: {
                    width: "500px",
                },
                textSizeSmall: {
                    padding: "7px 12px",
                },
                textSizeMedium: {
                    padding: "9px 16px",
                },
                textSizeLarge: {
                    padding: "12px 16px",
                },
            },
            variants: [
                {
                    props: { variant: 'dashed' },
                    style: ({ ownState }: any) => ({
                        border: `2px dashed ${defaultTheme.palette.primary.main}`
                    })
                },
                {
                    props: { variant: 'border' },
                    style: ({ ownState }: any) => ({
                        borderRadius: `50px`
                    })
                }
            ]
        },
        MuiButtonBase: {
            defaultProps: {}
        },
        MuiTextField: {
            defaultProps: {
                type: "text",
                variant: "outlined",
                required: false,
                disabled: false,
                maxRows: 1,
            },
            styleOverrides: {
                root: {}
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    sizeMedium: {},
                    sizeSmall: {},
                    colorSecondary: {},
                    borderRadius: 8
                },
                notchedOutline: {
                    borderColor: '#E6E8F0'
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {}
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '32px 24px',
                    '&:last-child': {
                        paddingBottom: '32px'
                    }
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    variant: 'h6'
                },
                subheaderTypographyProps: {
                    variant: 'body2'
                }
            },
            styleOverrides: {
                root: {
                    padding: '32px 24px'
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    boxSizing: 'border-box',
                    margin: 0,
                    padding: 0
                },
                html: {
                    MozOsxFontSmoothing: 'grayscale',
                    WebkitFontSmoothing: 'antialiased',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%'
                },
                body: {
                    display: 'flex',
                    flex: '1 1 auto',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%'
                },
                '#__next': {
                    display: 'flex',
                    flex: '1 1 auto',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%'
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: '#F3F4F6',
                    '.MuiTableCell-root': {
                        color: '#374151'
                    },
                    borderBottom: 'none',
                    '& .MuiTableCell-root': {
                        borderBottom: 'none',
                        fontSize: '12px',
                        fontWeight: 600,
                        lineHeight: 1,
                        letterSpacing: 0.5,
                        textTransform: 'uppercase'
                    },
                    '& .MuiTableCell-paddingCheckbox': {
                        paddingTop: 4,
                        paddingBottom: 4
                    }
                }
            }
        },
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h1',
                    h2: 'h1',
                    h3: 'h1',
                    h4: 'h1',
                    h5: 'h1',
                    h6: 'h1',
                    subtitle1: 'h2',
                    subtitle2: 'h2',
                    body1: 'h1',
                    body2: 'h1'
                }
            }
        }
    },
    //-------Palette
    palette: {
        mode,
        ...(mode === 'light' ? lightMode : darkMode)
    },
    shape: {
        borderRadius: 10
    },
    //-----Typography
    typography: {
        ...typography
    },
    mixins: {
        customize: {
            flexMixin,
            centerFlex,
            textClamp,
            textOverflowEllipse,
            breadcrumbs
        }
    }
})

export default getDesignTokens
*/
