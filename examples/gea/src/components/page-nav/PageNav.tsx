import type { Field, LinkField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';
import { GeaLink, GeaText, rootKey } from 'lib/gea-ui';

type PageNavProps = ComponentProps & {
  fields?: {
    Title?: Field<string>;
    ContactLink?: LinkField;
    QuoteLink?: LinkField;
  };
};

export const Default = (props: PageNavProps) => {
  const { fields } = props;
  return (
    <div key={rootKey(props)} className="sticky top-0 z-10 border-b border-[#e6e6e6] bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-3">
        <GeaText field={fields?.Title} tag="span" className="font-medium" />
        <div className="ml-auto flex gap-3">
          <GeaLink field={fields?.ContactLink} className="text-sm text-[#0303B8]" />
          <GeaLink
            field={fields?.QuoteLink}
            className="rounded-full bg-[#0303B8] px-4 py-1.5 text-sm text-white"
          />
        </div>
      </div>
    </div>
  );
};
