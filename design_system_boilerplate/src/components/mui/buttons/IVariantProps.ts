enum Variant {
    contained = 'contained',
    outlined = 'outlined',
}

interface IButtonVariantProps {
    variant?: Variant | undefined;
}

export default IButtonVariantProps;
