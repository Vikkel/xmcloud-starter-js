import { AppPlaceholder } from '@sitecore-content-sdk/nextjs';
import type { Field } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';
import componentMap from '.sitecore/component-map';
import { GeaText, placeholderId, rootKey, variantOf } from 'lib/gea-ui';

type TilesProps = ComponentProps & {
  fields?: { Title?: Field<string> };
};

const TilesView = ({ props, blue }: { props: TilesProps; blue: boolean }) => (
  <section key={rootKey(props)} className={blue ? 'bg-[#0303B8] py-12 text-white' : 'bg-white py-12'}>
    <div className="mx-auto max-w-7xl px-6">
      <GeaText field={props.fields?.Title} tag="h2" className="mb-8 text-3xl font-medium" />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <AppPlaceholder
          page={props.page}
          componentMap={componentMap}
          name={`industry-tiles-${placeholderId(props.params)}`}
          rendering={props.rendering}
        />
      </div>
    </div>
  </section>
);

export const Default = (props: TilesProps) => (
  <TilesView props={props} blue={!/outline/i.test(variantOf(props.params))} />
);
export const Blue = (props: TilesProps) => <TilesView props={props} blue />;
export const Outline = (props: TilesProps) => <TilesView props={props} blue={false} />;
