import { AppPlaceholder } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';
import componentMap from '.sitecore/component-map';
import { placeholderId, rootKey } from 'lib/gea-ui';

export const Default = (props: ComponentProps) => (
  <section key={rootKey(props)} className="relative">
    <AppPlaceholder
      page={props.page}
      componentMap={componentMap}
      name={`hero-slides-${placeholderId(props.params)}`}
      rendering={props.rendering}
    />
  </section>
);
