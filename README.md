# pi-quit-extension

A small [pi](https://pi.dev) package that lets you quit pi by typing either:

- `exit`
- `:q`

## Install

```bash
pi install git:github.com/zakstak/pi-quit-extension
```

Or pin a version/tag:

```bash
pi install git:github.com/zakstak/pi-quit-extension@v0.1.0
```

## Usage

In pi, type:

```text
:q
```

or:

```text
exit
```

The extension handles the input and calls pi's graceful shutdown API.

## Security

Pi extensions run with your full user permissions. Review extension code before installing.
