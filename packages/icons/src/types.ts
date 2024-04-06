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

type IconPropsWithRequiredMaterialName = {
  name: MaterialIconName;
  namingScheme?: 'material';
  color?: string;
  size?: number;
  ios?: OptionalIOSProps;
  materialIcon?: OptionalMaterialProps;
};

type IconPropsWithRequiredSfSymbolName = {
  name: SfSymbolIconName;
  namingScheme: 'sfSymbol';
  color?: string;
  size?: number;
  ios?: OptionalIOSProps;
  materialIcon?: OptionalMaterialProps;
};

type IconPropsWithRequiredName =
  | IconPropsWithRequiredMaterialName
  | IconPropsWithRequiredSfSymbolName;

type IconPropsWithOptionalMaterialName = Omit<
  IconPropsWithRequiredMaterialName,
  'name' | 'ios' | 'materialIcon'
> & {
  name?: MaterialIconName;
  ios: IOSProps;
  materialIcon: MaterialProps;
};

type IconPropsWithOptionalSfSymbolName = Omit<
  IconPropsWithRequiredSfSymbolName,
  'name' | 'ios' | 'materialIcon'
> & {
  name?: SfSymbolIconName;
  ios: IOSProps;
  materialIcon: MaterialProps;
};

type IconPropsWithOptionalName =
  | IconPropsWithOptionalMaterialName
  | IconPropsWithOptionalSfSymbolName;

export type IconProps = IconPropsWithOptionalName | IconPropsWithRequiredName;
