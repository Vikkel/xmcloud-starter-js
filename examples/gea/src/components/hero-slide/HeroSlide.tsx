import type { Field, ImageField, LinkField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';
import { GeaImage, GeaLink, GeaText, rootKey } from 'lib/gea-ui';

type SlideProps = ComponentProps & {
  fields?: {
    Image?: ImageField;
    Eyebrow?: Field<string>;
    Title?: Field<string>;
    Link?: LinkField;
  };
};

export const Default = (props: SlideProps) => {
  const { fields } = props;
  return (
    <article key={rootKey(props)} className="relative min-h-[420px]">
      <GeaImage field={fields?.Image} className="absolute inset-0 h-full w-full" />
      <div className="relative z-10 flex min-h-[420px] max-w-3xl flex-col justify-end bg-gradient-to-r from-black/60 to-transparent p-10 text-white">
        <GeaText field={fields?.Eyebrow} tag="span" className="text-sm uppercase tracking-wide" />
        <GeaText field={fields?.Title} tag="h1" className="mt-2 text-4xl font-semibold uppercase" />
        <GeaLink field={fields?.Link} className="mt-6 inline-block w-fit rounded-full bg-[#1AFF80] px-5 py-2 text-[#111]" />
      </div>
    </article>
  );
};
