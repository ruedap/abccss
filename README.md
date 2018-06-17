# ABCCSS

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
  <!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g abccss
$ abccss COMMAND
running command...
$ abccss (-v|--version|version)
abccss/0.7.0 darwin-x64 node-v8.10.0
$ abccss --help [COMMAND]
USAGE
  $ abccss COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`abccss hello [FILE]`](#abccss-hello-file)
- [`abccss help [COMMAND]`](#abccss-help-command)

## `abccss hello [FILE]`

describe the command here

```
USAGE
  $ abccss hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ abccss hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/ruedap/abccss/blob/v0.7.0/src/commands/hello.ts)_

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

<!-- commandsstop -->

---

MIT © [ruedap](https://github.com/ruedap)
