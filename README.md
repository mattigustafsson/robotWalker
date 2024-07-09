
# RobotWalker project

This project involves programming a simple robot that can move around a room. The room is defined by a grid, and the robot can execute a series of commands to navigate this space.

## Prerequisites

- [Bun](https://bun.sh/) (Ensure you have Bun installed)
```sh
curl -fsSL https://bun.sh/install | bash
```

## Installation

1. Clone the repository:
  ```sh
  git clone https://github.com/mattigustafsson/robotWalker.git
  cd robotWalker
  ```

2. Install dependencies:
  ```sh
  bun install
  ```

3. Run the robot walker:
  ```sh
  bun run start
  ```

4. Input room dimensions, starting position, and commands as prompted. Example:
    ```
    Enter room dimensions (rows, columns): 5 7
    Enter starting position and orientation of the robot (x y direction): 3 3 N
    Enter a series of commands: LFFRFRFRFF
    ```

5. The output will be the final position and orientation of the robot:
    ```
    Report: 2 4 S
    ```

## Tests

  To run test:

  ```sh
  bun test
  ```
