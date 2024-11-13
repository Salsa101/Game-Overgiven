gdjs.Story_32SceneCode = {};
gdjs.Story_32SceneCode.localVariables = [];
gdjs.Story_32SceneCode.GDNewSpriteObjects1= [];
gdjs.Story_32SceneCode.GDNewSpriteObjects2= [];
gdjs.Story_32SceneCode.GDNewSpriteObjects3= [];
gdjs.Story_32SceneCode.GDStoryTXTObjects1= [];
gdjs.Story_32SceneCode.GDStoryTXTObjects2= [];
gdjs.Story_32SceneCode.GDStoryTXTObjects3= [];
gdjs.Story_32SceneCode.GDNewTextObjects1= [];
gdjs.Story_32SceneCode.GDNewTextObjects2= [];
gdjs.Story_32SceneCode.GDNewTextObjects3= [];


gdjs.Story_32SceneCode.asyncCallback18894596 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Story_32SceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Loading Scene", false);
}gdjs.Story_32SceneCode.localVariables.length = 0;
}
gdjs.Story_32SceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Story_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Story_32SceneCode.asyncCallback18894596(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Story_32SceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "typewriter") >= 0.05;
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "typewriter");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
if (isConditionTrue_0) {

{ //Subevents
gdjs.Story_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Story_32SceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Story.wav", true, 100, 1);
}{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "New dialogue tree");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "typewriter");
}{gdjs.dialogueTree.startFrom("Start");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Story.wav", true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isRunning();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StoryTXT"), gdjs.Story_32SceneCode.GDStoryTXTObjects1);
{for(var i = 0, len = gdjs.Story_32SceneCode.GDStoryTXTObjects1.length ;i < len;++i) {
    gdjs.Story_32SceneCode.GDStoryTXTObjects1[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.Story_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Story_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Story_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Story_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Story_32SceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Story_32SceneCode.GDStoryTXTObjects1.length = 0;
gdjs.Story_32SceneCode.GDStoryTXTObjects2.length = 0;
gdjs.Story_32SceneCode.GDStoryTXTObjects3.length = 0;
gdjs.Story_32SceneCode.GDNewTextObjects1.length = 0;
gdjs.Story_32SceneCode.GDNewTextObjects2.length = 0;
gdjs.Story_32SceneCode.GDNewTextObjects3.length = 0;

gdjs.Story_32SceneCode.eventsList2(runtimeScene);
gdjs.Story_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Story_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Story_32SceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Story_32SceneCode.GDStoryTXTObjects1.length = 0;
gdjs.Story_32SceneCode.GDStoryTXTObjects2.length = 0;
gdjs.Story_32SceneCode.GDStoryTXTObjects3.length = 0;
gdjs.Story_32SceneCode.GDNewTextObjects1.length = 0;
gdjs.Story_32SceneCode.GDNewTextObjects2.length = 0;
gdjs.Story_32SceneCode.GDNewTextObjects3.length = 0;


return;

}

gdjs['Story_32SceneCode'] = gdjs.Story_32SceneCode;
