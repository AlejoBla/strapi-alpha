import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionSection extends Schema.Component {
  collectionName: 'components_section_sections';
  info: {
    displayName: 'Section';
    icon: 'apps';
  };
  attributes: {
    name: Attribute.String;
    type: Attribute.Enumeration<['text', 'image', 'video']>;
    placeholder: Attribute.String;
    position: Attribute.Integer;
    section_values: Attribute.JSON;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.section': SectionSection;
    }
  }
}
