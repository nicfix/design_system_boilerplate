import IButtonProps from '../../../props/base/buttons/IButtonProps';
import IVariantProps from './IVariantProps';
import ISizeProps from './ISizeProps';
import IDataTestableProps from '../../../props/base/IDataTestableProps';

interface IBootstrapButtonProps
    extends IVariantProps,
        ISizeProps,
        IButtonProps,
        IDataTestableProps {}

export default IBootstrapButtonProps;
