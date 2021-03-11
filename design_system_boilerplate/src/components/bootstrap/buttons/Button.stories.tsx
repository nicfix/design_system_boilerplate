import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from './Button';
import IBootstrapButtonProps from './IBootstrapButtonProps';
import { Variant } from './IVariantProps';
import { Size } from './ISizeProps';

export default {
    title: 'Bootstrap/Base-Buttons',
    component: Button,
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: Object.values(Variant),
            },
        },
        size: {
            control: {
                type: 'select',
                options: Object.values(Size),
            },
        },
    },
} as Meta;

const Template: Story<IBootstrapButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: <>Hello World, I am a button</>,
};
