import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import {
    alpha,
    lighten,
    darken,
    ThemeOptions,
} from "@mui/material";

export const useLightTheme = () => {

    const {
        theme,
        setTheme,
        colorOptions,
        setColorOptions,
        themeColors,
        setThemeColors,
    } = useContext(ThemeContext);

    const _themeColors = themeColors?.primary ? themeColors : {
        "primary": "#5569ff",
        "secondary": "#6E759F",
        "success": "#57CA22",
        "warning": "#FFA319",
        "error": "#FF1943",
        "info": "#33C2FF",
        "black": "#223354",
        "white": "#ffffff",
        "primaryAlt": "#000C57",
    };

    const _colorVariation = colorOptions?.gradients ? colorOptions : {
        gradients: {
            blue1: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
            blue2: "linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%)",
            blue3: "linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%)",
            blue4: "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)",
            blue5: "linear-gradient(135deg, #97ABFF 10%, #123597 100%)",
            orange1: "linear-gradient(135deg, #FCCF31 0%, #F55555 100%)",
            orange2: "linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)",
            orange3: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
            purple1: "linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)",
            purple3: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            pink1: "linear-gradient(135deg, #F6CEEC 0%, #D939CD 100%)",
            pink2: "linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%)",
            green1: "linear-gradient(135deg, #FFF720 0%, #3CD500 100%)",
            green2: "linear-gradient(to bottom, #00b09b, #96c93d)",
            black1: "linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%)",
            black2: "linear-gradient(60deg, #29323c 0%, #485563 100%)",
        },
        shadows: {
            success:
                "0px 1px 4px rgba(68, 214, 0, 0.25), 0px 3px 12px 2px rgba(68, 214, 0, 0.35)",
            "error":
                "0px 1px 4px rgba(255, 25, 67, 0.25), 0px 3px 12px 2px rgba(255, 25, 67, 0.35)",
            "info": "0px 1px 4px rgba(51, 194, 255, 0.25), 0px 3px 12px 2px rgba(51, 194, 255, 0.35)",
            "primary":
                "0px 1px 4px rgba(85, 105, 255, 0.25), 0px 3px 12px 2px rgba(85, 105, 255, 0.35)",
            "warning":
                "0px 1px 4px rgba(255, 163, 25, 0.25), 0px 3px 12px 2px rgba(255, 163, 25, 0.35)",
            "card": "0px 9px 16px rgba(159, 162, 191, .18), 0px 2px 2px rgba(159, 162, 191, 0.32)",
            "cardSm":
                "0px 2px 3px rgba(159, 162, 191, .18), 0px 1px 1px rgba(159, 162, 191, 0.32)",
            "cardLg":
                "0 5rem 14rem 0 rgb(255 255 255 / 30%), 0 0.8rem 2.3rem rgb(0 0 0 / 60%), 0 0.2rem 0.3rem rgb(0 0 0 / 45%)",
        },
        "layout": {
            "general": {
                "bodyBg": "#fffffe",
            },
            "sidebar": {
                "background": _themeColors.white,
                "textColor": _themeColors.secondary,
                "dividerBg": "#f2f5f9",
                "menuItemColor": "#242E6F",
                "menuItemColorActive": _themeColors.primary,
                "menuItemBg": _themeColors.white,
                "menuItemBgActive": "#f2f5f9",
                "menuItemIconColor": lighten(_themeColors.secondary, 0.3),
                "menuItemIconColorActive": _themeColors.primary,
                "menuItemHeadingColor": darken(_themeColors.secondary, 0.3),
            },
        },
        "alpha": {
            "white": {
                "5": alpha(_themeColors.white, 0.02),
                "10": alpha(_themeColors.white, 0.1),
                "30": alpha(_themeColors.white, 0.3),
                "50": alpha(_themeColors.white, 0.5),
                "70": alpha(_themeColors.white, 0.7),
                "100": _themeColors.white,
            },
            "trueWhite": {
                "5": alpha(_themeColors.white, 0.02),
                "10": alpha(_themeColors.white, 0.1),
                "30": alpha(_themeColors.white, 0.3),
                "50": alpha(_themeColors.white, 0.5),
                "70": alpha(_themeColors.white, 0.7),
                "100": _themeColors.white,
            },
            "black": {
                "5": alpha(_themeColors.black, 0.02),
                "10": alpha(_themeColors.black, 0.1),
                "30": alpha(_themeColors.black, 0.3),
                "50": alpha(_themeColors.black, 0.5),
                "70": alpha(_themeColors.black, 0.7),
                "100": _themeColors.black,
            },
        },
        "secondary": {
            "lighter": lighten(_themeColors.secondary, 0.85),
            "light": lighten(_themeColors.secondary, 0.25),
            "main": _themeColors.secondary,
            "dark": darken(_themeColors.secondary, 0.2),
        },
        "primary": {
            "lighter": lighten(_themeColors.primary, 0.85),
            "light": lighten(_themeColors.primary, 0.3),
            "main": _themeColors.primary,
            "dark": darken(_themeColors.primary, 0.2),
        },
        "success": {
            "lighter": lighten(_themeColors.success, 0.85),
            "light": lighten(_themeColors.success, 0.3),
            "main": _themeColors.success,
            "dark": darken(_themeColors.success, 0.2),
        },
        "warning": {
            "lighter": lighten(_themeColors.warning, 0.85),
            "light": lighten(_themeColors.warning, 0.3),
            "main": _themeColors.warning,
            "dark": darken(_themeColors.warning, 0.2),
        },
        "error": {
            "lighter": lighten(_themeColors.error, 0.85),
            "light": lighten(_themeColors.error, 0.3),
            "main": _themeColors.error,
            "dark": darken(_themeColors.error, 0.2),
        },
        "info": {
            "lighter": lighten(_themeColors.info, 0.85),
            "light": lighten(_themeColors.info, 0.3),
            "main": _themeColors.info,
            "dark": darken(_themeColors.info, 0.2),
        },
    };

    // TODO - ADD PROPER TYPE CHECKS
    const _theme: ThemeOptions = theme ? theme : {
        colors: {
            gradients: {
                blue1: _colorVariation.gradients.blue1,
                blue2: _colorVariation.gradients.blue2,
                blue3: _colorVariation.gradients.blue3,
                blue4: _colorVariation.gradients.blue4,
                blue5: _colorVariation.gradients.blue5,
                orange1: _colorVariation.gradients.orange1,
                orange2: _colorVariation.gradients.orange2,
                orange3: _colorVariation.gradients.orange3,
                purple1: _colorVariation.gradients.purple1,
                purple3: _colorVariation.gradients.purple3,
                pink1: _colorVariation.gradients.pink1,
                pink2: _colorVariation.gradients.pink2,
                green1: _colorVariation.gradients.green1,
                green2: _colorVariation.gradients.green2,
                black1: _colorVariation.gradients.black1,
                black2: _colorVariation.gradients.black2,
            },
            "shadows": {
                "success": _colorVariation.shadows.success,
                "error": _colorVariation.shadows.error,
                "primary": _colorVariation.shadows.primary,
                "info": _colorVariation.shadows.info,
                "warning": _colorVariation.shadows.warning,
            },
            "alpha": {
                "white": {
                    "5": alpha(_themeColors.white, 0.02),
                    "10": alpha(_themeColors.white, 0.1),
                    "30": alpha(_themeColors.white, 0.3),
                    "50": alpha(_themeColors.white, 0.5),
                    "70": alpha(_themeColors.white, 0.7),
                    "100": _themeColors.white,
                },
                "trueWhite": {
                    "5": alpha(_themeColors.white, 0.02),
                    "10": alpha(_themeColors.white, 0.1),
                    "30": alpha(_themeColors.white, 0.3),
                    "50": alpha(_themeColors.white, 0.5),
                    "70": alpha(_themeColors.white, 0.7),
                    "100": _themeColors.white,
                },
                "black": {
                    "5": alpha(_themeColors.black, 0.02),
                    "10": alpha(_themeColors.black, 0.1),
                    "30": alpha(_themeColors.black, 0.3),
                    "50": alpha(_themeColors.black, 0.5),
                    "70": alpha(_themeColors.black, 0.7),
                    "100": _themeColors.black,
                },
            },
            "secondary": {
                "lighter": alpha(_themeColors.secondary, 0.1),
                "light": lighten(_themeColors.secondary, 0.3),
                "main": _themeColors.secondary,
                "dark": darken(_themeColors.secondary, 0.2),
            },
            "primary": {
                "lighter": alpha(_themeColors.primary, 0.1),
                "light": lighten(_themeColors.primary, 0.3),
                "main": _themeColors.primary,
                "dark": darken(_themeColors.primary, 0.2),
            },
            "success": {
                "lighter": alpha(_themeColors.success, 0.1),
                "light": lighten(_themeColors.success, 0.3),
                "main": _themeColors.success,
                "dark": darken(_themeColors.success, 0.2),
            },
            "warning": {
                "lighter": alpha(_themeColors.warning, 0.1),
                "light": lighten(_themeColors.warning, 0.3),
                "main": _themeColors.warning,
                "dark": darken(_themeColors.warning, 0.2),
            },
            "error": {
                "lighter": alpha(_themeColors.error, 0.1),
                "light": lighten(_themeColors.error, 0.3),
                "main": _themeColors.error,
                "dark": darken(_themeColors.error, 0.2),
            },
            "info": {
                "lighter": alpha(_themeColors.info, 0.1),
                "light": lighten(_themeColors.info, 0.3),
                "main": _themeColors.info,
                "dark": darken(_themeColors.info, 0.2),
            },
        },
        "general": {
            "reactFrameworkColor": "#00D8FF",
            "borderRadiusSm": "6px",
            "borderRadius": "10px",
            "borderRadiusLg": "12px",
            "borderRadiusXl": "16px",
        },
        "sidebar": {
            "background": _colorVariation.layout.sidebar.background,
            "textColor": _colorVariation.layout.sidebar.textColor,
            "dividerBg": _colorVariation.layout.sidebar.dividerBg,
            "menuItemColor": _colorVariation.layout.sidebar.menuItemColor,
            "menuItemColorActive": _colorVariation.layout.sidebar.menuItemColorActive,
            "menuItemBg": _colorVariation.layout.sidebar.menuItemBg,
            "menuItemBgActive": _colorVariation.layout.sidebar.menuItemBgActive,
            "menuItemIconColor": _colorVariation.layout.sidebar.menuItemIconColor,
            "menuItemIconColorActive": _colorVariation.layout.sidebar.menuItemIconColorActive,
            "menuItemHeadingColor": _colorVariation.layout.sidebar.menuItemHeadingColor,
            "boxShadow":
                "2px 0 3px rgba(159, 162, 191, .18), 1px 0 1px rgba(159, 162, 191, 0.32)",
            "width": "290px",
        },
        "header": {
            "height": "80px",
            "background": _colorVariation.alpha.white[100],
            "boxShadow": _colorVariation.shadows.cardSm,
            "textColor": _colorVariation.secondary.main,
        },
        "spacing": 9,
        "palette": {
            "common": {
                "black": _colorVariation.alpha.black[100],
                "white": _colorVariation.alpha.white[100],
            },
            "mode": "light",
            "primary": {
                "light": _colorVariation.primary.light,
                "main": _colorVariation.primary.main,
                "dark": _colorVariation.primary.dark,
            },
            "secondary": {
                "light": _colorVariation.secondary.light,
                "main": _colorVariation.secondary.main,
                "dark": _colorVariation.secondary.dark,
            },
            "error": {
                "light": _colorVariation.error.light,
                "main": _colorVariation.error.main,
                "dark": _colorVariation.error.dark,
                "contrastText": _colorVariation.alpha.white[100],
            },
            "success": {
                "light": _colorVariation.success.light,
                "main": _colorVariation.success.main,
                "dark": _colorVariation.success.dark,
                "contrastText": _colorVariation.alpha.white[100],
            },
            "info": {
                "light": _colorVariation.info.light,
                "main": _colorVariation.info.main,
                "dark": _colorVariation.info.dark,
                "contrastText": _colorVariation.alpha.white[100],
            },
            "warning": {
                "light": _colorVariation.warning.light,
                "main": _colorVariation.warning.main,
                "dark": _colorVariation.warning.dark,
                "contrastText": _colorVariation.alpha.white[100],
            },
            "text": {
                "primary": _colorVariation.alpha.black[100],
                "secondary": _colorVariation.alpha.black[70],
                "disabled": _colorVariation.alpha.black[50],
            },
            "background": {
                "paper": _colorVariation.alpha.white[100],
                "default": _colorVariation.layout.general.bodyBg,
            },
            "action": {
                "active": _colorVariation.alpha.black[100],
                "hover": _colorVariation.primary.lighter,
                "hoverOpacity": 0.1,
                "selected": _colorVariation.alpha.black[10],
                "selectedOpacity": 0.1,
                "disabled": _colorVariation.alpha.black[50],
                "disabledBackground": _colorVariation.alpha.black[5],
                "disabledOpacity": 0.38,
                "focus": _colorVariation.alpha.black[10],
                "focusOpacity": 0.05,
                "activatedOpacity": 0.12,
            },
            "tonalOffset": 0.5,
        },
        "breakpoints": {
            "values": {
                "xs": 0,
                "sm": 600,
                "md": 960,
                "lg": 1280,
                "xl": 1840,
            },
        },
        "components": {
            "MuiBackdrop": {
                "styleOverrides": {
                    "root": {
                        "backgroundColor": alpha(darken(_themeColors.primaryAlt, 0.4), 0.2),
                        "backdropFilter": "blur(2px)",

                        "&.MuiBackdrop-invisible": {
                            "backgroundColor": "transparent",
                            "backdropFilter": "blur(2px)",
                        },
                    },
                },
            },
            "MuiFormHelperText": {
                "styleOverrides": {
                    "root": {
                        "textTransform": "none",
                        "marginLeft": 8,
                        "marginRight": 8,
                        "fontWeight": "bold",
                    },
                },
            },
            "MuiCssBaseline": {
                "styleOverrides": {
                    "html, body": {
                        "width": "100%",
                        "height": "100%",
                    },
                    "body": {
                        "display": "flex",
                        "flexDirection": "column",
                        "minHeight": "100%",
                        "width": "100%",
                        "flex": 1,
                    },
                    "#root": {
                        "width": "100%",
                        "height": "100%",
                        "display": "flex",
                        "flex": 1,
                        "flexDirection": "column",
                    },
                    "html": {
                        "display": "flex",
                        "flexDirection": "column",
                        "minHeight": "100%",
                        "width": "100%",
                        "MozOsxFontSmoothing": "grayscale",
                        "WebkitFontSmoothing": "antialiased",
                    },
                    ".child-popover .MuiPaper-root .MuiList-root": {
                        "flexDirection": "column",
                    },
                    "#nprogress": {
                        "pointerEvents": "none",
                    },
                    "#nprogress .bar": {
                        "background": _colorVariation.primary.lighter,
                    },
                    "#nprogress .spinner-icon": {
                        "borderTopColor": _colorVariation.primary.lighter,
                        "borderLeftColor": _colorVariation.primary.lighter,
                    },
                    "#nprogress .peg": {
                        "boxShadow":
                            "0 0 15px " +
                            _colorVariation.primary.lighter +
                            ", 0 0 8px" +
                            _colorVariation.primary.light,
                    },
                    ":root": {
                        "--swiper-theme-color": _colorVariation.primary.main,
                    },
                    "code": {
                        "background": _colorVariation.info.lighter,
                        "color": _colorVariation.info.dark,
                        "borderRadius": 4,
                        "padding": 4,
                    },
                    "@keyframes ripple": {
                        "0%": {
                            "transform": "scale(.8)",
                            "opacity": 1,
                        },
                        "100%": {
                            "transform": "scale(2.8)",
                            "opacity": 0,
                        },
                    },
                    "@keyframes float": {
                        "0%": {
                            "transform": "translate(0%, 0%)",
                        },
                        "100%": {
                            "transform": "translate(3%, 3%)",
                        },
                    },
                },
            },
            "MuiSelect": {
                "styleOverrides": {
                    "iconOutlined": {
                        "color": _colorVariation.alpha.black[50],
                    },
                    "icon": {
                        "top": "calc(50% - 14px)",
                    },
                },
            },
            "MuiOutlinedInput": {
                "styleOverrides": {
                    "root": {
                        "& .MuiInputAdornment-positionEnd.MuiInputAdornment-outlined": {
                            "paddingRight": 6,
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            "borderColor": _colorVariation.alpha.black[50],
                        },
                        "&.Mui-focused:hover .MuiOutlinedInput-notchedOutline": {
                            "borderColor": _colorVariation.primary.main,
                        },
                    },
                },
            },
            "MuiListSubheader": {
                "styleOverrides": {
                    "colorPrimary": {
                        "fontWeight": "bold",
                        "lineHeight": "40px",
                        "fontSize": 13,
                        "background": _colorVariation.alpha.black[5],
                        "color": _colorVariation.alpha.black[70],
                    },
                },
            },
            "MuiCardHeader": {
                "styleOverrides": {
                    "action": {
                        "marginTop": -5,
                        "marginBottom": -5,
                    },
                    "title": {
                        "fontSize": 15,
                    },
                },
            },
            "MuiRadio": {
                "styleOverrides": {
                    "root": {
                        "borderRadius": "50px",
                    },
                },
            },
            "MuiChip": {
                "styleOverrides": {
                    "colorSecondary": {
                        "background": _colorVariation.alpha.black[5],
                        "color": _colorVariation.alpha.black[100],

                        "&:hover": {
                            "background": _colorVariation.alpha.black[10],
                        },
                    },
                    "deleteIcon": {
                        "color": _colorVariation.error.light,

                        "&:hover": {
                            "color": _colorVariation.error.main,
                        },
                    },
                },
            },
            "MuiAccordion": {
                "styleOverrides": {
                    "root": {
                        "boxShadow": "none",

                        "&.Mui-expanded": {
                            "margin": 0,
                        },
                        "&::before": {
                            "display": "none",
                        },
                    },
                },
            },
            "MuiAvatar": {
                "styleOverrides": {
                    "root": {
                        "fontSize": 14,
                        "fontWeight": "bold",
                    },
                    "colorDefault": {
                        "background": _colorVariation.alpha.black[30],
                        "color": _colorVariation.alpha.white[100],
                    },
                },
            },
            "MuiAvatarGroup": {
                "styleOverrides": {
                    "root": {
                        "alignItems": "center",
                    },
                    "avatar": {
                        "background": _colorVariation.alpha.black[10],
                        "fontSize": 13,
                        "color": _colorVariation.alpha.black[70],
                        "fontWeight": "bold",

                        "&:first-of-type": {
                            "border": 0,
                            "background": "transparent",
                        },
                    },
                },
            },
            "MuiListItemAvatar": {
                "styleOverrides": {
                    "alignItemsFlexStart": {
                        "marginTop": 0,
                    },
                },
            },
            "MuiPaginationItem": {
                "styleOverrides": {
                    "page": {
                        "fontSize": 13,
                        "fontWeight": "bold",
                        "transition": "all .2s",
                    },
                    "textPrimary": {
                        "&.Mui-selected": {
                            "boxShadow": _colorVariation.shadows.primary,
                        },
                        "&.MuiButtonBase-root:hover": {
                            "background": _colorVariation.alpha.black[5],
                        },
                        "&.Mui-selected.MuiButtonBase-root:hover": {
                            "background": _colorVariation.primary.main,
                        },
                    },
                },
            },
            "MuiButton": {
                "defaultProps": {
                    "disableRipple": true,
                },
                "styleOverrides": {
                    "root": {
                        "fontWeight": "bold",
                        "textTransform": "none",
                        "paddingLeft": 16,
                        "paddingRight": 16,

                        ".MuiSvgIcon-root": {
                            "transition": "all .2s",
                        },
                    },
                    "endIcon": {
                        "marginRight": -8,
                    },
                    "containedSecondary": {
                        "backgroundColor": _colorVariation.secondary.main,
                        "color": _colorVariation.alpha.white[100],
                        "border": "1px solid " + _colorVariation.alpha.black[30],
                    },
                    "outlinedSecondary": {
                        "backgroundColor": _colorVariation.alpha.white[100],

                        "&:hover, &.MuiSelected": {
                            "backgroundColor": _colorVariation.alpha.black[5],
                            "color": _colorVariation.alpha.black[100],
                        },
                    },
                    "sizeSmall": {
                        "padding": "6px 16px",
                        "lineHeight": 1.5,
                    },
                    "sizeMedium": {
                        "padding": "8px 20px",
                    },
                    "sizeLarge": {
                        "padding": "11px 24px",
                    },
                    "textSizeSmall": {
                        "padding": "7px 12px",
                    },
                    "textSizeMedium": {
                        "padding": "9px 16px",
                    },
                    "textSizeLarge": {
                        "padding": "12px 16px",
                    },
                },
            },
            "MuiButtonBase": {
                "defaultProps": {
                    "disableRipple": false,
                },
                "styleOverrides": {
                    "root": {
                        "borderRadius": 6,
                    },
                },
            },
            "MuiToggleButton": {
                "defaultProps": {
                    "disableRipple": true,
                },
                "styleOverrides": {
                    "root": {
                        "color": _colorVariation.primary.main,
                        "background": _colorVariation.alpha.white[100],
                        "transition": "all .2s",

                        "&:hover, &.Mui-selected, &.Mui-selected:hover": {
                            "color": _colorVariation.alpha.white[100],
                            "background": _colorVariation.primary.main,
                        },
                    },
                },
            },
            "MuiIconButton": {
                "styleOverrides": {
                    "root": {
                        "borderRadius": 8,
                        "padding": 8,

                        "& .MuiTouchRipple-root": {
                            "borderRadius": 8,
                        },
                    },
                    "sizeSmall": {
                        "padding": 4,
                    },
                },
            },
            "MuiListItemText": {
                "styleOverrides": {
                    "root": {
                        "margin": 0,
                    },
                },
            },
            "MuiListItemButton": {
                "styleOverrides": {
                    "root": {
                        "& .MuiTouchRipple-root": {
                            "opacity": 0.3,
                        },
                    },
                },
            },
            "MuiDivider": {
                "styleOverrides": {
                    "root": {
                        "background": _colorVariation.alpha.black[10],
                        "border": 0,
                        "height": 1,
                    },
                    "vertical": {
                        "height": "auto",
                        "width": 1,

                        "&.MuiDivider-flexItem.MuiDivider-fullWidth": {
                            "height": "auto",
                        },
                        "&.MuiDivider-absolute.MuiDivider-fullWidth": {
                            "height": "100%",
                        },
                    },
                    "withChildren": {
                        "&:before, &:after": {
                            "border": 0,
                        },
                    },
                    "wrapper": {
                        "background": _colorVariation.alpha.white[100],
                        "fontWeight": "bold",
                        "height": 24,
                        "lineHeight": "24px",
                        "marginTop": -12,
                        "color": "inherit",
                        "textTransform": "uppercase",
                    },
                },
            },
            "MuiPaper": {
                "styleOverrides": {
                    "root": {
                        "padding": 0,
                    },
                    "elevation0": {
                        "boxShadow": "none",
                    },
                    "elevation": {
                        "boxShadow": _colorVariation.shadows.card,
                    },
                    "elevation2": {
                        "boxShadow": _colorVariation.shadows.cardSm,
                    },
                    "elevation24": {
                        "boxShadow": _colorVariation.shadows.cardLg,
                    },
                    "outlined": {
                        "boxShadow": _colorVariation.shadows.card,
                    },
                },
            },
            "MuiLink": {
                "defaultProps": {
                    "underline": "hover",
                },
            },
            "MuiLinearProgress": {
                "styleOverrides": {
                    "root": {
                        "borderRadius": 6,
                        "height": 6,
                    },
                },
            },
            "MuiSlider": {
                "styleOverrides": {
                    "root": {
                        "& .MuiSlider-valueLabelCircle, .MuiSlider-valueLabelLabel": {
                            "transform": "none",
                        },
                        "& .MuiSlider-valueLabel": {
                            "borderRadius": 6,
                            "background": _colorVariation.alpha.black[100],
                            "color": _colorVariation.alpha.white[100],
                        },
                    },
                },
            },
            "MuiList": {
                "styleOverrides": {
                    "root": {
                        "padding": 0,

                        "& .MuiListItem-button": {
                            "transition": "all .2s",

                            "& > .MuiSvgIcon-root": {
                                "minWidth": 34,
                            },

                            "& .MuiTouchRipple-root": {
                                "opacity": 0.2,
                            },
                        },
                        "& .MuiListItem-root.MuiButtonBase-root.Mui-selected": {
                            "backgroundColor": alpha(_colorVariation.primary.lighter, 0.4),
                        },
                        "& .MuiMenuItem-root.MuiButtonBase-root:active": {
                            "backgroundColor": alpha(_colorVariation.primary.lighter, 0.4),
                        },
                        "& .MuiMenuItem-root.MuiButtonBase-root .MuiTouchRipple-root": {
                            "opacity": 0.2,
                        },
                    },
                    "padding": {
                        "padding": "12px",

                        "& .MuiListItem-button": {
                            "borderRadius": 6,
                            "margin": "1px 0",
                        },
                    },
                },
            },
            "MuiTabs": {
                "styleOverrides": {
                    "root": {
                        "height": 38,
                        "minHeight": 38,
                        "overflow": "visible",
                    },
                    "indicator": {
                        "height": 38,
                        "minHeight": 38,
                        "borderRadius": 6,
                        "border": "1px solid " + _colorVariation.primary.dark,
                        "boxShadow": "0px 2px 10px " + _colorVariation.primary.light,
                    },
                    "scrollableX": {
                        "overflow": "visible !important",
                    },
                },
            },
            "MuiTab": {
                "styleOverrides": {
                    "root": {
                        "padding": 0,
                        "height": 38,
                        "minHeight": 38,
                        "borderRadius": 6,
                        "transition": "color .2s",
                        "textTransform": "capitalize",

                        "&.MuiButtonBase-root": {
                            "minWidth": "auto",
                            "paddingLeft": 20,
                            "paddingRight": 20,
                            "marginRight": 4,
                        },
                        "&.Mui-selected, &.Mui-selected:hover": {
                            "color": _colorVariation.alpha.white[100],
                            "zIndex": 5,
                        },
                        "&:hover": {
                            "color": _colorVariation.alpha.black[100],
                        },
                    },
                },
            },
            "MuiMenu": {
                "styleOverrides": {
                    "paper": {
                        "padding": 12,
                    },
                    "list": {
                        "padding": 12,

                        "& .MuiMenuItem-root.MuiButtonBase-root": {
                            "fontSize": 14,
                            "marginTop": 1,
                            "marginBottom": 1,
                            "transition": "all .2s",
                            "color": _colorVariation.alpha.black[70],

                            "& .MuiTouchRipple-root": {
                                "opacity": 0.2,
                            },

                            "&:hover, &:active, &.active, &.Mui-selected": {
                                "color": _colorVariation.alpha.black[100],
                                "background": alpha(_colorVariation.primary.lighter, 0.4),
                            },
                        },
                    },
                },
            },
            "MuiMenuItem": {
                "styleOverrides": {
                    "root": {
                        "background": "transparent",
                        "transition": "all .2s",

                        "&:hover, &:active, &.active, &.Mui-selected": {
                            "color": _colorVariation.alpha.black[100],
                            "background": alpha(_colorVariation.primary.lighter, 0.4),
                        },
                        "&.Mui-selected:hover": {
                            "background": alpha(_colorVariation.primary.lighter, 0.4),
                        },
                    },
                },
            },
            "MuiListItem": {
                "styleOverrides": {
                    "root": {
                        "&.MuiButtonBase-root": {
                            "color": _colorVariation.secondary.main,

                            "&:hover, &:active, &.active, &.Mui-selected": {
                                "color": _colorVariation.alpha.black[100],
                                "background": lighten(_colorVariation.primary.lighter, 0.5),
                            },
                        },
                    },
                },
            },
            "MuiAutocomplete": {
                "styleOverrides": {
                    "tag": {
                        "margin": 1,
                    },
                    "root": {
                        ".MuiAutocomplete-inputRoot.MuiOutlinedInput-root .MuiAutocomplete-endAdornment":
                        {
                            "right": 14,
                        },
                    },
                    "clearIndicator": {
                        "background": _colorVariation.error.lighter,
                        "color": _colorVariation.error.main,
                        "marginRight": 8,

                        "&:hover": {
                            "background": _colorVariation.error.lighter,
                            "color": _colorVariation.error.dark,
                        },
                    },
                    "popupIndicator": {
                        "color": _colorVariation.alpha.black[50],

                        "&:hover": {
                            "background": _colorVariation.primary.lighter,
                            "color": _colorVariation.primary.main,
                        },
                    },
                },
            },
            "MuiTablePagination": {
                "styleOverrides": {
                    "toolbar": {
                        "& .MuiIconButton-root": {
                            "padding": 8,
                        },
                    },
                    "select": {
                        "&:focus": {
                            "backgroundColor": "transparent",
                        },
                    },
                },
            },
            "MuiToolbar": {
                "styleOverrides": {
                    "root": {
                        "minHeight": "0 !important",
                        "padding": "0 !important",
                    },
                },
            },
            "MuiTableRow": {
                "styleOverrides": {
                    "head": {
                        "background": _colorVariation.alpha.black[5],
                    },
                    "root": {
                        "transition": "background-color .2s",

                        "&.MuiTableRow-hover:hover": {
                            "backgroundColor": _colorVariation.alpha.black[5],
                        },
                    },
                },
            },
            "MuiTableCell": {
                "styleOverrides": {
                    "root": {
                        "borderBottomColor": _colorVariation.alpha.black[10],
                        "fontSize": 14,
                    },
                    "head": {
                        "textTransform": "uppercase",
                        "fontSize": 13,
                        "fontWeight": "bold",
                        "color": _colorVariation.alpha.black[70],
                    },
                },
            },
            "MuiAlert": {
                "styleOverrides": {
                    "message": {
                        "lineHeight": 1.5,
                        "fontSize": 14,
                    },
                    "standardInfo": {
                        "color": _colorVariation.info.main,
                    },
                    "action": {
                        "color": _colorVariation.alpha.black[70],
                    },
                },
            },
            "MuiTooltip": {
                "styleOverrides": {
                    "tooltip": {
                        "backgroundColor": alpha(_colorVariation.alpha.black["100"], 0.95),
                        "padding": "8px 16px",
                        "fontSize": 13,
                    },
                    "arrow": {
                        "color": alpha(_colorVariation.alpha.black["100"], 0.95),
                    },
                },
            },
            "MuiSwitch": {
                "styleOverrides": {
                    "root": {
                        "height": 33,
                        "overflow": "visible",

                        "& .MuiButtonBase-root": {
                            "position": "absolute",
                            "padding": 6,
                            "transition":
                                "left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                        },
                        "& .MuiIconButton-root": {
                            "borderRadius": 100,
                        },
                        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                            "opacity": 0.3,
                        },
                    },
                    "thumb": {
                        "border": "1px solid " + _colorVariation.alpha.black[30],
                        "boxShadow":
                            "0px 9px 14px " +
                            _colorVariation.alpha.black[10] +
                            ", 0px 2px 2px " +
                            _colorVariation.alpha.black[10],
                    },
                    "track": {
                        "backgroundColor": _colorVariation.alpha.black[5],
                        "border": "1px solid " + _colorVariation.alpha.black[10],
                        "boxShadow": "inset 0px 1px 1px " + _colorVariation.alpha.black[10],
                        "opacity": 1,
                    },
                    "colorPrimary": {
                        "& .MuiSwitch-thumb": {
                            "backgroundColor": _colorVariation.alpha.white[100],
                        },

                        "&.Mui-checked .MuiSwitch-thumb": {
                            "backgroundColor": _colorVariation.primary.main,
                        },
                    },
                },
            },
            "MuiStepper": {
                "styleOverrides": {
                    "root": {
                        "paddingTop": 20,
                        "paddingBottom": 20,
                        "background": _colorVariation.alpha.black[5],
                    },
                },
            },
            "MuiStepIcon": {
                "styleOverrides": {
                    "root": {
                        "&.MuiStepIcon-completed": {
                            "color": _colorVariation.success.main,
                        },
                    },
                },
            },
            "MuiTypography": {
                "defaultProps": {
                    "variantMapping": {
                        "h1": "h1",
                        "h2": "h2",
                        "h3": "div",
                        "h4": "div",
                        "h5": "div",
                        "h6": "div",
                        "subtitle1": "div",
                        "subtitle2": "div",
                        "body1": "div",
                        "body2": "div",
                    },
                },
                "styleOverrides": {
                    "gutterBottom": {
                        "marginBottom": 4,
                    },
                    "paragraph": {
                        "fontSize": 17,
                        "lineHeight": 1.7,
                    },
                },
            },
        },
        "shape": {
            "borderRadius": 10,
        },
        "typography": {
            "fontFamily":
                '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
            "h1": {
                "fontWeight": 700,
                "fontSize": 35,
            },
            "h2": {
                "fontWeight": 700,
                "fontSize": 30,
            },
            "h3": {
                "fontWeight": 700,
                "fontSize": 25,
                "lineHeight": 1.4,
                "color": _colorVariation.alpha.black[100],
            },
            "h4": {
                "fontWeight": 700,
                "fontSize": 16,
            },
            "h5": {
                "fontWeight": 700,
                "fontSize": 14,
            },
            "h6": {
                "fontSize": 15,
            },
            "body1": {
                "fontSize": 14,
            },
            "body2": {
                "fontSize": 14,
            },
            "button": {
                "fontWeight": 600,
            },
            "caption": {
                "fontSize": 13,
                "textTransform": "uppercase",
                "color": _colorVariation.alpha.black[50],
            },
            "subtitle1": {
                "fontSize": 14,
                "color": _colorVariation.alpha.black[70],
            },
            "subtitle2": {
                "fontWeight": 400,
                "fontSize": 15,
                "color": _colorVariation.alpha.black[70],
            },
            "overline": {
                "fontSize": 13,
                "fontWeight": 700,
                "textTransform": "uppercase",
            },
        },
    };

    useEffect(() => {
        setTheme(_theme)
    }, [])


    return {
        themeColors: _themeColors,
        colorVariation: _colorVariation,
        theme: _theme,
        setTheme,
        setColorOptions,
        colorOptions,
        setThemeColors
    }
}
