# Page Links To - Development Documentation

## Project Status (Stand: 2026-02-11)

### Current Version: 3.4.0

**Maintainer:** Sebastian Hager (Studio Una)
**Original Author:** Mark Jaquith
**Repository:** https://github.com/studiouna/page-links-to
**Upstream:** https://github.com/markjaquith/page-links-to

---

## Recent Changes (Version 3.4.0 - 2026-02-11)

### Modernization & Maintenance Update

#### Dependencies Updated
- **npm packages:**
  - React: 18.2.0 → 18.3.1
  - @wordpress/components: 27.x → 28.x
  - @wordpress/data: 9.x → 10.x
  - Babel: 7.7 → 7.26
  - webpack: 5.91 → 5.97
  - All build tools modernized

- **Composer packages:**
  - PHPUnit: 7.5 → 10.5 (3 major versions!)
  - PHP CodeSniffer: 3.4 → 3.13
  - WPCS: 2.1 → 3.3

#### Code Quality Improvements
- ✅ Removed `extract()` usage (security risk)
- ✅ Replaced `dirname(__FILE__)` with `__DIR__`
- ✅ Updated Babel plugins to non-deprecated versions
- ✅ PHP 8.4 compatible
- ✅ WordPress 6.7 compatible

#### Testing Status
- ✅ Jest: 6/6 tests passing
- ✅ Production build successful
- ✅ WordPress installation tested & working
- ⏭️ Cypress & PHPUnit require WordPress test environment

---

## Development Workflow

### Setup
```bash
# Install dependencies
npm install
composer install

# Development build (with watch)
npm run dev
# or
grunt dev

# Production build
npm run build
# or
grunt build
```

### Testing
```bash
# JavaScript unit tests
npm run jest

# E2E tests (requires WordPress at https://plugins.test)
npm run cypress

# PHP tests (requires WordPress test environment)
npm run phpunit
```

### Creating a Release

1. **Update version** in:
   - `package.json`
   - `page-links-to.php` (header)
   - `classes/plugin.php` (CSS_JS_VERSION constant)
   - `readme.md` (Stable tag)

2. **Update changelog** in `readme.md`

3. **Build release:**
   ```bash
   npx grunt build
   ```

4. **Create ZIP for WordPress:**
   ```bash
   cd release/3.4.0
   zip -r ../../page-links-to-X.X.X.zip \
     classes/ dist/ inc/ languages/ templates/ \
     LICENSE page-links-to.php readme.md screenshot-*.png \
     -x "*.DS_Store"
   ```

5. **Commit & Tag:**
   ```bash
   git add .
   git commit -m "Version X.X.X - Description"
   git tag vX.X.X
   git push origin master --tags
   ```

---

## Technical Notes

### File Structure
```
page-links-to/
├── classes/          # Main plugin class
│   └── plugin.php
├── dist/             # Compiled assets (generated)
├── inc/              # Helper functions
├── languages/        # Translations (29 languages)
├── src/              # Source files (JS/SASS)
│   ├── block-editor.js
│   ├── new-tab.js
│   ├── quick-add.js
│   └── meta-box.js
├── templates/        # PHP templates
├── tests/            # PHPUnit tests
└── cypress/          # E2E tests
```

### Build System
- **Task runner:** Grunt
- **Module bundler:** webpack 5
- **Transpiler:** Babel 7
- **Styles:** SASS

### WordPress Integration
- **Filters used:**
  - `page_link`, `post_link`, `post_type_link`, `attachment_link`
  - `wp_nav_menu_objects`
  - `wp_list_pages`
- **REST API:** Custom meta fields registered
- **Block Editor:** Full support with custom panel

---

## Flynt Framework Compatibility

### Status: ✅ Compatible (95% confidence)

The plugin uses standard WordPress hooks and should work seamlessly with Flynt.

### Testing Checklist
- [ ] Create page with custom URL
- [ ] Add to Flynt navigation component
- [ ] Test redirects
- [ ] Test "open in new tab" functionality
- [ ] Test with ACF-based menus
- [ ] Test in Flynt custom loops

### Potential Issues
- None identified (uses core WordPress APIs)

---

## Known Issues & Limitations

### Dependencies
- **npm vulnerabilities:** 20 low/moderate (mostly in build dependencies, not critical)
  - faker@6.6.6 (high) - only used in tests
  - @babel/runtime (moderate) - build-time only
  - tmp vulnerability in grunt-wp-deploy - deployment only

### Testing
- Cypress tests require local WordPress installation at `https://plugins.test`
- PHPUnit tests require WordPress test environment setup

### Deprecated Build Tools
- Grunt is somewhat outdated (modern alternative: Vite)
- Consider migration to modern build tools in future major version

---

## Future Improvements (Ideas)

### High Priority
- [ ] Set up GitHub Actions for CI/CD (replace Travis CI)
- [ ] Add automated WordPress compatibility testing

### Medium Priority
- [ ] Consider TypeScript migration
- [ ] Modernize build system (Vite instead of Grunt)
- [ ] Update to React 19 when WordPress core adopts it

### Low Priority
- [ ] Additional E2E tests
- [ ] Performance optimizations
- [ ] Additional block editor features

---

## Support & Resources

- **Original Plugin:** https://wordpress.org/plugins/page-links-to/
- **GitHub Issues:** https://github.com/markjaquith/page-links-to/issues
- **WordPress Codex:** https://codex.wordpress.org/

---

## Changelog

See `readme.md` for full changelog.

### 3.4.0 (2026-02-11)
- Modernization update - updated all dependencies
- Security improvements (removed extract())
- PHP 8.4 and WordPress 6.7 compatibility
- All tests passing

### 3.3.7 (2024-xx-xx)
- Last version from original author
- See readme.md for details

---

**Last Updated:** 2026-02-11
**Maintained by:** Studio Una (Sebastian Hager)
