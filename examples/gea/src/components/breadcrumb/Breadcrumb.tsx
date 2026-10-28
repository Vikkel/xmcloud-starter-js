import type { Field } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';
import { GeaText, rootKey } from 'lib/gea-ui';

type BreadcrumbProps = ComponentProps & {
  fields?: {
    Trail?: Field<string>;
  };
};

export const Default = (props: BreadcrumbProps) => (
  <nav key={rootKey(props)} aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 py-4 text-sm text-[#555]">
    <GeaText field={props.fields?.Trail} tag="span" />
  </nav>
);
