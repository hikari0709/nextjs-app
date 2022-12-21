import React from 'react';
import Card from './Card';

export default {
  title: 'Example/Card',
  component: Card
};

const Template = (args) => <Card {...args}>{args.text}</Card>;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Card!!',
  foundation: false,
  innerSize: 'medium'
};

// export const SampleCard = () => <Card>Sample Card!!</Card>;
// export const DemoCard = () => <Card>Demo Card!!</Card>;
