import { SF_SYMBOL_MAPPING } from './__generated/sf-symbol-mapping';
import { ICON_MAPPING } from './icon-mapping';
import type {
  MaterialCommunityIconsProps,
  MaterialIconName,
  MaterialIconsProps,
  SfSymbolIconName,
} from './types';

export function getIconNames(
  namingScheme: 'sfSymbol' | 'material',
  name?: MaterialIconName | SfSymbolIconName
) {
  if (!name) {
    return {};
  }
  if (namingScheme === 'sfSymbol') {
    const sfSymbolName = name as SfSymbolIconName;
    const icon = SF_SYMBOL_MAPPING[sfSymbolName];
    if (!icon) {
      return {};
    }
    return {
      sfSymbol: sfSymbolName,
      materialIcon: icon.type === 'MaterialIcons' ? icon.material : null,
      materialCommunityIcon:
        icon.type === 'MaterialCommunityIcons' ? icon.material : null,
    };
  }

  const icon = ICON_MAPPING[name as MaterialIconName];
  if (!icon) {
    return {};
  }
  return {
    sfSymbol: icon.sfSymbol,
    materialIcon:
      icon.type === 'MaterialIcons'
        ? (name as MaterialIconsProps['name'])
        : null,
    materialCommunityIcon:
      icon.type === 'MaterialCommunityIcons'
        ? (name as MaterialCommunityIconsProps['name'])
        : null,
  };
}
