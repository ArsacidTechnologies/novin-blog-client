import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ButtonRegular, ButtonRegularProps } from './ButtonRegular';

export default {
  title: 'Example/ButtonRegular',
  component: ButtonRegular,
  argTypes: {
    className: { control: 'text' },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
    icon: { control: 'boolean' },
    iconPlacement: { control: 'select', options: ['left', 'right'] },
  },
} as Meta;

const Template: Story<ButtonRegularProps> = (args) => <ButtonRegular {...args} >
  {args.label}
</ButtonRegular>;

export const Regular = Template.bind({});
Regular.args = {
  label: 'Click',
  disabled: false,
  icon: true,
  iconPlacement: 'left',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled button',
  disabled: true,
  icon: true,
  iconPlacement: 'left',
};