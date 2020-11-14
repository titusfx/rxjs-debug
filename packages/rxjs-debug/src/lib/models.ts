/**
 * Configuration Options for a RxJS-debugger instance.
 */
export interface DebuggerOptions {
  /**
   * Optional id for the RxJS-debugger instance.
   * If not provided, an automatic incremental `number` is used as the id.
   * e.g: First debugger without custom id will have `1` as id,
   * then second one will hve `2` as id, and so on.
   */
  id?: number | string;
  /**
   * An optional flag to turn off the logging of value after every operator.
   * This can be helpful if you just want to see how far does the stream go.
   */
  hideOutputs?: boolean;
}