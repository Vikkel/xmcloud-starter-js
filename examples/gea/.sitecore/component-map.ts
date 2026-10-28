// Below are built-in components that are available in the app, it's recommended to keep them as is
import { NextjsContentSdkComponent } from '@sitecore-content-sdk/nextjs';


import { BYOCServerWrapper, FEaaSServerWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';

// end of built-in import section
import * as RichText from 'src/components/rich-text/RichText';
import * as Quote from 'src/components/quote/Quote';
import * as Promo from 'src/components/promo/Promo';
import * as ProductCardList from 'src/components/product-card-list/ProductCardList';
import * as ProductCard from 'src/components/product-card/ProductCard';
import * as ProcessStep from 'src/components/process-step/ProcessStep';
import * as ProcessLine from 'src/components/process-line/ProcessLine';
import * as PartialDesignDynamicPlaceholder from 'src/components/partial-design-dynamic-placeholder/PartialDesignDynamicPlaceholder';
import * as PageNav from 'src/components/page-nav/PageNav';
import * as NewsletterContactBand from 'src/components/newsletter-contact-band/NewsletterContactBand';
import * as LinkList from 'src/components/link-list/LinkList';
import * as IndustryTiles from 'src/components/industry-tiles/IndustryTiles';
import * as IndustryTile from 'src/components/industry-tile/IndustryTile';
import * as ImageGallery from 'src/components/image-gallery/ImageGallery';
import * as Image from 'src/components/image/Image';
import * as HeroSlide from 'src/components/hero-slide/HeroSlide';
import * as HeroCarousel from 'src/components/hero-carousel/HeroCarousel';
import * as HeroBanner from 'src/components/hero-banner/HeroBanner';
import * as Header from 'src/components/header/Header';
import * as Footer from 'src/components/footer/Footer';
import * as CtaBanner from 'src/components/cta-banner/CtaBanner';
import * as ContactForm from 'src/components/contact-form/ContactForm';
import * as CardGrid from 'src/components/card-grid/CardGrid';
import * as Card from 'src/components/card/Card';
import * as Breadcrumb from 'src/components/breadcrumb/Breadcrumb';

export const componentMap = new Map<string, NextjsContentSdkComponent>([
  ['BYOCWrapper', BYOCServerWrapper],
  ['FEaaSWrapper', FEaaSServerWrapper],
  ['Form', { ...Form, componentType: 'client' }],
  ['RichText', { ...RichText }],
  ['Quote', { ...Quote }],
  ['Promo', { ...Promo }],
  ['ProductCardList', { ...ProductCardList }],
  ['ProductCard', { ...ProductCard }],
  ['ProcessStep', { ...ProcessStep }],
  ['ProcessLine', { ...ProcessLine }],
  ['PartialDesignDynamicPlaceholder', { ...PartialDesignDynamicPlaceholder }],
  ['PageNav', { ...PageNav }],
  ['NewsletterContactBand', { ...NewsletterContactBand }],
  ['LinkList', { ...LinkList }],
  ['IndustryTiles', { ...IndustryTiles }],
  ['IndustryTile', { ...IndustryTile }],
  ['ImageGallery', { ...ImageGallery }],
  ['Image', { ...Image }],
  ['HeroSlide', { ...HeroSlide }],
  ['HeroCarousel', { ...HeroCarousel }],
  ['HeroBanner', { ...HeroBanner }],
  ['Header', { ...Header }],
  ['Footer', { ...Footer }],
  ['CtaBanner', { ...CtaBanner }],
  ['ContactForm', { ...ContactForm, componentType: 'client' }],
  ['CardGrid', { ...CardGrid }],
  ['Card', { ...Card }],
  ['Breadcrumb', { ...Breadcrumb }],
]);

export default componentMap;
