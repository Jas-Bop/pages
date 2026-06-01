# 👻 Mansion Game — Level 4: Wave Defense

> **For future developers:** This README tracks all open issues, planned features, and known bugs for Level 4 of the Mansion Game. Use it as your starting point before picking up any work.

---

##  Project Board

All issues are tracked on the GitHub Kanban board:
**[View Full Project Board →](https://github.com/users/Jas-Bop/projects/1/views/3)**

---

### Kanban Board
https://github.com/Jas-Bop/pages/actions

---

## Architecture Overview

```
mansionLevel4.js        ← Main level controller (this file)
WaveManager.js          ← Handles wave spawning, enemy AI, projectiles
GameEnginev1.1/
  ├── GameEnvBackground.js
  ├── Player.js
  ├── Npc.js
  └── DialogueSystem.js
```

Mansion Level 4 is a survival-based combat level built around a custom WaveManager system. When the level starts, the player is shown a menu explaining the controls and objective before the first wave begins. The player controls Spook using WASD and can shoot projectiles with the spacebar, with shots traveling in the direction the player is currently facing.

The WaveManager is responsible for spawning enemies, tracking wave progression, handling projectile collisions, and detecting player death. Ghost enemies spawn randomly along the edges of the map while maintaining a minimum distance from both the player and other enemies to prevent unfair spawns. Each wave increases the number and speed of enemies, creating a progressively more difficult challenge.

During gameplay, projectiles and enemy hitboxes are checked every frame to determine when enemies are defeated. If a ghost reaches the player, a death sequence is triggered that displays visual effects and restarts the level after a short delay. After all four waves have been cleared, a victory NPC appears, allowing the player to return to the mansion hub and unlock the next level.

---

**Key methods to know:**

- `update()` — Called every frame. Handles input, shooting, and checks win condition.
- `waveManager.startFirstWave()` — Kicks off wave 1 after the start screen.
- `waveManager.playerShoot(direction)` — Fires a projectile in the given `{dx, dy}` direction.
- `winLevel()` — Triggers the victory dialogue. Guarded by `this.levelWon` flag.
- `destroy()` — Cleans up listeners and pauses music. Always call this when leaving the level.

---

## Getting Started (New Contributors)

1. Pick an issue from the list that will be shown below.
3. Create a branch named `issue-###-short-description`.
4. Test in-browser — the game runs via the main game engine, no build step needed.
5. Open a PR and link the issue with `Closes #000`.

> **Tip:** Most logic lives in `WaveManager.js`, not this file. If you're touching enemy behavior, spawning, or projectiles, start there.

---

## Things To Implement

- Make it so ghosts cannot stack on top of eachother
- Add a stronger enemy, a Ghoul, which its own unique animation and class attributes
- Improve the arrow to always shoot the way the sprite is facing
- Add a new attack
- Create one more wave (which implements the Ghouls from above)
- Create a health system for the main character with 3 lives
- Make enemy spawns such that the enemies do not spawn in overlapping with eachother
- Give each enemy its own unique speed (call a random number from an array to substitute its speed for example)
- Implement leaderboard.js to determine how fast someone can beat enemies 

*Last updated by: Rishab S*