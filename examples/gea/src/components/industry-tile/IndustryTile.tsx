import type { Field, ImageField, LinkField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';
import { GeaImage, GeaLink, GeaText, rootKey } from 'lib/gea-ui';

type TileProps = ComponentProps & {
  fields?: {
    Icon?: ImageField;
    Label?: Field<string>;
    Link?: LinkField;
  };
};

export const Default = (props: TileProps) => {
  const { fields } = props;
  return (
    <article key={rootKey(props)} className="flex flex-col items-start gap-3 p-4">
      <GeaImage field={fields?.Icon} className="h-12 w-12" />
      <GeaText field={fields?.Label} tag="h3" className="text-lg font-medium" />
      <GeaLink field={fields?.Link} className="text-sm underline" />
    </article>
  );
};
