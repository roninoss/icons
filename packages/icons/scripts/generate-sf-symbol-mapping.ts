#!/usr/bin/env node

import { promises as fs } from 'fs';
import { ICON_MAPPING } from '../src/icon-mapping';

type IosName = (typeof ICON_MAPPING)[keyof typeof ICON_MAPPING]['sfSymbol'];

type IconMapping = Record<
  IosName,
  {
    type: 'MaterialIcons' | 'MaterialCommunityIcons';
    material: keyof typeof ICON_MAPPING;
  }
>;

async function main() {
  const SF_SYMBOL_MAPPING = {} as IconMapping;
  for (const key in ICON_MAPPING) {
    const subObject = ICON_MAPPING[key as keyof typeof ICON_MAPPING];
    SF_SYMBOL_MAPPING[subObject.sfSymbol as IosName] = {
      type: subObject.type,
      material: key as keyof typeof ICON_MAPPING,
    };
  }

  try {
    await fs.writeFile(
      'src/__generated/sf-symbol-mapping.ts',
      `export const SF_SYMBOL_MAPPING = ${JSON.stringify(SF_SYMBOL_MAPPING, null, 2)} as const\n`
    );
  } catch (error) {
    console.error(error);
  }
}

main();
