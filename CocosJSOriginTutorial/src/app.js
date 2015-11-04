
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
    
        var director = cc.Director.getInstance( );
        var size = director.getVisibleSize( );
        var origin = director.getVisibleOrigin( );
        
        cc.log( "Size width: " + size.width  );
        cc.log( "Size height: " + size.height  );
        
        cc.log( "Origin x: " + origin.x );
        cc.log( "Origin y: " + origin.y );
                                      
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

