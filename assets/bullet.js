// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 500,
        target:{
            default: null,
            type: cc.Node,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.is_running = false;
        this.shoot_to_target(this.target);
    },
    shoot_to_target(target){
        var src = this.node.getPosition();
        var dst = this.target.getPosition();
        var dir = dst.sub(src);
        var len = dir.mag();
        var t = len/this.speed;
        // 目标位置,获取enemy 组件
        var enemy = this.target.getComponent("enemy");
        var e_vx = enemy.vx;
        var e_vy = enemy.vy;
        // 目标移动距离
        var offset_x = e_vx * t;
        var offset_y = e_vy * t;
        // 预估碰撞点
        dst.x += offset_x;
        dst.y += offset_y;
        // 计算子弹发射角度,距离
        dir = dst.sub(src);
        len = dir.mag();
        // 计算子弹速度
        var speed = len /t;
        this.vx = speed * dir.x/len;
        this.vy = speed * dir.y/len;
        this.is_running = true;



    },

    update (dt) {
        if(this.is_running){
            // 更新子单位置
            this.node.x += this.vx * dt;
            this.node.y += this.vy * dt;
        }
    },
});
