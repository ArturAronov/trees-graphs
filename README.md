https://frontendmasters.com/courses/trees-and-graphs/
d
Binary tree:
each node can only have 2 children

Different types of graphs:

- Directed, Undirected (one way road etc)
- Weighted, Unweighted edges (distance between nodes)
- Self loops
- Sparse, Dense (most graphs are sparse, which means they have more vertices than edges)
- Cyclic, Acyclic

### Binary Search Tree

Left side smaller than root node
Right side larger that root node

                19
              /     \
            11       35
           /  \     /
          7   16   23
             /  \
            13   17

    ```
    const BST = {
        root: {
            value: 19
            left: {
                value: 11,
                left: { 7 },
                right: { 16 },
            },
            right: {
                value: 35,
                left: { 23 },
                right: null
            }
        }
    }
    ```
