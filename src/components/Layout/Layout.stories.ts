import type { Meta } from '@storybook/react';

import Layout from './Layout.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Layout> = {
  title: 'Example/Layout',
  component: Layout,
  tags: ['autodocs'],
};

export default meta;

export const LayoutConfig = {
  args: {

  }
}
