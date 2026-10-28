import type { Field, ImageField, RichTextField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';
import { GeaImage, GeaRichText, GeaText, rootKey } from 'lib/gea-ui';

type QuoteProps = ComponentProps & {
  fields?: {
    Quote?: RichTextField;
    Name?: Field<string>;
    Role?: Field<string>;
    Image?: ImageField;
  };
};

export const Default = (props: QuoteProps) => {
  const { fields } = props;
  return (
    <blockquote key={rootKey(props)} className="mx-auto flex max-w-5xl gap-6 px-6 py-10">
      <GeaImage field={fields?.Image} className="h-20 w-20 shrink-0 rounded-full" />
      <div>
        <GeaRichText field={fields?.Quote} className="text-2xl font-medium text-[#0303B8]" />
        <GeaText field={fields?.Name} tag="p" className="mt-4 font-medium" />
        <GeaText field={fields?.Role} tag="p" className="text-sm text-[#555]" />
      </div>
    </blockquote>
  );
};
