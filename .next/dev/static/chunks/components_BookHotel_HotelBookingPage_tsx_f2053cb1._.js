(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/BookHotel/HotelBookingPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HotelBookingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bed$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bed.js [app-client] (ecmascript) <export default as Bed>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const destinations = [
    {
        value: "17",
        label: "BAKKHALI"
    },
    {
        value: "28",
        label: "BOLPUR"
    },
    {
        value: "7",
        label: "DARJEELING"
    },
    {
        value: "22",
        label: "DEOLO - Kalimpong"
    },
    {
        value: "14",
        label: "DIGHA"
    },
    {
        value: "21",
        label: "GADIARA"
    },
    {
        value: "4",
        label: "GANGTOK - Sikkim"
    },
    {
        value: "24",
        label: "GOPALPUR - Odisha"
    },
    {
        value: "23",
        label: "HOME STAY - North Bengal"
    },
    {
        value: "26",
        label: "HOME STAY - Sikkim"
    },
    {
        value: "9",
        label: "JALDAPARA - Dooars"
    },
    {
        value: "11",
        label: "KALIMPONG"
    },
    {
        value: "27",
        label: "KOLAGHAT"
    },
    {
        value: "29",
        label: "KOLKATA / CALCUTTA"
    },
    {
        value: "12",
        label: "KURSEONG"
    },
    {
        value: "15",
        label: "LACHEN & LACHUNG - Sikkim"
    },
    {
        value: "8",
        label: "LATAGURI - Dooars"
    },
    {
        value: "13",
        label: "MANDARMONI"
    },
    {
        value: "10",
        label: "MURTI - Dooars"
    },
    {
        value: "6",
        label: "NEORA VALLEY - Rishyap"
    },
    {
        value: "19",
        label: "PELLING - Sikkim"
    },
    {
        value: "3",
        label: "PURI - Odisha"
    },
    {
        value: "20",
        label: "RAVANGLA - Sikkim"
    },
    {
        value: "5",
        label: "RISHYAP"
    },
    {
        value: "25",
        label: "ROURKELA - Odisha"
    },
    {
        value: "18",
        label: "SANTINIKETAN"
    },
    {
        value: "16",
        label: "SUNDARBAN"
    }
];
const roomTypes = {
    "17": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "28": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "7": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "22": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "14": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "21": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "4": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "24": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "23": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "26": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "9": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "11": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "27": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "29": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "12": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "13": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "15": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "8": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "6": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "19": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "10": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "3": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "20": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "5": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "16": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "25": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ],
    "18": [
        {
            value: "2000",
            label: "Basic",
            price: 2000
        },
        {
            value: "2800",
            label: "Standard",
            price: 2800
        },
        {
            value: "3700",
            label: "Deluxe",
            price: 3700
        },
        {
            value: "4600",
            label: "Super Deluxe",
            price: 4600
        },
        {
            value: "5500",
            label: "Executive",
            price: 5500
        },
        {
            value: "6400",
            label: "Royal",
            price: 6400
        },
        {
            value: "7300",
            label: "Premium",
            price: 7300
        },
        {
            value: "8200",
            label: "Super Premium",
            price: 8200
        },
        {
            value: "9100",
            label: "Luxury",
            price: 9100
        },
        {
            value: "15400",
            label: "Star Luxury",
            price: 15400
        }
    ]
};
const payments = [
    {
        title: "BANK TRANSFER / CASH DEPOSIT",
        img: "/payments/sbi.png",
        details: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Beneficiary:"
                    }, void 0, false, {
                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                        lineNumber: 374,
                        columnNumber: 12
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 374,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-pink-700 font-semibold",
                    children: "Bengal Tourism"
                }, void 0, false, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 375,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: " UPI:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 376,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " 9804333779@upi"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 376,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Phone:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 377,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " 9804333779"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 377,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Email:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 378,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " hotel.bengaltourism@gmail.com"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 378,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true)
    },
    {
        title: "PAY THROUGH BHARAT - UPI",
        img: "/payments/bhim.jpg",
        details: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: " UPI:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 387,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " 9804333779@okaxis"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 387,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Phone:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 388,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " 9804333779"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 388,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Email:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 389,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " hotel.bengaltourism@gmail.com"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 389,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true)
    },
    {
        title: "PHONEPE WALLET / UPI",
        img: "/payments/phonepe.jpg",
        details: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "UPI:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 398,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " 9804333779@ybl"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 398,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Phone:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 399,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " 9804333779"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 399,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Email:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 400,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " hotel.bengaltourism@gmail.com"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 400,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true)
    },
    {
        title: "AXIS PAY - UPI",
        img: "/payments/axispay.png",
        details: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "UPI:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 409,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " 9804333779@axisbank"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 409,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Phone:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 410,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " 9804333779"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 410,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Email:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 411,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " hotel.bengaltourism@gmail.com"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 411,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true)
    },
    {
        title: "PAYMENT GATEWAY",
        img: "/payments/gpay.png",
        details: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "UPI:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 420,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " 9804333779@okaxis"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 420,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Phone:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 421,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " 9804333779"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 421,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Email:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 422,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " hotel.bengaltourism@gmail.com"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 422,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true)
    },
    {
        title: "INTERNATIONAL FUND TRANSFER",
        img: "/payments/paypal.png",
        details: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Email:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 431,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " hotel.bengaltourism@gmail.com"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 431,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Mobile:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 432,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " 9804333779"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 432,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true)
    }
];
function HotelBookingPage() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        fullName: "",
        email: "",
        countryCode: "+91",
        phone: "",
        address: "",
        pinCode: "",
        destination: "",
        roomType: "",
        noOfRooms: 1,
        checkIn: "",
        checkOut: "",
        adults: 1,
        children: 0,
        specialInfo: "",
        preferredHotel: "",
        costPerRoom: "",
        totalNights: "",
        estimatedCost: "",
        bookingAmount: "",
        paymentType: "partial",
        promoCode: "",
        membershipNo: ""
    });
    const [availableRooms, setAvailableRooms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Helper function to format date to DD-MM-YYYY
    const formatDateToDDMMYYYY = (dateString)=>{
        if (!dateString) return '';
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };
    // Helper function to parse DD-MM-YYYY to YYYY-MM-DD for date input
    const parseDDMMYYYYToISO = (dateString)=>{
        if (!dateString) return '';
        // If already in ISO format, return as is
        if (dateString.includes('-') && dateString.split('-')[0].length === 4) {
            return dateString;
        }
        // Parse DD-MM-YYYY format
        const parts = dateString.split('-');
        if (parts.length === 3) {
            const [day, month, year] = parts;
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        }
        return dateString;
    };
    const handleInputChange = (field, value)=>{
        // Convert noOfRooms to integer if it's the field being updated
        if (field === "noOfRooms") {
            value = parseInt(value.toString()) || 1;
        }
        const newFormData = {
            ...formData,
            [field]: value
        };
        setFormData(newFormData);
        // Update available rooms when destination changes
        if (field === "destination") {
            const rooms = roomTypes[value] || [];
            setAvailableRooms(rooms);
            // Reset room type and cost when destination changes
            setFormData((prev)=>({
                    ...prev,
                    ...newFormData,
                    roomType: "",
                    costPerRoom: ""
                }));
        }
        // Update cost per room when room type changes
        if (field === "roomType") {
            const selectedRoom = availableRooms.find((room)=>room.value === value);
            if (selectedRoom) {
                setFormData((prev)=>({
                        ...prev,
                        ...newFormData,
                        costPerRoom: selectedRoom.price.toString()
                    }));
                // Trigger calculation after state update
                setTimeout(()=>calculateTotalsWithNewData(selectedRoom.price.toString(), newFormData.totalNights, newFormData.noOfRooms, newFormData.paymentType), 50);
            }
        }
        // Trigger calculation for relevant fields
        if (field === "noOfRooms" || field === "paymentType") {
            setTimeout(()=>calculateTotalsWithNewData(newFormData.costPerRoom, newFormData.totalNights, newFormData.noOfRooms, newFormData.paymentType), 50);
        }
    };
    const calculateTotalsWithNewData = (cost, nights, rooms, paymentType)=>{
        const costPerRoom = parseFloat(cost || "0");
        const totalNights = parseInt(nights || "0");
        const noOfRooms = parseInt(rooms?.toString() || "1");
        const total = costPerRoom * totalNights * noOfRooms;
        const bookingAmount = paymentType === "full" ? total : total * 0.5;
        setFormData((prev)=>({
                ...prev,
                estimatedCost: total.toString(),
                bookingAmount: bookingAmount.toString()
            }));
    };
    const calculateNights = (checkIn, checkOut)=>{
        if (checkIn && checkOut) {
            const checkInDate = new Date(parseDDMMYYYYToISO(checkIn));
            const checkOutDate = new Date(parseDDMMYYYYToISO(checkOut));
            if (!isNaN(checkInDate.getTime()) && !isNaN(checkOutDate.getTime())) {
                const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                if (diffDays > 0) {
                    setFormData((prev)=>{
                        const updated = {
                            ...prev,
                            totalNights: diffDays.toString()
                        };
                        // Trigger calculation with updated data
                        setTimeout(()=>calculateTotalsWithNewData(updated.costPerRoom, diffDays.toString(), updated.noOfRooms, updated.paymentType), 50);
                        return updated;
                    });
                }
            }
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/hotel-booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok && data.success) {
                alert('Hotel booking request submitted successfully! You will receive a confirmation email shortly.');
            // Reset form or redirect as needed
            // For now, just show success message
            } else {
                alert(data.error || 'Failed to submit booking request. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting booking:', error);
            alert('Failed to submit booking request. Please try again.');
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl shadow-lg p-6 md:p-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-center text-gray-900 mb-8",
                            children: "Hotel Booking"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 597,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-gray-900 mb-6 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "text-red-600"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 604,
                                            columnNumber: 17
                                        }, this),
                                        "Personal Information"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                    lineNumber: 603,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                    children: [
                                                        "Full Name ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 610,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 609,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: formData.fullName,
                                                    onChange: (e)=>handleInputChange("fullName", e.target.value),
                                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600",
                                                    placeholder: "Enter your full name",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 612,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 608,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                    children: [
                                                        "E-mail ID ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 623,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 622,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    value: formData.email,
                                                    onChange: (e)=>handleInputChange("email", e.target.value),
                                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600",
                                                    placeholder: "Enter your email address",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 625,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 621,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                    children: [
                                                        "Mobile No. (With country code) ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 636,
                                                            columnNumber: 52
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 635,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: formData.countryCode,
                                                            onChange: (e)=>handleInputChange("countryCode", e.target.value),
                                                            className: "w-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-600",
                                                            placeholder: "+91"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 639,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "tel",
                                                            value: formData.phone,
                                                            onChange: (e)=>handleInputChange("phone", e.target.value),
                                                            className: "flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-600",
                                                            placeholder: "Enter 10 digit mobile number",
                                                            maxLength: 10,
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 646,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 638,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 634,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                    children: [
                                                        "Address with Pin/Zip Code ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 659,
                                                            columnNumber: 47
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: formData.address,
                                                    onChange: (e)=>handleInputChange("address", e.target.value),
                                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600",
                                                    placeholder: "Enter your complete address",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 661,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: formData.pinCode,
                                                    onChange: (e)=>handleInputChange("pinCode", e.target.value),
                                                    className: "w-full mt-3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600",
                                                    placeholder: "Enter PIN/Zip Code",
                                                    maxLength: 6,
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 669,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 657,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                    lineNumber: 607,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 602,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-gray-900 mb-6 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bed$3e$__["Bed"], {
                                            className: "text-red-600"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 685,
                                            columnNumber: 17
                                        }, this),
                                        "Hotel Details"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                    lineNumber: 684,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                    children: [
                                                        "Destination ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 691,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: formData.destination,
                                                    onChange: (e)=>handleInputChange("destination", e.target.value),
                                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600",
                                                    required: true,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "-- Select --"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 699,
                                                            columnNumber: 21
                                                        }, this),
                                                        destinations.map((dest)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: dest.value,
                                                                children: dest.label
                                                            }, dest.value, false, {
                                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                lineNumber: 701,
                                                                columnNumber: 23
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 693,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 689,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                    children: [
                                                        "Room Type ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 709,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 708,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: formData.roomType,
                                                    onChange: (e)=>{
                                                        handleInputChange("roomType", e.target.value);
                                                    },
                                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600",
                                                    required: true,
                                                    disabled: !formData.destination,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "-- Select Room Type --"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 720,
                                                            columnNumber: 21
                                                        }, this),
                                                        availableRooms.map((room)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: room.value,
                                                                children: [
                                                                    room.label,
                                                                    " : ₹",
                                                                    room.price,
                                                                    "/-",
                                                                    " ",
                                                                    room.price === 2000 ? "(Without Breakfast)" : "(With Breakfast)"
                                                                ]
                                                            }, room.value, true, {
                                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                lineNumber: 722,
                                                                columnNumber: 3
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 711,
                                                    columnNumber: 19
                                                }, this),
                                                formData.costPerRoom && !formData.destination && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: [
                                                        "Room Type: ",
                                                        availableRooms.find((r)=>r.value === formData.costPerRoom)?.label || 'Selected',
                                                        " (Auto-set from cost)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 730,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 707,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                    children: [
                                                        "No. of Rooms ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 737,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 736,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: formData.noOfRooms,
                                                    onChange: (e)=>{
                                                        handleInputChange("noOfRooms", e.target.value);
                                                    },
                                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600",
                                                    required: true,
                                                    children: [
                                                        ...Array(10)
                                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: i + 1,
                                                            children: [
                                                                i + 1,
                                                                " ",
                                                                i === 0 ? 'Room' : 'Rooms'
                                                            ]
                                                        }, i + 1, true, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 748,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 739,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 735,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                    children: "Preferred Hotel Name / Similar"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 755,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: formData.preferredHotel,
                                                    onChange: (e)=>handleInputChange("preferredHotel", e.target.value),
                                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600",
                                                    placeholder: "Enter preferred hotel name or similar requirements"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 758,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 754,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                    children: "Special Information / Requirement"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 767,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: formData.specialInfo,
                                                    onChange: (e)=>handleInputChange("specialInfo", e.target.value),
                                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600",
                                                    rows: 4,
                                                    placeholder: "Extra requirements, special requests, etc."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 770,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 766,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                    lineNumber: 688,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 683,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-gray-900 mb-6 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "text-red-600"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 784,
                                            columnNumber: 17
                                        }, this),
                                        "Stay Dates"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                    lineNumber: 783,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                    children: [
                                                        "Check-in Date ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 790,
                                                            columnNumber: 35
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 789,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: parseDDMMYYYYToISO(formData.checkIn),
                                                    onChange: (e)=>{
                                                        const formattedDate = formatDateToDDMMYYYY(e.target.value);
                                                        const newFormData = {
                                                            ...formData,
                                                            checkIn: formattedDate
                                                        };
                                                        setFormData(newFormData);
                                                        // Auto calculate nights if check-out is already selected
                                                        if (newFormData.checkOut) {
                                                            calculateNights(formattedDate, newFormData.checkOut);
                                                        }
                                                    },
                                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 792,
                                                    columnNumber: 19
                                                }, this),
                                                formData.checkIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: [
                                                        "Selected: ",
                                                        formatDateToDDMMYYYY(parseDDMMYYYYToISO(formData.checkIn))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 808,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 788,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                    children: [
                                                        "Check-out Date ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 816,
                                                            columnNumber: 36
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 815,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: parseDDMMYYYYToISO(formData.checkOut),
                                                    onChange: (e)=>{
                                                        const formattedDate = formatDateToDDMMYYYY(e.target.value);
                                                        const newFormData = {
                                                            ...formData,
                                                            checkOut: formattedDate
                                                        };
                                                        setFormData(newFormData);
                                                        // Auto calculate nights whenever check-out changes
                                                        if (newFormData.checkIn) {
                                                            calculateNights(newFormData.checkIn, formattedDate);
                                                        }
                                                    },
                                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 818,
                                                    columnNumber: 19
                                                }, this),
                                                formData.checkOut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: [
                                                        "Selected: ",
                                                        formatDateToDDMMYYYY(parseDDMMYYYYToISO(formData.checkOut))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 834,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 814,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                    children: [
                                                        "Total No. of Nights ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 841,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 840,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: formData.totalNights,
                                                    readOnly: true,
                                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600 bg-gray-50",
                                                    placeholder: "Auto-calculated from dates",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 843,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "Auto-calculated from check-in and check-out dates"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 851,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 839,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                    children: [
                                                        "No. of Adults ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 857,
                                                            columnNumber: 35
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 856,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: formData.adults,
                                                    onChange: (e)=>handleInputChange("adults", parseInt(e.target.value) || 0),
                                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600",
                                                    min: "1",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 859,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 855,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                    children: "No. of Children (5–10 yrs)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 869,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: formData.children,
                                                    onChange: (e)=>handleInputChange("children", parseInt(e.target.value) || 0),
                                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600",
                                                    min: "0"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 872,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 868,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                    lineNumber: 787,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 782,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-gray-900 mb-6 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-600",
                                            children: "₹"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 886,
                                            columnNumber: 17
                                        }, this),
                                        "Pricing Details"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                    lineNumber: 885,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                    children: [
                                                        "Cost per Room (per night) ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 892,
                                                            columnNumber: 47
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 891,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            className: "px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-500",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "INR"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                lineNumber: 896,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 895,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: formData.costPerRoom,
                                                            onChange: (e)=>{
                                                                const newCost = e.target.value;
                                                                const newFormData = {
                                                                    ...formData,
                                                                    costPerRoom: newCost
                                                                };
                                                                setFormData(newFormData);
                                                                // Update room type to match cost per room
                                                                const matchedRoom = availableRooms.find((room)=>room.price.toString() === newCost);
                                                                if (matchedRoom) {
                                                                    setFormData((prev)=>({
                                                                            ...prev,
                                                                            costPerRoom: newCost,
                                                                            roomType: matchedRoom.value
                                                                        }));
                                                                }
                                                                // Calculate totals if we have nights
                                                                if (formData.totalNights && parseInt(formData.totalNights) > 0) {
                                                                    calculateTotalsWithNewData(newCost, formData.totalNights, formData.noOfRooms, formData.paymentType);
                                                                } else {
                                                                    alert("Please select check-in and check-out dates first to calculate the total price.");
                                                                }
                                                            },
                                                            className: "flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600",
                                                            required: true,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Select Cost"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 921,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "2000",
                                                                    children: "2000 - Basic"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 922,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "2800",
                                                                    children: "2800 - Standard"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 923,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "3700",
                                                                    children: "3700 - Deluxe"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 924,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "4600",
                                                                    children: "4600 - Super Deluxe"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 925,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "5500",
                                                                    children: "5500 - Executive"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 926,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "6400",
                                                                    children: "6400 - Royal"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 927,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "7300",
                                                                    children: "7300 - Premium"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 928,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "8200",
                                                                    children: "8200 - Super Premium"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 929,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "9100",
                                                                    children: "9100 - Luxury"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 930,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "15400",
                                                                    children: "15400 - Star Luxury"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 931,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 898,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 894,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 890,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                    children: [
                                                        "Estimated Cost ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 938,
                                                            columnNumber: 36
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 937,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            className: "px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-500",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "INR"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                lineNumber: 942,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 941,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: formData.estimatedCost,
                                                            readOnly: true,
                                                            className: "flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600",
                                                            placeholder: "Auto-calculated"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 944,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 940,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 936,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                    children: [
                                                        "Booking Confirmation (50% of Estimated Cost) ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 955,
                                                            columnNumber: 66
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 954,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            className: "px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-500",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "INR"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                lineNumber: 959,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 958,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: formData.bookingAmount,
                                                            readOnly: true,
                                                            className: "flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600",
                                                            placeholder: "Auto-calculated"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 961,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 957,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 953,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                    lineNumber: 889,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 884,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-gray-900 mb-6 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                            className: "text-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 976,
                                            columnNumber: 17
                                        }, this),
                                        "Payment Type ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 977,
                                            columnNumber: 30
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                    lineNumber: 975,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-3 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "payment",
                                                    value: "full",
                                                    checked: formData.paymentType === "full",
                                                    onChange: (e)=>{
                                                        handleInputChange("paymentType", e.target.value);
                                                    },
                                                    className: "w-4 h-4 text-blue-600 focus:ring-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 981,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-gray-700",
                                                    children: "Full Payment"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 991,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 980,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-3 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "payment",
                                                    value: "partial",
                                                    checked: formData.paymentType === "partial",
                                                    onChange: (e)=>{
                                                        handleInputChange("paymentType", e.target.value);
                                                    },
                                                    className: "w-4 h-4 text-blue-600 focus:ring-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 994,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-blue-600",
                                                    children: "50% Payment"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 1004,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 993,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                    lineNumber: 979,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 974,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-50 rounded-lg p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-start gap-3 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        required: true,
                                        className: "mt-1 w-4 h-4 text-red-600 focus:ring-red-500 rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                        lineNumber: 1012,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-700 leading-relaxed",
                                        children: "I accept: Submission without successful payment is not valid. Please remember to save of acknowledgement after you hit Submit Button (&/or) payment confirmation from Bank. In case of manual submission of Booking Form via e-mail, we will send the confirmation of receipt & booking details via E-mail / WhatsApp after we acknowledge receipt of valid payment at our Bank. I also agree to accept any similar hotel rooms provided by you and be liable to pay for any extra cost as per your special instructions, extra provision required, extra person/bed (1 child under 4 yrs free & other person above 4 Yrs chargeable) to be provided (&) Service Charges/GST will be calculated & paid later on acceptance & as per final invoice/bill."
                                    }, void 0, false, {
                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                        lineNumber: 1017,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                lineNumber: 1011,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 1010,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-700 text-white text-center py-2 text-sm font-semibold",
                            children: "Proceed to PAY using any mode given below. Earn Cash-Back upto Rs.10000/-"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 1024,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 border-t",
                            children: payments.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-r border-b last:border-r-0 p-4 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: item.img,
                                                alt: item.title,
                                                className: "h-20 object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 1036,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 1035,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-bold text-pink-700 mb-3",
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 1043,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-800 space-y-1",
                                            children: item.details
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 1047,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                    lineNumber: 1031,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 1029,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isSubmitting,
                                className: "bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
                                children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin inline-block mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 1063,
                                            columnNumber: 21
                                        }, this),
                                        "Processing..."
                                    ]
                                }, void 0, true) : 'SUBMIT after PAYMENT'
                            }, void 0, false, {
                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                lineNumber: 1056,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 1055,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 596,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                lineNumber: 595,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
            lineNumber: 594,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
        lineNumber: 593,
        columnNumber: 5
    }, this);
}
_s(HotelBookingPage, "itiLvPCDJtX+0DooLo+d5RyLfVE=");
_c = HotelBookingPage;
var _c;
__turbopack_context__.k.register(_c, "HotelBookingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_BookHotel_HotelBookingPage_tsx_f2053cb1._.js.map