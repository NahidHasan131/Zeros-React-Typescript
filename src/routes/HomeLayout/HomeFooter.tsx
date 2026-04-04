import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple, FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";


const HomeFooter = () => {
    interface menu {
        title: string
        links: string[]
    }
    const menu:menu[] =[
        {
            title: 'Shop',
            links: ['All Products', 'New Arrivals', 'Featured', 'Sale'],
        },
        {
            title: 'Company',
            links: ['About Us', 'Careers', 'Press', 'Contact'],
        },
        {
            title: 'Support',
            links: ['FAQ', 'Shipping Policy', 'Returns', 'Track Order', 'Privacy Policy'],
        },
    ]
    return (
        <footer className="bg-[#f5f0e8] mt-10">
            <div className="max-w-7xl mx-auto px-8 lg:px-4 py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

                    <div className="lg:col-span-2 flex flex-col gap-5">
                        <Link to="/" className="text-4xl font-black cursor-pointer">
                        <span className="text-cyan-400">Z </span>
                        <span className="text-2xl text-[#001a2e]">ze<span className="text-cyan-400">ros</span></span>
                        </Link>
                        <p className="text-[#001a2e]/60 text-sm leading-relaxed max-w-xs">
                        Zeros is a design force driven by a vision for sustainability and innovation. Stylish and kind to the environment.
                        </p>
                        {/* App store buttons */}
                        <div className="flex gap-3">
                        <a href="#" className="flex items-center gap-2 bg-[#001a2e] text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:opacity-80 transition-opacity">
                            <span className="text-xl"><BiLogoPlayStore/></span>
                            <div className="flex flex-col leading-tight">
                            <span className="text-[9px] font-normal opacity-70">GET IT ON</span>
                            <span>Google Play</span>
                            </div>
                        </a>
                        <a href="#" className="flex items-center gap-2 bg-[#001a2e] text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:opacity-80 transition-opacity">
                            <span className="text-xl"><FaApple/></span>
                            <div className="flex flex-col leading-tight">
                            <span className="text-[9px] font-normal opacity-70">Download on the</span>
                            <span>App Store</span>
                            </div>
                        </a>
                        </div>
                        {/* Social icons */}
                        <div className="flex gap-4">
                        {[FaLinkedinIn, FaXTwitter, FaFacebookF, FaInstagram].map((Icon, i) => (
                            <a key={i} href="#" className="text-[#001a2e]/50 hover:text-[#001a2e] transition-colors text-lg">
                            <Icon />
                            </a>
                        ))}
                        </div>
                    </div>

                    {menu.map((col) => (
                        <div key={col.title} className="flex flex-col gap-3">
                        <h4 className="text-[#001a2e] font-black text-sm uppercase tracking-widest">{col.title}</h4>
                        {col.links.map((link) => (
                            <a key={link} href="#" className="text-[#001a2e]/60 text-sm hover:text-[#001a2e] transition-colors">
                            {link}
                            </a>
                        ))}
                        </div>
                    ))}
                </div>

                <div className="border-t border-[#001a2e]/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
                <p className="text-[#001a2e]/50 text-sm">© 2025, Zeros. All rights reserved.</p>
                <div className="flex gap-6">
                    {['Terms', 'Cookies', 'Privacy Policy'].map((item) => (
                    <a key={item} href="#" className="text-[#001a2e]/50 text-sm hover:text-[#001a2e] transition-colors">
                        {item}
                    </a>
                    ))}
                </div>
                </div>
            </div>
        </footer>
    );
};

export default HomeFooter;