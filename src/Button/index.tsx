import classNames from 'classnames';
import React, { forwardRef } from 'react';
import './style.less';
const ButtonTypes = [
  'default',
  'primary',
  'ghost',
  'dashed',
  'link',
  'text',
] as const;
export type ButtonType = (typeof ButtonTypes)[number];

const ButtonShapes = ['default', 'circle', 'round'] as const;
export type ButtonShape = (typeof ButtonShapes)[number];

export type SizeType = 'small' | 'middle' | 'large' | undefined;

interface forwardProp {
  test: () => void;
}

interface ButtonProps {
  type?: ButtonType;
  shape?: ButtonShape;
  size?: SizeType;
  disabled?: boolean;
  className?: string;
  danger?: boolean;
  children?: React.ReactNode;
  [key: `data-${string}`]: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

const InternalButton: React.ForwardRefRenderFunction<
  forwardProp,
  ButtonProps
> = (props, ref) => {
  const {
    type = 'default',
    shape = 'default',
    size = 'middle',
    disabled,
    className,
    danger,
    children,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    // ...rest
  } = props;
  function test() {
    console.log('props', props);
  }
  React.useImperativeHandle(ref, () => ({ test }));
  const prefixCls = 'jx-btn';

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
  ) => {
    const { onClick } = props;
    if (disabled) {
      e.preventDefault();
      return;
    }
    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(
      e,
    );
  };

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${shape}`]: shape !== 'default' && shape,
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-dangerous`]: !!danger,
      [`${prefixCls}-disabled`]: disabled,
    },
    className,
  );

  return (
    <button type="button" className={classes} onClick={handleClick}>
      {children}
    </button>
  );
};

const Button = forwardRef<forwardProp, ButtonProps>(InternalButton);

export default Button;
