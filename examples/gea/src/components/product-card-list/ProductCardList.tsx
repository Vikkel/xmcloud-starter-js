import { AppPlaceholder, type Field, type LinkField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';
import componentMap from '.sitecore/component-map';
import { GeaLink, GeaText, placeholderId, rootKey, variantOf } from 'lib/gea-ui';

type ListProps = ComponentProps & {
  fields?: {
    Title?: Field<string>;
    Link?: LinkField;
    Filters?: Field<string>;
  };
};

export const Default = (props: ListProps) => {
  const { fields } = props;
  const row = /row/i.test(variantOf(props.params));
  return (
    <section key={rootKey(props)} className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-4 flex items-end justify-between">
        <GeaText field={fields?.Title} tag="h2" className="text-3xl font-medium text-[#0303B8]" />
        <GeaLink field={fields?.Link} className="text-[#0303B8] underline" />
      </div>
      <GeaText field={fields?.Filters} tag="p" className="mb-4 text-sm text-[#555]" />
      <div className={row ? 'flex gap-4 overflow-x-auto' : 'grid gap-4 md:grid-cols-4'}>
        <AppPlaceholder
          page={props.page}
          componentMap={componentMap}
          name={`product-cards-${placeholderId(props.params)}`}
          rendering={props.rendering}
        />
      </div>
    </section>
  );
};

export const Grid = Default;
export const Row = Default;
