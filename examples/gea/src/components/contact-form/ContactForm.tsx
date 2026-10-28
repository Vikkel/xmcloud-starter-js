'use client';

import { useState } from 'react';
import type { Field, RichTextField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from 'lib/component-props';
import { GeaRichText, GeaText, rootKey } from 'lib/gea-ui';

type FormProps = ComponentProps & {
  fields?: {
    Title?: Field<string>;
    Intro?: RichTextField;
    AreaLabel?: Field<string>;
    MessageLabel?: Field<string>;
    ContactInfoLabel?: Field<string>;
    SubmitLabel?: Field<string>;
    ThankYouText?: RichTextField;
  };
};

export const Default = (props: FormProps) => {
  const { fields } = props;
  const [submitted, setSubmitted] = useState(false);
  return (
    <section key={rootKey(props)} className="mx-auto max-w-3xl px-6 py-12">
      <GeaText field={fields?.Title} tag="h1" className="text-4xl font-medium text-[#0303B8]" />
      <GeaRichText field={fields?.Intro} className="mt-4" />
      {submitted ? (
        <GeaRichText field={fields?.ThankYouText} className="mt-8 text-lg" />
      ) : (
        <form
          className="mt-8 flex flex-col gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <label className="flex flex-col gap-1 text-sm">
            <GeaText field={fields?.AreaLabel} tag="span" />
            <select className="border border-[#ccc] px-3 py-2" name="area" defaultValue="Dairy">
              <option>Dairy</option>
              <option>Spray drying</option>
            </select>
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <GeaText field={fields?.MessageLabel} tag="span" />
            <textarea className="min-h-28 border border-[#ccc] px-3 py-2" name="message" />
          </label>
          <GeaText field={fields?.ContactInfoLabel} tag="p" className="font-medium" />
          <input className="border border-[#ccc] px-3 py-2" name="firstName" placeholder="First name" />
          <input className="border border-[#ccc] px-3 py-2" name="lastName" placeholder="Last name" />
          <input className="border border-[#ccc] px-3 py-2" name="email" type="email" placeholder="Email" />
          <input className="border border-[#ccc] px-3 py-2" name="company" placeholder="Company" />
          <button type="submit" className="mt-2 w-fit rounded-full bg-[#0303B8] px-6 py-2 text-white">
            {fields?.SubmitLabel?.value || 'Submit'}
          </button>
        </form>
      )}
    </section>
  );
};
