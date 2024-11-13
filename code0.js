gdjs.Start_32GameCode = {};
gdjs.Start_32GameCode.localVariables = [];
gdjs.Start_32GameCode.GDNewSprite6Objects1= [];
gdjs.Start_32GameCode.GDNewSprite6Objects2= [];
gdjs.Start_32GameCode.GDNewTextObjects1= [];
gdjs.Start_32GameCode.GDNewTextObjects2= [];
gdjs.Start_32GameCode.GDNewText2Objects1= [];
gdjs.Start_32GameCode.GDNewText2Objects2= [];
gdjs.Start_32GameCode.GDGreyButtonObjects1= [];
gdjs.Start_32GameCode.GDGreyButtonObjects2= [];
gdjs.Start_32GameCode.GDGreyButton2Objects1= [];
gdjs.Start_32GameCode.GDGreyButton2Objects2= [];
gdjs.Start_32GameCode.GDCursorObjects1= [];
gdjs.Start_32GameCode.GDCursorObjects2= [];


gdjs.Start_32GameCode.mapOfGDgdjs_9546Start_959532GameCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.Start_32GameCode.GDCursorObjects1});
gdjs.Start_32GameCode.mapOfGDgdjs_9546Start_959532GameCode_9546GDGreyButtonObjects1Objects = Hashtable.newFrom({"GreyButton": gdjs.Start_32GameCode.GDGreyButtonObjects1});
gdjs.Start_32GameCode.mapOfGDgdjs_9546Start_959532GameCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.Start_32GameCode.GDCursorObjects1});
gdjs.Start_32GameCode.mapOfGDgdjs_9546Start_959532GameCode_9546GDGreyButton2Objects1Objects = Hashtable.newFrom({"GreyButton2": gdjs.Start_32GameCode.GDGreyButton2Objects1});
gdjs.Start_32GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Opening.wav", true, 100, 1);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Start_32GameCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreyButton"), gdjs.Start_32GameCode.GDGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19080700);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Start_32GameCode.mapOfGDgdjs_9546Start_959532GameCode_9546GDCursorObjects1Objects, gdjs.Start_32GameCode.mapOfGDgdjs_9546Start_959532GameCode_9546GDGreyButtonObjects1Objects, false, runtimeScene, false);
isConditionTrue_0 = isConditionTrue_1;
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Loading Scene3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Start_32GameCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreyButton2"), gdjs.Start_32GameCode.GDGreyButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19080428);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Start_32GameCode.mapOfGDgdjs_9546Start_959532GameCode_9546GDCursorObjects1Objects, gdjs.Start_32GameCode.mapOfGDgdjs_9546Start_959532GameCode_9546GDGreyButton2Objects1Objects, false, runtimeScene, false);
isConditionTrue_0 = isConditionTrue_1;
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.Start_32GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32GameCode.GDNewSprite6Objects1.length = 0;
gdjs.Start_32GameCode.GDNewSprite6Objects2.length = 0;
gdjs.Start_32GameCode.GDNewTextObjects1.length = 0;
gdjs.Start_32GameCode.GDNewTextObjects2.length = 0;
gdjs.Start_32GameCode.GDNewText2Objects1.length = 0;
gdjs.Start_32GameCode.GDNewText2Objects2.length = 0;
gdjs.Start_32GameCode.GDGreyButtonObjects1.length = 0;
gdjs.Start_32GameCode.GDGreyButtonObjects2.length = 0;
gdjs.Start_32GameCode.GDGreyButton2Objects1.length = 0;
gdjs.Start_32GameCode.GDGreyButton2Objects2.length = 0;
gdjs.Start_32GameCode.GDCursorObjects1.length = 0;
gdjs.Start_32GameCode.GDCursorObjects2.length = 0;

gdjs.Start_32GameCode.eventsList0(runtimeScene);
gdjs.Start_32GameCode.GDNewSprite6Objects1.length = 0;
gdjs.Start_32GameCode.GDNewSprite6Objects2.length = 0;
gdjs.Start_32GameCode.GDNewTextObjects1.length = 0;
gdjs.Start_32GameCode.GDNewTextObjects2.length = 0;
gdjs.Start_32GameCode.GDNewText2Objects1.length = 0;
gdjs.Start_32GameCode.GDNewText2Objects2.length = 0;
gdjs.Start_32GameCode.GDGreyButtonObjects1.length = 0;
gdjs.Start_32GameCode.GDGreyButtonObjects2.length = 0;
gdjs.Start_32GameCode.GDGreyButton2Objects1.length = 0;
gdjs.Start_32GameCode.GDGreyButton2Objects2.length = 0;
gdjs.Start_32GameCode.GDCursorObjects1.length = 0;
gdjs.Start_32GameCode.GDCursorObjects2.length = 0;


return;

}

gdjs['Start_32GameCode'] = gdjs.Start_32GameCode;
