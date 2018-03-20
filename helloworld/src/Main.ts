//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends egret.DisplayObjectContainer {



    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin

            context.onUpdate = () => {

            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })



    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        const result = await RES.getResAsync("description_json")
        this.startAnimation(result);
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private textfield: egret.TextField;

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene() {
        debugger
        let skyTexture = RES.getRes("bg_jpg");
        let sky = new egret.Bitmap();
        sky.texture = skyTexture;

        this.addChild(sky);
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;

        // let texture = RES.getResByUrl("http://10.0.11.131:8080/resource/assets/Slider/thumb.png", (data) => {
        //     debugger;
        //     console.log(data)
        //     let result = new egret.Bitmap();

        //     result.texture = data;
        //     this.addChild(result);
        // }, this, RES.ResourceItem.TYPE_IMAGE);

//测试跨域加载2


    //  var imgLoadHandler = (evt: egret.Event)=> {
    //      debugger;
    //     var Loader: egret.ImageLoader = evt.currentTarget;
    //     var bmData: egret.BitmapData = Loader.data;　　//应该默认是以二进制数据来传输
    //     let texture = new egret.Texture();
    //     texture.bitmapData = bmData;
    //     var bMap: egret.Bitmap = new egret.Bitmap(texture);
    //     this.addChild(bMap);
    // }

    //     var imgLoader: egret.ImageLoader = new egret.ImageLoader();
    //     imgLoader.once(egret.Event.COMPLETE, imgLoadHandler, this);
    //     imgLoader.load("http://10.0.11.131:8080/resource/assets/Slider/thumb.png");
    











    // egret.setTimeout(()=>{
    //     sky.scrollRect = new egret.Rectangle(0, 0, 100, 100);
    // },this,3000);


    // sky.scrollRect = new egret.Rectangle(0, 0, 100, 100);
    // let t = new egret.Timer(50);
    // t.addEventListener(egret.TimerEvent.TIMER, () => {
    //     let rect = sky.scrollRect;
    //     if (rect.x + rect.width >= sky.width) {
    //         rect.width = 100;
    //         rect.y += 20;
    //         sky.y += 20;
    //     }
    //     if (rect.y + rect.height >= sky.height) {
    //         rect.y = 0;
    //         sky.y = 0;
    //     }
    //     rect.width += 20;

    //     sky.scrollRect = rect;
    // }, this);
    // t.start();


    // egret.setTimeout(()=>{
    //     t.stop();
    //     sky.scrollRect = null;
    // },this,10000)

    // let mask = this.createBitmapByName("egret_icon_png");
    // let sprite = this.createBitmapByName("bg_jpg");
    // mask.x = mask.y = 500;
    // this.addChild(sprite);
    //   egret.setTimeout(()=>{
    //       debugger
    //     sprite.mask = mask;
    // },this,3000)

    let audio = RES.getRes('race_background_mp3');
    (audio as egret.Sound).play(0,1) 




    // let topMask = new egret.Shape();
    // topMask.graphics.beginFill(0x000000, 0.5);
    // topMask.graphics.drawRect(0, 0, stageW, 172);
    // topMask.graphics.endFill();
    // topMask.y = 33;
    // this.addChild(topMask);

    // let icon = this.createBitmapByName("egret_icon_png");
    // this.addChild(icon);
    // icon.x = 26;
    // icon.y = 33;

    // let line = new egret.Shape();
    // line.graphics.lineStyle(2, 0xffffff);
    // line.graphics.moveTo(0, 0);
    // line.graphics.lineTo(0, 117);
    // line.graphics.endFill();
    // line.x = 172;
    // line.y = 61;
    // this.addChild(line);


    // let colorLabel = new egret.TextField();
    // colorLabel.textColor = 0xffffff;
    // colorLabel.width = stageW - 172;
    // colorLabel.textAlign = "center";
    // colorLabel.text = "Hello Egret";
    // colorLabel.size = 24;
    // colorLabel.x = 172;
    // colorLabel.y = 80;
    // this.addChild(colorLabel);

    // let textfield = new egret.TextField();
    // this.addChild(textfield);
    // textfield.alpha = 0;
    // textfield.width = stageW - 172;
    // textfield.textAlign = egret.HorizontalAlign.CENTER;
    // textfield.size = 24;
    // textfield.textColor = 0xffffff;
    // textfield.x = 172;
    // textfield.y = 135;
    // this.textfield = textfield;


}

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string) {
    let result = new egret.Bitmap();
    let texture: egret.Texture = RES.getRes(name);
    result.texture = texture;
    return result;
}

    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    private startAnimation(result: string[]) {
    // let parser = new egret.HtmlTextParser();

    // let textflowArr = result.map(text => parser.parse(text));
    // let textfield = this.textfield;
    // let count = -1;
    // let change = () => {
    //     count++;
    //     if (count >= textflowArr.length) {
    //         count = 0;
    //     }
    //     let textFlow = textflowArr[count];

    //     // 切换描述内容
    //     // Switch to described content
    //     textfield.textFlow = textFlow;
    //     let tw = egret.Tween.get(textfield);
    //     tw.to({ "alpha": 1 }, 200);
    //     tw.wait(2000);
    //     tw.to({ "alpha": 0 }, 200);
    //     tw.call(change, this);
    // };

    // change();
}
}