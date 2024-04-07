import type MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import type MaterialIcons from '@expo/vector-icons/MaterialIcons';
import type SFSymbol from 'sweet-sfsymbols';
import type { SF_SYMBOL_MAPPING } from './__generated/sf-symbol-mapping';
import type { ICON_MAPPING } from './icon-mapping';

export type SFSymbolProps = React.ComponentPropsWithoutRef<typeof SFSymbol>;
export type MaterialIconsProps = React.ComponentPropsWithoutRef<
  typeof MaterialIcons
>;
export type MaterialCommunityIconsProps = React.ComponentPropsWithoutRef<
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

export type MaterialIconName = keyof typeof ICON_MAPPING;
export type SfSymbolIconName = keyof typeof SF_SYMBOL_MAPPING;

type IconBaseProps<T extends 'material' | 'sfSymbol'> = {
  namingScheme?: T;
  color?: string;
  size?: number;
  ios?: OptionalIOSProps;
  materialIcon?: OptionalMaterialProps;
};

type IconWithMaterialNameProps<T extends 'material' | 'sfSymbol'> = {
  name: MaterialIconName;
} & IconBaseProps<T>;

type IconWithSfSymbolNameProps<T extends 'material' | 'sfSymbol'> = {
  name: SfSymbolIconName;
} & IconBaseProps<T>;

type IconBaseWithOptionalNameProps<T extends 'material' | 'sfSymbol'> = {
  namingScheme?: T;
  color?: string;
  size?: number;
  ios: IOSProps;
  materialIcon: MaterialProps;
};

type IconWithOptionalMaterialNameProps<T extends 'material' | 'sfSymbol'> = {
  name?: MaterialIconName;
} & IconBaseWithOptionalNameProps<T>;

type IconWithOptionalSfSymbolNameProps<T extends 'material' | 'sfSymbol'> = {
  name?: SfSymbolIconName;
} & IconBaseWithOptionalNameProps<T>;

export type IconProps<T extends 'material' | 'sfSymbol'> = T extends 'sfSymbol'
  ? IconWithSfSymbolNameProps<T> | IconWithOptionalSfSymbolNameProps<T>
  : IconWithMaterialNameProps<T> | IconWithOptionalMaterialNameProps<T>;
