gdjs.Loading_32Scene3Code = {};
gdjs.Loading_32Scene3Code.localVariables = [];
gdjs.Loading_32Scene3Code.GDNewSpriteObjects1= [];
gdjs.Loading_32Scene3Code.GDNewSpriteObjects2= [];
gdjs.Loading_32Scene3Code.GDNewSpriteObjects3= [];
gdjs.Loading_32Scene3Code.GDNewBitmapTextObjects1= [];
gdjs.Loading_32Scene3Code.GDNewBitmapTextObjects2= [];
gdjs.Loading_32Scene3Code.GDNewBitmapTextObjects3= [];


gdjs.Loading_32Scene3Code.asyncCallback10211068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Loading_32Scene3Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Story Scene", false);
}gdjs.Loading_32Scene3Code.localVariables.length = 0;
}
gdjs.Loading_32Scene3Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Loading_32Scene3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Loading_32Scene3Code.asyncCallback10211068(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Loading_32Scene3Code.asyncCallback10210780 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Loading_32Scene3Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewBitmapText"), gdjs.Loading_32Scene3Code.GDNewBitmapTextObjects2);

{for(var i = 0, len = gdjs.Loading_32Scene3Code.GDNewBitmapTextObjects2.length ;i < len;++i) {
    gdjs.Loading_32Scene3Code.GDNewBitmapTextObjects2[i].hide();
}
}
{ //Subevents
gdjs.Loading_32Scene3Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Loading_32Scene3Code.localVariables.length = 0;
}
gdjs.Loading_32Scene3Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Loading_32Scene3Code.localVariables);
for (const obj of gdjs.Loading_32Scene3Code.GDNewBitmapTextObjects1) asyncObjectsList.addObject("NewBitmapText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.Loading_32Scene3Code.asyncCallback10210780(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Loading_32Scene3Code.eventsList2 = function(runtimeScene) {

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
gdjs.Loading_32Scene3Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Loading_32Scene3Code.eventsList3 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("NewBitmapText"), gdjs.Loading_32Scene3Code.GDNewBitmapTextObjects1);
{for(var i = 0, len = gdjs.Loading_32Scene3Code.GDNewBitmapTextObjects1.length ;i < len;++i) {
    gdjs.Loading_32Scene3Code.GDNewBitmapTextObjects1[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.Loading_32Scene3Code.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.Loading_32Scene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Loading_32Scene3Code.GDNewSpriteObjects1.length = 0;
gdjs.Loading_32Scene3Code.GDNewSpriteObjects2.length = 0;
gdjs.Loading_32Scene3Code.GDNewSpriteObjects3.length = 0;
gdjs.Loading_32Scene3Code.GDNewBitmapTextObjects1.length = 0;
gdjs.Loading_32Scene3Code.GDNewBitmapTextObjects2.length = 0;
gdjs.Loading_32Scene3Code.GDNewBitmapTextObjects3.length = 0;

gdjs.Loading_32Scene3Code.eventsList3(runtimeScene);
gdjs.Loading_32Scene3Code.GDNewSpriteObjects1.length = 0;
gdjs.Loading_32Scene3Code.GDNewSpriteObjects2.length = 0;
gdjs.Loading_32Scene3Code.GDNewSpriteObjects3.length = 0;
gdjs.Loading_32Scene3Code.GDNewBitmapTextObjects1.length = 0;
gdjs.Loading_32Scene3Code.GDNewBitmapTextObjects2.length = 0;
gdjs.Loading_32Scene3Code.GDNewBitmapTextObjects3.length = 0;


return;

}

gdjs['Loading_32Scene3Code'] = gdjs.Loading_32Scene3Code;
