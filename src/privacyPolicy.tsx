import logo from "./assets/logo.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiLock, FiUserCheck, FiGlobe, FiPhone,
} from "react-icons/fi";
import {
  FaCookieBite, FaUserSecret, FaChild,
  FaWhatsapp,
} from "react-icons/fa";
import {
  MdOutlinePrivacyTip, MdDataUsage, 
} from "react-icons/md";
import { RiShareLine, RiCustomerServiceLine } from "react-icons/ri";
import { BsDatabase } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandFacebook } from "react-icons/tb";

const PRIVACY_SECTIONS = [
  {
    id: "overview", num: "01", title: "Overview & Scope",
    icon: <MdOutlinePrivacyTip size={20} />,
    content: [
      { heading: "Our Commitment to Privacy", text: `The Steering ("we," "us," or "our") is committed to protecting your personal information. This Privacy & Policy explains how we collect, use, store, share, and protect your data when you use The Steering mobile application or website (collectively, the "Platform"). We encourage you to read this policy carefully to understand our practices.` },
      { heading: "Scope of This Policy", text: `This Privacy & Policy applies to all users of The Steering Platform across Pakistan, including buyers, sellers, and visitors. It covers data collected through our mobile application (Android and iOS), our website, in-app messaging, vehicle inspection bookings, mechanic service requests, and any other feature or service we offer.` },
      { heading: "Policy Updates", text: `We may update this Privacy & Policy from time to time to reflect changes in our practices or applicable laws. When we make significant changes, we will notify you through an in-app notification or via email. Continued use of the Platform after updates constitutes acceptance of the revised policy.` },
    ],
  },
  {
    id: "data-collected", num: "02", title: "Information We Collect",
    icon: <BsDatabase size={20} />,
    content: [
      { heading: "Information You Provide Directly", text: `When you register or use The Steering, you may provide us with: your full name, phone number, and email address; login credentials (or Google account authorization); vehicle listing details including make, model, year, mileage, price, description, and photographs; payment and billing information for premium features; messages and communications sent through our in-app chat.` },
      { heading: "Information Collected Automatically", text: `When you use our Platform, we automatically collect certain technical information, including: your device type, operating system, and unique device identifiers; IP address and approximate geographic location; app usage data such as screens viewed, features accessed, search queries, and time spent; crash reports and error logs to improve app stability.` },
      { heading: "Location Information", text: `The Steering may request access to your device's location to show nearby listings and connect you with local mechanics and inspection services. Location access is optional — you may deny this permission and still use core features of the Platform.` },
      { heading: "Information from Third Parties", text: `If you sign in via Google, we receive basic profile information (name, email, profile photo) as authorized by you during the OAuth sign-in process. We may also receive information from analytics partners and fraud prevention services to improve the quality and security of our Platform.` },
    ],
  },
  {
    id: "data-use", num: "03", title: "How We Use Your Information",
    icon: <MdDataUsage size={20} />,
    content: [
      { heading: "Platform Operations", text: `We use your information primarily to operate and provide The Steering Platform — including creating and managing your account, displaying and managing your vehicle listings, facilitating communications between buyers and sellers through in-app chat, processing bookings for inspection and mechanic services.` },
      { heading: "Personalization & Recommendations", text: `Your search history, browsing behavior, and location data help us personalize your experience. This includes showing you relevant car listings in your city, recommending vehicles that match your preferences, and surfacing inspection or mechanic services near you.` },
      { heading: "Safety, Trust & Verification", text: `We use your data to verify listings, detect fraudulent activity, prevent scams, and maintain the integrity of our marketplace. This includes analyzing listing content and user behavior patterns to flag suspicious activity and conducting identity verification for sellers where required.` },
      { heading: "Communications", text: `We may contact you via push notification, SMS, or email for important account and transaction updates, security alerts and login verifications, new feature announcements, promotional offers and seasonal campaigns (you may opt out at any time), and responses to support requests.` },
    ],
  },
  {
    id: "data-sharing", num: "04", title: "How We Share Your Information",
    icon: <RiShareLine size={20} />,
    content: [
      { heading: "With Other Users", text: `Certain information in your vehicle listings is visible to all Platform users, including vehicle details, photographs, asking price, and your general location (city level). Your phone number or contact details are only shared with other users when you explicitly initiate contact or choose to display them in your listing.` },
      { heading: "With Service Providers", text: `We share data with trusted third-party vendors who help us operate the Platform, including cloud hosting providers, analytics tools, SMS and email delivery services, payment processors, and inspection and mechanic service partners. All service providers are bound by confidentiality agreements.` },
      { heading: "For Legal Compliance", text: `We may disclose your information when required by law, regulation, or valid legal process; to protect the rights or safety of The Steering, our users, or the public; or to investigate fraud, security threats, or violations of our Terms & Conditions.` },
      { heading: "We Do Not Sell Your Data", text: `The Steering does not sell, rent, or trade your personal information to advertisers or other third parties for their own marketing purposes. Any data-sharing arrangements are strictly for the purpose of operating and improving our Platform.` },
    ],
  },
  {
    id: "data-storage", num: "05", title: "Data Storage & Security",
    icon: <FiLock size={20} />,
    content: [
      { heading: "Where Your Data Is Stored", text: `Your data is stored on secure servers hosted by reputable cloud providers. While our primary operations are Pakistan-based, some data may be processed on servers located outside Pakistan by our technology partners. In such cases, we ensure adequate data protection safeguards are in place.` },
      { heading: "Security Measures", text: `We implement industry-standard security measures including end-to-end encryption for in-app messages, HTTPS/TLS encryption for all data transmitted between your device and our servers, secure password hashing, access controls, and regular security audits.` },
      { heading: "Data Retention", text: `We retain your personal information for as long as your account is active. If you delete your account, we will remove your personal profile and active listings within 30 days. Some data may be retained for up to 3 years for legal, compliance, and dispute resolution purposes.` },
      { heading: "Data Breach Response", text: `In the unlikely event of a data breach, we will notify you and relevant authorities in accordance with applicable Pakistani data protection laws. We maintain an incident response plan to contain, assess, and remediate any security incidents promptly.` },
    ],
  },
  {
    id: "cookies", num: "06", title: "Cookies & Tracking",
    icon: <FaCookieBite size={20} />,
    content: [
      { heading: "What Are Cookies", text: `Cookies are small text files stored on your device when you visit our website. The Steering uses cookies and similar tracking technologies to keep you logged in between sessions, remember your search preferences, analyze traffic patterns, and deliver relevant in-app experiences.` },
      { heading: "Types of Cookies We Use", text: `We use essential cookies necessary for the Platform to function; functional cookies that remember your preferences; analytics cookies (e.g., Google Analytics, Firebase) that help us understand how the Platform is used; and performance cookies that help us identify and fix technical issues.` },
      { heading: "Managing Cookies", text: `You can manage cookie preferences through your browser or device settings. Disabling cookies may affect certain features of our website. Opting out of analytics tracking will not affect your ability to use core Platform features.` },
    ],
  },
  {
    id: "your-rights", num: "07", title: "Your Privacy Rights",
    icon: <FiUserCheck size={20} />,
    content: [
      { heading: "Access & Portability", text: `You have the right to request a copy of the personal information we hold about you. You may access most of your data directly through the app's account settings. For a complete data export, contact us at privacy@thesteering.pk. We will respond within 30 days.` },
      { heading: "Correction & Deletion", text: `If any personal information we hold is inaccurate, you have the right to request correction. You may also request deletion of your personal data at any time by deleting your account within the app or by contacting us. We will delete your data within 30 days of a verified request.` },
      { heading: "Opt-Out of Communications", text: `You may opt out of promotional emails and push notifications at any time through the notification settings within the app. We may still send transactional messages such as account security alerts that are necessary for Platform operation.` },
      { heading: "Complaints", text: `If you believe your privacy rights have been violated, you may lodge a complaint with us at privacy@thesteering.pk. We investigate and respond within 15 business days. You also have the right to escalate unresolved complaints to the relevant data protection authority in Pakistan.` },
    ],
  },
  {
    id: "children", num: "08", title: "Children's Privacy",
    icon: <FaChild size={20} />,
    content: [
      { heading: "Age Restriction", text: `The Steering is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from minors. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at privacy@thesteering.pk immediately.` },
      { heading: "Parental Controls", text: `We encourage parents and guardians to monitor their children's online activity. If you discover that a minor has created an account on The Steering, contact us right away so we can promptly deactivate the account and remove associated data from our systems.` },
    ],
  },
  {
    id: "third-party", num: "09", title: "Third-Party Links & Services",
    icon: <FiGlobe size={20} />,
    content: [
      { heading: "External Links", text: `The Steering Platform may contain links to third-party websites or resources. These third-party sites have their own privacy policies, and we are not responsible for their content or practices. We encourage you to review the Privacy & Policy of any third-party site you visit.` },
      { heading: "Integrated Services", text: `Our Platform integrates Google Sign-In for authentication, Firebase for analytics and crash reporting, and WhatsApp for optional buyer-seller communication. These integrations are governed by the respective third-party providers' privacy policies.` },
      { heading: "Mechanic & Inspection Partners", text: `When you book an inspection or mechanic service through The Steering, your relevant contact and vehicle information is shared with the assigned service partner to fulfill your request. These partners are contractually required to protect your information.` },
    ],
  },
  {
    id: "contact", num: "10", title: "Contact & Data Controller",
    icon: <FiPhone size={20} />,
    content: [
      { heading: "Data Controller", text: `The Steering is the data controller responsible for your personal information collected through our Platform. We are registered and operate under the laws of the Islamic Republic of Pakistan. All data-related decisions are made by The Steering's Privacy & Compliance team.` },
      { heading: "How to Reach Us", text: `For any privacy-related questions, requests, or concerns — including data access, correction, deletion, and complaints — please contact us at: Email: privacy@thesteering.pk | Support: support@thesteering.pk | The Steering Privacy Team, Hyderabad, Sindh, Pakistan.` },
      { heading: "Effective Date", text: `This Privacy & Policy is effective as of January 1, 2026, and supersedes all prior versions. By using The Steering Platform after this date, you agree to the collection and use of your information as described in this policy. Thank you for trusting The Steering.` },
    ],
  },
];

export default function PrivacyPolicy() {
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

  // accent alternates green / blue like landing page services
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
            Privacy <span className="text-green-500">&</span> Policy
          </h1>
          <div className="w-10 h-0.5 bg-green-500 mx-auto mb-5" />
          <p className="text-sm sm:text-base text-gray-500 max-w-lg mx-auto leading-relaxed mb-8">
            Your privacy matters to us. Learn how The Steering collects, uses, and protects your personal information.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {[
              { icon: <FiLock size={14} className="text-green-600" />, text: "Data Encrypted" },
              { icon: <FaUserSecret size={14} className="text-green-600" />, text: "Never Sold" },
              { icon: <RiCustomerServiceLine size={14} className="text-green-600" />, text: "You're in Control" },
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
          className="flex items-start gap-4 bg-blue-50 border border-blue-200 rounded-2xl p-5"
        >
          <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center bg-blue-100 text-blue-900">
            <HiSparkles size={18} />
          </div>
          <div>
            <p className="font-bold text-blue-800 text-sm mb-1">Your Data, Your Trust</p>
            <p className="text-xs sm:text-sm text-blue-900 leading-relaxed">
              The Steering serves users across Pakistan. We take our responsibility to protect your personal information
              seriously. This policy details exactly what data we collect, why we collect it, and how you stay in control.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ══ SECTIONS ════════════════════════════════════════ */}
      <section className="py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {PRIVACY_SECTIONS.map((section, sIdx) => {
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
                    <div
                      key={iIdx}
                      className={iIdx > 0 ? "pt-5 border-t border-gray-100" : ""}
                    >
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