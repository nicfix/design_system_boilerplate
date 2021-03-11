import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from './Button';
import IMuiButtonProps from './IMuiButtonProps';

export default {
    title: 'Mui/Base-Buttons',
    component: Button,
    argTypes: {},
} as Meta;

const Template: Story<IMuiButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: <>Hello World, I am a button</>,
};
