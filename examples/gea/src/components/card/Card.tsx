import type { Field, ImageField, LinkField, RichTextField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';
import { GeaImage, GeaLink, GeaRichText, GeaText, rootKey } from 'lib/gea-ui';

type CardProps = ComponentProps & {
  fields?: {
    Image?: ImageField;
    Eyebrow?: Field<string>;
    Title?: Field<string>;
    Text?: RichTextField;
    Link?: LinkField;
  };
};

export const Default = (props: CardProps) => {
  const { fields } = props;
  return (
    <article key={rootKey(props)} className="flex flex-col bg-[#f5f5f5]">
      <GeaImage field={fields?.Image} className="h-44 w-full" />
      <div className="flex flex-1 flex-col p-5">
        <GeaText field={fields?.Eyebrow} tag="span" className="text-xs uppercase text-[#0303B8]" />
        <GeaText field={fields?.Title} tag="h3" className="mt-2 text-xl font-medium" />
        <GeaRichText field={fields?.Text} className="mt-2 flex-1 text-sm" />
        <GeaLink field={fields?.Link} className="mt-4 text-sm text-[#0303B8] underline" />
      </div>
    </article>
  );
};
