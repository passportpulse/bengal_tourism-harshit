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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/qr-code.js [app-client] (ecmascript) <export default as QrCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
            value: "21000",
            label: "Star Luxury",
            price: 21000
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
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Name:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 375,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " Bengal Tourism. In"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 375,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Bank:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 376,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " State Bank of India (SBI)"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 376,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Branch:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 377,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " Kestopur"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 377,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "CA No.:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 378,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " 33530363411"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 378,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "IFS Code:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 379,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " SBIN 0014534"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 379,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "UPI:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 380,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " bengaltourism@upi"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 380,
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
                            children: "UPI:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 389,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        "bengaltourism@upi"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 389,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: " UPI:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 390,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " 9804333779@okaxis"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 390,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Phone:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 391,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " 9804333779"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 391,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Email:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 392,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " hotel.bengaltourism@gmail.com"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 392,
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
                            lineNumber: 401,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        "bengaltourism@ybl"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 401,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "UPI:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 402,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " 9804333779@ybl"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 402,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Phone:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 403,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " 9804333779"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 403,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Email:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 404,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " hotel.bengaltourism@gmail.com"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 404,
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
                            lineNumber: 413,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        "bengaltourism@axisbank"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 413,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "UPI:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 414,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " 9804333779@axisbank"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 414,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Phone:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 415,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " 9804333779"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 415,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Email:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 416,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " hotel.bengaltourism@gmail.com"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 416,
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
                            lineNumber: 425,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        "bengaltourism@okaxis"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 425,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "UPI:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 426,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " 9804333779@okaxis"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 426,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Phone:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 427,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " 9804333779"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 427,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Email:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 428,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " hotel.bengaltourism@gmail.com"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 428,
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
                            lineNumber: 437,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " bengaltourism@gmail.com"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 437,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Mobile:"
                        }, void 0, false, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 438,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        " 9804333779"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                    lineNumber: 438,
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
        adults: 2,
        children: 0,
        below5Children: 0,
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
    const [selectedPayment, setSelectedPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showPaymentModal, setShowPaymentModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPaymentType, setSelectedPaymentType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
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
    const handlePaymentClick = (paymentIndex, paymentTitle)=>{
        setSelectedPayment(paymentIndex);
        setSelectedPaymentType(paymentTitle);
        setShowPaymentModal(true);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        try {
            // Find destination label from the destinations array
            const destinationLabel = destinations.find((d)=>d.value === formData.destination)?.label || formData.destination;
            // Create submission data with destination label instead of value
            const submissionData = {
                ...formData,
                destination: destinationLabel // Send the label instead of value
            };
            const response = await fetch('/api/hotel-booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(submissionData)
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
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-center text-gray-900 mb-8",
                                children: "Hotel Booking"
                            }, void 0, false, {
                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                lineNumber: 623,
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
                                                lineNumber: 630,
                                                columnNumber: 17
                                            }, this),
                                            "Personal Information"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                        lineNumber: 629,
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
                                                                lineNumber: 636,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 635,
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
                                                            "E-mail ID ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                lineNumber: 649,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 648,
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
                                                        lineNumber: 651,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 647,
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
                                                                lineNumber: 662,
                                                                columnNumber: 52
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 661,
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
                                                                lineNumber: 665,
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
                                                                lineNumber: 672,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 664,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 660,
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
                                                                lineNumber: 685,
                                                                columnNumber: 47
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 684,
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
                                                        lineNumber: 687,
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
                                                        lineNumber: 695,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 683,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                        lineNumber: 633,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                lineNumber: 628,
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
                                                lineNumber: 711,
                                                columnNumber: 17
                                            }, this),
                                            "Hotel Details"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                        lineNumber: 710,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
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
                                                                lineNumber: 717,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 716,
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
                                                                lineNumber: 725,
                                                                columnNumber: 21
                                                            }, this),
                                                            destinations.map((dest)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: dest.value,
                                                                    children: dest.label
                                                                }, dest.value, false, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 727,
                                                                    columnNumber: 23
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 719,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 715,
                                                columnNumber: 17
                                            }, this),
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
                                                                lineNumber: 735,
                                                                columnNumber: 35
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 734,
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
                                                        lineNumber: 737,
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
                                                        lineNumber: 753,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 733,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                                        children: "Preferred Hotel Name / Similar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 760,
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
                                                        lineNumber: 763,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 759,
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
                                                                lineNumber: 774,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 773,
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
                                                                lineNumber: 785,
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
                                                                        room.price === 2000 ? "(Without Breakfast)" : room.price === 21000 ? "(With Breakfast & Dinner)" : "(With Breakfast)"
                                                                    ]
                                                                }, room.value, true, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 787,
                                                                    columnNumber: 23
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 776,
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
                                                        lineNumber: 799,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 772,
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
                                                                lineNumber: 807,
                                                                columnNumber: 36
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 806,
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
                                                        lineNumber: 809,
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
                                                        lineNumber: 825,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 805,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                                        children: [
                                                            "Total Cost ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                lineNumber: 832,
                                                                columnNumber: 32
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 831,
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
                                                                    lineNumber: 836,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                lineNumber: 835,
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
                                                                lineNumber: 838,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 834,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 830,
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
                                                                lineNumber: 852,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 851,
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
                                                                lineNumber: 863,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 854,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 850,
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
                                                                lineNumber: 871,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 870,
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
                                                        lineNumber: 873,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 mt-1",
                                                        children: "Auto-calculated from check-in and check-out dates"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 881,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 869,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                                        children: "Special Information / Requirement"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 888,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: formData.specialInfo,
                                                        onChange: (e)=>handleInputChange("specialInfo", e.target.value),
                                                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600",
                                                        rows: 1,
                                                        placeholder: "Extra requirements, special requests, etc."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 891,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 887,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                        lineNumber: 714,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                lineNumber: 709,
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
                                                lineNumber: 905,
                                                columnNumber: 17
                                            }, this),
                                            "Stay No of person"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                        lineNumber: 904,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1  md:grid-cols-3 gap-6",
                                        children: [
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
                                                                lineNumber: 913,
                                                                columnNumber: 35
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 912,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: formData.adults,
                                                        onChange: (e)=>handleInputChange("adults", parseInt(e.target.value) || 0),
                                                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600",
                                                        min: "2",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 915,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 911,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                                        children: "No. of Children (5–10 yrs)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 925,
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
                                                        lineNumber: 928,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 924,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                                        children: "No. of Children (Below 5 Years) Free"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 937,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: formData.below5Children,
                                                        onChange: (e)=>handleInputChange("below5Children", parseInt(e.target.value) || 0),
                                                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600",
                                                        min: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 940,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 936,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                        lineNumber: 908,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                lineNumber: 903,
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
                                                lineNumber: 954,
                                                columnNumber: 17
                                            }, this),
                                            "Pricing Details"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                        lineNumber: 953,
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
                                                                lineNumber: 960,
                                                                columnNumber: 47
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 959,
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
                                                                    lineNumber: 964,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                lineNumber: 963,
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
                                                                        lineNumber: 989,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "2000",
                                                                        children: "2000 - Basic"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                        lineNumber: 990,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "2800",
                                                                        children: "2800 - Standard"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                        lineNumber: 991,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "3700",
                                                                        children: "3700 - Deluxe"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                        lineNumber: 992,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "4600",
                                                                        children: "4600 - Super Deluxe"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                        lineNumber: 993,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "5500",
                                                                        children: "5500 - Executive"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                        lineNumber: 994,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "6400",
                                                                        children: "6400 - Royal"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                        lineNumber: 995,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "7300",
                                                                        children: "7300 - Premium"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                        lineNumber: 996,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "8200",
                                                                        children: "8200 - Super Premium"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                        lineNumber: 997,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "9100",
                                                                        children: "9100 - Luxury"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                        lineNumber: 998,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "21000",
                                                                        children: "21000 - Star Luxury"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                        lineNumber: 999,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                lineNumber: 966,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 962,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 958,
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
                                                                lineNumber: 1006,
                                                                columnNumber: 36
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 1005,
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
                                                                    lineNumber: 1010,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                lineNumber: 1009,
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
                                                                lineNumber: 1012,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 1008,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 1004,
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
                                                                lineNumber: 1023,
                                                                columnNumber: 66
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 1022,
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
                                                                    lineNumber: 1027,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                lineNumber: 1026,
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
                                                                lineNumber: 1029,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 1025,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 1021,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                        lineNumber: 957,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                lineNumber: 952,
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
                                                lineNumber: 1044,
                                                columnNumber: 17
                                            }, this),
                                            "Payment Type ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 1045,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                        lineNumber: 1043,
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
                                                        lineNumber: 1049,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-gray-700",
                                                        children: "Full Payment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 1059,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 1048,
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
                                                        lineNumber: 1062,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-blue-600",
                                                        children: "50% Payment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 1072,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 1061,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                        lineNumber: 1047,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                lineNumber: 1042,
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
                                            lineNumber: 1080,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-700 leading-relaxed",
                                            children: "I accept: Submission without successful payment is not valid. Please remember to save of acknowledgement after you hit Submit Button (&/or) payment confirmation from Bank. In case of manual submission of Booking Form via e-mail, we will send the confirmation of receipt & booking details via E-mail / WhatsApp after we acknowledge receipt of valid payment at our Bank. I also agree to accept any similar hotel rooms provided by you and be liable to pay for any extra cost as per your special instructions, extra provision required, extra person/bed (1 child under 4 yrs free & other person above 4 Yrs chargeable) to be provided (&) Service Charges/GST will be calculated & paid later on acceptance & as per final invoice/bill."
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 1085,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                    lineNumber: 1079,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                lineNumber: 1078,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-red-700 text-white text-center py-2 text-sm font-semibold",
                                children: "Proceed to PAY using any mode given below. Earn Cash-Back upto Rs.10000/-"
                            }, void 0, false, {
                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                lineNumber: 1092,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 border-t",
                                children: payments.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `border-r border-b last:border-r-0 p-4 text-center cursor-pointer relative transition-all ${selectedPayment === i ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50'}`,
                                        onClick: ()=>handlePaymentClick(i, item.title),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-2 right-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-5 h-5 border-2 rounded flex items-center justify-center transition-all ${selectedPayment === i ? 'bg-blue-600 border-blue-600' : 'border-gray-300 bg-white'}`,
                                                    children: selectedPayment === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-3 h-3 text-white",
                                                        fill: "currentColor",
                                                        viewBox: "0 0 20 20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 1120,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 1115,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 1108,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 1107,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center mb-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: item.img,
                                                    alt: item.title,
                                                    className: "h-20 object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 1131,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 1130,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-bold text-pink-700 mb-3",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 1138,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-800 space-y-1",
                                                children: item.details
                                            }, void 0, false, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 1142,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                        lineNumber: 1100,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                lineNumber: 1098,
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
                                                lineNumber: 1158,
                                                columnNumber: 21
                                            }, this),
                                            "Processing..."
                                        ]
                                    }, void 0, true) : 'SUBMIT after PAYMENT'
                                }, void 0, false, {
                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                    lineNumber: 1151,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                lineNumber: 1150,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                        lineNumber: 622,
                        columnNumber: 11
                    }, this),
                    showPaymentModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black/60 bg-opacity-60 backdrop-blur-md flex items-center justify-center z-50 p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-t-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__["QrCode"], {
                                                            className: "w-6 h-6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 1177,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Payment Details"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 1176,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setShowPaymentModal(false),
                                                    className: "text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                        lineNumber: 1184,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 1180,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 1175,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm mt-2 opacity-90",
                                            children: selectedPaymentType
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 1187,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                    lineNumber: 1174,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center mb-6",
                                            children: selectedPaymentType.includes("SBI") || selectedPaymentType.includes("BANK TRANSFER") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 p-4 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-gray-800 mb-3",
                                                            children: "Bank Transfer Details"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 1197,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-left text-gray-500 space-y-2 text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            children: "Name:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                            lineNumber: 1199,
                                                                            columnNumber: 32
                                                                        }, this),
                                                                        " Bengal Tourism. In"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 1199,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            children: "Bank:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                            lineNumber: 1200,
                                                                            columnNumber: 32
                                                                        }, this),
                                                                        " State Bank of India (SBI)"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 1200,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            children: "Branch:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                            lineNumber: 1201,
                                                                            columnNumber: 32
                                                                        }, this),
                                                                        " Kestopur"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 1201,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            children: "CA No.:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                            lineNumber: 1202,
                                                                            columnNumber: 32
                                                                        }, this),
                                                                        " 33530363411"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 1202,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            children: "IFS Code:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                            lineNumber: 1203,
                                                                            columnNumber: 32
                                                                        }, this),
                                                                        " SBIN 0014534"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 1203,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            children: "UPI:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                            lineNumber: 1204,
                                                                            columnNumber: 32
                                                                        }, this),
                                                                        " bengaltourism@upi"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 1204,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 1198,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 1196,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 1195,
                                                columnNumber: 23
                                            }, this) : selectedPaymentType.includes("BHARAT") || selectedPaymentType.includes("PAYMENT GATEWAY") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 p-4 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-gray-800 mb-3",
                                                            children: "Scan QR Code"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 1211,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/Qr/gpay.jpeg",
                                                            alt: "Google Pay QR Code",
                                                            className: "w-86 h-86 mx-auto  object-contain p-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 1212,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-left text-gray-500 space-y-2 text-sm mt-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            children: "UPI:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                            lineNumber: 1218,
                                                                            columnNumber: 32
                                                                        }, this),
                                                                        " bengaltourism@upi"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 1218,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            children: "UPI:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                            lineNumber: 1219,
                                                                            columnNumber: 32
                                                                        }, this),
                                                                        " 9804333779@okaxis"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 1219,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            children: "Phone:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                            lineNumber: 1220,
                                                                            columnNumber: 32
                                                                        }, this),
                                                                        " 9804333779"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 1220,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            children: "Email:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                            lineNumber: 1221,
                                                                            columnNumber: 32
                                                                        }, this),
                                                                        " hotel.bengaltourism@gmail.com"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 1221,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 1217,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 1210,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 1209,
                                                columnNumber: 23
                                            }, this) : selectedPaymentType.includes("PHONEPE") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 p-4 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold  text-gray-800 mb-3",
                                                            children: "Scan QR Code"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 1228,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/Qr/phonpau.jpeg",
                                                            alt: "PhonePe QR Code",
                                                            className: "w-86 h-86 mx-auto  object-contain p-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 1229,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-left text-gray-500 space-y-2 text-sm mt-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            children: "UPI:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                            lineNumber: 1235,
                                                                            columnNumber: 32
                                                                        }, this),
                                                                        " bengaltourism@ybl"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 1235,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            children: "UPI:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                            lineNumber: 1236,
                                                                            columnNumber: 32
                                                                        }, this),
                                                                        " 9804333779@ybl"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 1236,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            children: "Phone:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                            lineNumber: 1237,
                                                                            columnNumber: 32
                                                                        }, this),
                                                                        " 9804333779"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 1237,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            children: "Email:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                            lineNumber: 1238,
                                                                            columnNumber: 32
                                                                        }, this),
                                                                        " hotel.bengaltourism@gmail.com"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 1238,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 1234,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 1227,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 1226,
                                                columnNumber: 23
                                            }, this) : selectedPaymentType.includes("AXIS") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 p-4 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-gray-800 mb-3",
                                                            children: "Scan QR Code"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 1245,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/Qr/axix.jpeg",
                                                            alt: "Axis Bank QR Code",
                                                            className: "w-86 h-86 mx-auto  object-contain p-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 1246,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-left  text-gray-500 space-y-2 text-sm mt-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            children: "UPI:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                            lineNumber: 1252,
                                                                            columnNumber: 32
                                                                        }, this),
                                                                        " bengaltourism@axisbank"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 1252,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            children: "UPI:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                            lineNumber: 1253,
                                                                            columnNumber: 32
                                                                        }, this),
                                                                        " 9804333779@axisbank"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 1253,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            children: "Phone:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                            lineNumber: 1254,
                                                                            columnNumber: 32
                                                                        }, this),
                                                                        " 9804333779"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 1254,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            children: "Email:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                            lineNumber: 1255,
                                                                            columnNumber: 32
                                                                        }, this),
                                                                        " hotel.bengaltourism@gmail.com"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 1255,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 1251,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 1244,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 1243,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 p-4 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-gray-800 mb-3",
                                                            children: "Payment Information"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 1262,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-left  text-gray-500 space-y-2 text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            children: "Email:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                            lineNumber: 1264,
                                                                            columnNumber: 32
                                                                        }, this),
                                                                        " bengaltourism@gmail.com"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 1264,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            children: "Mobile:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                            lineNumber: 1265,
                                                                            columnNumber: 32
                                                                        }, this),
                                                                        " 9804333779"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                                    lineNumber: 1265,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 1263,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 1261,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                lineNumber: 1260,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 1193,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold text-blue-800 mb-2",
                                                    children: "Payment Instructions:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 1274,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                    className: "text-sm text-blue-700 space-y-1 list-decimal list-inside",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "Complete the payment using the details above"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 1276,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "Take a screenshot of the payment confirmation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 1277,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "Share the screenshot on WhatsApp"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 1278,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 1275,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 1273,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        const phoneNumber = "9007995888";
                                                        const message = encodeURIComponent(`Hello, I have made a hotel booking payment for ${formData.destination || "my booking"}. Please find the payment confirmation attached.`);
                                                        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                                                    },
                                                    className: "flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 1292,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Share on WhatsApp"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 1284,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setShowPaymentModal(false),
                                                    className: "flex-1 bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg font-semibold transition-all",
                                                    children: "Close"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 1295,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 1283,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 text-center text-sm text-gray-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "WhatsApp Number: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold",
                                                            children: "9007995888"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                            lineNumber: 1305,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 1305,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs mt-1",
                                                    children: "Please share payment screenshot on this number"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                                    lineNumber: 1306,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                            lineNumber: 1304,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                                    lineNumber: 1191,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                            lineNumber: 1172,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                        lineNumber: 1171,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
                lineNumber: 621,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
            lineNumber: 620,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/BookHotel/HotelBookingPage.tsx",
        lineNumber: 619,
        columnNumber: 5
    }, this);
}
_s(HotelBookingPage, "DBDWVNOLkG/SH2yRev6PA1i/hu4=");
_c = HotelBookingPage;
var _c;
__turbopack_context__.k.register(_c, "HotelBookingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_BookHotel_HotelBookingPage_tsx_f2053cb1._.js.map