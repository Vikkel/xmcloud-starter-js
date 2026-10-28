import type { Field, RichTextField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';
import { GeaRichText, GeaText, rootKey, variantOf } from 'lib/gea-ui';

type LinkListProps = ComponentProps & {
  fields?: {
    Title?: Field<string>;
    Links?: RichTextField;
  };
};

export const Default = (props: LinkListProps) => {
  const plus = /plus/i.test(variantOf(props.params));
  return (
    <section key={rootKey(props)} className="mx-auto max-w-7xl px-6 py-8">
      <GeaText
        field={props.fields?.Title}
        tag="h2"
        className={plus ? 'text-3xl font-medium text-[#0303B8]' : 'text-xl font-medium'}
      />
      <GeaRichText field={props.fields?.Links} className="mt-4" />
    </section>
  );
};

export const Inline = (props: LinkListProps) => <Default {...props} />;
export const Plus = (props: LinkListProps) => <Default {...props} />;
