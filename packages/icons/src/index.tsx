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
  'arrow-up-box': {
    ios: 'square.and.arrow.up.fill',
    type: 'MaterialCommunityIcons',
  },
  'arrow-up-circle-outline': {
    ios: 'square.and.arrow.up.circle',
    type: 'MaterialCommunityIcons',
  },
  'arrow-up-circle': {
    ios: 'square.and.arrow.up.circle.fill',
    type: 'MaterialCommunityIcons',
  },
  'tray-arrow-down': {
    ios: 'square.and.arrow.down',
    type: 'MaterialCommunityIcons',
  },
  'arrow-down-box': {
    ios: 'square.and.arrow.down.fill',
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
} as const;

export type NamesLeft =
  | 'trophy.circle'
  | 'trophy.circle.fill'
  | 'medal'
  | 'medal.fill'
  | 'command'
  | 'command.circle'
  | 'command.circle.fill'
  | 'command.square'
  | 'command.square.fill'
  | 'space'
  | 'option'
  | 'alt'
  | 'control'
  | 'projective'
  | 'chevron.left.to.line'
  | 'chevron.right.to.line'
  | 'chevron.backward.to.line'
  | 'chevron.forward.to.line'
  | 'escape'
  | 'restart'
  | 'restart.circle'
  | 'restart.circle.fill'
  | 'sleep'
  | 'sleep.circle'
  | 'sleep.circle.fill'
  | 'power'
  | 'power.circle'
  | 'power.circle.fill'
  | 'power.dotted'
  | 'togglepower'
  | 'poweron'
  | 'poweroff'
  | 'powersleep'
  | 'directcurrent'
  | 'alternatingcurrent'
  | 'clear'
  | 'clear.fill'
  | 'delete.left'
  | 'delete.left.fill'
  | 'delete.backward'
  | 'delete.backward.fill'
  | 'delete.right'
  | 'delete.right.fill'
  | 'delete.forward'
  | 'delete.forward.fill'
  | 'shift'
  | 'shift.fill'
  | 'capslock'
  | 'capslock.fill'
  | 'eject'
  | 'eject.fill'
  | 'eject.circle'
  | 'eject.circle.fill'
  | 'rays'
  | 'slowmo'
  | 'timelapse'
  | 'rectangle.on.rectangle.badge.gearshape'
  | 'filemenu.and.selection'
  | 'dot.circle.and.hand.point.up.left.fill'
  | 'keyboard'
  | 'keyboard.fill'
  | 'keyboard.badge.ellipsis'
  | 'keyboard.badge.ellipsis.fill'
  | 'keyboard.badge.eye'
  | 'keyboard.badge.eye.fill'
  | 'keyboard.chevron.compact.down'
  | 'keyboard.chevron.compact.down.fill'
  | 'keyboard.chevron.compact.left'
  | 'keyboard.chevron.compact.left.fill'
  | 'keyboard.onehanded.left'
  | 'keyboard.onehanded.left.fill'
  | 'keyboard.onehanded.right'
  | 'keyboard.onehanded.right.fill'
  | 'globe'
  | 'globe.badge.chevron.backward'
  | 'network'
  | 'network.slash'
  | 'network.badge.shield.half.filled'
  | 'globe.americas'
  | 'globe.americas.fill'
  | 'globe.europe.africa'
  | 'globe.europe.africa.fill'
  | 'globe.asia.australia'
  | 'globe.asia.australia.fill'
  | 'globe.central.south.asia'
  | 'globe.central.south.asia.fill'
  | 'sun.min'
  | 'sun.min.fill'
  | 'sun.max'
  | 'sun.max.fill'
  | 'sun.max.circle'
  | 'sun.max.circle.fill'
  | 'sun.max.trianglebadge.exclamationmark'
  | 'sun.max.trianglebadge.exclamationmark.fill'
  | 'sunrise'
  | 'sunrise.fill'
  | 'sunrise.circle'
  | 'sunrise.circle.fill'
  | 'sunset'
  | 'sunset.fill'
  | 'sunset.circle'
  | 'sunset.circle.fill'
  | 'sun.horizon'
  | 'sun.horizon.fill'
  | 'sun.horizon.circle'
  | 'sun.horizon.circle.fill'
  | 'sun.dust'
  | 'sun.dust.fill'
  | 'sun.dust.circle'
  | 'sun.dust.circle.fill'
  | 'sun.haze'
  | 'sun.haze.fill'
  | 'sun.haze.circle'
  | 'sun.haze.circle.fill'
  | 'sun.rain'
  | 'sun.rain.fill'
  | 'sun.rain.circle'
  | 'sun.rain.circle.fill'
  | 'sun.snow'
  | 'sun.snow.fill'
  | 'sun.snow.circle'
  | 'sun.snow.circle.fill'
  | 'moonphase.new.moon'
  | 'moonphase.waxing.crescent'
  | 'moonphase.first.quarter'
  | 'moonphase.waxing.gibbous'
  | 'moonphase.full.moon'
  | 'moonphase.waning.gibbous'
  | 'moonphase.last.quarter'
  | 'moonphase.waning.crescent'
  | 'moonphase.new.moon.inverse'
  | 'moonphase.waxing.crescent.inverse'
  | 'moonphase.first.quarter.inverse'
  | 'moonphase.waxing.gibbous.inverse'
  | 'moonphase.full.moon.inverse'
  | 'moonphase.waning.gibbous.inverse'
  | 'moonphase.last.quarter.inverse'
  | 'moonphase.waning.crescent.inverse'
  | 'zzz'
  | 'moon'
  | 'moon.fill'
  | 'moon.circle'
  | 'moon.circle.fill'
  | 'moonrise'
  | 'moonrise.fill'
  | 'moonrise.circle'
  | 'moonrise.circle.fill'
  | 'moonset'
  | 'moonset.fill'
  | 'moonset.circle'
  | 'moonset.circle.fill'
  | 'moon.dust'
  | 'moon.dust.fill'
  | 'moon.dust.circle'
  | 'moon.dust.circle.fill'
  | 'moon.haze'
  | 'moon.haze.fill'
  | 'moon.haze.circle'
  | 'moon.haze.circle.fill'
  | 'moon.zzz'
  | 'moon.zzz.fill'
  | 'sparkle'
  | 'moon.stars'
  | 'moon.stars.fill'
  | 'moon.stars.circle'
  | 'moon.stars.circle.fill'
  | 'cloud'
  | 'cloud.fill'
  | 'cloud.circle'
  | 'cloud.circle.fill'
  | 'cloud.drizzle'
  | 'cloud.drizzle.fill'
  | 'cloud.drizzle.circle'
  | 'cloud.drizzle.circle.fill'
  | 'cloud.rain'
  | 'cloud.rain.fill'
  | 'cloud.rain.circle'
  | 'cloud.rain.circle.fill'
  | 'cloud.heavyrain'
  | 'cloud.heavyrain.fill'
  | 'cloud.heavyrain.circle'
  | 'cloud.heavyrain.circle.fill'
  | 'cloud.fog'
  | 'cloud.fog.fill'
  | 'cloud.fog.circle'
  | 'cloud.fog.circle.fill'
  | 'cloud.hail'
  | 'cloud.hail.fill'
  | 'cloud.hail.circle'
  | 'cloud.hail.circle.fill'
  | 'cloud.snow'
  | 'cloud.snow.fill'
  | 'cloud.snow.circle'
  | 'cloud.snow.circle.fill'
  | 'cloud.sleet'
  | 'cloud.sleet.fill'
  | 'cloud.sleet.circle'
  | 'cloud.sleet.circle.fill'
  | 'cloud.bolt'
  | 'cloud.bolt.fill'
  | 'cloud.bolt.circle'
  | 'cloud.bolt.circle.fill'
  | 'cloud.bolt.rain'
  | 'cloud.bolt.rain.fill'
  | 'cloud.bolt.rain.circle'
  | 'cloud.bolt.rain.circle.fill'
  | 'cloud.sun'
  | 'cloud.sun.fill'
  | 'cloud.sun.circle'
  | 'cloud.sun.circle.fill'
  | 'cloud.sun.rain'
  | 'cloud.sun.rain.fill'
  | 'cloud.sun.rain.circle'
  | 'cloud.sun.rain.circle.fill'
  | 'cloud.sun.bolt'
  | 'cloud.sun.bolt.fill'
  | 'cloud.sun.bolt.circle'
  | 'cloud.sun.bolt.circle.fill'
  | 'cloud.moon'
  | 'cloud.moon.fill'
  | 'cloud.moon.circle'
  | 'cloud.moon.circle.fill'
  | 'cloud.moon.rain'
  | 'cloud.moon.rain.fill'
  | 'cloud.moon.rain.circle'
  | 'cloud.moon.rain.circle.fill'
  | 'cloud.moon.bolt'
  | 'cloud.moon.bolt.fill'
  | 'cloud.moon.bolt.circle'
  | 'cloud.moon.bolt.circle.fill'
  | 'smoke'
  | 'smoke.fill'
  | 'smoke.circle'
  | 'smoke.circle.fill'
  | 'wind'
  | 'wind.circle'
  | 'wind.circle.fill'
  | 'wind.snow'
  | 'wind.snow.circle'
  | 'wind.snow.circle.fill'
  | 'snowflake'
  | 'snowflake.circle'
  | 'snowflake.circle.fill'
  | 'snowflake.slash'
  | 'tornado'
  | 'tornado.circle'
  | 'tornado.circle.fill'
  | 'tropicalstorm'
  | 'tropicalstorm.circle'
  | 'tropicalstorm.circle.fill'
  | 'hurricane'
  | 'hurricane.circle'
  | 'hurricane.circle.fill'
  | 'thermometer.sun'
  | 'thermometer.sun.fill'
  | 'thermometer.sun.circle'
  | 'thermometer.sun.circle.fill'
  | 'thermometer.snowflake'
  | 'thermometer.snowflake.circle'
  | 'thermometer.snowflake.circle.fill'
  | 'thermometer.variable.and.figure'
  | 'thermometer.variable.and.figure.circle'
  | 'thermometer.variable.and.figure.circle.fill'
  | 'thermometer.low'
  | 'thermometer.medium'
  | 'thermometer.high'
  | 'thermometer.medium.slash'
  | 'rainbow'
  | 'cloud.rainbow.half'
  | 'cloud.rainbow.half.fill'
  | 'water.waves'
  | 'water.waves.slash'
  | 'water.waves.and.arrow.up'
  | 'water.waves.and.arrow.down'
  | 'water.waves.and.arrow.down.trianglebadge.exclamationmark'
  | 'drop'
  | 'drop.fill'
  | 'drop.circle'
  | 'drop.circle.fill'
  | 'drop.degreesign'
  | 'drop.degreesign.fill'
  | 'drop.degreesign.slash'
  | 'drop.degreesign.slash.fill'
  | 'drop.triangle'
  | 'drop.triangle.fill'
  | 'flame'
  | 'flame.fill'
  | 'flame.circle'
  | 'flame.circle.fill'
  | 'beach.umbrella'
  | 'beach.umbrella.fill'
  | 'umbrella'
  | 'umbrella.fill'
  | 'umbrella.percent'
  | 'umbrella.percent.fill'
  | 'play'
  | 'play.fill'
  | 'play.circle'
  | 'play.circle.fill'
  | 'play.square'
  | 'play.square.fill'
  | 'play.rectangle'
  | 'play.rectangle.fill'
  | 'play.square.stack'
  | 'play.square.stack.fill'
  | 'play.slash'
  | 'play.slash.fill'
  | 'pause'
  | 'pause.fill'
  | 'pause.circle'
  | 'pause.circle.fill'
  | 'pause.rectangle'
  | 'pause.rectangle.fill'
  | 'stop'
  | 'stop.fill'
  | 'stop.circle'
  | 'stop.circle.fill'
  | 'record.circle'
  | 'record.circle.fill'
  | 'playpause'
  | 'playpause.fill'
  | 'playpause.circle'
  | 'playpause.circle.fill'
  | 'backward'
  | 'backward.fill'
  | 'backward.circle'
  | 'backward.circle.fill'
  | 'forward'
  | 'forward.fill'
  | 'forward.circle'
  | 'forward.circle.fill'
  | 'backward.end'
  | 'backward.end.fill'
  | 'backward.end.circle'
  | 'backward.end.circle.fill'
  | 'forward.end'
  | 'forward.end.fill'
  | 'forward.end.circle'
  | 'forward.end.circle.fill'
  | 'backward.end.alt'
  | 'backward.end.alt.fill'
  | 'forward.end.alt'
  | 'forward.end.alt.fill'
  | 'backward.frame'
  | 'backward.frame.fill'
  | 'forward.frame'
  | 'forward.frame.fill'
  | 'shuffle'
  | 'shuffle.circle'
  | 'shuffle.circle.fill'
  | 'repeat'
  | 'repeat.circle'
  | 'repeat.circle.fill'
  | 'repeat.1'
  | 'repeat.1.circle'
  | 'repeat.1.circle.fill'
  | 'infinity'
  | 'infinity.circle'
  | 'infinity.circle.fill'
  | 'sos'
  | 'sos.circle'
  | 'sos.circle.fill'
  | 'megaphone'
  | 'megaphone.fill'
  | 'speaker'
  | 'speaker.fill'
  | 'speaker.circle'
  | 'speaker.circle.fill'
  | 'speaker.square'
  | 'speaker.square.fill'
  | 'speaker.plus'
  | 'speaker.plus.fill'
  | 'speaker.minus'
  | 'speaker.minus.fill'
  | 'speaker.slash'
  | 'speaker.slash.fill'
  | 'speaker.slash.circle'
  | 'speaker.slash.circle.fill'
  | 'speaker.zzz'
  | 'speaker.zzz.fill'
  | 'speaker.wave.1'
  | 'speaker.wave.1.fill'
  | 'speaker.wave.2'
  | 'speaker.wave.2.fill'
  | 'speaker.wave.2.circle'
  | 'speaker.wave.2.circle.fill'
  | 'speaker.wave.3'
  | 'speaker.wave.3.fill'
  | 'speaker.badge.exclamationmark'
  | 'speaker.badge.exclamationmark.fill'
  | 'badge.plus.radiowaves.right'
  | 'badge.plus.radiowaves.forward'
  | 'music.note'
  | 'music.note.list'
  | 'music.quarternote.3'
  | 'music.mic'
  | 'music.mic.circle'
  | 'music.mic.circle.fill'
  | 'goforward'
  | 'gobackward'
  | 'goforward.5'
  | 'gobackward.5'
  | 'goforward.10'
  | 'gobackward.10'
  | 'goforward.15'
  | 'gobackward.15'
  | 'goforward.30'
  | 'gobackward.30'
  | 'goforward.45'
  | 'gobackward.45'
  | 'goforward.60'
  | 'gobackward.60'
  | 'goforward.75'
  | 'gobackward.75'
  | 'goforward.90'
  | 'gobackward.90'
  | 'goforward.plus'
  | 'gobackward.minus'
  | 'magnifyingglass'
  | 'magnifyingglass.circle'
  | 'magnifyingglass.circle.fill'
  | 'plus.magnifyingglass'
  | 'minus.magnifyingglass'
  | 'exclamationmark.magnifyingglass'
  | '1.magnifyingglass'
  | 'arrow.up.left.and.down.right.magnifyingglass'
  | 'text.magnifyingglass'
  | 'sparkle.magnifyingglass'
  | 'location.magnifyingglass'
  | 'loupe'
  | 'mic'
  | 'mic.fill'
  | 'mic.circle'
  | 'mic.circle.fill'
  | 'mic.square'
  | 'mic.square.fill'
  | 'mic.slash'
  | 'mic.slash.fill'
  | 'mic.slash.circle'
  | 'mic.slash.circle.fill'
  | 'mic.badge.plus'
  | 'mic.fill.badge.plus'
  | 'mic.badge.xmark'
  | 'mic.fill.badge.xmark'
  | 'mic.and.signal.meter'
  | 'mic.and.signal.meter.fill'
  | 'drop.halffull'
  | 'swirl.circle.righthalf.filled'
  | 'swirl.circle.righthalf.filled.inverse'
  | 'circle.dotted.circle'
  | 'circle.dotted.circle.fill'
  | 'circle.bottomrighthalf.checkered'
  | 'circle'
  | 'circle.fill'
  | 'circle.slash'
  | 'circle.slash.fill'
  | 'circle.badge.plus'
  | 'circle.badge.plus.fill'
  | 'circle.badge.minus'
  | 'circle.badge.minus.fill'
  | 'circle.badge.checkmark'
  | 'circle.badge.checkmark.fill'
  | 'circle.badge.xmark'
  | 'circle.badge.xmark.fill'
  | 'circle.badge.questionmark'
  | 'circle.badge.questionmark.fill'
  | 'circle.badge.exclamationmark'
  | 'circle.badge.exclamationmark.fill'
  | 'circle.lefthalf.filled'
  | 'circle.lefthalf.filled.inverse'
  | 'circle.righthalf.filled'
  | 'circle.righthalf.filled.inverse'
  | 'circle.tophalf.filled'
  | 'circle.tophalf.filled.inverse'
  | 'circle.bottomhalf.filled'
  | 'circle.bottomhalf.filled.inverse'
  | 'circle.inset.filled'
  | 'smallcircle.filled.circle'
  | 'smallcircle.filled.circle.fill'
  | 'smallcircle.circle'
  | 'smallcircle.circle.fill'
  | 'target'
  | 'circle.dotted'
  | 'circle.dashed'
  | 'circle.dashed.inset.filled'
  | 'circlebadge'
  | 'circlebadge.fill'
  | 'circlebadge.2'
  | 'circlebadge.2.fill'
  | 'circle.grid.2x1'
  | 'circle.grid.2x1.fill'
  | 'circle.grid.2x1.left.filled'
  | 'circle.grid.2x1.right.filled'
  | 'circle.grid.2x2'
  | 'circle.grid.2x2.fill'
  | 'circle.grid.3x3'
  | 'circle.grid.3x3.fill'
  | 'circle.grid.3x3.circle'
  | 'circle.grid.3x3.circle.fill'
  | 'circle.hexagonpath'
  | 'circle.hexagonpath.fill'
  | 'circle.hexagongrid'
  | 'circle.hexagongrid.fill'
  | 'circle.hexagongrid.circle'
  | 'circle.hexagongrid.circle.fill'
  | 'placeholdertext.fill'
  | 'square'
  | 'square.fill'
  | 'square.slash'
  | 'square.slash.fill'
  | 'square.lefthalf.filled'
  | 'square.righthalf.filled'
  | 'square.tophalf.filled'
  | 'square.bottomhalf.filled'
  | 'square.inset.filled'
  | 'square.split.2x1'
  | 'square.split.2x1.fill'
  | 'square.split.1x2'
  | 'square.split.1x2.fill'
  | 'square.split.2x2'
  | 'square.split.2x2.fill'
  | 'square.split.diagonal.2x2'
  | 'square.split.diagonal.2x2.fill'
  | 'square.split.diagonal'
  | 'square.split.diagonal.fill'
  | 'square.topthird.inset.filled'
  | 'square.bottomthird.inset.filled'
  | 'square.leftthird.inset.filled'
  | 'square.rightthird.inset.filled'
  | 'square.leadingthird.inset.filled'
  | 'square.trailingthird.inset.filled'
  | 'square.dotted'
  | 'square.dashed'
  | 'square.dashed.inset.filled'
  | 'plus.square.dashed'
  | 'questionmark.square.dashed'
  | 'dot.square'
  | 'dot.square.fill'
  | 'circle.square'
  | 'circle.square.fill'
  | 'square.on.square'
  | 'square.fill.on.square.fill'
  | 'square.on.square.badge.person.crop'
  | 'square.on.square.badge.person.crop.fill'
  | 'square.filled.on.square'
  | 'hand.raised.square.on.square'
  | 'hand.raised.square.on.square.fill'
  | 'star.square.on.square'
  | 'star.square.on.square.fill'
  | 'square.on.square.dashed'
  | 'square.on.square.intersection.dashed'
  | 'plus.square.on.square'
  | 'plus.square.fill.on.square.fill'
  | 'plus.app'
  | 'plus.app.fill'
  | 'arrow.down.app'
  | 'arrow.down.app.fill'
  | 'arrow.up.forward.app'
  | 'arrow.up.forward.app.fill'
  | 'xmark.app'
  | 'xmark.app.fill'
  | 'questionmark.app'
  | 'questionmark.app.fill'
  | 'app.badge'
  | 'app.badge.fill'
  | 'app.badge.checkmark'
  | 'app.badge.checkmark.fill'
  | 'app.dashed'
  | 'questionmark.app.dashed'
  | 'lock.app.dashed'
  | 'appclip'
  | 'app.gift'
  | 'app.gift.fill'
  | 'play.rectangle.on.rectangle'
  | 'play.rectangle.on.rectangle.fill'
  | 'play.rectangle.on.rectangle.circle'
  | 'play.rectangle.on.rectangle.circle.fill'
  | 'plus.rectangle.on.rectangle'
  | 'plus.rectangle.fill.on.rectangle.fill'
  | 'exclamationmark.triangle'
  | 'exclamationmark.triangle.fill'
  | 'diamond'
  | 'diamond.fill'
  | 'octagon'
  | 'octagon.fill'
  | 'hexagon'
  | 'hexagon.fill'
  | 'pentagon'
  | 'pentagon.fill'
  | 'seal'
  | 'seal.fill'
  | 'checkmark.seal'
  | 'checkmark.seal.fill'
  | 'xmark.seal'
  | 'xmark.seal.fill'
  | 'heart'
  | 'heart.fill'
  | 'heart.circle'
  | 'heart.circle.fill'
  | 'heart.square'
  | 'heart.square.fill'
  | 'heart.rectangle'
  | 'heart.rectangle.fill'
  | 'heart.slash'
  | 'heart.slash.fill'
  | 'heart.slash.circle'
  | 'heart.slash.circle.fill'
  | 'bolt.heart'
  | 'bolt.heart.fill'
  | 'arrow.up.heart'
  | 'arrow.up.heart.fill'
  | 'arrow.down.heart'
  | 'arrow.down.heart.fill'
  | 'suit.club'
  | 'suit.club.fill'
  | 'suit.spade'
  | 'suit.spade.fill'
  | 'star'
  | 'star.fill'
  | 'star.leadinghalf.filled'
  | 'star.slash'
  | 'star.slash.fill'
  | 'star.circle'
  | 'star.circle.fill'
  | 'star.square'
  | 'star.square.fill'
  | 'shield'
  | 'shield.fill'
  | 'shield.lefthalf.filled'
  | 'shield.lefthalf.filled.badge.checkmark'
  | 'shield.lefthalf.filled.trianglebadge.exclamationmark'
  | 'shield.righthalf.filled'
  | 'shield.slash'
  | 'shield.slash.fill'
  | 'shield.lefthalf.filled.slash'
  | 'shield.checkered'
  | 'staroflife.shield'
  | 'staroflife.shield.fill'
  | 'firewall'
  | 'firewall.fill'
  | 'flag'
  | 'flag.fill'
  | 'flag.circle'
  | 'flag.circle.fill'
  | 'location'
  | 'location.fill'
  | 'location.circle'
  | 'location.circle.fill'
  | 'location.square'
  | 'location.square.fill'
  | 'location.slash'
  | 'location.slash.fill'
  | 'location.slash.circle'
  | 'location.slash.circle.fill'
  | 'bell'
  | 'bell.fill'
  | 'bell.circle'
  | 'bell.circle.fill'
  | 'bell.slash'
  | 'bell.slash.fill'
  | 'bell.slash.circle'
  | 'bell.slash.circle.fill'
  | 'tag'
  | 'tag.fill'
  | 'tag.slash'
  | 'tag.slash.fill'
  | 'bolt'
  | 'bolt.fill'
  | 'icloud.fill'
  | 'x.squareroot'
  | 'flashlight.off.fill'
  | 'flashlight.off.circle'
  | 'flashlight.off.circle.fill'
  | 'flashlight.on.fill'
  | 'flashlight.on.circle'
  | 'flashlight.on.circle.fill'
  | 'flashlight.slash'
  | 'flashlight.slash.circle'
  | 'flashlight.slash.circle.fill'
  | 'camera'
  | 'camera.fill'
  | 'camera.circle'
  | 'camera.circle.fill'
  | 'camera.shutter.button'
  | 'camera.shutter.button.fill'
  | 'camera.badge.clock'
  | 'camera.badge.clock.fill'
  | 'camera.badge.ellipsis'
  | 'camera.badge.ellipsis.fill'
  | 'camera.on.rectangle'
  | 'camera.on.rectangle.fill'
  | 'message'
  | 'message.fill'
  | 'message.circle'
  | 'message.circle.fill'
  | 'message.badge'
  | 'message.badge.filled.fill'
  | 'message.badge.circle'
  | 'message.badge.circle.fill'
  | 'message.badge.fill'
  | 'checkmark.message'
  | 'checkmark.message.fill'
  | 'arrow.up.message'
  | 'arrow.up.message.fill'
  | 'arrow.down.message'
  | 'arrow.down.message.fill'
  | 'plus.message'
  | 'plus.message.fill'
  | 'ellipsis.message'
  | 'ellipsis.message.fill'
  | 'bubble'
  | 'bubble.fill'
  | 'bubble.circle'
  | 'bubble.circle.fill'
  | 'bubble.right'
  | 'bubble.right.fill'
  | 'bubble.right.circle'
  | 'bubble.right.circle.fill'
  | 'bubble.left'
  | 'bubble.left.fill'
  | 'bubble.left.circle'
  | 'bubble.left.circle.fill'
  | 'exclamationmark.bubble'
  | 'exclamationmark.bubble.fill'
  | 'exclamationmark.bubble.circle'
  | 'exclamationmark.bubble.circle.fill'
  | 'quote.opening'
  | 'quote.closing'
  | 'quote.bubble'
  | 'quote.bubble.fill'
  | 'star.bubble'
  | 'star.bubble.fill'
  | 'character.bubble'
  | 'character.bubble.fill'
  | 'text.bubble'
  | 'text.bubble.fill'
  | 'captions.bubble'
  | 'captions.bubble.fill'
  | 'info.bubble'
  | 'info.bubble.fill'
  | 'questionmark.bubble'
  | 'questionmark.bubble.fill'
  | 'plus.bubble'
  | 'plus.bubble.fill'
  | 'checkmark.bubble'
  | 'checkmark.bubble.fill'
  | 'rectangle.3.group.bubble'
  | 'rectangle.3.group.bubble.fill'
  | 'ellipsis.bubble'
  | 'ellipsis.bubble.fill'
  | 'ellipsis.vertical.bubble'
  | 'ellipsis.vertical.bubble.fill'
  | 'phone.bubble'
  | 'phone.bubble.fill'
  | 'video.bubble'
  | 'video.bubble.fill'
  | 'speaker.wave.2.bubble'
  | 'speaker.wave.2.bubble.fill'
  | 'person.bubble'
  | 'person.bubble.fill'
  | 'bubble.middle.bottom'
  | 'bubble.middle.bottom.fill'
  | 'bubble.middle.top'
  | 'bubble.middle.top.fill'
  | 'bubble.left.and.bubble.right'
  | 'bubble.left.and.bubble.right.fill'
  | 'bubble.left.and.exclamationmark.bubble.right'
  | 'bubble.left.and.exclamationmark.bubble.right.fill'
  | 'bubble.left.and.text.bubble.right'
  | 'bubble.left.and.text.bubble.right.fill'
  | 'phone'
  | 'phone.fill'
  | 'phone.circle'
  | 'phone.circle.fill'
  | 'phone.badge.plus'
  | 'phone.fill.badge.plus'
  | 'phone.badge.checkmark'
  | 'phone.fill.badge.checkmark'
  | 'phone.connection'
  | 'phone.connection.fill'
  | 'phone.arrow.up.right'
  | 'phone.arrow.up.right.fill'
  | 'phone.arrow.up.right.circle'
  | 'phone.arrow.up.right.circle.fill'
  | 'phone.arrow.down.left'
  | 'phone.arrow.down.left.fill'
  | 'phone.arrow.right'
  | 'phone.arrow.right.fill'
  | 'phone.down'
  | 'phone.down.fill'
  | 'phone.down.circle'
  | 'phone.down.circle.fill'
  | 'phone.down.waves.left.and.right'
  | 'video'
  | 'video.fill'
  | 'video.circle'
  | 'video.circle.fill'
  | 'video.square'
  | 'video.square.fill'
  | 'video.slash'
  | 'video.slash.fill'
  | 'video.slash.circle'
  | 'video.slash.circle.fill'
  | 'video.badge.plus'
  | 'video.fill.badge.plus'
  | 'video.badge.checkmark'
  | 'video.fill.badge.checkmark'
  | 'video.badge.ellipsis'
  | 'video.fill.badge.ellipsis'
  | 'arrow.up.right.video'
  | 'arrow.up.right.video.fill'
  | 'arrow.down.left.video'
  | 'arrow.down.left.video.fill'
  | 'questionmark.video'
  | 'questionmark.video.fill'
  | 'envelope'
  | 'envelope.fill'
  | 'envelope.circle'
  | 'envelope.circle.fill'
  | 'envelope.arrow.triangle.branch'
  | 'envelope.arrow.triangle.branch.fill'
  | 'envelope.open'
  | 'envelope.open.fill'
  | 'envelope.open.badge.clock'
  | 'envelope.badge'
  | 'envelope.badge.fill'
  | 'envelope.badge.person.crop'
  | 'envelope.badge.person.crop.fill'
  | 'envelope.badge.shield.half.filled'
  | 'envelope.badge.shield.half.filled.fill'
  | 'mail.stack'
  | 'mail.stack.fill'
  | 'mail'
  | 'mail.fill'
  | 'mail.and.text.magnifyingglass'
  | 'rectangle.and.text.magnifyingglass'
  | 'arrow.up.right.and.arrow.down.left.rectangle'
  | 'arrow.up.right.and.arrow.down.left.rectangle.fill'
  | 'gear'
  | 'gear.circle'
  | 'gear.circle.fill'
  | 'gear.badge.checkmark'
  | 'gear.badge.xmark'
  | 'gear.badge.questionmark'
  | 'gear.badge'
  | 'gearshape'
  | 'gearshape.fill'
  | 'gearshape.circle'
  | 'gearshape.circle.fill'
  | 'gearshape.2'
  | 'gearshape.2.fill'
  | 'signature'
  | 'scissors'
  | 'scissors.circle'
  | 'scissors.circle.fill'
  | 'scissors.badge.ellipsis'
  | 'ellipsis'
  | 'ellipsis.circle'
  | 'ellipsis.circle.fill'
  | 'ellipsis.rectangle'
  | 'ellipsis.rectangle.fill'
  | 'bag'
  | 'bag.fill'
  | 'bag.circle'
  | 'bag.circle.fill'
  | 'bag.badge.plus'
  | 'bag.fill.badge.plus'
  | 'bag.badge.minus'
  | 'bag.fill.badge.minus'
  | 'bag.badge.questionmark'
  | 'bag.fill.badge.questionmark'
  | 'cart'
  | 'cart.fill'
  | 'cart.circle'
  | 'cart.circle.fill'
  | 'cart.badge.plus'
  | 'cart.fill.badge.plus'
  | 'cart.badge.minus'
  | 'cart.fill.badge.minus'
  | 'cart.badge.questionmark'
  | 'cart.fill.badge.questionmark'
  | 'basket'
  | 'basket.fill'
  | 'creditcard'
  | 'creditcard.fill'
  | 'creditcard.circle'
  | 'creditcard.circle.fill'
  | 'creditcard.and.123'
  | 'creditcard.trianglebadge.exclamationmark'
  | 'creditcard.trianglebadge.exclamationmark.fill'
  | 'giftcard'
  | 'giftcard.fill'
  | 'wallet.pass'
  | 'wallet.pass.fill'
  | 'wand.and.rays'
  | 'wand.and.rays.inverse'
  | 'wand.and.stars'
  | 'wand.and.stars.inverse'
  | 'crop'
  | 'crop.rotate'
  | 'rectangle.portrait.rotate'
  | 'rectangle.landscape.rotate'
  | 'gyroscope'
  | 'nosign'
  | 'nosign.app'
  | 'nosign.app.fill'
  | 'gauge.with.dots.needle.bottom.0percent'
  | 'gauge.with.dots.needle.bottom.50percent'
  | 'gauge.with.dots.needle.bottom.50percent.badge.plus'
  | 'gauge.with.dots.needle.bottom.50percent.badge.minus'
  | 'gauge.with.dots.needle.bottom.100percent'
  | 'barometer'
  | 'metronome'
  | 'metronome.fill'
  | 'amplifier'
  | 'dice'
  | 'dice.fill'
  | 'die.face.1'
  | 'die.face.1.fill'
  | 'die.face.2'
  | 'die.face.2.fill'
  | 'die.face.3'
  | 'die.face.3.fill'
  | 'die.face.4'
  | 'die.face.4.fill'
  | 'die.face.5'
  | 'die.face.5.fill'
  | 'die.face.6'
  | 'die.face.6.fill'
  | 'pianokeys'
  | 'pianokeys.inverse'
  | 'tuningfork'
  | 'paintbrush'
  | 'paintbrush.fill'
  | 'paintbrush.pointed'
  | 'paintbrush.pointed.fill'
  | 'level'
  | 'wrench.adjustable'
  | 'wrench.adjustable.fill'
  | 'hammer'
  | 'hammer.fill'
  | 'hammer.circle'
  | 'hammer.circle.fill'
  | 'screwdriver'
  | 'screwdriver.fill'
  | 'eyedropper'
  | 'eyedropper.halffull'
  | 'eyedropper.full'
  | 'wrench.and.screwdriver'
  | 'wrench.and.screwdriver.fill'
  | 'applescript'
  | 'applescript.fill'
  | 'scroll'
  | 'scroll.fill'
  | 'stethoscope'
  | 'stethoscope.circle'
  | 'stethoscope.circle.fill'
  | 'printer'
  | 'printer.fill'
  | 'printer.filled.and.paper'
  | 'printer.dotmatrix'
  | 'printer.dotmatrix.fill'
  | 'printer.dotmatrix.filled.and.paper'
  | 'scanner'
  | 'scanner.fill'
  | 'faxmachine'
  | 'faxmachine.fill'
  | 'handbag'
  | 'handbag.fill'
  | 'handbag.circle'
  | 'handbag.circle.fill'
  | 'briefcase'
  | 'briefcase.fill'
  | 'briefcase.circle'
  | 'briefcase.circle.fill'
  | 'case'
  | 'case.fill'
  | 'latch.2.case'
  | 'latch.2.case.fill'
  | 'cross.case'
  | 'cross.case.fill'
  | 'cross.case.circle'
  | 'cross.case.circle.fill'
  | 'suitcase'
  | 'suitcase.fill'
  | 'suitcase.cart'
  | 'suitcase.cart.fill'
  | 'suitcase.rolling'
  | 'suitcase.rolling.fill'
  | 'theatermasks'
  | 'theatermasks.fill'
  | 'theatermasks.circle'
  | 'theatermasks.circle.fill'
  | 'theatermask.and.paintbrush'
  | 'theatermask.and.paintbrush.fill'
  | 'puzzlepiece.extension'
  | 'puzzlepiece.extension.fill'
  | 'puzzlepiece'
  | 'puzzlepiece.fill'
  | 'house'
  | 'house.fill'
  | 'house.circle'
  | 'house.circle.fill'
  | 'music.note.house'
  | 'music.note.house.fill'
  | 'play.house'
  | 'play.house.fill'
  | 'storefront'
  | 'storefront.fill'
  | 'storefront.circle'
  | 'storefront.circle.fill'
  | 'building.columns'
  | 'building.columns.fill'
  | 'building.columns.circle'
  | 'building.columns.circle.fill'
  | 'lightbulb'
  | 'lightbulb.fill'
  | 'lightbulb.circle'
  | 'lightbulb.circle.fill'
  | 'lightbulb.slash'
  | 'lightbulb.slash.fill'
  | 'lightbulb.min'
  | 'lightbulb.min.fill'
  | 'lightbulb.max'
  | 'lightbulb.max.fill'
  | 'lightbulb.min.badge.exclamationmark'
  | 'lightbulb.min.badge.exclamationmark.fill'
  | 'lightbulb.2'
  | 'lightbulb.2.fill'
  | 'lightbulb.led'
  | 'lightbulb.led.fill'
  | 'lightbulb.led.wide'
  | 'lightbulb.led.wide.fill'
  | 'fan.oscillation'
  | 'fan.oscillation.fill'
  | 'fan'
  | 'fan.fill'
  | 'fan.slash'
  | 'fan.slash.fill'
  | 'fan.badge.automatic'
  | 'fan.badge.automatic.fill'
  | 'fan.desk'
  | 'fan.desk.fill'
  | 'fan.floor'
  | 'fan.floor.fill'
  | 'fan.ceiling'
  | 'fan.ceiling.fill'
  | 'fan.and.light.ceiling'
  | 'fan.and.light.ceiling.fill'
  | 'lamp.desk'
  | 'lamp.desk.fill'
  | 'lamp.table'
  | 'lamp.table.fill'
  | 'lamp.floor'
  | 'lamp.floor.fill'
  | 'lamp.ceiling'
  | 'lamp.ceiling.fill'
  | 'lamp.ceiling.inverse'
  | 'light.recessed'
  | 'light.recessed.fill'
  | 'light.recessed.inverse'
  | 'light.recessed.3'
  | 'light.recessed.3.fill'
  | 'light.recessed.3.inverse'
  | 'light.panel'
  | 'light.panel.fill'
  | 'light.cylindrical.ceiling'
  | 'light.cylindrical.ceiling.fill'
  | 'light.cylindrical.ceiling.inverse'
  | 'light.strip.2'
  | 'light.strip.2.fill'
  | 'light.ribbon'
  | 'light.ribbon.fill'
  | 'chandelier'
  | 'chandelier.fill'
  | 'lightswitch.on'
  | 'lightswitch.on.fill'
  | 'lightswitch.on.square'
  | 'lightswitch.on.square.fill'
  | 'lightswitch.off'
  | 'lightswitch.off.fill'
  | 'lightswitch.off.square'
  | 'lightswitch.off.square.fill'
  | 'poweroutlet.type.b'
  | 'powerplug'
  | 'powerplug.fill'
  | 'powercord'
  | 'powercord.fill'
  | 'web.camera'
  | 'web.camera.fill'
  | 'video.doorbell'
  | 'video.doorbell.fill'
  | 'door.left.hand.open'
  | 'door.left.hand.closed'
  | 'door.right.hand.open'
  | 'door.right.hand.closed'
  | 'door.sliding.left.hand.open'
  | 'door.sliding.left.hand.closed'
  | 'door.sliding.right.hand.open'
  | 'door.sliding.right.hand.closed'
  | 'door.garage.open'
  | 'door.garage.closed'
  | 'door.garage.open.trianglebadge.exclamationmark'
  | 'door.garage.closed.trianglebadge.exclamationmark'
  | 'door.garage.double.bay.open'
  | 'door.garage.double.bay.closed'
  | 'door.garage.double.bay.open.trianglebadge.exclamationmark'
  | 'door.garage.double.bay.closed.trianglebadge.exclamationmark'
  | 'door.french.open'
  | 'door.french.closed'
  | 'sprinkler'
  | 'sprinkler.fill'
  | 'sprinkler.and.droplets'
  | 'sprinkler.and.droplets.fill'
  | 'spigot.fill'
  | 'sensor'
  | 'sensor.fill'
  | 'wifi.router'
  | 'wifi.router.fill'
  | 'party.popper'
  | 'party.popper.fill'
  | 'balloon'
  | 'balloon.fill'
  | 'balloon.2'
  | 'balloon.2.fill'
  | 'fireworks'
  | 'sofa'
  | 'sofa.fill'
  | 'house.lodge'
  | 'house.lodge.fill'
  | 'house.lodge.circle'
  | 'house.lodge.circle.fill'
  | 'house.and.flag'
  | 'house.and.flag.fill'
  | 'house.and.flag.circle'
  | 'house.and.flag.circle.fill'
  | 'signpost.right.and.left.fill'
  | 'building'
  | 'building.fill'
  | 'building.2'
  | 'building.2.fill'
  | 'building.2.crop.circle'
  | 'building.2.crop.circle.fill'
  | 'lock'
  | 'lock.fill'
  | 'lock.circle'
  | 'lock.circle.fill'
  | 'lock.square'
  | 'lock.square.fill'
  | 'lock.circle.dotted'
  | 'lock.square.stack'
  | 'lock.square.stack.fill'
  | 'lock.rectangle'
  | 'lock.rectangle.fill'
  | 'lock.rectangle.stack'
  | 'lock.rectangle.stack.fill'
  | 'lock.rectangle.on.rectangle'
  | 'lock.rectangle.on.rectangle.fill'
  | 'lock.shield'
  | 'lock.shield.fill'
  | 'lock.slash'
  | 'lock.slash.fill'
  | 'lock.trianglebadge.exclamationmark'
  | 'lock.trianglebadge.exclamationmark.fill'
  | 'exclamationmark.lock'
  | 'exclamationmark.lock.fill'
  | 'lock.badge.clock'
  | 'lock.badge.clock.fill'
  | 'lock.open'
  | 'lock.open.fill'
  | 'lock.open.trianglebadge.exclamationmark'
  | 'lock.open.trianglebadge.exclamationmark.fill'
  | 'lock.rotation'
  | 'lock.open.rotation'
  | 'key'
  | 'key.fill'
  | 'key.slash'
  | 'key.slash.fill'
  | 'key.radiowaves.forward'
  | 'key.radiowaves.forward.fill'
  | 'key.radiowaves.forward.slash'
  | 'key.radiowaves.forward.slash.fill'
  | 'key.horizontal'
  | 'key.horizontal.fill'
  | 'questionmark.key.filled'
  | 'wifi'
  | 'wifi.circle'
  | 'wifi.circle.fill'
  | 'wifi.square'
  | 'wifi.square.fill'
  | 'wifi.slash'
  | 'wifi.exclamationmark'
  | 'wifi.exclamationmark.circle'
  | 'wifi.exclamationmark.circle.fill'
  | 'pin'
  | 'pin.fill'
  | 'pin.circle'
  | 'pin.circle.fill'
  | 'pin.square'
  | 'pin.square.fill'
  | 'pin.slash'
  | 'pin.slash.fill'
  | 'mappin'
  | 'mappin.circle'
  | 'mappin.circle.fill'
  | 'mappin.square'
  | 'mappin.square.fill'
  | 'mappin.slash'
  | 'mappin.slash.circle'
  | 'mappin.slash.circle.fill'
  | 'mappin.and.ellipse'
  | 'mappin.and.ellipse.circle'
  | 'mappin.and.ellipse.circle.fill'
  | 'map'
  | 'map.fill'
  | 'map.circle'
  | 'map.circle.fill'
  | 'safari'
  | 'safari.fill'
  | 'move.3d'
  | 'scale.3d'
  | 'rotate.3d'
  | 'rotate.3d.fill'
  | 'rotate.3d.circle'
  | 'rotate.3d.circle.fill'
  | 'torus'
  | 'rotate.left'
  | 'rotate.left.fill'
  | 'rotate.right'
  | 'rotate.right.fill'
  | 'selection.pin.in.out'
  | 'display' // monitor
  | 'play.display'
  | 'lock.display'
  | 'lock.open.display'
  | 'display.and.arrow.down'
  | 'dot.scope.display'
  | 'display.trianglebadge.exclamationmark'
  | 'display.2'
  | 'server.rack'
  | 'xserve'
  | 'xserve.raid'
  | 'laptopcomputer'
  | 'laptopcomputer.slash'
  | 'play.laptopcomputer'
  | 'lock.laptopcomputer'
  | 'lock.open.laptopcomputer'
  | 'laptopcomputer.and.arrow.down'
  | 'laptopcomputer.trianglebadge.exclamationmark'
  | 'dot.scope.laptopcomputer'
  | 'smartphone'
  | 'viewfinder.rectangular'
  | 'computermouse'
  | 'computermouse.fill'
  | 'watch.analog'
  | 'headphones'
  | 'headphones.circle'
  | 'headphones.circle.fill'
  | 'earbuds'
  | 'earbuds.case'
  | 'earbuds.case.fill'
  | 'earpods'
  | 'hifispeaker'
  | 'hifispeaker.fill'
  | 'hifispeaker.2'
  | 'hifispeaker.2.fill'
  | 'av.remote'
  | 'av.remote.fill'
  | 'cable.connector'
  | 'cable.connector.slash'
  | 'cable.connector.horizontal'
  | 'cable.coaxial'
  | 'tv'
  | 'tv.fill'
  | 'tv.slash'
  | 'tv.slash.fill'
  | 'tv.inset.filled'
  | 'tv.circle'
  | 'tv.circle.fill'
  | 'music.note.tv'
  | 'music.note.tv.fill'
  | 'play.tv'
  | 'play.tv.fill'
  | 'photo.tv'
  | 'tv.badge.wifi'
  | 'tv.badge.wifi.fill'
  | 'tv.and.hifispeaker.fill'
  | 'tv.and.mediabox'
  | 'tv.and.mediabox.fill'
  | 'radio'
  | 'radio.fill'
  | 'guitars'
  | 'guitars.fill'
  | 'airplane'
  | 'airplane.circle'
  | 'airplane.circle.fill'
  | 'airplane.arrival'
  | 'airplane.departure'
  | 'car'
  | 'car.fill'
  | 'car.circle'
  | 'car.circle.fill'
  | 'car.front.waves.up'
  | 'car.front.waves.up.fill'
  | 'car.front.waves.down'
  | 'car.front.waves.down.fill'
  | 'car.rear'
  | 'car.rear.fill'
  | 'car.rear.waves.up'
  | 'car.rear.waves.up.fill'
  | 'car.rear.and.tire.marks'
  | 'car.rear.and.tire.marks.slash'
  | 'bolt.car'
  | 'bolt.car.fill'
  | 'bolt.car.circle'
  | 'bolt.car.circle.fill'
  | 'car.2'
  | 'car.2.fill'
  | 'bus'
  | 'bus.fill'
  | 'bus.doubledecker'
  | 'bus.doubledecker.fill'
  | 'tram'
  | 'tram.fill'
  | 'tram.circle'
  | 'tram.circle.fill'
  | 'tram.fill.tunnel'
  | 'cablecar'
  | 'cablecar.fill'
  | 'lightrail'
  | 'lightrail.fill'
  | 'ferry'
  | 'ferry.fill'
  | 'car.ferry'
  | 'car.ferry.fill'
  | 'sailboat'
  | 'sailboat.fill'
  | 'sailboat.circle'
  | 'sailboat.circle.fill'
  | 'train.side.front.car'
  | 'train.side.middle.car'
  | 'train.side.rear.car'
  | 'truck.box'
  | 'truck.box.fill'
  | 'truck.box.badge.clock'
  | 'truck.box.badge.clock.fill'
  | 'bicycle'
  | 'bicycle.circle'
  | 'bicycle.circle.fill'
  | 'scooter'
  | 'stroller'
  | 'stroller.fill'
  | 'parkingsign'
  | 'parkingsign.circle'
  | 'parkingsign.circle.fill'
  | 'bolt.batteryblock'
  | 'bolt.batteryblock.fill'
  | 'road.lanes'
  | 'road.lanes.curved.left'
  | 'road.lanes.curved.right'
  | 'road.lane.arrowtriangle.2.inward'
  | 'horn'
  | 'horn.fill'
  | 'horn.blast'
  | 'horn.blast.fill'
  | 'bandage'
  | 'bandage.fill'
  | 'syringe'
  | 'syringe.fill'
  | 'facemask'
  | 'facemask.fill'
  | 'pill'
  | 'pill.fill'
  | 'pill.circle'
  | 'pill.circle.fill'
  | 'pills'
  | 'pills.fill'
  | 'pills.circle'
  | 'pills.circle.fill'
  | 'cross'
  | 'cross.fill'
  | 'cross.circle'
  | 'cross.circle.fill'
  | 'flask'
  | 'flask.fill'
  | 'tree'
  | 'tree.fill'
  | 'crown'
  | 'crown.fill'
  | 'tshirt'
  | 'tshirt.fill'
  | 'tshirt.circle'
  | 'tshirt.circle.fill'
  | 'shoe'
  | 'shoe.fill'
  | 'shoe.circle'
  | 'shoe.circle.fill'
  | 'shoe.2'
  | 'shoe.2.fill'
  | 'shoeprints.fill'
  | 'film'
  | 'film.fill'
  | 'film.circle'
  | 'film.circle.fill'
  | 'film.stack'
  | 'film.stack.fill'
  | 'movieclapper'
  | 'movieclapper.fill'
  | 'ticket'
  | 'ticket.fill'
  | 'eye'
  | 'eye.fill'
  | 'eye.circle'
  | 'eye.circle.fill'
  | 'eye.square'
  | 'eye.square.fill'
  | 'eye.slash'
  | 'eye.slash.fill'
  | 'eye.slash.circle'
  | 'eye.slash.circle.fill'
  | 'eye.trianglebadge.exclamationmark'
  | 'eye.trianglebadge.exclamationmark.fill'
  | 'eyes'
  | 'brain'
  | 'brain.fill'
  | 'ear'
  | 'ear.fill'
  | 'ear.badge.checkmark'
  | 'ear.trianglebadge.exclamationmark'
  | 'qrcode'
  | 'barcode'
  | 'photo'
  | 'photo.fill'
  | 'photo.circle'
  | 'photo.circle.fill'
  | 'photo.badge.plus'
  | 'photo.badge.plus.fill'
  | 'photo.badge.arrow.down'
  | 'photo.badge.arrow.down.fill'
  | 'photo.badge.checkmark'
  | 'photo.badge.checkmark.fill'
  | 'photo.stack'
  | 'photo.stack.fill'
  | 'scope'
  | 'dot.scope'
  | 'clock'
  | 'clock.fill'
  | 'clock.circle'
  | 'clock.circle.fill'
  | 'clock.badge'
  | 'clock.badge.fill'
  | 'clock.badge.checkmark'
  | 'clock.badge.checkmark.fill'
  | 'clock.badge.xmark'
  | 'clock.badge.xmark.fill'
  | 'clock.badge.questionmark'
  | 'clock.badge.questionmark.fill'
  | 'clock.badge.exclamationmark'
  | 'clock.badge.exclamationmark.fill'
  | 'deskclock'
  | 'deskclock.fill'
  | 'alarm'
  | 'alarm.fill'
  | 'alarm.waves.left.and.right'
  | 'alarm.waves.left.and.right.fill'
  | 'stopwatch'
  | 'stopwatch.fill'
  | 'chart.xyaxis.line'
  | 'gauge.with.needle'
  | 'gauge.with.needle.fill'
  | 'timer'
  | 'timer.circle'
  | 'timer.circle.fill'
  | 'timer.square'
  | 'arrow.circlepath'
  | 'clock.arrow.circlepath'
  | 'exclamationmark.arrow.circlepath'
  | 'clock.arrow.2.circlepath'
  | 'gamecontroller'
  | 'gamecontroller.fill'
  | 'playstation.logo'
  | 'xbox.logo'
  | 'paintpalette'
  | 'paintpalette.fill'
  | 'swatchpalette'
  | 'swatchpalette.fill'
  | 'fork.knife'
  | 'chart.bar'
  | 'chart.bar.fill'
  | 'cellularbars'
  | 'chart.pie'
  | 'chart.pie.fill'
  | 'chart.bar.xaxis'
  | 'chart.bar.xaxis.ascending'
  | 'chart.bar.xaxis.ascending.badge.clock'
  | 'chart.line.uptrend.xyaxis'
  | 'chart.line.uptrend.xyaxis.circle'
  | 'chart.line.uptrend.xyaxis.circle.fill'
  | 'chart.line.downtrend.xyaxis'
  | 'chart.line.downtrend.xyaxis.circle'
  | 'chart.line.downtrend.xyaxis.circle.fill'
  | 'chart.line.flattrend.xyaxis'
  | 'chart.line.flattrend.xyaxis.circle'
  | 'chart.line.flattrend.xyaxis.circle.fill'
  | 'chart.dots.scatter'
  | 'dot.squareshape.split.2x2'
  | 'squareshape.dotted.split.2x2'
  | 'squareshape.split.2x2.dotted'
  | 'squareshape.split.2x2'
  | 'squareshape.split.3x3'
  | 'sdcard'
  | 'sdcard.fill'
  | 'atom'
  | 'angle'
  | 'compass.drawing'
  | 'globe.desk'
  | 'globe.desk.fill'
  | 'fossil.shell'
  | 'fossil.shell.fill'
  | 'gift'
  | 'gift.fill'
  | 'gift.circle'
  | 'gift.circle.fill'
  | 'hourglass'
  | 'hourglass.circle'
  | 'hourglass.circle.fill'
  | 'hourglass.badge.plus'
  | 'hourglass.and.lock'
  | 'hourglass.bottomhalf.filled'
  | 'hourglass.tophalf.filled'
  | 'banknote'
  | 'banknote.fill'
  | 'aspectratio'
  | 'grid'
  | 'binoculars'
  | 'binoculars.fill'
  | 'checklist.unchecked'
  | 'checklist'
  | 'checklist.checked'
  | 'list.bullet'
  | 'list.bullet.circle'
  | 'list.dash'
  | 'list.triangle'
  | 'list.bullet.indent'
  | 'list.number'
  | 'list.star'
  | 'line.3.horizontal' // reorder-horizontal
  | 'bold'
  | 'italic'
  | 'underline'
  | 'strikethrough'
  | 'shadow'
  | 'bold.italic.underline'
  | 'bold.underline'
  | 'percent'
  | 'info'
  | 'info.circle'
  | 'info.circle.fill'
  | 'info.square'
  | 'info.square.fill'
  | 'at'
  | 'questionmark'
  | 'exclamationmark'
  | 'plus'
  | 'plus.circle'
  | 'plus.circle.fill'
  | 'plus.square'
  | 'plus.square.fill'
  | 'plus.rectangle'
  | 'plus.rectangle.fill'
  | 'plus.rectangle.portrait'
  | 'plus.rectangle.portrait.fill'
  | 'plus.diamond'
  | 'plus.diamond.fill'
  | 'minus'
  | 'minus.circle'
  | 'minus.circle.fill'
  | 'minus.square'
  | 'minus.square.fill'
  | 'minus.rectangle'
  | 'minus.rectangle.fill'
  | 'minus.rectangle.portrait'
  | 'minus.rectangle.portrait.fill'
  | 'minus.diamond'
  | 'minus.diamond.fill'
  | 'plusminus'
  | 'plusminus.circle'
  | 'plusminus.circle.fill'
  | 'plus.forwardslash.minus'
  | 'minus.forwardslash.plus'
  | 'multiply'
  | 'multiply.circle'
  | 'multiply.circle.fill'
  | 'multiply.square'
  | 'multiply.square.fill'
  | 'divide'
  | 'divide.circle'
  | 'divide.circle.fill'
  | 'divide.square'
  | 'divide.square.fill'
  | 'equal'
  | 'equal.circle'
  | 'equal.circle.fill'
  | 'equal.square'
  | 'equal.square.fill'
  | 'lessthan'
  | 'lessthan.circle'
  | 'lessthan.circle.fill'
  | 'lessthan.square'
  | 'lessthan.square.fill'
  | 'greaterthan'
  | 'greaterthan.circle'
  | 'greaterthan.circle.fill'
  | 'greaterthan.square'
  | 'greaterthan.square.fill'
  | 'chevron.left.forwardslash.chevron.right'
  | 'parentheses'
  | 'curlybraces'
  | 'curlybraces.square'
  | 'curlybraces.square.fill'
  | 'ellipsis.curlybraces'
  | 'number'
  | 'xmark'
  | 'xmark.circle' // highlight-remove
  | 'xmark.circle.fill'
  | 'xmark.square'
  | 'xmark.square.fill'
  | 'xmark.rectangle'
  | 'xmark.rectangle.fill'
  | 'xmark.rectangle.portrait'
  | 'xmark.rectangle.portrait.fill'
  | 'xmark.diamond'
  | 'xmark.diamond.fill'
  | 'xmark.shield'
  | 'xmark.shield.fill'
  | 'xmark.octagon'
  | 'xmark.octagon.fill'
  | 'checkmark'
  | 'checkmark.circle'
  | 'checkmark.circle.fill'
  | 'checkmark.circle.badge.questionmark'
  | 'checkmark.circle.badge.questionmark.fill'
  | 'checkmark.circle.badge.xmark'
  | 'checkmark.circle.badge.xmark.fill'
  | 'checkmark.circle.trianglebadge.exclamationmark'
  | 'checkmark.square'
  | 'checkmark.square.fill'
  | 'checkmark.rectangle'
  | 'checkmark.rectangle.fill'
  | 'checkmark.rectangle.portrait'
  | 'checkmark.rectangle.portrait.fill'
  | 'checkmark.diamond'
  | 'checkmark.diamond.fill'
  | 'checkmark.shield'
  | 'checkmark.shield.fill'
  | 'chevron.left'
  | 'chevron.left.circle'
  | 'chevron.left.circle.fill'
  | 'chevron.left.square'
  | 'chevron.left.square.fill'
  | 'chevron.backward'
  | 'chevron.backward.circle'
  | 'chevron.backward.circle.fill'
  | 'chevron.backward.square'
  | 'chevron.backward.square.fill'
  | 'chevron.right'
  | 'chevron.right.circle'
  | 'chevron.right.circle.fill'
  | 'chevron.right.square'
  | 'chevron.right.square.fill'
  | 'chevron.forward'
  | 'chevron.forward.circle'
  | 'chevron.forward.circle.fill'
  | 'chevron.forward.square'
  | 'chevron.forward.square.fill'
  | 'chevron.left.2'
  | 'chevron.backward.2'
  | 'chevron.right.2'
  | 'chevron.forward.2'
  | 'chevron.up'
  | 'chevron.up.circle'
  | 'chevron.up.circle.fill'
  | 'chevron.up.square'
  | 'chevron.up.square.fill'
  | 'chevron.down'
  | 'chevron.down.circle'
  | 'chevron.down.circle.fill'
  | 'chevron.down.square'
  | 'chevron.down.square.fill'
  | 'chevron.up.chevron.down'
  | 'chevron.compact.up'
  | 'chevron.compact.down'
  | 'chevron.compact.left'
  | 'chevron.compact.right'
  | 'arrow.left'
  | 'arrow.left.circle'
  | 'arrow.left.circle.fill'
  | 'arrow.left.square'
  | 'arrow.left.square.fill'
  | 'arrow.backward'
  | 'arrow.backward.circle'
  | 'arrow.backward.circle.fill'
  | 'arrow.backward.square'
  | 'arrow.backward.square.fill'
  | 'arrow.right'
  | 'arrow.right.circle'
  | 'arrow.right.circle.fill'
  | 'arrow.right.square'
  | 'arrow.right.square.fill'
  | 'arrow.forward'
  | 'arrow.forward.circle'
  | 'arrow.forward.circle.fill'
  | 'arrow.forward.square'
  | 'arrow.forward.square.fill'
  | 'arrow.up'
  | 'arrow.up.circle'
  | 'arrow.up.circle.fill'
  | 'arrow.up.square'
  | 'arrow.up.square.fill'
  | 'arrow.up.circle.badge.clock'
  | 'arrow.down'
  | 'arrow.down.circle'
  | 'arrow.down.circle.fill'
  | 'arrow.down.circle.dotted'
  | 'arrow.down.square'
  | 'arrow.down.square.fill'
  | 'arrow.up.left'
  | 'arrow.up.left.circle'
  | 'arrow.up.left.circle.fill'
  | 'arrow.up.left.square'
  | 'arrow.up.left.square.fill'
  | 'arrow.up.backward'
  | 'arrow.up.backward.circle'
  | 'arrow.up.backward.circle.fill'
  | 'arrow.up.backward.square'
  | 'arrow.up.backward.square.fill'
  | 'arrow.up.right'
  | 'arrow.up.right.circle'
  | 'arrow.up.right.circle.fill'
  | 'arrow.up.right.square'
  | 'arrow.up.right.square.fill'
  | 'arrow.up.forward'
  | 'arrow.up.forward.circle'
  | 'arrow.up.forward.circle.fill'
  | 'arrow.up.forward.square'
  | 'arrow.up.forward.square.fill'
  | 'arrow.down.left'
  | 'arrow.down.left.circle'
  | 'arrow.down.left.circle.fill'
  | 'arrow.down.left.square'
  | 'arrow.down.left.square.fill'
  | 'arrow.down.backward'
  | 'arrow.down.backward.circle'
  | 'arrow.down.backward.circle.fill'
  | 'arrow.down.backward.square'
  | 'arrow.down.backward.square.fill'
  | 'arrow.down.right'
  | 'arrow.down.right.circle'
  | 'arrow.down.right.circle.fill'
  | 'arrow.down.right.square'
  | 'arrow.down.right.square.fill'
  | 'arrow.down.forward'
  | 'arrow.down.forward.circle'
  | 'arrow.down.forward.circle.fill'
  | 'arrow.down.forward.square'
  | 'arrow.down.forward.square.fill'
  | 'arrow.left.arrow.right'
  | 'arrow.left.arrow.right.circle'
  | 'arrow.left.arrow.right.circle.fill'
  | 'arrow.left.arrow.right.square'
  | 'arrow.left.arrow.right.square.fill'
  | 'arrow.up.arrow.down'
  | 'arrow.up.arrow.down.circle'
  | 'arrow.up.arrow.down.circle.fill'
  | 'arrow.up.arrow.down.square'
  | 'arrow.up.arrow.down.square.fill'
  | 'arrow.down.left.arrow.up.right'
  | 'arrow.down.left.arrow.up.right.circle'
  | 'arrow.down.left.arrow.up.right.circle.fill'
  | 'arrow.down.left.arrow.up.right.square'
  | 'arrow.down.left.arrow.up.right.square.fill'
  | 'arrow.up.left.arrow.down.right'
  | 'arrow.up.left.arrow.down.right.circle'
  | 'arrow.up.left.arrow.down.right.circle.fill'
  | 'arrow.up.left.arrow.down.right.square'
  | 'arrow.up.left.arrow.down.right.square.fill'
  | 'arrow.turn.down.left'
  | 'arrow.turn.up.left'
  | 'arrow.turn.down.right'
  | 'arrow.turn.up.right'
  | 'arrow.turn.right.up'
  | 'arrow.turn.left.up'
  | 'arrow.turn.right.down'
  | 'arrow.turn.left.down'
  | 'arrow.uturn.left'
  | 'arrow.uturn.left.circle'
  | 'arrow.uturn.left.circle.fill'
  | 'arrow.uturn.left.circle.badge.ellipsis'
  | 'arrow.uturn.left.square'
  | 'arrow.uturn.left.square.fill'
  | 'arrow.uturn.backward'
  | 'arrow.uturn.backward.circle'
  | 'arrow.uturn.backward.circle.fill'
  | 'arrow.uturn.backward.circle.badge.ellipsis'
  | 'arrow.uturn.backward.square'
  | 'arrow.uturn.backward.square.fill'
  | 'arrow.uturn.right'
  | 'arrow.uturn.right.circle'
  | 'arrow.uturn.right.circle.fill'
  | 'arrow.uturn.right.square'
  | 'arrow.uturn.right.square.fill'
  | 'arrow.uturn.forward'
  | 'arrow.uturn.forward.circle'
  | 'arrow.uturn.forward.circle.fill'
  | 'arrow.uturn.forward.square'
  | 'arrow.uturn.forward.square.fill'
  | 'arrow.uturn.up'
  | 'arrow.uturn.up.circle'
  | 'arrow.uturn.up.circle.fill'
  | 'arrow.uturn.up.square'
  | 'arrow.uturn.up.square.fill'
  | 'arrow.uturn.down'
  | 'arrow.uturn.down.circle'
  | 'arrow.uturn.down.circle.fill'
  | 'arrow.uturn.down.square'
  | 'arrow.uturn.down.square.fill'
  | 'arrow.up.and.down.and.arrow.left.and.right'
  | 'arrow.up.left.and.down.right.and.arrow.up.right.and.down.left'
  | 'arrow.left.and.right'
  | 'arrow.left.and.right.circle'
  | 'arrow.left.and.right.circle.fill'
  | 'arrow.left.and.right.square'
  | 'arrow.left.and.right.square.fill'
  | 'arrow.up.and.down'
  | 'arrow.up.and.down.circle'
  | 'arrow.up.and.down.circle.fill'
  | 'arrow.up.and.down.square'
  | 'arrow.up.and.down.square.fill'
  | 'arrow.up.to.line'
  | 'arrow.up.to.line.compact'
  | 'arrow.up.to.line.circle'
  | 'arrow.up.to.line.circle.fill'
  | 'arrow.up.to.line.square'
  | 'arrow.up.to.line.square.fill'
  | 'arrow.down.to.line'
  | 'arrow.down.to.line.compact'
  | 'arrow.down.to.line.circle'
  | 'arrow.down.to.line.circle.fill'
  | 'arrow.down.to.line.square'
  | 'arrow.down.to.line.square.fill'
  | 'arrow.left.to.line'
  | 'arrow.left.to.line.compact'
  | 'arrow.left.to.line.circle'
  | 'arrow.left.to.line.circle.fill'
  | 'arrow.left.to.line.square'
  | 'arrow.left.to.line.square.fill'
  | 'arrow.backward.to.line'
  | 'arrow.backward.to.line.circle'
  | 'arrow.backward.to.line.circle.fill'
  | 'arrow.backward.to.line.square'
  | 'arrow.backward.to.line.square.fill'
  | 'arrow.right.to.line'
  | 'arrow.right.to.line.compact'
  | 'arrow.right.to.line.circle'
  | 'arrow.right.to.line.circle.fill'
  | 'arrow.right.to.line.square'
  | 'arrow.right.to.line.square.fill'
  | 'arrow.forward.to.line'
  | 'arrow.forward.to.line.circle'
  | 'arrow.forward.to.line.circle.fill'
  | 'arrow.forward.to.line.square'
  | 'arrow.forward.to.line.square.fill'
  | 'arrow.left.and.line.vertical.and.arrow.right'
  | 'arrow.right.and.line.vertical.and.arrow.left'
  | 'arrow.down.and.line.horizontal.and.arrow.up'
  | 'arrow.up.and.line.horizontal.and.arrow.down'
  | 'arrow.clockwise'
  | 'arrow.clockwise.circle'
  | 'arrow.clockwise.circle.fill'
  | 'arrow.clockwise.square'
  | 'arrow.clockwise.square.fill'
  | 'arrow.counterclockwise'
  | 'arrow.counterclockwise.circle'
  | 'arrow.counterclockwise.circle.fill'
  | 'arrow.counterclockwise.square'
  | 'arrow.counterclockwise.square.fill'
  | 'arrow.up.left.and.arrow.down.right'
  | 'arrow.up.left.and.arrow.down.right.circle'
  | 'arrow.up.left.and.arrow.down.right.circle.fill'
  | 'arrow.up.left.and.arrow.down.right.square'
  | 'arrow.up.left.and.arrow.down.right.square.fill'
  | 'arrow.up.backward.and.arrow.down.forward'
  | 'arrow.up.backward.and.arrow.down.forward.circle'
  | 'arrow.up.backward.and.arrow.down.forward.circle.fill'
  | 'arrow.up.backward.and.arrow.down.forward.square'
  | 'arrow.up.backward.and.arrow.down.forward.square.fill'
  | 'arrow.down.left.and.arrow.up.right'
  | 'arrow.down.left.and.arrow.up.right.circle'
  | 'arrow.down.left.and.arrow.up.right.circle.fill'
  | 'arrow.down.left.and.arrow.up.right.square'
  | 'arrow.down.left.and.arrow.up.right.square.fill'
  | 'arrow.down.backward.and.arrow.up.forward'
  | 'arrow.down.backward.and.arrow.up.forward.circle'
  | 'arrow.down.backward.and.arrow.up.forward.circle.fill'
  | 'arrow.down.backward.and.arrow.up.forward.square'
  | 'arrow.down.backward.and.arrow.up.forward.square.fill'
  | 'arrow.down.right.and.arrow.up.left'
  | 'arrow.down.right.and.arrow.up.left.circle'
  | 'arrow.down.right.and.arrow.up.left.circle.fill'
  | 'arrow.down.right.and.arrow.up.left.square'
  | 'arrow.down.right.and.arrow.up.left.square.fill'
  | 'arrow.down.forward.and.arrow.up.backward'
  | 'arrow.down.forward.and.arrow.up.backward.circle'
  | 'arrow.down.forward.and.arrow.up.backward.circle.fill'
  | 'arrow.down.forward.and.arrow.up.backward.square'
  | 'arrow.down.forward.and.arrow.up.backward.square.fill'
  | 'arrow.up.right.and.arrow.down.left'
  | 'arrow.up.right.and.arrow.down.left.circle'
  | 'arrow.up.right.and.arrow.down.left.circle.fill'
  | 'arrow.up.right.and.arrow.down.left.square'
  | 'arrow.up.right.and.arrow.down.left.square.fill'
  | 'arrow.up.forward.and.arrow.down.backward'
  | 'arrow.up.forward.and.arrow.down.backward.circle'
  | 'arrow.up.forward.and.arrow.down.backward.circle.fill'
  | 'arrow.up.forward.and.arrow.down.backward.square'
  | 'arrow.up.forward.and.arrow.down.backward.square.fill'
  | 'return'
  | 'arrow.2.squarepath'
  | 'arrow.triangle.2.circlepath'
  | 'arrow.triangle.2.circlepath.circle'
  | 'arrow.triangle.2.circlepath.circle.fill'
  | 'exclamationmark.arrow.triangle.2.circlepath'
  | 'gearshape.arrow.triangle.2.circlepath'
  | 'arrow.triangle.capsulepath'
  | 'arrow.3.trianglepath'
  | 'arrow.triangle.turn.up.right.diamond'
  | 'arrow.triangle.turn.up.right.diamond.fill'
  | 'arrow.triangle.turn.up.right.circle'
  | 'arrow.triangle.turn.up.right.circle.fill'
  | 'arrow.triangle.merge'
  | 'arrow.triangle.swap'
  | 'arrow.triangle.branch'
  | 'arrow.triangle.pull'
  | 'arrowtriangle.left'
  | 'arrowtriangle.left.fill'
  | 'arrowtriangle.left.circle'
  | 'arrowtriangle.left.circle.fill'
  | 'arrowtriangle.left.square'
  | 'arrowtriangle.left.square.fill'
  | 'arrowtriangle.backward'
  | 'arrowtriangle.backward.fill'
  | 'arrowtriangle.backward.circle'
  | 'arrowtriangle.backward.circle.fill'
  | 'arrowtriangle.backward.square'
  | 'arrowtriangle.backward.square.fill'
  | 'arrowtriangle.right'
  | 'arrowtriangle.right.fill'
  | 'arrowtriangle.right.circle'
  | 'arrowtriangle.right.circle.fill'
  | 'arrowtriangle.right.square'
  | 'arrowtriangle.right.square.fill'
  | 'arrowtriangle.forward'
  | 'arrowtriangle.forward.fill'
  | 'arrowtriangle.forward.circle'
  | 'arrowtriangle.forward.circle.fill'
  | 'arrowtriangle.forward.square'
  | 'arrowtriangle.forward.square.fill'
  | 'arrowtriangle.up'
  | 'arrowtriangle.up.fill'
  | 'arrowtriangle.up.circle'
  | 'arrowtriangle.up.circle.fill'
  | 'arrowtriangle.up.square'
  | 'arrowtriangle.up.square.fill'
  | 'arrowtriangle.down'
  | 'arrowtriangle.down.fill'
  | 'arrowtriangle.down.circle'
  | 'arrowtriangle.down.circle.fill'
  | 'arrowtriangle.down.square'
  | 'arrowtriangle.down.square.fill'
  | 'slash.circle'
  | 'slash.circle.fill'
  | 'asterisk'
  | 'asterisk.circle'
  | 'asterisk.circle.fill'
  | 'dollarsign'
  | 'apple.logo';

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

// Allows to use either iOS or Material icon names
// for (const key in ICON_NAMES) {
//   const subObject = ICON_NAMES[key as MaterialIconNames];
//   ICON_NAMES[subObject.ios as IosNames] = {
//     ...subObject.default,
//     name: key as MaterialIconNames,
//   };
// }

// console.log(Object.keys(ICON_NAMES));
