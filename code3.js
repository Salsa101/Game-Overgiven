gdjs.Loading_32SceneCode = {};
gdjs.Loading_32SceneCode.localVariables = [];
gdjs.Loading_32SceneCode.GDNewSpriteObjects1= [];
gdjs.Loading_32SceneCode.GDNewSpriteObjects2= [];
gdjs.Loading_32SceneCode.GDNewSpriteObjects3= [];
gdjs.Loading_32SceneCode.GDNewBitmapTextObjects1= [];
gdjs.Loading_32SceneCode.GDNewBitmapTextObjects2= [];
gdjs.Loading_32SceneCode.GDNewBitmapTextObjects3= [];


gdjs.Loading_32SceneCode.asyncCallback10620148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Loading_32SceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}gdjs.Loading_32SceneCode.localVariables.length = 0;
}
gdjs.Loading_32SceneCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Loading_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Loading_32SceneCode.asyncCallback10620148(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Loading_32SceneCode.asyncCallback13287204 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Loading_32SceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewBitmapText"), gdjs.Loading_32SceneCode.GDNewBitmapTextObjects2);

{for(var i = 0, len = gdjs.Loading_32SceneCode.GDNewBitmapTextObjects2.length ;i < len;++i) {
    gdjs.Loading_32SceneCode.GDNewBitmapTextObjects2[i].hide();
}
}
{ //Subevents
gdjs.Loading_32SceneCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Loading_32SceneCode.localVariables.length = 0;
}
gdjs.Loading_32SceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Loading_32SceneCode.localVariables);
for (const obj of gdjs.Loading_32SceneCode.GDNewBitmapTextObjects1) asyncObjectsList.addObject("NewBitmapText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.Loading_32SceneCode.asyncCallback13287204(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Loading_32SceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "typewriter") >= 0.1;
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "typewriter");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
if (isConditionTrue_0) {

{ //Subevents
gdjs.Loading_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Loading_32SceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "New dialogue tree2");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "typewriter");
}{gdjs.dialogueTree.startFrom("Start");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isRunning();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewBitmapText"), gdjs.Loading_32SceneCode.GDNewBitmapTextObjects1);
{for(var i = 0, len = gdjs.Loading_32SceneCode.GDNewBitmapTextObjects1.length ;i < len;++i) {
    gdjs.Loading_32SceneCode.GDNewBitmapTextObjects1[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.Loading_32SceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.Loading_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Loading_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Loading_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Loading_32SceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Loading_32SceneCode.GDNewBitmapTextObjects1.length = 0;
gdjs.Loading_32SceneCode.GDNewBitmapTextObjects2.length = 0;
gdjs.Loading_32SceneCode.GDNewBitmapTextObjects3.length = 0;

gdjs.Loading_32SceneCode.eventsList3(runtimeScene);
gdjs.Loading_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Loading_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Loading_32SceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Loading_32SceneCode.GDNewBitmapTextObjects1.length = 0;
gdjs.Loading_32SceneCode.GDNewBitmapTextObjects2.length = 0;
gdjs.Loading_32SceneCode.GDNewBitmapTextObjects3.length = 0;


return;

}

gdjs['Loading_32SceneCode'] = gdjs.Loading_32SceneCode;
