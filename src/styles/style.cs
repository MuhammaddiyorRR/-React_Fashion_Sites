/* Error: Undefined mixin.
 *    ,
 * 15 |       @include flex;
 *    |       ^^^^^^^^^^^^^
 *    '
 *   nav.scss 15:7   @import
 *   style.scss 1:9  root stylesheet */

body::before {
  font-family: "Source Code Pro", "SF Mono", Monaco, Inconsolata, "Fira Mono",
      "Droid Sans Mono", monospace, monospace;
  white-space: pre;
  display: block;
  padding: 1em;
  margin-bottom: 1em;
  border-bottom: 2px solid black;
  content: "Error: Undefined mixin.\a    \2577 \a 15 \2502        @include flex;\d\a    \2502        ^^^^^^^^^^^^^\a    \2575 \a   nav.scss 15:7   @import\a   style.scss 1:9  root stylesheet";
}
