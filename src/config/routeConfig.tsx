import UniversalSearchPage from '../pages/UniversalSearchPage';
import FAQsPage from '../pages/FAQsPage';
import EventsPage from '../pages/EventsPage';
import { universalResultsConfig } from './universalResultsConfig';
import JobsPage from '../pages/JobsPage';
import LocationsPage from '../pages/LocationsPage'; 

export const routeConfig = [
  {
    path: '/',
    exact: true,
    page: <UniversalSearchPage universalResultsConfig={universalResultsConfig} />
  },
  {
    path: '/faqs',
    page: <FAQsPage verticalKey='faqs'/>
  },
  {
    path: '/financial_professionals',
    page: <EventsPage verticalKey='financial_professionals'/>
  },
  {
    path: '/services',
    page: <LocationsPage verticalKey='services' />
  },
  {
    path: '/tools_and_advice',
    page: <JobsPage verticalKey='tools_and_advice' />
  }
];