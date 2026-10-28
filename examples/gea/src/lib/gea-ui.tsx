import {
  Image,
  Link,
  RichText,
  Text,
  type Field,
  type ImageField,
  type LinkField,
  type RichTextField,
} from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';

export type GeaParams = ComponentProps['params'] & {
  Variant?: string;
  DynamicPlaceholderId?: string;
};

export function variantOf(params: ComponentProps['params']): string {
  const value = (params as GeaParams | undefined)?.Variant;
  return typeof value === 'string' ? value : '';
}

export function placeholderId(params: ComponentProps['params']): string {
  const value = (params as GeaParams | undefined)?.DynamicPlaceholderId;
  return value && value.length > 0 ? value : '1';
}

export function rootKey(props: ComponentProps): string | undefined {
  return props.params?.RenderingIdentifier || props.rendering?.uid;
}

export function GeaText({
  field,
  tag = 'p',
  className,
}: {
  field?: Field<string>;
  tag?: 'p' | 'h1' | 'h2' | 'h3' | 'span';
  className?: string;
}) {
  if (!field) return null;
  return <Text tag={tag} field={field} className={className} />;
}

export function GeaRichText({ field, className }: { field?: RichTextField; className?: string }) {
  if (!field?.value) return null;
  return <RichText field={field} className={className} />;
}

export function GeaLink({
  field,
  className,
}: {
  field?: LinkField;
  className?: string;
}) {
  if (!field?.value?.href && !field?.value?.text) return null;
  return <Link field={field} className={className} />;
}

export function GeaImage({ field, className }: { field?: ImageField; className?: string }) {
  if (!field?.value?.src) {
    return <div className={`bg-[#d9d9ea] ${className ?? ''}`} aria-hidden="true" />;
  }
  return <Image field={field} className={`object-cover ${className ?? ''}`} />;
}
