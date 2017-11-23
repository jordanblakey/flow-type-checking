# Flow Static Type Checker

**Flow is a static type checker for javascript.**

- Flow identifies problems as you code. Stop wasting your time guessing and checking.

- Flow understands your code and makes its knowledge available.

- Making major changes to large codebases can be scary. Flow helps you refactor safely, so you can focus on the changes you want to make, and stop worrying about what you might break.

- Working in a codebase with lots of developers can make it difficult to keep your master branch working. Flow can help prevent bad rebases. Flow can help protect your carefully designed library from your coworkers. And Flow can help you understand the code you wrote six months ago.

## Exmaple Installation (Babel)

```bash
yarn init
history --help
yarn add --dev babel-cli babel-preset-flow
touch .babelrc
yarn add flow-bin
flow init
flow
flow status
flow --help
yarn build
yarn prepublish
```

## Flow documentation

[https://flow.org/en/docs/](https://flow.org/en/docs/)

### Type Annotations by Category

[primitives](https://flow.org/en/docs/types/primitives/) |
[literals](https://flow.org/en/docs/types/literals/) |
[mixed](https://flow.org/en/docs/types/mixed/) |
[any](https://flow.org/en/docs/types/any/) |
[maybe](https://flow.org/en/docs/types/maybe/) |
[variables](https://flow.org/en/docs/types/variables/) |
[function](https://flow.org/en/docs/types/functions/) |
[objects](https://flow.org/en/docs/types/objects/) |
[arrays](https://flow.org/en/docs/types/arrays/) |
[tuples](https://flow.org/en/docs/types/tuples/) |
[classes](https://flow.org/en/docs/types/classes/) |
[aliases](https://flow.org/en/docs/types/aliases/) |
[opaque-types](https://flow.org/en/docs/types/opaque-types/) |
[interfaces](https://flow.org/en/docs/types/interfaces/) |
[generics](https://flow.org/en/docs/types/generics/) |
[unions](https://flow.org/en/docs/types/unions/) |
[intersections](https://flow.org/en/docs/types/intersections/) |
[typeof](https://flow.org/en/docs/types/typeof/) |
[casting](https://flow.org/en/docs/types/casting/) |
[utilities](https://flow.org/en/docs/types/utilities/) |
[modules](https://flow.org/en/docs/types/modules/) |
[comments](https://flow.org/en/docs/types/comments/)

### Example Project Structure and .flowconfig

``` bash
otherdir
└── src
    └── othercode.js
flow-type checking
├── .flowconfig
├── build
│   ├── first.js
├── lib
│   └── flow
├── node_modules
│   └── es6-shim
└── src
    └── first.js
```

```bash
# This is a comment
  # This is a comment

[include]
../otherdir/src

[ignore]
.*/build/.*

[libs]
./lib

[lints]
# all=off by default
all=warn
untyped-type-import=error
sketchy-null-bool=off

[options]

[strict]

```

### Setup with create-react-app

- `create-react-app my-app && cd my-app`
- `yarn add --dev flow-bin`
- `yarn run flow init`

``` js
import * as React from 'react';

type Props = {
  foo: number, // foo is required.
  bar?: string, // bar is optional
};

type State = {
  count: number,
};

class MyComponent extends React.Component<Props, State> {
  state = {
    count: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  render() {
    return <div>Count: {this.state.count}</div>;
  }
}

<MyComponent foo={42} bar="I'm a string." />; // note that foo is required but bar is not.
```

### Help

*Get full help for flow CLI*
`flow --help`

*Get help for a specific Flow subcommand*
`flow autocomplete --help`

``` bash
Usage: flow [COMMAND]

Valid values for COMMAND:
  ast             Print the AST
  autocomplete    Queries autocompletion information
  check           Does a full Flow check and prints the results
  check-contents  Run typechecker on contents from stdin
  coverage        Shows coverage information for a given file
  find-module     Resolves a module reference to a file
  get-def         Gets the definition location of a variable or property
  get-importers   Gets a list of all importers for one or more given modules
  get-imports     Get names of all modules imported by one or more given modules
  init            Initializes a directory to be used as a flow root directory
  port            Shows ported type annotations for given files
  server          Runs a Flow server in the foreground
  start           Starts a Flow server
  status          (default) Shows current Flow errors by asking the Flow server
  stop            Stops a Flow server
  suggest         Shows type annotation suggestions for given files
  type-at-pos     Shows the type at a given file and position
  version         Print version information

Default values if unspecified:
  COMMAND         status

Status command options:
  --color              Display terminal output in color. never, always, auto (default: auto)
  --from               Specify client (for use by editor plugins)
  --help               This list of options
  --json               Output results in JSON format
  --no-auto-start      If the server is not running, do not start it; just exit
  --old-output-format  Use old output format (absolute file names, line and column numbers)
  --one-line           Escapes newlines so that each error prints on one line
  --retries            Set the number of retries. (default: 3)
  --retry-if-init      retry if the server is initializing (default: true)
  --show-all-errors    Print all errors (the default is to truncate after 50 errors)
  --strip-root         Print paths without the root
  --temp-dir           Directory in which to store temp files (default: /tmp/flow/)
  --timeout            Maximum time to wait, in seconds
  --version            (Deprecated, use `flow version` instead) Print version number and exit
  ```