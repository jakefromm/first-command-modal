import { StandardCard } from '../components/cards/StandardCard';
import { VerticalConfig } from '../components/UniversalResults';

export type UniversalResultsConfig = Record<string, VerticalConfig>;

export const universalResultsConfig: UniversalResultsConfig = {
  faqs: {
    label: 'FAQs',
    viewAllButton: true,
    cardConfig: {
      CardComponent: StandardCard,
      showOrdinal: false
    }
  },
  financial_professionals: {
    label: 'Financial Professionals',
    cardConfig: {
      CardComponent: StandardCard,
      showOrdinal: false
    }
  },
  services: {
    label: 'Services',
  },
  tools_and_advice: {
    label: 'Tools and Advice',
  }
}