const collisions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 948, 948, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 948, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 948, 948, 948, 948, 948, 948, 948, 948, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 948, 948, 948, 0, 0, 0, 0, 0, 948, 948, 0, 0, 0, 948, 948, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 0, 948, 948, 948, 948, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 948, 948, 948, 0, 0, 0, 948, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 948, 948, 0, 0, 948, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 0, 0, 0, 0, 948, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 948, 948, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 0, 948, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 948, 0, 948, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 0, 948, 948, 948, 948, 948, 948, 0, 0, 0, 0, 0, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 948, 948, 948, 0, 0, 948, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 948, 0, 948, 948, 948, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 948, 948, 948, 948, 0, 948, 948, 948, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 948, 948, 0, 0, 0, 0, 0, 948, 948, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 948, 948, 948, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 948, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 948, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 0, 0, 0, 0, 0, 0, 948, 948, 0, 0, 0, 948, 948, 0, 948, 948, 0, 0, 0, 0, 0, 0, 0, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 948, 948, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 948, 948, 948, 948, 948, 948, 948, 948, 948, 948, 948, 948, 948, 0, 0, 0, 948, 948, 948, 0, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 948, 948, 948, 948, 948, 948, 948, 948, 948, 948, 948, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 948, 948, 948, 948, 948, 948, 948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]