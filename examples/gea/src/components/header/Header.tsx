import type { Field, ImageField, LinkField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';
import { GeaImage, GeaLink, GeaText, rootKey } from 'lib/gea-ui';

type HeaderProps = ComponentProps & {
  fields?: {
    Logo?: ImageField;
    SearchPlaceholder?: Field<string>;
    LoginLink?: LinkField;
    LanguageLabel?: Field<string>;
    ContactLink?: LinkField;
    ProductsMenuLabel?: Field<string>;
    AboutLink?: LinkField;
    SustainabilityLink?: LinkField;
    InvestorsLink?: LinkField;
    MediaLink?: LinkField;
    CareersLink?: LinkField;
  };
};

const navClass = 'text-sm text-[#111111] hover:text-[#0303B8]';

export const Default = (props: HeaderProps) => {
  const { fields } = props;
  return (
    <div key={rootKey(props)} className="border-b border-[#e6e6e6] bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-end gap-5 px-6 py-2 text-sm">
        <GeaText field={fields?.SearchPlaceholder} tag="span" className="text-[#666]" />
        <GeaLink field={fields?.LoginLink} className={navClass} />
        <GeaText field={fields?.LanguageLabel} tag="span" />
        <GeaLink
          field={fields?.ContactLink}
          className="rounded-full bg-[#0303B8] px-4 py-1.5 text-sm text-white"
        />
      </div>
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-6 py-4">
        <GeaImage field={fields?.Logo} className="h-8 w-auto" />
        <GeaText field={fields?.ProductsMenuLabel} tag="span" className="text-sm font-medium" />
        <nav className="ml-auto flex gap-6">
          <GeaLink field={fields?.AboutLink} className={navClass} />
          <GeaLink field={fields?.SustainabilityLink} className={navClass} />
          <GeaLink field={fields?.InvestorsLink} className={navClass} />
          <GeaLink field={fields?.MediaLink} className={navClass} />
          <GeaLink field={fields?.CareersLink} className={navClass} />
        </nav>
      </div>
    </div>
  );
};
