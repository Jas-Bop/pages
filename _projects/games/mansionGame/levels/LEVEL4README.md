# 👻 Mansion Game — Level 4: Wave Defense

> **For future developers:** This README tracks all open issues, planned features, and known bugs for Level 4 of the Mansion Game. Use it as your starting point before picking up any work.

---

##  Project Board

All issues are tracked on the GitHub Kanban board:
**[View Full Project Board →](https://github.com/users/Jas-Bop/projects/1/views/3)**

---

##  Issue Boards

Issues are organized into 6 categories below. Each links to its GitHub issue — replace the `#000` placeholders with real issue numbers as you create them.

---

### 🎮 Board 1 — Gameplay & Combat

Core shooting, movement, and collision mechanics.

| Issue | Description | Status |
|-------|-------------|--------|
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | Shooting cooldown feels too slow — tune `shootCooldown` (currently 1000ms) | `Todo` |
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | Diagonal shooting direction inconsistency when releasing keys quickly | `Todo` |
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | Player can get stuck on enemy collisions in dense waves | `Todo` |
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | Add knockback or iframes when player is hit | `Todo` |

---

### 🌊 Board 2 — Wave System

Wave spawning, pacing, and progression logic (lives in `WaveManager.js`).

| Issue | Description | Status |
|-------|-------------|--------|
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | Wave 4 spawns 16 enemies but UI only mentions 3 waves ("Defeat 3 waves") — fix copy | `Bug` |
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | Add delay between last enemy death and wave-complete message | `Todo` |
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | Enemies from different waves can overlap at spawn — add spawn spacing | `Todo` |
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | Add a wave counter HUD element visible during play | `Todo` |

---

### 🖥️ Board 3 — UI & Dialogue

Start screen, wave messages, win screen, and the dialogue system.

| Issue | Description | Status |
|-------|-------------|--------|
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | Start UI copy says "Defeat 3 waves" but game has 4 waves — update | `Bug` |
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | Win screen uses `alert()` — replace with styled dialogue | `Todo` |
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | Typo: "Recieved" → "Received" in `winLevel()` alert | `Bug` |
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | Wave message "Continue" button should auto-dismiss after timeout | `Todo` |

---

### 🎵 Board 4 — Audio

Background music, sound effects, and audio state management.

| Issue | Description | Status |
|-------|-------------|--------|
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | Background music doesn't respect browser autoplay policy — add play-on-interaction fallback | `Bug` |
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | Add shoot sound effect when Space fires a projectile | `Todo` |
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | Add enemy death sound effect | `Todo` |
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | Music continues playing if browser tab is hidden — pause on `visibilitychange` | `Todo` |

---

### 🐛 Board 5 — Bug Fixes

Known bugs that need to be resolved.

| Issue | Description | Status |
|-------|-------------|--------|
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | `winLevel()` can fire multiple times if `isComplete()` returns true for multiple frames | `Bug` |
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | Key event listeners are added in constructor but not always cleaned up on tab switch | `Bug` |
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | `getPlayer()` iterates all gameObjects every frame — cache the reference | `Performance` |
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | `showStartUI()` and wave message divs append to `document.body` — can leak if level restarts | `Bug` |

---

### 🚀 Board 6 — Future Features

Stretch goals and ideas for future contributors.

| Issue | Description | Status |
|-------|-------------|--------|
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | Add a health bar for the player | `Backlog` |
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | Add difficulty scaling (enemy speed increases per wave) | `Backlog` |
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | Add a boss enemy on Wave 4 | `Backlog` |
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | Add mouse/pointer aiming as an alternative to WASD aim | `Backlog` |
| [#000](https://github.com/Jas-Bop/PLACEHOLDER/issues/000) | Save wave progress to localStorage so player can resume | `Backlog` |

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

**Key methods to know:**

- `update()` — Called every frame. Handles input, shooting, and checks win condition.
- `waveManager.startFirstWave()` — Kicks off wave 1 after the start screen.
- `waveManager.playerShoot(direction)` — Fires a projectile in the given `{dx, dy}` direction.
- `winLevel()` — Triggers the victory dialogue. Guarded by `this.levelWon` flag.
- `destroy()` — Cleans up listeners and pauses music. Always call this when leaving the level.

---

## Getting Started (New Contributors)

1. Pick an issue from one of the boards above.
2. Check the **Project Board** to make sure it's not  being worked on.
3. Create a branch named `issue-###-short-description`.
4. Test in-browser — the game runs via the main game engine, no build step needed.
5. Open a PR and link the issue with `Closes #000`.

> **Tip:** Most logic lives in `WaveManager.js`, not this file. If you're touching enemy behavior, spawning, or projectiles, start there.

---

*Last updated by: Rishab S*