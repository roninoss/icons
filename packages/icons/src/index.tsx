// @refresh reset

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as React from 'react';
import { Platform } from 'react-native';
import SFSymbol from 'sweet-sfsymbols';

type IconName = keyof typeof ICON_NAMES;

type IOSProps =
  | { useMaterialIcon: true }
  | ({ useMaterialIcon?: false } & React.ComponentPropsWithoutRef<
      typeof SFSymbol
    >);
type OptionalIOSProps = { useMaterialIcon?: boolean } & Partial<
  React.ComponentPropsWithoutRef<typeof SFSymbol>
>;

type MaterialIconProps =
  | ({ type: 'MaterialCommunityIcons' } & React.ComponentPropsWithoutRef<
      typeof MaterialCommunityIcons
    >)
  | ({ type: 'MaterialIcons' } & React.ComponentPropsWithoutRef<
      typeof MaterialIcons
    >);
type OptionalMaterialIconProps =
  | ({ type?: 'MaterialCommunityIcons' } & Partial<
      React.ComponentPropsWithoutRef<typeof MaterialCommunityIcons>
    >)
  | ({ type?: 'MaterialIcons' } & Partial<
      React.ComponentPropsWithoutRef<typeof MaterialIcons>
    >);

type IconPropsWithOptionalName = {
  name: IconName;
  color: string;
  size?: number;
  ios?: OptionalIOSProps;
  materialIcon?: OptionalMaterialIconProps;
};

type IconPropsWithRequiredName = Omit<
  IconPropsWithOptionalName,
  'name' | 'ios' | 'materialIcon'
> & {
  name?: IconName;
  ios: IOSProps;
  materialIcon: MaterialIconProps;
};

type IconProps = IconPropsWithOptionalName | IconPropsWithRequiredName;

export function Icon({ name, color, size = 27, ios, materialIcon }: IconProps) {
  const { useMaterialIcon, ...sfSymbolProps } = ios ?? {};
  const sharedIcon = name ? ICON_NAMES[name] : null;

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
    return ICON_NAMES[name]?.type === 'MaterialCommunityIcons' ? (
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
          ? ICON_NAMES[name].ios ?? 'questionmark'
          : // ? ICON_NAMES[name].ios ?? ICON_NAMES[name]?.android ?? 'questionmark'
            'questionmark'
      }
      colors={[color]}
      {...sfSymbolProps}
    />
  );
}

export const ICON_NAMES = {
  'tray-arrow-up': {
    ios: 'square.and.arrow.up',
    type: 'MaterialCommunityIcons',
  },
  'tray-arrow-down': {
    ios: 'square.and.arrow.down',
    type: 'MaterialCommunityIcons',
  },
  'arrow-down-bold-box-outline': {
    ios: 'square.and.arrow.down.on.square',
    type: 'MaterialCommunityIcons',
  },
  'arrow-down-bold-box': {
    ios: 'square.and.arrow.down.on.square.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-right-bold-box-outline': {
    ios: 'rectangle.portrait.and.arrow.right',
    type: 'MaterialCommunityIcons',
  },
  'arrow-right-bold-box': {
    ios: 'rectangle.portrait.and.arrow.right.fill',
    type: 'MaterialCommunityIcons',
  },
  pencil: {
    ios: 'pencil',
    type: 'MaterialCommunityIcons',
  },
  'pencil-circle-outline': {
    ios: 'pencil.circle',
    type: 'MaterialCommunityIcons',
  },
  'pencil-circle': {
    ios: 'pencil.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'pencil-off': {
    ios: 'pencil.slash',
    type: 'MaterialCommunityIcons',
  },
  'progress-pencil': {
    ios: 'pencil.line',
    type: 'MaterialCommunityIcons',
  },
  eraser: {
    ios: 'eraser',
    type: 'MaterialCommunityIcons',
  },
  'eraser-variant': {
    ios: 'eraser.fill',
    type: 'MaterialCommunityIcons',
  },
  'pencil-box-outline': {
    ios: 'square.and.pencil',
    type: 'MaterialCommunityIcons',
  },
  'drive-file-rename-outline': {
    ios: 'rectangle.and.pencil.and.ellipsis',
    type: 'MaterialIcons',
  },
  draw: {
    ios: 'pencil.and.scribble',
    type: 'MaterialCommunityIcons',
  },
  marker: {
    ios: 'highlighter',
    type: 'MaterialCommunityIcons',
  },
  'fountain-pen-tip': {
    ios: 'pencil.tip',
    type: 'MaterialCommunityIcons',
  },
  'pencil-plus-outline': {
    ios: 'pencil.tip.crop.circle.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'pen-plus': {
    ios: 'pencil.tip.crop.circle.badge.plus.fill',
    type: 'MaterialCommunityIcons',
  },
  'pencil-minus-outline': {
    ios: 'pencil.tip.crop.circle.badge.minus',
    type: 'MaterialCommunityIcons',
  },
  'pen-minus': {
    ios: 'pencil.tip.crop.circle.badge.minus.fill',
    type: 'MaterialCommunityIcons',
  },
  lasso: {
    ios: 'lasso',
    type: 'MaterialCommunityIcons',
  },
  'trash-can-outline': {
    ios: 'trash',
    type: 'MaterialCommunityIcons',
  },
  'trash-can': {
    ios: 'trash.fill',
    type: 'MaterialCommunityIcons',
  },
  'delete-circle-outline': {
    ios: 'trash.circle',
    type: 'MaterialCommunityIcons',
  },
  'delete-circle': {
    ios: 'trash.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'delete-off-outline': {
    ios: 'trash.slash',
    type: 'MaterialCommunityIcons',
  },
  'delete-off': {
    ios: 'trash.slash.fill',
    type: 'MaterialCommunityIcons',
  },
  'restore-from-trash': {
    ios: 'arrow.up.trash.fill',
    type: 'MaterialIcons',
  },
  'folder-open': {
    ios: 'folder',
    type: 'MaterialIcons',
  },
  //
  folder: {
    ios: 'folder.fill',
    type: 'MaterialCommunityIcons',
  },
  'folder-plus-outline': {
    ios: 'folder.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'folder-plus': {
    ios: 'folder.fill.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'folder-remove-outline': {
    ios: 'folder.badge.minus',
    type: 'MaterialCommunityIcons',
  },
  'folder-remove': {
    ios: 'folder.fill.badge.minus',
    type: 'MaterialCommunityIcons',
  },
  'folder-account-outline': {
    ios: 'folder.badge.person.crop',
    type: 'MaterialCommunityIcons',
  },
  'folder-account': {
    ios: 'folder.fill.badge.person.crop',
    type: 'MaterialCommunityIcons',
  },
  'folder-cog-outline': {
    ios: 'folder.badge.gearshape',
    type: 'MaterialCommunityIcons',
  },
  'folder-cog': {
    ios: 'folder.fill.badge.gearshape',
    type: 'MaterialCommunityIcons',
  },
  'send-outline': {
    ios: 'paperplane',
    type: 'MaterialCommunityIcons',
  },
  send: {
    ios: 'paperplane.fill',
    type: 'MaterialCommunityIcons',
  },
  'send-circle-outline': {
    ios: 'paperplane.circle',
    type: 'MaterialCommunityIcons',
  },
  'send-circle': {
    ios: 'paperplane.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  tray: {
    ios: 'tray',
    type: 'MaterialCommunityIcons',
  },
  inbox: {
    ios: 'tray.fill',
    type: 'MaterialCommunityIcons',
  },
  'inbox-full-outline': {
    ios: 'tray.full',
    type: 'MaterialCommunityIcons',
  },
  'inbox-full': {
    ios: 'tray.full.fill',
    type: 'MaterialCommunityIcons',
  },
  'inbox-arrow-up-outline': {
    ios: 'tray.and.arrow.up',
    type: 'MaterialCommunityIcons',
  },
  'inbox-arrow-up': {
    ios: 'tray.and.arrow.up.fill',
    type: 'MaterialCommunityIcons',
  },
  'inbox-arrow-down-outline': {
    ios: 'tray.and.arrow.down',
    type: 'MaterialCommunityIcons',
  },
  'inbox-arrow-down': {
    ios: 'tray.and.arrow.down.fill',
    type: 'MaterialCommunityIcons',
  },
  'inbox-multiple-outline': {
    ios: 'tray.2',
    type: 'MaterialCommunityIcons',
  },
  'inbox-multiple': {
    ios: 'tray.2.fill',
    type: 'MaterialCommunityIcons',
  },
  'database-outline': {
    ios: 'externaldrive',
    type: 'MaterialCommunityIcons',
  },
  database: {
    ios: 'externaldrive.fill',
    type: 'MaterialCommunityIcons',
  },
  'database-plus-outline': {
    ios: 'externaldrive.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'database-plus': {
    ios: 'externaldrive.fill.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'database-minus-outline': {
    ios: 'externaldrive.badge.minus',
    type: 'MaterialCommunityIcons',
  },
  'database-minus': {
    ios: 'externaldrive.fill.badge.minus',
    type: 'MaterialCommunityIcons',
  },
  'database-check-outline': {
    ios: 'externaldrive.badge.checkmark',
    type: 'MaterialCommunityIcons',
  },
  'database-check': {
    ios: 'externaldrive.fill.badge.checkmark',
    type: 'MaterialCommunityIcons',
  },
  'database-remove-outline': {
    ios: 'externaldrive.badge.xmark',
    type: 'MaterialCommunityIcons',
  },
  'database-remove': {
    ios: 'externaldrive.fill.badge.xmark',
    type: 'MaterialCommunityIcons',
  },
  'database-alert-outline': {
    ios: 'externaldrive.badge.exclamationmark',
    type: 'MaterialCommunityIcons',
  },
  'database-alert': {
    ios: 'externaldrive.fill.badge.exclamationmark',
    type: 'MaterialCommunityIcons',
  },
  'database-clock-outline': {
    ios: 'externaldrive.badge.timemachine',
    type: 'MaterialCommunityIcons',
  },
  'database-clock': {
    ios: 'externaldrive.fill.badge.timemachine',
    type: 'MaterialCommunityIcons',
  },
  'archive-outline': {
    ios: 'archivebox',
    type: 'MaterialCommunityIcons',
  },
  archive: {
    ios: 'archivebox.fill',
    type: 'MaterialCommunityIcons',
  },
  'archive-remove-outline': {
    ios: 'xmark.bin',
    type: 'MaterialCommunityIcons',
  },
  'archive-remove': {
    ios: 'xmark.bin.fill',
    type: 'MaterialCommunityIcons',
  },
  'archive-arrow-up-outline': {
    ios: 'arrow.up.bin',
    type: 'MaterialCommunityIcons',
  },
  'archive-arrow-up': {
    ios: 'arrow.up.bin.fill',
    type: 'MaterialCommunityIcons',
  },
  'file-document-outline': {
    ios: 'doc',
    type: 'MaterialCommunityIcons',
  },
  'file-document': {
    ios: 'doc.fill',
    type: 'MaterialCommunityIcons',
  },
  'file-plus-outline': {
    ios: 'doc.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'file-plus': {
    ios: 'doc.fill.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'file-upload-outline': {
    ios: 'arrow.up.doc',
    type: 'MaterialCommunityIcons',
  },
  'file-upload': {
    ios: 'arrow.up.doc.fill',
    type: 'MaterialCommunityIcons',
  },
  'file-clock-outline': {
    ios: 'doc.badge.clock',
    type: 'MaterialCommunityIcons',
  },
  'file-clock': {
    ios: 'doc.badge.clock.fill',
    type: 'MaterialCommunityIcons',
  },
  'file-cog-outline': {
    ios: 'doc.badge.gearshape',
    type: 'MaterialCommunityIcons',
  },
  'file-cog': {
    ios: 'doc.badge.gearshape.fill',
    type: 'MaterialCommunityIcons',
  },
  'file-lock-outline': {
    ios: 'lock.doc',
    type: 'MaterialCommunityIcons',
  },
  'file-lock': {
    ios: 'lock.doc.fill',
    type: 'MaterialCommunityIcons',
  },
  'file-download-outline': {
    ios: 'arrow.down.doc',
    type: 'MaterialCommunityIcons',
  },
  'file-download': {
    ios: 'arrow.down.doc.fill',
    type: 'MaterialCommunityIcons',
  },
  'file-document-multiple-outline': {
    ios: 'doc.on.doc',
    type: 'MaterialCommunityIcons',
  },
  'file-document-multiple': {
    ios: 'doc.on.doc.fill',
    type: 'MaterialCommunityIcons',
  },
  'file-copy': {
    ios: 'doc.on.clipboard.fill',
    type: 'MaterialIcons',
  },
  'clipboard-outline': {
    ios: 'clipboard',
    type: 'MaterialCommunityIcons',
  },
  clipboard: {
    ios: 'clipboard.fill',
    type: 'MaterialCommunityIcons',
  },
  'clipboard-list-outline': {
    ios: 'list.clipboard',
    type: 'MaterialCommunityIcons',
  },
  'clipboard-list': {
    ios: 'list.clipboard.fill',
    type: 'MaterialCommunityIcons',
  },
  'clipboard-edit-outline': {
    ios: 'pencil.and.list.clipboard',
    type: 'MaterialCommunityIcons',
  },
  'image-text': {
    ios: 'doc.richtext',
    type: 'MaterialCommunityIcons',
  },
  'file-question-outline': {
    ios: 'doc.questionmark',
    type: 'MaterialCommunityIcons',
  },
  'file-question': {
    ios: 'doc.questionmark.fill',
    type: 'MaterialCommunityIcons',
  },
  'card-bulleted-outline': {
    ios: 'list.bullet.rectangle',
    type: 'MaterialCommunityIcons',
  },
  'card-bulleted': {
    ios: 'list.bullet.rectangle.fill',
    type: 'MaterialCommunityIcons',
  },
  'file-search-outline': {
    ios: 'doc.text.magnifyingglass',
    type: 'MaterialCommunityIcons',
  },
  'note-outline': {
    ios: 'note',
    type: 'MaterialCommunityIcons',
  },
  'note-text-outline': {
    ios: 'note.text',
    type: 'MaterialCommunityIcons',
  },
  'calendar-month': {
    ios: 'calendar',
    type: 'MaterialCommunityIcons',
  },
  'calendar-plus': {
    ios: 'calendar.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'calendar-minus': {
    ios: 'calendar.badge.minus',
    type: 'MaterialCommunityIcons',
  },
  'calendar-clock': {
    ios: 'calendar.badge.clock',
    type: 'MaterialCommunityIcons',
  },
  'calendar-alert': {
    ios: 'calendar.badge.exclamationmark',
    type: 'MaterialCommunityIcons',
  },
  'calendar-check': {
    ios: 'calendar.badge.checkmark',
    type: 'MaterialCommunityIcons',
  },
  'arrow-left-bold-outline': {
    ios: 'arrowshape.left',
    type: 'MaterialCommunityIcons',
  },
  'arrow-left-bold': {
    ios: 'arrowshape.left.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-left-bold-circle-outline': {
    ios: 'arrowshape.left.circle',
    type: 'MaterialCommunityIcons',
  },
  'arrow-left-bold-circle': {
    ios: 'arrowshape.left.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-right-bold-outline': {
    ios: 'arrowshape.right',
    type: 'MaterialCommunityIcons',
  },
  'arrow-right-bold': {
    ios: 'arrowshape.right.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-right-bold-circle-outline': {
    ios: 'arrowshape.right.circle',
    type: 'MaterialCommunityIcons',
  },
  'arrow-right-bold-circle': {
    ios: 'arrowshape.right.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-up-bold-outline': {
    ios: 'arrowshape.up',
    type: 'MaterialCommunityIcons',
  },
  'arrow-up-bold': {
    ios: 'arrowshape.up.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-up-bold-circle-outline': {
    ios: 'arrowshape.up.circle',
    type: 'MaterialCommunityIcons',
  },
  'arrow-up-bold-circle': {
    ios: 'arrowshape.up.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-down-bold-outline': {
    ios: 'arrowshape.down',
    type: 'MaterialCommunityIcons',
  },
  'arrow-down-bold': {
    ios: 'arrowshape.down.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-down-bold-circle-outline': {
    ios: 'arrowshape.down.circle',
    type: 'MaterialCommunityIcons',
  },
  'arrow-down-bold-circle': {
    ios: 'arrowshape.down.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-left-right-bold-outline': {
    ios: 'arrowshape.left.arrowshape.right',
    type: 'MaterialCommunityIcons',
  },
  'arrow-left-right-bold': {
    ios: 'arrowshape.left.arrowshape.right.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-left-top': {
    ios: 'arrowshape.turn.up.left',
    type: 'MaterialCommunityIcons',
  },
  'arrow-left-top-bold': {
    ios: 'arrowshape.turn.up.left.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-right-top': {
    ios: 'arrowshape.turn.up.right',
    type: 'MaterialCommunityIcons',
  },
  'arrow-right-top-bold': {
    ios: 'arrowshape.turn.up.right.fill',
    type: 'MaterialCommunityIcons',
  },
  'book-open-outline': {
    ios: 'book',
    type: 'MaterialCommunityIcons',
  },
  'book-open': {
    ios: 'book.fill',
    type: 'MaterialCommunityIcons',
  },
  bookshelf: {
    ios: 'books.vertical.fill',
    type: 'MaterialCommunityIcons',
  },
  'menu-book': {
    ios: 'menucard.fill',
    type: 'MaterialIcons',
  },
  newspaper: {
    ios: 'newspaper',
    type: 'MaterialCommunityIcons',
  },
  'newspaper-variant': {
    ios: 'newspaper.fill',
    type: 'MaterialCommunityIcons',
  },
  'bookmark-outline': {
    ios: 'bookmark',
    type: 'MaterialCommunityIcons',
  },
  bookmark: {
    ios: 'bookmark.fill',
    type: 'MaterialCommunityIcons',
  },
  'bookmark-off-outline': {
    ios: 'bookmark.slash',
    type: 'MaterialCommunityIcons',
  },
  'bookmark-off': {
    ios: 'bookmark.slash.fill',
    type: 'MaterialCommunityIcons',
  },
  'pencil-ruler': {
    ios: 'pencil.and.ruler.fill',
    type: 'MaterialCommunityIcons',
  },
  ruler: {
    ios: 'ruler.fill',
    type: 'MaterialCommunityIcons',
  },
  backpack: {
    ios: 'backpack.fill',
    type: 'MaterialIcons',
  },
  paperclip: {
    ios: 'paperclip',
    type: 'MaterialCommunityIcons',
  },
  link: {
    ios: 'link',
    type: 'MaterialCommunityIcons',
  },
  'link-plus': {
    ios: 'link.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'vector-link': {
    ios: 'personalhotspot',
    type: 'MaterialCommunityIcons',
  },
  'person-outline': {
    ios: 'person',
    type: 'MaterialIcons',
  },
  person: {
    ios: 'person.fill',
    type: 'MaterialIcons',
  },
  'account-circle-outline': {
    ios: 'person.circle',
    type: 'MaterialCommunityIcons',
  },
  'account-circle': {
    ios: 'person.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'account-off-outline': {
    ios: 'person.slash',
    type: 'MaterialCommunityIcons',
  },
  'account-off': {
    ios: 'person.slash.fill',
    type: 'MaterialCommunityIcons',
  },
  'account-check': {
    ios: 'person.fill.checkmark',
    type: 'MaterialCommunityIcons',
  },
  'account-remove': {
    ios: 'person.fill.xmark',
    type: 'MaterialCommunityIcons',
  },
  'account-question': {
    ios: 'person.fill.questionmark',
    type: 'MaterialCommunityIcons',
  },
  'account-plus-outline': {
    ios: 'person.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'account-minus-outline': {
    ios: 'person.badge.minus',
    type: 'MaterialCommunityIcons',
  },
  'account-clock-outline': {
    ios: 'person.badge.clock',
    type: 'MaterialCommunityIcons',
  },
  'account-clock': {
    ios: 'person.badge.clock.fill',
    type: 'MaterialCommunityIcons',
  },
  'account-key-outline': {
    ios: 'person.badge.key',
    type: 'MaterialCommunityIcons',
  },
  'account-key': {
    ios: 'person.badge.key.fill',
    type: 'MaterialCommunityIcons',
  },
  'account-multiple-outline': {
    ios: 'person.2',
    type: 'MaterialCommunityIcons',
  },
  'account-multiple': {
    ios: 'person.2.fill',
    type: 'MaterialCommunityIcons',
  },
  'account-voice': {
    ios: 'person.wave.2.fill',
    type: 'MaterialCommunityIcons',
  },
  'image-frame': {
    ios: 'photo.artframe',
    type: 'MaterialCommunityIcons',
  },
  checkerboard: {
    ios: 'rectangle.checkered',
    type: 'MaterialCommunityIcons',
  },
  accessibility: {
    ios: 'accessibility',
    type: 'MaterialIcons',
  },
  dumbbell: {
    ios: 'dumbbell.fill',
    type: 'MaterialCommunityIcons',
  },
  'soccer-field': {
    ios: 'sportscourt',
    type: 'MaterialCommunityIcons',
  },
  soccer: {
    ios: 'soccerball',
    type: 'MaterialCommunityIcons',
  },
  baseball: {
    ios: 'baseball.fill',
    type: 'MaterialCommunityIcons',
  },
  basketball: {
    ios: 'basketball.fill',
    type: 'MaterialCommunityIcons',
  },
  football: {
    ios: 'football.fill',
    type: 'MaterialCommunityIcons',
  },
  tennis: {
    ios: 'tennis.racket',
    type: 'MaterialCommunityIcons',
  },
  'hockey-puck': {
    ios: 'hockey.puck.fill',
    type: 'MaterialCommunityIcons',
  },
  cricket: {
    ios: 'cricket.ball.fill',
    type: 'MaterialCommunityIcons',
  },
  'tennis-ball': {
    ios: 'tennisball.fill',
    type: 'MaterialCommunityIcons',
  },
  volleyball: {
    ios: 'volleyball.fill',
    type: 'MaterialCommunityIcons',
  },
  skateboard: {
    ios: 'skateboard',
    type: 'MaterialCommunityIcons',
  },
  ski: {
    ios: 'skis',
    type: 'MaterialCommunityIcons',
  },
  surfing: {
    ios: 'surfboard',
    type: 'MaterialCommunityIcons',
  },
  'trophy-outline': {
    ios: 'trophy',
    type: 'MaterialCommunityIcons',
  },
  trophy: {
    ios: 'trophy.fill',
    type: 'MaterialCommunityIcons',
  },
  'medal-outline': {
    ios: 'medal',
    type: 'MaterialCommunityIcons',
  },
  medal: {
    ios: 'medal.fill',
    type: 'MaterialCommunityIcons',
  },
  'apple-keyboard-command': {
    ios: 'command',
    type: 'MaterialCommunityIcons',
  },
  'keyboard-space': {
    ios: 'space',
    type: 'MaterialCommunityIcons',
  },
  'apple-keyboard-option': {
    ios: 'option',
    type: 'MaterialCommunityIcons',
  },
  restart: {
    ios: 'restart',
    type: 'MaterialCommunityIcons',
  },
  sleep: {
    ios: 'zzz',
    type: 'MaterialCommunityIcons',
  },
  power: {
    ios: 'power',
    type: 'MaterialCommunityIcons',
  },
  'power-cycle': {
    ios: 'togglepower',
    type: 'MaterialCommunityIcons',
  },
  'power-on': {
    ios: 'poweron',
    type: 'MaterialCommunityIcons',
  },
  'power-off': {
    ios: 'poweroff',
    type: 'MaterialCommunityIcons',
  },
  'power-sleep': {
    ios: 'powersleep',
    type: 'MaterialCommunityIcons',
  },
  'alpha-x-box-outline': {
    ios: 'clear',
    type: 'MaterialCommunityIcons',
  },
  'alpha-x-box': {
    ios: 'clear.fill',
    type: 'MaterialCommunityIcons',
  },
  'keyboard-backspace': {
    ios: 'delete.left',
    type: 'MaterialCommunityIcons',
  },
  'apple-keyboard-shift': {
    ios: 'shift',
    type: 'MaterialCommunityIcons',
  },
  'apple-keyboard-caps': {
    ios: 'capslock',
    type: 'MaterialCommunityIcons',
  },
  'keyboard-outline': {
    ios: 'keyboard',
    type: 'MaterialCommunityIcons',
  },
  keyboard: {
    ios: 'keyboard.fill',
    type: 'MaterialCommunityIcons',
  },
  'keyboard-settings-outline': {
    ios: 'keyboard.badge.ellipsis',
    type: 'MaterialCommunityIcons',
  },
  'keyboard-settings': {
    ios: 'keyboard.badge.ellipsis.fill',
    type: 'MaterialCommunityIcons',
  },
  web: {
    ios: 'globe',
    type: 'MaterialCommunityIcons',
  },
  'access-point-network': {
    ios: 'network',
    type: 'MaterialCommunityIcons',
  },
  'access-point-network-off': {
    ios: 'network.slash',
    type: 'MaterialCommunityIcons',
  },
  'weather-sunny': {
    ios: 'sun.min',
    type: 'MaterialCommunityIcons',
  },
  'white-balance-sunny': {
    ios: 'sun.max.fill',
    type: 'MaterialCommunityIcons',
  },
  'weather-sunny-alert': {
    ios: 'sun.max.trianglebadge.exclamationmark',
    type: 'MaterialCommunityIcons',
  },
  'weather-night': {
    ios: 'moon.stars',
    type: 'MaterialCommunityIcons',
  },
  'nightlight-round': {
    ios: 'moon.fill',
    type: 'MaterialIcons',
  },
  'star-four-points': {
    ios: 'sparkle',
    type: 'MaterialCommunityIcons',
  },
  'cloud-outline': {
    ios: 'cloud',
    type: 'MaterialCommunityIcons',
  },
  cloud: {
    ios: 'cloud.fill',
    type: 'MaterialCommunityIcons',
  },
  'weather-rainy': {
    ios: 'cloud.rain',
    type: 'MaterialCommunityIcons',
  },
  'weather-lightning': {
    ios: 'cloud.bolt',
    type: 'MaterialCommunityIcons',
  },
  'weather-tornado': {
    ios: 'tornado',
    type: 'MaterialCommunityIcons',
  },
  'sun-thermometer-outline': {
    ios: 'thermometer.sun',
    type: 'MaterialCommunityIcons',
  },
  'sun-thermometer': {
    ios: 'thermometer.sun.fill',
    type: 'MaterialCommunityIcons',
  },
  'water-outline': {
    ios: 'drop',
    type: 'MaterialCommunityIcons',
  },
  water: {
    ios: 'drop.fill',
    type: 'MaterialCommunityIcons',
  },
  'water-circle': {
    ios: 'drop.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  fire: {
    ios: 'flame',
    type: 'MaterialCommunityIcons',
  },
  'fire-circle': {
    ios: 'flame.circle',
    type: 'MaterialCommunityIcons',
  },
  'umbrella-outline': {
    ios: 'umbrella',
    type: 'MaterialCommunityIcons',
  },
  umbrella: {
    ios: 'umbrella.fill',
    type: 'MaterialCommunityIcons',
  },
  'play-outline': {
    ios: 'play',
    type: 'MaterialCommunityIcons',
  },
  play: {
    ios: 'play.fill',
    type: 'MaterialCommunityIcons',
  },
  'play-circle-outline': {
    ios: 'play.circle',
    type: 'MaterialCommunityIcons',
  },
  'play-circle': {
    ios: 'play.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'play-box-outline': {
    ios: 'play.square',
    type: 'MaterialCommunityIcons',
  },
  'play-box': {
    ios: 'play.square.fill',
    type: 'MaterialCommunityIcons',
  },
  'play-box-multiple-outline': {
    ios: 'play.square.stack',
    type: 'MaterialCommunityIcons',
  },
  'play-box-multiple': {
    ios: 'play.square.stack.fill',
    type: 'MaterialCommunityIcons',
  },
  pause: {
    ios: 'pause',
    type: 'MaterialCommunityIcons',
  },
  'pause-circle-outline': {
    ios: 'pause.circle',
    type: 'MaterialCommunityIcons',
  },
  'pause-circle': {
    ios: 'pause.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  stop: {
    ios: 'stop.fill',
    type: 'MaterialCommunityIcons',
  },
  'stop-circle-outline': {
    ios: 'stop.circle',
    type: 'MaterialCommunityIcons',
  },
  'stop-circle': {
    ios: 'stop.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'record-circle-outline': {
    ios: 'record.circle',
    type: 'MaterialCommunityIcons',
  },
  'record-circle': {
    ios: 'record.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'play-pause': {
    ios: 'playpause.fill',
    type: 'MaterialCommunityIcons',
  },
  'rewind-outline': {
    ios: 'backward',
    type: 'MaterialCommunityIcons',
  },
  rewind: {
    ios: 'backward.fill',
    type: 'MaterialCommunityIcons',
  },
  'fast-forward-outline': {
    ios: 'forward',
    type: 'MaterialCommunityIcons',
  },
  'fast-forward': {
    ios: 'forward.fill',
    type: 'MaterialCommunityIcons',
  },
  'skip-backward-outline': {
    ios: 'backward.end',
    type: 'MaterialCommunityIcons',
  },
  'skip-backward': {
    ios: 'backward.end.fill',
    type: 'MaterialCommunityIcons',
  },
  'skip-forward-outline': {
    ios: 'forward.end',
    type: 'MaterialCommunityIcons',
  },
  'skip-forward': {
    ios: 'forward.end.fill',
    type: 'MaterialCommunityIcons',
  },
  'step-backward': {
    ios: 'backward.frame.fill',
    type: 'MaterialCommunityIcons',
  },
  'step-forward': {
    ios: 'forward.frame.fill',
    type: 'MaterialCommunityIcons',
  },
  shuffle: {
    ios: 'shuffle',
    type: 'MaterialCommunityIcons',
  },
  repeat: {
    ios: 'repeat',
    type: 'MaterialCommunityIcons',
  },
  'repeat-once': {
    ios: 'repeat.1',
    type: 'MaterialCommunityIcons',
  },
  infinity: {
    ios: 'infinity',
    type: 'MaterialCommunityIcons',
  },
  'bullhorn-outline': {
    ios: 'megaphone',
    type: 'MaterialCommunityIcons',
  },
  bullhorn: {
    ios: 'megaphone.fill',
    type: 'MaterialCommunityIcons',
  },
  'volume-low': {
    ios: 'speaker.fill',
    type: 'MaterialCommunityIcons',
  },
  'volume-plus': {
    ios: 'speaker.plus.fill',
    type: 'MaterialCommunityIcons',
  },
  'volume-minus': {
    ios: 'speaker.minus.fill',
    type: 'MaterialCommunityIcons',
  },
  'volume-variant-off': {
    ios: 'speaker.slash.fill',
    type: 'MaterialCommunityIcons',
  },
  'volume-medium': {
    ios: 'speaker.wave.1.fill',
    type: 'MaterialCommunityIcons',
  },
  'volume-high': {
    ios: 'speaker.wave.3.fill',
    type: 'MaterialCommunityIcons',
  },
  'music-note': {
    ios: 'music.note',
    type: 'MaterialCommunityIcons',
  },
  'playlist-music': {
    ios: 'music.note.list',
    type: 'MaterialCommunityIcons',
  },
  'microphone-variant': {
    ios: 'music.mic',
    type: 'MaterialCommunityIcons',
  },
  magnify: {
    ios: 'magnifyingglass',
    type: 'MaterialCommunityIcons',
  },
  'magnify-minus-outline': {
    ios: 'minus.magnifyingglass',
    type: 'MaterialCommunityIcons',
  },
  'magnify-plus-outline': {
    ios: 'plus.magnifyingglass',
    type: 'MaterialCommunityIcons',
  },
  'microphone-outline': {
    ios: 'mic',
    type: 'MaterialCommunityIcons',
  },
  microphone: {
    ios: 'mic.fill',
    type: 'MaterialCommunityIcons',
  },
  'microphone-off': {
    ios: 'mic.slash.fill',
    type: 'MaterialCommunityIcons',
  },
  'microphone-plus': {
    ios: 'mic.fill.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'circle-outline': {
    ios: 'circle',
    type: 'MaterialCommunityIcons',
  },
  circle: {
    ios: 'circle.fill',
    type: 'MaterialCommunityIcons',
  },
  cancel: {
    ios: 'circle.slash',
    type: 'MaterialCommunityIcons',
  },
  target: {
    ios: 'target',
    type: 'MaterialCommunityIcons',
  },
  'square-outline': {
    ios: 'square',
    type: 'MaterialCommunityIcons',
  },
  square: {
    ios: 'square.fill',
    type: 'MaterialCommunityIcons',
  },
  'star-box-multiple-outline': {
    ios: 'star.square.on.square',
    type: 'MaterialCommunityIcons',
  },
  'star-box-multiple': {
    ios: 'star.square.on.square.fill',
    type: 'MaterialCommunityIcons',
  },
  'plus-box-outline': {
    ios: 'plus.app',
    type: 'MaterialCommunityIcons',
  },
  'plus-box': {
    ios: 'plus.app.fill',
    type: 'MaterialCommunityIcons',
  },
  'checkbox-blank-badge-outline': {
    ios: 'app.badge',
    type: 'MaterialCommunityIcons',
  },
  'checkbox-blank-badge': {
    ios: 'app.badge.fill',
    type: 'MaterialCommunityIcons',
  },
  'check-decagram-outline': {
    ios: 'checkmark.seal',
    type: 'MaterialCommunityIcons',
  },
  'check-decagram': {
    ios: 'checkmark.seal.fill',
    type: 'MaterialCommunityIcons',
  },
  'heart-outline': {
    ios: 'heart',
    type: 'MaterialCommunityIcons',
  },
  heart: {
    ios: 'heart.fill',
    type: 'MaterialCommunityIcons',
  },
  'heart-flash': {
    ios: 'bolt.heart.fill',
    type: 'MaterialCommunityIcons',
  },
  'star-outline': {
    ios: 'star',
    type: 'MaterialCommunityIcons',
  },
  star: {
    ios: 'star.fill',
    type: 'MaterialCommunityIcons',
  },
  'shield-outline': {
    ios: 'shield',
    type: 'MaterialCommunityIcons',
  },
  shield: {
    ios: 'shield.fill',
    type: 'MaterialCommunityIcons',
  },
  'flag-outline': {
    ios: 'flag',
    type: 'MaterialCommunityIcons',
  },
  flag: {
    ios: 'flag.fill',
    type: 'MaterialCommunityIcons',
  },
  'bell-outline': {
    ios: 'bell',
    type: 'MaterialCommunityIcons',
  },
  bell: {
    ios: 'bell.fill',
    type: 'MaterialCommunityIcons',
  },
  'tag-outline': {
    ios: 'tag',
    type: 'MaterialCommunityIcons',
  },
  tag: {
    ios: 'tag.fill',
    type: 'MaterialCommunityIcons',
  },
  'lightning-bolt-outline': {
    ios: 'bolt',
    type: 'MaterialCommunityIcons',
  },
  'lightning-bolt': {
    ios: 'bolt.fill',
    type: 'MaterialCommunityIcons',
  },
  'square-root': {
    ios: 'x.squareroot',
    type: 'MaterialCommunityIcons',
  },
  flashlight: {
    ios: 'flashlight.on.fill',
    type: 'MaterialCommunityIcons',
  },
  'flashlight-off': {
    ios: 'flashlight.off.fill',
    type: 'MaterialCommunityIcons',
  },
  'camera-outline': {
    ios: 'camera',
    type: 'MaterialCommunityIcons',
  },
  camera: {
    ios: 'camera.fill',
    type: 'MaterialCommunityIcons',
  },
  'message-outline': {
    ios: 'message',
    type: 'MaterialCommunityIcons',
  },
  message: {
    ios: 'message.fill',
    type: 'MaterialCommunityIcons',
  },
  'message-plus-outline': {
    ios: 'plus.message',
    type: 'MaterialCommunityIcons',
  },
  'message-plus': {
    ios: 'plus.message.fill',
    type: 'MaterialCommunityIcons',
  },
  'message-processing-outline': {
    ios: 'ellipsis.message',
    type: 'MaterialCommunityIcons',
  },
  'message-processing': {
    ios: 'ellipsis.message.fill',
    type: 'MaterialCommunityIcons',
  },
  'format-quote-open': {
    ios: 'quote.opening',
    type: 'MaterialCommunityIcons',
  },
  'format-quote-close': {
    ios: 'quote.closing',
    type: 'MaterialCommunityIcons',
  },
  'comment-quote-outline': {
    ios: 'quote.bubble',
    type: 'MaterialCommunityIcons',
  },
  'comment-quote': {
    ios: 'quote.bubble.fill',
    type: 'MaterialCommunityIcons',
  },
  'message-star-outline': {
    ios: 'star.bubble',
    type: 'MaterialCommunityIcons',
  },
  'message-star': {
    ios: 'star.bubble.fill',
    type: 'MaterialCommunityIcons',
  },
  'message-question-outline': {
    ios: 'questionmark.bubble',
    type: 'MaterialCommunityIcons',
  },
  'message-question': {
    ios: 'questionmark.bubble.fill',
    type: 'MaterialCommunityIcons',
  },
  'phone-outline': {
    ios: 'phone',
    type: 'MaterialCommunityIcons',
  },
  phone: {
    ios: 'phone.fill',
    type: 'MaterialCommunityIcons',
  },
  'phone-plus-outline': {
    ios: 'phone.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'phone-plus': {
    ios: 'phone.fill.badge.plus',
    type: 'MaterialCommunityIcons',
  },
  'phone-check-outline': {
    ios: 'phone.badge.checkmark',
    type: 'MaterialCommunityIcons',
  },
  'phone-check': {
    ios: 'phone.fill.badge.checkmark',
    type: 'MaterialCommunityIcons',
  },
  'video-outline': {
    ios: 'video',
    type: 'MaterialCommunityIcons',
  },
  video: {
    ios: 'video.fill',
    type: 'MaterialCommunityIcons',
  },
  'email-outline': {
    ios: 'envelope',
    type: 'MaterialCommunityIcons',
  },
  email: {
    ios: 'envelope.fill',
    type: 'MaterialCommunityIcons',
  },
  'email-open': {
    ios: 'envelope.open.fill',
    type: 'MaterialCommunityIcons',
  },
  'cog-outline': {
    ios: 'gearshape',
    type: 'MaterialCommunityIcons',
  },
  cog: {
    ios: 'gearshape.fill',
    type: 'MaterialCommunityIcons',
  },
  'signature-freehand': {
    ios: 'signature',
    type: 'MaterialCommunityIcons',
  },
  'dots-horizontal': {
    ios: 'ellipsis',
    type: 'MaterialCommunityIcons',
  },
  'dots-horizontal-circle-outline': {
    ios: 'ellipsis.circle',
    type: 'MaterialCommunityIcons',
  },
  'dots-horizontal-circle': {
    ios: 'ellipsis.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'shopping-outline': {
    ios: 'bag',
    type: 'MaterialCommunityIcons',
  },
  shopping: {
    ios: 'bag.fill',
    type: 'MaterialCommunityIcons',
  },
  'cart-outline': {
    ios: 'cart',
    type: 'MaterialCommunityIcons',
  },
  cart: {
    ios: 'cart.fill',
    type: 'MaterialCommunityIcons',
  },
  'basket-outline': {
    ios: 'basket',
    type: 'MaterialCommunityIcons',
  },
  basket: {
    ios: 'basket.fill',
    type: 'MaterialCommunityIcons',
  },
  'credit-card-outline': {
    ios: 'creditcard',
    type: 'MaterialCommunityIcons',
  },
  'credit-card': {
    ios: 'creditcard.fill',
    type: 'MaterialCommunityIcons',
  },
  'card-giftcard': {
    ios: 'giftcard',
    type: 'MaterialIcons',
  },
  crop: {
    ios: 'crop',
    type: 'MaterialCommunityIcons',
  },
  'crop-rotate': {
    ios: 'crop.rotate',
    type: 'MaterialCommunityIcons',
  },
  'brush-variant': {
    ios: 'paintbrush',
    type: 'MaterialCommunityIcons',
  },
  'spirit-level': {
    ios: 'level',
    type: 'MaterialCommunityIcons',
  },
  'wrench-outline': {
    ios: 'wrench.adjustable',
    type: 'MaterialCommunityIcons',
  },
  wrench: {
    ios: 'wrench.adjustable.fill',
    type: 'MaterialCommunityIcons',
  },
  hammer: {
    ios: 'hammer.fill',
    type: 'MaterialCommunityIcons',
  },
  screwdriver: {
    ios: 'screwdriver',
    type: 'MaterialCommunityIcons',
  },
  eyedropper: {
    ios: 'eyedropper',
    type: 'MaterialCommunityIcons',
  },
  'hammer-screwdriver': {
    ios: 'wrench.and.screwdriver.fill',
    type: 'MaterialCommunityIcons',
  },
  'script-outline': {
    ios: 'scroll',
    type: 'MaterialCommunityIcons',
  },
  script: {
    ios: 'scroll.fill',
    type: 'MaterialCommunityIcons',
  },
  'printer-outline': {
    ios: 'printer',
    type: 'MaterialCommunityIcons',
  },
  printer: {
    ios: 'printer.fill',
    type: 'MaterialCommunityIcons',
  },
  scanner: {
    ios: 'scanner',
    type: 'MaterialCommunityIcons',
  },
  'drama-masks': {
    ios: 'theatermasks',
    type: 'MaterialCommunityIcons',
  },
  'puzzle-outline': {
    ios: 'puzzlepiece',
    type: 'MaterialCommunityIcons',
  },
  puzzle: {
    ios: 'puzzlepiece.fill',
    type: 'MaterialCommunityIcons',
  },
  'home-outline': {
    ios: 'house',
    type: 'MaterialCommunityIcons',
  },
  home: {
    ios: 'house.fill',
    type: 'MaterialCommunityIcons',
  },
  'home-circle-outline': {
    ios: 'house.circle',
    type: 'MaterialCommunityIcons',
  },
  'home-circle': {
    ios: 'house.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'storefront-outline': {
    ios: 'storefront',
    type: 'MaterialCommunityIcons',
  },
  storefront: {
    ios: 'storefront.fill',
    type: 'MaterialCommunityIcons',
  },
  'lightbulb-outline': {
    ios: 'lightbulb',
    type: 'MaterialCommunityIcons',
  },
  lightbulb: {
    ios: 'lightbulb.fill',
    type: 'MaterialCommunityIcons',
  },
  'lightbulb-off-outline': {
    ios: 'lightbulb.slash',
    type: 'MaterialCommunityIcons',
  },
  'lightbulb-off': {
    ios: 'lightbulb.slash.fill',
    type: 'MaterialCommunityIcons',
  },
  'power-socket-us': {
    ios: 'poweroutlet.type.b',
    type: 'MaterialCommunityIcons',
  },
  'power-plug-outline': {
    ios: 'powerplug',
    type: 'MaterialCommunityIcons',
  },
  'power-plug': {
    ios: 'powerplug.fill',
    type: 'MaterialCommunityIcons',
  },
  webcam: {
    ios: 'web.camera.fill',
    type: 'MaterialCommunityIcons',
  },
  'water-pump': {
    ios: 'spigot.fill',
    type: 'MaterialCommunityIcons',
  },
  router: {
    ios: 'wifi.router.fill',
    type: 'MaterialIcons',
  },
  'party-popper': {
    ios: 'party.popper.fill',
    type: 'MaterialCommunityIcons',
  },
  balloon: {
    ios: 'balloon.fill',
    type: 'MaterialCommunityIcons',
  },
  firework: {
    ios: 'fireworks',
    type: 'MaterialCommunityIcons',
  },
  'office-building-outline': {
    ios: 'building',
    type: 'MaterialCommunityIcons',
  },
  'office-building': {
    ios: 'building.fill',
    type: 'MaterialCommunityIcons',
  },
  'city-variant-outline': {
    ios: 'building.2',
    type: 'MaterialCommunityIcons',
  },
  'city-variant': {
    ios: 'building.2.fill',
    type: 'MaterialCommunityIcons',
  },
  'lock-outline': {
    ios: 'lock',
    type: 'MaterialCommunityIcons',
  },
  lock: {
    ios: 'lock.fill',
    type: 'MaterialCommunityIcons',
  },
  'shield-lock-outline': {
    ios: 'lock.shield',
    type: 'MaterialCommunityIcons',
  },
  'shield-lock': {
    ios: 'lock.shield.fill',
    type: 'MaterialCommunityIcons',
  },
  'lock-off-outline': {
    ios: 'lock.slash',
    type: 'MaterialCommunityIcons',
  },
  'lock-off': {
    ios: 'lock.slash.fill',
    type: 'MaterialCommunityIcons',
  },
  'lock-alert-outline': {
    ios: 'exclamationmark.lock',
    type: 'MaterialCommunityIcons',
  },
  'lock-alert': {
    ios: 'exclamationmark.lock.fill',
    type: 'MaterialCommunityIcons',
  },
  'lock-clock': {
    ios: 'lock.badge.clock.fill',
    type: 'MaterialCommunityIcons',
  },
  'lock-open': {
    ios: 'lock.open',
    type: 'MaterialCommunityIcons',
  },
  'lock-open-outline': {
    ios: 'lock.open.fill',
    type: 'MaterialCommunityIcons',
  },
  'lock-open-alert': {
    ios: 'lock.open.trianglebadge.exclamationmark',
    type: 'MaterialCommunityIcons',
  },
  'lock-open-alert-outline': {
    ios: 'lock.open.trianglebadge.exclamationmark.fill',
    type: 'MaterialCommunityIcons',
  },
  'lock-reset': {
    ios: 'lock.rotation',
    type: 'MaterialCommunityIcons',
  },
  'key-outline': {
    ios: 'key',
    type: 'MaterialCommunityIcons',
  },
  key: {
    ios: 'key.fill',
    type: 'MaterialCommunityIcons',
  },
  wifi: {
    ios: 'wifi',
    type: 'MaterialCommunityIcons',
  },
  'wifi-off': {
    ios: 'wifi.slash',
    type: 'MaterialCommunityIcons',
  },
  'wifi-alert': {
    ios: 'wifi.exclamationmark',
    type: 'MaterialCommunityIcons',
  },
  'pin-outline': {
    ios: 'pin',
    type: 'MaterialCommunityIcons',
  },
  pin: {
    ios: 'pin.fill',
    type: 'MaterialCommunityIcons',
  },
  'pin-off-outline': {
    ios: 'pin.slash',
    type: 'MaterialCommunityIcons',
  },
  'pin-off': {
    ios: 'pin.slash.fill',
    type: 'MaterialCommunityIcons',
  },
  'map-marker-outline': {
    ios: 'mappin',
    type: 'MaterialCommunityIcons',
  },
  'map-marker-radius-outline': {
    ios: 'mappin.circle',
    type: 'MaterialCommunityIcons',
  },
  'map-marker-radius': {
    ios: 'mappin.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'map-marker-off-outline': {
    ios: 'mappin.slash',
    type: 'MaterialCommunityIcons',
  },
  'map-outline': {
    ios: 'map',
    type: 'MaterialCommunityIcons',
  },
  map: {
    ios: 'map.fill',
    type: 'MaterialCommunityIcons',
  },
  monitor: {
    ios: 'display',
    type: 'MaterialCommunityIcons',
  },
  'monitor-lock': {
    ios: 'lock.display',
    type: 'MaterialCommunityIcons',
  },
  'monitor-multiple': {
    ios: 'display.2',
    type: 'MaterialCommunityIcons',
  },
  server: {
    ios: 'server.rack',
    type: 'MaterialCommunityIcons',
  },
  laptop: {
    ios: 'laptopcomputer',
    type: 'MaterialCommunityIcons',
  },
  'laptop-off': {
    ios: 'laptopcomputer.slash',
    type: 'MaterialCommunityIcons',
  },
  cellphone: {
    ios: 'smartphone',
    type: 'MaterialCommunityIcons',
  },
  headphones: {
    ios: 'headphones',
    type: 'MaterialCommunityIcons',
  },
  'live-tv': {
    ios: 'play.tv',
    type: 'MaterialIcons',
  },
  'youtube-tv': {
    ios: 'play.tv.fill',
    type: 'MaterialCommunityIcons',
  },
  'connected-tv': {
    ios: 'tv.badge.wifi',
    type: 'MaterialIcons',
  },
  'bullhorn-variant-outline': {
    ios: 'horn',
    type: 'MaterialCommunityIcons',
  },
  'bullhorn-variant': {
    ios: 'horn.fill',
    type: 'MaterialCommunityIcons',
  },
  bandage: {
    ios: 'bandage.fill',
    type: 'MaterialCommunityIcons',
  },
  'crown-outline': {
    ios: 'crown',
    type: 'MaterialCommunityIcons',
  },
  crown: {
    ios: 'crown.fill',
    type: 'MaterialCommunityIcons',
  },
  filmstrip: {
    ios: 'film.fill',
    type: 'MaterialCommunityIcons',
  },
  'filmstrip-box-multiple': {
    ios: 'film.stack.fill',
    type: 'MaterialCommunityIcons',
  },
  'movie-open-outline': {
    ios: 'movieclapper',
    type: 'MaterialCommunityIcons',
  },
  'movie-open': {
    ios: 'movieclapper.fill',
    type: 'MaterialCommunityIcons',
  },
  'ticket-confirmation-outline': {
    ios: 'ticket',
    type: 'MaterialCommunityIcons',
  },
  'ticket-confirmation': {
    ios: 'ticket.fill',
    type: 'MaterialCommunityIcons',
  },
  'eye-outline': {
    ios: 'eye',
    type: 'MaterialCommunityIcons',
  },
  eye: {
    ios: 'eye.fill',
    type: 'MaterialCommunityIcons',
  },
  'eye-off-outline': {
    ios: 'eye.slash',
    type: 'MaterialCommunityIcons',
  },
  'eye-off': {
    ios: 'eye.slash.fill',
    type: 'MaterialCommunityIcons',
  },
  brain: {
    ios: 'brain',
    type: 'MaterialCommunityIcons',
  },
  qrcode: {
    ios: 'qrcode',
    type: 'MaterialCommunityIcons',
  },
  barcode: {
    ios: 'barcode',
    type: 'MaterialCommunityIcons',
  },
  'image-outline': {
    ios: 'photo',
    type: 'MaterialCommunityIcons',
  },
  image: {
    ios: 'photo.fill',
    type: 'MaterialCommunityIcons',
  },
  'image-plus': {
    ios: 'photo.badge.plus.fill',
    type: 'MaterialCommunityIcons',
  },
  'image-multiple-outline': {
    ios: 'photo.stack',
    type: 'MaterialCommunityIcons',
  },
  'image-multiple': {
    ios: 'photo.stack.fill',
    type: 'MaterialCommunityIcons',
  },
  'clock-outline': {
    ios: 'clock',
    type: 'MaterialCommunityIcons',
  },
  clock: {
    ios: 'clock.fill',
    type: 'MaterialCommunityIcons',
  },
  'clock-check-outline': {
    ios: 'clock.badge.checkmark',
    type: 'MaterialCommunityIcons',
  },
  'clock-check': {
    ios: 'clock.badge.checkmark.fill',
    type: 'MaterialCommunityIcons',
  },
  'clock-remove-outline': {
    ios: 'clock.badge.xmark',
    type: 'MaterialCommunityIcons',
  },
  'clock-remove': {
    ios: 'clock.badge.xmark.fill',
    type: 'MaterialCommunityIcons',
  },
  'clock-alert-outline': {
    ios: 'clock.badge.exclamationmark',
    type: 'MaterialCommunityIcons',
  },
  'clock-alert': {
    ios: 'clock.badge.exclamationmark.fill',
    type: 'MaterialCommunityIcons',
  },
  alarm: {
    ios: 'alarm',
    type: 'MaterialCommunityIcons',
  },
  'timer-outline': {
    ios: 'stopwatch',
    type: 'MaterialCommunityIcons',
  },
  timer: {
    ios: 'stopwatch.fill',
    type: 'MaterialCommunityIcons',
  },
  'chart-timeline-variant': {
    ios: 'chart.xyaxis.line',
    type: 'MaterialCommunityIcons',
  },
  'camera-timer': {
    ios: 'timer',
    type: 'MaterialCommunityIcons',
  },
  'controller-classic-outline': {
    ios: 'gamecontroller',
    type: 'MaterialCommunityIcons',
  },
  'controller-classic': {
    ios: 'gamecontroller.fill',
    type: 'MaterialCommunityIcons',
  },
  'sony-playstation': {
    ios: 'playstation.logo',
    type: 'MaterialCommunityIcons',
  },
  'microsoft-xbox': {
    ios: 'xbox.logo',
    type: 'MaterialCommunityIcons',
  },
  'palette-outline': {
    ios: 'paintpalette',
    type: 'MaterialCommunityIcons',
  },
  palette: {
    ios: 'paintpalette.fill',
    type: 'MaterialCommunityIcons',
  },
  'palette-swatch-outline': {
    ios: 'swatchpalette',
    type: 'MaterialCommunityIcons',
  },
  'palette-swatch': {
    ios: 'swatchpalette.fill',
    type: 'MaterialCommunityIcons',
  },
  'silverware-fork-knife': {
    ios: 'fork.knife',
    type: 'MaterialCommunityIcons',
  },
  'chart-box-outline': {
    ios: 'chart.bar',
    type: 'MaterialCommunityIcons',
  },
  'chart-box': {
    ios: 'chart.bar.fill',
    type: 'MaterialCommunityIcons',
  },
  'signal-cellular-3': {
    ios: 'cellularbars',
    type: 'MaterialCommunityIcons',
  },
  'chart-pie': {
    ios: 'chart.pie.fill',
    type: 'MaterialCommunityIcons',
  },
  sd: {
    ios: 'sdcard.fill',
    type: 'MaterialCommunityIcons',
  },
  atom: {
    ios: 'atom',
    type: 'MaterialCommunityIcons',
  },
  'angle-acute': {
    ios: 'angle',
    type: 'MaterialCommunityIcons',
  },
  'math-compass': {
    ios: 'compass.drawing',
    type: 'MaterialCommunityIcons',
  },
  'globe-model': {
    ios: 'globe.desk',
    type: 'MaterialCommunityIcons',
  },
  'gift-outline': {
    ios: 'gift',
    type: 'MaterialCommunityIcons',
  },
  gift: {
    ios: 'gift.fill',
    type: 'MaterialCommunityIcons',
  },
  cash: {
    ios: 'banknote',
    type: 'MaterialCommunityIcons',
  },
  grid: {
    ios: 'grid',
    type: 'MaterialCommunityIcons',
  },
  'format-list-checks': {
    ios: 'checklist',
    type: 'MaterialCommunityIcons',
  },
  'format-list-bulleted': {
    ios: 'list.bullet',
    type: 'MaterialCommunityIcons',
  },
  'reorder-horizontal': {
    ios: 'line.3.horizontal',
    type: 'MaterialCommunityIcons',
  },
  'format-bold': {
    ios: 'bold',
    type: 'MaterialCommunityIcons',
  },
  'format-italic': {
    ios: 'italic',
    type: 'MaterialCommunityIcons',
  },
  'format-underline': {
    ios: 'underline',
    type: 'MaterialCommunityIcons',
  },
  'format-strikethrough': {
    ios: 'strikethrough',
    type: 'MaterialCommunityIcons',
  },
  percent: {
    ios: 'percent',
    type: 'MaterialCommunityIcons',
  },
  'information-outline': {
    ios: 'info.circle',
    type: 'MaterialCommunityIcons',
  },
  information: {
    ios: 'info.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'alternate-email': {
    ios: 'at',
    type: 'MaterialIcons',
  },
  help: {
    ios: 'questionmark',
    type: 'MaterialCommunityIcons',
  },
  exclamation: {
    ios: 'exclamationmark',
    type: 'MaterialCommunityIcons',
  },
  plus: {
    ios: 'plus',
    type: 'MaterialCommunityIcons',
  },
  minus: {
    ios: 'minus',
    type: 'MaterialCommunityIcons',
  },
  'plus-minus': {
    ios: 'plusminus',
    type: 'MaterialCommunityIcons',
  },
  close: {
    ios: 'multiply',
    type: 'MaterialCommunityIcons',
  },
  division: {
    ios: 'divide',
    type: 'MaterialCommunityIcons',
  },
  equal: {
    ios: 'equal',
    type: 'MaterialCommunityIcons',
  },
  'less-than': {
    ios: 'lessthan',
    type: 'MaterialCommunityIcons',
  },
  'greater-than': {
    ios: 'greaterthan',
    type: 'MaterialCommunityIcons',
  },
  'code-parentheses': {
    ios: 'parentheses',
    type: 'MaterialCommunityIcons',
  },
  'code-braces': {
    ios: 'curlybraces',
    type: 'MaterialCommunityIcons',
  },
  'code-json': {
    ios: 'ellipsis.curlybraces',
    type: 'MaterialCommunityIcons',
  },
  'close-thick': {
    ios: 'xmark',
    type: 'MaterialCommunityIcons',
  },
  'close-circle-outline': {
    ios: 'xmark.circle',
    type: 'MaterialCommunityIcons',
  },
  'close-circle': {
    ios: 'xmark.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'close-box-outline': {
    ios: 'xmark.square',
    type: 'MaterialCommunityIcons',
  },
  'close-box': {
    ios: 'xmark.square.fill',
    type: 'MaterialCommunityIcons',
  },
  'shield-remove-outline': {
    ios: 'xmark.shield',
    type: 'MaterialCommunityIcons',
  },
  'shield-remove': {
    ios: 'xmark.shield.fill',
    type: 'MaterialCommunityIcons',
  },
  'close-octagon-outline': {
    ios: 'xmark.octagon',
    type: 'MaterialCommunityIcons',
  },
  'close-octagon': {
    ios: 'xmark.octagon.fill',
    type: 'MaterialCommunityIcons',
  },
  check: {
    ios: 'checkmark',
    type: 'MaterialCommunityIcons',
  },
  'check-circle-outline': {
    ios: 'checkmark.circle',
    type: 'MaterialCommunityIcons',
  },
  'check-circle': {
    ios: 'checkmark.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'check-box': {
    ios: 'checkmark.square.fill',
    type: 'MaterialIcons',
  },
  'shield-check-outline': {
    ios: 'checkmark.shield',
    type: 'MaterialCommunityIcons',
  },
  'shield-check': {
    ios: 'checkmark.shield.fill',
    type: 'MaterialCommunityIcons',
  },
  'chevron-left': {
    ios: 'chevron.left',
    type: 'MaterialCommunityIcons',
  },
  'chevron-left-circle-outline': {
    ios: 'chevron.left.circle',
    type: 'MaterialCommunityIcons',
  },
  'chevron-left-circle': {
    ios: 'chevron.left.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'chevron-left-box-outline': {
    ios: 'chevron.left.square',
    type: 'MaterialCommunityIcons',
  },
  'chevron-left-box': {
    ios: 'chevron.left.square.fill',
    type: 'MaterialCommunityIcons',
  },
  'chevron-right': {
    ios: 'chevron.right',
    type: 'MaterialCommunityIcons',
  },
  'chevron-right-circle-outline': {
    ios: 'chevron.right.circle',
    type: 'MaterialCommunityIcons',
  },
  'chevron-right-circle': {
    ios: 'chevron.right.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'chevron-right-box-outline': {
    ios: 'chevron.right.square',
    type: 'MaterialCommunityIcons',
  },
  'chevron-right-box': {
    ios: 'chevron.right.square.fill',
    type: 'MaterialCommunityIcons',
  },
  'chevron-double-left': {
    ios: 'chevron.left.2',
    type: 'MaterialCommunityIcons',
  },
  'chevron-double-right': {
    ios: 'chevron.right.2',
    type: 'MaterialCommunityIcons',
  },
  'chevron-up': {
    ios: 'chevron.up',
    type: 'MaterialCommunityIcons',
  },
  'chevron-up-circle-outline': {
    ios: 'chevron.up.circle',
    type: 'MaterialCommunityIcons',
  },
  'chevron-up-circle': {
    ios: 'chevron.up.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'chevron-up-box-outline': {
    ios: 'chevron.up.square',
    type: 'MaterialCommunityIcons',
  },
  'chevron-up-box': {
    ios: 'chevron.up.square.fill',
    type: 'MaterialCommunityIcons',
  },
  'chevron-down': {
    ios: 'chevron.down',
    type: 'MaterialCommunityIcons',
  },
  'chevron-down-circle-outline': {
    ios: 'chevron.down.circle',
    type: 'MaterialCommunityIcons',
  },
  'chevron-down-circle': {
    ios: 'chevron.down.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'chevron-down-box-outline': {
    ios: 'chevron.down.square',
    type: 'MaterialCommunityIcons',
  },
  'chevron-down-box': {
    ios: 'chevron.down.square.fill',
    type: 'MaterialCommunityIcons',
  },
  'unfold-more-horizontal': {
    ios: 'chevron.up.chevron.down',
    type: 'MaterialCommunityIcons',
  },
  'arrow-left': {
    ios: 'arrow.left',
    type: 'MaterialCommunityIcons',
  },
  'arrow-left-circle-outline': {
    ios: 'arrow.left.circle',
    type: 'MaterialCommunityIcons',
  },
  'arrow-left-circle': {
    ios: 'arrow.left.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-left-box': {
    ios: 'arrow.left.square.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-right': {
    ios: 'arrow.right',
    type: 'MaterialCommunityIcons',
  },
  'arrow-right-circle-outline': {
    ios: 'arrow.right.circle',
    type: 'MaterialCommunityIcons',
  },
  'arrow-right-circle': {
    ios: 'arrow.right.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-right-box': {
    ios: 'arrow.right.square.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-up': {
    ios: 'arrow.up',
    type: 'MaterialCommunityIcons',
  },
  'arrow-up-circle-outline': {
    ios: 'arrow.up.circle',
    type: 'MaterialCommunityIcons',
  },
  'arrow-up-circle': {
    ios: 'arrow.up.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-up-box': {
    ios: 'arrow.up.square.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-down': {
    ios: 'arrow.down',
    type: 'MaterialCommunityIcons',
  },
  'arrow-down-circle-outline': {
    ios: 'arrow.down.circle',
    type: 'MaterialCommunityIcons',
  },
  'arrow-down-circle': {
    ios: 'arrow.down.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-down-box': {
    ios: 'arrow.down.square.fill',
    type: 'MaterialCommunityIcons',
  },
  asterisk: {
    ios: 'asterisk',
    type: 'MaterialCommunityIcons',
  },
  'attach-money': {
    ios: 'dollarsign',
    type: 'MaterialIcons',
  },
  apple: {
    ios: 'apple.logo',
    type: 'MaterialCommunityIcons',
  },
} as const;

// console.log(Object.keys(ICON_NAMES).length); // 573

type IosNames = (typeof ICON_NAMES)[keyof typeof ICON_NAMES]['ios'];
type MaterialIconNames = keyof typeof ICON_NAMES;
type IconNamesForMaterialIcons = typeof ICON_NAMES;
type IconNamesFromIos = Record<
  IosNames,
  {
    type: 'MaterialIcons' | 'MaterialCommunityIcons';
    android: MaterialIconNames;
  }
>;

// Create other object maybe component to use either iOS or Material icon names since they share some same names
// const IOS_ICON_NAMES = {}
// for (const key in IOS_ICON_NAMES) {
//   const subObject = ICON_NAMES[key as MaterialIconNames];
//   ICON_NAMES[subObject.ios as IosNames] = {
//     ...subObject.default,
//     name: key as MaterialIconNames,
//   };
// }

// console.log(Object.keys(ICON_NAMES));
