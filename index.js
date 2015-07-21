import boot from './app';
import { argv } from 'optimist';

/**
 * Default port, in case none is provided.
 */

const DEFAULT_PORT = 3000;


/**
 * Boot up application.
 */

let app = boot({
  create: argv.create,
  defaultRedirection: argv.default,
  host: argv.host
});


/**
 * Start to listen for requests.
 */

app.listen(argv.port || DEFAULT_PORT);
