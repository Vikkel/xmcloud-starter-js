import type { Field, ImageField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';
import { GeaImage, GeaText, rootKey } from 'lib/gea-ui';

type ImageProps = ComponentProps & {
  fields?: {
    Image?: ImageField;
    Caption?: Field<string>;
  };
};

export const Default = (props: ImageProps) => (
  <figure key={rootKey(props)} className="mx-auto max-w-5xl px-6 py-6">
    <GeaImage field={props.fields?.Image} className="w-full" />
    <figcaption className="mt-2 text-sm text-[#555]">
      <GeaText field={props.fields?.Caption} tag="span" />
    </figcaption>
  </figure>
);
