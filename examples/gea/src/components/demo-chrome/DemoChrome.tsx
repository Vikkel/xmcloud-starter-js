'use client';

import { JSX, Suspense } from 'react';
import { Default as CDPProfile } from 'components/cdp-profile/CDPProfile';
import { Default as ChatWidget } from 'components/chat-widget/ChatWidget';

export default function DemoChrome(): JSX.Element {
  return (
    <Suspense fallback={null}>
      <CDPProfile />
      <ChatWidget />
    </Suspense>
  );
}
