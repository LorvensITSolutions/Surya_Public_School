import { schoolInfo } from './aboutSchool'

export const privacyPolicyMeta = {
  title: 'Privacy Policy',
  lastUpdated: 'May 28, 2026',
  effectiveDate: 'May 28, 2026',
}

export const privacyPolicySections = [
  {
    id: 'introduction',
    title: 'Introduction',
    paragraphs: [
      `${schoolInfo.name} (“we”, “our”, “us”) respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website or contact us regarding admissions, events, or general enquiries.`,
      `By using this website, you agree to the practices described in this policy. If you do not agree, please discontinue use of the site.`,
    ],
  },
  {
    id: 'information-we-collect',
    title: 'Information we collect',
    paragraphs: [
      'We may collect the following types of information:',
    ],
    list: [
      'Contact details you provide voluntarily (name, phone number, email address, class applying for, and message content) when you call, email, or submit an enquiry.',
      'Technical data such as browser type, device type, approximate location (city/region), pages visited, and time spent on the site.',
      'Usage data collected through cookies and similar technologies, including analytics tools used to improve our website.',
    ],
  },
  {
    id: 'how-we-use',
    title: 'How we use your information',
    paragraphs: [
      'We use collected information to:',
    ],
    list: [
      'Respond to admission and general enquiries.',
      'Provide information about our school, campus, and programmes.',
      'Improve website performance, content, and user experience.',
      'Maintain security and prevent misuse of our online services.',
      'Comply with applicable laws and legitimate school administration needs.',
    ],
  },
  {
    id: 'cookies-analytics',
    title: 'Cookies and analytics',
    paragraphs: [
      'Our website may use cookies and third-party analytics services (such as Google Analytics) to understand how visitors use the site. These tools may collect anonymised or pseudonymised usage statistics.',
      'You can control cookies through your browser settings. Disabling cookies may affect some website features.',
    ],
  },
  {
    id: 'sharing',
    title: 'Sharing of information',
    paragraphs: [
      'We do not sell personal information. We may share limited data only when necessary:',
    ],
    list: [
      'With trusted service providers who help us operate the website (hosting, analytics, email communication), under confidentiality obligations.',
      'When required by law, regulation, court order, or government authority.',
      'To protect the rights, safety, and security of students, staff, parents, and our school community.',
    ],
  },
  {
    id: 'children',
    title: "Children's privacy",
    paragraphs: [
      'Our website is intended for parents, guardians, and general visitors. We do not knowingly collect personal information directly from children under 13 through online forms without appropriate parental or guardian involvement.',
      'If you believe a child has submitted personal information without consent, please contact us and we will take steps to remove it promptly.',
    ],
  },
  {
    id: 'security-retention',
    title: 'Data security and retention',
    paragraphs: [
      'We take reasonable administrative and technical measures to protect information against unauthorised access, alteration, disclosure, or loss.',
      'We retain information only for as long as needed for the purposes described in this policy, unless a longer retention period is required by law or school records policy.',
    ],
  },
  {
    id: 'your-rights',
    title: 'Your rights',
    paragraphs: [
      'Depending on applicable law, you may request access to, correction of, or deletion of personal information we hold about you. You may also withdraw consent for non-essential communications where applicable.',
      'To make a request, contact us using the details below. We may need to verify your identity before processing requests.',
    ],
  },
  {
    id: 'third-party-links',
    title: 'Third-party links',
    paragraphs: [
      'Our website may include links to external websites (for example, maps or social platforms). We are not responsible for the privacy practices of those third-party sites. Please review their policies separately.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page will reflect the latest version. Continued use of the website after updates means you accept the revised policy.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact us',
    paragraphs: [
      'For privacy-related questions or requests, contact:',
    ],
    contact: true,
  },
]

export function getPrivacyContactLines() {
  return {
    name: schoolInfo.name,
    address: `${schoolInfo.address.line1}, ${schoolInfo.address.line2} — PIN ${schoolInfo.address.pin}`,
    phones: schoolInfo.phones.map((p) => `+91 ${p}`),
    email: schoolInfo.email,
  }
}
