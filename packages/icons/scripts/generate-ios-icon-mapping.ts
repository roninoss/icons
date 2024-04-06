#!/usr/bin/env node

import { promises as fs } from 'fs';
import { ICON_MAPPING } from '../src/icon-mapping';

type IosName = (typeof ICON_MAPPING)[keyof typeof ICON_MAPPING]['ios'];

type IconMapping = Record<
  IosName,
  {
    type: 'MaterialIcons' | 'MaterialCommunityIcons';
    name: keyof typeof ICON_MAPPING;
  }
>;

async function main() {
  const IOS_ICON_MAPPING = {} as IconMapping;
  for (const key in ICON_MAPPING) {
    const subObject = ICON_MAPPING[key as keyof typeof ICON_MAPPING];
    IOS_ICON_MAPPING[subObject.ios as IosName] = {
      type: subObject.type,
      name: key as keyof typeof ICON_MAPPING,
    };
  }

  try {
    await fs.writeFile(
      'src/__generated/ios-icon-mapping.ts',
      `${JSON.stringify(IOS_ICON_MAPPING, null, 2)} as const\n`
    );
  } catch (error) {
    console.error(error);
  }
}

main();
