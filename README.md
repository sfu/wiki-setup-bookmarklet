# SFU MediaWiki Setup Bookmarklet

This bookmarklet simplifies setup of MediaWiki in SFU's environment. It autofills constant paramaters and prompts for a couple of variables (sitename and DB prefix) with suggested defaults.

## Installation
0. Clone the repo somewhere (git clone git://github.com/sfu/wiki-setup-bookmarklet.git /tmp/wiki-setup-bookmarklet && cd /tmp/wiki-setup-bookmarklet)
1. SysOp and DB passwords are not included in the source. Edit src.js and replace instances of "REPLACE\_ME" with the appropriate passwords.
2. Change the default database if necessary.
3. Run the build script (./build).
4. The minified bookmarklet will be created as bookmarklet.js. Add it to your browser of choice.

## Usage
Invoke the bookmarklet from a MediaWiki config page. You will be prompted for the Sitename, DB name and DB prefix. Enter values (or accept the defaults). Check the form and if OK, click "Install MediaWiki" and proceed with the rest of the setup.

## Notes
The build script uses jsmin.c from Douglas Crockford (http://www.crockford.com/javascript/jsmin.c) to minify src.js. A compiled copy (using gcc on OS X 10.7.2) is included.