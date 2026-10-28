import { AppPlaceholder, type Field, type ImageField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';
import componentMap from '.sitecore/component-map';
import { GeaImage, GeaText, placeholderId, rootKey } from 'lib/gea-ui';

type ProcessProps = ComponentProps & {
  fields?: {
    Title?: Field<string>;
    OverviewImage?: ImageField;
  };
};

export const Default = (props: ProcessProps) => {
  const { fields } = props;
  return (
    <section key={rootKey(props)} className="bg-[#f5f5f5] py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-[280px_1fr]">
        <div>
          <GeaText field={fields?.Title} tag="h2" className="text-3xl font-medium text-[#0303B8]" />
          <GeaImage field={fields?.OverviewImage} className="mt-6 min-h-[180px] w-full" />
        </div>
        <div className="flex flex-col gap-4">
          <AppPlaceholder
            page={props.page}
            componentMap={componentMap}
            name={`process-steps-${placeholderId(props.params)}`}
            rendering={props.rendering}
          />
        </div>
      </div>
    </section>
  );
};
