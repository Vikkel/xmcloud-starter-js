import React, { JSX } from 'react';
import {
  RichText as ContentSdkRichText,
  RichTextField,
} from '@sitecore-content-sdk/nextjs';
import { PageContentProps } from './page-content.props';

export const Default = ({ params, fields, page }: PageContentProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;

  const field = fields?.Content ?? (page.layout.sitecore.route?.fields?.Content as RichTextField);

  return (
    <article
      className={`component content ${styles}`}
      id={id}
      itemScope
      itemType="https://schema.org/Article"
    >
      <div className="component-content">
        <div className="field-content" itemProp="articleBody">
          {field ? <ContentSdkRichText field={field} /> : '[Content]'}
        </div>
      </div>
    </article>
  );
};
