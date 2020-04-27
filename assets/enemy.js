// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        vx: 100,
        vy: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        console.log('start');
    },

    update (dt) {
        var sx = this.vx * dt;
        var sy = this.vy * dt;
        // 更改节点位置
        this.node.x += sx;
        this.node.y += sy;
    },
});
