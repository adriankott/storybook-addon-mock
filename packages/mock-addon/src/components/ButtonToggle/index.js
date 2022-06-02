import React from 'react';

import { opacify, transparentize } from 'polished';
import { styled } from '@storybook/theming';

const Label = styled.label(({ theme }) => ({
  lineHeight: '14px',
  alignItems: 'center',
  display: 'inline-block',
  position: 'relative',
  whiteSpace: 'nowrap',
  background: `${opacify(0.05, theme.appBorderColor)}`,
  borderRadius: '3em',
  padding: 1,

  input: {
    appearance: 'none',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    margin: 0,
    padding: 0,
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    borderRadius: '3em',

    '&:focus': {
      outline: 'none',
      boxShadow: `${theme.color.secondary} 0 0 0 1px inset !important`,
    },
  },

  span: {
    textAlign: 'center',
    fontSize: theme.typography.size.s1,
    fontWeight: theme.typography.weight.bold,
    lineHeight: '1',
    cursor: 'pointer',
    display: 'inline-block',
    padding: '5px',
    transition: 'all 100ms ease-out',
    userSelect: 'none',
    borderRadius: '3em',

    color: transparentize(0.4, theme.color.defaultText),
    background: 'transparent',

    '&:hover': {
      boxShadow: `${opacify(0.3, theme.appBorderColor)} 0 0 0 1px inset`,
    },

    '&:active': {
      boxShadow: `${opacify(0.05, theme.appBorderColor)} 0 0 0 2px inset`,
      color: opacify(1, theme.appBorderColor),
    },

    '&:first-of-type': {
      paddingRight: 8,
    },
    '&:last-of-type': {
      paddingLeft: 8,
    },
  },

  'input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type': {
    boxShadow: `${opacify(0.1, theme.appBorderColor)} 0 0 2px`,
    color: theme.color.defaultText,
    padding: '5px',
  },

  'input:checked ~ span:last-of-type': {
    background: theme.background.positive,
  },
  'input:not(:checked) ~ span:first-of-type': {
    background: theme.background.bar,
  }
}));

export const ButtonToggle = ({ name, value, onChange, onBlur, onFocus }) => {
  return (
    <Label htmlFor={name} title={value}>
      <input
        id={name}
        type="checkbox"
        onChange={(e) => onChange(e.target.checked)}
        checked={value || false}
        {...{ name, onBlur, onFocus }}
      />
      <span>Off</span>
      <span>On</span>
    </Label>
  );
};