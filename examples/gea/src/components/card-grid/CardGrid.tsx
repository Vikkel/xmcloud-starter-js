import { AppPlaceholder, type Field, type LinkField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';
import componentMap from '.sitecore/component-map';
import { GeaLink, GeaText, placeholderId, rootKey } from 'lib/gea-ui';

type GridProps = ComponentProps & {
  fields?: {
    Title?: Field<string>;
    Link?: LinkField;
  };
};

export const Default = (props: GridProps) => {
  const { fields } = props;
  return (
    <section key={rootKey(props)} className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <GeaText field={fields?.Title} tag="h2" className="text-3xl font-medium text-[#0303B8]" />
        <GeaLink field={fields?.Link} className="text-[#0303B8] underline" />
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <AppPlaceholder
          page={props.page}
          componentMap={componentMap}
          name={`cards-${placeholderId(props.params)}`}
          rendering={props.rendering}
        />
      </div>
    </section>
  );
};

export const Insights = Default;
export const News = Default;
export const Carousel = Default;
export const Promo = Default;
export const Feature = Default;
