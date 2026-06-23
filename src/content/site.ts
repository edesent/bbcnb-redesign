import {
  BookOpen,
  CalendarDays,
  Clock,
  Cross,
  Ear,
  ExternalLink,
  HandHeart,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Users,
} from "lucide-react";

export const site = {
  name: "Bible Baptist Church",
  fullName: "Bible Baptist Church for the Deaf & Hearing",
  city: "Seguin",
  state: "TX",
  address: "1456 East Kingsbury St, Seguin, TX 78155",
  phone: "(512) 757-5017",
  videoPhone: "(210) 429-9592",
  email: "biblebaptistnb@gmail.com",
  facebook: "https://www.facebook.com/BibleBaptistChurchNB/",
  map: "https://www.google.com/maps/search/?api=1&query=1456%20East%20Kingsbury%20St%20Seguin%20TX%2078155",
  mapEmbed: "https://www.google.com/maps?q=1456%20East%20Kingsbury%20St%20Seguin%20TX%2078155&output=embed",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/service-times", label: "Service Times" },
  { href: "/events", label: "Events" },
  { href: "/beliefs", label: "Beliefs" },
  { href: "/statement-of-faith", label: "Statement of Faith" },
  { href: "/the-new-birth", label: "The New Birth" },
  { href: "/devotions", label: "Devotions" },
  { href: "/kjv-for-the-deaf", label: "KJV for the Deaf" },
  { href: "/deaf-mens-retreat", label: "Men's Retreat" },
  { href: "/ladys-retreat", label: "Lady's Retreat" },
];

export const services = [
  ["Sunday School", "10:15 AM"],
  ["Sunday Morning Worship", "11:00 AM"],
  ["Sunday Afternoon Disciple Training", "3:00 PM"],
  ["Wednesday Night Bible Study", "7:00 PM"],
];

export const highlights = [
  {
    icon: Ear,
    title: "Voiced and Signed",
    text: "Every regular service is built for Deaf and hearing people to worship together.",
  },
  {
    icon: BookOpen,
    title: "Bible-Centered",
    text: "Plain Bible preaching, KJV teaching, and a steady focus on the Gospel of Jesus Christ.",
  },
  {
    icon: Users,
    title: "Family Welcome",
    text: "A small church family where visitors can meet real people and find room to belong.",
  },
];

export const quickLinks = [
  { icon: Clock, label: "Service Times", href: "/service-times" },
  { icon: MapPin, label: "Directions", href: site.map },
  { icon: Phone, label: "Call or Text", href: "tel:+15127575017" },
  { icon: Mail, label: "Email", href: `mailto:${site.email}` },
  { icon: ExternalLink, label: "Facebook", href: site.facebook },
];

type PageBlock =
  | { type: "lead"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "cards"; items: { title: string; text: string; icon?: typeof Cross }[] }
  | { type: "quote"; text: string; cite?: string };

export type SitePage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  accent: string;
  icon: typeof Cross;
  blocks: PageBlock[];
  cta?: { label: string; href: string };
};

export const pages: SitePage[] = [
  {
    slug: "service-times",
    title: "Service Times",
    eyebrow: "Visit This Week",
    description: "A simple weekly rhythm for worship, Bible teaching, fellowship, and prayer.",
    accent: "red",
    icon: Clock,
    blocks: [
      { type: "lead", text: "Bible Baptist Church meets at 1456 East Kingsbury St in Seguin, Texas." },
      { type: "list", items: services.map(([name, time]) => `${name}: ${time}`) },
      { type: "paragraph", text: "All regular services are voiced and signed so Deaf and hearing visitors can participate together." },
    ],
    cta: { label: "Get Directions", href: site.map },
  },
  {
    slug: "events",
    title: "Events",
    eyebrow: "Church Calendar",
    description: "Regular monthly fellowship and special meetings from the original church calendar.",
    accent: "gold",
    icon: CalendarDays,
    blocks: [
      {
        type: "list",
        items: [
          "2nd Saturday every month: The Forge men's lunch at church.",
          "2nd Sunday every month: Bring your own lunch.",
          "3rd Saturday: lady's lunching, location to be determined.",
          "4th Saturday every month: The Forge men's lunch, location to be determined.",
          "Last Sunday: dinner on the grounds.",
          "April 24-25: DBFW, with Deaf pastors and missionaries from West America.",
          "August 15-18, 2025: Faith Promise Mission Conference with Deaf Pastor Reggie Rempel from Harvest Baptist Deaf Church in Ringgold, Georgia.",
          "November 6: yearly revival.",
        ],
      },
    ],
  },
  {
    slug: "beliefs",
    title: "Beliefs",
    eyebrow: "What We Believe",
    description: "A concise summary of the beliefs Bible Baptist Church publicly listed.",
    accent: "sage",
    icon: Cross,
    blocks: [
      { type: "lead", text: "We believe that the 66 books of the King James Version are the preserved and inspired Word of God for this generation." },
      { type: "paragraph", text: "We believe the Bible is without error and is our sole authority for all matters of faith and practice. We believe in the Holy Trinity: one God eternally existing as Father, Son, and Holy Spirit." },
      { type: "paragraph", text: "We believe God created the world and all the universe in six literal, 24-hour days as recorded in Genesis. We believe Jesus Christ is fully God and fully man, born of the virgin Mary, sinless, crucified for our sins, buried, bodily risen, ascended to Heaven, and returning again." },
      { type: "paragraph", text: "We believe all people are born with a sin nature and that salvation is by grace through faith, not by works. When a person trusts the finished work and blood of Jesus Christ, he is regenerated and immediately indwelt by the Holy Spirit." },
      { type: "paragraph", text: "We believe a saved person possesses eternal life. Salvation cannot be lost. Once saved, always saved." },
      { type: "paragraph", text: "We believe believers should live holy lives, be baptized by immersion, join a Bible-preaching church, witness to the lost, and faithfully serve the Lord." },
      { type: "quote", text: "Whatever the Bible says is true." },
    ],
    cta: { label: "Read Statement of Faith", href: "/statement-of-faith" },
  },
  {
    slug: "statement-of-faith",
    title: "Statement of Faith",
    eyebrow: "Doctrine",
    description: "The fuller statement of faith preserved from the original site.",
    accent: "ink",
    icon: BookOpen,
    blocks: [
      {
        type: "cards",
        items: [
          { title: "Sec. A. Scriptures", text: "The Bible includes both the Old and New Testaments, 66 books total, and in the original writings is the inerrant, infallible, verbal plenary inspired Word of God. The Scriptures are the final authority in all matters of faith and practice. The pastor uses the KJV 1611 in ministering." },
          { title: "Sec. B. God", text: "There is only one true and living God eternally existing as a trinity in unity: God the Father, God the Son, and God the Holy Spirit; three persons, yet one God." },
          { title: "Sec. C. Jesus Christ", text: "Jesus Christ is eternal and God. He became truly man while remaining truly God through His virgin birth, lived a sinless life, died on the cross for the sins of the world, shed His blood for our atonement, rose bodily on the third day, and ascended to Heaven." },
          { title: "Sec. D. Holy Spirit", text: "The Holy Spirit is God and indwells each believer. He convicts of sin, regenerates the sinner, and seals the saint. The sign gifts, such as tongues and healing, were temporary." },
          { title: "Sec. E. Satan", text: "Satan is a real being, the father of lies and god of this present world. He is in rebellion against God, at war with Christians, and shall be eternally punished in the Lake of Fire." },
          { title: "Sec. F. Creation", text: "God created the world and all that is in it in six literal, twenty-four hour periods as recorded in Genesis. Evolution cannot be reconciled with the Scriptures." },
          { title: "Sec. G. Fall of Man", text: "Man was created in the image and likeness of God, but deliberately chose to rebel through the fall in Eden. Everyone is born a sinner and is a sinner by choice, deserving condemnation because of sin." },
          { title: "Sec. H. Heaven and Hell", text: "Heaven is a literal place with literal and eternal rewards for born-again believers. Unbelievers shall appear at the Great White Throne Judgment and be cast into the Lake of Fire to suffer everlasting conscious punishment." },
          { title: "Sec. I. Salvation", text: "Eternal life is received by repenting of sin and asking Christ, in faith, to forgive and save. Salvation is available through personal faith in Christ's death and resurrection. Good works do not save but result from the new birth. Eternal security is guaranteed by Christ's resurrection and intercession." },
          { title: "Sec. J. Local Church", text: "The local church is a group of baptized believers uniting together to serve Christ through the Great Commission. The church has two ordinances: baptism by immersion and the Lord's Supper as a memorial of Christ's death." },
          { title: "Sec. K. Second Coming", text: "Christ will bodily return to rapture all believers, living and dead. His coming is imminent, premillennial, pretribulational, and personal." },
          { title: "Sec. L. Human Sexuality", text: "God commands that intimate sexual activity be reserved for marriage between one man and one woman. Men and women are spiritually equal before God, while God has ordained distinct functions in the home and church." },
          { title: "Sec. M. Abortion", text: "Human life begins at conception and the unborn child is a living human being. Abortion constitutes the taking of unborn human life." },
          { title: "Sec. N. Missions", text: "God has given the church a great commission to proclaim the Gospel to all nations, using all available means to reach the world as ambassadors of Christ." },
          { title: "Sec. O. Lawsuits Between Believers", text: "Christians are prohibited from bringing civil lawsuits against other Christians or the church to resolve personal disputes. The church has resources to resolve disputes among members." },
        ],
      },
    ],
  },
  {
    slug: "the-new-birth",
    title: "The New Birth",
    eyebrow: "The Gospel",
    description: "A clear Gospel page for visitors asking what it means to be born again.",
    accent: "red",
    icon: HeartHandshake,
    blocks: [
      { type: "lead", text: "Jesus said, 'Ye must be born again.' The new birth is not church membership, family religion, or trying harder. It is the work of God when a sinner trusts Jesus Christ as Savior." },
      {
        type: "cards",
        items: [
          { title: "Our Need", text: "All have sinned and come short of the glory of God. Sin separates us from a holy God." },
          { title: "Christ's Payment", text: "Jesus Christ shed His blood, died for our sins, was buried, and rose again bodily from the grave." },
          { title: "Faith's Response", text: "Salvation is by grace through faith. Call upon the Lord, trusting His finished work rather than your own merit." },
        ],
      },
      { type: "quote", text: "For whosoever shall call upon the name of the Lord shall be saved.", cite: "Romans 10:13" },
      { type: "paragraph", text: "If you have questions about salvation, the church would be glad to talk with you by voice, text, video phone, email, or in person." },
    ],
    cta: { label: "Contact the Church", href: `mailto:${site.email}` },
  },
  {
    slug: "devotions",
    title: "Devotions",
    eyebrow: "Bible Reading",
    description: "A devotional reading area carried forward from the original page.",
    accent: "sage",
    icon: MessageCircle,
    blocks: [
      { type: "lead", text: "Saturday, February 7th - Evening" },
      { type: "quote", text: "And they heard a great voice from heaven saying unto them, Come up hither.", cite: "Revelation 11:12" },
      { type: "paragraph", text: "Without considering these words in their prophetical connection, let us regard them as the invitation of our great Forerunner to His sanctified people. In due time there shall be heard a great voice from heaven to every believer saying, Come up hither." },
      { type: "paragraph", text: "We are not called down to the grave, but up to the skies. Whether our Master shall say go or stay, let us be equally well pleased so long as He indulges us with His presence." },
    ],
  },
  {
    slug: "kjv-for-the-deaf",
    title: "KJV for the Deaf",
    eyebrow: "Accessible Scripture",
    description: "A focused page for Bible access, Deaf ministry, and KJV teaching.",
    accent: "sky",
    icon: HandHeart,
    blocks: [
      { type: "lead", text: "Bible Baptist Church believes the Word of God should be accessible to Deaf and hearing people alike." },
      { type: "paragraph", text: "The church teaches and preaches from the King James Bible while making services available through signing and voice so the message can be understood together." },
      { type: "quote", text: "And in that day shall the deaf hear the words of the book.", cite: "Isaiah 29:18" },
      {
        type: "cards",
        items: [
          { title: "Signed Services", text: "Regular services are both voiced and signed." },
          { title: "Bible Teaching", text: "KJV preaching and Bible study are part of the church's weekly rhythm." },
          { title: "Personal Help", text: "Visitors can contact the church by voice, text, video phone, or email." },
        ],
      },
    ],
  },
  {
    slug: "deaf-mens-retreat",
    title: "Deaf Men's Retreat",
    eyebrow: "Men's Fellowship",
    description: "Retreat information preserved from the original page.",
    accent: "ink",
    icon: Users,
    blocks: [
      { type: "lead", text: "January 5-9, 2025" },
      { type: "paragraph", text: "Speaker: Nick Digman" },
      { type: "paragraph", text: "The original page linked to ASL Man Camp registration through Google Forms." },
    ],
    cta: { label: "Ask About Retreats", href: `mailto:${site.email}` },
  },
  {
    slug: "ladys-retreat",
    title: "Lady's Retreat",
    eyebrow: "Ladies Fellowship",
    description: "Lady's retreat information preserved from the original page.",
    accent: "gold",
    icon: HandHeart,
    blocks: [
      { type: "lead", text: "Bible Baptist Church for the Deaf & Hearing" },
      { type: "paragraph", text: "$150" },
      { type: "paragraph", text: "Deaf missionary Rebekkah" },
      { type: "paragraph", text: "The original page linked to Tithe.ly event registration and the church Facebook page." },
    ],
    cta: { label: "Visit Facebook", href: site.facebook },
  },
];

export function findPage(slug: string) {
  return pages.find((page) => page.slug === slug);
}
