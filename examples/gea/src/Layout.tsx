import React, { JSX, Suspense } from "react";
import dynamic from "next/dynamic";
import {
  Field,
  ImageField,
  Page,
  PageMetadataFields,
  DesignLibraryApp,
} from "@sitecore-content-sdk/nextjs";
import Scripts from "src/Scripts";
import SitecoreStyles from "components/content-sdk/SitecoreStyles";
import { AppPlaceholder } from "@sitecore-content-sdk/nextjs";
import componentMap from ".sitecore/component-map";

const CDPProfile = dynamic(
  () => import("components/cdp-profile/CDPProfile").then((mod) => mod.Default),
  { ssr: false },
);
const ChatWidget = dynamic(
  () => import("components/chat-widget/ChatWidget").then((mod) => mod.Default),
  { ssr: false },
);

interface LayoutProps {
  page: Page;
}

export interface RouteFields extends PageMetadataFields {
  [key: string]: unknown;
  Title?: Field;
  metadataTitle?: Field;
  metadataKeywords?: Field;
  pageTitle?: Field;
  metadataDescription?: Field;
  pageSummary?: Field;
  ogTitle?: Field;
  ogDescription?: Field;
  ogImage?: ImageField;
  thumbnailImage?: ImageField;
}

const Layout = ({ page }: LayoutProps): JSX.Element => {
  const { layout, mode } = page;
  const { route } = layout.sitecore;
  const mainClassPageEditing = mode.isEditing ? "editing-mode" : "prod-mode";

  return (
    <>
      <Scripts />
      <SitecoreStyles layoutData={layout} />
      {/* root placeholder for the app, which we add components to using route data */}
      <div className={mainClassPageEditing}>
        {mode.isDesignLibrary ? (
          route && (
            <DesignLibraryApp
              page={page}
              rendering={route}
              componentMap={componentMap}
              loadServerImportMap={() => import(".sitecore/import-map.server")}
            />
          )
        ) : (
          <>
            <header>
              <div id="header">
                {route && (
                  <AppPlaceholder
                    page={page}
                    componentMap={componentMap}
                    name="headless-header"
                    rendering={route}
                  />
                )}
              </div>
            </header>
            <main>
              <div id="content">
                {route && (
                  <AppPlaceholder
                    page={page}
                    componentMap={componentMap}
                    name="headless-main"
                    rendering={route}
                  />
                )}
              </div>
            </main>
            <footer>
              <div id="footer">
                {route && (
                  <AppPlaceholder
                    page={page}
                    componentMap={componentMap}
                    name="headless-footer"
                    rendering={route}
                  />
                )}
              </div>
            </footer>
            <Suspense fallback={null}>
              <CDPProfile />
              <ChatWidget />
            </Suspense>
          </>
        )}
      </div>
    </>
  );
};

export default Layout;
