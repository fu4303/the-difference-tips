import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
## Differences

1. \`margin\` is the space around the element.
   
    ~~~
                        .
    ┌───────────────────────────┐               ┌───────────────────────────┐
    |                           |               |                           |
    |                           |               |                           |
    |                           |◀︎── margin ───▶︎|                           |
    |                           |               |                           |
    |                           |               |                           |
    └───────────────────────────┘               └───────────────────────────┘
    ~~~
    
    Whereas \`padding\` is the space between an element and the content inside it. Both \`margin\` and \`padding\` do not include the border of element.
    
    ~~~
    ┌─────────────▲─────────────┐
    |             | Padding     |
    |             |             |
    |       ┌─────▼─────┐       |
    |       |           |       |
    |◀︎─────▶︎|           |◀︎─────▶︎|
    |       |           |       |
    |       |           |       |
    |       └─────▲─────┘       |
    |             |             |
    |             |             |
    └─────────────▼─────────────┘
    ~~~
    
2. The top and bottom margins are collapsible. 
    
    Let's consider an example where we have two elements, \`A\` and \`B\`. The \`A\` element has 30px margin at the bottom, 
    and \`B\` has 20px margin at the top. 
    
    In final, the margin between two elements are the maximum numbers of two margin values, i.e 30px, not the total sum of them.
    
    ~~~
    ┌───────────────────────────┐
    |                           |
    |              A            |
    |                           |
    └───────┬───────────────────┘
            |       
            |       ▲
     margin |       |
     bottom |       |
            |       | margin 
            |       | top
            |       |
    ┌───────▼───────┴───────────┐
    |                           |
    |              B            |
    |                           |
    └───────────────────────────┘
    ~~~
    
    This does not happen with the left, right margins and any \`padding\` values.
    
3. We can set \`margin: auto\`, but it is not possible for \`padding\`. We often use \`margin: auto\` to center an element.
4. \`margin\` can be any float number, but \`padding\` cannot be a negative.   
    
    ~~~ css
    .div {
        margin: -10px;
        
        /* Not possible */
        padding: -15px;
    }
    ~~~

## More

* [border-box vs content-box](/border-box-vs-content-box)
`}
/>
    );
};
