const laptops = [
    {
        id: 1,
        Brand: "HP",
        description: "HP 14 Laptop, Intel Celeron N4020, 4 GB RAM, 64 GB Storage, 14-inch HD Touchscreen, Windows 11 Home, Thin & Portable, 4K Graphics, One Year of Microsoft 365 (14-dq0080nr, 2021, Snowflake White)",
        price: 137,
        img: "HP-1.png"
    },
    {
        id: 2,
        Brand: "HP",
        description: "HP Laptop, 17.3” HD+ Touchscreen Display, Intel Core i7-1255U Processor, 32GB RAM, 1TB PCIe SSD, Backlit Keyboard, Fingerprint Reader, Wi-Fi, Windows 11 Home, Silver",
        price: 849,
        img: "HP-2.png"
    },

    {
        id: 3,
        Brand: "HP",
        description: "HP 14 Laptop, Intel Celeron N4020, 4 GB RAM, 64 GB Storage, 14-inch Micro-edge HD Display, Windows 11 Home, Thin & Portable, 4K Graphics, One Year of Microsoft 365 (14-dq0010nr, 2021, Indigo Blue)",
        price: 211,
        img: "HP-3.png"
    },

    {
        id: 4,
        Brand: "HP",
        description: "HP 2022 Newest Stream 14' HD Display, Intel Celeron N4120 Processor, 4GB Memory - 64GB eMMC,WiFi,Bluetooth, Type-C, 802.11AC, Win10 S - Snowflake White",
        price: 116,
        img: "HP-4.png"
    },
    {
        id: 5,
        Brand: "HP",
        description: "HP - Pavilion x360 2-in-1 14' Touch-Screen Laptop - Intel Core i5-8GB Memory - 512GB SSD - Natural Silver - Mode 14-ek0033dx",
        price: 357,
        img: "HP-5.png"
    },
    {
        id: 6,
        Brand: "HP",
        description: "HP Portable Laptop, Student and Business, 14' HD Display, Intel Quad-Core N4120, 4GB DDR4 RAM, 64GB eMMC, 1 Year Office 365, Webcam, RJ-45, HDMI, Wi-Fi, Windows 11 Home, Silver",
        price: 209,
        img: "HP-6.png"
    },
    {
        id: 7,
        Brand: "HP",
        description: "HP EliteBook 840 G3 Business Laptop, 14in 840G3 Laptop, Core i5-6300U 3.0GHz, 16GB RAM, 1TB SSD, Webcam, Win10 pro(Renewed)",
        price: 225,
        img: "HP-7.png"
    },
    {
        id: 8,
        Brand: "ASUS",
        description: "ASUS Zenbook Pro 14 OLED 14.5â€ OLED 16:10 Touch Display, DialPad, Intel i9-13900H CPU, GeForce RTX 4070 Graphics, 32GB RAM, 1TB SSD, Windows 11 Home, Tech Black, UX6404VI-DS96T",
        price: 1524,
        img: "ASUS-1.png"
    },
    {
        id: 9,
        Brand: "ASUS",
        description: "ASUS ROG Strix G17 (2023) Gaming Laptop, 17.3” QHD 240Hz, GeForce RTX 4070, AMD Ryzen 9 7945HX, 16GB DDR5, 1TB PCIe SSD, Wi-Fi 6E, Windows 11, G713PI-DS94 Eclipse Gray",
        price: 1367,
        img: "ASUS-2.png"
    },
    {
        id: 10,
        Brand: "ASUS",
        description: "ASUS Zenbook Pro 16 Laptop 16' 165Hz Refresh Rate Display, Intel i7-12650H CPU, DialPad, NVidia GeForce RTX 3070 Ti Graphics, 32GB RAM, 1TB SSD, Windows 11 Home, Tech Black, UX6601ZW-DB76",
        price: 1223,
        img: "ASUS-3.png"
    },
    {
        id: 11,
        Brand: "ASUS",
        description: "ASUS Zenbook Pro 14 Duo 14.5” 16:10 Touch Display, 120Hz Refresh Rate, ScreenPad Plus, Intel i9-13900H CPU, NVIDIA® Geforce RTX 4060, 32GB RAM, 1TB SSD, Windows 11 Home, Tech Black, UX8402VV-PS96T",
        price: 1827,
        img: "ASUS-4.png"
    },
    {
        id: 12,
        Brand: "ASUS",
        description: "Asus Newest 14' FHD Chromebook Laptop, Intel Core m3-8100Y(up to 3.4 GHz), 128GB Space(64GB eMMC+64GB Card), 8GB RAM, Webcam, WiFi, USB, Bluetooth, Backlit Keyboard, Chrome OS, Silver, JVQ MP",
        price: 289,
        img: "ASUS-5.png"
    },
    {
        id: 13,
        Brand: "ASUS",
        description: "ASUS ZenScreen 15.6” 1080P Portable Monitor (MB16ACV) - Full HD, IPS, Eye Care, Flicker Free, Blue Light Filter, Kickstand, USB-C Power Delivery, for Laptop, PC, Phone, Console",
        price: 81,
        img: "ASUS-6.png"
    },
    {
        id: 14,
        Brand: "ASUS",
        description: "Asus Chromebook CR1 CR1100CKA-YZ142 11.6 Rugged Chromebook - HD - 1366 x 768 - Intel Celeron N5100 Quad-core [4 Core] 1.10 GHz - 4 GB Total RAM - 32 GB Flash Memory - Dark Gray",
        price: 169,
        img: "ASUS-7.png"
    },
    {
        id: 15,
        Brand: "Dell",
        description: "Dell XPS 13 9315 13.4' FHD+ (Intel 10-Core i7-1250U, 32GB LPDDR5 RAM, 1TB SSD) Thin & Light Business Laptop, 12-Hr Long Battery Life, Thunderbolt 4, Webcam, Backlit, Fingerprint, Wi-Fi 6E, Win 11 Pro",
        price: 1123,
        img: "Dell-1.png"
    },
    {
        id: 16,
        Brand: "Dell",
        description: "Dell Latitude 3000 3140 2-in-1 Laptop (11.6' HD Touchscreen, Intel N200, 8GB DDR5 RAM, 128GB SSD, 4-Core (Beat i5-8250U)) Student & Business, Long Battery Life, Wi-Fi, HDMI, Webcam, Win 11 Pro, Grey",
        price: 349,
        img: "Dell-2.png"
    },
    {
        id: 17,
        Brand: "Dell",
        description: "Dell 2022 Newest Inspiron 7415 2-in-1 Touchscreen Laptop, 14' Full HD, AMD Ryzen 5 5500U (6-core), 8GB RAM, 512GB PCIe SSD, HDMI, WiFi-6, Webcam, FP Reader, Backlit KB, Windows 11 Home, Blue",
        price: 449,
        img: "Dell-3.png"
    },
    {
        id: 18,
        Brand: "Dell",
        description: "Dell XPS 13 9315 13.4' FHD+ (Intel 10-Core i7-1250U, 16GB LPDDR5 RAM, 512GB SSD) Thin & Light Business Laptop, Long Battery Life, Thunderbolt 4, IR Webcam, Backlit, Fingerprint, Wi-Fi 6E, Win 11 Home",
        price: 1099,
        img: "Dell-4.png"
    },
    {
        id: 19,
        Brand: "Dell",
        description: "Dell Inspiron 16 5620 Laptop - 16.0-inch 16:10 FHD+ (1920 x 1200) Display, Intel Core i5-1235U, 8GB Memory, 512GB SSD, Intel UHD Graphics, Intel Wi-Fi 6E, Windows 11 Home - Platinum Silver",
        price: 560,
        img: "Dell-5.png"
    },
    {
        id: 20,
        Brand: "Dell",
        description: "Dell XPS 15 9520 15.6' FHD+ (Intel 12th Gen 14-Core i7-12700H (Beat i9-11980HK), 64GB DDR5 RAM, 2TB PCIe SSD, RTX 3050) Business Laptop, Backlit, Fingerprint, Thunderbolt 4, Webcam, Win 11 Home",
        price: 1896,
        img: "Dell-6.png"
    },
    {
        id: 21,
        Brand: "Dell",
        description: "Dell Latitude 7420 Business FHD Laptop (Intel i5-1145G7 vPro Upto 4.4 GHz, 16GB RAM, 2TB PCIe SSD, Intel Iris Xe, 14.0' 60 Hz, WiFi 6, Bluetooth 5.2, Webcam, Micro SD Reader, Win11Pro)",
        price: 769,
        img: "Dell-7.png"
    },
    {
        id: 22,
        Brand: "lenovo",
        description: "Lenovo IdeaPad 3i 14 Laptop, Student and Business, 14' FHD Screen, Intel i3-1115G4 Processor, 20GB RAM, 1TB SSD, HDMI, Media Card Reader, Webcam, Dolby Audio, Wi-Fi 6, Windows 11 Home, Platinum Grey",
        price: 375,
        img: "lenovo-1.png"
    },
    {
        id: 23,
        Brand: "lenovo",
        description: "Lenovo IdeaPad Slim 3 - (2023) - Everyday Laptop - Lightweight - Windows 11-15.6' FHD - 8GB Memory - 256GB Storage - AMD Ryzen 3 7320U - Arctic Grey",
        price: 236,
        img: "lenovo-2.png"
    },
    {
        id: 24,
        Brand: "lenovo",
        description: "Lenovo V15 Gen 4 Business Laptop, 15.6' FHD Display, AMD Ryzen 3 7320U, 16GB RAM, 1TB PCIe SSD, Webcam, Type-C, HDMI, RJ45, Wi-Fi, Windows 11 Home, Black",
        price: 429,
        img: "lenovo-3.png"
    },
    {
        id: 25,
        Brand: "lenovo",
        description: "Lenovo ThinkPad X13 Gen 2 Intel Evo Platform Business Laptop 13.3' Touchscreen WUXGA IPS (Intel i5-1135G7, 16GB RAM, 512GB SSD, Backlit KYB, Fingerprint, 2 Thunderbolt 4, Win11P) w/Dockztorm Hub",
        price: 664,
        img: "lenovo-4.png"
    },
    {
        id: 26,
        Brand: "lenovo",
        description: "Lenovo ThinkPad E16 Gen 1 21JN0073US 16' Notebook - WUXGA - 1920 x 1200 - Intel Core i7 13th Gen i7-1355U Deca-core (10 Core) 1.70 GHz - 16 GB Total RAM - 8 GB On-Board Memory - 512 GB SSD - Graphite",
        price: 889,
        img: "lenovo-5.png"
    },
    {
        id: 27,
        Brand: "lenovo",
        description: "Lenovo V15 Gen 4 Business Laptop, 15.6' FHD Screen, AMD Ryzen 5 5500U, 12GB RAM, 512GB SSD, Webcam, HDMI, Wi-Fi, Windows 11 Pro, Black",
        price: 469,
        img: "lenovo-6.png"
    },
    {
        id: 28,
        Brand: "lenovo",
        description: "Lenovo ThinkPad T14 Gen 2 20W00091US 14' Rugged Notebook - Full HD - 1920 x 1080 - Intel Core i5 (11th Gen) i5-1135G7 Quad-core (4 Core) 2.40 GHz - 16 GB RAM - 512 GB SSD - Black - Intel SoC - Wi",
        price: 649,
        img: "lenovo-7.png"
    },

]
export default laptops;