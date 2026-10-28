import type { Field, ImageField, RichTextField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';
import { GeaImage, GeaRichText, GeaText, rootKey } from 'lib/gea-ui';

type FooterProps = ComponentProps & {
  fields?: {
    Logo?: ImageField;
    AboutText?: RichTextField;
    ProductsColumn?: RichTextField;
    CompanyColumn?: RichTextField;
    QuickLinksColumn?: RichTextField;
    LegalText?: RichTextField;
    Copyright?: Field<string>;
  };
};

export const Default = (props: FooterProps) => {
  const { fields } = props;
  return (
    <footer key={rootKey(props)} className="bg-[#f4f4f4] text-sm text-[#111111]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4">
        <div>
          <GeaImage field={fields?.Logo} className="mb-4 h-8 w-auto" />
          <GeaRichText field={fields?.AboutText} />
        </div>
        <GeaRichText field={fields?.ProductsColumn} />
        <GeaRichText field={fields?.CompanyColumn} />
        <GeaRichText field={fields?.QuickLinksColumn} />
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-[#e0e0e0] px-6 py-4">
        <GeaRichText field={fields?.LegalText} />
        <GeaText field={fields?.Copyright} tag="span" />
      </div>
    </footer>
  );
};
