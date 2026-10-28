import type { Field, LinkField, RichTextField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';
import { GeaLink, GeaRichText, GeaText, rootKey } from 'lib/gea-ui';

type BandProps = ComponentProps & {
  fields?: {
    NewsTitle?: Field<string>;
    NewsText?: RichTextField;
    NewsLink?: LinkField;
    ContactTitle?: Field<string>;
    ContactText?: RichTextField;
    ContactLink?: LinkField;
  };
};

export const Default = (props: BandProps) => {
  const { fields } = props;
  return (
    <section key={rootKey(props)} className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-2">
        <div>
          <GeaText field={fields?.NewsTitle} tag="h2" className="text-2xl font-medium text-[#0303B8]" />
          <GeaRichText field={fields?.NewsText} className="mt-3" />
          <GeaLink field={fields?.NewsLink} className="mt-4 inline-block text-[#0303B8] underline" />
        </div>
        <div>
          <GeaText field={fields?.ContactTitle} tag="h2" className="text-2xl font-medium text-[#0303B8]" />
          <GeaRichText field={fields?.ContactText} className="mt-3" />
          <GeaLink
            field={fields?.ContactLink}
            className="mt-4 inline-block rounded-full bg-[#0303B8] px-5 py-2 text-white"
          />
        </div>
      </div>
    </section>
  );
};
