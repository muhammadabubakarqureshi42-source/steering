import { motion } from "framer-motion";
import logo from "./assets/logo.png";
import { useNavigate } from "react-router-dom";
import {
  BsShieldCheck, BsFillStarFill,
} from "react-icons/bs";
import {
  RiCarLine, RiPriceTag3Line, RiShieldCheckLine, RiCustomerServiceLine,
} from "react-icons/ri";
import {
  MdVerified, MdSecurity,
} from "react-icons/md";
import {
  FaShieldAlt,
  FaWhatsapp,
} from "react-icons/fa";
import {
  HiOutlineBadgeCheck, HiSparkles,
} from "react-icons/hi";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandFacebook } from "react-icons/tb";

const TERMS_SECTIONS = [
  {
    id: "acceptance", num: "01", title: "Acceptance of Terms",
    icon: <BsShieldCheck size={20} />,
    content: [
      { heading: "Agreement to Terms", text: `By downloading, installing, or using The Steering mobile application ("App") or visiting our website ("Platform"), you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree to these Terms, please do not use our Platform.` },
      { heading: "Eligibility", text: `The Steering is available to users who are at least 18 years of age or have the legal capacity to enter into contracts under applicable Pakistani law. By using the Platform, you represent and warrant that you meet these eligibility requirements.` },
      { heading: "Updates to Terms", text: `We reserve the right to modify these Terms at any time. We will notify registered users of significant changes via in-app notification or email. Your continued use of The Steering after changes are posted constitutes your acceptance of the updated Terms.` },
    ],
  },
  {
    id: "platform-use", num: "02", title: "Use of the Platform",
    icon: <RiCarLine size={20} />,
    content: [
      { heading: "Account Registration", text: `To access certain features of The Steering, you must create an account using your phone number or Google account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.` },
      { heading: "Permitted Use", text: `The Steering is designed exclusively for lawful buying, selling, and exploration of vehicles in Pakistan. You may use our Platform to browse verified car listings, post your own vehicle for sale, connect with buyers and sellers, access inspection services, and communicate through in-app messaging.` },
      { heading: "Prohibited Activities", text: `You agree not to post false, misleading, or fraudulent vehicle listings; impersonate any person or entity; use the Platform for any unlawful purpose; attempt to gain unauthorized access to our systems; scrape or harvest data without written permission; or interfere with the Platform's functionality.` },
    ],
  },
  {
    id: "listings", num: "03", title: "Listings & Transactions",
    icon: <RiPriceTag3Line size={20} />,
    content: [
      { heading: "Seller Responsibilities", text: `As a seller on The Steering, you are solely responsible for the accuracy and completeness of your vehicle listing. You must ensure that all information — including make, model, year, mileage, condition, price, and photographs — is truthful and not misleading.` },
      { heading: "Verification Process", text: `The Steering employs a trust verification process for listings to maintain quality standards. While we strive to verify listings, we do not guarantee the accuracy of all information provided by sellers. Buyers are encouraged to independently verify vehicle details before completing any transaction.` },
      { heading: "Transactions & Payments", text: `The Steering facilitates connections between buyers and sellers but is not a party to any transaction. All financial transactions between buyers and sellers are conducted independently. The Steering does not handle payments or bear responsibility for transaction disputes.` },
      { heading: "Fees & Pricing", text: `Creating an account and basic browsing on The Steering is free. We may charge fees for premium listing features or value-added services. Any applicable fees will be clearly disclosed before you are charged.` },
    ],
  },
  {
    id: "inspection", num: "04", title: "Inspection & Mechanic Services",
    icon: <MdVerified size={20} />,
    content: [
      { heading: "Inspection Reports", text: `The Steering offers vehicle inspection services conducted by certified third-party experts. Inspection reports are provided for informational purposes and do not constitute a warranty or guarantee of vehicle condition.` },
      { heading: "Mechanic Services", text: `Mechanic and maintenance services accessible through The Steering are provided by independent service providers. The Steering acts as a platform to connect users with these providers and does not employ or supervise the service providers directly.` },
      { heading: "Limitation of Liability for Services", text: `To the maximum extent permitted by law, The Steering shall not be liable for any damages, losses, or claims arising from inspection reports or mechanic services. You agree to resolve any disputes regarding these services directly with the relevant service provider.` },
    ],
  },
  {
    id: "content", num: "05", title: "User Content & Conduct",
    icon: <BsShieldCheck size={20} />,
    content: [
      { heading: "Your Content", text: `When you post listings, photos, reviews, messages, or any other content on The Steering, you grant us a non-exclusive, royalty-free, worldwide license to use, display, and distribute that content solely for operating and improving the Platform. You retain ownership of your User Content.` },
      { heading: "Content Standards", text: `All User Content must be accurate, lawful, and not infringing on any third-party rights. You must not post content that is defamatory, offensive, or obscene. Vehicle photographs must genuinely represent the listed vehicle.` },
      { heading: "In-App Messaging", text: `Our in-app messaging system is provided to facilitate legitimate communications between buyers and sellers. You agree not to use messaging to send spam, unsolicited advertisements, or harmful content.` },
    ],
  },
  {
    id: "privacy", num: "06", title: "Privacy & Data",
    icon: <FaShieldAlt size={20} />,
    content: [
      { heading: "Data Collection", text: `The Steering collects personal information including your name, phone number, email address, and device information when you register or use our Platform. Our complete Privacy Policy governs how we collect, use, and protect your data.` },
      { heading: "Data Security", text: `We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of electronic transmission or storage is completely secure.` },
      { heading: "Data Sharing", text: `The Steering does not sell your personal information to third parties. We may share data with trusted service providers who assist in operating our Platform — subject to confidentiality obligations.` },
    ],
  },
  {
    id: "intellectual-property", num: "07", title: "Intellectual Property",
    icon: <HiOutlineBadgeCheck size={20} />,
    content: [
      { heading: "Our IP", text: `The Steering name, logo, app design, features, and all associated content are the intellectual property of The Steering and are protected by applicable Pakistani and international copyright, trademark, and other intellectual property laws.` },
      { heading: "Trademarks", text: `"The Steering," our logo, and "Pakistan's #1 Car App" are trademarks of The Steering. Unauthorized use of our trademarks in any manner that may cause confusion or dilution of our brand is strictly prohibited.` },
      { heading: "Third-Party Content", text: `The Steering may display third-party logos, brand names, or vehicle imagery for informational purposes. All such marks remain the property of their respective owners.` },
    ],
  },
  {
    id: "disclaimers", num: "08", title: "Disclaimers & Limitation of Liability",
    icon: <MdSecurity size={20} />,
    content: [
      { heading: "Platform Provided As-Is", text: `The Steering is provided on an "as-is" and "as-available" basis without warranties of any kind. We do not warrant that the Platform will be uninterrupted, error-free, or free of harmful components.` },
      { heading: "No Endorsement of Listings", text: `The Steering does not endorse, guarantee, or assume responsibility for any vehicle listing, user, seller, buyer, or transaction facilitated through the Platform. We are a marketplace platform and are not a party to private transactions between users.` },
      { heading: "Limitation of Liability", text: `To the fullest extent permitted by applicable law, The Steering shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Platform. Our total liability shall not exceed the amount you have paid to us in the 12 months preceding the claim.` },
    ],
  },
  {
    id: "termination", num: "09", title: "Termination",
    icon: <RiShieldCheckLine size={20} />,
    content: [
      { heading: "Termination by You", text: `You may delete your account and stop using The Steering at any time through the app settings or by contacting our support team. Deletion of your account will remove your personal profile and active listings.` },
      { heading: "Termination by Us", text: `The Steering reserves the right to suspend or terminate your account at our discretion, with or without notice, if you violate these Terms or engage in conduct harmful to users, third parties, or the Platform's integrity.` },
      { heading: "Effect of Termination", text: `Upon termination, your right to access and use the Platform ceases immediately. Provisions of these Terms that by their nature should survive termination — including intellectual property, disclaimers, and governing law — shall survive termination.` },
    ],
  },
  {
    id: "governing-law", num: "10", title: "Governing Law & Disputes",
    icon: <BsFillStarFill size={20} />,
    content: [
      { heading: "Governing Law", text: `These Terms shall be governed by and construed in accordance with the laws of the Islamic Republic of Pakistan. Any dispute arising from these Terms shall be subject to the exclusive jurisdiction of the courts located in Karachi, Pakistan.` },
      { heading: "Dispute Resolution", text: `We encourage users to contact us directly to resolve any disputes before pursuing formal legal proceedings. For disputes that cannot be resolved informally, the parties agree to submit to binding arbitration in Karachi, Pakistan.` },
      { heading: "Contact Us", text: `For questions, concerns, or legal notices regarding these Terms, please contact us at: legal@thesteering.pk | The Steering Support Team, Karachi, Pakistan. We aim to respond to all legal inquiries within 5 business days.` },
    ],
  },
];

export default function TermsAndConditions() {
  const navigate = useNavigate();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: {
      duration: 0.6, delay,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  });

  const ACCENTS = [
    { bg: "bg-green-50", border: "border-green-200", iconBg: "bg-green-50", iconColor: "text-green-600", numColor: "text-green-600", headingBar: "bg-green-500" },
    { bg: "bg-blue-50",  border: "border-blue-200",  iconBg: "bg-blue-50",  iconColor: "text-blue-900",  numColor: "text-blue-900",  headingBar: "bg-blue-900"  },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ══ NAV ══════════════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <img
            src={logo}
            className="w-40 h-auto cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
      </nav>

      {/* ══ HERO ═════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white text-center border-b border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[10px] font-bold tracking-[3px] text-green-600 uppercase mb-3">THE STEERING.PK</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Terms <span className="text-green-500">&</span> Conditions
          </h1>
          <div className="w-10 h-0.5 bg-green-500 mx-auto mb-5" />
          <p className="text-sm sm:text-base text-gray-500 max-w-lg mx-auto leading-relaxed mb-8">
            Please read these Terms carefully before using The Steering — Pakistan's #1 Car Marketplace. By accessing our platform, you agree to be bound by these Terms.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {[
              { icon: <BsShieldCheck size={14} className="text-green-600" />, text: "User Protection" },
              { icon: <MdVerified size={14} className="text-green-600" />, text: "Transparent Policies" },
              { icon: <RiCustomerServiceLine size={14} className="text-green-600" />, text: "Support Available" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                {item.icon}
                {item.text}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══ NOTICE BANNER ════════════════════════════════════ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-10">
        <motion.div
          {...fadeUp(0)}
          className="flex items-start gap-4 bg-green-50 border border-green-200 rounded-2xl p-5"
        >
          <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center bg-green-100 text-green-600">
            <HiSparkles size={18} />
          </div>
          <div>
            <p className="font-bold text-green-800 text-sm mb-1">Important Notice</p>
            <p className="text-xs sm:text-sm text-green-700 leading-relaxed">
              These Terms govern your use of The Steering — Pakistan's leading car marketplace. By continuing to use our platform, you confirm your acceptance of these Terms in full.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ══ SECTIONS ════════════════════════════════════════ */}
      <section className="py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {TERMS_SECTIONS.map((section, sIdx) => {
            const acc = ACCENTS[sIdx % 2];
            return (
              <motion.div
                key={section.id}
                id={section.id}
                {...fadeUp(0.04 * sIdx)}
                className={`bg-white border ${acc.border} rounded-2xl overflow-hidden`}
              >
                {/* Section header */}
                <div className={`flex items-center gap-4 px-6 py-4 ${acc.bg} border-b ${acc.border}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${acc.iconBg} ${acc.iconColor} border ${acc.border}`}>
                    {section.icon}
                  </div>
                  <div>
                    <p className={`text-[10px] font-bold tracking-[2px] uppercase ${acc.numColor} mb-0.5`}>
                      Section {section.num}
                    </p>
                    <h2 className="text-sm sm:text-base font-extrabold text-gray-900">{section.title}</h2>
                  </div>
                </div>

                {/* Section body */}
                <div className="px-6 py-6 space-y-5">
                  {section.content.map((item, iIdx) => (
                    <div key={iIdx} className={iIdx > 0 ? "pt-5 border-t border-gray-100" : ""}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-1 h-4 rounded-full ${acc.headingBar}`} />
                        <h3 className="text-xs sm:text-sm font-bold text-gray-800">{item.heading}</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed pl-3">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

  {/* ══ FOOTER ═══════════════════════════════════════════════ */}
<footer className="text-gray-700 px-5 sm:px-8 pt-8 pb-5">
  <div className="max-w-6xl mx-auto">

    {/* Top section - logo etc */}
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 mb-5">
      <div></div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-gray-100 pt-4 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
      {/* Left - Copyright */}
      <p className="text-xs text-gray-400">
        © 2026 The Steering.pk. All rights reserved.
      </p>

      {/* Right - Follow Us */}
      <div className="flex items-center gap-3">
        <span className="text-xs text-gray-500 font-semibold">Follow Us</span>
        <div className="flex gap-2">
          {[
            { icon: <TbBrandFacebook size={15} />, href: "#" },
            { icon: <AiOutlineInstagram size={15} />, href: "#" },
            { icon: <FaWhatsapp size={14} />, href: "#" },
          ].map(({ icon, href }, i) => (
            <a key={i} href={href}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-green-600 hover:text-white flex items-center justify-center transition-colors no-underline text-gray-600">
              {icon}
            </a>
          ))}
        </div>
      </div>

    </div>
  </div>
</footer>


    </div>
  );
}