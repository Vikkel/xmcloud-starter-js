import type { Field, RichTextField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';
import { GeaRichText, GeaText, rootKey, variantOf } from 'lib/gea-ui';

type RichTextProps = ComponentProps & {
  fields?: {
    Heading?: Field<string>;
    Text?: RichTextField;
  };
};

const RichTextView = ({ props, lead }: { props: RichTextProps; lead: boolean }) => (
  <section key={rootKey(props)} className="mx-auto max-w-7xl px-6 py-10">
    <GeaText
      field={props.fields?.Heading}
      tag="h2"
      className={lead ? 'text-3xl font-medium text-[#0303B8]' : 'text-2xl font-medium text-[#0303B8]'}
    />
    <GeaRichText field={props.fields?.Text} className="prose mt-4 max-w-3xl" />
  </section>
);

export const Default = (props: RichTextProps) => (
  <RichTextView props={props} lead={/lead/i.test(variantOf(props.params))} />
);

export const Lead = (props: RichTextProps) => <RichTextView props={props} lead />;
