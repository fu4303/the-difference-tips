import Post from './Post';

const PostList: Post[] = [
    { slug: '<->-vs-react-fragment', title: '<> vs React.Fragment', category: 'React' },
    { slug: 'active-vs-focus', title: ':active vs :focus', category: 'CSS' },
    { slug: 'add-event-listener-function-vs-on-property', title: 'addEventListener() function vs on property', category: 'DOM' },
    { slug: 'alt-vs-title', title: 'alt vs title', category: 'HTML' },
    { slug: 'apply-vs-call', title: 'apply vs call', category: 'JavaScript' },
    { slug: 'argument-vs-parameter', title: 'argument vs parameter', category: 'JavaScript' },
    { slug: 'array-length-0-vs-array-[]', title: 'array = [] vs array.length = 0', category: 'JavaScript' },
    { slug: 'arrow-vs-regular-function', title: 'arrow vs regular function', category: 'JavaScript' },
    { slug: 'b-i-vs-strong-em', title: '<b>, <i> vs <strong>, <em>', category: 'HTML' },
    { slug: 'border-box-vs-content-box', title: 'border-box vs content-box', category: 'CSS' },
    { slug: 'border-vs-outline', title: 'border vs outline', category: 'CSS' },
    { slug: 'button-vs-input-type-button', title: '<button> vs <input type="button" />', category: 'HTML' },
    { slug: 'class-vs-id', title: 'class vs id', category: 'HTML' },
    { slug: 'client-height-vs-offset-height-vs-scroll-height', title: 'clientHeight vs offsetHeight vs scrollHeight', category: 'DOM' },
    { slug: 'client-y-vs-page-y', title: 'clientY vs pageY', category: 'DOM' },
    { slug: 'concat-vs-push', title: 'concat vs push', category: 'JavaScript' },
    { slug: 'const-enum-vs-enum', title: 'const enum vs enum', category: 'TypeScript' },
    { slug: 'const-vs-let-vs-var', title: 'const vs let vs var', category: 'JavaScript' },
    { slug: 'const-vs-readonly', title: 'const vs readonly', category: 'TypeScript' },
    { slug: 'current-target-vs-target', title: 'currentTarget vs target', category: 'DOM' },
    { slug: 'd-ts-vs-ts', title: '*.d.ts vs *.ts', category: 'TypeScript' },
    { slug: 'delete-object-property-vs-set-object-property-to-undefined', title: 'delete obj.property vs obj.property = undefined', category: 'JavaScript' },
    { slug: 'display-none-vs-hidden-attribute', title: 'display: none vs [hidden]', category: 'CSS' },
    { slug: 'display-none-vs-opacity-0-vs-visibility-hidden', title: 'display: none vs opacity: 0 vs visibility: hidden', category: 'CSS' },
    { slug: 'div-vs-section', title: '<div> vs <section>', category: 'HTML' },
    { slug: 'dom-content-loaded-vs-load', title: 'DOMContentLoaded vs load', category: 'DOM' },
    { slug: 'double-quotes-vs-single-quote', title: `double quotes vs single quote`, category: 'JavaScript' },
    { slug: 'element-vs-node', title: 'Element vs Node', category: 'HTML' },
    { slug: 'equality-operator-vs-strict-equality-operator', title: '== vs ===', category: 'JavaScript' },
    { slug: 'event-bubbling-vs-capturing', title: 'event bubbling vs capturing', category: 'DOM' },
    { slug: 'event-prevent-default-vs-return-false', title: 'event.preventDefault vs return false', category: 'DOM' },
    { slug: 'function-declaration-vs-function-expression', title: 'function declaration vs function expression', category: 'JavaScript' },
    { slug: 'function-vs-property-in-interface', title: 'function vs property in interface', category: 'TypeScript' },
    { slug: 'has-own-property-vs-in', title: 'hasOwnProperty vs in', category: 'JavaScript' },
    { slug: 'instanceof-vs-typeof', title: 'instanceof vs typeof', category: 'JavaScript' },
    { slug: 'interface-vs-type', title: 'interface vs type', category: 'TypeScript' },
    { slug: 'key-vs-key-code-vs-which', title: 'key vs keyCode vs which', category: 'DOM' },
    { slug: 'keydown-vs-keypress-vs-keyup', title: `keydown vs keypress vs keyup`, category: 'DOM' },
    { slug: 'literal-union-type-vs-string-enums', title: 'literal union type vs string enums', category: 'TypeScript' },
    { slug: 'map-vs-weak-map', title: 'Map vs WeakMap', category: 'JavaScript' },
    { slug: 'margin-vs-padding', title: 'margin vs padding', category: 'CSS' },
    { slug: 'method-in-class-constructor-vs-prototype', title: 'method in class constructor vs prototype', category: 'JavaScript' },
    { slug: 'mouseenter-vs-mouseover', title: 'mouseenter vs mouseover', category: 'DOM' },
    { slug: 'natural-width-vs-width', title: 'naturalWidth vs width', category: 'DOM' },
    { slug: 'node-name-vs-tag-name', title: 'nodeName vs tagName', category: 'DOM' },
    { slug: 'normalize-vs-reset-css', title: 'Normalize vs Reset CSS', category: 'CSS' },
    { slug: 'null-vs-undefined', title: 'null vs undefined', category: 'JavaScript' },
    { slug: 'number-constructor-vs-parse-int', title: 'Number() vs parseInt()', category: 'JavaScript' },
    { slug: 'object-get-own-property-names-vs-object-keys', title: 'Object.getOwnPropertyNames() vs Object.keys()', category: 'JavaScript' },
    { slug: 'object-is-vs-strict-equality-operator', title: 'Object.is() vs ===', category: 'JavaScript' },
    { slug: 'object-property-with-vs-without-quotes', title: 'object.property vs object[\'property\']', category: 'JavaScript' },
    { slug: 'object-vs-map', title: 'Object vs Map', category: 'JavaScript' },
    { slug: 'parent-element-vs-parent-node', title: 'parentElement vs parentNode', category: 'DOM' },
    { slug: 'postfix-increment-vs-prefix-increment', title: '++value vs value++', category: 'JavaScript' },
    { slug: 'script-async-vs-script-defer', title: 'script async vs script defer', category: 'HTML' },
    { slug: 'slice-vs-splice', title: 'slice vs splice', category: 'JavaScript' },
    { slug: 'stop-immediate-propagation-vs-stop-propagation', title: 'stopImmediatePropagation vs stopPropagation', category: 'DOM' },
    { slug: 'string-char-at-vs-string-bracket-notation', title: 'string.charAt(i) vs string[i]', category: 'JavaScript' },
    { slug: 'string-vs-string', title: 'string vs String', category: 'TypeScript' },
    { slug: 'style-width-vs-width', title: 'style="width: ___" vs width="___"', category: 'CSS' },
    { slug: 'substr-vs-substring', title: 'substr vs substring', category: 'JavaScript' },
    { slug: 'undefined-vs-void', title: 'undefined vs void', category: 'JavaScript' },
    { slug: 'variable-undefined-vs-typeof-variable-undefined', title: 'variable === undefined vs. typeof variable === "undefined"', category: 'JavaScript' },
];

export default PostList;
