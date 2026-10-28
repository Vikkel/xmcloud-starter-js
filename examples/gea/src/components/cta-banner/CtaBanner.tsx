import type { Field, LinkField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';
import { GeaLink, GeaText, rootKey } from 'lib/gea-ui';

type CtaProps = ComponentProps & {
  fields?: {
    Title?: Field<string>;
    Link?: LinkField;
  };
};

export const Default = (props: CtaProps) => (
  <section key={rootKey(props)} className="bg-[#0303B8] px-6 py-14 text-center text-white">
    <GeaText field={props.fields?.Title} tag="h2" className="text-3xl font-medium" />
    <GeaLink
      field={props.fields?.Link}
      className="mt-6 inline-block rounded-full bg-[#1AFF80] px-5 py-2 text-[#111]"
    />
  </section>
);
