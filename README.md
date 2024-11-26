# Deno TCP -> TLS socket upgrade error

The code in main.ts opens a socket, connects to `google.com:443` and performs upgrade the TCP connection to TLS.

This used to worked fine versions 2.0.2 and below. Version 2.0.3 broke this functionality. The commit which introduced the bug is this one: https://github.com/denoland/deno/commit/c5536669b6e1c4c9e76223d95f222a999df9b19e.

To reproduce this bug, please execute `deno run -A main.ts`.
You can check your installed deno version with `deno -v`.

On version 2.0.3 and above you will get the following error:

```
error: Uncaught Error: Client network socket disconnected before secure TLS connection was established
    at connResetException (ext:deno_node/internal/errors.ts:1897:14)
    at TLSSocket.onConnectEnd (node:_tls_wrap:32:19)
    at TLSSocket.emit (ext:deno_node/_events.mjs:405:35)
    at endReadableNT (ext:deno_node/_stream.mjs:3210:16)
    at processTicksAndRejections (ext:deno_node/_next_tick.ts:36:15)
    at runNextTicks (ext:deno_node/_next_tick.ts:76:3)
    at eventLoopTick (ext:core/01_core.js:182:21)
```

On version 2.0.2 and below you will see the following output:
```
tls connected
```
