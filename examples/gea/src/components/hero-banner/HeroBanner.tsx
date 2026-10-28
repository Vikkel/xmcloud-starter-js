import type { Field, ImageField, LinkField, RichTextField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';
import { GeaImage, GeaLink, GeaRichText, GeaText, rootKey, variantOf } from 'lib/gea-ui';

type HeroProps = ComponentProps & {
  fields?: {
    Eyebrow?: Field<string>;
    Title?: Field<string>;
    Lede?: RichTextField;
    Image?: ImageField;
    PrimaryLink?: LinkField;
    SecondaryLink?: LinkField;
  };
};

const HeroView = ({ props, layout }: { props: HeroProps; layout: 'split' | 'case' }) => {
  const { fields } = props;
  const panel = layout === 'case' ? 'bg-[#111111]' : 'bg-[#0303B8]';
  return (
    <section key={rootKey(props)} className="grid md:grid-cols-2">
      <div className={`${panel} flex flex-col justify-center px-8 py-16 text-white md:px-16`}>
        <GeaText field={fields?.Eyebrow} tag="span" className="text-sm uppercase tracking-wide" />
        <GeaText field={fields?.Title} tag="h1" className="mt-3 text-4xl font-semibold uppercase md:text-5xl" />
        <GeaRichText field={fields?.Lede} className="mt-4 text-lg" />
        <div className="mt-8 flex flex-wrap gap-3">
          <GeaLink field={fields?.PrimaryLink} className="rounded-full bg-[#1AFF80] px-5 py-2 text-[#111]" />
          <GeaLink field={fields?.SecondaryLink} className="rounded-full border border-white px-5 py-2" />
        </div>
      </div>
      <GeaImage field={fields?.Image} className="min-h-[320px] w-full" />
    </section>
  );
};

export const Default = (props: HeroProps) => {
  const variant = variantOf(props.params);
  return <HeroView props={props} layout={/case/i.test(variant) ? 'case' : 'split'} />;
};

export const Split = (props: HeroProps) => <HeroView props={props} layout="split" />;
export const Case = (props: HeroProps) => <HeroView props={props} layout="case" />;
