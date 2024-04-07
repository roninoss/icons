#!/usr/bin/env node

import { promises as fs } from 'fs';
import { ICON_MAPPING } from '../src/icon-mapping';

function generateMarkdownTable() {
  // Extract keys and sort them alphabetically
  const sortedKeys = Object.keys(ICON_MAPPING).sort();

  // Generate Markdown table header
  let markdownTable = '| Material Name | Material Type | SF Symbol Name |\n';
  markdownTable += '| --- | --- | --- |\n';

  // Generate rows for each key
  sortedKeys.forEach((key) => {
    const { sfSymbol, type } = ICON_MAPPING[key as 'person'];
    markdownTable += `| ${key} | ${type} | ${sfSymbol} |\n`;
  });

  return markdownTable;
}

async function main() {
  try {
    await fs.writeFile(
      'src/__generated/temp-icon-table.md',
      generateMarkdownTable()
    );
  } catch (error) {
    console.error(error);
  }
}

main();
