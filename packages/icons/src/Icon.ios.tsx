// @refresh reset

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as React from 'react';
import { Platform } from 'react-native';
import SFSymbol from 'sweet-sfsymbols';
import { ICON_MAPPING } from './icon-mapping';

type SFSymbolProps = React.ComponentPropsWithoutRef<typeof SFSymbol>;
type MaterialIconsProps = React.ComponentPropsWithoutRef<typeof MaterialIcons>;
type MaterialCommunityIconsProps = React.ComponentPropsWithoutRef<
  typeof MaterialCommunityIcons
>;

type IOSProps =
  | { useMaterialIcon: true }
  | ({ useMaterialIcon?: false } & SFSymbolProps);
type OptionalIOSProps = { useMaterialIcon?: boolean } & Partial<SFSymbolProps>;

type MaterialProps =
  | ({ type: 'MaterialCommunityIcons' } & MaterialCommunityIconsProps)
  | ({ type: 'MaterialIcons' } & MaterialIconsProps);
type OptionalMaterialProps =
  | ({ type?: 'MaterialCommunityIcons' } & Partial<MaterialCommunityIconsProps>)
  | ({ type?: 'MaterialIcons' } & Partial<MaterialIconsProps>);

type IconName = keyof typeof ICON_MAPPING;

type IconPropsWithOptionalName = {
  name: IconName;
  color: string;
  size?: number;
  ios?: OptionalIOSProps;
  materialIcon?: OptionalMaterialProps;
};

type IconPropsWithRequiredName = Omit<
  IconPropsWithOptionalName,
  'name' | 'ios' | 'materialIcon'
> & {
  name?: IconName;
  ios: IOSProps;
  materialIcon: MaterialProps;
};

type IconProps = IconPropsWithOptionalName | IconPropsWithRequiredName;

// TODO: namingScheme

export function Icon({ name, color, size = 27, ios, materialIcon }: IconProps) {
  const { useMaterialIcon, ...sfSymbolProps } = ios ?? {};
  const sharedIcon = name ? ICON_MAPPING[name] : null;

  if (Platform.OS !== 'ios' || useMaterialIcon) {
    if (materialIcon?.type === 'MaterialCommunityIcons') {
      return (
        <MaterialCommunityIcons
          name={
            // @ts-expect-error
            materialIcon.name ?? sharedIcon?.ios ? name : sharedIcon?.android
          }
          size={size}
          color={color}
          {...materialIcon}
        />
      );
    }
    if (materialIcon?.type === 'MaterialIcons') {
      return (
        <MaterialIcons
          name={
            // @ts-expect-error
            materialIcon.name ?? sharedIcon?.ios ? name : sharedIcon?.android
          }
          size={size}
          color={color}
          {...materialIcon}
        />
      );
    }
    if (!name) return null;
    const materialProps = materialIcon ?? {};
    return ICON_MAPPING[name]?.type === 'MaterialCommunityIcons' ? (
      <MaterialCommunityIcons
        name={
          // @ts-expect-error
          materialIcon?.name ?? sharedIcon?.ios ? name : sharedIcon?.android
        }
        size={size}
        color={color}
        {...materialProps}
      />
    ) : (
      <MaterialIcons
        name={
          // @ts-expect-error
          materialIcon?.name ?? sharedIcon?.ios ? name : sharedIcon?.android
        }
        size={size}
        color={color}
        {...materialProps}
      />
    );
  }
  return (
    <SFSymbol
      size={size}
      scale={'small'}
      name={
        name
          ? ICON_MAPPING[name].ios ?? 'questionmark'
          : // ? ICON_MAPPING[name].ios ?? ICON_MAPPING[name]?.android ?? 'questionmark'
            'questionmark'
      }
      colors={[color]}
      {...sfSymbolProps}
    />
  );
}

// console.log(Object.keys(ICON_MAPPING).length); // 573

type IosNames = (typeof ICON_MAPPING)[keyof typeof ICON_MAPPING]['ios'];
type MaterialIconNames = keyof typeof ICON_MAPPING;
type IconNamesForMaterialIcons = typeof ICON_MAPPING;
type IconNamesFromIos = Record<
  IosNames,
  {
    type: 'MaterialIcons' | 'MaterialCommunityIcons';
    android: MaterialIconNames;
  }
>;

// Create other object maybe component to use either iOS or Material icon names since they share some same names
// const IOS_ICON_MAPPING = {}
// for (const key in IOS_ICON_MAPPING) {
//   const subObject = ICON_MAPPING[key as MaterialIconNames];
//   ICON_MAPPING[subObject.ios as IosNames] = {
//     ...subObject.default,
//     name: key as MaterialIconNames,
//   };
// }

// console.log(Object.keys(ICON_MAPPING));
