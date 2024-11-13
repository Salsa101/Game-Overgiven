gdjs.Loading_32Scene2Code = {};
gdjs.Loading_32Scene2Code.localVariables = [];
gdjs.Loading_32Scene2Code.GDNewSpriteObjects1= [];
gdjs.Loading_32Scene2Code.GDNewSpriteObjects2= [];
gdjs.Loading_32Scene2Code.GDNewSpriteObjects3= [];
gdjs.Loading_32Scene2Code.GDNewBitmapTextObjects1= [];
gdjs.Loading_32Scene2Code.GDNewBitmapTextObjects2= [];
gdjs.Loading_32Scene2Code.GDNewBitmapTextObjects3= [];


gdjs.Loading_32Scene2Code.asyncCallback13351372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Loading_32Scene2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Game", false);
}gdjs.Loading_32Scene2Code.localVariables.length = 0;
}
gdjs.Loading_32Scene2Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Loading_32Scene2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Loading_32Scene2Code.asyncCallback13351372(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Loading_32Scene2Code.asyncCallback13351084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Loading_32Scene2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewBitmapText"), gdjs.Loading_32Scene2Code.GDNewBitmapTextObjects2);

{for(var i = 0, len = gdjs.Loading_32Scene2Code.GDNewBitmapTextObjects2.length ;i < len;++i) {
    gdjs.Loading_32Scene2Code.GDNewBitmapTextObjects2[i].hide();
}
}
{ //Subevents
gdjs.Loading_32Scene2Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Loading_32Scene2Code.localVariables.length = 0;
}
gdjs.Loading_32Scene2Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Loading_32Scene2Code.localVariables);
for (const obj of gdjs.Loading_32Scene2Code.GDNewBitmapTextObjects1) asyncObjectsList.addObject("NewBitmapText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.Loading_32Scene2Code.asyncCallback13351084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Loading_32Scene2Code.eventsList2 = function(runtimeScene) {

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
gdjs.Loading_32Scene2Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Loading_32Scene2Code.eventsList3 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("NewBitmapText"), gdjs.Loading_32Scene2Code.GDNewBitmapTextObjects1);
{for(var i = 0, len = gdjs.Loading_32Scene2Code.GDNewBitmapTextObjects1.length ;i < len;++i) {
    gdjs.Loading_32Scene2Code.GDNewBitmapTextObjects1[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.Loading_32Scene2Code.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.Loading_32Scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Loading_32Scene2Code.GDNewSpriteObjects1.length = 0;
gdjs.Loading_32Scene2Code.GDNewSpriteObjects2.length = 0;
gdjs.Loading_32Scene2Code.GDNewSpriteObjects3.length = 0;
gdjs.Loading_32Scene2Code.GDNewBitmapTextObjects1.length = 0;
gdjs.Loading_32Scene2Code.GDNewBitmapTextObjects2.length = 0;
gdjs.Loading_32Scene2Code.GDNewBitmapTextObjects3.length = 0;

gdjs.Loading_32Scene2Code.eventsList3(runtimeScene);
gdjs.Loading_32Scene2Code.GDNewSpriteObjects1.length = 0;
gdjs.Loading_32Scene2Code.GDNewSpriteObjects2.length = 0;
gdjs.Loading_32Scene2Code.GDNewSpriteObjects3.length = 0;
gdjs.Loading_32Scene2Code.GDNewBitmapTextObjects1.length = 0;
gdjs.Loading_32Scene2Code.GDNewBitmapTextObjects2.length = 0;
gdjs.Loading_32Scene2Code.GDNewBitmapTextObjects3.length = 0;


return;

}

gdjs['Loading_32Scene2Code'] = gdjs.Loading_32Scene2Code;
