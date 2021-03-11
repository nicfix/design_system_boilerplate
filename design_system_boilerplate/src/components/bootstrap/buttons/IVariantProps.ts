export enum Variant {
    primary = 'primary',
    secondary = 'secondary',
    success = 'success',
    warning = 'warning',
    danger = 'danger',
    info = 'info',
    light = 'light',
    dark = 'dark',
    link = 'link',
    outlinePrimary = 'outline-primary',
    outlineSecondary = 'outline-secondary',
    outlineSuccess = 'outline-success',
    outlineWarning = 'outline-warning',
    outlineDanger = 'outline-danger',
    outlineInfo = 'outline-info',
    outlineLight = 'outline-light',
    outlineDark = 'outline-dark',

}

interface IButtonVariantProps {
    variant?: Variant | undefined;
}

export default IButtonVariantProps;
