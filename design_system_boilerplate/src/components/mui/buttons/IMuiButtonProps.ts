import IButtonProps from '../../../props/base/buttons/IButtonProps';
import IVariantProps from './IVariantProps';
import IColorProps from './IColorProps';
import IDataTestableProps from '../../../props/base/IDataTestableProps';

interface IMuiButtonProps
    extends IVariantProps,
        IColorProps,
        IButtonProps,
        IDataTestableProps {}

export default IMuiButtonProps;
