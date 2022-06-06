import { forwardRef } from 'react';
import {
  BaseProps,
  CONTAINER_STYLES,
  ContainerStyleProps,
  extractStyles,
  filterBaseProps,
  tasty,
} from 'tastycss';

const SpaceElement = tasty({
  styles: {
    display: 'flex',
    gap: true,
    flow: {
      '': 'row',
      vertical: 'column',
    },
    alignItems: {
      '': 'center',
      vertical: 'stretch',
    },
  },
});

export interface JengaSpaceProps extends BaseProps, ContainerStyleProps {
  direction?: 'vertical' | 'horizontal';
}

export const Space = forwardRef(function Space(props: JengaSpaceProps, ref) {
  const { mods, direction, ...otherProps } = props;
  const styles = extractStyles(otherProps, CONTAINER_STYLES);

  return (
    <SpaceElement
      {...filterBaseProps(otherProps, { eventProps: true })}
      mods={{
        vertical: direction === 'vertical',
        ...mods,
      }}
      styles={styles}
      ref={ref}
    />
  );
});