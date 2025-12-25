export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
  result?: string;
}

export interface CaseStudy {
  title: string;
  before: string;
  after: string;
  revenue: string;
  image: string;
}