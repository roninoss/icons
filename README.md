# A Platform Specific Icon

Built on top of [sweet-sfsymbols](https://github.com/andrew-levy/sweet-sfsymbols) for the SF Symbols on iOS as well as [expo-vector-icons](https://docs.expo.dev/guides/icons/) for the `MaterialIcons` and `MaterialCommunityIcons` icon families on other platforms.

## Features

- Seamlessly renders SF Symbols on iOS and Material icons everywhere else.
- Select 1 icon name to render the Material Icon and the equivalent SF Symbol.
- Default behavior automatically selects the appropriate icon based on the platform.
- Customizable naming scheme to choose between Material icons and SF Symbols.
- Support for over 573 icons mapped one-to-one between Material icons and SF Symbols and all other SF symbols, Material, and Material Community icons.
- Full control over Sf Symbol via [sweet-sfsymbols](https://github.com/andrew-levy/sweet-sfsymbols?tab=readme-ov-file#props) props and Material or Material Community icons via [expo-vector-icon](https://github.com/oblador/react-native-vector-icons?tab=readme-ov-file#properties) props.

### Installation

> **ATTENTION:** This library will not work with Expo Go. Create a [development build](https://docs.expo.dev/develop/development-builds/create-a-build/) if you haven't already done so.

Requires Expo SDK 46+ and Xcode 15+.

Install the package in your project:

```bash
npx expo install @roninoss/icons
```

Rebuild your project for iOS:

```bash
npx expo prebuild -p ios --clean
npx expo run:ios
```

Or rebuild your project for Android:

```bash
npx expo prebuild -p android --clean
npx expo run:android
```

## Usage

**Basic:**

Renders the `arrow.up.square.fill` SF Symbol on iOS and the `arrow-up-box` icon from the MaterialCommunityIcons Family otherwise.

```tsx
<Icon name='arrow-up-box' color={'orange'} />
```

**Material Icon on all platforms:**

Renders the `arrow-up-box` icon from the MaterialCommunityIcons Family on all platforms.

```tsx
<Icon name='arrow-up-box' color={'orange'} ios={{ useMaterialIcon: true }} />
```

**With sweet-sfsymbols Props:**

Renders the `sun.max.fill` SF Symbol with a native animation on iOS and the `arrow-up-box` icon from the MaterialCommunityIcons Family without animations otherwise.

```tsx
<Icon
  name='arrow-up-box'
  color={'orange'}
  ios={{
    name: 'sun.max.fill',
    colors: ['orange'],
    symbolEffect: {
      type: 'pulse',
      isActive: true,
      repeat: true,
      speed: 2,
    },
  }}
/>
```

**With Material Icon Props:**

Renders the `arrow.up.square.fill` SF Symbol on iOS and the `alternate-email` icon from the MaterialIcons Family otherwise.

```tsx
<Icon
  name='arrow-up-box'
  color={'orange'}
  materialIcon={{ type: 'MaterialIcons', name: 'alternate-email' }}
/>
```

**With the Sf Symbol Naming Convention:**

Renders the `phone.fill` SF Symbol on iOS and the `phone` icon from the MaterialCommunityIcons Family otherwise.

```tsx
<Icon name={'phone.fill'} namingScheme='sfSymbol' />
```

## Props

| Prop         | Type                                                                                                                                | Default    | Description                                                                               |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------- |
| name*         | MaterialName                                                                                                                        | Required   | By default, the name of the icon and when the `namingScheme` props is set to `"material"` |
| name*         | SfSymbolName                                                                                                                       | Required   | The name of the icon when the `namingScheme` props is set to `"sfSymbol"`                 |
| size         | number                                                                                                                              | 24         | The size of the icon.                                                                     |
| color        | string                                                                                                                              | '#000000'  | The color of the icon.                                                                    |
| namingScheme | 'material' \| 'sfSymbol'                                                                                                            | 'material' | The naming scheme to use for selecting the icon by name ('material' or 'sfSymbol').       |
| ios          | { useMaterialIcon?: boolean} & [SweetSfSymbolProps](https://github.com/andrew-levy/sweet-sfsymbols?tab=readme-ov-file#props)        |            | Optionally enable the use of Material Icons on iOS or add specific SF Symbol props        |
| material     | [(MaterialIcons \| MaterialCommunityIcons)](https://github.com/oblador/react-native-vector-icons?tab=readme-ov-file#properties) props |            | Optionally add Material Icon specific props                                               |

### Where to find all icon names?

You can all 573 icons the are mapped 1-to-1 [below](#icon-names). However, if the icon you need is missing, you can find all icons here:

- [Sf Symbols](https://github.com/andrewtavis/sf-symbols-online)
- [Material Icons](https://icons.expo.fyi/Index): Select the MaterialIcons and MaterialCommunityIcons filters
</details>

### Icon names

**By default, the Icon accepts a `Material Name` for the `name` prop.**

_To select the `name` from its `SF Symbol Name`, add the prop of `namingScheme="sfSymbol"` to the Icon component._

| Material Name                   | Material Type          | SF Symbol Name                               |
| ------------------------------- | ---------------------- | -------------------------------------------- |
| access-point-network            | MaterialCommunityIcons | network                                      |
| access-point-network-off        | MaterialCommunityIcons | network.slash                                |
| accessibility                   | MaterialIcons          | accessibility                                |
| account-check                   | MaterialCommunityIcons | person.fill.checkmark                        |
| account-circle                  | MaterialCommunityIcons | person.circle.fill                           |
| account-circle-outline          | MaterialCommunityIcons | person.circle                                |
| account-clock                   | MaterialCommunityIcons | person.badge.clock.fill                      |
| account-clock-outline           | MaterialCommunityIcons | person.badge.clock                           |
| account-key                     | MaterialCommunityIcons | person.badge.key.fill                        |
| account-key-outline             | MaterialCommunityIcons | person.badge.key                             |
| account-minus-outline           | MaterialCommunityIcons | person.badge.minus                           |
| account-multiple                | MaterialCommunityIcons | person.2.fill                                |
| account-multiple-outline        | MaterialCommunityIcons | person.2                                     |
| account-off                     | MaterialCommunityIcons | person.slash.fill                            |
| account-off-outline             | MaterialCommunityIcons | person.slash                                 |
| account-plus-outline            | MaterialCommunityIcons | person.badge.plus                            |
| account-question                | MaterialCommunityIcons | person.fill.questionmark                     |
| account-remove                  | MaterialCommunityIcons | person.fill.xmark                            |
| account-voice                   | MaterialCommunityIcons | person.wave.2.fill                           |
| alarm                           | MaterialCommunityIcons | alarm                                        |
| alpha-x-box                     | MaterialCommunityIcons | clear.fill                                   |
| alpha-x-box-outline             | MaterialCommunityIcons | clear                                        |
| alternate-email                 | MaterialIcons          | at                                           |
| angle-acute                     | MaterialCommunityIcons | angle                                        |
| apple                           | MaterialCommunityIcons | apple.logo                                   |
| apple-keyboard-caps             | MaterialCommunityIcons | capslock                                     |
| apple-keyboard-command          | MaterialCommunityIcons | command                                      |
| apple-keyboard-option           | MaterialCommunityIcons | option                                       |
| apple-keyboard-shift            | MaterialCommunityIcons | shift                                        |
| archive                         | MaterialCommunityIcons | archivebox.fill                              |
| archive-arrow-up                | MaterialCommunityIcons | arrow.up.bin.fill                            |
| archive-arrow-up-outline        | MaterialCommunityIcons | arrow.up.bin                                 |
| archive-outline                 | MaterialCommunityIcons | archivebox                                   |
| archive-remove                  | MaterialCommunityIcons | xmark.bin.fill                               |
| archive-remove-outline          | MaterialCommunityIcons | xmark.bin                                    |
| arrow-down                      | MaterialCommunityIcons | arrow.down                                   |
| arrow-down-bold                 | MaterialCommunityIcons | arrowshape.down.fill                         |
| arrow-down-bold-box             | MaterialCommunityIcons | square.and.arrow.down.on.square.fill         |
| arrow-down-bold-box-outline     | MaterialCommunityIcons | square.and.arrow.down.on.square              |
| arrow-down-bold-circle          | MaterialCommunityIcons | arrowshape.down.circle.fill                  |
| arrow-down-bold-circle-outline  | MaterialCommunityIcons | arrowshape.down.circle                       |
| arrow-down-bold-outline         | MaterialCommunityIcons | arrowshape.down                              |
| arrow-down-box                  | MaterialCommunityIcons | arrow.down.square.fill                       |
| arrow-down-circle               | MaterialCommunityIcons | arrow.down.circle.fill                       |
| arrow-down-circle-outline       | MaterialCommunityIcons | arrow.down.circle                            |
| arrow-left                      | MaterialCommunityIcons | arrow.left                                   |
| arrow-left-bold                 | MaterialCommunityIcons | arrowshape.left.fill                         |
| arrow-left-bold-circle          | MaterialCommunityIcons | arrowshape.left.circle.fill                  |
| arrow-left-bold-circle-outline  | MaterialCommunityIcons | arrowshape.left.circle                       |
| arrow-left-bold-outline         | MaterialCommunityIcons | arrowshape.left                              |
| arrow-left-box                  | MaterialCommunityIcons | arrow.left.square.fill                       |
| arrow-left-circle               | MaterialCommunityIcons | arrow.left.circle.fill                       |
| arrow-left-circle-outline       | MaterialCommunityIcons | arrow.left.circle                            |
| arrow-left-right-bold           | MaterialCommunityIcons | arrowshape.left.arrowshape.right.fill        |
| arrow-left-right-bold-outline   | MaterialCommunityIcons | arrowshape.left.arrowshape.right             |
| arrow-left-top                  | MaterialCommunityIcons | arrowshape.turn.up.left                      |
| arrow-left-top-bold             | MaterialCommunityIcons | arrowshape.turn.up.left.fill                 |
| arrow-right                     | MaterialCommunityIcons | arrow.right                                  |
| arrow-right-bold                | MaterialCommunityIcons | arrowshape.right.fill                        |
| arrow-right-bold-box            | MaterialCommunityIcons | rectangle.portrait.and.arrow.right.fill      |
| arrow-right-bold-box-outline    | MaterialCommunityIcons | rectangle.portrait.and.arrow.right           |
| arrow-right-bold-circle         | MaterialCommunityIcons | arrowshape.right.circle.fill                 |
| arrow-right-bold-circle-outline | MaterialCommunityIcons | arrowshape.right.circle                      |
| arrow-right-bold-outline        | MaterialCommunityIcons | arrowshape.right                             |
| arrow-right-box                 | MaterialCommunityIcons | arrow.right.square.fill                      |
| arrow-right-circle              | MaterialCommunityIcons | arrow.right.circle.fill                      |
| arrow-right-circle-outline      | MaterialCommunityIcons | arrow.right.circle                           |
| arrow-right-top                 | MaterialCommunityIcons | arrowshape.turn.up.right                     |
| arrow-right-top-bold            | MaterialCommunityIcons | arrowshape.turn.up.right.fill                |
| arrow-up                        | MaterialCommunityIcons | arrow.up                                     |
| arrow-up-bold                   | MaterialCommunityIcons | arrowshape.up.fill                           |
| arrow-up-bold-circle            | MaterialCommunityIcons | arrowshape.up.circle.fill                    |
| arrow-up-bold-circle-outline    | MaterialCommunityIcons | arrowshape.up.circle                         |
| arrow-up-bold-outline           | MaterialCommunityIcons | arrowshape.up                                |
| arrow-up-box                    | MaterialCommunityIcons | arrow.up.square.fill                         |
| arrow-up-circle                 | MaterialCommunityIcons | arrow.up.circle.fill                         |
| arrow-up-circle-outline         | MaterialCommunityIcons | arrow.up.circle                              |
| asterisk                        | MaterialCommunityIcons | asterisk                                     |
| atom                            | MaterialCommunityIcons | atom                                         |
| attach-money                    | MaterialIcons          | dollarsign                                   |
| backpack                        | MaterialIcons          | backpack.fill                                |
| balloon                         | MaterialCommunityIcons | balloon.fill                                 |
| bandage                         | MaterialCommunityIcons | bandage.fill                                 |
| barcode                         | MaterialCommunityIcons | barcode                                      |
| baseball                        | MaterialCommunityIcons | baseball.fill                                |
| basket                          | MaterialCommunityIcons | basket.fill                                  |
| basket-outline                  | MaterialCommunityIcons | basket                                       |
| basketball                      | MaterialCommunityIcons | basketball.fill                              |
| bell                            | MaterialCommunityIcons | bell.fill                                    |
| bell-outline                    | MaterialCommunityIcons | bell                                         |
| book-open                       | MaterialCommunityIcons | book.fill                                    |
| book-open-outline               | MaterialCommunityIcons | book                                         |
| bookmark                        | MaterialCommunityIcons | bookmark.fill                                |
| bookmark-off                    | MaterialCommunityIcons | bookmark.slash.fill                          |
| bookmark-off-outline            | MaterialCommunityIcons | bookmark.slash                               |
| bookmark-outline                | MaterialCommunityIcons | bookmark                                     |
| bookshelf                       | MaterialCommunityIcons | books.vertical.fill                          |
| brain                           | MaterialCommunityIcons | brain                                        |
| brush-variant                   | MaterialCommunityIcons | paintbrush                                   |
| bullhorn                        | MaterialCommunityIcons | megaphone.fill                               |
| bullhorn-outline                | MaterialCommunityIcons | megaphone                                    |
| bullhorn-variant                | MaterialCommunityIcons | horn.fill                                    |
| bullhorn-variant-outline        | MaterialCommunityIcons | horn                                         |
| calendar-alert                  | MaterialCommunityIcons | calendar.badge.exclamationmark               |
| calendar-check                  | MaterialCommunityIcons | calendar.badge.checkmark                     |
| calendar-clock                  | MaterialCommunityIcons | calendar.badge.clock                         |
| calendar-minus                  | MaterialCommunityIcons | calendar.badge.minus                         |
| calendar-month                  | MaterialCommunityIcons | calendar                                     |
| calendar-plus                   | MaterialCommunityIcons | calendar.badge.plus                          |
| camera                          | MaterialCommunityIcons | camera.fill                                  |
| camera-outline                  | MaterialCommunityIcons | camera                                       |
| camera-timer                    | MaterialCommunityIcons | timer                                        |
| cancel                          | MaterialCommunityIcons | circle.slash                                 |
| card-bulleted                   | MaterialCommunityIcons | list.bullet.rectangle.fill                   |
| card-bulleted-outline           | MaterialCommunityIcons | list.bullet.rectangle                        |
| card-giftcard                   | MaterialIcons          | giftcard                                     |
| cart                            | MaterialCommunityIcons | cart.fill                                    |
| cart-outline                    | MaterialCommunityIcons | cart                                         |
| cash                            | MaterialCommunityIcons | banknote                                     |
| cellphone                       | MaterialCommunityIcons | smartphone                                   |
| chart-box                       | MaterialCommunityIcons | chart.bar.fill                               |
| chart-box-outline               | MaterialCommunityIcons | chart.bar                                    |
| chart-pie                       | MaterialCommunityIcons | chart.pie.fill                               |
| chart-timeline-variant          | MaterialCommunityIcons | chart.xyaxis.line                            |
| check                           | MaterialCommunityIcons | checkmark                                    |
| check-box                       | MaterialIcons          | checkmark.square.fill                        |
| check-circle                    | MaterialCommunityIcons | checkmark.circle.fill                        |
| check-circle-outline            | MaterialCommunityIcons | checkmark.circle                             |
| check-decagram                  | MaterialCommunityIcons | checkmark.seal.fill                          |
| check-decagram-outline          | MaterialCommunityIcons | checkmark.seal                               |
| checkbox-blank-badge            | MaterialCommunityIcons | app.badge.fill                               |
| checkbox-blank-badge-outline    | MaterialCommunityIcons | app.badge                                    |
| checkerboard                    | MaterialCommunityIcons | rectangle.checkered                          |
| chevron-double-left             | MaterialCommunityIcons | chevron.left.2                               |
| chevron-double-right            | MaterialCommunityIcons | chevron.right.2                              |
| chevron-down                    | MaterialCommunityIcons | chevron.down                                 |
| chevron-down-box                | MaterialCommunityIcons | chevron.down.square.fill                     |
| chevron-down-box-outline        | MaterialCommunityIcons | chevron.down.square                          |
| chevron-down-circle             | MaterialCommunityIcons | chevron.down.circle.fill                     |
| chevron-down-circle-outline     | MaterialCommunityIcons | chevron.down.circle                          |
| chevron-left                    | MaterialCommunityIcons | chevron.left                                 |
| chevron-left-box                | MaterialCommunityIcons | chevron.left.square.fill                     |
| chevron-left-box-outline        | MaterialCommunityIcons | chevron.left.square                          |
| chevron-left-circle             | MaterialCommunityIcons | chevron.left.circle.fill                     |
| chevron-left-circle-outline     | MaterialCommunityIcons | chevron.left.circle                          |
| chevron-right                   | MaterialCommunityIcons | chevron.right                                |
| chevron-right-box               | MaterialCommunityIcons | chevron.right.square.fill                    |
| chevron-right-box-outline       | MaterialCommunityIcons | chevron.right.square                         |
| chevron-right-circle            | MaterialCommunityIcons | chevron.right.circle.fill                    |
| chevron-right-circle-outline    | MaterialCommunityIcons | chevron.right.circle                         |
| chevron-up                      | MaterialCommunityIcons | chevron.up                                   |
| chevron-up-box                  | MaterialCommunityIcons | chevron.up.square.fill                       |
| chevron-up-box-outline          | MaterialCommunityIcons | chevron.up.square                            |
| chevron-up-circle               | MaterialCommunityIcons | chevron.up.circle.fill                       |
| chevron-up-circle-outline       | MaterialCommunityIcons | chevron.up.circle                            |
| circle                          | MaterialCommunityIcons | circle.fill                                  |
| circle-outline                  | MaterialCommunityIcons | circle                                       |
| city-variant                    | MaterialCommunityIcons | building.2.fill                              |
| city-variant-outline            | MaterialCommunityIcons | building.2                                   |
| clipboard                       | MaterialCommunityIcons | clipboard.fill                               |
| clipboard-edit-outline          | MaterialCommunityIcons | pencil.and.list.clipboard                    |
| clipboard-list                  | MaterialCommunityIcons | list.clipboard.fill                          |
| clipboard-list-outline          | MaterialCommunityIcons | list.clipboard                               |
| clipboard-outline               | MaterialCommunityIcons | clipboard                                    |
| clock                           | MaterialCommunityIcons | clock.fill                                   |
| clock-alert                     | MaterialCommunityIcons | clock.badge.exclamationmark.fill             |
| clock-alert-outline             | MaterialCommunityIcons | clock.badge.exclamationmark                  |
| clock-check                     | MaterialCommunityIcons | clock.badge.checkmark.fill                   |
| clock-check-outline             | MaterialCommunityIcons | clock.badge.checkmark                        |
| clock-outline                   | MaterialCommunityIcons | clock                                        |
| clock-remove                    | MaterialCommunityIcons | clock.badge.xmark.fill                       |
| clock-remove-outline            | MaterialCommunityIcons | clock.badge.xmark                            |
| close                           | MaterialCommunityIcons | multiply                                     |
| close-box                       | MaterialCommunityIcons | xmark.square.fill                            |
| close-box-outline               | MaterialCommunityIcons | xmark.square                                 |
| close-circle                    | MaterialCommunityIcons | xmark.circle.fill                            |
| close-circle-outline            | MaterialCommunityIcons | xmark.circle                                 |
| close-octagon                   | MaterialCommunityIcons | xmark.octagon.fill                           |
| close-octagon-outline           | MaterialCommunityIcons | xmark.octagon                                |
| close-thick                     | MaterialCommunityIcons | xmark                                        |
| cloud                           | MaterialCommunityIcons | cloud.fill                                   |
| cloud-outline                   | MaterialCommunityIcons | cloud                                        |
| code-braces                     | MaterialCommunityIcons | curlybraces                                  |
| code-json                       | MaterialCommunityIcons | ellipsis.curlybraces                         |
| code-parentheses                | MaterialCommunityIcons | parentheses                                  |
| cog                             | MaterialCommunityIcons | gearshape.fill                               |
| cog-outline                     | MaterialCommunityIcons | gearshape                                    |
| comment-quote                   | MaterialCommunityIcons | quote.bubble.fill                            |
| comment-quote-outline           | MaterialCommunityIcons | quote.bubble                                 |
| connected-tv                    | MaterialIcons          | tv.badge.wifi                                |
| controller-classic              | MaterialCommunityIcons | gamecontroller.fill                          |
| controller-classic-outline      | MaterialCommunityIcons | gamecontroller                               |
| credit-card                     | MaterialCommunityIcons | creditcard.fill                              |
| credit-card-outline             | MaterialCommunityIcons | creditcard                                   |
| cricket                         | MaterialCommunityIcons | cricket.ball.fill                            |
| crop                            | MaterialCommunityIcons | crop                                         |
| crop-rotate                     | MaterialCommunityIcons | crop.rotate                                  |
| crown                           | MaterialCommunityIcons | crown.fill                                   |
| crown-outline                   | MaterialCommunityIcons | crown                                        |
| database                        | MaterialCommunityIcons | externaldrive.fill                           |
| database-alert                  | MaterialCommunityIcons | externaldrive.fill.badge.exclamationmark     |
| database-alert-outline          | MaterialCommunityIcons | externaldrive.badge.exclamationmark          |
| database-check                  | MaterialCommunityIcons | externaldrive.fill.badge.checkmark           |
| database-check-outline          | MaterialCommunityIcons | externaldrive.badge.checkmark                |
| database-clock                  | MaterialCommunityIcons | externaldrive.fill.badge.timemachine         |
| database-clock-outline          | MaterialCommunityIcons | externaldrive.badge.timemachine              |
| database-minus                  | MaterialCommunityIcons | externaldrive.fill.badge.minus               |
| database-minus-outline          | MaterialCommunityIcons | externaldrive.badge.minus                    |
| database-outline                | MaterialCommunityIcons | externaldrive                                |
| database-plus                   | MaterialCommunityIcons | externaldrive.fill.badge.plus                |
| database-plus-outline           | MaterialCommunityIcons | externaldrive.badge.plus                     |
| database-remove                 | MaterialCommunityIcons | externaldrive.fill.badge.xmark               |
| database-remove-outline         | MaterialCommunityIcons | externaldrive.badge.xmark                    |
| delete-circle                   | MaterialCommunityIcons | trash.circle.fill                            |
| delete-circle-outline           | MaterialCommunityIcons | trash.circle                                 |
| delete-off                      | MaterialCommunityIcons | trash.slash.fill                             |
| delete-off-outline              | MaterialCommunityIcons | trash.slash                                  |
| division                        | MaterialCommunityIcons | divide                                       |
| dots-horizontal                 | MaterialCommunityIcons | ellipsis                                     |
| dots-horizontal-circle          | MaterialCommunityIcons | ellipsis.circle.fill                         |
| dots-horizontal-circle-outline  | MaterialCommunityIcons | ellipsis.circle                              |
| drama-masks                     | MaterialCommunityIcons | theatermasks                                 |
| draw                            | MaterialCommunityIcons | pencil.and.scribble                          |
| drive-file-rename-outline       | MaterialIcons          | rectangle.and.pencil.and.ellipsis            |
| dumbbell                        | MaterialCommunityIcons | dumbbell.fill                                |
| email                           | MaterialCommunityIcons | envelope.fill                                |
| email-open                      | MaterialCommunityIcons | envelope.open.fill                           |
| email-outline                   | MaterialCommunityIcons | envelope                                     |
| equal                           | MaterialCommunityIcons | equal                                        |
| eraser                          | MaterialCommunityIcons | eraser                                       |
| eraser-variant                  | MaterialCommunityIcons | eraser.fill                                  |
| exclamation                     | MaterialCommunityIcons | exclamationmark                              |
| eye                             | MaterialCommunityIcons | eye.fill                                     |
| eye-off                         | MaterialCommunityIcons | eye.slash.fill                               |
| eye-off-outline                 | MaterialCommunityIcons | eye.slash                                    |
| eye-outline                     | MaterialCommunityIcons | eye                                          |
| eyedropper                      | MaterialCommunityIcons | eyedropper                                   |
| fast-forward                    | MaterialCommunityIcons | forward.fill                                 |
| fast-forward-outline            | MaterialCommunityIcons | forward                                      |
| file-clock                      | MaterialCommunityIcons | doc.badge.clock.fill                         |
| file-clock-outline              | MaterialCommunityIcons | doc.badge.clock                              |
| file-cog                        | MaterialCommunityIcons | doc.badge.gearshape.fill                     |
| file-cog-outline                | MaterialCommunityIcons | doc.badge.gearshape                          |
| file-copy                       | MaterialIcons          | doc.on.clipboard.fill                        |
| file-document                   | MaterialCommunityIcons | doc.fill                                     |
| file-document-multiple          | MaterialCommunityIcons | doc.on.doc.fill                              |
| file-document-multiple-outline  | MaterialCommunityIcons | doc.on.doc                                   |
| file-document-outline           | MaterialCommunityIcons | doc                                          |
| file-download                   | MaterialCommunityIcons | arrow.down.doc.fill                          |
| file-download-outline           | MaterialCommunityIcons | arrow.down.doc                               |
| file-lock                       | MaterialCommunityIcons | lock.doc.fill                                |
| file-lock-outline               | MaterialCommunityIcons | lock.doc                                     |
| file-plus                       | MaterialCommunityIcons | doc.fill.badge.plus                          |
| file-plus-outline               | MaterialCommunityIcons | doc.badge.plus                               |
| file-question                   | MaterialCommunityIcons | doc.questionmark.fill                        |
| file-question-outline           | MaterialCommunityIcons | doc.questionmark                             |
| file-search-outline             | MaterialCommunityIcons | doc.text.magnifyingglass                     |
| file-upload                     | MaterialCommunityIcons | arrow.up.doc.fill                            |
| file-upload-outline             | MaterialCommunityIcons | arrow.up.doc                                 |
| filmstrip                       | MaterialCommunityIcons | film.fill                                    |
| filmstrip-box-multiple          | MaterialCommunityIcons | film.stack.fill                              |
| fire                            | MaterialCommunityIcons | flame                                        |
| fire-circle                     | MaterialCommunityIcons | flame.circle                                 |
| firework                        | MaterialCommunityIcons | fireworks                                    |
| flag                            | MaterialCommunityIcons | flag.fill                                    |
| flag-outline                    | MaterialCommunityIcons | flag                                         |
| flashlight                      | MaterialCommunityIcons | flashlight.on.fill                           |
| flashlight-off                  | MaterialCommunityIcons | flashlight.off.fill                          |
| folder                          | MaterialCommunityIcons | folder.fill                                  |
| folder-account                  | MaterialCommunityIcons | folder.fill.badge.person.crop                |
| folder-account-outline          | MaterialCommunityIcons | folder.badge.person.crop                     |
| folder-cog                      | MaterialCommunityIcons | folder.fill.badge.gearshape                  |
| folder-cog-outline              | MaterialCommunityIcons | folder.badge.gearshape                       |
| folder-open                     | MaterialIcons          | folder                                       |
| folder-plus                     | MaterialCommunityIcons | folder.fill.badge.plus                       |
| folder-plus-outline             | MaterialCommunityIcons | folder.badge.plus                            |
| folder-remove                   | MaterialCommunityIcons | folder.fill.badge.minus                      |
| folder-remove-outline           | MaterialCommunityIcons | folder.badge.minus                           |
| football                        | MaterialCommunityIcons | football.fill                                |
| format-bold                     | MaterialCommunityIcons | bold                                         |
| format-italic                   | MaterialCommunityIcons | italic                                       |
| format-list-bulleted            | MaterialCommunityIcons | list.bullet                                  |
| format-list-checks              | MaterialCommunityIcons | checklist                                    |
| format-quote-close              | MaterialCommunityIcons | quote.closing                                |
| format-quote-open               | MaterialCommunityIcons | quote.opening                                |
| format-strikethrough            | MaterialCommunityIcons | strikethrough                                |
| format-underline                | MaterialCommunityIcons | underline                                    |
| fountain-pen-tip                | MaterialCommunityIcons | pencil.tip                                   |
| gift                            | MaterialCommunityIcons | gift.fill                                    |
| gift-outline                    | MaterialCommunityIcons | gift                                         |
| globe-model                     | MaterialCommunityIcons | globe.desk                                   |
| greater-than                    | MaterialCommunityIcons | greaterthan                                  |
| grid                            | MaterialCommunityIcons | grid                                         |
| hammer                          | MaterialCommunityIcons | hammer.fill                                  |
| hammer-screwdriver              | MaterialCommunityIcons | wrench.and.screwdriver.fill                  |
| headphones                      | MaterialCommunityIcons | headphones                                   |
| heart                           | MaterialCommunityIcons | heart.fill                                   |
| heart-flash                     | MaterialCommunityIcons | bolt.heart.fill                              |
| heart-outline                   | MaterialCommunityIcons | heart                                        |
| help                            | MaterialCommunityIcons | questionmark                                 |
| hockey-puck                     | MaterialCommunityIcons | hockey.puck.fill                             |
| home                            | MaterialCommunityIcons | house.fill                                   |
| home-circle                     | MaterialCommunityIcons | house.circle.fill                            |
| home-circle-outline             | MaterialCommunityIcons | house.circle                                 |
| home-outline                    | MaterialCommunityIcons | house                                        |
| image                           | MaterialCommunityIcons | photo.fill                                   |
| image-frame                     | MaterialCommunityIcons | photo.artframe                               |
| image-multiple                  | MaterialCommunityIcons | photo.stack.fill                             |
| image-multiple-outline          | MaterialCommunityIcons | photo.stack                                  |
| image-outline                   | MaterialCommunityIcons | photo                                        |
| image-plus                      | MaterialCommunityIcons | photo.badge.plus.fill                        |
| image-text                      | MaterialCommunityIcons | doc.richtext                                 |
| inbox                           | MaterialCommunityIcons | tray.fill                                    |
| inbox-arrow-down                | MaterialCommunityIcons | tray.and.arrow.down.fill                     |
| inbox-arrow-down-outline        | MaterialCommunityIcons | tray.and.arrow.down                          |
| inbox-arrow-up                  | MaterialCommunityIcons | tray.and.arrow.up.fill                       |
| inbox-arrow-up-outline          | MaterialCommunityIcons | tray.and.arrow.up                            |
| inbox-full                      | MaterialCommunityIcons | tray.full.fill                               |
| inbox-full-outline              | MaterialCommunityIcons | tray.full                                    |
| inbox-multiple                  | MaterialCommunityIcons | tray.2.fill                                  |
| inbox-multiple-outline          | MaterialCommunityIcons | tray.2                                       |
| infinity                        | MaterialCommunityIcons | infinity                                     |
| information                     | MaterialCommunityIcons | info.circle.fill                             |
| information-outline             | MaterialCommunityIcons | info.circle                                  |
| key                             | MaterialCommunityIcons | key.fill                                     |
| key-outline                     | MaterialCommunityIcons | key                                          |
| keyboard                        | MaterialCommunityIcons | keyboard.fill                                |
| keyboard-backspace              | MaterialCommunityIcons | delete.left                                  |
| keyboard-outline                | MaterialCommunityIcons | keyboard                                     |
| keyboard-settings               | MaterialCommunityIcons | keyboard.badge.ellipsis.fill                 |
| keyboard-settings-outline       | MaterialCommunityIcons | keyboard.badge.ellipsis                      |
| keyboard-space                  | MaterialCommunityIcons | space                                        |
| laptop                          | MaterialCommunityIcons | laptopcomputer                               |
| laptop-off                      | MaterialCommunityIcons | laptopcomputer.slash                         |
| lasso                           | MaterialCommunityIcons | lasso                                        |
| less-than                       | MaterialCommunityIcons | lessthan                                     |
| lightbulb                       | MaterialCommunityIcons | lightbulb.fill                               |
| lightbulb-off                   | MaterialCommunityIcons | lightbulb.slash.fill                         |
| lightbulb-off-outline           | MaterialCommunityIcons | lightbulb.slash                              |
| lightbulb-outline               | MaterialCommunityIcons | lightbulb                                    |
| lightning-bolt                  | MaterialCommunityIcons | bolt.fill                                    |
| lightning-bolt-outline          | MaterialCommunityIcons | bolt                                         |
| link                            | MaterialCommunityIcons | link                                         |
| link-plus                       | MaterialCommunityIcons | link.badge.plus                              |
| live-tv                         | MaterialIcons          | play.tv                                      |
| lock                            | MaterialCommunityIcons | lock.fill                                    |
| lock-alert                      | MaterialCommunityIcons | exclamationmark.lock.fill                    |
| lock-alert-outline              | MaterialCommunityIcons | exclamationmark.lock                         |
| lock-clock                      | MaterialCommunityIcons | lock.badge.clock.fill                        |
| lock-off                        | MaterialCommunityIcons | lock.slash.fill                              |
| lock-off-outline                | MaterialCommunityIcons | lock.slash                                   |
| lock-open                       | MaterialCommunityIcons | lock.open                                    |
| lock-open-alert                 | MaterialCommunityIcons | lock.open.trianglebadge.exclamationmark      |
| lock-open-alert-outline         | MaterialCommunityIcons | lock.open.trianglebadge.exclamationmark.fill |
| lock-open-outline               | MaterialCommunityIcons | lock.open.fill                               |
| lock-outline                    | MaterialCommunityIcons | lock                                         |
| lock-reset                      | MaterialCommunityIcons | lock.rotation                                |
| magnify                         | MaterialCommunityIcons | magnifyingglass                              |
| magnify-minus-outline           | MaterialCommunityIcons | minus.magnifyingglass                        |
| magnify-plus-outline            | MaterialCommunityIcons | plus.magnifyingglass                         |
| map                             | MaterialCommunityIcons | map.fill                                     |
| map-marker-off-outline          | MaterialCommunityIcons | mappin.slash                                 |
| map-marker-outline              | MaterialCommunityIcons | mappin                                       |
| map-marker-radius               | MaterialCommunityIcons | mappin.circle.fill                           |
| map-marker-radius-outline       | MaterialCommunityIcons | mappin.circle                                |
| map-outline                     | MaterialCommunityIcons | map                                          |
| marker                          | MaterialCommunityIcons | highlighter                                  |
| math-compass                    | MaterialCommunityIcons | compass.drawing                              |
| medal                           | MaterialCommunityIcons | medal.fill                                   |
| medal-outline                   | MaterialCommunityIcons | medal                                        |
| menu-book                       | MaterialIcons          | menucard.fill                                |
| message                         | MaterialCommunityIcons | message.fill                                 |
| message-outline                 | MaterialCommunityIcons | message                                      |
| message-plus                    | MaterialCommunityIcons | plus.message.fill                            |
| message-plus-outline            | MaterialCommunityIcons | plus.message                                 |
| message-processing              | MaterialCommunityIcons | ellipsis.message.fill                        |
| message-processing-outline      | MaterialCommunityIcons | ellipsis.message                             |
| message-question                | MaterialCommunityIcons | questionmark.bubble.fill                     |
| message-question-outline        | MaterialCommunityIcons | questionmark.bubble                          |
| message-star                    | MaterialCommunityIcons | star.bubble.fill                             |
| message-star-outline            | MaterialCommunityIcons | star.bubble                                  |
| microphone                      | MaterialCommunityIcons | mic.fill                                     |
| microphone-off                  | MaterialCommunityIcons | mic.slash.fill                               |
| microphone-outline              | MaterialCommunityIcons | mic                                          |
| microphone-plus                 | MaterialCommunityIcons | mic.fill.badge.plus                          |
| microphone-variant              | MaterialCommunityIcons | music.mic                                    |
| microsoft-xbox                  | MaterialCommunityIcons | xbox.logo                                    |
| minus                           | MaterialCommunityIcons | minus                                        |
| monitor                         | MaterialCommunityIcons | display                                      |
| monitor-lock                    | MaterialCommunityIcons | lock.display                                 |
| monitor-multiple                | MaterialCommunityIcons | display.2                                    |
| movie-open                      | MaterialCommunityIcons | movieclapper.fill                            |
| movie-open-outline              | MaterialCommunityIcons | movieclapper                                 |
| music-note                      | MaterialCommunityIcons | music.note                                   |
| newspaper                       | MaterialCommunityIcons | newspaper                                    |
| newspaper-variant               | MaterialCommunityIcons | newspaper.fill                               |
| nightlight-round                | MaterialIcons          | moon.fill                                    |
| note-outline                    | MaterialCommunityIcons | note                                         |
| note-text-outline               | MaterialCommunityIcons | note.text                                    |
| office-building                 | MaterialCommunityIcons | building.fill                                |
| office-building-outline         | MaterialCommunityIcons | building                                     |
| palette                         | MaterialCommunityIcons | paintpalette.fill                            |
| palette-outline                 | MaterialCommunityIcons | paintpalette                                 |
| palette-swatch                  | MaterialCommunityIcons | swatchpalette.fill                           |
| palette-swatch-outline          | MaterialCommunityIcons | swatchpalette                                |
| paperclip                       | MaterialCommunityIcons | paperclip                                    |
| party-popper                    | MaterialCommunityIcons | party.popper.fill                            |
| pause                           | MaterialCommunityIcons | pause                                        |
| pause-circle                    | MaterialCommunityIcons | pause.circle.fill                            |
| pause-circle-outline            | MaterialCommunityIcons | pause.circle                                 |
| pen-minus                       | MaterialCommunityIcons | pencil.tip.crop.circle.badge.minus.fill      |
| pen-plus                        | MaterialCommunityIcons | pencil.tip.crop.circle.badge.plus.fill       |
| pencil                          | MaterialCommunityIcons | pencil                                       |
| pencil-box-outline              | MaterialCommunityIcons | square.and.pencil                            |
| pencil-circle                   | MaterialCommunityIcons | pencil.circle.fill                           |
| pencil-circle-outline           | MaterialCommunityIcons | pencil.circle                                |
| pencil-minus-outline            | MaterialCommunityIcons | pencil.tip.crop.circle.badge.minus           |
| pencil-off                      | MaterialCommunityIcons | pencil.slash                                 |
| pencil-plus-outline             | MaterialCommunityIcons | pencil.tip.crop.circle.badge.plus            |
| pencil-ruler                    | MaterialCommunityIcons | pencil.and.ruler.fill                        |
| percent                         | MaterialCommunityIcons | percent                                      |
| person                          | MaterialIcons          | person.fill                                  |
| person-outline                  | MaterialIcons          | person                                       |
| phone                           | MaterialCommunityIcons | phone.fill                                   |
| phone-check                     | MaterialCommunityIcons | phone.fill.badge.checkmark                   |
| phone-check-outline             | MaterialCommunityIcons | phone.badge.checkmark                        |
| phone-outline                   | MaterialCommunityIcons | phone                                        |
| phone-plus                      | MaterialCommunityIcons | phone.fill.badge.plus                        |
| phone-plus-outline              | MaterialCommunityIcons | phone.badge.plus                             |
| pin                             | MaterialCommunityIcons | pin.fill                                     |
| pin-off                         | MaterialCommunityIcons | pin.slash.fill                               |
| pin-off-outline                 | MaterialCommunityIcons | pin.slash                                    |
| pin-outline                     | MaterialCommunityIcons | pin                                          |
| play                            | MaterialCommunityIcons | play.fill                                    |
| play-box                        | MaterialCommunityIcons | play.square.fill                             |
| play-box-multiple               | MaterialCommunityIcons | play.square.stack.fill                       |
| play-box-multiple-outline       | MaterialCommunityIcons | play.square.stack                            |
| play-box-outline                | MaterialCommunityIcons | play.square                                  |
| play-circle                     | MaterialCommunityIcons | play.circle.fill                             |
| play-circle-outline             | MaterialCommunityIcons | play.circle                                  |
| play-outline                    | MaterialCommunityIcons | play                                         |
| play-pause                      | MaterialCommunityIcons | playpause.fill                               |
| playlist-music                  | MaterialCommunityIcons | music.note.list                              |
| plus                            | MaterialCommunityIcons | plus                                         |
| plus-box                        | MaterialCommunityIcons | plus.app.fill                                |
| plus-box-outline                | MaterialCommunityIcons | plus.app                                     |
| plus-minus                      | MaterialCommunityIcons | plusminus                                    |
| power                           | MaterialCommunityIcons | power                                        |
| power-cycle                     | MaterialCommunityIcons | togglepower                                  |
| power-off                       | MaterialCommunityIcons | poweroff                                     |
| power-on                        | MaterialCommunityIcons | poweron                                      |
| power-plug                      | MaterialCommunityIcons | powerplug.fill                               |
| power-plug-outline              | MaterialCommunityIcons | powerplug                                    |
| power-sleep                     | MaterialCommunityIcons | powersleep                                   |
| power-socket-us                 | MaterialCommunityIcons | poweroutlet.type.b                           |
| printer                         | MaterialCommunityIcons | printer.fill                                 |
| printer-outline                 | MaterialCommunityIcons | printer                                      |
| progress-pencil                 | MaterialCommunityIcons | pencil.line                                  |
| puzzle                          | MaterialCommunityIcons | puzzlepiece.fill                             |
| puzzle-outline                  | MaterialCommunityIcons | puzzlepiece                                  |
| qrcode                          | MaterialCommunityIcons | qrcode                                       |
| record-circle                   | MaterialCommunityIcons | record.circle.fill                           |
| record-circle-outline           | MaterialCommunityIcons | record.circle                                |
| reorder-horizontal              | MaterialCommunityIcons | line.3.horizontal                            |
| repeat                          | MaterialCommunityIcons | repeat                                       |
| repeat-once                     | MaterialCommunityIcons | repeat.1                                     |
| restart                         | MaterialCommunityIcons | restart                                      |
| restore-from-trash              | MaterialIcons          | arrow.up.trash.fill                          |
| rewind                          | MaterialCommunityIcons | backward.fill                                |
| rewind-outline                  | MaterialCommunityIcons | backward                                     |
| router                          | MaterialIcons          | wifi.router.fill                             |
| ruler                           | MaterialCommunityIcons | ruler.fill                                   |
| scanner                         | MaterialCommunityIcons | scanner                                      |
| screwdriver                     | MaterialCommunityIcons | screwdriver                                  |
| script                          | MaterialCommunityIcons | scroll.fill                                  |
| script-outline                  | MaterialCommunityIcons | scroll                                       |
| sd                              | MaterialCommunityIcons | sdcard.fill                                  |
| send                            | MaterialCommunityIcons | paperplane.fill                              |
| send-circle                     | MaterialCommunityIcons | paperplane.circle.fill                       |
| send-circle-outline             | MaterialCommunityIcons | paperplane.circle                            |
| send-outline                    | MaterialCommunityIcons | paperplane                                   |
| server                          | MaterialCommunityIcons | server.rack                                  |
| shield                          | MaterialCommunityIcons | shield.fill                                  |
| shield-check                    | MaterialCommunityIcons | checkmark.shield.fill                        |
| shield-check-outline            | MaterialCommunityIcons | checkmark.shield                             |
| shield-lock                     | MaterialCommunityIcons | lock.shield.fill                             |
| shield-lock-outline             | MaterialCommunityIcons | lock.shield                                  |
| shield-outline                  | MaterialCommunityIcons | shield                                       |
| shield-remove                   | MaterialCommunityIcons | xmark.shield.fill                            |
| shield-remove-outline           | MaterialCommunityIcons | xmark.shield                                 |
| shopping                        | MaterialCommunityIcons | bag.fill                                     |
| shopping-outline                | MaterialCommunityIcons | bag                                          |
| shuffle                         | MaterialCommunityIcons | shuffle                                      |
| signal-cellular-3               | MaterialCommunityIcons | cellularbars                                 |
| signature-freehand              | MaterialCommunityIcons | signature                                    |
| silverware-fork-knife           | MaterialCommunityIcons | fork.knife                                   |
| skateboard                      | MaterialCommunityIcons | skateboard                                   |
| ski                             | MaterialCommunityIcons | skis                                         |
| skip-backward                   | MaterialCommunityIcons | backward.end.fill                            |
| skip-backward-outline           | MaterialCommunityIcons | backward.end                                 |
| skip-forward                    | MaterialCommunityIcons | forward.end.fill                             |
| skip-forward-outline            | MaterialCommunityIcons | forward.end                                  |
| sleep                           | MaterialCommunityIcons | zzz                                          |
| soccer                          | MaterialCommunityIcons | soccerball                                   |
| soccer-field                    | MaterialCommunityIcons | sportscourt                                  |
| sony-playstation                | MaterialCommunityIcons | playstation.logo                             |
| spirit-level                    | MaterialCommunityIcons | level                                        |
| square                          | MaterialCommunityIcons | square.fill                                  |
| square-outline                  | MaterialCommunityIcons | square                                       |
| square-root                     | MaterialCommunityIcons | x.squareroot                                 |
| star                            | MaterialCommunityIcons | star.fill                                    |
| star-box-multiple               | MaterialCommunityIcons | star.square.on.square.fill                   |
| star-box-multiple-outline       | MaterialCommunityIcons | star.square.on.square                        |
| star-four-points                | MaterialCommunityIcons | sparkle                                      |
| star-outline                    | MaterialCommunityIcons | star                                         |
| step-backward                   | MaterialCommunityIcons | backward.frame.fill                          |
| step-forward                    | MaterialCommunityIcons | forward.frame.fill                           |
| stop                            | MaterialCommunityIcons | stop.fill                                    |
| stop-circle                     | MaterialCommunityIcons | stop.circle.fill                             |
| stop-circle-outline             | MaterialCommunityIcons | stop.circle                                  |
| storefront                      | MaterialCommunityIcons | storefront.fill                              |
| storefront-outline              | MaterialCommunityIcons | storefront                                   |
| sun-thermometer                 | MaterialCommunityIcons | thermometer.sun.fill                         |
| sun-thermometer-outline         | MaterialCommunityIcons | thermometer.sun                              |
| surfing                         | MaterialCommunityIcons | surfboard                                    |
| tag                             | MaterialCommunityIcons | tag.fill                                     |
| tag-outline                     | MaterialCommunityIcons | tag                                          |
| target                          | MaterialCommunityIcons | target                                       |
| tennis                          | MaterialCommunityIcons | tennis.racket                                |
| tennis-ball                     | MaterialCommunityIcons | tennisball.fill                              |
| ticket-confirmation             | MaterialCommunityIcons | ticket.fill                                  |
| ticket-confirmation-outline     | MaterialCommunityIcons | ticket                                       |
| timer                           | MaterialCommunityIcons | stopwatch.fill                               |
| timer-outline                   | MaterialCommunityIcons | stopwatch                                    |
| trash-can                       | MaterialCommunityIcons | trash.fill                                   |
| trash-can-outline               | MaterialCommunityIcons | trash                                        |
| tray                            | MaterialCommunityIcons | tray                                         |
| tray-arrow-down                 | MaterialCommunityIcons | square.and.arrow.down                        |
| tray-arrow-up                   | MaterialCommunityIcons | square.and.arrow.up                          |
| trophy                          | MaterialCommunityIcons | trophy.fill                                  |
| trophy-outline                  | MaterialCommunityIcons | trophy                                       |
| umbrella                        | MaterialCommunityIcons | umbrella.fill                                |
| umbrella-outline                | MaterialCommunityIcons | umbrella                                     |
| unfold-more-horizontal          | MaterialCommunityIcons | chevron.up.chevron.down                      |
| vector-link                     | MaterialCommunityIcons | personalhotspot                              |
| video                           | MaterialCommunityIcons | video.fill                                   |
| video-outline                   | MaterialCommunityIcons | video                                        |
| volleyball                      | MaterialCommunityIcons | volleyball.fill                              |
| volume-high                     | MaterialCommunityIcons | speaker.wave.3.fill                          |
| volume-low                      | MaterialCommunityIcons | speaker.fill                                 |
| volume-medium                   | MaterialCommunityIcons | speaker.wave.1.fill                          |
| volume-minus                    | MaterialCommunityIcons | speaker.minus.fill                           |
| volume-plus                     | MaterialCommunityIcons | speaker.plus.fill                            |
| volume-variant-off              | MaterialCommunityIcons | speaker.slash.fill                           |
| water                           | MaterialCommunityIcons | drop.fill                                    |
| water-circle                    | MaterialCommunityIcons | drop.circle.fill                             |
| water-outline                   | MaterialCommunityIcons | drop                                         |
| water-pump                      | MaterialCommunityIcons | spigot.fill                                  |
| weather-lightning               | MaterialCommunityIcons | cloud.bolt                                   |
| weather-night                   | MaterialCommunityIcons | moon.stars                                   |
| weather-rainy                   | MaterialCommunityIcons | cloud.rain                                   |
| weather-sunny                   | MaterialCommunityIcons | sun.min                                      |
| weather-sunny-alert             | MaterialCommunityIcons | sun.max.trianglebadge.exclamationmark        |
| weather-tornado                 | MaterialCommunityIcons | tornado                                      |
| web                             | MaterialCommunityIcons | globe                                        |
| webcam                          | MaterialCommunityIcons | web.camera.fill                              |
| white-balance-sunny             | MaterialCommunityIcons | sun.max.fill                                 |
| wifi                            | MaterialCommunityIcons | wifi                                         |
| wifi-alert                      | MaterialCommunityIcons | wifi.exclamationmark                         |
| wifi-off                        | MaterialCommunityIcons | wifi.slash                                   |
| wrench                          | MaterialCommunityIcons | wrench.adjustable.fill                       |
| wrench-outline                  | MaterialCommunityIcons | wrench.adjustable                            |
| youtube-tv                      | MaterialCommunityIcons | play.tv.fill                                 |
