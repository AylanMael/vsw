export interface LeadSubmitData {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  projectType: string;
  budget?: string;
  timeline?: string;
  message: string;
  rgpdConsent: boolean;
  status: "new";
  source: "contact-page";
  createdAt: any; // firebase timestamp
  userAgent?: string;
}
