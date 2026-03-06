import GameEnvBackground from '/assets/js/GameEnginev1/essentials/GameEnvBackground.js';
import Player from '/assets/js/GameEnginev1/essentials/Player.js';
import Npc from '/assets/js/GameEnginev1/essentials/Npc.js';
import Barrier from '/assets/js/GameEnginev1/essentials/Barrier.js';

/**
 * @class GameLevelCustom
 * @description FA1: Foundational level configuration for the Astro Mini-Game.
 */
class GameLevelCustom {
    constructor(gameEnv) {
        const path = gameEnv.path;

        /**
         * @type {Object}
         * @description FA1 Background: Sets the visual theme to an alien planet.
         */
        const bgData = {
            name: "custom_bg",
            src: path + "/images/gamebuilder/bg/alien_planet.jpg",
            pixels: { height: 772, width: 1134 }
        };

        /**
         * @type {Object}
         * @description FA1 Player: The character 'Astro' with custom WASD keybindings.
         * Key Decision: SCALE_FACTOR 5 used to balance player size against the background.
         */
        const playerData = {
            id: 'playerData',
            src: path + "/images/gamebuilder/sprites/astro.png",
            SCALE_FACTOR: 5,
            STEP_FACTOR: 1000,
            ANIMATION_RATE: 50,
            INIT_POSITION: { x: 100, y: 300 },
            pixels: { height: 770, width: 513 },
            orientation: { rows: 4, columns: 4 },
            down: { row: 0, start: 0, columns: 3 },
            left: { row: 1, start: 0, columns: 3 },
            right: { row: 2, start: 0, columns: 3 },
            up: { row: 3, start: 0, columns: 3 },
            hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
            keypress: { up: 87, left: 65, down: 83, right: 68 }
        };

        /**
         * @type {Object}
         * @description FA1 NPC: 'Chilli' provides interactive dialogue.
         * Key Decision: Hitbox enabled to allow for future interaction logic in FA2.
         */
        const npcData1 = {
            id: 'chilli',
            greeting: 'hola',
            src: path + "/images/gamify/chillguy.png",
            SCALE_FACTOR: 6,
            ANIMATION_RATE: 50,
            INIT_POSITION: { x: 600, y: 300 },
            pixels: { height: 512, width: 384 },
            orientation: { rows: 4, columns: 3 },
            hitbox: { widthPercentage: 0.2, heightPercentage: 0.2 },
            dialogues: ['hola'],
            reaction: function() { console.log(this.greeting); },
            interact: function() { if (this.dialogueSystem) { this.showRandomDialogue(); } }
        };

        /**
         * @type {Object}
         * @description FA1 Barrier: A static object to restrict player movement.
         * Key Decision: Positioned at x: 400 to act as a hurdle between Player and NPC.
         */
        const barrierData = {
            id: 'stone_wall',
            src: path + "/images/gamebuilder/obstacles/wall.png", 
            SCALE_FACTOR: 3,
            INIT_POSITION: { x: 400, y: 350 },
            pixels: { height: 100, width: 100 },
            hitbox: { widthPercentage: 0.8, heightPercentage: 0.8 }
        };

        // Registers all objects for the game engine to render
        this.classes = [
            { class: GameEnvBackground, data: bgData },
            { class: Player, data: playerData },
            { class: Npc, data: npcData1 },
            { class: Barrier, data: barrierData }
        ];

        /* BUILDER_ONLY_START */
        try {
            setTimeout(() => {
                try {
                    const objs = Array.isArray(gameEnv?.gameObjects) ? gameEnv.gameObjects : [];
                    const summary = objs.map(o => ({ cls: o?.constructor?.name || 'Unknown', id: o?.canvas?.id || '', z: o?.canvas?.style?.zIndex || '' }));
                    if (window && window.parent) window.parent.postMessage({ type: 'rpg:objects', summary }, '*');
                } catch (_) {}
            }, 250);
        } catch (_) {}
        /* BUILDER_ONLY_END */
    }
}

export const gameLevelClasses = [GameLevelCustom];