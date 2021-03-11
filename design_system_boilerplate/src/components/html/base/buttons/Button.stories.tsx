import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from './Button';
import IButtonProps from '../../../../props/base/buttons/IButtonProps';

export default {
    title: 'HTML/Buttons',
    component: Button,
    argTypes: {},
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: <>Hello World, I am a button</>,
};
