# Arrays

Ordered Lists!

```javascript
let names = ["Michael", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"];
```

### Use arrays when:

- Order matters
- Fast insertion/removal/access is required

### Time Complexities:

- Insertion   = Depends on the position...
- Deletion    = Depends on the position...
- Searching   = O(N)
- Access      = O(1)

### Methods:

- push                          = O(1)
- pop                           = O(1)
- shift                         = O(N)
- unshift                       = O(N)
- concat                        = O(N)
- slice                         = O(N)
- splice                        = O(N)
- sort                          = O(N*log(N))
- forEach/map/filter/reduce/... = O(N)
