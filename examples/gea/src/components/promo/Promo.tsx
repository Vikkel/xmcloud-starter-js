import type { Field, ImageField, LinkField, RichTextField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';
import { GeaImage, GeaLink, GeaRichText, GeaText, rootKey, variantOf } from 'lib/gea-ui';

type PromoProps = ComponentProps & {
  fields?: {
    Image?: ImageField;
    Eyebrow?: Field<string>;
    Title?: Field<string>;
    Text?: RichTextField;
    Link?: LinkField;
  };
};

const PromoView = ({ props, layout }: { props: PromoProps; layout: 'left' | 'right' | 'compact' }) => {
  const { fields } = props;
  if (layout === 'compact') {
    return (
      <section key={rootKey(props)} className="mx-auto max-w-7xl px-6 py-8">
        <div className="rounded-lg bg-[#f5f5f5] px-8 py-6">
          <GeaText field={fields?.Eyebrow} tag="span" className="text-sm uppercase text-[#0303B8]" />
          <GeaText field={fields?.Title} tag="h2" className="mt-2 text-2xl font-medium text-[#0303B8]" />
          <GeaRichText field={fields?.Text} className="mt-2" />
          <GeaLink field={fields?.Link} className="mt-3 inline-block text-[#0303B8] underline" />
        </div>
      </section>
    );
  }
  const imageFirst = layout === 'left';
  return (
    <section key={rootKey(props)} className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-10 md:grid-cols-2">
      {imageFirst && <GeaImage field={fields?.Image} className="min-h-[240px] w-full" />}
      <div>
        <GeaText field={fields?.Eyebrow} tag="span" className="text-sm uppercase text-[#0303B8]" />
        <GeaText field={fields?.Title} tag="h2" className="mt-2 text-3xl font-medium text-[#0303B8]" />
        <GeaRichText field={fields?.Text} className="mt-3" />
        <GeaLink field={fields?.Link} className="mt-4 inline-block rounded-full bg-[#1AFF80] px-5 py-2 text-[#111]" />
      </div>
      {!imageFirst && <GeaImage field={fields?.Image} className="min-h-[240px] w-full" />}
    </section>
  );
};

export const Default = (props: PromoProps) => {
  const variant = variantOf(props.params);
  if (/right/i.test(variant)) return <PromoView props={props} layout="right" />;
  if (/compact/i.test(variant)) return <PromoView props={props} layout="compact" />;
  return <PromoView props={props} layout="left" />;
};

export const ImageLeft = (props: PromoProps) => <PromoView props={props} layout="left" />;
export const ImageRight = (props: PromoProps) => <PromoView props={props} layout="right" />;
export const Compact = (props: PromoProps) => <PromoView props={props} layout="compact" />;
