import type { Field, ImageField, LinkField, RichTextField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';
import { GeaImage, GeaLink, GeaRichText, GeaText, rootKey } from 'lib/gea-ui';

type ProductCardProps = ComponentProps & {
  fields?: {
    Image?: ImageField;
    Title?: Field<string>;
    Text?: RichTextField;
    Category?: Field<string>;
    Link?: LinkField;
  };
};

export const Default = (props: ProductCardProps) => {
  const { fields } = props;
  return (
    <article key={rootKey(props)} className="min-w-[220px] bg-white">
      <GeaImage field={fields?.Image} className="h-36 w-full" />
      <div className="p-4">
        <GeaText field={fields?.Category} tag="span" className="text-xs uppercase text-[#666]" />
        <GeaText field={fields?.Title} tag="h3" className="mt-1 font-medium" />
        <GeaRichText field={fields?.Text} className="mt-2 text-sm" />
        <GeaLink field={fields?.Link} className="mt-3 inline-block text-sm text-[#0303B8] underline" />
      </div>
    </article>
  );
};
