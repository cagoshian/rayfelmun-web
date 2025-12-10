import {InstagramIcon, TikTokIcon} from "@/components/Common/Icons";

const footerData = [
    {
        title: "Useful Links",
        links: [
            {name: "Home", href: "/"},
            {name: "About", href: "/about"},
            {name: "Schedule", href: "/schedule"},
        ],
    },
    {
        title: "Social Media",
        links: [
	        {name: (<><InstagramIcon className="w-5 inline mr-1"/> <span className="mb-1 inline-block text-base font-medium text-[#ddd] hover:text-white transition-colors ease-in duration-200">Instagram</span></>), href: `https://www.instagram.com/rayfelmun/`, noStyle: true},
            {name: (<><TikTokIcon className="w-5 inline mr-1"/> <span className="mb-1 inline-block text-base font-medium text-[#ddd] hover:text-white transition-colors ease-in duration-200">TikTok</span></>), href: `https://www.tiktok.com/@rayfelmun0/`, noStyle: true},
        ]
    },
    {
        title: "Support & Help",
        links: [
            {name: "FAQ", href: "/faq"},
            {name: "Contact", href: "/contact"},
        ],
    },
];

export default footerData
