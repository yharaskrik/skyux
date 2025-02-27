# Changelog

## [9.6.0](https://github.com/blackbaud/skyux/compare/9.5.1...9.6.0) (2023-10-10)


### Features

* **components/core:** update content info provider to support element IDs, create screen reader label directive ([#1783](https://github.com/blackbaud/skyux/issues/1783)) ([e7c3aaf](https://github.com/blackbaud/skyux/commit/e7c3aafe02eb0414ed72b3c23782214a3d547914))
* **components/lookup:** lookup show more modal native picker configurations include a `selectionDescriptor` which passes context to aria labels and the modal title ([#1797](https://github.com/blackbaud/skyux/issues/1797)) ([e084886](https://github.com/blackbaud/skyux/commit/e0848860591259cf71f838b2a077263f3cc0326d))


### Bug Fixes

* **components/core:** prevent resize observer loop error ([#1790](https://github.com/blackbaud/skyux/issues/1790)) ([#1794](https://github.com/blackbaud/skyux/issues/1794)) ([c30e707](https://github.com/blackbaud/skyux/commit/c30e707a96e42fea0398a19ef39dbe3d8b33e524))
* **components/forms:** toggle switch buttons will no point to the visible label via `aria-labelledby` when the `ariaLabel` input is given ([#1802](https://github.com/blackbaud/skyux/issues/1802)) ([9fab02d](https://github.com/blackbaud/skyux/commit/9fab02d828b3f9ea5f340ac9fddf388b4bf4b598))
* **components/layout:** fix action button responsive behavior in modals ([#1798](https://github.com/blackbaud/skyux/issues/1798)) ([b4b4df0](https://github.com/blackbaud/skyux/commit/b4b4df0b0ed954ea3db724b01e913209be7de98b))
* **components/lookup:** autocomplete position in modal with omnibar ([#1799](https://github.com/blackbaud/skyux/issues/1799)) ([#1801](https://github.com/blackbaud/skyux/issues/1801)) ([8d03883](https://github.com/blackbaud/skyux/commit/8d038836eb1b659a4ecc4e30d24ab2e0a8946b5c))

## [8.10.6](https://github.com/blackbaud/skyux/compare/8.10.5...8.10.6) (2023-10-10)


### Bug Fixes

* **components/core:** prevent resize observer loop error ([#1790](https://github.com/blackbaud/skyux/issues/1790)) ([143431f](https://github.com/blackbaud/skyux/commit/143431f382046ee7d6f258fef741e2f62242248f))
* **components/lookup:** autocomplete position in modal with omnibar ([#1799](https://github.com/blackbaud/skyux/issues/1799)) ([13d4919](https://github.com/blackbaud/skyux/commit/13d4919fa24c9a8dade82226a3914dcb93226137))

## [9.5.1](https://github.com/blackbaud/skyux/compare/9.5.0...9.5.1) (2023-10-09)


### Bug Fixes

* **components/forms:** remove internal flag from character counter harness ([#1791](https://github.com/blackbaud/skyux/issues/1791)) ([730d0ef](https://github.com/blackbaud/skyux/commit/730d0ef9dbd48a4149bb05c834a7d27d280f7ae6))

## [9.5.0](https://github.com/blackbaud/skyux/compare/9.4.1...9.5.0) (2023-10-09)


### Features

* add character counter, input box, and status indicator harnesses ([#1784](https://github.com/blackbaud/skyux/issues/1784)) ([6a55f2d](https://github.com/blackbaud/skyux/commit/6a55f2df05f691d96ff392dc311f904c89f11319))
* **components/data-manager:** data managers include a listDescriptor which passes context to standard items aria labels ([#1775](https://github.com/blackbaud/skyux/issues/1775)) ([fcf1c2f](https://github.com/blackbaud/skyux/commit/fcf1c2f7df989a5b65e321b96b60b26efd06cf8a))
* **components/datetime:** datepicker calendar button aria label is now context specific ([#1788](https://github.com/blackbaud/skyux/issues/1788)) ([2da13fc](https://github.com/blackbaud/skyux/commit/2da13fc946e63df764a14381a78f9e056952de25))
* **components/datetime:** timepicker button aria label is now context specific ([#1789](https://github.com/blackbaud/skyux/issues/1789)) ([9938902](https://github.com/blackbaud/skyux/commit/9938902d76150694d0378fede9b3791a6673d43b))
* **components/lookup:** add selection modals include a `selectionDescriptor` which passes context to aria labels and the modal title ([#1787](https://github.com/blackbaud/skyux/issues/1787)) ([e5de803](https://github.com/blackbaud/skyux/commit/e5de803996fea1095b8a318bf912fb7fb75e7486))

## [9.4.1](https://github.com/blackbaud/skyux/compare/9.4.0...9.4.1) (2023-10-04)


### Bug Fixes

* **components/toast:** `SkyToastService` and `SkyToastLegacyService` add toast instances to the same pool ([#1779](https://github.com/blackbaud/skyux/issues/1779)) ([5372a83](https://github.com/blackbaud/skyux/commit/5372a8306fa4a586942b31cba8c7e0b84d112162))

## [9.4.0](https://github.com/blackbaud/skyux/compare/9.3.1...9.4.0) (2023-10-02)


### Features

* **components/layout:** toolbars include a listDescriptor which passes context to standard items aria labels ([#1747](https://github.com/blackbaud/skyux/issues/1747)) ([3d4f941](https://github.com/blackbaud/skyux/commit/3d4f9414fd87e6f48e7f06c4eb7f11266ad124ba))
* **components/theme:** update to latest @skyux/icons ([#1755](https://github.com/blackbaud/skyux/issues/1755)) ([6532fa8](https://github.com/blackbaud/skyux/commit/6532fa8e8f336f75a6435693b82681a470781f4a))


### Bug Fixes

* **components/colorpicker:** hsla formula should not divide by zero ([#1768](https://github.com/blackbaud/skyux/issues/1768)) ([ae6dc1e](https://github.com/blackbaud/skyux/commit/ae6dc1ed0647d5d552a2bc0c4a14a4b9e860a096))
* **components/core:** numeric pipe now handles undefined values ([#1765](https://github.com/blackbaud/skyux/issues/1765)) ([#1770](https://github.com/blackbaud/skyux/issues/1770)) ([9873961](https://github.com/blackbaud/skyux/commit/9873961a723d713b68d05936e998409062405b82))

## [8.10.5](https://github.com/blackbaud/skyux/compare/8.10.4...8.10.5) (2023-10-02)


### Bug Fixes

* **components/core:** numeric pipe now handles undefined values ([#1765](https://github.com/blackbaud/skyux/issues/1765)) ([fe977d4](https://github.com/blackbaud/skyux/commit/fe977d4d9efb8a7b89596f81f9dcc8817b14c0fc))

## [9.3.1](https://github.com/blackbaud/skyux/compare/9.3.0...9.3.1) (2023-09-28)


### Bug Fixes

* release 9.3.1 ([#1762](https://github.com/blackbaud/skyux/issues/1762)) ([466ddd0](https://github.com/blackbaud/skyux/commit/466ddd07229f51058eb50ac4aad604c7880ceb18))

## [9.3.0](https://github.com/blackbaud/skyux/compare/9.2.1...9.3.0) (2023-09-27)


### Features

* **components/angular-tree-component:** context menu aria labels are automatically node specific ([#1737](https://github.com/blackbaud/skyux/issues/1737)) ([1004462](https://github.com/blackbaud/skyux/commit/1004462719364ece103920f8a8f9f4e94254d490))
* **components/config:** add local dev config ([#1758](https://github.com/blackbaud/skyux/issues/1758)) ([9a14fd8](https://github.com/blackbaud/skyux/commit/9a14fd8cb3b3a00c627977d55f54f4eef671ab7a))
* **components/datetime:** date range picker input aria labels are now context specific ([#1752](https://github.com/blackbaud/skyux/issues/1752)) ([4dc7e2a](https://github.com/blackbaud/skyux/commit/4dc7e2af1400e9443704d04e397931ee8b79de4f))
* **components/lists:** filter button aria label property can be specified ([#1745](https://github.com/blackbaud/skyux/issues/1745)) ([788580e](https://github.com/blackbaud/skyux/commit/788580e6e6c78da2d546591b1be576902098d0e9))
* **components/lists:** sort button aria label property can be specified ([#1746](https://github.com/blackbaud/skyux/issues/1746)) ([089bc11](https://github.com/blackbaud/skyux/commit/089bc114b5ecc704ac14e1f4c2db82a928b2d324))


### Bug Fixes

* **components/ag-grid:** update existing ag grid context menus with aria labels, add new ones ([#1735](https://github.com/blackbaud/skyux/issues/1735)) ([745d8ab](https://github.com/blackbaud/skyux/commit/745d8ab353430b49ffd95d640207340129a6834c))
* ensure all HTML buttons have a type ([#1748](https://github.com/blackbaud/skyux/issues/1748)) ([1a58094](https://github.com/blackbaud/skyux/commit/1a580943ddd113805081b75e7f45306bc2010e58))

### Note

* The release failed part way through the publish process, some packages were not published. Do not use this version.

## [8.10.4](https://github.com/blackbaud/skyux/compare/8.10.3...8.10.4) (2023-09-26)


### Bug Fixes

* **components/phone-field:** new Canadian area codes properly validate ([#1754](https://github.com/blackbaud/skyux/issues/1754)) ([170af61](https://github.com/blackbaud/skyux/commit/170af61d841b9a56d5197b841a9be9f384303cdf))

## [9.2.1](https://github.com/blackbaud/skyux/compare/9.2.0...9.2.1) (2023-09-20)


### Bug Fixes

* release 9.2.1 ([#1738](https://github.com/blackbaud/skyux/issues/1738)) ([1b1e38d](https://github.com/blackbaud/skyux/commit/1b1e38d679eae3dc746d9295c0f31ebc3449150e))

## [9.2.0](https://github.com/blackbaud/skyux/compare/9.1.1...9.2.0) (2023-09-20)


### Features

* **components/core:** add `VERSION` to public exports API; update to `@skyux/icons@6.3.0` ([#1734](https://github.com/blackbaud/skyux/issues/1734)) ([dda1151](https://github.com/blackbaud/skyux/commit/dda11519e70495221d53c0416a86a477d4485604))
* **components/indicators:** icon visual test ([#1168](https://github.com/blackbaud/skyux/issues/1168)) ([#1170](https://github.com/blackbaud/skyux/issues/1170)) ([#1736](https://github.com/blackbaud/skyux/issues/1736)) ([2170ea4](https://github.com/blackbaud/skyux/commit/2170ea4e8d5aa16badf377b043316a67a52d2b0d))
* refactor code examples to use standalone components ([#1728](https://github.com/blackbaud/skyux/issues/1728)) ([65012ce](https://github.com/blackbaud/skyux/commit/65012ce47abea005f233a9df6612586b29d96e73))


### Bug Fixes

* **components/lookup:** reset focus for search result controls when new text entered in input ([#1727](https://github.com/blackbaud/skyux/issues/1727)) ([d2a56d6](https://github.com/blackbaud/skyux/commit/d2a56d672da1b10c26825ffbbed6e6d7b3fd7710))

## [9.2.0](https://github.com/blackbaud/skyux/compare/9.1.1...9.2.0) (2023-09-20)

* The release failed part way through the publish process, some packages were not published. Do not use this version.

## [9.1.1](https://github.com/blackbaud/skyux/compare/9.1.0...9.1.1) (2023-09-15)


### Bug Fixes

* **components/popovers:** update background style for dropdown items ([#1725](https://github.com/blackbaud/skyux/issues/1725)) ([530274e](https://github.com/blackbaud/skyux/commit/530274e0b024fd2693c538dd5a454ad73eb2282d))

## [9.1.0](https://github.com/blackbaud/skyux/compare/9.0.0...9.1.0) (2023-09-14)


### Features

* add support for `@angular/core@16.2.5` ([#1721](https://github.com/blackbaud/skyux/issues/1721)) ([bae7d20](https://github.com/blackbaud/skyux/commit/bae7d20aac018f73176de7b4186e582a6aef46b2))
* **components/http:** add `context` to `skyAuthHttpOptions` and `skyAuthHttpJsonOptions` ([#1723](https://github.com/blackbaud/skyux/issues/1723)) ([cab5fc8](https://github.com/blackbaud/skyux/commit/cab5fc84c42fb57bdc1f022e8df874cc1244ea60))
* **components/theme:** update SKY UX icons to latest versions ([#1720](https://github.com/blackbaud/skyux/issues/1720)) ([3645191](https://github.com/blackbaud/skyux/commit/36451912153274db1e995d36a080fc520aeb2429))

## [9.0.0](https://github.com/blackbaud/skyux/compare/9.0.0-beta.1...9.0.0) (2023-09-13)


### ⚠ BREAKING CHANGES

* **support Angular 16** ([#1525](https://github.com/blackbaud/skyux/issues/1525)) [Angular Update Guide](https://angular.io/guide/update-to-version-16)
* **refactor services provided in "any" to provided in "root"** ([#1641](https://github.com/blackbaud/skyux/issues/1641)) [Angular 15 deprecated services provided in 'any'](https://v15.angular.io/guide/deprecations#angularcore). We refactored all services that were provided in 'any' to provided in 'root' and replaced existing instances of `SkyFlyoutService` and `SkyModalService` with `SkyFlyoutLegacyService` and `SkyModalLegacyService` to avoid introducing breaking changes for our consumers. The `SkyFlyoutLegacyService` and `SkyModalLegacyService` are provided in 'any' but are deprecated and will be removed in a future major version of SKY UX. We recommend you replace the legacy services with `SkyFlyoutService` and `SkyModalService` as soon as possible, but use them to open [standalone components](https://angular.io/guide/standalone-components) instead. The [flyout](https://developer.blackbaud.com/skyux/components/flyout?docs-active-tab=code-examples) and [modal](https://developer.blackbaud.com/skyux/components/modal?docs-active-tab=code-examples) code examples on our documentation site have been updated to use standalone components for your reference.
* **components/ag-grid:** support AG Grid 29 ([#1549](https://github.com/blackbaud/skyux/issues/1549)) Check out AG Grid [29](https://blog.ag-grid.com/whats-new-in-ag-grid-29/), [29.1](https://blog.ag-grid.com/whats-new-in-ag-grid-29-1/), [29.2](https://blog.ag-grid.com/whats-new-in-ag-grid-29-2/), and [29.3](https://blog.ag-grid.com/whats-new-in-ag-grid-29-3/) for more information.
* **components/lookup:** use `click` events for selecting items in an autocomplete or lookup dropdown and only close when clicking outside the dropdown ([#1654](https://github.com/blackbaud/skyux/issues/1654)) Consumers who were firing direct `mousedown` events to the autocomplete or lookup dropdown will need to update their code to fire `click` events instead.
* **components/phone-field:** phone numbers that are valid for a country with the same dial code as the selected country but not the selected country are now properly validated ([#1680](https://github.com/blackbaud/skyux/issues/1680)) Previously, phone numbers may have passed validation incorrectly if they were valid in a country with the same dial code as the selected country but not the selected country. Consumers should be aware of this to handle any user reports of changed behavior.
* **components/popovers:** dropdown menu buttons only specify a default aria-label when configured to be a context menu ([#1712](https://github.com/blackbaud/skyux/issues/1712)) The previous default of `Context menu` was applied to all dropdowns regardless of if the dropdown was a context menu. This change could lead to failing accessibility tests if dropdown menus do not include visible text on the dropdown button. These dropdowns should be updated to provide a contextual accessibility label to the `label` input (i.e. 'Administrative actions for Robert Hernandez').


### Features

* support Angular 16 ([#1525](https://github.com/blackbaud/skyux/issues/1525)) ([65c7caf](https://github.com/blackbaud/skyux/commit/65c7caf6f747265cf2d9b34b2387298682a485b5))
* update `autonumeric`, `dompurify`, `tslib`, and `validator` dependencies ([#1620](https://github.com/blackbaud/skyux/issues/1620)) ([f7e329a](https://github.com/blackbaud/skyux/commit/f7e329a3610917e6906989b4b2a6eaeb07e9410b))
* update `intl-tel-input` and `google-libphonenumber` dependencies ([#1619](https://github.com/blackbaud/skyux/issues/1619)) ([488b799](https://github.com/blackbaud/skyux/commit/488b7994fc2eb7246b531284fee9a396d8c7ea39))
* **components/ag-grid:** `SkyCellType.Date` uses the same date formatting logic as the `SkyDatePipe` ([#1611](https://github.com/blackbaud/skyux/issues/1611)) ([d9c418a](https://github.com/blackbaud/skyux/commit/d9c418a216245fb64ca61399219df5e1133a78ae))
* **components/ag-grid:** provide schematic for AG Grid 29 changes ([#1593](https://github.com/blackbaud/skyux/issues/1593)) ([27ac5eb](https://github.com/blackbaud/skyux/commit/27ac5eb18a3cbac30d678d2f122631429fe1a019))
* **components/ag-grid:** support AG Grid 29 ([#1549](https://github.com/blackbaud/skyux/issues/1549)) ([7e8dd3d](https://github.com/blackbaud/skyux/commit/7e8dd3d3d929178632e8dcfa4d004b7eb5d0fcc1))
* **components/datetime:** datepicker hardcoded `aria-label` is removed and the label should now be provided through a wrapping input box ([#1646](https://github.com/blackbaud/skyux/issues/1646)) ([81ac802](https://github.com/blackbaud/skyux/commit/81ac8027e432e1ee2c90e14ed4e80dc334cc02c8))
* **components/datetime:** timepicker hardcoded `aria-label` is removed and the label should now be provided through a wrapping input box ([#1644](https://github.com/blackbaud/skyux/issues/1644)) ([23a00c1](https://github.com/blackbaud/skyux/commit/23a00c17425ecb0495243e8733bd11050676df22))
* **components/forms:** remove bottom margin for input box ([#1564](https://github.com/blackbaud/skyux/issues/1564)) ([4a22a4a](https://github.com/blackbaud/skyux/commit/4a22a4a7bf8d94a0f57325d3cceaa7bc3155eb75))
* **components/forms:** remove source property from SkyCheckboxChange and SkyRadioChange ([#1532](https://github.com/blackbaud/skyux/issues/1532)) ([2bd66a5](https://github.com/blackbaud/skyux/commit/2bd66a53b0603ae4d65579dd7b068c2595222e1f))
* **components/lookup:** country field hardcoded `aria-label` is removed and the label should now be provided through a wrapping input box ([#1626](https://github.com/blackbaud/skyux/issues/1626)) ([6a5fbb7](https://github.com/blackbaud/skyux/commit/6a5fbb722dbc0571da941ab7e1f13e90fd5d9cfe))
* **components/modals:** make modals responsive containers ([#1682](https://github.com/blackbaud/skyux/issues/1682)) ([09ac208](https://github.com/blackbaud/skyux/commit/09ac2081aabc26af142a7478680e70388f50c48b))
* **components/packages:** add schematic to regenerate i18n resources modules for libraries ([#1677](https://github.com/blackbaud/skyux/issues/1677)) ([ff3bd36](https://github.com/blackbaud/skyux/commit/ff3bd36d7e399d9fb4c911be23fa2608225d65c3))
* **components/packages:** update ag-grid in ng update group ([#1562](https://github.com/blackbaud/skyux/issues/1562)) ([baa5bb9](https://github.com/blackbaud/skyux/commit/baa5bb98f1542cfd7b41fc7196d41ea89b658399))
* **components/pages:** provide schematic for updating `SkyPageComponent` ([#1701](https://github.com/blackbaud/skyux/issues/1701)) ([9907c02](https://github.com/blackbaud/skyux/commit/9907c0247ceb27c65fe3065ce914f32513e15d28))
* **components/phone-field:** phone field hardcoded `aria-label` is removed and the label should now be provided through a wrapping input box ([#1643](https://github.com/blackbaud/skyux/issues/1643)) ([7308d9c](https://github.com/blackbaud/skyux/commit/7308d9c645a7d229d2af325e7a12bbfd6c822805))
* **components/tabs:** make all tabs responsive containers ([#1642](https://github.com/blackbaud/skyux/issues/1642)) ([80e77ce](https://github.com/blackbaud/skyux/commit/80e77ced7abbd571f7d73de8737346a44e7b3e01))
* **components/tabs:** sectioned form styling improvements ([#1689](https://github.com/blackbaud/skyux/issues/1689)) ([8093473](https://github.com/blackbaud/skyux/commit/8093473bfcffc9599babd5ce5c5f93a3f94b166f))
* **sdk/eslint-config:** use typescript-eslint version of no-use-before-define ([#1601](https://github.com/blackbaud/skyux/issues/1601)) ([2d60a98](https://github.com/blackbaud/skyux/commit/2d60a98209bbd44feca7caf62c1dd89324fafb30))
* **sdk/testing:** update axe-core peer dependency ([#1690](https://github.com/blackbaud/skyux/issues/1690)) ([c0ac54a](https://github.com/blackbaud/skyux/commit/c0ac54a1be2be64baade226e5aa8cfabd4027f76))


### Bug Fixes

* refactor services provided in "any" to provided in "root" ([#1641](https://github.com/blackbaud/skyux/issues/1641)) ([0ce9cc6](https://github.com/blackbaud/skyux/commit/0ce9cc61d1bb8ed3330e470bddd8861a7645d6a8))
* replace '*' with named exports for the public API ([#1559](https://github.com/blackbaud/skyux/issues/1559)) ([ed3b604](https://github.com/blackbaud/skyux/commit/ed3b6041eebee0fc8498010f1f1d9d514d327731))
* **code-examples:** use standalone components when opened by modal and flyout services ([#1696](https://github.com/blackbaud/skyux/issues/1696)) ([fa572e6](https://github.com/blackbaud/skyux/commit/fa572e6e24a154a4e909a93b10cebff1758af17a))
* **components/ag-grid:** improve schematic for AG Grid 29 changes ([#1675](https://github.com/blackbaud/skyux/issues/1675)) ([16cd189](https://github.com/blackbaud/skyux/commit/16cd1894123dd083223370c7429e109c46bd3c7c))
* **components/ag-grid:** set environment injector when creating the header ([#1586](https://github.com/blackbaud/skyux/issues/1586)) ([c358e2e](https://github.com/blackbaud/skyux/commit/c358e2e08be1884678c64eae0a371d09161337f6))
* **components/angular-tree-component:** node expansion button uses the node name as its aria-label ([#1711](https://github.com/blackbaud/skyux/issues/1711)) ([fbe39bb](https://github.com/blackbaud/skyux/commit/fbe39bb358fe09a2dc1dccdd417430af1fbf3a3d))
* **components/angular-tree-component:** tree view code examples now use context specific accessibility labels and dropdown menu labels ([#1715](https://github.com/blackbaud/skyux/issues/1715)) ([5bef12e](https://github.com/blackbaud/skyux/commit/5bef12e23d02c9019269c4a32fd801798dc9c93e))
* **components/angular-tree-component:** update schematic to work in more cases ([#1708](https://github.com/blackbaud/skyux/issues/1708)) ([ee1e252](https://github.com/blackbaud/skyux/commit/ee1e252a0a6b5343cb6effe25fc8a2f72b7dfd01))
* **components/data-manager:** add providers to column picker modal ([#1685](https://github.com/blackbaud/skyux/issues/1685)) ([3dd7d36](https://github.com/blackbaud/skyux/commit/3dd7d36342adae13d87bd9c97145d62c0f48adac))
* **components/datetime:** remove vertical spacing and fix horizontal padding ([#1662](https://github.com/blackbaud/skyux/issues/1662)) ([3e99165](https://github.com/blackbaud/skyux/commit/3e9916595be6c5bb2920997c47aa11f27b0f1161))
* **components/forms:** easy mode input box inputs default to turning off browser autofill but respect consumer set values ([#1660](https://github.com/blackbaud/skyux/issues/1660)) ([ea951a4](https://github.com/blackbaud/skyux/commit/ea951a4d3328ad1d808c99fe1c490c6a445bc29a))
* **components/indicators:** fix content roles ([#1513](https://github.com/blackbaud/skyux/issues/1513)) ([feaa2de](https://github.com/blackbaud/skyux/commit/feaa2ded5bcbb3a51a38c4eee2478825ac585acc))
* **components/lists:** repeater item spacing in split view ([#1618](https://github.com/blackbaud/skyux/issues/1618)) ([49a912c](https://github.com/blackbaud/skyux/commit/49a912cc1662b27bc201e90ff8c9f3dc9906de62))
* **components/lookup:** use `click` events for selecting items in an autocomplete or lookup dropdown and only close when clicking outside the dropdown ([#1654](https://github.com/blackbaud/skyux/issues/1654)) ([083e6d3](https://github.com/blackbaud/skyux/commit/083e6d3a6d197038093d8f7c2ebf53229b66375e))
* **components/modals:** add support for standalone modal components ([#1563](https://github.com/blackbaud/skyux/issues/1563)) ([d695011](https://github.com/blackbaud/skyux/commit/d6950117edb66eea1a95fc766a4c93bee21de8d6))
* **components/modals:** use environment injector when creating a modal component ([#1591](https://github.com/blackbaud/skyux/issues/1591)) ([528946d](https://github.com/blackbaud/skyux/commit/528946d68ead0aa2088c7d7cd89f8cd770ad8fc5))
* **components/modals:** use optional injector for `SkyModalConfiguration` ([#1615](https://github.com/blackbaud/skyux/issues/1615)) ([ac86119](https://github.com/blackbaud/skyux/commit/ac86119697e039d02475400e4072cedaa92514c1))
* **components/packages:** replace '@circlon/angular-tree-component' import paths ([#1560](https://github.com/blackbaud/skyux/issues/1560)) ([2d0cfa0](https://github.com/blackbaud/skyux/commit/2d0cfa0ac16954b4060dd1964b8f09da98989458))
* **components/packages:** update schematic version numbers and add @skyux/popovers dependency ([#1555](https://github.com/blackbaud/skyux/issues/1555)) ([2d59800](https://github.com/blackbaud/skyux/commit/2d598005514657e7101b5e7b50ece10b11e47ef9))
* **components/pages:** `lastAccessed` property on the `SkyRecentLink` interface is more descriptive ([#1673](https://github.com/blackbaud/skyux/issues/1673)) ([5b0a47a](https://github.com/blackbaud/skyux/commit/5b0a47a948d97c82b3f871c0a39b9f2f3f5d5544))
* **components/pages:** update schematic to handle more cases ([#1709](https://github.com/blackbaud/skyux/issues/1709)) ([e868e08](https://github.com/blackbaud/skyux/commit/e868e08208b0f4e9a4ce58363d44f557a73e2fa2))
* **components/phone-field:** phone numbers that are valid for a country with the same dial code as the selected country but not the selected country are now properly validated ([#1680](https://github.com/blackbaud/skyux/issues/1680)) ([16ab192](https://github.com/blackbaud/skyux/commit/16ab192089464e7591e01d9d29e7b0eb3f7a7386))
* **components/popovers:** dropdown menu buttons only specify a default aria-label when configured to be a context menu ([#1712](https://github.com/blackbaud/skyux/issues/1712)) ([cfa4e18](https://github.com/blackbaud/skyux/commit/cfa4e188d7dc23d2081ae1cacd996304bae20092))
* **components/split-view:** update split view drawer and active item styling ([#1655](https://github.com/blackbaud/skyux/issues/1655)) ([b347dab](https://github.com/blackbaud/skyux/commit/b347dab60136345e97d970afb816012551fef793))
* **components/split-view:** use correct spacing class in examples ([#1613](https://github.com/blackbaud/skyux/issues/1613)) ([880332f](https://github.com/blackbaud/skyux/commit/880332f1be065780c1502d9fd207d902b4893302))
* **components/tabs:** fixed tab permalink back button behavior ([#1698](https://github.com/blackbaud/skyux/issues/1698)) ([39472f4](https://github.com/blackbaud/skyux/commit/39472f45ef2d9253341ee162170d73a25c88274f))
* **components/tabs:** use `replaceState()` for default tab permalink ([#1705](https://github.com/blackbaud/skyux/issues/1705)) ([3c1a0ab](https://github.com/blackbaud/skyux/commit/3c1a0ab4cadce05efe9b136849dc7ff01f5030fc))
* **components/tabs:** vertical tab modern theme spacing has been updated to match design specifications ([51089df](https://github.com/blackbaud/skyux/commit/51089dfd5932c272cef9e5c8bfeb37adcd2787f3))


### Deprecations

* **components/indicators:** deprecate icon `iconType` input ([#1659](https://github.com/blackbaud/skyux/issues/1659)) ([af1e3fa](https://github.com/blackbaud/skyux/commit/af1e3fa02edd4ff5fab6d3f3981ad93f453e05c0)) SKY UX icons will be used by default and Font Awesome icons will be used as a fallback.
* **components/lookup:** inputs to set autcomplete HTML attributes on the autocomplete, lookup, and country field components have been deprecated ([#1668](https://github.com/blackbaud/skyux/issues/1668)) ([464fe29](https://github.com/blackbaud/skyux/commit/464fe29986a493ba69efb61e26821e52186a8b49)) By default, browser autocomplete is turned off for these fields, and the ability to override that setting will be removed in a future version.

## [9.0.0-beta.1](https://github.com/blackbaud/skyux/compare/9.0.0-beta.0...9.0.0-beta.1) (2023-09-12)


### ⚠ BREAKING CHANGES

* **components/popovers:** dropdown menu buttons only specify a default aria-label when configured to be a context menu ([#1712](https://github.com/blackbaud/skyux/issues/1712))

### Bug Fixes

* **code-examples:** use standalone components when opened by modal and flyout services ([#1696](https://github.com/blackbaud/skyux/issues/1696)) ([fa572e6](https://github.com/blackbaud/skyux/commit/fa572e6e24a154a4e909a93b10cebff1758af17a))
* **components/angular-tree-component:** node expansion button uses the node name as its aria-label ([#1711](https://github.com/blackbaud/skyux/issues/1711)) ([fbe39bb](https://github.com/blackbaud/skyux/commit/fbe39bb358fe09a2dc1dccdd417430af1fbf3a3d))
* **components/angular-tree-component:** update schematic to work in more cases ([#1708](https://github.com/blackbaud/skyux/issues/1708)) ([ee1e252](https://github.com/blackbaud/skyux/commit/ee1e252a0a6b5343cb6effe25fc8a2f72b7dfd01))
* **components/pages:** update schematic to handle more cases ([#1709](https://github.com/blackbaud/skyux/issues/1709)) ([e868e08](https://github.com/blackbaud/skyux/commit/e868e08208b0f4e9a4ce58363d44f557a73e2fa2))
* **components/popovers:** dropdown menu buttons only specify a default aria-label when configured to be a context menu ([#1712](https://github.com/blackbaud/skyux/issues/1712)) ([cfa4e18](https://github.com/blackbaud/skyux/commit/cfa4e188d7dc23d2081ae1cacd996304bae20092))
* **components/tabs:** use `replaceState()` for default tab permalink ([#1705](https://github.com/blackbaud/skyux/issues/1705)) ([3c1a0ab](https://github.com/blackbaud/skyux/commit/3c1a0ab4cadce05efe9b136849dc7ff01f5030fc))

## [9.0.0-beta.0](https://github.com/blackbaud/skyux/compare/9.0.0-alpha.10...9.0.0-beta.0) (2023-09-11)


### ⚠ BREAKING CHANGES

* **components/phone-field:** phone numbers that are valid for a country with the same dial code as the selected country but not the selected country are now properly validated ([#1680](https://github.com/blackbaud/skyux/issues/1680))

### Features

* **components/modals:** make modals responsive containers ([#1682](https://github.com/blackbaud/skyux/issues/1682)) ([09ac208](https://github.com/blackbaud/skyux/commit/09ac2081aabc26af142a7478680e70388f50c48b))
* **components/pages:** provide schematic for updating `SkyPageComponent` ([#1701](https://github.com/blackbaud/skyux/issues/1701)) ([9907c02](https://github.com/blackbaud/skyux/commit/9907c0247ceb27c65fe3065ce914f32513e15d28))
* **components/tabs:** sectioned form styling improvements ([#1689](https://github.com/blackbaud/skyux/issues/1689)) ([8093473](https://github.com/blackbaud/skyux/commit/8093473bfcffc9599babd5ce5c5f93a3f94b166f))
* **sdk/testing:** update axe-core peer dependency ([#1690](https://github.com/blackbaud/skyux/issues/1690)) ([c0ac54a](https://github.com/blackbaud/skyux/commit/c0ac54a1be2be64baade226e5aa8cfabd4027f76))


### Bug Fixes

* **components/data-manager:** add providers to column picker modal ([#1685](https://github.com/blackbaud/skyux/issues/1685)) ([3dd7d36](https://github.com/blackbaud/skyux/commit/3dd7d36342adae13d87bd9c97145d62c0f48adac))
* **components/datetime:** remove vertical spacing and fix horizontal padding ([#1662](https://github.com/blackbaud/skyux/issues/1662)) ([3e99165](https://github.com/blackbaud/skyux/commit/3e9916595be6c5bb2920997c47aa11f27b0f1161))
* **components/lookup:** fix dropdown position in Safari on iOS ([#1665](https://github.com/blackbaud/skyux/issues/1665)) ([#1691](https://github.com/blackbaud/skyux/issues/1691)) ([ceacb40](https://github.com/blackbaud/skyux/commit/ceacb401adf3fb5d5863f9f9029ea088d2b0d984))
* **components/phone-field:** phone numbers that are valid for a country with the same dial code as the selected country but not the selected country are now properly validated ([#1680](https://github.com/blackbaud/skyux/issues/1680)) ([16ab192](https://github.com/blackbaud/skyux/commit/16ab192089464e7591e01d9d29e7b0eb3f7a7386))
* **components/tabs:** fixed tab permalink back button behavior ([#1698](https://github.com/blackbaud/skyux/issues/1698)) ([39472f4](https://github.com/blackbaud/skyux/commit/39472f45ef2d9253341ee162170d73a25c88274f))

## [8.10.3](https://github.com/blackbaud/skyux/compare/8.10.2...8.10.3) (2023-09-08)


### Bug Fixes

* **components/lookup:** fix dropdown position in Safari on iOS ([#1665](https://github.com/blackbaud/skyux/issues/1665)) ([88c7cb3](https://github.com/blackbaud/skyux/commit/88c7cb310bf2bdf8eba2fe53a961747dbe9319bd))

## [9.0.0-alpha.10](https://github.com/blackbaud/skyux/compare/9.0.0-alpha.9...9.0.0-alpha.10) (2023-09-07)


### ⚠ BREAKING CHANGES

* **components/lookup:** use `click` events for selecting items in an autocomplete or lookup dropdown and only close when clicking outside the dropdown ([#1654](https://github.com/blackbaud/skyux/issues/1654))

### Features

* **components/packages:** add schematic to regenerate i18n resources modules for libraries ([#1677](https://github.com/blackbaud/skyux/issues/1677)) ([ff3bd36](https://github.com/blackbaud/skyux/commit/ff3bd36d7e399d9fb4c911be23fa2608225d65c3))


### Bug Fixes

* **components/ag-grid:** improve schematic for AG Grid 29 changes ([#1675](https://github.com/blackbaud/skyux/issues/1675)) ([16cd189](https://github.com/blackbaud/skyux/commit/16cd1894123dd083223370c7429e109c46bd3c7c))
* **components/forms:** easy mode input box inputs default to turning off browser autofill but respect consumer set values ([#1660](https://github.com/blackbaud/skyux/issues/1660)) ([ea951a4](https://github.com/blackbaud/skyux/commit/ea951a4d3328ad1d808c99fe1c490c6a445bc29a))
* **components/lookup:** use `click` events for selecting items in an autocomplete or lookup dropdown and only close when clicking outside the dropdown ([#1654](https://github.com/blackbaud/skyux/issues/1654)) ([083e6d3](https://github.com/blackbaud/skyux/commit/083e6d3a6d197038093d8f7c2ebf53229b66375e))
* **components/pages:** `lastAccessed` property on the `SkyRecentLink` interface is more descriptive ([#1673](https://github.com/blackbaud/skyux/issues/1673)) ([5b0a47a](https://github.com/blackbaud/skyux/commit/5b0a47a948d97c82b3f871c0a39b9f2f3f5d5544))


### Deprecations

* **components/indicators:** deprecate icon `iconType` input ([#1659](https://github.com/blackbaud/skyux/issues/1659)) ([af1e3fa](https://github.com/blackbaud/skyux/commit/af1e3fa02edd4ff5fab6d3f3981ad93f453e05c0))
* **components/lookup:** inputs to set autcomplete HTML attributes on the autocomplete, lookup, and country field components have been deprecated ([#1668](https://github.com/blackbaud/skyux/issues/1668)) ([464fe29](https://github.com/blackbaud/skyux/commit/464fe29986a493ba69efb61e26821e52186a8b49))

## [8.10.2](https://github.com/blackbaud/skyux/compare/8.10.1...8.10.2) (2023-09-05)


### Bug Fixes

* **components/layout:** fix action button margins in responsive containers ([#1661](https://github.com/blackbaud/skyux/issues/1661)) ([c51f45c](https://github.com/blackbaud/skyux/commit/c51f45c34a5a25b14bef75026b601245694e0a50))

## [9.0.0-alpha.9](https://github.com/blackbaud/skyux/compare/9.0.0-alpha.8...9.0.0-alpha.9) (2023-08-31)


### ⚠ BREAKING CHANGES

* **components/datetime:** timepicker hardcoded `aria-label` is removed and the label should now be provided through a wrapping input box ([#1644](https://github.com/blackbaud/skyux/issues/1644))
* **components/datetime:** datepicker hardcoded `aria-label` is removed and the label should now be provided through a wrapping input box ([#1646](https://github.com/blackbaud/skyux/issues/1646))
* **components/phone-field:** phone field hardcoded `aria-label` is removed and the label should now be provided through a wrapping input box ([#1643](https://github.com/blackbaud/skyux/issues/1643))

### Features

* **components/datetime:** datepicker hardcoded `aria-label` is removed and the label should now be provided through a wrapping input box ([#1646](https://github.com/blackbaud/skyux/issues/1646)) ([81ac802](https://github.com/blackbaud/skyux/commit/81ac8027e432e1ee2c90e14ed4e80dc334cc02c8))
* **components/datetime:** timepicker hardcoded `aria-label` is removed and the label should now be provided through a wrapping input box ([#1644](https://github.com/blackbaud/skyux/issues/1644)) ([23a00c1](https://github.com/blackbaud/skyux/commit/23a00c17425ecb0495243e8733bd11050676df22))
* **components/phone-field:** phone field hardcoded `aria-label` is removed and the label should now be provided through a wrapping input box ([#1643](https://github.com/blackbaud/skyux/issues/1643)) ([7308d9c](https://github.com/blackbaud/skyux/commit/7308d9c645a7d229d2af325e7a12bbfd6c822805))
* **components/tabs:** make all tabs responsive containers ([#1642](https://github.com/blackbaud/skyux/issues/1642)) ([80e77ce](https://github.com/blackbaud/skyux/commit/80e77ced7abbd571f7d73de8737346a44e7b3e01))


### Bug Fixes

* **components/forms:** update file attachment accessibility and visual labels on the input for linking to a file to be more descriptive ([#1625](https://github.com/blackbaud/skyux/issues/1625)) ([#1647](https://github.com/blackbaud/skyux/issues/1647)) ([c7d54ef](https://github.com/blackbaud/skyux/commit/c7d54ef25dced024d8ae59bab8e2f6e94252bd68))
* **components/forms:** updated single file attachment to use more descriptive aria labels ([#1630](https://github.com/blackbaud/skyux/issues/1630)) ([#1651](https://github.com/blackbaud/skyux/issues/1651)) ([928aaa8](https://github.com/blackbaud/skyux/commit/928aaa83b7dc866440642122a809a6325932df37))
* **components/layout:** fix action button margins in responsive containers ([#1661](https://github.com/blackbaud/skyux/issues/1661)) ([#1664](https://github.com/blackbaud/skyux/issues/1664)) ([ca19bc6](https://github.com/blackbaud/skyux/commit/ca19bc6e22b165033c44ad2d1652c74140001888))
* **components/lookup:** fix regression for lookup in modal ([#1656](https://github.com/blackbaud/skyux/issues/1656)) ([#1657](https://github.com/blackbaud/skyux/issues/1657)) ([301044e](https://github.com/blackbaud/skyux/commit/301044ee5fde820830b202ffa63f01eb33c392e5))
* **components/split-view:** update split view drawer and active item styling ([#1655](https://github.com/blackbaud/skyux/issues/1655)) ([b347dab](https://github.com/blackbaud/skyux/commit/b347dab60136345e97d970afb816012551fef793))
* refactor services provided in "any" to provided in "root" ([#1641](https://github.com/blackbaud/skyux/issues/1641)) ([0ce9cc6](https://github.com/blackbaud/skyux/commit/0ce9cc61d1bb8ed3330e470bddd8861a7645d6a8))

## [8.10.1](https://github.com/blackbaud/skyux/compare/8.10.0...8.10.1) (2023-08-29)


### Bug Fixes

* **components/forms:** update file attachment accessibility and visual labels on the input for linking to a file to be more descriptive ([#1625](https://github.com/blackbaud/skyux/issues/1625)) ([0dd6f46](https://github.com/blackbaud/skyux/commit/0dd6f46a75ead31a3f6b5dd81113e537955a11f8))
* **components/forms:** updated single file attachment to use more descriptive aria labels ([#1630](https://github.com/blackbaud/skyux/issues/1630)) ([0437c1e](https://github.com/blackbaud/skyux/commit/0437c1e4b372436d0b647fcb052769fdf3b2e581))
* **components/lookup:** fix regression for lookup in modal ([#1656](https://github.com/blackbaud/skyux/issues/1656)) ([d85409f](https://github.com/blackbaud/skyux/commit/d85409fddad23bf89b5fbc67f6fbcd8bf299152d))

## [9.0.0-alpha.8](https://github.com/blackbaud/skyux/compare/9.0.0-alpha.7...9.0.0-alpha.8) (2023-08-24)


### ⚠ BREAKING CHANGES

* **components/tabs:** vertical tab modern theme spacing has been updated to match design specifications
* **components/lookup:** country field hardcoded `aria-label` is removed and the label should now be provided through a wrapping input box ([#1626](https://github.com/blackbaud/skyux/issues/1626))

### Features

* **components/forms:** remove bottom margin for input box ([#1564](https://github.com/blackbaud/skyux/issues/1564)) ([4a22a4a](https://github.com/blackbaud/skyux/commit/4a22a4a7bf8d94a0f57325d3cceaa7bc3155eb75))
* **components/lookup:** country field hardcoded `aria-label` is removed and the label should now be provided through a wrapping input box ([#1626](https://github.com/blackbaud/skyux/issues/1626)) ([6a5fbb7](https://github.com/blackbaud/skyux/commit/6a5fbb722dbc0571da941ab7e1f13e90fd5d9cfe))


### Bug Fixes

* **components/lists:** repeater item spacing in split view ([#1618](https://github.com/blackbaud/skyux/issues/1618)) ([49a912c](https://github.com/blackbaud/skyux/commit/49a912cc1662b27bc201e90ff8c9f3dc9906de62))
* **components/tabs:** vertical tab modern theme spacing has been updated to match design specifications ([51089df](https://github.com/blackbaud/skyux/commit/51089dfd5932c272cef9e5c8bfeb37adcd2787f3))

## [8.10.0](https://github.com/blackbaud/skyux/compare/8.9.0...8.10.0) (2023-08-24)


### Features

* **components/lookup:** add ability to set `aria-label` and `aria-labelledby` attributes on the search component ([#1622](https://github.com/blackbaud/skyux/issues/1622)) ([5ddb569](https://github.com/blackbaud/skyux/commit/5ddb56991d43b16d6b5715e603141364fd64dd24))
* **sdk/eslint-config:** use typescript-eslint version of no-use-before-define ([#1601](https://github.com/blackbaud/skyux/issues/1601)) ([#1604](https://github.com/blackbaud/skyux/issues/1604)) ([666f002](https://github.com/blackbaud/skyux/commit/666f002aec964806a8bcdddbf40127b051c0fdc7))


### Bug Fixes

* **components/tabs:** remove responsive container behavior from tabs ([#1636](https://github.com/blackbaud/skyux/issues/1636)) ([92fbcdb](https://github.com/blackbaud/skyux/commit/92fbcdbdfaa0a65448903651ecea3e512877d36d))

## [9.0.0-alpha.7](https://github.com/blackbaud/skyux/compare/9.0.0-alpha.6...9.0.0-alpha.7) (2023-08-23)


### ⚠ BREAKING CHANGES

* **components/ag-grid:** `SkyCellType.Date` uses the same date formatting logic as the `SkyDatePipe` ([#1611](https://github.com/blackbaud/skyux/issues/1611))

### Features

* **components/ag-grid:** `SkyCellType.Date` uses the same date formatting logic as the `SkyDatePipe` ([#1611](https://github.com/blackbaud/skyux/issues/1611)) ([d9c418a](https://github.com/blackbaud/skyux/commit/d9c418a216245fb64ca61399219df5e1133a78ae))
* **components/lookup:** add ability to set `aria-label` and `aria-labelledby` attributes on the search component ([#1622](https://github.com/blackbaud/skyux/issues/1622)) ([#1624](https://github.com/blackbaud/skyux/issues/1624)) ([2ad8953](https://github.com/blackbaud/skyux/commit/2ad89538c57ba55d889111371381c59cd5d529f8))
* update `autonumeric`, `dompurify`, `tslib`, and `validator` dependencies ([#1620](https://github.com/blackbaud/skyux/issues/1620)) ([f7e329a](https://github.com/blackbaud/skyux/commit/f7e329a3610917e6906989b4b2a6eaeb07e9410b))
* update `intl-tel-input` and `google-libphonenumber` dependencies ([#1619](https://github.com/blackbaud/skyux/issues/1619)) ([488b799](https://github.com/blackbaud/skyux/commit/488b7994fc2eb7246b531284fee9a396d8c7ea39))


### Reverts

* move services from module providers to `providedIn: 'any'` ([#1621](https://github.com/blackbaud/skyux/issues/1621)) ([ad870aa](https://github.com/blackbaud/skyux/commit/ad870aaf5092cadecac33452ef2cdb1d2b4ccdd4))

## [9.0.0-alpha.6](https://github.com/blackbaud/skyux/compare/9.0.0-alpha.5...9.0.0-alpha.6) (2023-08-21)


### Features

* **components/ag-grid:** provide schematic for AG Grid 29 changes ([#1593](https://github.com/blackbaud/skyux/issues/1593)) ([27ac5eb](https://github.com/blackbaud/skyux/commit/27ac5eb18a3cbac30d678d2f122631429fe1a019))
* **sdk/testing:** support axe-core 4.7 ([#1494](https://github.com/blackbaud/skyux/issues/1494)) ([#1607](https://github.com/blackbaud/skyux/issues/1607)) ([0a82e99](https://github.com/blackbaud/skyux/commit/0a82e99f71d04af135359e63854516d9a5150c1a))


### Bug Fixes

* **components/modals:** use optional injector for `SkyModalConfiguration` ([#1615](https://github.com/blackbaud/skyux/issues/1615)) ([ac86119](https://github.com/blackbaud/skyux/commit/ac86119697e039d02475400e4072cedaa92514c1))
* **components/split-view:** use correct spacing class in examples ([#1613](https://github.com/blackbaud/skyux/issues/1613)) ([880332f](https://github.com/blackbaud/skyux/commit/880332f1be065780c1502d9fd207d902b4893302))

## [8.9.0](https://github.com/blackbaud/skyux/compare/8.8.1...8.9.0) (2023-08-18)


### Features

* **sdk/testing:** support axe-core 4.7 ([#1494](https://github.com/blackbaud/skyux/issues/1494)) ([1481956](https://github.com/blackbaud/skyux/commit/14819562eb7a781ae74081e309f256e2973dc6ba))

## [9.0.0-alpha.5](https://github.com/blackbaud/skyux/compare/9.0.0-alpha.4...9.0.0-alpha.5) (2023-08-17)


### ⚠ BREAKING CHANGES

* **components/toast:** The `SkyToastService` cannot be used in isolation; any component that injects `SkyToastService` must also import `SkyToastModule` into its module's providers.
* **components/flyout:** The `SkyFlyoutService` cannot be used in isolation; any component that injects `SkyFlyoutService` must also import `SkyFlyoutModule` into its module's providers.
* **components/core:** The `SkyNumericService` cannot be used in isolation; any component that injects `SkyNumericService` must also import `SkyNumericModule` into its module's providers.
* **components/indicators:** The `SkyWaitService` cannot be used in isolation; any component that injects `SkyWaitService` must also import `SkyWaitModule` into its module's providers.
* **components/lookup:** The `SkySelectionModalService` cannot be used in isolation; any component that injects `SkySelectionModalService` must also import `SkySelectionModalModule` into its module's providers.
* **components/ag-grid:** move `SkyAgGridService` to `SkyAgGridModule` providers ([#1576](https://github.com/blackbaud/skyux/issues/1576))
* **components/a11y:** The SkySkipLinkService cannot be used in isolation; any component that injects SkySkipLinkService must also import SkySkipLinkModule into its module's providers.

### Features

* **components/a11y:** move SkySkipLinkService to SkySkipLinkModule module providers ([#1573](https://github.com/blackbaud/skyux/issues/1573)) ([e970f12](https://github.com/blackbaud/skyux/commit/e970f129c4ed81308df7b14647463c5b66e95df2))
* **components/ag-grid:** move `SkyAgGridService` to `SkyAgGridModule` providers ([#1576](https://github.com/blackbaud/skyux/issues/1576)) ([a55f51d](https://github.com/blackbaud/skyux/commit/a55f51dd0712ff4ba66ab8f89b9537a8a0339409))
* **components/pages:** make page component a responsive container ([#1552](https://github.com/blackbaud/skyux/issues/1552)) ([#1590](https://github.com/blackbaud/skyux/issues/1590)) ([17d104b](https://github.com/blackbaud/skyux/commit/17d104b449f0bc6709008434d9d2bc654ed1897f))
* **sdk/eslint-config:** use typescript-eslint version of no-use-before-define ([#1601](https://github.com/blackbaud/skyux/issues/1601)) ([2d60a98](https://github.com/blackbaud/skyux/commit/2d60a98209bbd44feca7caf62c1dd89324fafb30))


### Bug Fixes

* **components/ag-grid:** call stop editing callback in popup editors ([#1548](https://github.com/blackbaud/skyux/issues/1548)) ([#1605](https://github.com/blackbaud/skyux/issues/1605)) ([9a3ab54](https://github.com/blackbaud/skyux/commit/9a3ab5471e19bbde469612d6b951b73a3b2b68b6))
* **components/ag-grid:** set environment injector when creating the header ([#1586](https://github.com/blackbaud/skyux/issues/1586)) ([c358e2e](https://github.com/blackbaud/skyux/commit/c358e2e08be1884678c64eae0a371d09161337f6))
* **components/core:** move `SkyNumericService` to `SkyNumericModule` providers ([#1584](https://github.com/blackbaud/skyux/issues/1584)) ([22b3902](https://github.com/blackbaud/skyux/commit/22b390278f9d89ce65265e92c2800d40e8dae56e))
* **components/flyout:** move `SkyFlyoutService` to `SkyFlyoutModule` providers ([#1583](https://github.com/blackbaud/skyux/issues/1583)) ([05f57db](https://github.com/blackbaud/skyux/commit/05f57db1d0c476ca553fadace4de0572e6a67d65))
* **components/indicators:** move `SkyWaitService` to `SkyWaitModule` providers ([#1585](https://github.com/blackbaud/skyux/issues/1585)) ([24147fa](https://github.com/blackbaud/skyux/commit/24147faffa04b50e113080b55138c4ad8039b06e))
* **components/lookup:** move `SkySelectionModalService` to `SkySelectionModalModule` providers ([#1589](https://github.com/blackbaud/skyux/issues/1589)) ([bd06749](https://github.com/blackbaud/skyux/commit/bd06749272162c7e59f27226614f09f8caa7d8ca))
* **components/modals:** use environment injector when creating a modal component ([#1591](https://github.com/blackbaud/skyux/issues/1591)) ([528946d](https://github.com/blackbaud/skyux/commit/528946d68ead0aa2088c7d7cd89f8cd770ad8fc5))
* **components/split-view:** clarify split-view footer uses and remove the workspace header from the public documentation ([#1577](https://github.com/blackbaud/skyux/issues/1577)) ([#1587](https://github.com/blackbaud/skyux/issues/1587)) ([2e2d164](https://github.com/blackbaud/skyux/commit/2e2d1643d44c233b2a703bb4efa7882dbcd53327))
* **components/toast:** move `SkyToastService` to `SkyToastModule` providers ([#1581](https://github.com/blackbaud/skyux/issues/1581)) ([2457559](https://github.com/blackbaud/skyux/commit/2457559e7fffe16a77b0e6230427d2fa88a27bd8))

## [8.8.1](https://github.com/blackbaud/skyux/compare/8.8.0...8.8.1) (2023-08-17)


### Bug Fixes

* **components/ag-grid:** update documentation generation ([#1600](https://github.com/blackbaud/skyux/issues/1600)) ([9ae53952](https://github.com/blackbaud/skyux/commit/9ae5395260e7bce3701ee57ed2230687e35b5d7f))
* **components/ag-grid:** call stop editing callback in popup editors ([#1548](https://github.com/blackbaud/skyux/issues/1548)) ([f1dbfb0](https://github.com/blackbaud/skyux/commit/f1dbfb0eda0789544e2d14de2787b91ecf81f86f))

## [8.8.0](https://github.com/blackbaud/skyux/compare/8.7.2...8.8.0) (2023-08-15)


### Features

* **components/pages:** make page component a responsive container ([#1552](https://github.com/blackbaud/skyux/issues/1552)) ([dc2584a](https://github.com/blackbaud/skyux/commit/dc2584a338d1ef964743192b58ea944460a70b90))


### Bug Fixes

* **components/split-view:** clarify split-view footer uses and remove the workspace header from the public documentation ([#1577](https://github.com/blackbaud/skyux/issues/1577)) ([1a94919](https://github.com/blackbaud/skyux/commit/1a94919e43b41860bdc305ef12e05d8a53d9be53))

## [9.0.0-alpha.4](https://github.com/blackbaud/skyux/compare/9.0.0-alpha.3...9.0.0-alpha.4) (2023-08-11)


### ⚠ BREAKING CHANGES

* **components/i18n:** move SkyLibResourcesService to SkyI18nModule providers ([#1568](https://github.com/blackbaud/skyux/issues/1568))

### Bug Fixes

* **components/i18n:** move SkyLibResourcesService to SkyI18nModule providers ([#1568](https://github.com/blackbaud/skyux/issues/1568)) ([43f92d0](https://github.com/blackbaud/skyux/commit/43f92d0bed32104fc05bf3dcd5fc2f30fe606dfc))

## [9.0.0-alpha.3](https://github.com/blackbaud/skyux/compare/9.0.0-alpha.2...9.0.0-alpha.3) (2023-08-10)


### Bug Fixes

* **components/modals:** add support for standalone modal components ([#1563](https://github.com/blackbaud/skyux/issues/1563)) ([d695011](https://github.com/blackbaud/skyux/commit/d6950117edb66eea1a95fc766a4c93bee21de8d6))

## [9.0.0-alpha.2](https://github.com/blackbaud/skyux/compare/9.0.0-alpha.1...9.0.0-alpha.2) (2023-08-09)


### ⚠ BREAKING CHANGES

* **components/ag-grid:** support AG Grid 29 ([#1549](https://github.com/blackbaud/skyux/issues/1549))

### Features

* **components/ag-grid:** support AG Grid 29 ([#1549](https://github.com/blackbaud/skyux/issues/1549)) ([7e8dd3d](https://github.com/blackbaud/skyux/commit/7e8dd3d3d929178632e8dcfa4d004b7eb5d0fcc1))
* **components/packages:** update ag-grid in ng update group ([#1562](https://github.com/blackbaud/skyux/issues/1562)) ([baa5bb9](https://github.com/blackbaud/skyux/commit/baa5bb98f1542cfd7b41fc7196d41ea89b658399))


### Bug Fixes

* **components/packages:** replace '@circlon/angular-tree-component' import paths ([#1560](https://github.com/blackbaud/skyux/issues/1560)) ([2d0cfa0](https://github.com/blackbaud/skyux/commit/2d0cfa0ac16954b4060dd1964b8f09da98989458))
* replace '*' with named exports for the public API ([#1559](https://github.com/blackbaud/skyux/issues/1559)) ([ed3b604](https://github.com/blackbaud/skyux/commit/ed3b6041eebee0fc8498010f1f1d9d514d327731))

## [8.7.2](https://github.com/blackbaud/skyux/compare/8.7.1...8.7.2) (2023-08-08)


### Bug Fixes

* **components/forms:** fix input/label association in input box code example ([#1550](https://github.com/blackbaud/skyux/issues/1550)) ([bf12fb1](https://github.com/blackbaud/skyux/commit/bf12fb1169d17ba24100764e26a61247c91e667a))

## [9.0.0-alpha.1](https://github.com/blackbaud/skyux/compare/9.0.0-alpha.0...9.0.0-alpha.1) (2023-08-08)


### ⚠ BREAKING CHANGES

* **components/forms:** remove source property from SkyCheckboxChange and SkyRadioChange ([#1532](https://github.com/blackbaud/skyux/issues/1532))

### Features

* **components/forms:** remove source property from SkyCheckboxChange and SkyRadioChange ([#1532](https://github.com/blackbaud/skyux/issues/1532)) ([2bd66a5](https://github.com/blackbaud/skyux/commit/2bd66a53b0603ae4d65579dd7b068c2595222e1f))


### Bug Fixes

* **components/forms:** fix input/label association in input box code example ([#1550](https://github.com/blackbaud/skyux/issues/1550)) ([#1554](https://github.com/blackbaud/skyux/issues/1554)) ([f090a5a](https://github.com/blackbaud/skyux/commit/f090a5a7b0f42dda7927becbe6178e2b5e951fe7))
* **components/lookup:** set input box height to match other field types ([#1491](https://github.com/blackbaud/skyux/issues/1491)) ([#1531](https://github.com/blackbaud/skyux/issues/1531)) ([8df51f7](https://github.com/blackbaud/skyux/commit/8df51f755db3a1e2a1a9f079a92cc574e9209c45))
* **components/packages:** update schematic version numbers and add @skyux/popovers dependency ([#1555](https://github.com/blackbaud/skyux/issues/1555)) ([2d59800](https://github.com/blackbaud/skyux/commit/2d598005514657e7101b5e7b50ece10b11e47ef9))

## [8.7.1](https://github.com/blackbaud/skyux/compare/8.7.0...8.7.1) (2023-08-03)


### Bug Fixes

* **components/indicators:** fix content roles ([#1513](https://github.com/blackbaud/skyux/issues/1513)) ([feaa2de](https://github.com/blackbaud/skyux/commit/feaa2ded5bcbb3a51a38c4eee2478825ac585acc))
* **components/lookup:** set input box height to match other field types ([#1491](https://github.com/blackbaud/skyux/issues/1491)) ([f33e5a7](https://github.com/blackbaud/skyux/commit/f33e5a7f607241fbe822df7a5985c4246b2c139e))

## [9.0.0-alpha.0](https://github.com/blackbaud/skyux/compare/v9.0.0-alpha.0...9.0.0-alpha.0) (2023-08-03)


### ⚠ BREAKING CHANGES

* support Angular 16 ([#1525](https://github.com/blackbaud/skyux/issues/1525))

### Features

* support Angular 16 ([#1525](https://github.com/blackbaud/skyux/issues/1525)) ([65c7caf](https://github.com/blackbaud/skyux/commit/65c7caf6f747265cf2d9b34b2387298682a485b5))


### Bug Fixes

* add support for `@skyux/dev-infra-private@9.0.0-alpha.0` ([#1537](https://github.com/blackbaud/skyux/issues/1537)) ([1e652ec](https://github.com/blackbaud/skyux/commit/1e652ec5bb53a98f7f7eab1253f0b35e63a94734))
* **components/indicators:** fix content roles ([#1513](https://github.com/blackbaud/skyux/issues/1513)) ([feaa2de](https://github.com/blackbaud/skyux/commit/feaa2ded5bcbb3a51a38c4eee2478825ac585acc))

## [9.0.0-alpha.0](https://github.com/blackbaud/skyux/compare/v9.0.0-alpha.0...9.0.0-alpha.0) (2023-08-03)


### Bug Fixes

* add support for `@skyux/dev-infra-private@9.0.0-alpha.0` ([#1537](https://github.com/blackbaud/skyux/issues/1537)) ([1e652ec](https://github.com/blackbaud/skyux/commit/1e652ec5bb53a98f7f7eab1253f0b35e63a94734))

## [8.7.0](https://github.com/blackbaud/skyux/compare/8.6.0...8.7.0) (2023-07-27)


### Features

* **components/forms:** input box easy mode ([#1504](https://github.com/blackbaud/skyux/issues/1504)) ([ec5e109](https://github.com/blackbaud/skyux/commit/ec5e109e416111825dd13174397534373776d20b))


### Bug Fixes

* **components/pages:** page documentation fixes ([#1518](https://github.com/blackbaud/skyux/issues/1518)) ([64b8df0](https://github.com/blackbaud/skyux/commit/64b8df010da78ffc05b29b3b9601d70979ee5afd))
* **components/text-editor:** add icon to colorpicker ([#1509](https://github.com/blackbaud/skyux/issues/1509)) ([d6ba9a5](https://github.com/blackbaud/skyux/commit/d6ba9a5d7d7d66420f25e2f80f6dde5cdd82927b))

## [8.6.0](https://github.com/blackbaud/skyux/compare/8.5.0...8.6.0) (2023-07-26)


### Features

* **components/pages:** add page header sub-components ([#1512](https://github.com/blackbaud/skyux/issues/1512)) ([d358924](https://github.com/blackbaud/skyux/commit/d35892440f372ee0766e36fec8c182b87b71581f))


### Bug Fixes

* **components/colorpicker:** icon color accessibility account for alpha ([#1511](https://github.com/blackbaud/skyux/issues/1511)) ([ea1bc52](https://github.com/blackbaud/skyux/commit/ea1bc526fae7fe401f19712cd6a1c882983da213))
* **components/packages:** update `ng add` schematic to work on Windows machines ([#1514](https://github.com/blackbaud/skyux/issues/1514)) ([e16f475](https://github.com/blackbaud/skyux/commit/e16f4750d61ff2a603ef61a8f4160c8a042aa0ea))

## [8.5.0](https://github.com/blackbaud/skyux/compare/8.4.0...8.5.0) (2023-07-26)


### Features

* **components/modals:** add errors input to modal footer component ([#1484](https://github.com/blackbaud/skyux/issues/1484)) ([7535ba8](https://github.com/blackbaud/skyux/commit/7535ba876b01b201cb463b6a471863aa991f7ab1))
* **components/theme:** add spacing option to themes ([#1501](https://github.com/blackbaud/skyux/issues/1501)) ([28e0eed](https://github.com/blackbaud/skyux/commit/28e0eed5aa27c3ef74386c498045cd5ba9f6ffc6))


### Bug Fixes

* **components/lookup:** close observables during cleanup ([#1498](https://github.com/blackbaud/skyux/issues/1498)) ([60dd1d0](https://github.com/blackbaud/skyux/commit/60dd1d0110b8e06396a1d452c76ff1f1b31550f5))

## [8.4.0](https://github.com/blackbaud/skyux/compare/8.3.1...8.4.0) (2023-07-17)


### Features

* **components/pages:** add blocks, list, and tabs page layouts ([#1377](https://github.com/blackbaud/skyux/issues/1377)) ([f34fa27](https://github.com/blackbaud/skyux/commit/f34fa2708a22b8aa64b414600b040442e6d41925))


### Bug Fixes

* **components/ag-grid:** update code example import path ([#1489](https://github.com/blackbaud/skyux/issues/1489)) ([237709b](https://github.com/blackbaud/skyux/commit/237709b2b663760bea043f8c91e1ae860df97f4b))
* **sdk/eslint-config:** enable tsconfig 'strictNullChecks' to support 'prefer-nullish-coalescing' ESLint rule ([#1495](https://github.com/blackbaud/skyux/issues/1495)) ([16bad5c](https://github.com/blackbaud/skyux/commit/16bad5c2f6d30291dffaa194fa525530330f6bcf))


### Deprecations

* **components/forms:** deprecate source property for checkbox and radio button change outputs ([#1485](https://github.com/blackbaud/skyux/issues/1485)) ([cc5a83b](https://github.com/blackbaud/skyux/commit/cc5a83b0a3a7679af2518b962d3e3fc507dac6d6))

## [8.3.1](https://github.com/blackbaud/skyux/compare/8.3.0...8.3.1) (2023-06-28)


### Bug Fixes

* **components/datetime:** disabled date range picker now use correct colors ([#1483](https://github.com/blackbaud/skyux/issues/1483)) ([d04b78c](https://github.com/blackbaud/skyux/commit/d04b78c93475716b40019d449db0c3a5e18491fd))
* **components/inline-form:** updated descriptions of `action` and `reason` properties to be more descriptive ([#1477](https://github.com/blackbaud/skyux/issues/1477)) ([5d8d2d5](https://github.com/blackbaud/skyux/commit/5d8d2d5a26a7878b01cb2d2b488e7b8548602728))
* **components/lookup:** country field docs clarify that the `autocompleteAttribute` is for the HTML attribute and no longer list an internal input ([#1482](https://github.com/blackbaud/skyux/issues/1482)) ([aa8a98d](https://github.com/blackbaud/skyux/commit/aa8a98d63f3ed882befb06743af00613d9f0dc67))
* **components/lookup:** lookup modals do not show an unintended wait when a search with more than ten items is applied after the modal has been scrolled to the bottom ([#1471](https://github.com/blackbaud/skyux/issues/1471)) ([031aaac](https://github.com/blackbaud/skyux/commit/031aaac1c45dc7e6ec4691a62acacfd9d0f27d51))

## [8.3.0](https://github.com/blackbaud/skyux/compare/8.2.7...8.3.0) (2023-06-23)


### Features

* **components/modals:** add `isDirty` directive to modals ([#1421](https://github.com/blackbaud/skyux/issues/1421)) ([#1454](https://github.com/blackbaud/skyux/issues/1454)) ([d5f4979](https://github.com/blackbaud/skyux/commit/d5f497908eb4090e61672a57b7afe92c5d581539))
* **components/popovers:** popover test harness and sample tests ([#1390](https://github.com/blackbaud/skyux/issues/1390)) ([628ee98](https://github.com/blackbaud/skyux/commit/628ee987c6ba738219cb83f0686d581dafbce508))


### Bug Fixes

* **components/ag-grid:** update uneditable cell background color ([#1473](https://github.com/blackbaud/skyux/issues/1473)) ([a40d559](https://github.com/blackbaud/skyux/commit/a40d559aab62c403d2e3a243b2e7bf9ebecb62af))
* **components/forms:** input box borders are now properly applied when using Firefox ([#1472](https://github.com/blackbaud/skyux/issues/1472)) ([96c8ee9](https://github.com/blackbaud/skyux/commit/96c8ee947e78d26d32e4f9bcaa98fe668cb73237))
* **components/inline-form:** code example custom button action ([#1469](https://github.com/blackbaud/skyux/issues/1469)) ([56f28af](https://github.com/blackbaud/skyux/commit/56f28afb803300d01afcaeaeb4c3385a7e45520f))

## [8.2.7](https://github.com/blackbaud/skyux/compare/8.2.6...8.2.7) (2023-06-20)


### Bug Fixes

* call out that disabled inputs should not be used when using a reactive form ([#1460](https://github.com/blackbaud/skyux/issues/1460)) ([02c34c1](https://github.com/blackbaud/skyux/commit/02c34c1133b1d36a3456ae45d00b6884c76b7aaf))
* **components/angular-tree-component:** add overflow hidden ([#1465](https://github.com/blackbaud/skyux/issues/1465)) ([4950ff7](https://github.com/blackbaud/skyux/commit/4950ff7d0b091288d9903925e4a425332a8a5230))
* **components/config:** ignore existing URL params when encoding config params ([#1462](https://github.com/blackbaud/skyux/issues/1462)) ([9c5b9b8](https://github.com/blackbaud/skyux/commit/9c5b9b8536d8b752f340ad6dc71a54f8a2aa550d))

## [8.2.6](https://github.com/blackbaud/skyux/compare/8.2.5...8.2.6) (2023-06-09)


### Bug Fixes

* **components/lookup:** pass `wrapperClass` to selection modal ([#996](https://github.com/blackbaud/skyux/issues/996)) ([#1449](https://github.com/blackbaud/skyux/issues/1449)) ([dc5b068](https://github.com/blackbaud/skyux/commit/dc5b068ea5cacd85ec1e2e87acb9383b81925c7e))
* **components/tabs:** update sectioned form code example to use a large modal ([#1451](https://github.com/blackbaud/skyux/issues/1451)) ([7c10ba9](https://github.com/blackbaud/skyux/commit/7c10ba94179c040ec456d521aabc641101f3644b))

## [8.2.5](https://github.com/blackbaud/skyux/compare/8.2.4...8.2.5) (2023-06-05)


### Bug Fixes

* **components/config:** support query params with multiple values ([#1434](https://github.com/blackbaud/skyux/issues/1434)) ([ca169b2](https://github.com/blackbaud/skyux/commit/ca169b248fbf2893d97a7a84e19224f1141904d5))
* **sdk/eslint-config:** downgrade 'package-json' package to support CommonJS ([#1432](https://github.com/blackbaud/skyux/issues/1432)) ([f52579d](https://github.com/blackbaud/skyux/commit/f52579d760235895ed4cc0b763eabbdf8c6e0728))

## [8.2.4](https://github.com/blackbaud/skyux/compare/8.2.3...8.2.4) (2023-06-02)


### Bug Fixes

* **sdk/eslint-config:** import 'package-json' ECMAScript module to support usage within CommonJS ([#1426](https://github.com/blackbaud/skyux/issues/1426)) ([6282093](https://github.com/blackbaud/skyux/commit/6282093b86fce0461a46066de44efbaa21f51e6b))

## [8.2.3](https://github.com/blackbaud/skyux/compare/8.2.2...8.2.3) (2023-06-01)


### Bug Fixes

* **sdk/eslint-config:** move parser options to overrides ([#1419](https://github.com/blackbaud/skyux/issues/1419)) ([30706c2](https://github.com/blackbaud/skyux/commit/30706c26d8d2264f606d06efcf2f32292683d066))

## [8.2.2](https://github.com/blackbaud/skyux/compare/8.2.1...8.2.2) (2023-05-30)


### Bug Fixes

* **components/forms:** use correct class in input box error documentation ([#1407](https://github.com/blackbaud/skyux/issues/1407)) ([973353c](https://github.com/blackbaud/skyux/commit/973353c8f55ba7815ba96f30c7b2f04f7e064caa))
* **sdk/eslint-config:** require `@angular-eslint/schematics` and relax peer dependency requirements ([#1409](https://github.com/blackbaud/skyux/issues/1409)) ([83219c1](https://github.com/blackbaud/skyux/commit/83219c1593c8e289ef21e575dc1c5d858800645c))

## [8.2.1](https://github.com/blackbaud/skyux/compare/8.2.0...8.2.1) (2023-05-25)


### Bug Fixes

* **components/forms:** autofill styles are applied correctly to input boxes ([#1349](https://github.com/blackbaud/skyux/issues/1349)) ([a0b5a28](https://github.com/blackbaud/skyux/commit/a0b5a284ba062568969b5e93e70fa39ed351c778))
* **components/forms:** disabled styles are properly applied to indeterminate checkboxes ([#1400](https://github.com/blackbaud/skyux/issues/1400)) ([f927cff](https://github.com/blackbaud/skyux/commit/f927cfffa313e076edebe67f2a85fef5f67c353c))
* **components/forms:** make help inline clickable in input box HTML select ([#1396](https://github.com/blackbaud/skyux/issues/1396)) ([deee18e](https://github.com/blackbaud/skyux/commit/deee18ed9e864f0f3e60b0c43605febef8aa3e73))

## [7.22.0](https://github.com/blackbaud/skyux/compare/7.21.4...7.22.0) (2023-05-16)


### Features

* **components/popovers:** dropdown test harness ([#1347](https://github.com/blackbaud/skyux/issues/1347)) ([3050f0d](https://github.com/blackbaud/skyux/commit/3050f0d9492e4aa456b0d22d857e43342181820d))

## [8.2.0](https://github.com/blackbaud/skyux/compare/8.1.0...8.2.0) (2023-05-22)


### Features

* add `@skyux-sdk/eslint-config` library ([#1387](https://github.com/blackbaud/skyux/issues/1387)) ([c7f0af0](https://github.com/blackbaud/skyux/commit/c7f0af0f5369207e03f017eedec979de54609757))
* **components/config:** exclude specified params from link URLs ([#1378](https://github.com/blackbaud/skyux/issues/1378)) ([4412df9](https://github.com/blackbaud/skyux/commit/4412df9c80b200f868070bb8ca6c15b1b8ad2d81))
* **components/forms:** update input box docs  and code example ([#1386](https://github.com/blackbaud/skyux/issues/1386)) ([ee65838](https://github.com/blackbaud/skyux/commit/ee6583894c2ccfe934cad3990fc40757407b299d))

## [8.1.0](https://github.com/blackbaud/skyux/compare/8.0.3...8.1.0) (2023-05-18)


### Features

* **components/popovers:** dropdown test harness ([#1347](https://github.com/blackbaud/skyux/issues/1347)) ([#1376](https://github.com/blackbaud/skyux/issues/1376)) ([091e90f](https://github.com/blackbaud/skyux/commit/091e90f2c7c6c2e038cf898295a0ce1a52c9620d))


### Bug Fixes

* **components/datetime:** date range pickers properly render when used in an inline filter item ([#1350](https://github.com/blackbaud/skyux/issues/1350)) ([cce7cee](https://github.com/blackbaud/skyux/commit/cce7cee7a879289a28678d3ecc83909d1eb1dd02))
* restore form group background color ([#1379](https://github.com/blackbaud/skyux/issues/1379)) ([8abda36](https://github.com/blackbaud/skyux/commit/8abda3611f6fd2f6ae2b85bb386faaad8376a700))

## [8.0.3](https://github.com/blackbaud/skyux/compare/8.0.2...8.0.3) (2023-05-15)


### Bug Fixes

* **components/forms:** revert fix for focus flash when checkbox and radio buttons are clicked inside of a modal ([#1367](https://github.com/blackbaud/skyux/issues/1367)) ([#1368](https://github.com/blackbaud/skyux/issues/1368)) ([78a1e5c](https://github.com/blackbaud/skyux/commit/78a1e5cd8b70b35efd72d6d6d3a68ec684a5d1c8))

## [7.21.4](https://github.com/blackbaud/skyux/compare/7.21.3...7.21.4) (2023-05-15)


### Bug Fixes

* **components/forms:** revert fix for focus flash when checkbox and radio buttons are clicked inside of a modal ([#1367](https://github.com/blackbaud/skyux/issues/1367)) ([3cef73f](https://github.com/blackbaud/skyux/commit/3cef73f447ba9f2966e8cf2e2389794db1721432))

## [8.0.2](https://github.com/blackbaud/skyux/compare/8.0.1...8.0.2) (2023-05-12)


### Bug Fixes

* **components/packages:** `update-polyfill` schematic properly handles Windows line endings ([#1364](https://github.com/blackbaud/skyux/issues/1364)) ([449c5bb](https://github.com/blackbaud/skyux/commit/449c5bb54299d4d7ed64bb28d635ace814493996))

## [8.0.1](https://github.com/blackbaud/skyux/compare/8.0.0...8.0.1) (2023-05-11)


### Bug Fixes

* remove `@skyux/docs-tools` from packages update group ([#1357](https://github.com/blackbaud/skyux/issues/1357)) ([9c5003d](https://github.com/blackbaud/skyux/commit/9c5003dd45843342479fc8776529eaec9b410f38))
* update documentation tools with skyux-dev-infra 8.0.0-beta.2 ([#1362](https://github.com/blackbaud/skyux/issues/1362)) ([3f6eaf2](https://github.com/blackbaud/skyux/commit/3f6eaf26c5379dfa807b0a66ebf82bfa34437b2e))

## [8.0.0](https://github.com/blackbaud/skyux/compare/8.0.0-beta.4...8.0.0) (2023-05-09)


### ⚠ BREAKING CHANGES

* drop support for Angular 14 ([#984](https://github.com/blackbaud/skyux/issues/984))
* **components/autonumeric:** The `@skyux/autonumeric` peer dependency has been updated to `4.8.1`. Version `4.8.0` of `autonumeric` introduced the `negativePositiveSignBehavior` option and this option defaults to `false`. However, the behavior this option enables was previously on by default. To maintain this behavior,  enable this option on the `skyAutonumeric` instance. For more information, see the [`autonumeric` library's CHANGELOG](https://github.com/autoNumeric/autoNumeric/blob/next/CHANGELOG.md]).
* **components/config:** In previous major versions, query string config parameter values were not decoded when retrieving them via `SkyAppRuntimeConfigParams`. Any code that decoded these values after retrieving them should be removed.
* **components/datetime:** The timepicker component's `timeFormat` input has been converted from a `string` input type to a `SkyTimepickerTimeFormatType` `string` union. This might cause problems if you are setting the `timeFormat` input to a type of `string` in your consuming comopnent's class.
* **components/forms:** The typings for the single file attachment component's `SkyFileAttachmentChange` previously incorrectly listed that the `file` property would never be `undefined`. The underlying functionality has always returned `undefined` when a file is removed. Any code that did not account for the possiblility of `undefined` will need updated to account for this possiblity.
* **components/layout:** Components that expect text expand repeater to have a top margin will need to be updated to compensate for the removed margin.
* **components/lists:** The repeater component's `expandMode` input was set to allow values of type of `string` but it really only supported a handful of known `string` values represented by the `SkyRepeaterExpandModeType` `string` union. This ability to specify a `string` value has been removed. This might cause problems if you are setting the `expandMode` input to a type of `string` in your consuming component's class.
* **components/packages:** A project name must be provided when a workspace has more than one project.
* **components/packages:** migrate to `@skyux/packages/polyfills` in project configuration ([#1033](https://github.com/blackbaud/skyux/issues/1033))
* **components/popovers:** The dropdown component's `buttonType` input has been converted from a `string` input type to a `SkyDropdownButtonType` `string` union. It no longer supports specifying an icon to be displayed as the button content. This might cause problems if you are setting the `buttonType` input to a type of `string` in your consuming component's class.
* **components/tabs:** The tabset nav button component's `buttonType` input was set to allow values of type of `string` but it really only supported a handful of known `string` values represented by the `SkyTabsetNavButtonType` `string` union. This ability to specify a `string` value has been removed. This might cause problems if you are setting the `buttonType` input to a type of `string` in your consuming component's class.
* **components/theme:** remove unused z-index SCSS vars ([#1029](https://github.com/blackbaud/skyux/issues/1029))

### Features

* add support for Angular 15 ([#984](https://github.com/blackbaud/skyux/issues/984)) ([4cef2d0](https://github.com/blackbaud/skyux/commit/4cef2d07aa52a178f78ac5faacf483f4f7a94df8))
* update ng2-dragula to 4.0.0 ([#1084](https://github.com/blackbaud/skyux/issues/1084)) ([a89c8a6](https://github.com/blackbaud/skyux/commit/a89c8a6a250601e5e74fa15e4f96bbddbda920a1))
* **components/autonumeric:** update `autonumeric` peer dependency to `4.8.1` ([#1348](https://github.com/blackbaud/skyux/issues/1348)) ([61da566](https://github.com/blackbaud/skyux/commit/61da566e0d09ae620dcfb66b8c1c132b4c350511))
* **components/config:** decode query string config params ([#1028](https://github.com/blackbaud/skyux/issues/1028)) ([e893554](https://github.com/blackbaud/skyux/commit/e89355465446a3f70761f30dd97835f6658e19ac))
* **components/core:** only log warnings once per application instance ([#1043](https://github.com/blackbaud/skyux/issues/1043)) ([b120d90](https://github.com/blackbaud/skyux/commit/b120d90ec7236fbf46769e6588a44ed258a93d40))
* **components/core:** update dock component to fit within viewport ([#1022](https://github.com/blackbaud/skyux/issues/1022)) ([0e04a62](https://github.com/blackbaud/skyux/commit/0e04a62a5dea375dc1e1846c317bf84445fa44ba))
* **components/datetime:** update `timeFormat` type from string to string union ([#1077](https://github.com/blackbaud/skyux/issues/1077)) ([a4ac3c4](https://github.com/blackbaud/skyux/commit/a4ac3c45d1affa4ac4c76981856266f610927761))
* **components/forms:** single file attachment change event type now correctly denotes that it may be undefined ([#1223](https://github.com/blackbaud/skyux/issues/1223)) ([4693530](https://github.com/blackbaud/skyux/commit/469353038c773e308675b4d9156254fdebfeb2a9))
* **components/forms:** remove bottom margin from selection box grid ([#1141](https://github.com/blackbaud/skyux/issues/1141)) ([75e91cc](https://github.com/blackbaud/skyux/commit/75e91cc89f8241bb5ddf8e13abf7e5bbaa395a55))
* **components/forms:** update selected state background colors ([#1126](https://github.com/blackbaud/skyux/issues/1126)) ([8c820dd](https://github.com/blackbaud/skyux/commit/8c820dd58905ce533743b4eb790c891897d00a55))
* **components/indicators:** announce wait component state changes to screen readers ([#968](https://github.com/blackbaud/skyux/issues/968)) ([a29983d](https://github.com/blackbaud/skyux/commit/a29983d36b759a86046d06401e8f25b555435743))
* **components/indicators:** use alternate Font Awesome icon for default theme when available ([#1244](https://github.com/blackbaud/skyux/issues/1244)) ([ec8e9ae](https://github.com/blackbaud/skyux/commit/ec8e9ae7d7171ecc1df434d8e38c6b5ad5de48d8))
* **components/indicators:** deprecate use of label without `descriptionType` ([#1186](https://github.com/blackbaud/skyux/issues/1186)) ([3f0c3da](https://github.com/blackbaud/skyux/commit/3f0c3da4ad73232d6865bd87e682451148d7f25c))
* **components/layout:** update back-to-top styles ([#1202](https://github.com/blackbaud/skyux/issues/1202)) ([c77e2d8](https://github.com/blackbaud/skyux/commit/c77e2d89fb0436186265486e1d799e3adeeac5bc))
* **components/layout:** remove margin from action button container ([#1152](https://github.com/blackbaud/skyux/issues/1152)) ([e0396d1](https://github.com/blackbaud/skyux/commit/e0396d1f4cfa5669cfb81a30e0d39ff913365d70))
* **components/layout:** remove top margin from text expand repeater ([#1110](https://github.com/blackbaud/skyux/issues/1110)) ([abc27bc](https://github.com/blackbaud/skyux/commit/abc27bccd3b63a5ee9c2c7930089857142a3079d))
* **components/lists:** update the `SkyRepeaterComponent` `expandMode` input to no longer support `string` values ([#1076](https://github.com/blackbaud/skyux/issues/1076)) ([b4219c4](https://github.com/blackbaud/skyux/commit/b4219c4bf6c8b5ce35f0178e916d924739bdfa1f))
* **components/packages:** add schematic to set `resolveJsonModule` to `true` ([#1125](https://github.com/blackbaud/skyux/issues/1125)) ([e4b00eb](https://github.com/blackbaud/skyux/commit/e4b00eb08677f9e626ce62b50bd52974b56c1725))
* **components/packages:** make `--project` a required parameter for `ng add` schematics ([#1073](https://github.com/blackbaud/skyux/issues/1073)) ([c24d41f](https://github.com/blackbaud/skyux/commit/c24d41fca28ab6322b33c9e9c3b41c56e72bfefa))
* **components/packages:** migrate to `@skyux/packages/polyfills` in project configuration ([#1033](https://github.com/blackbaud/skyux/issues/1033)) ([5c200e4](https://github.com/blackbaud/skyux/commit/5c200e45a64eb4c1071b9634835339712b578e16))
* **components/pages:** update action hub to match current design ([#1169](https://github.com/blackbaud/skyux/issues/1169)) ([4357639](https://github.com/blackbaud/skyux/commit/4357639be5203bacaf02a6c87868a24a3dfe40d1))
* **components/popovers:** remove string as valid input on dropdown buttonType ([#1155](https://github.com/blackbaud/skyux/issues/1155)) ([da88367](https://github.com/blackbaud/skyux/commit/da88367d4da01cc16fc71fa1e91da5d5eaae5670))
* **components/tabs:** address incorrect tab spacing in modals ([#1201](https://github.com/blackbaud/skyux/issues/1201)) ([e93060b](https://github.com/blackbaud/skyux/commit/e93060b730f5fd8b4b60b2faa7fc1a224b13c146))
* **components/tabs:** add `messageStream` and `tabsVisibleChanged` to sectioned form and deprecate public methods ([#1075](https://github.com/blackbaud/skyux/issues/1075)) ([fc57440](https://github.com/blackbaud/skyux/commit/fc5744035a1d3ec6159477bc7d9276cc509f4197))
* **components/tabs:** update the `SkyTabsetNavButtonComponent` `buttonType` input to no longer support `string` values ([#1074](https://github.com/blackbaud/skyux/issues/1074)) ([865acd0](https://github.com/blackbaud/skyux/commit/865acd0041633695645a2ec6d5de978be28d37ec))
* **components/text-editor:** add support for `dompurify@3.0.1` ([#1153](https://github.com/blackbaud/skyux/issues/1153)) ([5d2c481](https://github.com/blackbaud/skyux/commit/5d2c48123b9070f7d7d08775771a73389b21e633))
* **components/theme:** remove unused z-index SCSS vars ([#1029](https://github.com/blackbaud/skyux/issues/1029)) ([e4e282d](https://github.com/blackbaud/skyux/commit/e4e282df306624ebb09d042c781b8e7a7dfffd59))
* **sdk/prettier-schematics:** add prettier dependencies to `ng update` ([#1157](https://github.com/blackbaud/skyux/issues/1157)) ([e005b33](https://github.com/blackbaud/skyux/commit/e005b33dc19bc1ea9d5d29c8907e7b6a45b554aa))


### Bug Fixes

* replace internal instances of deprecated `sky-section-heading` and `sky-headline` classes ([#1302](https://github.com/blackbaud/skyux/issues/1302)) ([e77da48](https://github.com/blackbaud/skyux/commit/e77da48c56c87e98a74e0c4b3da0e783b2e24c7c))
* update `sky-emphasized` style class to `sky-font-emphasized` ([#1185](https://github.com/blackbaud/skyux/issues/1185)) ([0faf4f8](https://github.com/blackbaud/skyux/commit/0faf4f8fe7ce12ba13c31f4f7d9f627164e0618a))
* add `@types/dragula` to dependencies of packages that use ng2-dragula ([#1121](https://github.com/blackbaud/skyux/issues/1121)) ([c94669b](https://github.com/blackbaud/skyux/commit/c94669b619221fd9eaaa818a171e86becaf8579e))
* **components/ag-grid:** update data grid styles ([#1177](https://github.com/blackbaud/skyux/issues/1177)) ([fda425d](https://github.com/blackbaud/skyux/commit/fda425d52143c2fdf3a39279006b242b0a5db217))
* **components/core:** apply default options for numeric service ([#1151](https://github.com/blackbaud/skyux/issues/1151)) ([7990727](https://github.com/blackbaud/skyux/commit/7990727234d71da42fe504fdb887d2caca877c13))
* **components/core:** only log warnings once per browser session ([#1059](https://github.com/blackbaud/skyux/issues/1059)) ([4dc1eac](https://github.com/blackbaud/skyux/commit/4dc1eac7457592f74f84c0b10c4a5e9eef3e3245))
* **components/data-manager:** view selector shows active view on initialization ([#1173](https://github.com/blackbaud/skyux/issues/1173)) ([76e5a4e](https://github.com/blackbaud/skyux/commit/76e5a4e6a8fc2eaebc4b59f1093cfc86e90072c1))
* **components/forms:** set search background transparent when not focused ([#1156](https://github.com/blackbaud/skyux/issues/1156)) ([5c7f9e1](https://github.com/blackbaud/skyux/commit/5c7f9e14b329e7745f9aab0ca754739318bdc742))
* **components/indicators:** fix disabled token color, remove new color ([#1142](https://github.com/blackbaud/skyux/issues/1142)) ([a9c0a95](https://github.com/blackbaud/skyux/commit/a9c0a95157a943e6f644558fb7775e10604f3f2f))
* **components/indicators:** adopt `@skyux/icons@5.3.1` ([#1133](https://github.com/blackbaud/skyux/issues/1133)) ([5937000](https://github.com/blackbaud/skyux/commit/5937000d1b2fcd2ad15030062b2345ce90918ea6))
* **components/layout:** remove extra toolbar space in modern ([#1148](https://github.com/blackbaud/skyux/issues/1148)) ([c4d7734](https://github.com/blackbaud/skyux/commit/c4d77348264855bb82f81d04ad00f8f12a49774d))
* **components/lists:** update repeater item chevron accessibility ([#1245](https://github.com/blackbaud/skyux/issues/1245)) ([50f0a87](https://github.com/blackbaud/skyux/commit/50f0a871c9b436202e3425ac9aa37ad041cae181))
* **components/modals:** apply correct spacing to link buttons in modal footers ([#1273](https://github.com/blackbaud/skyux/issues/1273)) ([e6d9cc8](https://github.com/blackbaud/skyux/commit/e6d9cc80288e56946473e58cb169f1749a2801ca))
* **components/modals:** modal headers now use h2 elements to better follow accessibility standards ([#969](https://github.com/blackbaud/skyux/issues/969)) ([4365d1a](https://github.com/blackbaud/skyux/commit/4365d1a16fcd3ba4377ed08c983052b6756ba3a7))
* **components/packages:** update polyfills files for library projects ([#1159](https://github.com/blackbaud/skyux/issues/1159)) ([9e4b7fc](https://github.com/blackbaud/skyux/commit/9e4b7fcb1ef6a9f03510f41f7e74c869538f49f2))
* **components/packages:** remove polyfills from `src/test.ts` ([#1149](https://github.com/blackbaud/skyux/issues/1149)) ([1381258](https://github.com/blackbaud/skyux/commit/1381258e65401640721860acb52e4b53ca7fa19d))
* **components/packages:** add content to polyfills.ts ([#1065](https://github.com/blackbaud/skyux/issues/1065)) ([a340051](https://github.com/blackbaud/skyux/commit/a340051e3afcd5dbb4da65eb83c57b47b1cc8bd6))
* **components/packages:** use named export for 'update-polyfill' schematic ([#1057](https://github.com/blackbaud/skyux/issues/1057)) ([bc554d6](https://github.com/blackbaud/skyux/commit/
bc554d6208329509857f290e198402e6de46fd2a))
* **components/packages:** fix `update-polyfill` schematic factory path ([#1054](https://github.com/blackbaud/skyux/issues/1054)) ([02faab3](https://github.com/blackbaud/skyux/commit/02faab3fe75532f72ca94ce1282cf38f54d2049d))
* **components/packages:** add package.json to exports ([#1052](https://github.com/blackbaud/skyux/issues/1052)) ([0c40b65](https://github.com/blackbaud/skyux/commit/0c40b655cc3b21acd7d8329b0ae709f44d1c39af))
* **components/packages:** remove v7 update schematics ([#1025](https://github.com/blackbaud/skyux/issues/1025)) ([890fa75](https://github.com/blackbaud/skyux/commit/890fa75268f2604de00598551a7fb37c855e5b6c))
* **components/packages:** include `ng add` template files in public exports ([#1015](https://github.com/blackbaud/skyux/issues/1015)) ([b087324](https://github.com/blackbaud/skyux/commit/b087324015e58463f56bc9a94482bf11d287a5ec))
* **components/popovers:** dropdown items disabled state can now be toggled dynamically ([#1308](https://github.com/blackbaud/skyux/issues/1308)) ([7690dc8](https://github.com/blackbaud/skyux/commit/7690dc854aec31698d4543caaec41c0c47a9d885))
* **components/text-editor:** content is only pasted once into the text editor ([#997](https://github.com/blackbaud/skyux/issues/997)) ([dd99d3c](https://github.com/blackbaud/skyux/commit/dd99d3cfbc08d2707210f264071ee1e2b13e3788))

### Deprecations

* **components/indicators:** deprecate use of alert without descriptionType ([#1212](https://github.com/blackbaud/skyux/issues/1212)) ([9807f94](https://github.com/blackbaud/skyux/commit/9807f94d0179e50df7d464fe8bfed524b4e93ef1))

## [8.0.0-beta.4](https://github.com/blackbaud/skyux/compare/8.0.0-beta.3...8.0.0-beta.4) (2023-05-05)


### ⚠ BREAKING CHANGES

* **components/autonumeric:** The `@skyux/autonumeric` peer dependency has been updated to `4.8.1`. Version `4.8.0` of `autonumeric` introduced the `negativePositiveSignBehavior` option and this option defaults to `false`. However, the behavior this option enables was previously on by default. To maintain this behavior,  enable this option on the `skyAutonumeric` instance. For more information, see the [`autonumeric` library's CHANGELOG](https://github.com/autoNumeric/autoNumeric/blob/next/CHANGELOG.md]).

### Features

* **components/autonumeric:** update `autonumeric` peer dependency to `4.8.1` ([#1348](https://github.com/blackbaud/skyux/issues/1348)) ([61da566](https://github.com/blackbaud/skyux/commit/61da566e0d09ae620dcfb66b8c1c132b4c350511))


### Bug Fixes

* **components/indicators:** remove white ring around focused alert or toast close buttons ([#1335](https://github.com/blackbaud/skyux/issues/1335)) ([#1343](https://github.com/blackbaud/skyux/issues/1343)) ([a360c57](https://github.com/blackbaud/skyux/commit/a360c5713ff32bd3c124f109cbd5eb4d41ce2ab5))
* **components/lookup:** lookup search results will not show up after the lookup field has lost focus ([#1337](https://github.com/blackbaud/skyux/issues/1337)) ([#1351](https://github.com/blackbaud/skyux/issues/1351)) ([5b34c8d](https://github.com/blackbaud/skyux/commit/5b34c8d44347cd1723373afc147eb1646f41f376))

## [7.21.3](https://github.com/blackbaud/skyux/compare/7.21.2...7.21.3) (2023-05-05)


### Bug Fixes

* **components/indicators:** remove white ring around focused alert or toast close buttons ([#1335](https://github.com/blackbaud/skyux/issues/1335)) ([f28fa22](https://github.com/blackbaud/skyux/commit/f28fa22f1f985b8dd88dd72e00a6f70cde9632c3))
* **components/lookup:** lookup search results will not show up after the lookup field has lost focus ([#1337](https://github.com/blackbaud/skyux/issues/1337)) ([371043c](https://github.com/blackbaud/skyux/commit/371043cbfe9a983de28725a447f0e78cfc17aa9e))

## [8.0.0-beta.3](https://github.com/blackbaud/skyux/compare/8.0.0-beta.2...8.0.0-beta.3) (2023-04-26)


### Bug Fixes

* **components/avatar:** max avatar file size default is now correctly documented ([#1329](https://github.com/blackbaud/skyux/issues/1329)) ([#1330](https://github.com/blackbaud/skyux/issues/1330)) ([4e47605](https://github.com/blackbaud/skyux/commit/4e47605c748380806010b70022a9d87b99d90c9e))
* **components/forms:** descenders are not cut off inside an input box when zoomed in ([#1325](https://github.com/blackbaud/skyux/issues/1325)) ([#1331](https://github.com/blackbaud/skyux/issues/1331)) ([4f66793](https://github.com/blackbaud/skyux/commit/4f66793e1f280136f6a3dbcaaa416628025cd340))
* **components/forms:** fix focus flash when checkbox and radio buttons are clicked inside of a modal ([#1326](https://github.com/blackbaud/skyux/issues/1326)) ([#1327](https://github.com/blackbaud/skyux/issues/1327)) ([1783041](https://github.com/blackbaud/skyux/commit/1783041298da93b8748225c7498f24816855589a))
* toolbars have correct borders when paced beside another toolbar or beside an AG Grid instance ([#1324](https://github.com/blackbaud/skyux/issues/1324)) ([#1333](https://github.com/blackbaud/skyux/issues/1333)) ([d69b566](https://github.com/blackbaud/skyux/commit/d69b566660e51ca6ca702b5dce327c70f15dd0f5))

## [7.21.2](https://github.com/blackbaud/skyux/compare/7.21.1...7.21.2) (2023-04-26)


### Bug Fixes

* **components/ag-grid:** missing icons ([#1320](https://github.com/blackbaud/skyux/issues/1320)) ([263d56e](https://github.com/blackbaud/skyux/commit/263d56e1a3554c312eeffc71b3823444ba22e5c0))
* **components/avatar:** max avatar file size default is now correctly documented ([#1329](https://github.com/blackbaud/skyux/issues/1329)) ([f438989](https://github.com/blackbaud/skyux/commit/f4389896fde1f518c1d7a179439ae54c87f8bc29))
* **components/forms:** descenders are not cut off inside an input box when zoomed in ([#1325](https://github.com/blackbaud/skyux/issues/1325)) ([bb3f4d3](https://github.com/blackbaud/skyux/commit/bb3f4d34cbaa28f21a52dce6b1044b99451992bc))
* **components/forms:** fix focus flash when checkbox and radio buttons are clicked inside of a modal ([#1326](https://github.com/blackbaud/skyux/issues/1326)) ([22bdb49](https://github.com/blackbaud/skyux/commit/22bdb4913a7e068f4e45856f532133a4a0ce8633))
* toolbars have correct borders when paced beside another toolbar or beside an AG Grid instance ([#1324](https://github.com/blackbaud/skyux/issues/1324)) ([9f4fc35](https://github.com/blackbaud/skyux/commit/9f4fc35c1a2515848abadae93a082508c5e84d09))

## [8.0.0-beta.2](https://github.com/blackbaud/skyux/compare/8.0.0-beta.1...8.0.0-beta.2) (2023-04-24)


### Bug Fixes

* **components/indicators:** use correct alert and toast close icon size ([#1313](https://github.com/blackbaud/skyux/issues/1313)) ([#1314](https://github.com/blackbaud/skyux/issues/1314)) ([f881567](https://github.com/blackbaud/skyux/commit/f881567b2da9aafb773b42bc0c45a929f3205a3a))
* **components/phone-field:** the phone field component prioritizes the default country when switching countries via dial code ([#1309](https://github.com/blackbaud/skyux/issues/1309)) ([#1311](https://github.com/blackbaud/skyux/issues/1311)) ([269407a](https://github.com/blackbaud/skyux/commit/269407a47c1d60a08c0b002090fed9af9a9840e8))
* **components/popovers:** dropdown items disabled state can now be toggled dynamically ([#1308](https://github.com/blackbaud/skyux/issues/1308)) ([7690dc8](https://github.com/blackbaud/skyux/commit/7690dc854aec31698d4543caaec41c0c47a9d885))
* **components/toast:** toast components default to an `Info` type if no type is provided ([#1316](https://github.com/blackbaud/skyux/issues/1316)) ([#1317](https://github.com/blackbaud/skyux/issues/1317)) ([0ecfa23](https://github.com/blackbaud/skyux/commit/0ecfa232320a55ac753406328ef654872b9a3876))

## [7.21.1](https://github.com/blackbaud/skyux/compare/7.21.0...7.21.1) (2023-04-24)


### Bug Fixes

* **components/indicators:** use correct alert and toast close icon size ([#1313](https://github.com/blackbaud/skyux/issues/1313)) ([ac99364](https://github.com/blackbaud/skyux/commit/ac9936413d6bc3e52d31e0257eccda9051948a0b))
* **components/phone-field:** the phone field component prioritizes the default country when switching countries via dial code ([#1309](https://github.com/blackbaud/skyux/issues/1309)) ([319e864](https://github.com/blackbaud/skyux/commit/319e864f806f40ea79e033a74346cb7e0c4f4d47))
* **components/toast:** toast components default to an `Info` type if no type is provided ([#1316](https://github.com/blackbaud/skyux/issues/1316)) ([b1187bc](https://github.com/blackbaud/skyux/commit/b1187bca359c21e1e7e517e991dd1689c8840a5e))

## [8.0.0-beta.1](https://github.com/blackbaud/skyux/compare/8.0.0-beta.0...8.0.0-beta.1) (2023-04-20)


### Features

* **components/indicators:** add keyboard support to chevron component ([#1298](https://github.com/blackbaud/skyux/issues/1298)) ([#1299](https://github.com/blackbaud/skyux/issues/1299)) ([1f783b2](https://github.com/blackbaud/skyux/commit/1f783b298ad3a63d8b6e808ec5d379c2a55ca0a0))
* **components/layout:** box test harness ([#1300](https://github.com/blackbaud/skyux/issues/1300)) ([#1303](https://github.com/blackbaud/skyux/issues/1303)) ([80aec78](https://github.com/blackbaud/skyux/commit/80aec78d1ed1e8ec798057f5d343e43ecc68854c))


### Bug Fixes

* **components/forms:** checkboxes only emit from the `valueChanges` reacive form observable once when the value changes and do not mark the form as dirty on programmatic changes ([#1292](https://github.com/blackbaud/skyux/issues/1292)) ([#1294](https://github.com/blackbaud/skyux/issues/1294)) ([3c68e8c](https://github.com/blackbaud/skyux/commit/3c68e8c349dfbbf903821ac5a486ae38e409ef5d))
* **components/forms:** file attachment component does not place invalid `aria-required` attribute on the label ([#1301](https://github.com/blackbaud/skyux/issues/1301)) ([#1304](https://github.com/blackbaud/skyux/issues/1304)) ([cf5cf38](https://github.com/blackbaud/skyux/commit/cf5cf38eaee8d0cd45410aa284f19425c9698a06))
* **components/lists:** update inline form code examples to align with design guidelines ([#1297](https://github.com/blackbaud/skyux/issues/1297)) ([#1305](https://github.com/blackbaud/skyux/issues/1305)) ([df599fc](https://github.com/blackbaud/skyux/commit/df599fcb3c8837e0573e7b4957e9cf16eae6bfe3))
* replace internal instances of deprecated `sky-section-heading` and `sky-headline` classes ([#1302](https://github.com/blackbaud/skyux/issues/1302)) ([e77da48](https://github.com/blackbaud/skyux/commit/e77da48c56c87e98a74e0c4b3da0e783b2e24c7c))

## [7.21.0](https://github.com/blackbaud/skyux/compare/7.20.0...7.21.0) (2023-04-20)


### Features

* **components/indicators:** add keyboard support to chevron component ([#1298](https://github.com/blackbaud/skyux/issues/1298)) ([72bd4bd](https://github.com/blackbaud/skyux/commit/72bd4bd4c8d4f577c0c3ff443f96ed8282be001d))
* **components/layout:** box test harness ([#1300](https://github.com/blackbaud/skyux/issues/1300)) ([1efcb19](https://github.com/blackbaud/skyux/commit/1efcb1996b40f0efcfe2c17f03a95ba005a8d7be))


### Bug Fixes

* **components/forms:** checkboxes only emit from the `valueChanges` reacive form observable once when the value changes and do not mark the form as dirty on programmatic changes ([#1292](https://github.com/blackbaud/skyux/issues/1292)) ([30fff44](https://github.com/blackbaud/skyux/commit/30fff44ea6bd73313ea7830dca1a50bd58e3a8cf))
* **components/forms:** file attachment component does not place invalid `aria-required` attribute on the label ([#1301](https://github.com/blackbaud/skyux/issues/1301)) ([6f43fc0](https://github.com/blackbaud/skyux/commit/6f43fc08d32501a6f69b52a39cd1b85aa253d443))
* **components/lists:** update inline form code examples to align with design guidelines ([#1297](https://github.com/blackbaud/skyux/issues/1297)) ([0804c98](https://github.com/blackbaud/skyux/commit/0804c986bfe0c7f71bc460e86ac6896ccde9f94c))

## [8.0.0-beta.0](https://github.com/blackbaud/skyux/compare/8.0.0-alpha.21...8.0.0-beta.0) (2023-04-19)


### Features

* **components/lists:** add click method to repeater item test harness ([#1279](https://github.com/blackbaud/skyux/issues/1279)) ([#1280](https://github.com/blackbaud/skyux/issues/1280)) ([ddabcd0](https://github.com/blackbaud/skyux/commit/ddabcd063b2942e7701e819fe3f50ed6cedb2112))


### Bug Fixes

* **components/ag-grid:** change tab navigation into grid ([#1276](https://github.com/blackbaud/skyux/issues/1276)) ([#1284](https://github.com/blackbaud/skyux/issues/1284)) ([58d976d](https://github.com/blackbaud/skyux/commit/58d976dc9e024e94003de0e48b4b3da4944eeee6))
* **components/tabs:** vertical tab animation states reset correctly when transitioning between responsive states ([#1282](https://github.com/blackbaud/skyux/issues/1282)) ([#1289](https://github.com/blackbaud/skyux/issues/1289)) ([fe9ab96](https://github.com/blackbaud/skyux/commit/fe9ab967f800126ac4b7c953245f8de1c9cff707))

## [7.20.0](https://github.com/blackbaud/skyux/compare/7.19.0...7.20.0) (2023-04-19)


### Features

* **components/lists:** add click method to repeater item test harness ([#1279](https://github.com/blackbaud/skyux/issues/1279)) ([3ba3dba](https://github.com/blackbaud/skyux/commit/3ba3dbaccfa2edf2b4a4b725ed16d7b3bcedc982))


### Bug Fixes

* **components/ag-grid:** change tab navigation into grid ([#1276](https://github.com/blackbaud/skyux/issues/1276)) ([11cd85c](https://github.com/blackbaud/skyux/commit/11cd85c1a1ceba25b09ab654d5d48080cdcfd6f3))
* **components/tabs:** vertical tab animation states reset correctly when transitioning between responsive states ([#1282](https://github.com/blackbaud/skyux/issues/1282)) ([379ee60](https://github.com/blackbaud/skyux/commit/379ee60446dcca2b70f0e46b42a7c2cbc909b35e))

## [8.0.0-alpha.21](https://github.com/blackbaud/skyux/compare/8.0.0-alpha.20...8.0.0-alpha.21) (2023-04-18)


### Features

* **components/indicators:** announce wait component state changes to screen readers ([#968](https://github.com/blackbaud/skyux/issues/968)) ([a29983d](https://github.com/blackbaud/skyux/commit/a29983d36b759a86046d06401e8f25b555435743))
* **components/lists:** add inline form repeater code example and improved other examples ([#1261](https://github.com/blackbaud/skyux/issues/1261)) ([#1268](https://github.com/blackbaud/skyux/issues/1268)) ([16a5707](https://github.com/blackbaud/skyux/commit/16a57071984317ae8b40828238a6c93b29cbc68f))
* **components/modals:** modal test harness ([#1265](https://github.com/blackbaud/skyux/issues/1265)) ([#1270](https://github.com/blackbaud/skyux/issues/1270)) ([b41497b](https://github.com/blackbaud/skyux/commit/b41497b6d284dd9eecf20951bec6161ec4d1cd04))


### Bug Fixes

* **components/lookup:** revert autocomplete dropdown absolute position change ([#1269](https://github.com/blackbaud/skyux/issues/1269)) ([#1271](https://github.com/blackbaud/skyux/issues/1271)) ([2a70add](https://github.com/blackbaud/skyux/commit/2a70addb5116510850c33d9adefdee54d4b894be))
* **components/modals:** apply correct spacing to link buttons in modal footers ([#1273](https://github.com/blackbaud/skyux/issues/1273)) ([e6d9cc8](https://github.com/blackbaud/skyux/commit/e6d9cc80288e56946473e58cb169f1749a2801ca))
* **components/popovers:** export `SkyDropdownButtonType` ([#1262](https://github.com/blackbaud/skyux/issues/1262)) ([#1263](https://github.com/blackbaud/skyux/issues/1263)) ([6fe9faf](https://github.com/blackbaud/skyux/commit/6fe9faf687f99bb6174a01b6afa5591f4729fb8f))

## [7.19.0](https://github.com/blackbaud/skyux/compare/7.18.0...7.19.0) (2023-04-13)


### Features

* **components/lists:** add inline form repeater code example and improved other examples ([#1261](https://github.com/blackbaud/skyux/issues/1261)) ([0a607b3](https://github.com/blackbaud/skyux/commit/0a607b362948e71bec1a76057814d3fdd0b3274e))
* **components/modals:** modal test harness ([#1265](https://github.com/blackbaud/skyux/issues/1265)) ([b7622f3](https://github.com/blackbaud/skyux/commit/b7622f3df24d1c1858d78ec79967094fb27e7e59))


### Bug Fixes

* **components/lookup:** revert autocomplete dropdown absolute position change ([#1269](https://github.com/blackbaud/skyux/issues/1269)) ([a631193](https://github.com/blackbaud/skyux/commit/a631193db35f36fa519221a2b0797d86f4845cab))
* **components/popovers:** export `SkyDropdownButtonType` ([#1262](https://github.com/blackbaud/skyux/issues/1262)) ([f031fab](https://github.com/blackbaud/skyux/commit/f031fabb3a2ab907066c8edf51e99a624c50b898))

## [8.0.0-alpha.20](https://github.com/blackbaud/skyux/compare/8.0.0-alpha.19...8.0.0-alpha.20) (2023-04-12)


### Features

* **components/indicators:** use alternate Font Awesome icon for default theme when available ([#1244](https://github.com/blackbaud/skyux/issues/1244)) ([ec8e9ae](https://github.com/blackbaud/skyux/commit/ec8e9ae7d7171ecc1df434d8e38c6b5ad5de48d8))
* **components/lists:** auto-scroll window or parent when dragging repeater items ([#1253](https://github.com/blackbaud/skyux/issues/1253)) ([#1259](https://github.com/blackbaud/skyux/issues/1259)) ([2a82dd6](https://github.com/blackbaud/skyux/commit/2a82dd6157b9c85ef55de40ff27ccc8a4205e19c))


### Bug Fixes

* **components/lists:** update repeater item chevron accessibility ([#1245](https://github.com/blackbaud/skyux/issues/1245)) ([50f0a87](https://github.com/blackbaud/skyux/commit/50f0a871c9b436202e3425ac9aa37ad041cae181))
* **components/lists:** validate tags for reorderable repeater when items change ([#1255](https://github.com/blackbaud/skyux/issues/1255)) ([#1256](https://github.com/blackbaud/skyux/issues/1256)) ([3e168bc](https://github.com/blackbaud/skyux/commit/3e168bc81c2a0e4a476979ff64709c4511c96bbe))
* **components/toast:** close button hover text is incorrect ([#1247](https://github.com/blackbaud/skyux/issues/1247)) ([#1249](https://github.com/blackbaud/skyux/issues/1249)) ([81c3da5](https://github.com/blackbaud/skyux/commit/81c3da5c8fd738627b4d6bce9d813544fab62b3b))

## [7.18.0](https://github.com/blackbaud/skyux/compare/7.17.0...7.18.0) (2023-04-12)


### Features

* **components/lists:** auto-scroll window or parent when dragging repeater items ([#1253](https://github.com/blackbaud/skyux/issues/1253)) ([64f68fa](https://github.com/blackbaud/skyux/commit/64f68faaedf3ebde503414ffa37f6817c81e02c7))


### Bug Fixes

* **components/lists:** update all repeater items when items query list changes ([#1251](https://github.com/blackbaud/skyux/issues/1251)) ([f60a790](https://github.com/blackbaud/skyux/commit/f60a790a89434e8fa2135fbf571a86119be9667c))
* **components/lists:** validate tags for reorderable repeater when items change ([#1255](https://github.com/blackbaud/skyux/issues/1255)) ([1ad9e86](https://github.com/blackbaud/skyux/commit/1ad9e8600debb5baebb40715f8f5bf26abfeab23))
* **components/toast:** close button hover text is incorrect ([#1247](https://github.com/blackbaud/skyux/issues/1247)) ([83745d4](https://github.com/blackbaud/skyux/commit/83745d4df17f00e064d1341421cad1a4ccd3de21))

## [8.0.0-alpha.19](https://github.com/blackbaud/skyux/compare/8.0.0-alpha.18...8.0.0-alpha.19) (2023-04-10)


### Features

* **components/indicators:** add ability to set aria controls and expanded states on the help inline component ([#1225](https://github.com/blackbaud/skyux/issues/1225)) ([#1230](https://github.com/blackbaud/skyux/issues/1230)) ([440c5bc](https://github.com/blackbaud/skyux/commit/440c5bc63b01d83d89b42f08e34d707a93a4a6e1))
* **components/indicators:** add ability to specify an accessibility label on help inline ([#1235](https://github.com/blackbaud/skyux/issues/1235)) ([#1236](https://github.com/blackbaud/skyux/issues/1236)) ([1a8283e](https://github.com/blackbaud/skyux/commit/1a8283ec16d4c5dc4f66b27bfb1ac88d77766825))
* **components/lists:** add sample tests for repeater ([#1220](https://github.com/blackbaud/skyux/issues/1220)) ([#1226](https://github.com/blackbaud/skyux/issues/1226)) ([72293ae](https://github.com/blackbaud/skyux/commit/72293ae63c36eeafbc58dffdcb6e9cb8700896db))


### Bug Fixes

* **components/indicators:** fix help inline background color ([#1232](https://github.com/blackbaud/skyux/issues/1232)) ([#1233](https://github.com/blackbaud/skyux/issues/1233)) ([83a47c5](https://github.com/blackbaud/skyux/commit/83a47c506d120e05acf48ea5d731c5c465fd1872))

## [7.17.0](https://github.com/blackbaud/skyux/compare/7.16.0...7.17.0) (2023-04-10)


### Features

* **components/indicators:** add ability to set aria controls and expanded states on the help inline component ([#1225](https://github.com/blackbaud/skyux/issues/1225)) ([5158062](https://github.com/blackbaud/skyux/commit/5158062074f81fb8c4dd4a7340742a112fb24aba))
* **components/indicators:** add ability to specify an accessibility label on help inline ([#1235](https://github.com/blackbaud/skyux/issues/1235)) ([4fb980a](https://github.com/blackbaud/skyux/commit/4fb980af32ee87e8f8a35ca9b0a575bbe180149c))


### Bug Fixes

* **components/indicators:** fix help inline background color ([#1232](https://github.com/blackbaud/skyux/issues/1232)) ([593c127](https://github.com/blackbaud/skyux/commit/593c127c4b5de2c8afddd2bc2ec57e559b9ee70e))

## [7.16.0](https://github.com/blackbaud/skyux/compare/7.15.0...7.16.0) (2023-04-06)


### Features

* **components/lists:** add sample tests for repeater ([#1220](https://github.com/blackbaud/skyux/issues/1220)) ([d62be38](https://github.com/blackbaud/skyux/commit/d62be383aa721b1fa84ebcbcf05d78bb04525ae0))


### Bug Fixes

* **components/lists:** don't animate repeater items collapsing on initial render ([#1219](https://github.com/blackbaud/skyux/issues/1219)) ([38fe850](https://github.com/blackbaud/skyux/commit/38fe8503cc402ab7172146a359a7cf30e64dfa99))

## [8.0.0-alpha.18](https://github.com/blackbaud/skyux/compare/8.0.0-alpha.17...8.0.0-alpha.18) (2023-04-06)


### ⚠ BREAKING CHANGES

* **components/forms:** The typings for the single file attachment component's `SkyFileAttachmentChange` previously incorrectly listed that the `file` property would never be `undefined`. The underlying functionality has always returned `undefined` when a file is removed. Any code that did not account for the possiblility of `undefined` will need updated to account for this possiblity.

### Bug Fixes

* **components/forms:** single file attachment change event type now correctly denotes that it may be undefined ([#1223](https://github.com/blackbaud/skyux/issues/1223)) ([4693530](https://github.com/blackbaud/skyux/commit/469353038c773e308675b4d9156254fdebfeb2a9))
* **components/lists:** don't animate repeater items collapsing on initial render ([#1219](https://github.com/blackbaud/skyux/issues/1219)) ([#1221](https://github.com/blackbaud/skyux/issues/1221)) ([caf6507](https://github.com/blackbaud/skyux/commit/caf650781aa8b9d89ee4c4a5c95d1dbf0e6b6ac8))

## [8.0.0-alpha.17](https://github.com/blackbaud/skyux/compare/8.0.0-alpha.16...8.0.0-alpha.17) (2023-04-05)


### Features

* **components/lists:** repeater test harness ([#1196](https://github.com/blackbaud/skyux/issues/1196)) ([#1209](https://github.com/blackbaud/skyux/issues/1209)) ([bd56b30](https://github.com/blackbaud/skyux/commit/bd56b30dfbfca6f3ad04be4884f05be04209b03d))
* **components/lists:** repeater visual tests ([#1182](https://github.com/blackbaud/skyux/issues/1182)) ([#1210](https://github.com/blackbaud/skyux/issues/1210)) ([508810f](https://github.com/blackbaud/skyux/commit/508810ffec731f38452f435f23566e86b5c6add4))
* **components/modals:** add `beforeClose` example to modal demo ([#1214](https://github.com/blackbaud/skyux/issues/1214)) ([#1215](https://github.com/blackbaud/skyux/issues/1215)) ([58f97d8](https://github.com/blackbaud/skyux/commit/58f97d8a2ca3ca2acd1c88bfe3cca2cb4dc1cc4e))
* **components/modals:** modal visual test ([#1181](https://github.com/blackbaud/skyux/issues/1181)) ([#1216](https://github.com/blackbaud/skyux/issues/1216)) ([cba6a36](https://github.com/blackbaud/skyux/commit/cba6a36a121918be483aa2873bde016e680f346f))


### Bug Fixes

* update `sky-emphasized` style class to `sky-font-emphasized` ([#1185](https://github.com/blackbaud/skyux/issues/1185)) ([0faf4f8](https://github.com/blackbaud/skyux/commit/0faf4f8fe7ce12ba13c31f4f7d9f627164e0618a))


### Deprecations

* **components/indicators:** deprecate use of alert without descriptionType ([#1212](https://github.com/blackbaud/skyux/issues/1212)) ([9807f94](https://github.com/blackbaud/skyux/commit/9807f94d0179e50df7d464fe8bfed524b4e93ef1))

## [7.15.0](https://github.com/blackbaud/skyux/compare/7.14.0...7.15.0) (2023-04-05)


### Features

* **components/lists:** repeater test harness ([#1196](https://github.com/blackbaud/skyux/issues/1196)) ([26dde98](https://github.com/blackbaud/skyux/commit/26dde98fc6d5b09bc33b3bec7801e60263136b62))
* **components/lists:** repeater visual tests ([#1182](https://github.com/blackbaud/skyux/issues/1182)) ([d600fbd](https://github.com/blackbaud/skyux/commit/d600fbd8c6cda62bee4fa5ae5f33a35182851d98))
* **components/modals:** add `beforeClose` example to modal demo ([#1214](https://github.com/blackbaud/skyux/issues/1214)) ([51a2038](https://github.com/blackbaud/skyux/commit/51a20387bc48dddf5a80c79bbba37b059e35b1b6))
* **components/modals:** modal visual test ([#1181](https://github.com/blackbaud/skyux/issues/1181)) ([024cebb](https://github.com/blackbaud/skyux/commit/024cebb655edcb142f07d14e3ab4ca2fce345fc7))

## [8.0.0-alpha.16](https://github.com/blackbaud/skyux/compare/8.0.0-alpha.15...8.0.0-alpha.16) (2023-04-03)


### Features

* **components/layout:** update back-to-top styles ([#1202](https://github.com/blackbaud/skyux/issues/1202)) ([c77e2d8](https://github.com/blackbaud/skyux/commit/c77e2d89fb0436186265486e1d799e3adeeac5bc))
* **components/tabs:** address incorrect tab spacing in modals ([#1201](https://github.com/blackbaud/skyux/issues/1201)) ([e93060b](https://github.com/blackbaud/skyux/commit/e93060b730f5fd8b4b60b2faa7fc1a224b13c146))

## [8.0.0-alpha.15](https://github.com/blackbaud/skyux/compare/8.0.0-alpha.14...8.0.0-alpha.15) (2023-03-31)


### Bug Fixes

* **components/ag-grid:** update data grid styles ([#1177](https://github.com/blackbaud/skyux/issues/1177)) ([fda425d](https://github.com/blackbaud/skyux/commit/fda425d52143c2fdf3a39279006b242b0a5db217))
* **components/data-manager:** view selector shows active view on initialization ([#1173](https://github.com/blackbaud/skyux/issues/1173)) ([76e5a4e](https://github.com/blackbaud/skyux/commit/76e5a4e6a8fc2eaebc4b59f1093cfc86e90072c1))
* **components/lookup:** use `position: absolute` for autocomplete dropdown ([#1176](https://github.com/blackbaud/skyux/issues/1176)) ([#1180](https://github.com/blackbaud/skyux/issues/1180)) ([ddf24b8](https://github.com/blackbaud/skyux/commit/ddf24b8a651e32b5b100b5e72ca311362c03114e))

## [8.0.0-alpha.14](https://github.com/blackbaud/skyux/compare/8.0.0-alpha.13...8.0.0-alpha.14) (2023-03-30)


### Features

* **components/indicators:** deprecate use of label without `descriptionType` ([#1186](https://github.com/blackbaud/skyux/issues/1186)) ([3f0c3da](https://github.com/blackbaud/skyux/commit/3f0c3da4ad73232d6865bd87e682451148d7f25c))
* **components/pages:** deprecate the needs attention message field ([#1188](https://github.com/blackbaud/skyux/issues/1188)) ([#1195](https://github.com/blackbaud/skyux/issues/1195)) ([dcf5c4e](https://github.com/blackbaud/skyux/commit/dcf5c4e7982805b2587b67c7a47e6ab9d86e0616))


### Deprecations

* **components/forms:** deprecate radioType and checkboxType ([#1191](https://github.com/blackbaud/skyux/issues/1191)) ([#1193](https://github.com/blackbaud/skyux/issues/1193)) ([f913110](https://github.com/blackbaud/skyux/commit/f91311084631829cf292ca446b37851d01ebeaa4))

## [7.14.0](https://github.com/blackbaud/skyux/compare/7.13.0...7.14.0) (2023-03-29)


### Features

* **components/pages:** deprecate the needs attention message field ([#1188](https://github.com/blackbaud/skyux/issues/1188)) ([c96b1bc](https://github.com/blackbaud/skyux/commit/c96b1bcc9c49e46e25a06d10abd679edfe16bf5c))


### Deprecations

* **components/forms:** deprecate radioType and checkboxType ([#1191](https://github.com/blackbaud/skyux/issues/1191)) ([a5128dc](https://github.com/blackbaud/skyux/commit/a5128dc63a17cf8e2ea6acd8754077ee9fc70c45))

## [8.0.0-alpha.13](https://github.com/blackbaud/skyux/compare/8.0.0-alpha.12...8.0.0-alpha.13) (2023-03-27)


### Features

* **components/indicators:** help inline visual test ([#1160](https://github.com/blackbaud/skyux/issues/1160)) ([#1165](https://github.com/blackbaud/skyux/issues/1165)) ([201b9c3](https://github.com/blackbaud/skyux/commit/201b9c37230f4e4ec8c9ef272125750a7fdb779f))
* **components/indicators:** icon visual test ([#1168](https://github.com/blackbaud/skyux/issues/1168)) ([#1170](https://github.com/blackbaud/skyux/issues/1170)) ([e4a70c3](https://github.com/blackbaud/skyux/commit/e4a70c3422c5bcb4f9ad43999b758acfa5a4806d))
* **components/pages:** update action hub to match current design ([#1169](https://github.com/blackbaud/skyux/issues/1169)) ([4357639](https://github.com/blackbaud/skyux/commit/4357639be5203bacaf02a6c87868a24a3dfe40d1))


### Bug Fixes

* **components/forms:** set search background transparent when not focused ([#1156](https://github.com/blackbaud/skyux/issues/1156)) ([5c7f9e1](https://github.com/blackbaud/skyux/commit/5c7f9e14b329e7745f9aab0ca754739318bdc742))
* **components/indicators:** fix SkyWaitHarnessFilters docs reference to SkyWaitHarness which incorrectly referenced SkyAlertHarness ([#1171](https://github.com/blackbaud/skyux/issues/1171)) ([#1172](https://github.com/blackbaud/skyux/issues/1172)) ([d414630](https://github.com/blackbaud/skyux/commit/d414630bffd177400f08f98e2c305bba7da1fdca))

## [7.13.0](https://github.com/blackbaud/skyux/compare/7.12.0...7.13.0) (2023-03-24)


### Features

* **components/indicators:** help inline visual test ([#1160](https://github.com/blackbaud/skyux/issues/1160)) ([915e696](https://github.com/blackbaud/skyux/commit/915e69652ec906c494cac5da2a47da7baaada709))
* **components/indicators:** icon visual test ([#1168](https://github.com/blackbaud/skyux/issues/1168)) ([00c8215](https://github.com/blackbaud/skyux/commit/00c8215c21ca11109c7abb200e088b4fec9044f6))


### Bug Fixes

* **components/indicators:** fix `SkyWaitHarnessFilters` docs reference to `SkyWaitHarness` which incorrectly referenced `SkyAlertHarness` ([#1171](https://github.com/blackbaud/skyux/issues/1171)) ([0dadf18](https://github.com/blackbaud/skyux/commit/0dadf182e8a7771f34411da0f3f026727cfa98fe))
* **components/lookup:** use `position: absolute` for autocomplete dropdown ([#1176](https://github.com/blackbaud/skyux/issues/1176)) ([2540096](https://github.com/blackbaud/skyux/commit/2540096fe165a292ccab7f71fd426eb7e60fa601))

## [8.0.0-alpha.12](https://github.com/blackbaud/skyux/compare/8.0.0-alpha.11...8.0.0-alpha.12) (2023-03-17)


### ⚠ BREAKING CHANGES

* **components/popovers:** The dropdown component's `buttonType` input has been converted from a `string` input type to a `SkyDropdownButtonType` `string` union. It no longer supports specifying an icon to be displayed as the button content. This might cause problems if you are setting the `buttonType` input to a type of `string` in your consuming component's class.

### Features

* **components/popovers:** remove string as valid input on dropdown buttonType ([#1155](https://github.com/blackbaud/skyux/issues/1155)) ([da88367](https://github.com/blackbaud/skyux/commit/da88367d4da01cc16fc71fa1e91da5d5eaae5670))
* **components/text-editor:** add support for `dompurify@3.0.1` ([#1153](https://github.com/blackbaud/skyux/issues/1153)) ([5d2c481](https://github.com/blackbaud/skyux/commit/5d2c48123b9070f7d7d08775771a73389b21e633))
* **sdk/prettier-schematics:** add prettier dependencies to `ng update` ([#1157](https://github.com/blackbaud/skyux/issues/1157)) ([e005b33](https://github.com/blackbaud/skyux/commit/e005b33dc19bc1ea9d5d29c8907e7b6a45b554aa))


### Bug Fixes

* **components/ag-grid:** relax height style rules ([#1158](https://github.com/blackbaud/skyux/issues/1158)) ([#1162](https://github.com/blackbaud/skyux/issues/1162)) ([f4b10af](https://github.com/blackbaud/skyux/commit/f4b10af7f0847b31f9db9bb7f33de06478d4f9be))
* **components/packages:** update polyfills files for library projects ([#1159](https://github.com/blackbaud/skyux/issues/1159)) ([9e4b7fc](https://github.com/blackbaud/skyux/commit/9e4b7fcb1ef6a9f03510f41f7e74c869538f49f2))

## [7.12.0](https://github.com/blackbaud/skyux/compare/7.11.1...7.12.0) (2023-03-17)


### Features

* **components/theme:** add selected input and item colors ([#1146](https://github.com/blackbaud/skyux/issues/1146)) ([533a1f8](https://github.com/blackbaud/skyux/commit/533a1f80da76d19732831ce59c168e63cfed3e5b))


### Bug Fixes

* **components/ag-grid:** relax height style rules ([#1158](https://github.com/blackbaud/skyux/issues/1158)) ([1d8de99](https://github.com/blackbaud/skyux/commit/1d8de9991a04bc98c3c0bf770d18e5b885621312))
* **components/text-editor:** only paste text once, only reinitialize editor if already rendered ([#1143](https://github.com/blackbaud/skyux/issues/1143)) ([2482c30](https://github.com/blackbaud/skyux/commit/2482c302cd955c63176e1740eba7d0c8dd951669))

## [8.0.0-alpha.11](https://github.com/blackbaud/skyux/compare/8.0.0-alpha.10...8.0.0-alpha.11) (2023-03-16)


### Features

* **components/layout:** remove margin from action button container ([#1152](https://github.com/blackbaud/skyux/issues/1152)) ([e0396d1](https://github.com/blackbaud/skyux/commit/e0396d1f4cfa5669cfb81a30e0d39ff913365d70))


### Bug Fixes

* **components/core:** apply default options for numeric service ([#1151](https://github.com/blackbaud/skyux/issues/1151)) ([7990727](https://github.com/blackbaud/skyux/commit/7990727234d71da42fe504fdb887d2caca877c13))
* **components/packages:** remove polyfills from `src/test.ts` ([#1149](https://github.com/blackbaud/skyux/issues/1149)) ([1381258](https://github.com/blackbaud/skyux/commit/1381258e65401640721860acb52e4b53ca7fa19d))

## [8.0.0-alpha.10](https://github.com/blackbaud/skyux/compare/8.0.0-alpha.9...8.0.0-alpha.10) (2023-03-15)


### Features

* **components/forms:** remove bottom margin from selection box grid ([#1141](https://github.com/blackbaud/skyux/issues/1141)) ([75e91cc](https://github.com/blackbaud/skyux/commit/75e91cc89f8241bb5ddf8e13abf7e5bbaa395a55))


### Bug Fixes

* **components/ag-grid:** avoid unneeded api calls for row selection ([#1135](https://github.com/blackbaud/skyux/issues/1135)) ([#1137](https://github.com/blackbaud/skyux/issues/1137)) ([3840d49](https://github.com/blackbaud/skyux/commit/3840d49a48eee6f866619a10673213518e1851ff))
* **components/indicators:** fix disabled token color, remove new color ([#1142](https://github.com/blackbaud/skyux/issues/1142)) ([a9c0a95](https://github.com/blackbaud/skyux/commit/a9c0a95157a943e6f644558fb7775e10604f3f2f))
* **components/layout:** remove extra toolbar space in modern ([#1148](https://github.com/blackbaud/skyux/issues/1148)) ([c4d7734](https://github.com/blackbaud/skyux/commit/c4d77348264855bb82f81d04ad00f8f12a49774d))
* **components/text-editor:** only paste text once, only reinitialize editor if already rendered ([#1143](https://github.com/blackbaud/skyux/issues/1143)) ([#1144](https://github.com/blackbaud/skyux/issues/1144)) ([04556f6](https://github.com/blackbaud/skyux/commit/04556f6f2e74e8a0a061828c6982d96cb494d843))


### Reverts

* remove requirement for `esModuleInterop` ([#1107](https://github.com/blackbaud/skyux/issues/1107)) ([#1147](https://github.com/blackbaud/skyux/issues/1147)) ([6c012b9](https://github.com/blackbaud/skyux/commit/6c012b987b6c9cb948635e35a347601c18ab533a))

## [7.11.1](https://github.com/blackbaud/skyux/compare/7.11.0...7.11.1) (2023-03-14)


### Bug Fixes

* **components/ag-grid:** avoid unneeded api calls for row selection ([#1135](https://github.com/blackbaud/skyux/issues/1135)) ([6c8f9df](https://github.com/blackbaud/skyux/commit/6c8f9df1d6566de16b7962f3014d89c8d85c3df7))

## [8.0.0-alpha.9](https://github.com/blackbaud/skyux/compare/8.0.0-alpha.8...8.0.0-alpha.9) (2023-03-14)


### Features

* **components/forms:** update selected state background colors ([#1126](https://github.com/blackbaud/skyux/issues/1126)) ([8c820dd](https://github.com/blackbaud/skyux/commit/8c820dd58905ce533743b4eb790c891897d00a55))


### Bug Fixes

* **components/indicators:** adopt `@skyux/icons@5.3.1` ([#1133](https://github.com/blackbaud/skyux/issues/1133)) ([5937000](https://github.com/blackbaud/skyux/commit/5937000d1b2fcd2ad15030062b2345ce90918ea6))

## [7.11.0](https://github.com/blackbaud/skyux/compare/7.10.1...7.11.0) (2023-03-10)


### Features

* **components/indicators:** help inline test harness ([#1124](https://github.com/blackbaud/skyux/issues/1124)) ([d418a79](https://github.com/blackbaud/skyux/commit/d418a79205600373105d65048fe032fc2462d9c9))


### Bug Fixes

* **components/ag-grid:** switch row delete overlay to only clip in stacking context ([#1123](https://github.com/blackbaud/skyux/issues/1123)) ([33b22e7](https://github.com/blackbaud/skyux/commit/33b22e7fbc2c0f931e485eaf89539ab53d42086c))

## [8.0.0-alpha.8](https://github.com/blackbaud/skyux/compare/8.0.0-alpha.7...8.0.0-alpha.8) (2023-03-10)


### ⚠ BREAKING CHANGES

* **components/layout:** Components that expect text expand repeater to have a top margin will need to be updated to compensate for the removed margin.

### Features

* **components/indicators:** help inline test harness ([#1124](https://github.com/blackbaud/skyux/issues/1124)) ([#1127](https://github.com/blackbaud/skyux/issues/1127)) ([f0e575c](https://github.com/blackbaud/skyux/commit/f0e575c2e189153419fcd143227c1b04cc9a595c))
* **components/layout:** remove top margin from text expand repeater ([#1110](https://github.com/blackbaud/skyux/issues/1110)) ([abc27bc](https://github.com/blackbaud/skyux/commit/abc27bccd3b63a5ee9c2c7930089857142a3079d))
* **components/packages:** add schematic to set `resolveJsonModule` to `true` ([#1125](https://github.com/blackbaud/skyux/issues/1125)) ([e4b00eb](https://github.com/blackbaud/skyux/commit/e4b00eb08677f9e626ce62b50bd52974b56c1725))


### Bug Fixes

* add `@types/dragula` to dependencies of packages that use ng2-dragula ([#1121](https://github.com/blackbaud/skyux/issues/1121)) ([c94669b](https://github.com/blackbaud/skyux/commit/c94669b619221fd9eaaa818a171e86becaf8579e))
* **components/ag-grid:** remove hover states for read-only data grid([#1104](https://github.com/blackbaud/skyux/issues/1104)) ([#1113](https://github.com/blackbaud/skyux/issues/1113)) ([e9c3712](https://github.com/blackbaud/skyux/commit/e9c371230479dfaf7b0f40788a2f292d0ac90e93))
* **components/ag-grid:** switch row delete overlay to only clip in stacking context ([#1123](https://github.com/blackbaud/skyux/issues/1123)) ([#1129](https://github.com/blackbaud/skyux/issues/1129)) ([2a43fd8](https://github.com/blackbaud/skyux/commit/2a43fd86c6a49f8a984ce83f54943848831ed1d3))
* **components/phone-field:** phone field inputs now animate in modern theme ([#1101](https://github.com/blackbaud/skyux/issues/1101)) ([#1115](https://github.com/blackbaud/skyux/issues/1115)) ([0e65c97](https://github.com/blackbaud/skyux/commit/0e65c97bb6e5fd40e406506177d14ce60032a4e6))
* **components/phone-field:** placeholder text displays in all themes when searching for a country ([#1098](https://github.com/blackbaud/skyux/issues/1098)) ([#1108](https://github.com/blackbaud/skyux/issues/1108)) ([541c7a7](https://github.com/blackbaud/skyux/commit/541c7a7603dc7e31d053f5b6023cddc1824a83d1))
* remove requirement for `esModuleInterop` ([#1107](https://github.com/blackbaud/skyux/issues/1107)) ([7906fd9](https://github.com/blackbaud/skyux/commit/7906fd969af407d3f92228c65d410c35498e994d))

## [7.10.1](https://github.com/blackbaud/skyux/compare/7.10.0...7.10.1) (2023-03-09)


### Bug Fixes

* **components/ag-grid:** remove hover states for read-only data grid ([#1104](https://github.com/blackbaud/skyux/issues/1104)) ([03e41c0](https://github.com/blackbaud/skyux/commit/03e41c0930ec9245025487f68573cb388eea3c1a))
* **components/phone-field:** phone field inputs now animate in modern theme ([#1101](https://github.com/blackbaud/skyux/issues/1101)) ([46b32b9](https://github.com/blackbaud/skyux/commit/46b32b9c046fcb50a3e26b4fe3b5f285ea65903f))
* **components/phone-field:** placeholder text displays in all themes when searching for a country ([#1098](https://github.com/blackbaud/skyux/issues/1098)) ([78b53aa](https://github.com/blackbaud/skyux/commit/78b53aab4a6104b2bcd4a2c8152f1687f7fd4847))

## [8.0.0-alpha.7](https://github.com/blackbaud/skyux/compare/8.0.0-alpha.6...8.0.0-alpha.7) (2023-03-08)


### ⚠ BREAKING CHANGES

* **components/packages:** A project name must be provided when a workspace has more than one project.
* **components/datetime:** The timepicker component's `timeFormat` input has been converted from a `string` input type to a `SkyTimepickerTimeFormatType` `string` union. This might cause problems if you are setting the `timeFormat` input to a type of `string` in your consuming comopnent's class.
* **components/lists:** The repeater component's `expandMode` input was set to allow values of type of `string` but it really only supported a handful of known `string` values represented by the `SkyRepeaterExpandModeType` `string` union. This ability to specify a `string` value has been removed. This might cause problems if you are setting the `expandMode` input to a type of `string` in your consuming component's class.
* **components/tabs:** The tabset nav button component's `buttonType` input was set to allow values of type of `string` but it really only supported a handful of known `string` values represented by the `SkyTabsetNavButtonType` `string` union. This ability to specify a `string` value has been removed. This might cause problems if you are setting the `buttonType` input to a type of `string` in your consuming component's class.

### Features

* **components/datetime:** update `timeFormat` type from string to string union ([#1077](https://github.com/blackbaud/skyux/issues/1077)) ([a4ac3c4](https://github.com/blackbaud/skyux/commit/a4ac3c45d1affa4ac4c76981856266f610927761))
* **components/lists:** update the `SkyRepeaterComponent` `expandMode` input to no longer support `string` values ([#1076](https://github.com/blackbaud/skyux/issues/1076)) ([b4219c4](https://github.com/blackbaud/skyux/commit/b4219c4bf6c8b5ce35f0178e916d924739bdfa1f))
* **components/packages:** make `--project` a required parameter for `ng add` schematics ([#1073](https://github.com/blackbaud/skyux/issues/1073)) ([c24d41f](https://github.com/blackbaud/skyux/commit/c24d41fca28ab6322b33c9e9c3b41c56e72bfefa))
* **components/tabs:** add `messageStream` and `tabsVisibleChanged` to sectioned form and deprecate public methods ([#1075](https://github.com/blackbaud/skyux/issues/1075)) ([fc57440](https://github.com/blackbaud/skyux/commit/fc5744035a1d3ec6159477bc7d9276cc509f4197))
* **components/tabs:** update the `SkyTabsetNavButtonComponent` `buttonType` input to no longer support `string` values ([#1074](https://github.com/blackbaud/skyux/issues/1074)) ([865acd0](https://github.com/blackbaud/skyux/commit/865acd0041633695645a2ec6d5de978be28d37ec))
* update ng2-dragula to 4.0.0 ([#1084](https://github.com/blackbaud/skyux/issues/1084)) ([a89c8a6](https://github.com/blackbaud/skyux/commit/a89c8a6a250601e5e74fa15e4f96bbddbda920a1))


### Bug Fixes

* **components/modals:** modal headers now use h2 elements to better follow accessibility standards ([#969](https://github.com/blackbaud/skyux/issues/969)) ([4365d1a](https://github.com/blackbaud/skyux/commit/4365d1a16fcd3ba4377ed08c983052b6756ba3a7))

## [8.0.0-alpha.6](https://github.com/blackbaud/skyux/compare/8.0.0-alpha.5...8.0.0-alpha.6) (2023-03-03)


### Features

* **components/indicators:** icon test harness ([#994](https://github.com/blackbaud/skyux/issues/994)) ([#1069](https://github.com/blackbaud/skyux/issues/1069)) ([a5bc29b](https://github.com/blackbaud/skyux/commit/a5bc29ba6de1e3847b5ed70fdd05aa96c0f8b95d))


### Bug Fixes

* **components/ag-grid:** set header to use default text color ([#1062](https://github.com/blackbaud/skyux/issues/1062)) ([#1067](https://github.com/blackbaud/skyux/issues/1067)) ([7e5980f](https://github.com/blackbaud/skyux/commit/7e5980f89065754e8223fe4989f1fcaa90e9311a))
* **components/modals:** remove z-index rule from modal content ([#1061](https://github.com/blackbaud/skyux/issues/1061)) ([#1064](https://github.com/blackbaud/skyux/issues/1064)) ([25fc521](https://github.com/blackbaud/skyux/commit/25fc521957cb1a7d79e90034df20f89f85564035))
* **components/packages:** add content to polyfills.ts ([#1065](https://github.com/blackbaud/skyux/issues/1065)) ([a340051](https://github.com/blackbaud/skyux/commit/a340051e3afcd5dbb4da65eb83c57b47b1cc8bd6))

## [7.10.0](https://github.com/blackbaud/skyux/compare/7.9.1...7.10.0) (2023-03-03)


### Features

* **components/indicators:** icon test harness ([#994](https://github.com/blackbaud/skyux/issues/994)) ([244eb23](https://github.com/blackbaud/skyux/commit/244eb23b284060bd61e94ac71b6295e134b356a4))


### Bug Fixes

* **components/ag-grid:** set header to use default text color ([#1062](https://github.com/blackbaud/skyux/issues/1062)) ([8aa8f7e](https://github.com/blackbaud/skyux/commit/8aa8f7ed5032371a76f1117910876ae8bbe46ca8))
* **components/modals:** remove z-index rule from modal content ([#1061](https://github.com/blackbaud/skyux/issues/1061)) ([b8380fe](https://github.com/blackbaud/skyux/commit/b8380fe92bbea016c8dee7d104614a62b3baded4))

## [8.0.0-alpha.5](https://github.com/blackbaud/skyux/compare/8.0.0-alpha.4...8.0.0-alpha.5) (2023-03-03)


### Bug Fixes

* **components/core:** only log warnings once per browser session ([#1059](https://github.com/blackbaud/skyux/issues/1059)) ([4dc1eac](https://github.com/blackbaud/skyux/commit/4dc1eac7457592f74f84c0b10c4a5e9eef3e3245))
* **components/packages:** use named export for 'update-polyfill' schematic ([#1057](https://github.com/blackbaud/skyux/issues/1057)) ([bc554d6](https://github.com/blackbaud/skyux/commit/bc554d6208329509857f290e198402e6de46fd2a))

## [8.0.0-alpha.4](https://github.com/blackbaud/skyux/compare/8.0.0-alpha.3...8.0.0-alpha.4) (2023-03-03)


### Bug Fixes

* **components/packages:** fix `update-polyfill` schematic factory path ([#1054](https://github.com/blackbaud/skyux/issues/1054)) ([02faab3](https://github.com/blackbaud/skyux/commit/02faab3fe75532f72ca94ce1282cf38f54d2049d))

## [8.0.0-alpha.3](https://github.com/blackbaud/skyux/compare/8.0.0-alpha.2...8.0.0-alpha.3) (2023-03-03)


### Features

* **components/core:** update dock component to fit within viewport ([#1022](https://github.com/blackbaud/skyux/issues/1022)) ([0e04a62](https://github.com/blackbaud/skyux/commit/0e04a62a5dea375dc1e1846c317bf84445fa44ba))


### Bug Fixes

* **components/packages:** add package.json to exports ([#1052](https://github.com/blackbaud/skyux/issues/1052)) ([0c40b65](https://github.com/blackbaud/skyux/commit/0c40b655cc3b21acd7d8329b0ae709f44d1c39af))

## [8.0.0-alpha.2](https://github.com/blackbaud/skyux/compare/8.0.0-alpha.1...8.0.0-alpha.2) (2023-03-02)


### ⚠ BREAKING CHANGES

* **components/packages:** migrate to `@skyux/packages/polyfills` in project configuration ([#1033](https://github.com/blackbaud/skyux/issues/1033))
* **components/config:** In previous major versions, query string config parameter values were not decoded when retrieving them via `SkyAppRuntimeConfigParams`. Any code that decoded these values after retrieving them should be removed.
* **components/theme:** remove unused z-index SCSS vars ([#1029](https://github.com/blackbaud/skyux/issues/1029))

### Features

* **components/config:** decode query string config params ([#1028](https://github.com/blackbaud/skyux/issues/1028)) ([e893554](https://github.com/blackbaud/skyux/commit/e89355465446a3f70761f30dd97835f6658e19ac))
* **components/core:** create stacking context service ([#1004](https://github.com/blackbaud/skyux/issues/1004)) ([#1026](https://github.com/blackbaud/skyux/issues/1026)) ([4fcac3d](https://github.com/blackbaud/skyux/commit/4fcac3d41f13903f4cac12aa3adf81c473fbba7e))
* **components/core:** only log warnings once per application instance ([#1043](https://github.com/blackbaud/skyux/issues/1043)) ([b120d90](https://github.com/blackbaud/skyux/commit/b120d90ec7236fbf46769e6588a44ed258a93d40))
* **components/packages:** migrate to `@skyux/packages/polyfills` in project configuration ([#1033](https://github.com/blackbaud/skyux/issues/1033)) ([5c200e4](https://github.com/blackbaud/skyux/commit/5c200e45a64eb4c1071b9634835339712b578e16))
* **components/theme:** remove unused z-index SCSS vars ([#1029](https://github.com/blackbaud/skyux/issues/1029)) ([e4e282d](https://github.com/blackbaud/skyux/commit/e4e282df306624ebb09d042c781b8e7a7dfffd59))
* **components/theme:** update SKY UX icons version ([#1001](https://github.com/blackbaud/skyux/issues/1001)) ([#1019](https://github.com/blackbaud/skyux/issues/1019)) ([d40c72b](https://github.com/blackbaud/skyux/commit/d40c72b1e95875038683a8f9216f0a1b98e00e23))


### Bug Fixes

* **components/ag-grid:** row delete overlay did not show in modal ([#981](https://github.com/blackbaud/skyux/issues/981)) ([#1031](https://github.com/blackbaud/skyux/issues/1031)) ([9a83aad](https://github.com/blackbaud/skyux/commit/9a83aadd885396b7eed8a0e33d5c4675bc1afc1e))
* **components/ag-grid:** support domlayout normal option for layout ([#1011](https://github.com/blackbaud/skyux/issues/1011)) ([#1030](https://github.com/blackbaud/skyux/issues/1030)) ([a98c3e1](https://github.com/blackbaud/skyux/commit/a98c3e1eda1266f7afbbe57f99377be44ae8180e))
* **components/datetime:** apply stacking context ([#1035](https://github.com/blackbaud/skyux/issues/1035)) ([#1040](https://github.com/blackbaud/skyux/issues/1040)) ([7e9d6b9](https://github.com/blackbaud/skyux/commit/7e9d6b931c5e08c4a3fd17b63a3abdbbbba6234a))
* **components/forms:** only apply indeterminate styling to checkboxes ([#1016](https://github.com/blackbaud/skyux/issues/1016)) ([#1027](https://github.com/blackbaud/skyux/issues/1027)) ([95884e9](https://github.com/blackbaud/skyux/commit/95884e969d56222082d22330ad614aaade6ade76))
* **components/lookup:** apply stacking context ([#1036](https://github.com/blackbaud/skyux/issues/1036)) ([#1042](https://github.com/blackbaud/skyux/issues/1042)) ([21eca39](https://github.com/blackbaud/skyux/commit/21eca396f5a029c0003f75be91f38f4d613aacb9))
* **components/packages:** remove v7 update schematics ([#1025](https://github.com/blackbaud/skyux/issues/1025)) ([890fa75](https://github.com/blackbaud/skyux/commit/890fa75268f2604de00598551a7fb37c855e5b6c))
* **components/popovers:** apply stacking context ([#1037](https://github.com/blackbaud/skyux/issues/1037)) ([#1041](https://github.com/blackbaud/skyux/issues/1041)) ([8591a33](https://github.com/blackbaud/skyux/commit/8591a3334c422bf37241a79492570f51fbf7660a))

## [7.9.1](https://github.com/blackbaud/skyux/compare/7.9.0...7.9.1) (2023-03-01)


### Bug Fixes

* **components/datetime:** apply stacking context ([#1035](https://github.com/blackbaud/skyux/issues/1035)) ([f1dc230](https://github.com/blackbaud/skyux/commit/f1dc230dd94ae881caa3f0bc5846335f45272495))
* **components/lookup:** apply stacking context ([#1036](https://github.com/blackbaud/skyux/issues/1036)) ([4afeafb](https://github.com/blackbaud/skyux/commit/4afeafb0105d6eb289e71e24ed4f187509ebf13a))
* **components/popovers:** apply stacking context ([#1037](https://github.com/blackbaud/skyux/issues/1037)) ([746874f](https://github.com/blackbaud/skyux/commit/746874f9b0d9fd39a6e52b815a24f0cf6b54c677))

## [7.9.0](https://github.com/blackbaud/skyux/compare/7.8.1...7.9.0) (2023-02-28)


### Features

* **components/core:** create stacking context service ([#1004](https://github.com/blackbaud/skyux/issues/1004)) ([6500101](https://github.com/blackbaud/skyux/commit/6500101c41403e52f29c5fffaac63bdfdf376b3a))
* **components/core:** update dock component to fit within viewport ([#1022](https://github.com/blackbaud/skyux/issues/1022)) ([c4198f7](https://github.com/blackbaud/skyux/commit/c4198f7ca5b55d3ecf7540c1c2fcc0f33ddff5a2))

### Bug Fixes

* **components/ag-grid:** row delete overlay did not show in modal ([#981](https://github.com/blackbaud/skyux/issues/981)) ([992403b](https://github.com/blackbaud/skyux/commit/992403b7a5dcd93ef1a09b404625da85d6b8b73e))
* **components/ag-grid:** support domlayout normal option for layout ([#1011](https://github.com/blackbaud/skyux/issues/1011)) ([4b905ff](https://github.com/blackbaud/skyux/commit/4b905ff6303d1797ccd4077085b1cc1432e6acea))

## [8.0.0-alpha.1](https://github.com/blackbaud/skyux/compare/8.0.0-alpha.0...8.0.0-alpha.1) (2023-02-27)


### Bug Fixes

* **components/ag-grid:** adjust a11y test for ag-grid ([#1012](https://github.com/blackbaud/skyux/issues/1012)) ([#1013](https://github.com/blackbaud/skyux/issues/1013)) ([7a97686](https://github.com/blackbaud/skyux/commit/7a97686e81a4c554482ad80b3a4750cc4660a562))
* **components/ag-grid:** support right-align header in AG Grid 28 ([#998](https://github.com/blackbaud/skyux/issues/998)) ([#1008](https://github.com/blackbaud/skyux/issues/1008)) ([1de3f99](https://github.com/blackbaud/skyux/commit/1de3f9982cb76be64f7b7aaec1b53f162bebf24e))
* **components/core:** add clip-path option for overlay ([#980](https://github.com/blackbaud/skyux/issues/980)) ([#1010](https://github.com/blackbaud/skyux/issues/1010)) ([d2df897](https://github.com/blackbaud/skyux/commit/d2df89777a337ff160a17301bd70744b204254a4))
* **components/packages:** include `ng add` template files in public exports ([#1015](https://github.com/blackbaud/skyux/issues/1015)) ([b087324](https://github.com/blackbaud/skyux/commit/b087324015e58463f56bc9a94482bf11d287a5ec))
* **components/text-editor:** content is only pasted once into the text editor ([#997](https://github.com/blackbaud/skyux/issues/997)) ([dd99d3c](https://github.com/blackbaud/skyux/commit/dd99d3cfbc08d2707210f264071ee1e2b13e3788))

## [7.8.1](https://github.com/blackbaud/skyux/compare/7.8.0...7.8.1) (2023-02-27)


### Bug Fixes

* **components/ag-grid:** adjust a11y test for ag-grid ([#1012](https://github.com/blackbaud/skyux/issues/1012)) ([0c7ba9e](https://github.com/blackbaud/skyux/commit/0c7ba9ed3b26703eb7e4bf95c1f878be2e3968ed))
* **components/ag-grid:** support right-align header in AG Grid 28 ([#998](https://github.com/blackbaud/skyux/issues/998)) ([99c6cab](https://github.com/blackbaud/skyux/commit/99c6cab96186622d72e562bd65c8988c40a74728))
* **components/core:** add clip-path option for overlay ([#980](https://github.com/blackbaud/skyux/issues/980)) ([1707f8d](https://github.com/blackbaud/skyux/commit/1707f8d4f4a5c9c82c81d86770511f58b6170430))
* **components/forms:** only apply indeterminate styling to checkboxes ([#1016](https://github.com/blackbaud/skyux/issues/1016)) ([a0d2215](https://github.com/blackbaud/skyux/commit/a0d221547ce92529ebcb34a9ede6c7beb8933c08))
* **components/text-editor:** content is only pasted once into the text editor ([#997](https://github.com/blackbaud/skyux/issues/997)) ([#1006](https://github.com/blackbaud/skyux/issues/1006)) ([902584b](https://github.com/blackbaud/skyux/commit/902584b13d79e2c807752004adbf48aa94959b31))

## [7.8.0](https://github.com/blackbaud/skyux/compare/7.7.0...7.8.0) (2023-02-17)


### Features

* **components/theme:** update SKY UX icons version ([#1001](https://github.com/blackbaud/skyux/issues/1001)) ([8b4227c](https://github.com/blackbaud/skyux/commit/8b4227c7dbd406f5d82d45e8bfbf1d7ba11140ea))

## [8.0.0-alpha.0](https://github.com/blackbaud/skyux/compare/7.6.1...8.0.0-alpha.0) (2023-02-17)


### ⚠ BREAKING CHANGES

* support Angular 15 ([#984](https://github.com/blackbaud/skyux/issues/984))

### Features

* support Angular 15 ([#984](https://github.com/blackbaud/skyux/issues/984)) ([4cef2d0](https://github.com/blackbaud/skyux/commit/4cef2d07aa52a178f78ac5faacf483f4f7a94df8))


### Bug Fixes

* **components/ag-grid:** address accessibility test issues ([#982](https://github.com/blackbaud/skyux/issues/982)) ([#987](https://github.com/blackbaud/skyux/issues/987)) ([25f3dff](https://github.com/blackbaud/skyux/commit/25f3dff658bd8fcc84e1b2cad12ba150fb2ff306))
* **components/ag-grid:** apply lookup addClick handler ([#992](https://github.com/blackbaud/skyux/issues/992)) ([#999](https://github.com/blackbaud/skyux/issues/999)) ([257114a](https://github.com/blackbaud/skyux/commit/257114acef2b485119fd9b6f7807234ae017e52a))

## [7.7.0](https://github.com/blackbaud/skyux/compare/7.6.2...7.7.0) (2023-02-16)


### Features

* **components/action-bars:** update summary action bar to respect reserved viewport space ([#993](https://github.com/blackbaud/skyux/issues/993)) ([f0c7b19](https://github.com/blackbaud/skyux/commit/f0c7b1927ac2ebcf28ec384df70905079002a95f))


### Bug Fixes

* **components/ag-grid:** apply lookup addClick handler ([#992](https://github.com/blackbaud/skyux/issues/992)) ([86cba17](https://github.com/blackbaud/skyux/commit/86cba17923a18358c8fbd611c4517962fef79d63))
* **components/lookup:** pass `wrapperClass` to selection modal ([#996](https://github.com/blackbaud/skyux/issues/996)) ([d6786de](https://github.com/blackbaud/skyux/commit/d6786debfb700241c6eb1b51bdb20bec7778b981))

## [7.6.2](https://github.com/blackbaud/skyux/compare/7.6.1...7.6.2) (2023-02-14)


### Bug Fixes

* **components/ag-grid:** address accessibility test issues ([#982](https://github.com/blackbaud/skyux/issues/982)) ([8c1ad68](https://github.com/blackbaud/skyux/commit/8c1ad68e30b4bad30302c2ffdd0c616d83c86589))

## [7.6.1](https://github.com/blackbaud/skyux/compare/7.6.0...7.6.1) (2023-02-07)


### Bug Fixes

* **components/ag-grid:** expand the click target for column sorting ([#974](https://github.com/blackbaud/skyux/issues/974)) ([48a153b](https://github.com/blackbaud/skyux/commit/48a153b168b924573bc176d8150f97034a234e4d))
* **components/flyout:** remove unneeded optional chaining in template ([#970](https://github.com/blackbaud/skyux/issues/970)) ([adac559](https://github.com/blackbaud/skyux/commit/adac55909e5a2ab1cb5930930d230a64c397232e))

## [7.6.0](https://github.com/blackbaud/skyux/compare/7.5.0...7.6.0) (2023-02-03)


### Features

* **components/modals:** use Angular CDK focus trap within modals ([#955](https://github.com/blackbaud/skyux/issues/955)) ([c9b17b4](https://github.com/blackbaud/skyux/commit/c9b17b430e690f73c71a87cada674cbb801fc804))


### Bug Fixes

* **components/ag-grid:** header should respect sortable column config ([#971](https://github.com/blackbaud/skyux/issues/971)) ([2454aa0](https://github.com/blackbaud/skyux/commit/2454aa0bf83f37dee53bb1b7477d73f5bf9b129b))
* **components/core:** fix bug in numeric service truncateAfter not respecting 0 as valid value ([#961](https://github.com/blackbaud/skyux/issues/961)) ([935cae6](https://github.com/blackbaud/skyux/commit/935cae68ad9213a286d32c5f413bcde23f33cc49))
* **components/core:** use relative environment injector when dynamically generating components ([#952](https://github.com/blackbaud/skyux/issues/952)) ([667123c](https://github.com/blackbaud/skyux/commit/667123c03776101d778fac54f33b3181be911731))


### Reverts

* feat(components/modals): use Angular CDK focus trap within modals ([#962](https://github.com/blackbaud/skyux/issues/962)) ([283fc36](https://github.com/blackbaud/skyux/commit/283fc365198a8687328f5faa01059fdb0e39d972))


### Deprecations

* **components/modals:** tiles inside modals are deprecated; use an alternative design instead ([#965](https://github.com/blackbaud/skyux/issues/965)) ([36ddac8](https://github.com/blackbaud/skyux/commit/36ddac816725bb7e8a3f223f00f0496bc548b6cc))

## [7.5.0](https://github.com/blackbaud/skyux/compare/7.4.2...7.5.0) (2023-01-25)


### Features

* **components/router:** test harness for skyhref ([#934](https://github.com/blackbaud/skyux/issues/934)) ([1a2d7ef](https://github.com/blackbaud/skyux/commit/1a2d7ef28e100a30d2a5d755b7a4532830d2e318))


### Bug Fixes

* **components/packages:** remove Stache libraries from `ng update` package group ([#946](https://github.com/blackbaud/skyux/issues/946)) ([24bb1a9](https://github.com/blackbaud/skyux/commit/24bb1a9281c479bc334c4b7aa65997e690b62d5f))
* **components/progress-indicator:** all items are shown for waterfall progress indicators ([#954](https://github.com/blackbaud/skyux/issues/954)) ([05e7333](https://github.com/blackbaud/skyux/commit/05e7333a983b257624d68a2ba6e1f951c1235cde))
* **components/tiles:** fix appending tile components with injected dependencies ([#945](https://github.com/blackbaud/skyux/issues/945)) ([ab99728](https://github.com/blackbaud/skyux/commit/ab9972882aa42916f83fd72640960cd037d8b487))

## [7.4.2](https://github.com/blackbaud/skyux/compare/7.4.1...7.4.2) (2023-01-23)


### Bug Fixes

* **components/text-editor:** fix bug where setting autofocus and initial value before view init threw runtime error ([#947](https://github.com/blackbaud/skyux/issues/947)) ([2fc3cb4](https://github.com/blackbaud/skyux/commit/2fc3cb4d735d5735ed022299590d5c1635607a06))

## [7.4.1](https://github.com/blackbaud/skyux/compare/7.4.0...7.4.1) (2023-01-20)


### Bug Fixes

* **components/indicators:** add `display: block` to alert host component ([#939](https://github.com/blackbaud/skyux/issues/939)) ([4e9f744](https://github.com/blackbaud/skyux/commit/4e9f744d2bcaded42a489c5c34a8450fe0e3a688))
* **components/layout:** set `sm` breakpoint for action buttons without parent elements ([#944](https://github.com/blackbaud/skyux/issues/944)) ([3a93a3d](https://github.com/blackbaud/skyux/commit/3a93a3d68e3ffa334fd8286a049d1f87492671a5))
* **components/lookup:** make selection modal harness visible to docs ([#941](https://github.com/blackbaud/skyux/issues/941)) ([bca8e18](https://github.com/blackbaud/skyux/commit/bca8e185d5ce70a626379bf75398256f0873fe09))
* **components/tiles:** render tile dashboard if config is set after init ([#943](https://github.com/blackbaud/skyux/issues/943)) ([ae8e305](https://github.com/blackbaud/skyux/commit/ae8e305f59a85a47f4479b2db82afda9f29fe863))

## [7.4.0](https://github.com/blackbaud/skyux/compare/7.3.0...7.4.0) (2023-01-18)


### Features

* **components/lookup:** add selection modal service ([#931](https://github.com/blackbaud/skyux/issues/931)) ([7d6bc6e](https://github.com/blackbaud/skyux/commit/7d6bc6e40fdbee577353e82e48be756139b0f6b1))


### Bug Fixes

* **components/colorpicker:** colorpicker selection change updates both reactive forms and template forms ([#926](https://github.com/blackbaud/skyux/issues/926)) ([4e7b735](https://github.com/blackbaud/skyux/commit/4e7b73519320b705ca64fe842ede2a72c0adba5b))

## [7.3.0](https://github.com/blackbaud/skyux/compare/7.2.0...7.3.0) (2023-01-13)


### Features

* **components/a11y:** skip link test harness ([#920](https://github.com/blackbaud/skyux/issues/920)) ([9964051](https://github.com/blackbaud/skyux/commit/9964051fd6df74272213c7463df27af5d3e50d68))
* **components/indicators:** wait test harness ([#919](https://github.com/blackbaud/skyux/issues/919)) ([dcc958b](https://github.com/blackbaud/skyux/commit/dcc958bfac4558f92b444d97f94cc158a5b4b9f8))


### Bug Fixes

* **components/flyout:** flyout close button is visible ([#930](https://github.com/blackbaud/skyux/issues/930)) ([a2939e6](https://github.com/blackbaud/skyux/commit/a2939e6156c2f52ac059f85c09cd1ca80f4a3fcf))

## [7.2.0](https://github.com/blackbaud/skyux/compare/7.1.4...7.2.0) (2023-01-11)


### Features

* **components/theme:** switch to css custom properties ([#905](https://github.com/blackbaud/skyux/issues/905)) ([01381b7](https://github.com/blackbaud/skyux/commit/01381b705f7d7da276fd61270be824ec1ac4f195))


### Reverts

* **components/indicators:** `SkyWaitService`'s `blockingWrap` and `nonBlockingWrap` methods now take in argument objects and the versions which take in an `Observable` are deprecated ([#922](https://github.com/blackbaud/skyux/pull/922)) ([36bd04](https://github.com/blackbaud/skyux/commit/36bd04507058c925a68c4a2cd778356b843defac))

## [7.1.4](https://github.com/blackbaud/skyux/compare/7.1.3...7.1.4) (2023-01-09)


### Bug Fixes

* **components/packages:** ng-add install current @angular/cdk ([#916](https://github.com/blackbaud/skyux/issues/916)) ([3b2118f](https://github.com/blackbaud/skyux/commit/3b2118f1ef6ed4d7da51f8fba8fd578795cb3bf3))

## [7.1.3](https://github.com/blackbaud/skyux/compare/7.1.2...7.1.3) (2023-01-06)


### Bug Fixes

* **components/config:** add `angularSettings` to `SkyuxConfig` ([#915](https://github.com/blackbaud/skyux/issues/915)) ([99a5d92](https://github.com/blackbaud/skyux/commit/99a5d929e42ad0ab25d0eeb3f04d7695e51f80e6))
* **components/forms:** inline help within an input box now displays focus only around the help inline ([#899](https://github.com/blackbaud/skyux/issues/899)) ([1acb5c4](https://github.com/blackbaud/skyux/commit/1acb5c4c4a2c8b19cc28c7d787dd17e49892fcf3))
* **components/forms:** selection box no longer errors if responsive classes are updated prior to Angular fully rendering parent elements ([#910](https://github.com/blackbaud/skyux/issues/910)) ([e08316c](https://github.com/blackbaud/skyux/commit/e08316c108a7e499610b5d5fcf1d2ee049fa0f27))
* **sdk/e2e-schematics:** bug fixes during component-e2e and story generation ([#904](https://github.com/blackbaud/skyux/issues/904)) ([c2e54a8](https://github.com/blackbaud/skyux/commit/c2e54a83dfc6a0b64a10086aa48b7177e8130427))
* **sdk/prettier-schematics:** configure Prettier if .vscode folder exists ([#914](https://github.com/blackbaud/skyux/issues/914)) ([17ba286](https://github.com/blackbaud/skyux/commit/17ba286193c0979531e5dd4d4466428da19fc3f2))

## [7.1.2](https://github.com/blackbaud/skyux/compare/7.1.1...7.1.2) (2022-12-22)


### Bug Fixes

* **components/forms:** remove checkbox label margin when field is required ([#897](https://github.com/blackbaud/skyux/issues/897)) ([9241c55](https://github.com/blackbaud/skyux/commit/9241c55e41c53f0a89a63728e5f8b22951610341))
* **components/forms:** update file attachment button label to match updated standards ([#894](https://github.com/blackbaud/skyux/issues/894)) ([8e642c6](https://github.com/blackbaud/skyux/commit/8e642c618932d1984504e140bdc14d7fa0003c5a))


### Deprecations

* **components/indicators:** `SkyWaitService`'s `blockingWrap` and `nonBlockingWrap` methods now take in argument objects and the versions which take in an `Observable` are deprecated ([#900](https://github.com/blackbaud/skyux/issues/900)) ([55faaa2](https://github.com/blackbaud/skyux/commit/55faaa28424e388271aa33a17de80d7f08e225cb))

## [7.1.1](https://github.com/blackbaud/skyux/compare/7.1.0...7.1.1) (2022-12-16)


### Bug Fixes

* **components/lookup:** show more modal populates with current search text when triggered via the search button ([#885](https://github.com/blackbaud/skyux/issues/885)) ([da86ddf](https://github.com/blackbaud/skyux/commit/da86ddfb40702c27d9959a3e3a37c3cd1bab4d48))
* **components/modals:** ensure confirmation modals include accessibility labels ([#888](https://github.com/blackbaud/skyux/issues/888)) ([2225c3a](https://github.com/blackbaud/skyux/commit/2225c3a65c5c3732803f83f67379d07f54ec3919))

## [7.1.0](https://github.com/blackbaud/skyux/compare/7.0.0...7.1.0) (2022-12-14)


### Features

* **components/indicators:** update key-info to use css custom properties ([#884](https://github.com/blackbaud/skyux/issues/884)) ([31c661f](https://github.com/blackbaud/skyux/commit/31c661ff742ba3c05fccceebf1e73ca67c436f65))
* **components/packages:** update package group versions ([#877](https://github.com/blackbaud/skyux/issues/877)) ([f932ed0](https://github.com/blackbaud/skyux/commit/f932ed09f5e0002e256c5536ccc1752dedc9db94))


### Bug Fixes

* **components/core:** hide viewkeeper overflow ([#880](https://github.com/blackbaud/skyux/issues/880)) ([60882fc](https://github.com/blackbaud/skyux/commit/60882fc7181f425b18a8d41ddb682f5541bf0d27))
* **components/flyout:** viewkeeper z-index adjustment ([#873](https://github.com/blackbaud/skyux/issues/873)) ([a8d7393](https://github.com/blackbaud/skyux/commit/a8d73934fa8490c8c205b52819386d022763b902))
* **components/indicators:** satisfy color contrast rules in modern theme ([#748](https://github.com/blackbaud/skyux/issues/748)) ([0a43a91](https://github.com/blackbaud/skyux/commit/0a43a9155bbc3aa12e7f9ed36f429572dfc23f8a))
* **components/modals:** viewkeeper z-index adjustment ([#876](https://github.com/blackbaud/skyux/issues/876)) ([4925dd9](https://github.com/blackbaud/skyux/commit/4925dd98666e244e461a0811a40261066d4da67d))

## [7.0.0](https://github.com/blackbaud/skyux/compare/7.0.0-beta.19...7.0.0) (2022-12-05)


### ⚠ BREAKING CHANGES

* **components/ag-grid:** upgrade to [AG Grid 28](https://www.ag-grid.com/changelog/?fixVersion=28.0.0), which includes breaking changes
* **components/config:** The config params `get` function was updated to accurately reflect that it may return undefined. To address this change, account for a possible undefined value wherever you are using the `get` function.
* **components/datetime:** The 'SkyFuzzyDatepickerInputDirective' included a nonfunctional input 'skyFuzzyDatepickerInput' to support backward compatibility. The input can be removed from consumer templates without loss of functionality.
* **components/errors:** Unit tests that expect this extra whitespace will need to be updated.
* **components/forms:** The `SkyFileDrop` and `SkyFileAttachment` components' `validateFn` input type was updated to receive a `SkyFileType` parameter and return a string or undefined. To address this, ensure all `validateFn` inputs have the correct parameter and return types.
* **components/forms:** The radio component's `radioType` input was set to a type of `string`, but it really only accepts a handful of known string values. These values are represented by the new `SkyRadioType` string union. This might cause problems if you are setting the `radioType` input to a type of `string` in your consuming component's class.
* **components/forms:** This change updates the `SkyCheckboxChange` type to be an interface instead of a class. To address this, remove any instances of instantiating the `SkyCheckboxChange` class and instead create an object that uses the interface type.
* **components/forms:** use `EventEmitter` for radio component outputs (#732)
* **components/indicators:** This change removes support for `alertType` on the alert component being an unaccepted string. To address this change, change the `alertType` to an accepted `SkyIndicatorTypeIcon` or remove it to use the default `alertType` of `'warning'`.
* **components/indicators:** This change updates the types accepted by the key info component's layout property. To address this change, only pass 'horizontal' or 'vertical' to the property, and use the type `SkyKeyInfoLayoutType` if typing variables.
* **components/layout:** This change removes the `SkyFluidGridGutterSize` enum and the numerical options (0, 1, 2) from `SkyFluidGridGutterSizeType`. To address this, only use the strings 'small', 'medium', and 'large' for  the fluid grid component's `gutterSize` property, and use `SkyFluidGridGutterSizeType` for Typescript typing.
* **components/modals:** `dynamicComponentService` is now a required parameter of `SkyModalService`. To address this change, provide the `dynamicComponentService` wherever you are constructing the `SkyModalService` or any mocks extending it  for unit testing.
* **components/modals:** `SkyConfirmButton`'s `styleType` will only accept predefined strings of type `SkyConfirmButtonStyleType`. To address this, ensure `styleType` is only being set to a supported value.
* **components/modals:** `SkyModalConfigurationInterface.providers` accepts an array of `StaticProvider`s instead of any value.
* **components/modals:** The `SkyConfirmButton` component is intended for internal use only and is removed from the exported API. To address this, remove any usages of the `SkyConfirmButton` component.
* **components/tabs:** This change removes support for not using a finish navigation button with the previous and next wizard navigation buttons. To address this change, remove other save or finish buttons and use the `sky-tabset-nav-button` of type `finish` instead.
* add support for Angular 14 (#539)

### Features

* **components/ag-grid:** add inline help support using custom header components ([#787](https://github.com/blackbaud/skyux/issues/787)) ([809bac6](https://github.com/blackbaud/skyux/commit/809bac657cddcc5994ee140cd82910754baf8e3a))
* **components/ag-grid:** upgrade to AG Grid 28 ([#617](https://github.com/blackbaud/skyux/issues/617)) ([2c1e2ad](https://github.com/blackbaud/skyux/commit/2c1e2adfc3546b630e9d124eeaf9e95d9c9aa4fa))
* **components/angular-tree-component:** add inline help support for angular tree component ([#659](https://github.com/blackbaud/skyux/issues/659)) ([3fbabf2](https://github.com/blackbaud/skyux/commit/3fbabf28cb406a220aa4d7dbfe282b8a81e6365a))
* **components/autonumeric:** change autonumeric from a dependency to a peer dependency ([#741](https://github.com/blackbaud/skyux/issues/741)) ([b1e4706](https://github.com/blackbaud/skyux/commit/b1e47060e1f095c95b1753ce7a8248715c9f8618))
* **components/config:** add more specific typing to config params function return types ([#668](https://github.com/blackbaud/skyux/issues/668)) ([102cd0a](https://github.com/blackbaud/skyux/commit/102cd0a97a5b64c78e469b462fe1f59601e44557))
* **components/core:** add ability to provide a parent injector when constructing components via the `SkyDynamicComponentService` ([#793](https://github.com/blackbaud/skyux/issues/793)) ([5b3fefa](https://github.com/blackbaud/skyux/commit/5b3fefab6b84e7144c641f97fe6668c9f4cf4b29))
* **components/datetime:** make 'moment' a peer dependency ([#615](https://github.com/blackbaud/skyux/issues/615)) ([9bb61f9](https://github.com/blackbaud/skyux/commit/9bb61f92acdb976d39fc3bc9fc179d63d0ef6ae7))
* **components/forms:** change `SkyCheckboxChange` type to an interface ([#597](https://github.com/blackbaud/skyux/issues/597)) ([2c3c1e9](https://github.com/blackbaud/skyux/commit/2c3c1e9643c7008f91aad6138aa7649aa095aa97))
* **components/forms:** change radio component's `radioType` input property to be more strongly typed ([34e9332](https://github.com/blackbaud/skyux/commit/34e933208706bea063ef95de57568a9b3488e706))
* **components/forms:** support status indicator errors for input box ([#633](https://github.com/blackbaud/skyux/issues/633)) ([#695](https://github.com/blackbaud/skyux/issues/695)) ([7d15414](https://github.com/blackbaud/skyux/commit/7d15414f4d5bdae50b5352d6d73354642376bdc2))
* **components/forms:** update file attachment validateFn inputs to more specific type ([#669](https://github.com/blackbaud/skyux/issues/669)) ([95b7ab5](https://github.com/blackbaud/skyux/commit/95b7ab59f6352a591dcff17da5d76c3e9c4d3325))
* **components/indicators:** change `alertType` to `SkyIndicatorIconType` ([#683](https://github.com/blackbaud/skyux/issues/683)) ([9081186](https://github.com/blackbaud/skyux/commit/90811866e56e772f95422db308ed7caf801cfac0))
* **components/indicators:** remove bottom margin from alert component ([#648](https://github.com/blackbaud/skyux/issues/648)) ([5bd8762](https://github.com/blackbaud/skyux/commit/5bd87621ba412cebb38285b6e9ece256e07bbe6b))
* **components/indicators:** remove support for key info layout string type ([#587](https://github.com/blackbaud/skyux/issues/587)) ([ffac254](https://github.com/blackbaud/skyux/commit/ffac254c75e600f044147a6ed5946eafee75e8c9))
* **components/indicators:** update inline help emitter type to void ([#584](https://github.com/blackbaud/skyux/issues/584)) ([878b6de](https://github.com/blackbaud/skyux/commit/878b6ded9c2c2d967af751e52a64d1ce2a1be741))
* **components/layout:** remove deprecated fluid grid gutter size options ([#585](https://github.com/blackbaud/skyux/issues/585)) ([338771d](https://github.com/blackbaud/skyux/commit/338771d3d43d96c057aa0957fc8a401d1a761ac9))
* **components/lists:** show sort button caret on small screens ([#774](https://github.com/blackbaud/skyux/issues/774)) ([2be4513](https://github.com/blackbaud/skyux/commit/2be4513b5d142d05d20bae4e3c98888563ddd0b5))
* **components/lists:** sort and tabs dropdown style tweaks ([#851](https://github.com/blackbaud/skyux/issues/851)) ([d6c6a99](https://github.com/blackbaud/skyux/commit/d6c6a999299f935914523e8e2bf0e7fabc6143ec))
* **components/lookup:** deprecate search inputs ([#647](https://github.com/blackbaud/skyux/issues/647)) ([74396bb](https://github.com/blackbaud/skyux/commit/74396bb18906e82e86fa920276c8f709bd5b0143))
* **components/modals:** add inline-help support for modals ([#598](https://github.com/blackbaud/skyux/issues/598)) ([92b49c9](https://github.com/blackbaud/skyux/commit/92b49c9e1e084e70ed1b03fad2683cc51fc3f265))
* **components/modals:** improve `SkyModalConfigurationInterface.providers` type ([#665](https://github.com/blackbaud/skyux/issues/665)) ([a65dae0](https://github.com/blackbaud/skyux/commit/a65dae0642b45764fed92d9671e2830e0f1cc24e))
* **components/modals:** make `dynamicComponentService` required in `SkyModalService` constructor ([#674](https://github.com/blackbaud/skyux/issues/674)) ([c7c60f2](https://github.com/blackbaud/skyux/commit/c7c60f273c8bb988bcd7908282ba623723e861e0))
* **components/modals:** remove 'string' from `SkyConfirmButton`'s `styleType` type ([#664](https://github.com/blackbaud/skyux/issues/664)) ([8fda84e](https://github.com/blackbaud/skyux/commit/8fda84ebf9afa68e0c436578dbb6177f6cc7bfdd))
* **components/modals:** remove public export of confirm button ([#656](https://github.com/blackbaud/skyux/issues/656)) ([f465207](https://github.com/blackbaud/skyux/commit/f46520739ebf874d759efa372a809d19cee3afb6))
* **components/popovers:** improve dropdown styling ([#818](https://github.com/blackbaud/skyux/issues/818)) ([da10e69](https://github.com/blackbaud/skyux/commit/da10e696d5b01d44df3f29d7b650d6f567703012))
* **components/progress-indicator:** add inline-help support for progress indicator ([#599](https://github.com/blackbaud/skyux/issues/599)) ([ac3ec1f](https://github.com/blackbaud/skyux/commit/ac3ec1f4c2c2a3c0483b503b253cd7e8460ba72f))
* **components/tabs:** add descriptive aria label to tab buttons ([#586](https://github.com/blackbaud/skyux/issues/586)) ([#660](https://github.com/blackbaud/skyux/issues/660)) ([9a01d54](https://github.com/blackbaud/skyux/commit/9a01d549d498a9616d16aae4e3334b878372da3e))
* **components/tabs:** remove support for not using a finish nav button ([#618](https://github.com/blackbaud/skyux/issues/618)) ([cdd8a8f](https://github.com/blackbaud/skyux/commit/cdd8a8f4a58bb072bf93553d5f97509c4882e644))
* **components/tabs:** wizard keyboard nav and roles ([#558](https://github.com/blackbaud/skyux/issues/558)) ([49c7872](https://github.com/blackbaud/skyux/commit/49c7872239f9bacbc52839ab1d5d59b342186597))
* **components/tiles:** add inline help support for tile dashboard ([#563](https://github.com/blackbaud/skyux/issues/563)) ([#567](https://github.com/blackbaud/skyux/issues/567)) ([2377a7f](https://github.com/blackbaud/skyux/commit/2377a7f9ecf5af8616a4b5fee5da9bcd14c6d73d))
* **components/toast:** improve toast service `openComponent` `component` param type ([#667](https://github.com/blackbaud/skyux/issues/667)) ([8ffa182](https://github.com/blackbaud/skyux/commit/8ffa182538269488b561fda377dc677927f0e227))
* **sdk/testing:** add support for `axe-core@^4.5.2` ([#822](https://github.com/blackbaud/skyux/issues/822)) ([095509a](https://github.com/blackbaud/skyux/commit/095509a86cb9b3b2c6542670d270c953993ab9ad))
* **sdk/testing:** change axe-core from a dependency to a peer dependency ([#746](https://github.com/blackbaud/skyux/issues/746)) ([bbef42a](https://github.com/blackbaud/skyux/commit/bbef42a2793ce8ac88e21a52e43a3ae41efa1e92))
* add support for Angular 14 ([#539](https://github.com/blackbaud/skyux/issues/539)) ([bc28ca0](https://github.com/blackbaud/skyux/commit/bc28ca0df0183146f92482c396409d0369ae4532))
* add support for Angular 14.2.11 ([#854](https://github.com/blackbaud/skyux/issues/854)) ([9277c58](https://github.com/blackbaud/skyux/commit/9277c58daebd9ec2c8f3a8a36d2cd77ac641e252))
* update page and split view components to support docking content to the available viewport ([#688](https://github.com/blackbaud/skyux/issues/688)) ([158b262](https://github.com/blackbaud/skyux/commit/158b2627db4ab6a14a1d4e049a29b50280d36ec3))

### Bug Fixes

* **apps/code-examples:** fix data entry grid inline help example ([#853](https://github.com/blackbaud/skyux/issues/853)) ([0d55bf7](https://github.com/blackbaud/skyux/commit/0d55bf75720cee1f581c64ed9f2e207480ec793e))
* **components/ag-grid:** option to show horizontal scrollbar at top when using trackpad ([#552](https://github.com/blackbaud/skyux/issues/552)) ([#578](https://github.com/blackbaud/skyux/issues/578)) ([1f2d314](https://github.com/blackbaud/skyux/commit/1f2d31425158002940f5379db35d23e9c45463d6))
* **components/ag-grid:** remove `const` from `enum SkyCellClass` ([#844](https://github.com/blackbaud/skyux/issues/844)) ([4dcfa1e](https://github.com/blackbaud/skyux/commit/4dcfa1ee57dc77dd148e9518a452cd846fbfdfc3))
* **components/ag-grid:** remove aria-label from currency cell renderer ([#750](https://github.com/blackbaud/skyux/issues/750)) ([1343d3d](https://github.com/blackbaud/skyux/commit/1343d3d7efaa649f092e1d1d6bd551012178108b))
* **components/angular-tree-component:** replace aria-owns with adjustments to the tree node markup ([#758](https://github.com/blackbaud/skyux/issues/758)) ([beb0a21](https://github.com/blackbaud/skyux/commit/beb0a21608d59f71c3d7ade80398efd0a619570b))
* **components/angular-tree-component:** set 'aria-owns' to address a11y violation ([#666](https://github.com/blackbaud/skyux/issues/666)) ([cab7dae](https://github.com/blackbaud/skyux/commit/cab7dae2fcbb3eb9ce4a0efe9793995aedd52ddd))
* **components/data-manager:** mark for check when isActive changes ([#810](https://github.com/blackbaud/skyux/issues/810)) ([cf72fec](https://github.com/blackbaud/skyux/commit/cf72fec594ad05fa27da7247fe9a5c34f40e1505))
* **components/datetime:** remove nonfunctional 'skyFuzzyDatepickerInput' input from fuzzy date ([#591](https://github.com/blackbaud/skyux/issues/591)) ([b86e0ae](https://github.com/blackbaud/skyux/commit/b86e0aea90565d4f4e0c84041b1c02db15c53bbd))
* **components/errors:** remove extra whitespace around error description ([#733](https://github.com/blackbaud/skyux/issues/733)) ([3644555](https://github.com/blackbaud/skyux/commit/364455589141d5233d57939bfac1204058a16ce7))
* **components/errors:** set `ariaLabelledBy` for error modals to satisfy accessibility rules ([#819](https://github.com/blackbaud/skyux/issues/819)) ([ec7311a](https://github.com/blackbaud/skyux/commit/ec7311a76aebeedb02bcfdaefbff0e530368400f))
* **components/forms:** allow character count indicator and limit to be set in either order ([#826](https://github.com/blackbaud/skyux/issues/826)) ([9b013f9](https://github.com/blackbaud/skyux/commit/9b013f99fe105aa72df5b096e2cb276aac4e5abc))
* **components/forms:** allow toggle label to wrap ([#777](https://github.com/blackbaud/skyux/issues/777)) ([#789](https://github.com/blackbaud/skyux/issues/789)) ([1deaa9c](https://github.com/blackbaud/skyux/commit/1deaa9c0c0f700603d0f974b3b73196b9e18cf36))
* **components/forms:** constrain input box textarea height to prevent text overlapping with label ([#796](https://github.com/blackbaud/skyux/issues/796)) ([502a2c2](https://github.com/blackbaud/skyux/commit/502a2c23ac07599dc667cb670f9649615c56de5d))
* **components/forms:** revert accidental breaking change of the checkbox component's id property ([#852](https://github.com/blackbaud/skyux/issues/852)) ([#856](https://github.com/blackbaud/skyux/issues/856)) ([9d8a5df](https://github.com/blackbaud/skyux/commit/9d8a5dfdffa3cf5c87ac9fa74aac6b8bd0a66066))
* **components/forms:** set radio group 'aria-owns' to satisfy accessibility rules ([#671](https://github.com/blackbaud/skyux/issues/671)) ([32f1e1e](https://github.com/blackbaud/skyux/commit/32f1e1e2731e1ba5260d3ebe159a37370f950aa2))
* **components/forms:** use `EventEmitter` for radio component outputs ([#732](https://github.com/blackbaud/skyux/issues/732)) ([0b717db](https://github.com/blackbaud/skyux/commit/0b717dba0441c3c94c31aaa3cb46e8af286fea86))
* **components/forms:** use a label instead of a button as the wrapper ([#687](https://github.com/blackbaud/skyux/issues/687)) ([f2f2039](https://github.com/blackbaud/skyux/commit/f2f2039c9da142d01c5b0f3444616209cb17a15c))
* **components/indicators:** adjust help inline margin to 5 px ([#780](https://github.com/blackbaud/skyux/issues/780)) ([08f1487](https://github.com/blackbaud/skyux/commit/08f148708f3d860a8984bfd316ee234d25906f59))
* **components/indicators:** set wait component role to 'progressbar' ([#655](https://github.com/blackbaud/skyux/issues/655)) ([7612e6b](https://github.com/blackbaud/skyux/commit/7612e6ba917746539dac4aff039ca29940630fb3))
* **components/indicators:** use attribute binding on the tokens component to avoid duplicate 'role' values ([#803](https://github.com/blackbaud/skyux/issues/803)) ([a48e94d](https://github.com/blackbaud/skyux/commit/a48e94d3853c16edeece5d632f7c49cef573a532))
* **components/indicators:** use role 'grid' for tokens component ([#712](https://github.com/blackbaud/skyux/issues/712)) ([774eb3d](https://github.com/blackbaud/skyux/commit/774eb3dbd05469095da9197402e2507da0f8563c))
* **components/inline-form:** remove inline form race condition ([#670](https://github.com/blackbaud/skyux/issues/670)) ([bfcb7fd](https://github.com/blackbaud/skyux/commit/bfcb7fd7fbec01d8eb93ccad0001732b227fb775))
* **components/layout:** add display: block to sky-box so spacing classes can be applied ([#846](https://github.com/blackbaud/skyux/issues/846)) ([2247099](https://github.com/blackbaud/skyux/commit/22470992507d658a5fadcebaef506fa0c28e408e))
* **components/layout:** allow strict templates to use `backToTop` directive without square brackets ([#737](https://github.com/blackbaud/skyux/issues/737)) ([9f3e890](https://github.com/blackbaud/skyux/commit/9f3e890fc7a2950cc332345bc2cc04a85243dbaa))
* **components/layout:** animate text expand consistently when the expansion state changes ([#592](https://github.com/blackbaud/skyux/issues/592)) ([9e468f5](https://github.com/blackbaud/skyux/commit/9e468f5833b5bccfc35a3e50f2d25ec47359a31c))
* **components/layout:** animate text expand repeater consistently when the expansion state changes ([#602](https://github.com/blackbaud/skyux/issues/602)) ([62ddece](https://github.com/blackbaud/skyux/commit/62ddece3009240be335b8b9f37fd9d85d915cb12))
* **components/layout:** help inline modern theme styles follow design guidelines ([#845](https://github.com/blackbaud/skyux/issues/845)) ([76869f1](https://github.com/blackbaud/skyux/commit/76869f1fcd9a47a50674784595382faeb59a092a))
* **components/layout:** remove bottom margin from description lists ([#767](https://github.com/blackbaud/skyux/issues/767)) ([ed9994b](https://github.com/blackbaud/skyux/commit/ed9994b74e95498e66af2968ccf50900209b7236))
* **components/lists:** adjust vertical alignment on repeater item drag controls ([#859](https://github.com/blackbaud/skyux/issues/859)) ([e1ed920](https://github.com/blackbaud/skyux/commit/e1ed9209f2a6fc906e0622210a8c79779da52410))
* **components/lists:** use 'grid' role for selectable repeaters ([#751](https://github.com/blackbaud/skyux/issues/751)) ([64a4c86](https://github.com/blackbaud/skyux/commit/64a4c863b5619d508195643c90d7be1254dbfd3a))
* **components/lookup:** lookup control value accessor uses a copy of passed in arrays instead of using the original array directly ([#850](https://github.com/blackbaud/skyux/issues/850)) ([c0ebdab](https://github.com/blackbaud/skyux/commit/c0ebdab4d83719c82a9ce7f03c5d6327d15f49fd))
* **components/lookup:** lookup dropdown repositions when multiline tokens are changed ([#849](https://github.com/blackbaud/skyux/issues/849)) ([71c8caa](https://github.com/blackbaud/skyux/commit/71c8caada9a4758daef61f6ef23cccfb3cc04517))
* **components/lookup:** modern search clickbox takes up entire input box ([#677](https://github.com/blackbaud/skyux/issues/677)) ([#679](https://github.com/blackbaud/skyux/issues/679)) ([2b70b38](https://github.com/blackbaud/skyux/commit/2b70b383a69bbe0c7028e0fdfaeb129d0c6fb1fa))
* **components/lookup:** remove ARIA label from non-functional search icon ([#654](https://github.com/blackbaud/skyux/issues/654)) ([0225d2c](https://github.com/blackbaud/skyux/commit/0225d2cf24135eca63b4e22c9cc07f14b93fcfe0))
* **components/lookup:** search icon is placed within input when not using an input box or the show more functionality ([#701](https://github.com/blackbaud/skyux/issues/701)) ([#704](https://github.com/blackbaud/skyux/issues/704)) ([ef2862a](https://github.com/blackbaud/skyux/commit/ef2862afc2a85bb682da3ba5b6edf0ae233fad3e))
* **components/lookup:** set `aria-expanded` to true on the autocomplete component when the dropdown is open ([#544](https://github.com/blackbaud/skyux/issues/544)) ([1aa059d](https://github.com/blackbaud/skyux/commit/1aa059d5892ce4a3f7da206ac353e18fb71f0614))
* **components/modals:** remove leading and trailing whitespace from confirm elements when `preserveWhiteSpace` is `true` ([#786](https://github.com/blackbaud/skyux/issues/786)) ([b001bea](https://github.com/blackbaud/skyux/commit/b001bea5916afe66863ca49b6d11d5a949a3c590))
* **components/modals:** set modal content tabindex to make scrollable area focusable ([#619](https://github.com/blackbaud/skyux/issues/619)) ([#625](https://github.com/blackbaud/skyux/issues/625)) ([ec2bc10](https://github.com/blackbaud/skyux/commit/ec2bc10aa3869c2a9aebdcb2c70c22710482099d))
* **components/modals:** unsubscribe from preset button observable once the buttons have been emitted ([#640](https://github.com/blackbaud/skyux/issues/640)) ([a8a87ff](https://github.com/blackbaud/skyux/commit/a8a87ff8e0eeed44a73f4260d8998291b2ef8fa3))
* **components/packages:** add compat stylesheet to angular.json only if needed ([#728](https://github.com/blackbaud/skyux/issues/728)) ([c7ac8d1](https://github.com/blackbaud/skyux/commit/c7ac8d1880536702d00ca7283c57979595306310))
* **components/packages:** add compat stylesheet to project source roots ([#726](https://github.com/blackbaud/skyux/issues/726)) ([68393f4](https://github.com/blackbaud/skyux/commit/68393f43dca19fa91376149707f26032d9b74cac))
* **components/packages:** install `moment` only if `@skyux/datetime` is a dependency ([#743](https://github.com/blackbaud/skyux/issues/743)) ([11484e4](https://github.com/blackbaud/skyux/commit/11484e4040197cbb7c6d41ddb91d48eef7140599))
* **components/packages:** recognize leading tilde and relative paths when fixing SCSS imports ([#735](https://github.com/blackbaud/skyux/issues/735)) ([30e9817](https://github.com/blackbaud/skyux/commit/30e9817e8a7fe0344f26f1c2206df158e8c72cfa))
* **components/packages:** remove forward slash to compat stylesheet in angular.json ([#696](https://github.com/blackbaud/skyux/issues/696)) ([5b7eb4b](https://github.com/blackbaud/skyux/commit/5b7eb4b5d4bae82847ac6607241558cbdd4c2d39))
* **components/packages:** remove package before installing it to prevent duplicates ([#839](https://github.com/blackbaud/skyux/issues/839)) ([89a990f](https://github.com/blackbaud/skyux/commit/89a990fb3d48edb0a70e5758d25dbd510b621fc1))
* **components/pages:** update needs-attention to match box design ([#582](https://github.com/blackbaud/skyux/issues/582)) ([#611](https://github.com/blackbaud/skyux/issues/611)) ([f1619a7](https://github.com/blackbaud/skyux/commit/f1619a7df407243614fd35396ca9576fd6b6de45))
* **components/phone-field:** validate new area codes as valid ([#634](https://github.com/blackbaud/skyux/issues/634)) ([#637](https://github.com/blackbaud/skyux/issues/637)) ([636143d](https://github.com/blackbaud/skyux/commit/636143d65e03021f6eac98baeba04244eb2bf150))
* **components/tabs:** address accessibility violations in tabset component ([#806](https://github.com/blackbaud/skyux/issues/806)) ([08ba3cf](https://github.com/blackbaud/skyux/commit/08ba3cfbe48321090600255c9b49c23822ef234d))
* **components/tabs:** fix a11y violations for wizard and vertical tabs ([#651](https://github.com/blackbaud/skyux/issues/651)) ([9b53409](https://github.com/blackbaud/skyux/commit/9b53409271b78e1091462578ee02c7b470a75832))
* **components/tabs:** use 'aria-owns' to satisfy accessibility rules for vertical tab and sectioned form components ([#815](https://github.com/blackbaud/skyux/issues/815)) ([e5e3ac7](https://github.com/blackbaud/skyux/commit/e5e3ac70aeee35a18b0f205a87d42f5fcfd0053d))
* **components/text-editor:** escape merge field attribute values ([#797](https://github.com/blackbaud/skyux/issues/797)) ([5632dbd](https://github.com/blackbaud/skyux/commit/5632dbdc87677ec53267928761b21e17ea4ad9e5))
* **components/text-editor:** toolbars are hidden when no items exist within the toolbars ([#676](https://github.com/blackbaud/skyux/issues/676)) ([#678](https://github.com/blackbaud/skyux/issues/678)) ([9711a84](https://github.com/blackbaud/skyux/commit/9711a842e8c3a5c6887adfdfceab6719001a4a1e))
* **components/theme:** add module names for SCSS variables ([#730](https://github.com/blackbaud/skyux/issues/730)) ([8a8ceb0](https://github.com/blackbaud/skyux/commit/8a8ceb0275dc5189a5c00b21412d8eb68174ed0b))
* **components/theme:** address missing files in the SCSS exports API ([#721](https://github.com/blackbaud/skyux/issues/721)) ([923fac0](https://github.com/blackbaud/skyux/commit/923fac043f474548971ba0b93d887a6c91de26cc))
* **components/theme:** remove variables exports from SCSS mixins ([#725](https://github.com/blackbaud/skyux/issues/725)) ([7153e95](https://github.com/blackbaud/skyux/commit/7153e9551144b7c1c258140c90f710c934daf8c5))
* **components/validation:** correct return type for static `url` valdation function when called with validation options ([#809](https://github.com/blackbaud/skyux/issues/809)) ([dc8b6e4](https://github.com/blackbaud/skyux/commit/dc8b6e4c703ecc899aaefb2cb32ca2cca3c497ca))
* **sdk/testing:** use default `axe-core` rules when running the `toBeAccessible` matcher ([#681](https://github.com/blackbaud/skyux/issues/681)) ([ed1b5bb](https://github.com/blackbaud/skyux/commit/ed1b5bba5a37f006bc25a09bd92f003501f848ea))
* adjust typescript exports and remove core-js imports ([#820](https://github.com/blackbaud/skyux/issues/820)) ([79c5989](https://github.com/blackbaud/skyux/commit/79c5989bc139a93f5c707cdf67ff6d4c06d2ca3a))
* adjust typescript imports to work on case sensitive filesystem ([#804](https://github.com/blackbaud/skyux/issues/804)) ([abec058](https://github.com/blackbaud/skyux/commit/abec0584c3c4afd0467eb9a501cfe6ed5025edbe))
* imports schematic on Windows ([#837](https://github.com/blackbaud/skyux/issues/837)) ([d610573](https://github.com/blackbaud/skyux/commit/d61057362b9b7d9b53e1b206cf4758fb3234c0bd))

### Deprecations

* **components/popovers:** deprecate `SkyDropdownComponent` `buttonType` icon class option ([#663](https://github.com/blackbaud/skyux/issues/663)) ([b8c1027](https://github.com/blackbaud/skyux/commit/b8c102782998a85f43f818e7e923be0ef786c1e6))
* **components/tabs:** deprecate `tabHeaderCount` and remove from code examples ([#714](https://github.com/blackbaud/skyux/issues/714)) ([f40696f](https://github.com/blackbaud/skyux/commit/f40696f078819c8d2e59337b238dd11569482236))

## [7.0.0-beta.19](https://github.com/blackbaud/skyux/compare/7.0.0-beta.18...7.0.0-beta.19) (2022-12-01)


### Features

* **components/lists:** sort and tabs dropdown style tweaks ([#851](https://github.com/blackbaud/skyux/issues/851)) ([d6c6a99](https://github.com/blackbaud/skyux/commit/d6c6a999299f935914523e8e2bf0e7fabc6143ec))


### Bug Fixes

* **components/lists:** adjust vertical alignment on repeater item drag controls ([#859](https://github.com/blackbaud/skyux/issues/859)) ([e1ed920](https://github.com/blackbaud/skyux/commit/e1ed9209f2a6fc906e0622210a8c79779da52410))

## [7.0.0-beta.18](https://github.com/blackbaud/skyux/compare/7.0.0-beta.17...7.0.0-beta.18) (2022-11-28)


### Features

* add support for Angular 14.2.11 ([#854](https://github.com/blackbaud/skyux/issues/854)) ([9277c58](https://github.com/blackbaud/skyux/commit/9277c58daebd9ec2c8f3a8a36d2cd77ac641e252))


### Bug Fixes

* **apps/code-examples:** fix data entry grid inline help example ([#853](https://github.com/blackbaud/skyux/issues/853)) ([0d55bf7](https://github.com/blackbaud/skyux/commit/0d55bf75720cee1f581c64ed9f2e207480ec793e))
* **components/forms:** revert accidental breaking change of the checkbox component's id property ([#852](https://github.com/blackbaud/skyux/issues/852)) ([#856](https://github.com/blackbaud/skyux/issues/856)) ([9d8a5df](https://github.com/blackbaud/skyux/commit/9d8a5dfdffa3cf5c87ac9fa74aac6b8bd0a66066))
* **components/layout:** add display: block to sky-box so spacing classes can be applied ([#846](https://github.com/blackbaud/skyux/issues/846)) ([2247099](https://github.com/blackbaud/skyux/commit/22470992507d658a5fadcebaef506fa0c28e408e))
* **components/layout:** help inline modern theme styles follow design guidelines ([#845](https://github.com/blackbaud/skyux/issues/845)) ([76869f1](https://github.com/blackbaud/skyux/commit/76869f1fcd9a47a50674784595382faeb59a092a))
* **components/lookup:** lookup control value accessor uses a copy of passed in arrays instead of using the original array directly ([#850](https://github.com/blackbaud/skyux/issues/850)) ([c0ebdab](https://github.com/blackbaud/skyux/commit/c0ebdab4d83719c82a9ce7f03c5d6327d15f49fd))
* **components/lookup:** lookup dropdown repositions when multiline tokens are changed ([#849](https://github.com/blackbaud/skyux/issues/849)) ([71c8caa](https://github.com/blackbaud/skyux/commit/71c8caada9a4758daef61f6ef23cccfb3cc04517))

## [6.25.3](https://github.com/blackbaud/skyux/compare/6.25.2...6.25.3) (2022-11-23)


### Bug Fixes

* **components/forms:** revert accidental breaking change of the checkbox component's id property ([#852](https://github.com/blackbaud/skyux/issues/852)) ([08bbcb8](https://github.com/blackbaud/skyux/commit/08bbcb81e6139ea9751bc0ba8aa041e3f0f77b3f))

## [7.0.0-beta.17](https://github.com/blackbaud/skyux/compare/7.0.0-beta.16...7.0.0-beta.17) (2022-11-17)


### Bug Fixes

* **components/ag-grid:** remove `const` from `enum SkyCellClass` ([#844](https://github.com/blackbaud/skyux/issues/844)) ([4dcfa1e](https://github.com/blackbaud/skyux/commit/4dcfa1ee57dc77dd148e9518a452cd846fbfdfc3))
* **components/packages:** remove package before installing it to prevent duplicates ([#839](https://github.com/blackbaud/skyux/issues/839)) ([89a990f](https://github.com/blackbaud/skyux/commit/89a990fb3d48edb0a70e5758d25dbd510b621fc1))

## [7.0.0-beta.16](https://github.com/blackbaud/skyux/compare/7.0.0-beta.15...7.0.0-beta.16) (2022-11-16)


### Bug Fixes

* imports schematic on Windows ([#837](https://github.com/blackbaud/skyux/issues/837)) ([d610573](https://github.com/blackbaud/skyux/commit/d61057362b9b7d9b53e1b206cf4758fb3234c0bd))

## [7.0.0-beta.15](https://github.com/blackbaud/skyux/compare/7.0.0-beta.14...7.0.0-beta.15) (2022-11-16)


### Features

* **components/popovers:** improve dropdown styling ([#818](https://github.com/blackbaud/skyux/issues/818)) ([da10e69](https://github.com/blackbaud/skyux/commit/da10e696d5b01d44df3f29d7b650d6f567703012))

## [7.0.0-beta.14](https://github.com/blackbaud/skyux/compare/7.0.0-beta.13...7.0.0-beta.14) (2022-11-15)


### Features

* **sdk/testing:** add support for `axe-core@^4.5.2` ([#822](https://github.com/blackbaud/skyux/issues/822)) ([095509a](https://github.com/blackbaud/skyux/commit/095509a86cb9b3b2c6542670d270c953993ab9ad))


### Bug Fixes

* adjust typescript exports and remove core-js imports ([#820](https://github.com/blackbaud/skyux/issues/820)) ([79c5989](https://github.com/blackbaud/skyux/commit/79c5989bc139a93f5c707cdf67ff6d4c06d2ca3a))
* **components/data-manager:** mark for check when isActive changes ([#810](https://github.com/blackbaud/skyux/issues/810)) ([cf72fec](https://github.com/blackbaud/skyux/commit/cf72fec594ad05fa27da7247fe9a5c34f40e1505))
* **components/errors:** set `ariaLabelledBy` for error modals to satisfy accessibility rules ([#819](https://github.com/blackbaud/skyux/issues/819)) ([ec7311a](https://github.com/blackbaud/skyux/commit/ec7311a76aebeedb02bcfdaefbff0e530368400f))
* **components/forms:** allow character count indicator and limit to be set in either order ([#826](https://github.com/blackbaud/skyux/issues/826)) ([9b013f9](https://github.com/blackbaud/skyux/commit/9b013f99fe105aa72df5b096e2cb276aac4e5abc))
* **components/tabs:** use 'aria-owns' to satisfy accessibility rules for vertical tab and sectioned form components ([#815](https://github.com/blackbaud/skyux/issues/815)) ([e5e3ac7](https://github.com/blackbaud/skyux/commit/e5e3ac70aeee35a18b0f205a87d42f5fcfd0053d))

## [7.0.0-beta.13](https://github.com/blackbaud/skyux/compare/7.0.0-beta.12...7.0.0-beta.13) (2022-11-10)


### Features

* **components/core:** add ability to provide a parent injector when constructing components via the `SkyDynamicComponentService` ([#793](https://github.com/blackbaud/skyux/issues/793)) ([5b3fefa](https://github.com/blackbaud/skyux/commit/5b3fefab6b84e7144c641f97fe6668c9f4cf4b29))


### Bug Fixes

* adjust typescript imports to work on case sensitive filesystem ([#804](https://github.com/blackbaud/skyux/issues/804)) ([abec058](https://github.com/blackbaud/skyux/commit/abec0584c3c4afd0467eb9a501cfe6ed5025edbe))
* **components/forms:** constrain input box textarea height to prevent text overlapping with label ([#796](https://github.com/blackbaud/skyux/issues/796)) ([502a2c2](https://github.com/blackbaud/skyux/commit/502a2c23ac07599dc667cb670f9649615c56de5d))
* **components/indicators:** use attribute binding on the tokens component to avoid duplicate 'role' values ([#803](https://github.com/blackbaud/skyux/issues/803)) ([a48e94d](https://github.com/blackbaud/skyux/commit/a48e94d3853c16edeece5d632f7c49cef573a532))
* **components/tabs:** address accessibility violations in tabset component ([#806](https://github.com/blackbaud/skyux/issues/806)) ([08ba3cf](https://github.com/blackbaud/skyux/commit/08ba3cfbe48321090600255c9b49c23822ef234d))
* **components/text-editor:** escape merge field attribute values ([#797](https://github.com/blackbaud/skyux/issues/797)) ([5632dbd](https://github.com/blackbaud/skyux/commit/5632dbdc87677ec53267928761b21e17ea4ad9e5))
* **components/validation:** correct return type for static `url` valdation function when called with validation options ([#809](https://github.com/blackbaud/skyux/issues/809)) ([dc8b6e4](https://github.com/blackbaud/skyux/commit/dc8b6e4c703ecc899aaefb2cb32ca2cca3c497ca))

## [7.0.0-beta.12](https://github.com/blackbaud/skyux/compare/7.0.0-beta.11...7.0.0-beta.12) (2022-11-07)


### ⚠ BREAKING CHANGES

* **components/ag-grid:** upgrade to [AG Grid 28](https://www.ag-grid.com/changelog/?fixVersion=28.0.0), which includes breaking changes

### Features

* **components/ag-grid:** upgrade to AG Grid 28 ([#617](https://github.com/blackbaud/skyux/issues/617)) ([2c1e2ad](https://github.com/blackbaud/skyux/commit/2c1e2adfc3546b630e9d124eeaf9e95d9c9aa4fa))

## [7.0.0-beta.11](https://github.com/blackbaud/skyux/compare/7.0.0-beta.10...7.0.0-beta.11) (2022-11-04)


### Features

* **components/ag-grid:** add inline help support using custom header components ([#787](https://github.com/blackbaud/skyux/issues/787)) ([809bac6](https://github.com/blackbaud/skyux/commit/809bac657cddcc5994ee140cd82910754baf8e3a))
* **components/lists:** show sort button caret on small screens ([#774](https://github.com/blackbaud/skyux/issues/774)) ([2be4513](https://github.com/blackbaud/skyux/commit/2be4513b5d142d05d20bae4e3c98888563ddd0b5))


### Bug Fixes

* **components/angular-tree-component:** replace aria-owns with adjustments to the tree node markup ([#758](https://github.com/blackbaud/skyux/issues/758)) ([beb0a21](https://github.com/blackbaud/skyux/commit/beb0a21608d59f71c3d7ade80398efd0a619570b))
* **components/forms:** allow toggle label to wrap ([#777](https://github.com/blackbaud/skyux/issues/777)) ([#789](https://github.com/blackbaud/skyux/issues/789)) ([1deaa9c](https://github.com/blackbaud/skyux/commit/1deaa9c0c0f700603d0f974b3b73196b9e18cf36))
* **components/indicators:** adjust help inline margin to 5 px ([#780](https://github.com/blackbaud/skyux/issues/780)) ([08f1487](https://github.com/blackbaud/skyux/commit/08f148708f3d860a8984bfd316ee234d25906f59))
* **components/layout:** remove bottom margin from description lists ([#767](https://github.com/blackbaud/skyux/issues/767)) ([ed9994b](https://github.com/blackbaud/skyux/commit/ed9994b74e95498e66af2968ccf50900209b7236))
* **components/modals:** remove leading and trailing whitespace from confirm elements when `preserveWhiteSpace` is `true` ([#786](https://github.com/blackbaud/skyux/issues/786)) ([b001bea](https://github.com/blackbaud/skyux/commit/b001bea5916afe66863ca49b6d11d5a949a3c590))

## [6.25.2](https://github.com/blackbaud/skyux/compare/6.25.1...6.25.2) (2022-11-04)

* **components/forms:** allow toggle label to wrap ([#777](https://github.com/blackbaud/skyux/issues/777)) ([a3ff4b7](https://github.com/blackbaud/skyux/commit/a3ff4b7102d3069936e6527fd94bc85155774c4b))

## [7.0.0-beta.10](https://github.com/blackbaud/skyux/compare/7.0.0-beta.9...7.0.0-beta.10) (2022-11-01)


### ⚠ BREAKING CHANGES

* **components/forms:** The radio component's `radioType` input was set to a type of `string`, but it really only accepts a handful of known string values. These values are represented by the new `SkyRadioType` string union. This might cause problems if you are setting the `radioType` input to a type of `string` in your consuming component's class.

### Features

* **components/autonumeric:** change autonumeric from a dependency to a peer dependency ([#741](https://github.com/blackbaud/skyux/issues/741)) ([b1e4706](https://github.com/blackbaud/skyux/commit/b1e47060e1f095c95b1753ce7a8248715c9f8618))
* **components/forms:** change radio component's `radioType` input property to be more strongly typed ([34e9332](https://github.com/blackbaud/skyux/commit/34e933208706bea063ef95de57568a9b3488e706))
* **sdk/testing:** change axe-core from a dependency to a peer dependency ([#746](https://github.com/blackbaud/skyux/issues/746)) ([bbef42a](https://github.com/blackbaud/skyux/commit/bbef42a2793ce8ac88e21a52e43a3ae41efa1e92))


### Bug Fixes

* **components/ag-grid:** remove aria-label from currency cell renderer ([#750](https://github.com/blackbaud/skyux/issues/750)) ([1343d3d](https://github.com/blackbaud/skyux/commit/1343d3d7efaa649f092e1d1d6bd551012178108b))
* **components/indicators:** use role 'grid' for tokens component ([#712](https://github.com/blackbaud/skyux/issues/712)) ([774eb3d](https://github.com/blackbaud/skyux/commit/774eb3dbd05469095da9197402e2507da0f8563c))
* **components/lists:** use 'grid' role for selectable repeaters ([#751](https://github.com/blackbaud/skyux/issues/751)) ([64a4c86](https://github.com/blackbaud/skyux/commit/64a4c863b5619d508195643c90d7be1254dbfd3a))
* **components/packages:** install `moment` only if `@skyux/datetime` is a dependency ([#743](https://github.com/blackbaud/skyux/issues/743)) ([11484e4](https://github.com/blackbaud/skyux/commit/11484e4040197cbb7c6d41ddb91d48eef7140599))

## [7.0.0-beta.9](https://github.com/blackbaud/skyux/compare/7.0.0-beta.8...7.0.0-beta.9) (2022-10-25)


### ⚠ BREAKING CHANGES

* **components/forms:** use `EventEmitter` for radio component outputs (#732)
* **components/errors:** Unit tests that expect this extra whitespace will need to be updated.

### Bug Fixes

* **components/errors:** remove extra whitespace around error description ([#733](https://github.com/blackbaud/skyux/issues/733)) ([3644555](https://github.com/blackbaud/skyux/commit/364455589141d5233d57939bfac1204058a16ce7))
* **components/forms:** use `EventEmitter` for radio component outputs ([#732](https://github.com/blackbaud/skyux/issues/732)) ([0b717db](https://github.com/blackbaud/skyux/commit/0b717dba0441c3c94c31aaa3cb46e8af286fea86))
* **components/layout:** allow strict templates to use `backToTop` directive without square brackets ([#737](https://github.com/blackbaud/skyux/issues/737)) ([9f3e890](https://github.com/blackbaud/skyux/commit/9f3e890fc7a2950cc332345bc2cc04a85243dbaa))
* **components/packages:** recognize leading tilde and relative paths when fixing SCSS imports ([#735](https://github.com/blackbaud/skyux/issues/735)) ([30e9817](https://github.com/blackbaud/skyux/commit/30e9817e8a7fe0344f26f1c2206df158e8c72cfa))

## [7.0.0-beta.8](https://github.com/blackbaud/skyux/compare/7.0.0-beta.7...7.0.0-beta.8) (2022-10-24)


### Bug Fixes

* **components/packages:** add compat stylesheet to angular.json only if needed ([#728](https://github.com/blackbaud/skyux/issues/728)) ([c7ac8d1](https://github.com/blackbaud/skyux/commit/c7ac8d1880536702d00ca7283c57979595306310))
* **components/theme:** add module names for SCSS variables ([#730](https://github.com/blackbaud/skyux/issues/730)) ([8a8ceb0](https://github.com/blackbaud/skyux/commit/8a8ceb0275dc5189a5c00b21412d8eb68174ed0b))

## [7.0.0-beta.7](https://github.com/blackbaud/skyux/compare/7.0.0-beta.6...7.0.0-beta.7) (2022-10-24)


### Bug Fixes

* **components/packages:** add compat stylesheet to project source roots ([#726](https://github.com/blackbaud/skyux/issues/726)) ([68393f4](https://github.com/blackbaud/skyux/commit/68393f43dca19fa91376149707f26032d9b74cac))
* **components/theme:** remove variables exports from SCSS mixins ([#725](https://github.com/blackbaud/skyux/issues/725)) ([7153e95](https://github.com/blackbaud/skyux/commit/7153e9551144b7c1c258140c90f710c934daf8c5))

## [7.0.0-beta.6](https://github.com/blackbaud/skyux/compare/7.0.0-beta.5...7.0.0-beta.6) (2022-10-21)


### Bug Fixes

* **components/forms:** set radio group 'aria-owns' to satisfy accessibility rules ([#671](https://github.com/blackbaud/skyux/issues/671)) ([32f1e1e](https://github.com/blackbaud/skyux/commit/32f1e1e2731e1ba5260d3ebe159a37370f950aa2))
* **components/theme:** address missing files in the SCSS exports API ([#721](https://github.com/blackbaud/skyux/issues/721)) ([923fac0](https://github.com/blackbaud/skyux/commit/923fac043f474548971ba0b93d887a6c91de26cc))


### Deprecations

* **components/tabs:** deprecate `tabHeaderCount` and remove from code examples ([#714](https://github.com/blackbaud/skyux/issues/714)) ([f40696f](https://github.com/blackbaud/skyux/commit/f40696f078819c8d2e59337b238dd11569482236))

## [6.25.1](https://github.com/blackbaud/skyux/compare/6.25.0...6.25.1) (2022-10-20)


### Bug Fixes

* **components/lookup:** search icon is placed within input when not using an input box or the show more functionality ([#701](https://github.com/blackbaud/skyux/issues/701)) ([98e62f8](https://github.com/blackbaud/skyux/commit/98e62f869552e8acc281b400bceeca907b27bf32))
* **components/lookup:** set `aria-expanded` to true on the autocomplete component when the dropdown is open ([#544](https://github.com/blackbaud/skyux/issues/544)) ([#702](https://github.com/blackbaud/skyux/issues/702)) ([b1219ad](https://github.com/blackbaud/skyux/commit/b1219adeb1fd4208213e7fd93748f32098ab6245))

## [7.0.0-beta.5](https://github.com/blackbaud/skyux/compare/7.0.0-beta.4...7.0.0-beta.5) (2022-10-20)


### Features

* **components/forms:** support status indicator errors for input box ([#633](https://github.com/blackbaud/skyux/issues/633)) ([#695](https://github.com/blackbaud/skyux/issues/695)) ([7d15414](https://github.com/blackbaud/skyux/commit/7d15414f4d5bdae50b5352d6d73354642376bdc2))
* update page and split view components to support docking content to the available viewport ([#688](https://github.com/blackbaud/skyux/issues/688)) ([158b262](https://github.com/blackbaud/skyux/commit/158b2627db4ab6a14a1d4e049a29b50280d36ec3))


### Bug Fixes

* **components/angular-tree-component:** set 'aria-owns' to address a11y violation ([#666](https://github.com/blackbaud/skyux/issues/666)) ([cab7dae](https://github.com/blackbaud/skyux/commit/cab7dae2fcbb3eb9ce4a0efe9793995aedd52ddd))
* **components/indicators:** set wait component role to 'progressbar' ([#655](https://github.com/blackbaud/skyux/issues/655)) ([7612e6b](https://github.com/blackbaud/skyux/commit/7612e6ba917746539dac4aff039ca29940630fb3))
* **components/inline-form:** remove inline form race condition ([#670](https://github.com/blackbaud/skyux/issues/670)) ([bfcb7fd](https://github.com/blackbaud/skyux/commit/bfcb7fd7fbec01d8eb93ccad0001732b227fb775))
* **components/lookup:** remove ARIA label from non-functional search icon ([#654](https://github.com/blackbaud/skyux/issues/654)) ([0225d2c](https://github.com/blackbaud/skyux/commit/0225d2cf24135eca63b4e22c9cc07f14b93fcfe0))
* **components/lookup:** search icon is placed within input when not using an input box or the show more functionality ([#701](https://github.com/blackbaud/skyux/issues/701)) ([#704](https://github.com/blackbaud/skyux/issues/704)) ([ef2862a](https://github.com/blackbaud/skyux/commit/ef2862afc2a85bb682da3ba5b6edf0ae233fad3e))
* **components/tabs:** fix a11y violations for wizard and vertical tabs ([#651](https://github.com/blackbaud/skyux/issues/651)) ([9b53409](https://github.com/blackbaud/skyux/commit/9b53409271b78e1091462578ee02c7b470a75832))

## [7.0.0-beta.4](https://github.com/blackbaud/skyux/compare/7.0.0-beta.3...7.0.0-beta.4) (2022-10-17)


### ⚠ BREAKING CHANGES

* **components/modals:** `dynamicComponentService` is now a required parameter of `SkyModalService`. To address this change, provide the `dynamicComponentService` wherever you are constructing the `SkyModalService` or any mocks extending it  for unit testing.

### Features

* **components/modals:** make `dynamicComponentService` required in `SkyModalService` constructor ([#674](https://github.com/blackbaud/skyux/issues/674)) ([c7c60f2](https://github.com/blackbaud/skyux/commit/c7c60f273c8bb988bcd7908282ba623723e861e0))


### Bug Fixes

* **components/forms:** use a label instead of a button as the wrapper ([#687](https://github.com/blackbaud/skyux/issues/687)) ([f2f2039](https://github.com/blackbaud/skyux/commit/f2f2039c9da142d01c5b0f3444616209cb17a15c))
* **components/packages:** remove forward slash to compat stylesheet in angular.json ([#696](https://github.com/blackbaud/skyux/issues/696)) ([5b7eb4b](https://github.com/blackbaud/skyux/commit/5b7eb4b5d4bae82847ac6607241558cbdd4c2d39))
* **sdk/testing:** use default `axe-core` rules when running the `toBeAccessible` matcher ([#681](https://github.com/blackbaud/skyux/issues/681)) ([ed1b5bb](https://github.com/blackbaud/skyux/commit/ed1b5bba5a37f006bc25a09bd92f003501f848ea))


### Deprecations

* **components/popovers:** deprecate `SkyDropdownComponent` `buttonType` icon class option ([#663](https://github.com/blackbaud/skyux/issues/663)) ([b8c1027](https://github.com/blackbaud/skyux/commit/b8c102782998a85f43f818e7e923be0ef786c1e6))

## [7.0.0-beta.3](https://github.com/blackbaud/skyux/compare/7.0.0-beta.2...7.0.0-beta.3) (2022-10-14)


### ⚠ BREAKING CHANGES

* **components/indicators:** This change removes support for `alertType` on the alert component being an unaccepted string. To address this change, change the `alertType` to an accepted `SkyIndicatorTypeIcon` or remove it to use the default `alertType` of `'warning'`.
* **components/forms:** The `SkyFileDrop` and `SkyFileAttachment` components' `validateFn` input type was updated to receive a `SkyFileType` parameter and return a string or undefined. To address this, ensure all `validateFn` inputs have the correct parameter and return types.
* **components/config:** The config params `get` function was updated to accurately reflect that it may return undefined. To address this change, account for a possible undefined value wherever you are using the `get` function.
* **components/modals:** `SkyModalConfigurationInterface.providers` accepts an array of `StaticProvider`s instead of any value.
* **components/modals:** `SkyConfirmButton`'s `styleType` will only accept predefined strings of type `SkyConfirmButtonStyleType`. To address this, ensure `styleType` is only being set to a supported value.
* **components/modals:** The `SkyConfirmButton` component is intended for internal use only and is removed from the exported API. To address this, remove any usages of the `SkyConfirmButton` component.

### Features

* **components/angular-tree-component:** add inline help support for angular tree component ([#659](https://github.com/blackbaud/skyux/issues/659)) ([3fbabf2](https://github.com/blackbaud/skyux/commit/3fbabf28cb406a220aa4d7dbfe282b8a81e6365a))
* **components/config:** add more specific typing to config params function return types ([#668](https://github.com/blackbaud/skyux/issues/668)) ([102cd0a](https://github.com/blackbaud/skyux/commit/102cd0a97a5b64c78e469b462fe1f59601e44557))
* **components/forms:** update file attachment validateFn inputs to more specific type ([#669](https://github.com/blackbaud/skyux/issues/669)) ([95b7ab5](https://github.com/blackbaud/skyux/commit/95b7ab59f6352a591dcff17da5d76c3e9c4d3325))
* **components/indicators:** change `alertType` to `SkyIndicatorIconType` ([#683](https://github.com/blackbaud/skyux/issues/683)) ([9081186](https://github.com/blackbaud/skyux/commit/90811866e56e772f95422db308ed7caf801cfac0))
* **components/indicators:** remove bottom margin from alert component ([#648](https://github.com/blackbaud/skyux/issues/648)) ([5bd8762](https://github.com/blackbaud/skyux/commit/5bd87621ba412cebb38285b6e9ece256e07bbe6b))
* **components/lookup:** deprecate search inputs ([#647](https://github.com/blackbaud/skyux/issues/647)) ([74396bb](https://github.com/blackbaud/skyux/commit/74396bb18906e82e86fa920276c8f709bd5b0143))
* **components/modals:** improve `SkyModalConfigurationInterface.providers` type ([#665](https://github.com/blackbaud/skyux/issues/665)) ([a65dae0](https://github.com/blackbaud/skyux/commit/a65dae0642b45764fed92d9671e2830e0f1cc24e))
* **components/modals:** remove 'string' from `SkyConfirmButton`'s `styleType` type ([#664](https://github.com/blackbaud/skyux/issues/664)) ([8fda84e](https://github.com/blackbaud/skyux/commit/8fda84ebf9afa68e0c436578dbb6177f6cc7bfdd))
* **components/modals:** remove public export of confirm button ([#656](https://github.com/blackbaud/skyux/issues/656)) ([f465207](https://github.com/blackbaud/skyux/commit/f46520739ebf874d759efa372a809d19cee3afb6))
* **components/tabs:** add descriptive aria label to tab buttons ([#586](https://github.com/blackbaud/skyux/issues/586)) ([#660](https://github.com/blackbaud/skyux/issues/660)) ([9a01d54](https://github.com/blackbaud/skyux/commit/9a01d549d498a9616d16aae4e3334b878372da3e))
* **components/toast:** improve toast service `openComponent` `component` param type ([#667](https://github.com/blackbaud/skyux/issues/667)) ([8ffa182](https://github.com/blackbaud/skyux/commit/8ffa182538269488b561fda377dc677927f0e227))


### Bug Fixes

* **components/lookup:** modern search clickbox takes up entire input box ([#677](https://github.com/blackbaud/skyux/issues/677)) ([#679](https://github.com/blackbaud/skyux/issues/679)) ([2b70b38](https://github.com/blackbaud/skyux/commit/2b70b383a69bbe0c7028e0fdfaeb129d0c6fb1fa))
* **components/text-editor:** toolbars are hidden when no items exist within the toolbars ([#676](https://github.com/blackbaud/skyux/issues/676)) ([#678](https://github.com/blackbaud/skyux/issues/678)) ([9711a84](https://github.com/blackbaud/skyux/commit/9711a842e8c3a5c6887adfdfceab6719001a4a1e))

## [6.25.0](https://github.com/blackbaud/skyux/compare/6.24.0...6.25.0) (2022-10-13)


### Features

* **components/forms:** support status indicator errors for input box ([#633](https://github.com/blackbaud/skyux/issues/633)) ([7648638](https://github.com/blackbaud/skyux/commit/764863802c3e4d18212dbd86fe390e14c3df0fb2))


### Bug Fixes

* **components/lookup:** modern search clickbox takes up entire input box ([#677](https://github.com/blackbaud/skyux/issues/677)) ([85330ed](https://github.com/blackbaud/skyux/commit/85330ed879054cd8967d9a075589ea601775509f))
* **components/text-editor:** toolbars are hidden when no items exist within the toolbars ([#676](https://github.com/blackbaud/skyux/issues/676)) ([b2ba8de](https://github.com/blackbaud/skyux/commit/b2ba8de9952306c576bd04b066b70626cb756eee))

## [6.24.0](https://github.com/blackbaud/skyux/compare/6.23.3...6.24.0) (2022-10-10)


### Features

* **components/angular-tree-component:** add inline help support for angular tree component ([#631](https://github.com/blackbaud/skyux/issues/631)) ([8674852](https://github.com/blackbaud/skyux/commit/86748522fc65f59830850303ed1839368e0e3317))
* **components/tabs:** add descriptive aria label to tab buttons ([#586](https://github.com/blackbaud/skyux/issues/586)) ([f827ca0](https://github.com/blackbaud/skyux/commit/f827ca0cde063303fa525b4c01510ba8abe663d8))

## [7.0.0-beta.2](https://github.com/blackbaud/skyux/compare/7.0.0-beta.1...7.0.0-beta.2) (2022-10-07)


### ⚠ BREAKING CHANGES

* **components/tabs:** This change removes support for not using a finish navigation button with the previous and next wizard navigation buttons. To address this change, remove other save or finish buttons and use the `sky-tabset-nav-button` of type `finish` instead.
* **components/datetime:** The 'SkyFuzzyDatepickerInputDirective' included a nonfunctional input 'skyFuzzyDatepickerInput' to support backward compatibility. The input can be removed from consumer templates without loss of functionality.
* **components/forms:** This change updates the `SkyCheckboxChange` type to be an interface instead of a class. To address this, remove any instances of instantiating the `SkyCheckboxChange` class and instead create an object that uses the interface type.
* **components/layout:** This change removes the `SkyFluidGridGutterSize` enum and the numerical options (0, 1, 2) from `SkyFluidGridGutterSizeType`. To address this, only use the strings 'small', 'medium', and 'large' for  the fluid grid component's `gutterSize` property, and use `SkyFluidGridGutterSizeType` for Typescript typing.
* **components/indicators:** This change updates the types accepted by the key info component's layout property. To address this change, only pass 'horizontal' or 'vertical' to the property, and use the type `SkyKeyInfoLayoutType` if typing variables.

### Features

* **components/datetime:** make 'moment' a peer dependency ([#615](https://github.com/blackbaud/skyux/issues/615)) ([9bb61f9](https://github.com/blackbaud/skyux/commit/9bb61f92acdb976d39fc3bc9fc179d63d0ef6ae7))
* **components/forms:** change `SkyCheckboxChange` type to an interface ([#597](https://github.com/blackbaud/skyux/issues/597)) ([2c3c1e9](https://github.com/blackbaud/skyux/commit/2c3c1e9643c7008f91aad6138aa7649aa095aa97))
* **components/indicators:** remove support for key info layout string type ([#587](https://github.com/blackbaud/skyux/issues/587)) ([ffac254](https://github.com/blackbaud/skyux/commit/ffac254c75e600f044147a6ed5946eafee75e8c9))
* **components/indicators:** update inline help emitter type to void ([#584](https://github.com/blackbaud/skyux/issues/584)) ([878b6de](https://github.com/blackbaud/skyux/commit/878b6ded9c2c2d967af751e52a64d1ce2a1be741))
* **components/layout:** remove deprecated fluid grid gutter size options ([#585](https://github.com/blackbaud/skyux/issues/585)) ([338771d](https://github.com/blackbaud/skyux/commit/338771d3d43d96c057aa0957fc8a401d1a761ac9))
* **components/modals:** add inline-help support for modals ([#598](https://github.com/blackbaud/skyux/issues/598)) ([92b49c9](https://github.com/blackbaud/skyux/commit/92b49c9e1e084e70ed1b03fad2683cc51fc3f265))
* **components/progress-indicator:** add inline-help support for progress indicator ([#599](https://github.com/blackbaud/skyux/issues/599)) ([ac3ec1f](https://github.com/blackbaud/skyux/commit/ac3ec1f4c2c2a3c0483b503b253cd7e8460ba72f))
* **components/tabs:** remove support for not using a finish nav button ([#618](https://github.com/blackbaud/skyux/issues/618)) ([cdd8a8f](https://github.com/blackbaud/skyux/commit/cdd8a8f4a58bb072bf93553d5f97509c4882e644))


### Bug Fixes

* **components/datetime:** remove nonfunctional 'skyFuzzyDatepickerInput' input from fuzzy date ([#591](https://github.com/blackbaud/skyux/issues/591)) ([b86e0ae](https://github.com/blackbaud/skyux/commit/b86e0aea90565d4f4e0c84041b1c02db15c53bbd))
* **components/layout:** animate text expand consistently when the expansion state changes ([#592](https://github.com/blackbaud/skyux/issues/592)) ([9e468f5](https://github.com/blackbaud/skyux/commit/9e468f5833b5bccfc35a3e50f2d25ec47359a31c))
* **components/layout:** animate text expand repeater consistently when the expansion state changes ([#602](https://github.com/blackbaud/skyux/issues/602)) ([62ddece](https://github.com/blackbaud/skyux/commit/62ddece3009240be335b8b9f37fd9d85d915cb12))
* **components/modals:** set modal content tabindex to make scrollable area focusable ([#619](https://github.com/blackbaud/skyux/issues/619)) ([#625](https://github.com/blackbaud/skyux/issues/625)) ([ec2bc10](https://github.com/blackbaud/skyux/commit/ec2bc10aa3869c2a9aebdcb2c70c22710482099d))
* **components/modals:** unsubscribe from preset button observable once the buttons have been emitted ([#640](https://github.com/blackbaud/skyux/issues/640)) ([a8a87ff](https://github.com/blackbaud/skyux/commit/a8a87ff8e0eeed44a73f4260d8998291b2ef8fa3))
* **components/pages:** update needs-attention to match box design ([#582](https://github.com/blackbaud/skyux/issues/582)) ([#611](https://github.com/blackbaud/skyux/issues/611)) ([f1619a7](https://github.com/blackbaud/skyux/commit/f1619a7df407243614fd35396ca9576fd6b6de45))
* **components/phone-field:** validate new area codes as valid ([#634](https://github.com/blackbaud/skyux/issues/634)) ([#637](https://github.com/blackbaud/skyux/issues/637)) ([636143d](https://github.com/blackbaud/skyux/commit/636143d65e03021f6eac98baeba04244eb2bf150))

## [6.23.3](https://github.com/blackbaud/skyux/compare/6.23.2...6.23.3) (2022-10-06)


### Bug Fixes

* **components/phone-field:** validate new area codes as valid ([#634](https://github.com/blackbaud/skyux/issues/634)) ([deb20ae](https://github.com/blackbaud/skyux/commit/deb20ae5b41918bc35a383ebf585621a8b1a5dd4))

## [6.23.2](https://github.com/blackbaud/skyux/compare/6.23.1...6.23.2) (2022-10-04)


### Bug Fixes

* **components/modals:** set modal content tabindex to make scrollable area focusable ([#619](https://github.com/blackbaud/skyux/issues/619)) ([d71c467](https://github.com/blackbaud/skyux/commit/d71c46778cb7aaed64aa9ae4b190a410f5ecf437))

## [6.23.1](https://github.com/blackbaud/skyux/compare/6.23.0...6.23.1) (2022-10-03)


### Bug Fixes

* **components/pages:** update needs-attention to match box design ([#582](https://github.com/blackbaud/skyux/issues/582)) ([8ad0ada](https://github.com/blackbaud/skyux/commit/8ad0ada69aa01f4e9cfcbd62929a47eb573cef58))

## [6.23.0](https://github.com/blackbaud/skyux/compare/6.22.0...6.23.0) (2022-09-28)


### Features

* **components/modals:** add inline-help support for modals ([#565](https://github.com/blackbaud/skyux/issues/565)) ([f41e411](https://github.com/blackbaud/skyux/commit/f41e4111716c9d240db4ee7d1318a94ac6c97112))
* **components/progress-indicator:** add inline-help support for progress indicator component ([#566](https://github.com/blackbaud/skyux/issues/566)) ([2df708e](https://github.com/blackbaud/skyux/commit/2df708e08dc22395ee2b9e1b33de78d46375628d))

## [7.0.0-beta.1](https://github.com/blackbaud/skyux/compare/7.0.0-beta.0...7.0.0-beta.1) (2022-09-27)


### Features

* **components/tabs:** wizard keyboard nav and roles ([#558](https://github.com/blackbaud/skyux/issues/558)) ([49c7872](https://github.com/blackbaud/skyux/commit/49c7872239f9bacbc52839ab1d5d59b342186597))
* **components/tiles:** add inline help support for tile dashboard ([#563](https://github.com/blackbaud/skyux/issues/563)) ([#567](https://github.com/blackbaud/skyux/issues/567)) ([2377a7f](https://github.com/blackbaud/skyux/commit/2377a7f9ecf5af8616a4b5fee5da9bcd14c6d73d))


### Bug Fixes

* **components/ag-grid:** option to show horizontal scrollbar at top when using trackpad ([#552](https://github.com/blackbaud/skyux/issues/552)) ([#578](https://github.com/blackbaud/skyux/issues/578)) ([1f2d314](https://github.com/blackbaud/skyux/commit/1f2d31425158002940f5379db35d23e9c45463d6))
* **components/lookup:** set `aria-expanded` to true on the autocomplete component when the dropdown is open ([#544](https://github.com/blackbaud/skyux/issues/544)) ([1aa059d](https://github.com/blackbaud/skyux/commit/1aa059d5892ce4a3f7da206ac353e18fb71f0614))

## [6.22.0](https://github.com/blackbaud/skyux/compare/6.21.0...6.22.0) (2022-09-27)


### Features

* **components/tabs:** wizard keyboard nav and roles ([#558](https://github.com/blackbaud/skyux/issues/558)) ([#561](https://github.com/blackbaud/skyux/issues/561)) ([d0db9a9](https://github.com/blackbaud/skyux/commit/d0db9a9754be7e8b609b29ceadf1c0dc61108abe))
* **components/tiles:** add inline help support for tile dashboard ([#563](https://github.com/blackbaud/skyux/issues/563)) ([5e9afad](https://github.com/blackbaud/skyux/commit/5e9afade9ba1e542fefc83f473c057ac1057e89f))


### Bug Fixes

* **components/ag-grid:** option to show horizontal scrollbar at top when using trackpad ([#552](https://github.com/blackbaud/skyux/issues/552)) ([2f75827](https://github.com/blackbaud/skyux/commit/2f75827fc7fe8966583f30b5f44eae990956beac))

## [7.0.0-beta.0](https://github.com/blackbaud/skyux/compare/6.21.0...7.0.0-beta.0) (2022-09-22)


### ⚠ BREAKING CHANGES

* add support for Angular 14 (#539)

### Features

* add support for Angular 14 ([#539](https://github.com/blackbaud/skyux/issues/539)) ([bc28ca0](https://github.com/blackbaud/skyux/commit/bc28ca0df0183146f92482c396409d0369ae4532))

## [6.21.0](https://github.com/blackbaud/skyux/compare/6.20.0...6.21.0) (2022-09-20)


### Features

* **components/layout:** add inline help support for box ([#504](https://github.com/blackbaud/skyux/issues/504)) ([460ff73](https://github.com/blackbaud/skyux/commit/460ff7389659d9329385debc0151f59c3cccaf83))
* **components/pages:** add option for click event from needs attention items ([#496](https://github.com/blackbaud/skyux/issues/496)) ([4c33198](https://github.com/blackbaud/skyux/commit/4c33198f34b8b19350cf3deb3f869fb6544f5616))


### Bug Fixes

* **components/config:** revert accidental breaking change resulting from the `SkyAppRuntimeConfigParams.get` method's return type ([#534](https://github.com/blackbaud/skyux/issues/534)) ([6784e67](https://github.com/blackbaud/skyux/commit/6784e67f68e9ba7df83f2a7c8342acd3a50fb6b4))

## [6.20.0](https://github.com/blackbaud/skyux/compare/6.19.0...6.20.0) (2022-09-16)


### Features

* **components/modals:** confirm test harness ([#510](https://github.com/blackbaud/skyux/issues/510)) ([3b373e9](https://github.com/blackbaud/skyux/commit/3b373e9a6733c392846ac030c10537cdd287d962))
* **components/text-editor:** add inline help example for text editor ([#502](https://github.com/blackbaud/skyux/issues/502)) ([476daca](https://github.com/blackbaud/skyux/commit/476dacafa0269f645f5b7cd546b4c065707b816b))


### Bug Fixes

* **components/lookup:** rename harness filters `textContent` property to `text` to satisfy conventions ([#526](https://github.com/blackbaud/skyux/issues/526)) ([8f1b8f5](https://github.com/blackbaud/skyux/commit/8f1b8f55dce5ed094e34e3d75364d3c6f584b620))

## [6.19.0](https://github.com/blackbaud/skyux/compare/6.18.0...6.19.0) (2022-09-14)


### Features

* **components/indicators:** add key info component harness ([#498](https://github.com/blackbaud/skyux/issues/498)) ([4ba11a0](https://github.com/blackbaud/skyux/commit/4ba11a050ad09e762f718cc613ffb55bfdb686ff))
* **components/indicators:** update alert test harness with accessibility functions ([#500](https://github.com/blackbaud/skyux/issues/500)) ([ee7c8bf](https://github.com/blackbaud/skyux/commit/ee7c8bf424b3542674cfbeb2a145a4e88bd86cba))


### Deprecations

* **components/modals:** deprecate confirm autofocus ([#507](https://github.com/blackbaud/skyux/issues/507)) ([67a0fa9](https://github.com/blackbaud/skyux/commit/67a0fa92f6a185e2976fd63330fc0694510c0964))

## [6.18.0](https://github.com/blackbaud/skyux/compare/6.17.1...6.18.0) (2022-09-08)


### Features

* **components/indicators:** add harness for interacting with label components in tests ([#489](https://github.com/blackbaud/skyux/issues/489)) ([9edd8b7](https://github.com/blackbaud/skyux/commit/9edd8b7954d3d6dc23a50b6de7181a772576c887))


### Bug Fixes

* **components/lookup:** set z-index on lookup tokens inside input box ([#493](https://github.com/blackbaud/skyux/issues/493)) ([bd09496](https://github.com/blackbaud/skyux/commit/bd09496af82a1800f5a694839fa0d30593f1b42b))
* **components/theme:** replaced link glyph and added attach icon ([#494](https://github.com/blackbaud/skyux/issues/494)) ([885f011](https://github.com/blackbaud/skyux/commit/885f011cdd30997262746f5696f006f12806dc32))

## [6.17.1](https://github.com/blackbaud/skyux/compare/6.17.0...6.17.1) (2022-09-06)


### Bug Fixes

* **components/data-manager:** update activeView on data view config updates ([#480](https://github.com/blackbaud/skyux/issues/480)) ([90177b5](https://github.com/blackbaud/skyux/commit/90177b5171d69291ab0c8987062c11e6f984fb6b))
* **components/modals:** hide non modal elements from screen readers ([#397](https://github.com/blackbaud/skyux/issues/397)) ([6e2a171](https://github.com/blackbaud/skyux/commit/6e2a17156766a4d08585b0fb6b62ead5efee11c6))

## [6.17.0](https://github.com/blackbaud/skyux/compare/6.16.0...6.17.0) (2022-09-02)


### Features

* **components/indicators:** add accessibility description inputs to alert ([#474](https://github.com/blackbaud/skyux/issues/474)) ([81d5166](https://github.com/blackbaud/skyux/commit/81d5166dcc89807b1e651bd0f47316750d90ebb2))
* **components/tabs:** tabset wizard finish nav button ([#454](https://github.com/blackbaud/skyux/issues/454)) ([735312f](https://github.com/blackbaud/skyux/commit/735312ff0e86226db757d9e1938f43f7a90af0b4))


### Bug Fixes

* **components/indicators:** only escape highlight directive search text once ([#464](https://github.com/blackbaud/skyux/issues/464)) ([1e5741b](https://github.com/blackbaud/skyux/commit/1e5741bd45fa19631e39f50550d77b7b170db354))
* **components/progress-indicator:** fix spacing on wizard buttons in modern theme ([#465](https://github.com/blackbaud/skyux/issues/465)) ([f36b243](https://github.com/blackbaud/skyux/commit/f36b2433630dc12a63fe0f66cabafe33b85c5500))

## [6.16.0](https://github.com/blackbaud/skyux/compare/6.15.0...6.16.0) (2022-08-30)


### Features

* **components/indicators:** label accessibility updates ([#409](https://github.com/blackbaud/skyux/issues/409)) ([4c2c878](https://github.com/blackbaud/skyux/commit/4c2c8789f1e77f822bc1fac07f5787aa3fc194bf))
* **components/theme:** add CSS custom properties for spacing ([#453](https://github.com/blackbaud/skyux/issues/453)) ([60389bd](https://github.com/blackbaud/skyux/commit/60389bd0ffef143a7f29391a4be580c92c7cc4fb))


### Bug Fixes

* **components/indicators:** alert harness filters interface is now exported ([#456](https://github.com/blackbaud/skyux/issues/456)) ([1b653aa](https://github.com/blackbaud/skyux/commit/1b653aa74672f09cb0d6427d7cad4f76ffc1a282))

## [6.15.0](https://github.com/blackbaud/skyux/compare/6.14.0...6.15.0) (2022-08-26)

### Features

- **components/lookup:** add harness for interacting with search components in tests ([#431](https://github.com/blackbaud/skyux/issues/431)) ([385f97b](https://github.com/blackbaud/skyux/commit/385f97b478f1aecc0f0c86b1120144a68e1c3d22))
- **components/lookup:** add lookup testing harness ([#364](https://github.com/blackbaud/skyux/issues/364)) ([ec23a51](https://github.com/blackbaud/skyux/commit/ec23a518470a9e2e53bbf05d5d5ec3b268840ed6))

### Bug Fixes

- **components/ag-grid:** top scroll not visible ([#415](https://github.com/blackbaud/skyux/issues/415)) ([6fd28d5](https://github.com/blackbaud/skyux/commit/6fd28d57fcbf6106656f00d3089d7c75c5415676))
- **components/datetime:** use input event to mark picker as dirty ([#438](https://github.com/blackbaud/skyux/issues/438)) ([8d69ff1](https://github.com/blackbaud/skyux/commit/8d69ff1da74353e80fafc41d83f68f647fe7a08b))
- **components/indicators:** label and status indicator show icons when default states are being used ([#410](https://github.com/blackbaud/skyux/issues/410)) ([b3233b7](https://github.com/blackbaud/skyux/commit/b3233b7d1a2d65807d0e2ac3687f64e9dbc182fa))
- **components/layout:** fix 'TemplateRef<any>' is not assignable to type 'TemplateRef<never>' ([#450](https://github.com/blackbaud/skyux/issues/450)) ([fb7d8fd](https://github.com/blackbaud/skyux/commit/fb7d8fd1bd282baa7c5576550b53751714348b12))
- **components/lookup:** show more modal infinite scroll respects only show selected checkbox ([#427](https://github.com/blackbaud/skyux/issues/427)) ([4d47aaf](https://github.com/blackbaud/skyux/commit/4d47aafd1846aa2e7813ed8b8def5a4335868b8b))
- **components/pages:** action hub allow callback on needs attention items ([#386](https://github.com/blackbaud/skyux/issues/386)) ([c6cbe16](https://github.com/blackbaud/skyux/commit/c6cbe16983ad69d7f36c3aa596959a15f00fcfd5))
- **components/toast:** toast shows icon when default state is being used ([#426](https://github.com/blackbaud/skyux/issues/426)) ([b46dbfc](https://github.com/blackbaud/skyux/commit/b46dbfccbcf2e55d5921be9e8ac262c8d8bb2c77))
- **sdk/e2e-schematics:** support Windows ([#430](https://github.com/blackbaud/skyux/issues/430)) ([473b643](https://github.com/blackbaud/skyux/commit/473b6431ffb7beb34aaf571502d11e40499ff6a6))

## [6.14.0](https://github.com/blackbaud/skyux/compare/6.13.0...6.14.0) (2022-08-23)

### Features

- **components/forms:** add harness to interact with checkbox components in tests ([#428](https://github.com/blackbaud/skyux/issues/428)) ([cf67022](https://github.com/blackbaud/skyux/commit/cf67022ab1e54b452bf51ca6c1c5c4c432d20b02))
- **components/indicators:** add harness for interacting with alert components in tests ([#422](https://github.com/blackbaud/skyux/issues/422)) ([37acc5e](https://github.com/blackbaud/skyux/commit/37acc5e21d769e8cbda41a9ce89af346ab8cd16a))
- **components/indicators:** add harness for interacting with token components in tests ([#417](https://github.com/blackbaud/skyux/issues/417)) ([33fd786](https://github.com/blackbaud/skyux/commit/33fd786fcb77518e4c5d099032eae7c04f4b1249))
- **components/lists:** add harness for interacting with infinite scroll components in tests ([#421](https://github.com/blackbaud/skyux/issues/421)) ([4970a20](https://github.com/blackbaud/skyux/commit/4970a2069bf404be05f766bb536319cfed29bd53))
- **components/lists:** add harness for interacting with repeater components in tests ([#429](https://github.com/blackbaud/skyux/issues/429)) ([c7b6b3e](https://github.com/blackbaud/skyux/commit/c7b6b3ec7065317408b917b83123754936e5875a))
- **components/lookup:** add harness for interacting with autocomplete components in tests ([#413](https://github.com/blackbaud/skyux/issues/413)) ([be233a5](https://github.com/blackbaud/skyux/commit/be233a58818a630100b0ba9c538bb8a7a8060dfa))

### Bug Fixes

- **components/modals:** close all modals before removing host element ([#424](https://github.com/blackbaud/skyux/issues/424)) ([43f360c](https://github.com/blackbaud/skyux/commit/43f360c16da2f63f3f13c6229c3f6cc6d3ea9010))

## [6.13.0](https://github.com/blackbaud/skyux/compare/6.12.0...6.13.0) (2022-08-18)

### Features

- **components/core:** add `SkyIdService` to generate unique IDs for HTML elements ([#395](https://github.com/blackbaud/skyux/issues/395)) ([e7e48dc](https://github.com/blackbaud/skyux/commit/e7e48dcea700395c88ecc9a3b70ac4b399bd7a9d))
- **components/core:** add overlay harness for interacting with overlay components in tests ([#398](https://github.com/blackbaud/skyux/issues/398)) ([c96f6d7](https://github.com/blackbaud/skyux/commit/c96f6d7ca8aad57696d416bd5305a1204c827eb2))
- **components/forms:** add input box harness for interacting with input box components in tests ([#399](https://github.com/blackbaud/skyux/issues/399)) ([ed377a1](https://github.com/blackbaud/skyux/commit/ed377a166a991f080da0be9ded6fc65098c44ae8))

### Bug Fixes

- **components/lookup:** add context to searches ([#381](https://github.com/blackbaud/skyux/issues/381)) ([0d02f73](https://github.com/blackbaud/skyux/commit/0d02f73cb977912d8beb1ea623db09c814edea9e))
- **components/lookup:** async show more modal toolbars now correctly stick to the top of the modal content ([#408](https://github.com/blackbaud/skyux/issues/408)) ([2ccc8ec](https://github.com/blackbaud/skyux/commit/2ccc8ecf56a146b545a3b633c64ddcc16ae485e5))

## [6.12.0](https://github.com/blackbaud/skyux/compare/6.11.2...6.12.0) (2022-08-15)

### Features

- **components/tabs:** update modern theme styling for tabset wizard ([#382](https://github.com/blackbaud/skyux/issues/382)) ([e9d8ee8](https://github.com/blackbaud/skyux/commit/e9d8ee85e7b04cf767ff909dff3233ffc72169dc))

### Bug Fixes

- **components/forms:** move toggle switch label inside button for improved accessibility ([#387](https://github.com/blackbaud/skyux/issues/387)) ([17013ed](https://github.com/blackbaud/skyux/commit/17013ed7db9e01db297ce32e3d1b956c6d421904))
- **components/lookup:** require `idProperty` for async search ([#299](https://github.com/blackbaud/skyux/issues/299)) ([93e33be](https://github.com/blackbaud/skyux/commit/93e33be9841eeee1ca3b4be087ba15967b9fa571))
- **components/modals:** add teardown functionality to modal host component ([#389](https://github.com/blackbaud/skyux/issues/389)) ([14469aa](https://github.com/blackbaud/skyux/commit/14469aa94ad53a6e96726b60001685036ae44e3b))

### [6.11.2](https://github.com/blackbaud/skyux/compare/6.11.1...6.11.2) (2022-08-09)

### Bug Fixes

- **components/modals:** modal content popovers correctly position above the modal footer ([#385](https://github.com/blackbaud/skyux/issues/385)) ([5ae11b7](https://github.com/blackbaud/skyux/commit/5ae11b7709834acac13003e206e4f8d9178ce974))

### [6.11.1](https://github.com/blackbaud/skyux/compare/6.11.0...6.11.1) (2022-08-08)

### Bug Fixes

- **components/forms:** radio buttons disabled states update independently from the wrapping radio group disabled state ([#384](https://github.com/blackbaud/skyux/issues/384)) ([5e870a6](https://github.com/blackbaud/skyux/commit/5e870a63eca0154de1d1e5cced9b5d182c37d832))

## [6.11.0](https://github.com/blackbaud/skyux/compare/6.10.0...6.11.0) (2022-08-08)

### Features

- **components/forms:** add inline help support for file attachment ([#372](https://github.com/blackbaud/skyux/issues/372)) ([a9693e8](https://github.com/blackbaud/skyux/commit/a9693e839dc7228a9dcbab8ebf42482edd90470f))

### Bug Fixes

- **components/indicators:** sky-wait restore focus when wait closes ([#377](https://github.com/blackbaud/skyux/issues/377)) ([b5c05b2](https://github.com/blackbaud/skyux/commit/b5c05b22f9dae3c6dc1d83fa14896e2447c35905))
- **components/lists:** repeater inline form uses form role ([#380](https://github.com/blackbaud/skyux/issues/380)) ([6d95e79](https://github.com/blackbaud/skyux/commit/6d95e797847f4df123ed16b5189db0b0f9224b29))

## [6.10.0](https://github.com/blackbaud/skyux/compare/6.9.0...6.10.0) (2022-08-03)

### Features

- **components/ag-grid:** opt-in top horizontal scrollbar in ag-grid ([#374](https://github.com/blackbaud/skyux/issues/374)) ([ea51e4e](https://github.com/blackbaud/skyux/commit/ea51e4ebded825333b5cd0023661a7ffe05034db))
- **components/forms:** add inline help support for toggle switch component ([#361](https://github.com/blackbaud/skyux/issues/361)) ([52dfc70](https://github.com/blackbaud/skyux/commit/52dfc70ef71de3079a5f436973a63ba54860e83c))
- **sdk/testing:** add SkyBy.dataSkyId() to make it easier to match data-sky-id ([#332](https://github.com/blackbaud/skyux/issues/332)) ([a61ff53](https://github.com/blackbaud/skyux/commit/a61ff531fd11c85b0eb8a5f24a3bdb3cb485b0f9))

### Bug Fixes

- **components/core:** viewkeeper now properly unsubscribes from watching for scrollable host changes when destroyed ([#376](https://github.com/blackbaud/skyux/issues/376)) ([3badc27](https://github.com/blackbaud/skyux/commit/3badc270bcc185adf4013b7714d3203e9a59c2bf))
- **components/forms:** toggle switch labels now include the `for` attribute ([#371](https://github.com/blackbaud/skyux/issues/371)) ([17c9933](https://github.com/blackbaud/skyux/commit/17c9933c11ab3ff35010c067de232ac1a26f0e8f))

## [6.9.0](https://github.com/blackbaud/skyux/compare/6.8.0...6.9.0) (2022-07-27)

### Features

- **components/forms:** add inline help support for checkbox component ([#354](https://github.com/blackbaud/skyux/issues/354)) ([49d2d3e](https://github.com/blackbaud/skyux/commit/49d2d3e2c8482eaf5f07e65a54c823f415c5ea02))
- **components/forms:** add inline help support for radio component ([#355](https://github.com/blackbaud/skyux/issues/355)) ([6e0146c](https://github.com/blackbaud/skyux/commit/6e0146c786bed7a23cc629bb022f6e554fc2a9a2))
- **components/indicators:** update icons and moment dependencies ([#359](https://github.com/blackbaud/skyux/issues/359)) ([8578e81](https://github.com/blackbaud/skyux/commit/8578e810fc090a3e48908717c1f024fa915e69de)), closes [#34](https://github.com/blackbaud/skyux/issues/34) [#35](https://github.com/blackbaud/skyux/issues/35) [#33](https://github.com/blackbaud/skyux/issues/33)

### Bug Fixes

- **components/forms:** form controls on radio groups now properly disable radio buttons on initialization and do not mark the form as dirty on programmatic changes ([#356](https://github.com/blackbaud/skyux/issues/356)) ([34eeb4b](https://github.com/blackbaud/skyux/commit/34eeb4b25c2ffd3b17065db04658f609f51bbcac))
- **components/indicators:** update icons cdn link ([#360](https://github.com/blackbaud/skyux/issues/360)) ([4c42599](https://github.com/blackbaud/skyux/commit/4c425996daede636b7c5100378c7c82aa0e2e70a))
- **components/modals:** viewkept toolbars now style correctly at the top of modern theme modals ([#347](https://github.com/blackbaud/skyux/issues/347)) ([1e570dd](https://github.com/blackbaud/skyux/commit/1e570dd02a11594d04f905ed817c67a97455ca91))

## [6.8.0](https://github.com/blackbaud/skyux/compare/6.7.0...6.8.0) (2022-07-22)

### Features

- **components/indicators:** add inline help support for key info component ([#346](https://github.com/blackbaud/skyux/issues/346)) ([748add9](https://github.com/blackbaud/skyux/commit/748add9c235eb41ed3e90ee6d082eaa32b365dbf))

### Bug Fixes

- **components/data-manager:** fix column picker once-ability and disable & warn when no columns selected ([#349](https://github.com/blackbaud/skyux/issues/349)) ([c49e4f5](https://github.com/blackbaud/skyux/commit/c49e4f50faa637caf39336489c6c9ca3a369c661))
- **components/forms:** prevent overlapping text after toggle switch label ([#344](https://github.com/blackbaud/skyux/issues/344)) ([5821fa5](https://github.com/blackbaud/skyux/commit/5821fa56522a6ae053f52b749db618971134e34e))
- **components/tabs:** fix color of text on modern theme tabsets ([#345](https://github.com/blackbaud/skyux/issues/345)) ([74a5e28](https://github.com/blackbaud/skyux/commit/74a5e289ef9e7bcbc0e511bdb4443851acad40f5))

## [6.7.0](https://github.com/blackbaud/skyux/compare/6.6.0...6.7.0) (2022-07-18)

### Features

- **components/pages:** support action hub settings ([#342](https://github.com/blackbaud/skyux/issues/342)) ([edad4e0](https://github.com/blackbaud/skyux/commit/edad4e054383ecd6c7a0967d8c463234b45da152))

### Bug Fixes

- **components/core:** add timestamp to generated IDs to avoid browser autocomplete collisions across sessions ([#339](https://github.com/blackbaud/skyux/issues/339)) ([4de1127](https://github.com/blackbaud/skyux/commit/4de112756deb64ec9bc53a010b6ea6e1b06d817c))
- **components/datetime:** datepicker handles reactive forms which are disabled during initialization ([#320](https://github.com/blackbaud/skyux/issues/320)) ([679793f](https://github.com/blackbaud/skyux/commit/679793fb23e9303a1dcf06f65f812d23c6c82add))
- **components/lookup:** show more modal toolbars now correctly stick to the top of the modal content ([#343](https://github.com/blackbaud/skyux/issues/343)) ([144a1eb](https://github.com/blackbaud/skyux/commit/144a1eb97b8a6dc381e0b1cf3b9b59308144e52d))

## [6.6.0](https://github.com/blackbaud/skyux/compare/6.5.0...6.6.0) (2022-07-08)

### Features

- **components/datetime:** convert eight digit user-entered input to a date for the datepicker component based on the specified date format ([#334](https://github.com/blackbaud/skyux/issues/334)) ([bfde6c8](https://github.com/blackbaud/skyux/commit/bfde6c823c93a87fa42603d9a49692dadc2f3bb5))

### Bug Fixes

- **components/ag-grid:** center the no-rows overlay ([#336](https://github.com/blackbaud/skyux/issues/336)) ([c67332a](https://github.com/blackbaud/skyux/commit/c67332aa14297db164d05df2040d77406aba8f0e))
- **components/layout:** keep box component's control button placement static when there is no header ([#338](https://github.com/blackbaud/skyux/issues/338)) ([89740be](https://github.com/blackbaud/skyux/commit/89740be0b19e41a0e9d5c08d64164a27aac8a839))

### Deprecations

- **components/layout:** `SkyErrorModalService` is deprecated; use a standard modal with an error component instead ([#328](https://github.com/blackbaud/skyux/issues/328)) ([abb1617](https://github.com/blackbaud/skyux/commit/abb1617d00534d40c6d7579c223dcbb90d3bc52e))

## [6.5.0](https://github.com/blackbaud/skyux/compare/6.4.0...6.5.0) (2022-07-07)

### Features

- **components/theme:** add CSS custom properties for color ([#321](https://github.com/blackbaud/skyux/issues/321)) ([c4802d6](https://github.com/blackbaud/skyux/commit/c4802d6f075a99713982b88f2c9fba8ece6833ba))
- **sdk/testing:** provide actual inner text to resource matchers messages that didn't have it ([#323](https://github.com/blackbaud/skyux/issues/323)) ([abbc6b2](https://github.com/blackbaud/skyux/commit/abbc6b2d5a4d5e13fcff386466bbb81ae5c0282a))

### Bug Fixes

- **components/core:** add timestamp to generated IDs ([#327](https://github.com/blackbaud/skyux/issues/327)) ([bef0548](https://github.com/blackbaud/skyux/commit/bef054829f08a1fcd1a7fb9de9e064a731117c83))
- **components/datetime:** timepicker does not error if all lifecycle hooks do not run prior to destruction ([#324](https://github.com/blackbaud/skyux/issues/324)) ([6deab51](https://github.com/blackbaud/skyux/commit/6deab51e3002df57f2a4431b167d3a510997c0d6))
- **components/theme:** modify margin-bottom styles in Default Visual Style ([#325](https://github.com/blackbaud/skyux/issues/325)) ([d217c75](https://github.com/blackbaud/skyux/commit/d217c7504e67def986b109abeb664bab63c61025))
- **components/theme:** modify margin-right style in Default Visual Style ([#329](https://github.com/blackbaud/skyux/issues/329)) ([e5eb943](https://github.com/blackbaud/skyux/commit/e5eb943feb02b98d93d472b22fc2df278165d69e))
- **components/theme:** use deemphasized text style for sky-font-data-label in Default Visual Style ([#317](https://github.com/blackbaud/skyux/issues/317)) ([3e0d2f4](https://github.com/blackbaud/skyux/commit/3e0d2f460b4a201e11b5986f2170340913d67d51))

## [6.4.0](https://github.com/blackbaud/skyux/compare/6.3.3...6.4.0) (2022-07-05)

### Features

- **components/indicators:** add support for `.sky-control-help` to status indicator ([#312](https://github.com/blackbaud/skyux/issues/312)) ([14bab9d](https://github.com/blackbaud/skyux/commit/14bab9d4665b76915db4f8f38f76682e18b13e11))
- **components/layout:** add support for `.sky-control-help` to description list term ([#319](https://github.com/blackbaud/skyux/issues/319)) ([c68af16](https://github.com/blackbaud/skyux/commit/c68af160c95398cb423eed5b1688a09a156c89bc))

### Bug Fixes

- **components/theme:** use 6px border radius for sky-rounded-corners in Modern Visual Style ([#313](https://github.com/blackbaud/skyux/issues/313)) ([197c3ac](https://github.com/blackbaud/skyux/commit/197c3ac2314d7fb7df9e83737a991db54fb8867c))

### [6.3.3](https://github.com/blackbaud/skyux/compare/6.3.2...6.3.3) (2022-06-24)

### Bug Fixes

- **components/layout:** delay action button height update during init ([#301](https://github.com/blackbaud/skyux/issues/301)) ([d012684](https://github.com/blackbaud/skyux/commit/d0126845c37035691d39f75387935d98e69bbd22))

### [6.3.2](https://github.com/blackbaud/skyux/compare/6.3.1...6.3.2) (2022-06-21)

### Bug Fixes

- **components/ag-grid:** show border when in edit mode ([#294](https://github.com/blackbaud/skyux/issues/294)) ([#295](https://github.com/blackbaud/skyux/issues/295)) ([49fcdfb](https://github.com/blackbaud/skyux/commit/49fcdfb6affedb45dd554e876a1ea61956097d11))
- **components/theme:** inline links and anchor tags display the correct visual styles in modern theme ([#283](https://github.com/blackbaud/skyux/issues/283)) ([#291](https://github.com/blackbaud/skyux/issues/291)) ([96211f5](https://github.com/blackbaud/skyux/commit/96211f52a867a8e89be6018e69177eef1fed7528))
- use large modal size ([#300](https://github.com/blackbaud/skyux/issues/300)) ([#302](https://github.com/blackbaud/skyux/issues/302)) ([5ef6421](https://github.com/blackbaud/skyux/commit/5ef6421313ab08466662b741453af021735b8a03))

### [5.11.2](https://github.com/blackbaud/skyux/compare/5.11.1...5.11.2) (2022-06-21)

### Bug Fixes

- **components/ag-grid:** show border when in edit mode ([#294](https://github.com/blackbaud/skyux/issues/294)) ([7be4106](https://github.com/blackbaud/skyux/commit/7be4106dcf24ad9c35a42cc6f8f9e563c56bcda5))
- **components/theme:** inline links and anchor tags display the correct visual styles in modern theme ([#283](https://github.com/blackbaud/skyux/issues/283)) ([5615c6a](https://github.com/blackbaud/skyux/commit/5615c6aa36107807534277ad1e1f166a63265d9d))
- use large modal size ([#300](https://github.com/blackbaud/skyux/issues/300)) ([761a29f](https://github.com/blackbaud/skyux/commit/761a29fd7710bdb6e7f2bf60a13a3deb7b0cdcb7))
- vulnerabilities remediation ([#292](https://github.com/blackbaud/skyux/issues/292)) ([ffe176b](https://github.com/blackbaud/skyux/commit/ffe176bd5f010620a18064e14392b83094d1accc))

### [6.3.1](https://github.com/blackbaud/skyux/compare/6.3.0...6.3.1) (2022-06-14)

### Bug Fixes

- **components/layout:** hide action button with inaccessible skyhref ([#282](https://github.com/blackbaud/skyux/issues/282)) ([41a1a06](https://github.com/blackbaud/skyux/commit/41a1a064a7394dd45ed36392b39886271b2e5441))

## [6.3.0](https://github.com/blackbaud/skyux/compare/6.2.3...6.3.0) (2022-06-09)

### Features

- **components/ag-grid:** editors follow AG Grid keyboard editing standards ([#274](https://github.com/blackbaud/skyux/issues/274)) ([#284](https://github.com/blackbaud/skyux/issues/284)) ([230aab6](https://github.com/blackbaud/skyux/commit/230aab603904f9c89b7ac85f5c5ff0f72554d05c))

### [5.11.1](https://github.com/blackbaud/skyux/compare/5.11.0...5.11.1) (2022-06-09)

## [5.11.0](https://github.com/blackbaud/skyux/compare/5.10.0...5.11.0) (2022-06-09)

### Features

- **components/ag-grid:** editors follow AG Grid keyboard editing standards ([#274](https://github.com/blackbaud/skyux/issues/274)) ([c785479](https://github.com/blackbaud/skyux/commit/c7854794b3bb0a52a5dd87de28d8470e95d05d39))

### Bug Fixes

- **components/ag-grid:** use functions instead of expressions ([ab89456](https://github.com/blackbaud/skyux/commit/ab8945624958b57ae185280a1308faf8c923f870))

### [6.2.3](https://github.com/blackbaud/skyux/compare/6.2.2...6.2.3) (2022-06-08)

### Bug Fixes

- **components/ag-grid:** use functions instead of expressions ([#281](https://github.com/blackbaud/skyux/issues/281)) ([c39dd21](https://github.com/blackbaud/skyux/commit/c39dd21389257d2be7b127f66c6eb704e94a3ca7))

### [6.2.2](https://github.com/blackbaud/skyux/compare/6.2.1...6.2.2) (2022-06-07)

### Bug Fixes

- **components/packages:** fix ng add schematic to set correct versions of packages ([#280](https://github.com/blackbaud/skyux/issues/280)) ([7d57125](https://github.com/blackbaud/skyux/commit/7d5712581b0ab0e11522ce6cc7eab60e4391e773))

### [6.2.1](https://github.com/blackbaud/skyux/compare/6.2.0...6.2.1) (2022-06-07)

### Bug Fixes

- **components/packages:** fix the `ng add` schematic to install essential SKY UX packages ([#279](https://github.com/blackbaud/skyux/issues/279)) ([3bf13ad](https://github.com/blackbaud/skyux/commit/3bf13ad57a2f63e386428298cde7cb61c3de1e8c))

## [6.2.0](https://github.com/blackbaud/skyux/compare/6.1.0...6.2.0) (2022-06-06)

### Features

- **components/config:** add `csp` property to `SkyuxConfigHost` ([#273](https://github.com/blackbaud/skyux/issues/273)) ([c5b5ede](https://github.com/blackbaud/skyux/commit/c5b5edeffa53bbbd042b5d9c39173c4da2fa29a7))

### Bug Fixes

- **components/forms:** add radio button fixture to public API ([#275](https://github.com/blackbaud/skyux/issues/275)) ([6f3299c](https://github.com/blackbaud/skyux/commit/6f3299c8746903d3f9398bec8d59af07708542bd))

## [6.1.0](https://github.com/blackbaud/skyux/compare/6.0.2...6.1.0) (2022-05-23)

### Features

- **components/validation:** create v2 ruleset for URL validation ([#201](https://github.com/blackbaud/skyux/issues/201)) ([#269](https://github.com/blackbaud/skyux/issues/269)) ([e656eb5](https://github.com/blackbaud/skyux/commit/e656eb57ee49ca91b616d86a7092323705d49fd4))

### Bug Fixes

- **components/action-bars:** persist focus on summary action bar chevrons after animations ([#264](https://github.com/blackbaud/skyux/issues/264)) ([#268](https://github.com/blackbaud/skyux/issues/268)) ([9ba805f](https://github.com/blackbaud/skyux/commit/9ba805f588ff45305a44dfe0fecb26b6ecd6eec4))
- **components/datetime:** update `moment` to version `2.29.3` ([#265](https://github.com/blackbaud/skyux/issues/265)) ([#266](https://github.com/blackbaud/skyux/issues/266)) ([b28d825](https://github.com/blackbaud/skyux/commit/b28d825edbcdc7acc0ec94f31a5290d57397a088))

## [5.10.0](https://github.com/blackbaud/skyux/compare/5.9.7...5.10.0) (2022-05-23)

### Features

- **components/validation:** create v2 ruleset for URL validation ([#201](https://github.com/blackbaud/skyux/issues/201)) ([7eff2a3](https://github.com/blackbaud/skyux/commit/7eff2a3da8662e74b7db84df506953ed54439f48))

### Bug Fixes

- **components/action-bars:** persist focus on summary action bar chevrons after animations ([#264](https://github.com/blackbaud/skyux/issues/264)) ([8473a91](https://github.com/blackbaud/skyux/commit/8473a91638ac25a0436d11328900e5735ac645a5))
- **components/datetime:** update `moment` to version `2.29.3` ([#265](https://github.com/blackbaud/skyux/issues/265)) ([af4e806](https://github.com/blackbaud/skyux/commit/af4e8062cfa5ed49b74d3f588cf1bd4e23ba76f6))

### [6.0.2](https://github.com/blackbaud/skyux/compare/6.0.1...6.0.2) (2022-05-17)

### Bug Fixes

- **components/lists:** repeater a11y improvements for aria role and keyboard interaction ([#241](https://github.com/blackbaud/skyux/issues/241)) ([#256](https://github.com/blackbaud/skyux/issues/256)) ([87dd809](https://github.com/blackbaud/skyux/commit/87dd809a0c71ea1b4e68ef58d8a6edc9d27a4aef))
- **components/lookup:** show more modal opens when triggered from a results dropdown ([#257](https://github.com/blackbaud/skyux/issues/257)) ([#258](https://github.com/blackbaud/skyux/issues/258)) ([b202eac](https://github.com/blackbaud/skyux/commit/b202eaccca1be6723d9688418374274659c50a82))

### [5.9.7](https://github.com/blackbaud/skyux/compare/5.9.6...5.9.7) (2022-05-17)

### Bug Fixes

- **components/lists:** repeater a11y improvements for aria role and keyboard interaction ([#241](https://github.com/blackbaud/skyux/issues/241)) ([0e78bf8](https://github.com/blackbaud/skyux/commit/0e78bf83b10898dfa3d1e830add718607a27e76d))
- **components/lookup:** show more modal opens when triggered from a results dropdown ([#257](https://github.com/blackbaud/skyux/issues/257)) ([0afb8d9](https://github.com/blackbaud/skyux/commit/0afb8d9c89774e4d8e1432b02da53947919ca0d0))

### [6.0.1](https://github.com/blackbaud/skyux/compare/6.0.0...6.0.1) (2022-05-13)

### Bug Fixes

- **components/ag-grid:** data manager not persisting column order ([#244](https://github.com/blackbaud/skyux/issues/244)) ([#245](https://github.com/blackbaud/skyux/issues/245)) ([a681791](https://github.com/blackbaud/skyux/commit/a681791911e194fea55a0324df96b36650ef255a))
- **components/modals:** resize observable media query service ([#252](https://github.com/blackbaud/skyux/issues/252)) ([#253](https://github.com/blackbaud/skyux/issues/253)) ([20b0b41](https://github.com/blackbaud/skyux/commit/20b0b41470276b037af3478fab17fb870e01b56a))
- **components/packages:** add `src/assets` to existing Prettier ignore files ([#248](https://github.com/blackbaud/skyux/issues/248)) ([98f0f94](https://github.com/blackbaud/skyux/commit/98f0f9463e4a791e8fd77bb78e9bb1fc394c62c9))
- **components/tabs:** use padding instead of margin when styling sectioned form content sections ([#238](https://github.com/blackbaud/skyux/issues/238)) ([#250](https://github.com/blackbaud/skyux/issues/250)) ([2233cba](https://github.com/blackbaud/skyux/commit/2233cba46f69917311acf963352aefafb255401d))
- **sdk/prettier-schematics:** include `.angular/cache` and `src/assets` in Prettier's ignore file ([#247](https://github.com/blackbaud/skyux/issues/247)) ([0c8b3b2](https://github.com/blackbaud/skyux/commit/0c8b3b2425ad46046b767ed65645afb7b0b4e277))

### [5.9.6](https://github.com/blackbaud/skyux/compare/5.9.5...5.9.6) (2022-05-13)

### Bug Fixes

- **components/ag-grid:** data manager not persisting column order ([#244](https://github.com/blackbaud/skyux/issues/244)) ([251c65b](https://github.com/blackbaud/skyux/commit/251c65b8c9eb10644ba8d1fe528be48c772daab7))
- **components/modals:** resize observable media query service ([#252](https://github.com/blackbaud/skyux/issues/252)) ([7a22d4e](https://github.com/blackbaud/skyux/commit/7a22d4e4f74e9d3f5a943488092fd399b5588482))
- **components/tabs:** use padding instead of margin when styling sectioned form content sections ([#238](https://github.com/blackbaud/skyux/issues/238)) ([7c06f58](https://github.com/blackbaud/skyux/commit/7c06f584d7e34f848bee8211229cd5fd86797dd1))

## [6.0.0](https://github.com/blackbaud/skyux/compare/6.0.0-beta.11...6.0.0) (2022-05-09)

### [5.9.5](https://github.com/blackbaud/skyux/compare/5.9.4...5.9.5) (2022-05-09)

### Bug Fixes

- **components/lookup:** reset single select autocomplete when the input is blurred while under the minimum search text length ([#234](https://github.com/blackbaud/skyux/issues/234)) ([05907ec](https://github.com/blackbaud/skyux/commit/05907ec4d1a7c5f11abc01f62c3c955d7b8ca88f))

## [6.0.0-beta.11](https://github.com/blackbaud/skyux/compare/6.0.0-beta.10...6.0.0-beta.11) (2022-05-09)

### Features

- **components/packages:** add '.angular/cache' to .prettierignore ([#233](https://github.com/blackbaud/skyux/issues/233)) ([83481a2](https://github.com/blackbaud/skyux/commit/83481a2e742c49f6ab0c852b5fa2a9265135bdb2))

### Bug Fixes

- **components/core:** convert `SkyNumericOptions` from a class to an interface ([#232](https://github.com/blackbaud/skyux/issues/232)) ([8400516](https://github.com/blackbaud/skyux/commit/8400516628977f0ae573861a4d47ce0cf9048345))
- **components/lookup:** reset single select autocomplete when the input is blurred while under the minimum search text length ([#234](https://github.com/blackbaud/skyux/issues/234)) ([#236](https://github.com/blackbaud/skyux/issues/236)) ([270c118](https://github.com/blackbaud/skyux/commit/270c118c891111a53304f69da7e61bf4cd305730))

## [6.0.0-beta.10](https://github.com/blackbaud/skyux/compare/6.0.0-beta.9...6.0.0-beta.10) (2022-05-04)

### Features

- **components/packages:** add `update` schematic to ensure SKY UX stylesheets are configured for all projects ([#226](https://github.com/blackbaud/skyux/issues/226)) ([88c0316](https://github.com/blackbaud/skyux/commit/88c0316883141a163c4aa1af2198e9fdff636f64))

### Bug Fixes

- assume `SkyThemeService` is optional for `SkyFileAttachmentComponent`, `SkySelectionBoxGridComponent`, `SkyDescriptionListDescriptionComponent`, and `SkyModalScrollShadowDirective` ([#214](https://github.com/blackbaud/skyux/issues/214)) ([#216](https://github.com/blackbaud/skyux/issues/216)) ([b83e26f](https://github.com/blackbaud/skyux/commit/b83e26f55fe6cc8b671268a2c824068046108d35))

### Deprecations

- **components/core:** `NumericOptions` is deprecated; use `SkyNumericOptions` instead ([#217](https://github.com/blackbaud/skyux/issues/217)) ([cd3b8c0](https://github.com/blackbaud/skyux/commit/cd3b8c0f9b700cac276d496688bac3bc6f8b3500))
- **components/layout:** `SkyCardComponent` is deprecated; use a different container from the content container guidelines instead ([#221](https://github.com/blackbaud/skyux/issues/221)) ([b965e76](https://github.com/blackbaud/skyux/commit/b965e76009829b1ac5df6c34fe55d844fd83e068))
- **components/layout:** `SkyPageSummaryComponent` is deprecated; use a page template or different technique to summarize page content instead ([#222](https://github.com/blackbaud/skyux/issues/222)) ([0bac652](https://github.com/blackbaud/skyux/commit/0bac652a50528aae078bf96863742f046621d82e))

### [5.9.4](https://github.com/blackbaud/skyux/compare/5.9.3...5.9.4) (2022-05-03)

### Bug Fixes

- assume `SkyThemeService` is optional for `SkyFileAttachmentComponent`, `SkySelectionBoxGridComponent`, `SkyDescriptionListDescriptionComponent`, and `SkyModalScrollShadowDirective` ([#214](https://github.com/blackbaud/skyux/issues/214)) ([1ffe3d7](https://github.com/blackbaud/skyux/commit/1ffe3d7b2b6999eed547c3f0d5bc33760afccd5a))

## [6.0.0-beta.9](https://github.com/blackbaud/skyux/compare/6.0.0-beta.8...6.0.0-beta.9) (2022-05-02)

### Bug Fixes

- **components/core:** add null checks to core adapter focusing methods ([#209](https://github.com/blackbaud/skyux/issues/209)) ([#210](https://github.com/blackbaud/skyux/issues/210)) ([3175ce5](https://github.com/blackbaud/skyux/commit/3175ce5c86e61333788443b7455bbdea844b3d4c))

### [5.9.3](https://github.com/blackbaud/skyux/compare/5.9.2...5.9.3) (2022-05-02)

### Bug Fixes

- **components/core:** add null checks to core adapter focusing methods ([#209](https://github.com/blackbaud/skyux/issues/209)) ([d0846d4](https://github.com/blackbaud/skyux/commit/d0846d46d478cc2e23f26fa397f4808162807b79))

## [6.0.0-beta.8](https://github.com/blackbaud/skyux/compare/6.0.0-beta.7...6.0.0-beta.8) (2022-04-28)

### ⚠ BREAKING CHANGES

- **components/datetime:** Datepicker numeric input is now translated to a date in the current month if the
  input is within the current month's number of days. Numeric input outside of the current month's
  number of days is now treated as invalid and is not converted to a `Date` object.

### Features

- **components/datetime:** convert a user-entered digit into a date for the datepicker component ([#179](https://github.com/blackbaud/skyux/issues/179)) ([70705e1](https://github.com/blackbaud/skyux/commit/70705e123c2ead823e4e6d0f44928563a346b184))
- **components/pages:** add recently accessed service support ([#183](https://github.com/blackbaud/skyux/issues/183)) ([#188](https://github.com/blackbaud/skyux/issues/188)) ([948bb4e](https://github.com/blackbaud/skyux/commit/948bb4e03419ce514216e26ed5cbe53575e49e3b))

### Bug Fixes

- **components/a11y:** skip link button shows proper localized strings ([#197](https://github.com/blackbaud/skyux/issues/197)) ([003a4b3](https://github.com/blackbaud/skyux/commit/003a4b30ecf630868e986e043df4e6baee013c18))
- **components/ag-grid:** support virtual columns with data manager ([#191](https://github.com/blackbaud/skyux/issues/191)) ([#192](https://github.com/blackbaud/skyux/issues/192)) ([9b2c465](https://github.com/blackbaud/skyux/commit/9b2c465b972f90efe76c153e1ac12c838485d3d6))
- **components/core:** scrollable host only notifies of an undefined host if a different host was previously found ([#193](https://github.com/blackbaud/skyux/issues/193)) ([#199](https://github.com/blackbaud/skyux/issues/199)) ([bc38293](https://github.com/blackbaud/skyux/commit/bc38293ef9f9c9c4657ec7da186983486fe0b6e2))
- **components/datetime:** add `SkyDateRange`, `SkyDateRangeCalculatorGetValueFunction`, and `SkyDateRangeCalculatorValidateFunction` to exports API ([#186](https://github.com/blackbaud/skyux/issues/186)) ([3b3b655](https://github.com/blackbaud/skyux/commit/3b3b655959a2d2574033287997325dd9e0a73941))
- **components/flyout:** revert breaking change to `SkyFlyoutService` injectors ([#185](https://github.com/blackbaud/skyux/issues/185)) ([a8ad883](https://github.com/blackbaud/skyux/commit/a8ad883849303aa3a07dfb4349a8415948972a55))
- **components/popovers:** popovers placed above or below target should not be assigned a vertical alignment ([#177](https://github.com/blackbaud/skyux/issues/177)) ([#200](https://github.com/blackbaud/skyux/issues/200)) ([2d26e0a](https://github.com/blackbaud/skyux/commit/2d26e0a19e2255b165f029addb523083c14cfcf6))

### [5.9.2](https://github.com/blackbaud/skyux/compare/5.9.1...5.9.2) (2022-04-28)

### Bug Fixes

- **components/a11y:** skip link button shows proper localized strings ([#190](https://github.com/blackbaud/skyux/issues/190)) ([2067ca5](https://github.com/blackbaud/skyux/commit/2067ca5b8695c8f1d981696dcadafbaa029d69b5))
- **components/core:** scrollable host only notifies of an undefined host if a different host was previously found ([#193](https://github.com/blackbaud/skyux/issues/193)) ([e8fb0fd](https://github.com/blackbaud/skyux/commit/e8fb0fdaa279d4269c8a854bebbe9187b22e92dc))
- **components/popovers:** popovers placed above or below target should not be assigned a vertical alignment ([#177](https://github.com/blackbaud/skyux/issues/177)) ([5295b30](https://github.com/blackbaud/skyux/commit/5295b308454f8a6abbcd2a6c042881a42ab32da1))

### [5.9.1](https://github.com/blackbaud/skyux/compare/5.9.0...5.9.1) (2022-04-27)

### Bug Fixes

- **components/ag-grid:** support virtual columns with data manager ([#191](https://github.com/blackbaud/skyux/issues/191)) ([018fb63](https://github.com/blackbaud/skyux/commit/018fb63bfc4f5bc9117996937eae2306ffe834c4))
- **components/datetime:** add `SkyDateRange`, `SkyDateRangeCalculatorGetValueFunction`, and `SkyDateRangeCalculatorValidateFunction` to exports API ([#187](https://github.com/blackbaud/skyux/issues/187)) ([8ffcb56](https://github.com/blackbaud/skyux/commit/8ffcb568fd79706ef8541cad3a67a09584c503af))

## [5.9.0](https://github.com/blackbaud/skyux/compare/5.8.4...5.9.0) (2022-04-26)

### Features

- **components/pages:** add recently accessed service support ([#183](https://github.com/blackbaud/skyux/issues/183)) ([ab97542](https://github.com/blackbaud/skyux/commit/ab97542edc3cfb3f7e816504f0cc95ca59d4ad75))

## [6.0.0-beta.7](https://github.com/blackbaud/skyux/compare/6.0.0-beta.6...6.0.0-beta.7) (2022-04-22)

### Bug Fixes

- **components/ag-grid:** respect value of deprecated `frameworkComponents` ([#181](https://github.com/blackbaud/skyux/issues/181)) ([b741f2f](https://github.com/blackbaud/skyux/commit/b741f2ff68918b657e7ba9750ffcff39e11c8e86))

### Deprecations

- **components/grids:** `SkyGridComponent` is deprecated; use data grid instead ([#175](https://github.com/blackbaud/skyux/issues/175)) ([390e40e](https://github.com/blackbaud/skyux/commit/390e40ed4f9589bc8093350092bc8b54f85216ab))
- **components/select-field:** `SkySelectFieldComponent` is deprecated; use `SkyLookupComponent` instead ([#176](https://github.com/blackbaud/skyux/issues/176)) ([11976dc](https://github.com/blackbaud/skyux/commit/11976dc744d546eb67a5ada208252e72a72da1f3))
- list builder is deprecated; use data manager and an appropriate view instead ([#178](https://github.com/blackbaud/skyux/issues/178)) ([d19b63b](https://github.com/blackbaud/skyux/commit/d19b63b99cad4f2ab2d4d5f43cc7417618e99faf))

## [6.0.0-beta.6](https://github.com/blackbaud/skyux/compare/6.0.0-beta.5...6.0.0-beta.6) (2022-04-20)

### Deprecations

- **components/layout:** `SkyDefinitionListComponent` is deprecated; use `SkyDescriptionListComponent` instead ([#174](https://github.com/blackbaud/skyux/issues/174)) ([d105ded](https://github.com/blackbaud/skyux/commit/d105ded299bbc91ee8f00c94da7098e3d07515c9))

## [6.0.0-beta.5](https://github.com/blackbaud/skyux/compare/6.0.0-beta.4...6.0.0-beta.5) (2022-04-19)

### Features

- **components/ag-grid:** add support for `ag-grid-community@^27.2.0` ([#171](https://github.com/blackbaud/skyux/issues/171)) ([5b87ccf](https://github.com/blackbaud/skyux/commit/5b87ccf89459e313f513a31c502a36530d896c3f))

### Bug Fixes

- **apps/code-examples:** fix type errors for ag-grid basic code example ([#169](https://github.com/blackbaud/skyux/issues/169)) ([225b5ad](https://github.com/blackbaud/skyux/commit/225b5ade4400edd958bdb260ec645b1f775d4300))

## [6.0.0-beta.4](https://github.com/blackbaud/skyux/compare/6.0.0-beta.3...6.0.0-beta.4) (2022-04-18)

### ⚠ BREAKING CHANGES

- **components/ag-grid:** Drop support for `ag-grid-community@26.0.0`

### Features

- **components/ag-grid:** add support for `ag-grid-community@27.1.0` ([#148](https://github.com/blackbaud/skyux/issues/148)) ([597e9b0](https://github.com/blackbaud/skyux/commit/597e9b04a37c8f451f3d02e3eedaa0b9346baff0))
- **components/indicators:** replace `string` alert types with dedicated `SkyAlertType` type ([#164](https://github.com/blackbaud/skyux/issues/164)) ([abda1f3](https://github.com/blackbaud/skyux/commit/abda1f36d7a18f8b6feecbac181504e0f6a6f0f4))
- update `ng2-dragula` to `2.1.1` ([#155](https://github.com/blackbaud/skyux/issues/155)) ([47c6d54](https://github.com/blackbaud/skyux/commit/47c6d546a6199daa3c44b73b471cc4709d72aaf1))

### Bug Fixes

- **components/angular-tree-component:** update @circlon/angular-tree-component to 11.0.3 ([#150](https://github.com/blackbaud/skyux/issues/150)) ([#152](https://github.com/blackbaud/skyux/issues/152)) ([5ff7e58](https://github.com/blackbaud/skyux/commit/5ff7e582763a931ee58dc465b6d1304b83023dd2))

### [5.8.4](https://github.com/blackbaud/skyux/compare/5.8.3...5.8.4) (2022-04-18)

### Bug Fixes

- **components/angular-tree-component:** update `@circlon/angular-tree-component` to `11.0.3` ([#150](https://github.com/blackbaud/skyux/issues/150)) ([296c200](https://github.com/blackbaud/skyux/commit/296c20009b6c887735e270ef12b695c6eef64cc6))

## [6.0.0-beta.3](https://github.com/blackbaud/skyux/compare/6.0.0-beta.2...6.0.0-beta.3) (2022-04-12)

### ⚠ BREAKING CHANGES

- **components/data-manager:** The properties `additionalOptions`, `onClearAllClick`, and `onSelectAllClick` of
  `SkyDataViewConfig` are assigned more specific types.

### Features

- **components/ag-grid:** add text cell maxlength and number cell min/max options ([#113](https://github.com/blackbaud/skyux/issues/113)) ([#115](https://github.com/blackbaud/skyux/issues/115)) ([66e6e81](https://github.com/blackbaud/skyux/commit/66e6e81491180aeab03cda6c91ab09a643683db1))
- **components/core:** create a resize observer service as a media query service for modals ([#70](https://github.com/blackbaud/skyux/issues/70)) ([#116](https://github.com/blackbaud/skyux/issues/116)) ([fb86ca6](https://github.com/blackbaud/skyux/commit/fb86ca6a9a906b0c30a8d5e081057dfd77e1e440))
- update country field and phone field dependencies ([#111](https://github.com/blackbaud/skyux/issues/111)) ([#112](https://github.com/blackbaud/skyux/issues/112)) ([cfb7f90](https://github.com/blackbaud/skyux/commit/cfb7f90463bfe8913159208fc9722fb0ae926b00))

### Bug Fixes

- **components/ag-grid:** ag-grid: display validator popover using a delayed hover event ([#87](https://github.com/blackbaud/skyux/issues/87)) ([#110](https://github.com/blackbaud/skyux/issues/110)) ([5d402e7](https://github.com/blackbaud/skyux/commit/5d402e7d800a9685f5a24e70d01dc0bd09edbbb2))
- **components/ag-grid:** amend public exports API and JSDocs ([#132](https://github.com/blackbaud/skyux/issues/132)) ([#135](https://github.com/blackbaud/skyux/issues/135)) ([e2321f9](https://github.com/blackbaud/skyux/commit/e2321f94d74d20feb14897afc99f76d979db61a2))
- **components/ag-grid:** set lookup cell editor width to match column ([#126](https://github.com/blackbaud/skyux/issues/126)) ([#127](https://github.com/blackbaud/skyux/issues/127)) ([f50f9e9](https://github.com/blackbaud/skyux/commit/f50f9e97e2daa0ca02911a32ffc699d4149be772))
- **components/core:** fix inheritance issue with resize observer media query service ([#122](https://github.com/blackbaud/skyux/issues/122)) ([#124](https://github.com/blackbaud/skyux/issues/124)) ([1965495](https://github.com/blackbaud/skyux/commit/196549547e962f8ef8771ed957958ac991865e1c))
- **components/data-manager:** assign specific types to properties of `SkyDataViewConfig` ([#89](https://github.com/blackbaud/skyux/issues/89)) ([25c89f4](https://github.com/blackbaud/skyux/commit/25c89f41ea675dc65a2652e15721fee98b10edff))
- **components/lists:** add ARIA label to pagination link button ([#99](https://github.com/blackbaud/skyux/issues/99)) ([0239b1b](https://github.com/blackbaud/skyux/commit/0239b1b6a731de8c99cb8823cb8d1fa6ea885604))
- **components/popovers:** respect alignment and placement values supplied to the popover component ([#139](https://github.com/blackbaud/skyux/issues/139)) ([#141](https://github.com/blackbaud/skyux/issues/141)) ([dd1976d](https://github.com/blackbaud/skyux/commit/dd1976d3c22213a778bda42c8a63b6378fce1bca))
- **components/theme:** add package exports for sky.css ([#146](https://github.com/blackbaud/skyux/issues/146)) ([28f5df4](https://github.com/blackbaud/skyux/commit/28f5df495ae6b4a79b9fbde230f197c74b104c61))

### [5.8.3](https://github.com/blackbaud/skyux/compare/5.8.2...5.8.3) (2022-04-11)

### Bug Fixes

- **components/popovers:** respect alignment and placement values supplied to the popover component ([#139](https://github.com/blackbaud/skyux/issues/139)) ([03dc247](https://github.com/blackbaud/skyux/commit/03dc24722effde36597f9f5b8a557c4a85174775))

### [5.8.2](https://github.com/blackbaud/skyux/compare/5.8.1...5.8.2) (2022-04-08)

### Bug Fixes

- **components/ag-grid:** amend public exports API and JSDocs ([#132](https://github.com/blackbaud/skyux/issues/132)) ([f78d29a](https://github.com/blackbaud/skyux/commit/f78d29a1b6c3452fc20e2cbca6661b19c1c22096))
- **components/ag-grid:** set lookup cell editor width to match column ([#126](https://github.com/blackbaud/skyux/issues/126)) ([f51485a](https://github.com/blackbaud/skyux/commit/f51485acf73e510fb4267f843ec7b4a1526c59af))

### [5.8.1](https://github.com/blackbaud/skyux/compare/5.8.0...5.8.1) (2022-04-07)

### Bug Fixes

- **components/core:** fix inheritance issue with resize observer media query service ([#122](https://github.com/blackbaud/skyux/issues/122)) ([4bbf0c6](https://github.com/blackbaud/skyux/commit/4bbf0c61339f7ac50c74941554a7c6fc732ea979))

## [5.8.0](https://github.com/blackbaud/skyux/compare/5.7.2...5.8.0) (2022-04-07)

### Features

- **components/ag-grid:** add text cell maxlength and number cell min/max options ([#113](https://github.com/blackbaud/skyux/issues/113)) ([f20702d](https://github.com/blackbaud/skyux/commit/f20702dfa824c6cb7363383bda828b809d85d87e))
- **components/core:** create a resize observer service as a media query service for modals ([#70](https://github.com/blackbaud/skyux/issues/70)) ([08a5313](https://github.com/blackbaud/skyux/commit/08a5313d4b0bdeeb1a1502c12fc46e92868e2432))
- update country field and phone field dependencies ([#111](https://github.com/blackbaud/skyux/issues/111)) ([24fe035](https://github.com/blackbaud/skyux/commit/24fe035091a72d8a2f3656cd26a8ce2e8600fe66))

### Bug Fixes

- **components/ag-grid:** ag-grid: display validator popover using a delayed hover event ([#87](https://github.com/blackbaud/skyux/issues/87)) ([38ebddb](https://github.com/blackbaud/skyux/commit/38ebddb8dad56322757e3f222e17c0abcdb320b0))
- **components/lists:** add ARIA label to pagination link button ([#99](https://github.com/blackbaud/skyux/issues/99)) ([#114](https://github.com/blackbaud/skyux/issues/114)) ([c222aa0](https://github.com/blackbaud/skyux/commit/c222aa0c675148ea12bcfb704a202aea27b3f431))

## [6.0.0-beta.2](https://github.com/blackbaud/skyux/compare/6.0.0-beta.1...6.0.0-beta.2) (2022-04-01)

### Bug Fixes

- **components/lookup:** fix loop caused by highlighting empty search string ([#91](https://github.com/blackbaud/skyux/issues/91)) ([#101](https://github.com/blackbaud/skyux/issues/101)) ([ec20a27](https://github.com/blackbaud/skyux/commit/ec20a2790afcf56cb5a904cfe5795b6a44ba5e1b))
- **components/tabs:** fix disappearing URL params ([#77](https://github.com/blackbaud/skyux/issues/77)) ([#95](https://github.com/blackbaud/skyux/issues/95)) ([0fb92ab](https://github.com/blackbaud/skyux/commit/0fb92ab7340618c78f6f65a1218a74d911e8ef31))
- **migrations:** install `@angular/cdk` if relevant packages installed ([#96](https://github.com/blackbaud/skyux/issues/96)) ([69a2390](https://github.com/blackbaud/skyux/commit/69a2390175fa044a6379157a01c81d2ad66c81c0))
- **migrations:** remove extensions from tilde imports ([#102](https://github.com/blackbaud/skyux/issues/102)) ([c8793cf](https://github.com/blackbaud/skyux/commit/c8793cf6a207347a278db65588db10237567b854))

### [5.7.2](https://github.com/blackbaud/skyux/compare/5.7.1...5.7.2) (2022-04-01)

### Bug Fixes

- **components/lookup:** fix loop caused by highlighting empty search string ([#91](https://github.com/blackbaud/skyux/issues/91)) ([675c0d8](https://github.com/blackbaud/skyux/commit/675c0d8bc00c72570a5a17542628f971936aa05c))
- **components/tabs:** fix disappearing URL params ([#77](https://github.com/blackbaud/skyux/issues/77)) ([bd52111](https://github.com/blackbaud/skyux/commit/bd52111f37b00d6cf09dcf12247f0499b674c8cb))
- vulnerabilities remediation ([#93](https://github.com/blackbaud/skyux/issues/93)) ([036ec99](https://github.com/blackbaud/skyux/commit/036ec99632edb14f44445e83b2ab4cde59f70219))

## [6.0.0-beta.1](https://github.com/blackbaud/skyux/compare/6.0.0-beta.0...6.0.0-beta.1) (2022-03-30)

### Features

- **migrations:** add migrate schematic to fix SCSS tilde imports ([#94](https://github.com/blackbaud/skyux/issues/94)) ([1a579b9](https://github.com/blackbaud/skyux/commit/1a579b9eeccefbaa2bad2eda5213f1e805d044f7))

### Bug Fixes

- **components/theme:** add SCSS variables and mixins to package exports ([#92](https://github.com/blackbaud/skyux/issues/92)) ([ccf6ed7](https://github.com/blackbaud/skyux/commit/ccf6ed76f847de7c3ee299fd0c7f43b729352b2c))

## [6.0.0-beta.0](https://github.com/blackbaud/skyux/compare/5.7.1...6.0.0-beta.0) (2022-03-28)

### ⚠ BREAKING CHANGES

- **migrations:** Drop support for Angular 12

### Features

- **migrations:** add support for Angular v13 ([#85](https://github.com/blackbaud/skyux/issues/85)) ([291a024](https://github.com/blackbaud/skyux/commit/291a024398b0b291329b4be47488788b73c18273))

### [5.7.1](https://github.com/blackbaud/skyux/compare/5.7.0...5.7.1) (2022-03-28)

### Bug Fixes

- **components/action-bars:** summary action bar summaries can be added and removed dynamically ([#79](https://github.com/blackbaud/skyux/issues/79)) ([c6f4348](https://github.com/blackbaud/skyux/commit/c6f434855c758156ed5df7bbfd2c3b67f5e3ba7c))
- **components/forms:** browser autofill stylings on input box text areas cover the whole input box ([#80](https://github.com/blackbaud/skyux/issues/80)) ([0ef0eb7](https://github.com/blackbaud/skyux/commit/0ef0eb7d932ee2468487f2e3ae427417512cefb1))

## [5.7.0](https://github.com/blackbaud/skyux/compare/5.6.2...5.7.0) (2022-03-23)

### Features

- **components/layout:** implement scrollable host service in Back To Top component ([#65](https://github.com/blackbaud/skyux/issues/65)) ([49bc5f7](https://github.com/blackbaud/skyux/commit/49bc5f7a26800780c12b5044ac9f44b938f2384c))

### Bug Fixes

- **components/flyout:** navigating when a flyout is open does not throw an error ([#75](https://github.com/blackbaud/skyux/issues/75)) ([b18948b](https://github.com/blackbaud/skyux/commit/b18948b77d7f2da3a4a72cb88b2686dd24c95088))
- **components/lookup:** fix `toString` call on undefined value ([#69](https://github.com/blackbaud/skyux/issues/69)) ([f28b4a6](https://github.com/blackbaud/skyux/commit/f28b4a6e3700873e428173639b6785a3322d30cc))
- **components/router:** fix skyhref resolution with onpush change detection ([#71](https://github.com/blackbaud/skyux/issues/71)) ([4246387](https://github.com/blackbaud/skyux/commit/4246387666d50242baa8ed3ca5c675a1165181f4))

### [5.6.2](https://github.com/blackbaud/skyux/compare/5.6.1...5.6.2) (2022-03-11)

### Bug Fixes

- **components/datetime:** emit value change event only once when setting the control value of a datepicker ([#49](https://github.com/blackbaud/skyux/issues/49)) ([06c15fa](https://github.com/blackbaud/skyux/commit/06c15fad01b9803a55080ba0cfef50ddf5dce5d4))
- **components/lookup:** open lookup show more modal correctly when no value is given while in single select mode ([#53](https://github.com/blackbaud/skyux/issues/53)) ([e296d9f](https://github.com/blackbaud/skyux/commit/e296d9fa01beb2bc770ae69a4a0a6b95401e4389))

### [5.6.1](https://github.com/blackbaud/skyux/compare/5.6.0...5.6.1) (2022-03-04)

### Bug Fixes

- **text-editor:** updated `dompurify` dependency to version `2.3.6` ([#37](https://github.com/blackbaud/skyux/issues/37)) ([9bb7915](https://github.com/blackbaud/skyux/commit/9bb791583dcdfae011823d4b9021c4040514fb8b))

## 5.6.0 (2022-03-02)

### Features

- **ci:** Updated release process to follow `standard-version` changelog conventions.

### Bug Fixes

- **grids:** Fix grid component to properly update columns when they are changed via the `columns` input ([#6](https://github.com/blackbaud/skyux/issues/6)) ([b3bf822](https://github.com/blackbaud/skyux/commit/b3bf822653671050e2cbc711fb2c2245df311957))
- **grids:** Fix the grid component to not improperly add the aria-selected property to grid rows ([#3](https://github.com/blackbaud/skyux/issues/3)) ([117da75](https://github.com/blackbaud/skyux/commit/117da755814d88fc6d7906b390699ddafe641c79))
- **ng-add:** only add config if none exist ([#4](https://github.com/blackbaud/skyux/issues/4)) ([a859f9b](https://github.com/blackbaud/skyux/commit/a859f9b40134a21d09a1fdad77bbe1c9e7ce285a))
- **prettier-schematics:** Fix dist bundle to include the collection.json file ([#11](https://github.com/blackbaud/skyux/issues/11)) ([fda225d](https://github.com/blackbaud/skyux/commit/fda225dc4324d5eec6fd1aeb0881ab464c33ceee))

## 5.5.0 (2022-02-25)

- First stable release for monorepo.

## 5.5.0-beta.0 (2022-02-25)

- First beta release for monorepo.
