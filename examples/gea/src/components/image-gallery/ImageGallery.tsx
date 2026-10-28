import type { Field, ImageField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';
import { GeaImage, GeaText, rootKey } from 'lib/gea-ui';

type GalleryProps = ComponentProps & {
  fields?: {
    Image1?: ImageField;
    Caption1?: Field<string>;
    Image2?: ImageField;
    Caption2?: Field<string>;
    Image3?: ImageField;
    Caption3?: Field<string>;
  };
};

const Frame = ({ image, caption }: { image?: ImageField; caption?: Field<string> }) => (
  <figure>
    <GeaImage field={image} className="h-56 w-full" />
    <figcaption className="mt-2 text-sm text-[#555]">
      <GeaText field={caption} tag="span" />
    </figcaption>
  </figure>
);

export const Default = (props: GalleryProps) => {
  const { fields } = props;
  return (
    <section key={rootKey(props)} className="mx-auto grid max-w-7xl gap-4 px-6 py-8 md:grid-cols-3">
      <Frame image={fields?.Image1} caption={fields?.Caption1} />
      <Frame image={fields?.Image2} caption={fields?.Caption2} />
      <Frame image={fields?.Image3} caption={fields?.Caption3} />
    </section>
  );
};
