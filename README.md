ABCCSS
======

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @ruedap/abccss
$ abccss COMMAND
running command...
$ abccss (-v|--version|version)
@ruedap/abccss/0.12.0 darwin-x64 node-v8.11.3
$ abccss --help [COMMAND]
USAGE
  $ abccss COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`abccss component COMPONENT_NAME [STYLESHEETS_ROOT_DIR]`](#abccss-component-component-name-stylesheets-root-dir)
* [`abccss decoration DECORATION_NAME [STYLESHEETS_ROOT_DIR]`](#abccss-decoration-decoration-name-stylesheets-root-dir)
* [`abccss help [COMMAND]`](#abccss-help-command)
* [`abccss new [STYLESHEETS_ROOT_DIR]`](#abccss-new-stylesheets-root-dir)

## `abccss component COMPONENT_NAME [STYLESHEETS_ROOT_DIR]`

generate a Component template file

```
USAGE
  $ abccss component COMPONENT_NAME [STYLESHEETS_ROOT_DIR]

ARGUMENTS
  COMPONENT_NAME        set component name
  STYLESHEETS_ROOT_DIR  set output dir. defaults to "src/templates/stylesheets/"

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ abccss component MyAwesomeComponent
  Generated: path/to/stylesheets/components/_my-awesome-component.scss
```

_See code: [src/commands/component.ts](https://github.com/ruedap/abccss/blob/v0.12.0/src/commands/component.ts)_

## `abccss decoration DECORATION_NAME [STYLESHEETS_ROOT_DIR]`

generate a Decoration template file

```
USAGE
  $ abccss decoration DECORATION_NAME [STYLESHEETS_ROOT_DIR]

ARGUMENTS
  DECORATION_NAME       set decoration name
  STYLESHEETS_ROOT_DIR  set output dir. defaults to "src/templates/stylesheets/"

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ abccss decoration MyAwesomeDecoration
  Generated: path/to/stylesheets/decorations/_my-awesome-decoration.scss
```

_See code: [src/commands/decoration.ts](https://github.com/ruedap/abccss/blob/v0.12.0/src/commands/decoration.ts)_

## `abccss help [COMMAND]`

display help for abccss

```
USAGE
  $ abccss help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.0.5/src/commands/help.ts)_

## `abccss new [STYLESHEETS_ROOT_DIR]`

generate new ABCCSS structure files

```
USAGE
  $ abccss new [STYLESHEETS_ROOT_DIR]

ARGUMENTS
  STYLESHEETS_ROOT_DIR  set output dir. defaults to "src/templates/stylesheets/"

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ abccss new path/to/stylesheets/
  Generated: path/to/stylesheets/
  Generated: .abccssrc
```

_See code: [src/commands/new.ts](https://github.com/ruedap/abccss/blob/v0.12.0/src/commands/new.ts)_
<!-- commandsstop -->

---

MIT © [ruedap](https://github.com/ruedap)
