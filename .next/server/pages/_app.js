"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bC": () => (/* binding */ CwnSpinner),
/* harmony export */   "uR": () => (/* binding */ CwnContainer),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);



const CwnSpinner = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spinner, {
        size: "xl",
        position: "absolute",
        left: "50%",
        top: "50%",
        ml: "calc(0px - var(--spinner-size) / 2)",
        mt: "calc(0px - var(--spinner-size))"
    })
;
// eslint-disable-next-line react/display-name
const CwnContainer = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ children  }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        ref: ref,
        className: "voxel-dog",
        m: "auto",
        mt: [
            '-20px',
            '-60px',
            '-120px'
        ],
        mb: [
            '-40px',
            '-140px',
            '-200px'
        ],
        w: [
            280,
            480,
            640
        ],
        h: [
            280,
            480,
            640
        ],
        position: "relative",
        children: children
    })
);
const Loader = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CwnContainer, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CwnSpinner, {
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);


/***/ }),

/***/ 9087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./components/logo.js





const LogoBox = (styled_default()).span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`;
const Logo = ()=>{
    const cwnLogoImg = `/images/logo_only${(0,react_.useColorModeValue)('', '-dark')}.png`;
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: "/",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LogoBox, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: cwnLogoImg,
                        width: 40,
                        height: 40,
                        alt: "logo"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                        color: (0,react_.useColorModeValue)('gray.800', 'whiteAlpha.900'),
                        fontFamily: "M PLUS Rounded 1c\", sans-serif",
                        fontWeight: "bold",
                        ml: 3,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "code with"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                style: {
                                    color: "#8c45f4"
                                },
                                children: "nefaden"
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const logo = (Logo);

// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
;// CONCATENATED MODULE: ./components/theme-toggle-button.js




const ThemeToggleButton = ()=>{
    const { toggleColorMode  } = (0,react_.useColorMode)();
    return(// WIP: Toggle Theme design like https://frame55.agency/ navigate button
    //   <Container 
    //     bg="white" 
    //     width="50px" 
    //     height="80px" 
    //     alignItems="center" 
    //     position="top-left" 
    //     borderBottomRightRadius="500px" 
    //     borderBottomLeftRadius="500px" 
    //     display="flex"
    //     zIndex="1"
    // >
    /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
                exitBeforeEnter: true,
                initial: false,
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.motion.div, {
                    whileHover: {
                        scale: 1.2
                    },
                    style: {
                        display: 'inline-block'
                    },
                    transition: {
                        duration: 0.2
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                        "aria-label": "Toggle theme",
                        colorScheme: (0,react_.useColorModeValue)('purple', 'orange'),
                        icon: (0,react_.useColorModeValue)(/*#__PURE__*/ jsx_runtime_.jsx(icons_.MoonIcon, {
                        }), /*#__PURE__*/ jsx_runtime_.jsx(icons_.SunIcon, {
                        })),
                        onClick: toggleColorMode,
                        borderRadius: "500"
                    })
                }, (0,react_.useColorModeValue)('light', 'dark'))
            })
        })
    }));
};
/* harmony default export */ const theme_toggle_button = (ThemeToggleButton);

;// CONCATENATED MODULE: ./components/hidden-link.js


const HiddenLink = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                href: "#about",
                position: "absolute",
                marginTop: "-100px",
                bg: "black",
                transition: {
                    transform: '325ms ease-in'
                },
                _focus: {
                    marginTop: "0"
                },
                children: "skip navigation"
            })
        })
    }));
};
/* harmony default export */ const hidden_link = (HiddenLink);

;// CONCATENATED MODULE: ./components/navbar.js







const LinkItem = ({ href , path , _target , children , ...props })=>{
    const active = path === href;
    const inactiveColor = (0,react_.useColorModeValue)('gray200', 'whiteAlpha.900');
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
            p: 2,
            bg: active ? 'grassTeal' : undefined,
            color: active ? '#202023' : inactiveColor,
            _target: _target,
            ...props,
            children: children
        })
    }));
};
const Navbar = (props)=>{
    const { path  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        position: "fixed",
        as: "nav",
        w: "100%",
        bg: (0,react_.useColorModeValue)('#ffffff40', '#20202380'),
        css: {
            backdropFilter: 'blur(10px)'
        },
        zIndex: 1,
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(hidden_link, {
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
                display: "flex",
                p: 2,
                maxW: "container.md",
                wrap: "wrap",
                align: "center",
                justify: "space-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                        align: "center",
                        mr: 5,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                            as: "h1",
                            size: "lg",
                            letterSpacing: 'tighter',
                            children: /*#__PURE__*/ jsx_runtime_.jsx(logo, {
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                        direction: {
                            base: 'column',
                            md: 'row'
                        },
                        display: {
                            base: 'none',
                            md: 'flex'
                        },
                        width: {
                            base: 'full',
                            md: 'auto'
                        },
                        alignItems: "center",
                        flexGrow: 1,
                        mt: {
                            base: 4,
                            md: 0
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                                href: "#about",
                                path: path,
                                children: "About me"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                                href: "#skills",
                                path: path,
                                children: "Skills"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                                href: "#resume",
                                path: path,
                                children: "Resume"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "|"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                                href: "/works",
                                path: path,
                                style: {
                                    display: "none"
                                },
                                children: "Works"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                                href: "/posts",
                                path: path,
                                style: {
                                    display: "none"
                                },
                                children: "Posts"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                                _target: "_blank",
                                href: "https://github.com/nefaden/portfolio-nefaden",
                                path: path,
                                display: "inline-flex",
                                alignItems: "center",
                                style: {
                                    gap: 4
                                },
                                pl: 2,
                                isExternal: "true",
                                children: "Source"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        flex: 1,
                        align: "right",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(theme_toggle_button, {
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                ml: 2,
                                display: {
                                    base: 'inline-block',
                                    md: 'none'
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                                    isLazy: true,
                                    id: "navbar-menu",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuButton, {
                                            as: react_.IconButton,
                                            icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.HamburgerIcon, {
                                            }),
                                            variant: "outline",
                                            "aria-label": "Options"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuList, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/",
                                                    passHref: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                        as: react_.Link,
                                                        children: "About"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/works",
                                                    passHref: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                        as: react_.Link,
                                                        children: "Works"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/posts",
                                                    passHref: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                        as: react_.Link,
                                                        children: "Posts"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                    as: react_.Link,
                                                    href: "https://github.com/craftzdog/craftzdog-homepage",
                                                    children: "View Source"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const navbar = (Navbar);

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./libs/voxel-cwn-loader.js
var voxel_cwn_loader = __webpack_require__(9170);
;// CONCATENATED MODULE: ./components/layouts/main.js






const LazyVoxelCwn = (0,dynamic["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(330), __webpack_require__.e(46)]).then(__webpack_require__.bind(__webpack_require__, 1046))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(1046)
            ]
        ,
        modules: [
            "../components/layouts/main.js -> " + "../../libs/voxel-cwn"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ jsx_runtime_.jsx(voxel_cwn_loader/* default */.ZP, {
        })
});
const Main = ({ children , router  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        as: "main",
        pb: 8,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "code with nefaden"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar, {
                path: router.asPath
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
                maxW: "container.md",
                pt: 15,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(LazyVoxelCwn, {
                    }),
                    children
                ]
            })
        ]
    }));
};
/* harmony default export */ const main = (Main);

// EXTERNAL MODULE: ./libs/theme.js
var theme = __webpack_require__(4652);
;// CONCATENATED MODULE: ./pages/_app.js





const Website = ({ Component , pageProps , router  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
        theme: theme/* default */.Z,
        children: /*#__PURE__*/ jsx_runtime_.jsx(main, {
            router: router,
            children: /*#__PURE__*/ (0,external_react_.createElement)(Component, {
                ...pageProps,
                key: router.route
            })
        })
    }));
};
/* harmony default export */ const _app = (Website);


/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 429:
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 9034:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("three");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,486,652], () => (__webpack_exec__(9087)));
module.exports = __webpack_exports__;

})();