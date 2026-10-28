import type { Field, ImageField, RichTextField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';
import { GeaImage, GeaRichText, GeaText, rootKey } from 'lib/gea-ui';

type StepProps = ComponentProps & {
  fields?: {
    Title?: Field<string>;
    Text?: RichTextField;
    Image?: ImageField;
    ProductLinks?: RichTextField;
  };
};

export const Default = (props: StepProps) => {
  const { fields } = props;
  return (
    <article key={rootKey(props)} className="grid gap-4 bg-white p-5 md:grid-cols-[160px_1fr]">
      <GeaImage field={fields?.Image} className="h-28 w-full" />
      <div>
        <GeaText field={fields?.Title} tag="h3" className="text-lg font-medium text-[#0303B8]" />
        <GeaRichText field={fields?.Text} className="mt-2 text-sm" />
        <GeaRichText field={fields?.ProductLinks} className="mt-2 text-sm" />
      </div>
    </article>
  );
};
