import Character from '@assets/js/GameEnginev1.1/essentials/Character.js';

class WaveEnemy extends Character {
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);
        this.healthPoints = data?.healthPoints || 1;
        this.speed = data?.speed || 2;
        this.maxHealth = data?.healthPoints || 1;
        this._isDestroyed = false;
        this._facingRight = true;

        // Personal offset so enemies don't stack on the same pixel
        // Assigned by WaveManager at spawn time, fallback to zero
        this.targetOffset = data?.targetOffset || { dx: 0, dy: 0 };

        // Slightly randomize offset over time so movement feels organic
        this._offsetDrift = {
            dx: (Math.random() - 0.5) * 0.4,
            dy: (Math.random() - 0.5) * 0.4
        };
        this._offsetDriftMax = 20; // how far offset can drift from original
        this._originalOffset = { ...this.targetOffset };
    }

    update(player = null) {
        if (this._isDestroyed) return;

        if (player) {
            // Slowly drift each enemy's offset so they don't permanently clump
            this.targetOffset.dx += this._offsetDrift.dx;
            this.targetOffset.dy += this._offsetDrift.dy;

            // Bounce drift back toward original offset if drifted too far
            const driftDistX = this.targetOffset.dx - this._originalOffset.dx;
            const driftDistY = this.targetOffset.dy - this._originalOffset.dy;
            if (Math.abs(driftDistX) > this._offsetDriftMax) this._offsetDrift.dx *= -1;
            if (Math.abs(driftDistY) > this._offsetDriftMax) this._offsetDrift.dy *= -1;

            // Apply personal offset to target position
            const targetX = player.position.x + this.targetOffset.dx;
            const targetY = player.position.y + this.targetOffset.dy;

            const dx = targetX - this.position.x;
            const dy = targetY - this.position.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Only move if not already at target position
            if (distance > 2) {
                this.position.x += (dx / distance) * this.speed;
                this.position.y += (dy / distance) * this.speed;

                // Flip animation based on horizontal movement direction
                if (dx > 0 && !this._facingRight) {
                    this._facingRight = true;
                    if (this.spriteData?.right) this.currentAnimation = this.spriteData.right;
                } else if (dx < 0 && this._facingRight) {
                    this._facingRight = false;
                    if (this.spriteData?.left) this.currentAnimation = this.spriteData.left;
                }
            }
        }

        this.draw();
    }

    takeDamage(amount) {
        this.healthPoints -= amount;
        if (this.healthPoints <= 0 && !this._isDestroyed) {
            this.destroy();
        }
    }

    destroy() {
        if (this._isDestroyed) return;
        this._isDestroyed = true;

        // Critical: Character.destroy() removes the canvas element from the DOM
        super.destroy();

        if (this.gameEnv && this.gameEnv.gameObjects) {
            const index = this.gameEnv.gameObjects.indexOf(this);
            if (index > -1) {
                this.gameEnv.gameObjects.splice(index, 1);
            }
        }
    }

    isDestroyed() {
        return this._isDestroyed;
    }
}

export default WaveEnemy;