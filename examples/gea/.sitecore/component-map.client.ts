// Client-safe component map for App Router
import { NextjsContentSdkComponent } from '@sitecore-content-sdk/nextjs';


import { BYOCClientWrapper, FEaaSClientWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';

// end of built-in import section
import * as ContactForm from 'src/components/contact-form/ContactForm';

export const componentMap = new Map<string, NextjsContentSdkComponent>([
  ['BYOCWrapper', BYOCClientWrapper],
  ['FEaaSWrapper', FEaaSClientWrapper],
  ['Form', Form],
  ['ContactForm', { ...ContactForm }],
]);

export default componentMap;
