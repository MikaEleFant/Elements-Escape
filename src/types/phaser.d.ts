/// &lt;reference types="./matter" /&gt;

declare type CameraRotateCallback = (camera: Phaser.Cameras.Scene2D.Camera, progress: number, angle: number)=&gt;void;

declare type DataEachCallback = (parent: any, key: string, value: any, ...args: any[])=&gt;void;

declare type ContentLoadedCallback = ()=&gt;void;

declare type CreateCallback = (bob: Phaser.GameObjects.Bob, index: number)=&gt;void;

declare type EachContainerCallback&lt;I&gt; = (item: any, ...args: any[])=&gt;void;

declare type LightForEach = (light: Phaser.GameObjects.Light)=&gt;void;

/**
 * A custom function that will be responsible for wrapping the text.
 */
declare type TextStyleWordWrapCallback = (text: string, textObject: Phaser.GameObjects.Text)=&gt;void;

declare type CenterFunction = (triangle: Phaser.Geom.Triangle)=&gt;void;

declare namespace Phaser {
    namespace Actions {
        /**
         * Takes an array of Game Objects, or any objects that have public `x` and `y` properties, and aligns them next to each other.
         * 
         * The first item isn't moved. The second item is aligned next to the first, then the third next to the second, and so on.
         * @param items The array of items to be updated by this action.
         * @param position The position to align the items with. This is an align constant, such as `Phaser.Display.Align.LEFT_CENTER`.
         * @param offsetX Optional horizontal offset from the position. Default 0.
         * @param offsetY Optional vertical offset from the position. Default 0.
         */
        function AlignTo&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, position: number, offsetX?: number, offsetY?: number): G;

        /**
         * Takes an array of Game Objects, or any objects that have a public `angle` property,
         * and then adds the given value to each of their `angle` properties.
         * 
         * The optional `step` property is applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `Angle(group.getChildren(), value, step)`
         * @param items The array of items to be updated by this action.
         * @param value The amount to be added to the `angle` property.
         * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function Angle&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, value: number, step?: number, index?: number, direction?: number): G;

        /**
         * Takes an array of objects and passes each of them to the given callback.
         * @param items The array of items to be updated by this action.
         * @param callback The callback to be invoked. It will be passed just one argument: the item from the array.
         * @param context The scope in which the callback will be invoked.
         */
        function Call&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, callback: Phaser.Types.Actions.CallCallback, context: any): G;

        /**
         * Takes an array of objects and returns the first element in the array that has properties which match
         * all of those specified in the `compare` object. For example, if the compare object was: `{ scaleX: 0.5, alpha: 1 }`
         * then it would return the first item which had the property `scaleX` set to 0.5 and `alpha` set to 1.
         * 
         * To use this with a Group: `GetFirst(group.getChildren(), compare, index)`
         * @param items The array of items to be searched by this action.
         * @param compare The comparison object. Each property in this object will be checked against the items of the array.
         * @param index An optional offset to start searching from within the items array. Default 0.
         */
        function GetFirst&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, compare: object, index?: number): object | Phaser.GameObjects.GameObject;

        /**
         * Takes an array of objects and returns the last element in the array that has properties which match
         * all of those specified in the `compare` object. For example, if the compare object was: `{ scaleX: 0.5, alpha: 1 }`
         * then it would return the last item which had the property `scaleX` set to 0.5 and `alpha` set to 1.
         * 
         * To use this with a Group: `GetLast(group.getChildren(), compare, index)`
         * @param items The array of items to be searched by this action.
         * @param compare The comparison object. Each property in this object will be checked against the items of the array.
         * @param index An optional offset to start searching from within the items array. Default 0.
         */
        function GetLast&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, compare: object, index?: number): object | Phaser.GameObjects.GameObject;

        /**
         * Takes an array of Game Objects, or any objects that have public `x` and `y` properties,
         * and then aligns them based on the grid configuration given to this action.
         * @param items The array of items to be updated by this action.
         * @param options The GridAlign Configuration object.
         */
        function GridAlign&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, options: Phaser.Types.Actions.GridAlignConfig): G;

        /**
         * Takes an array of Game Objects, or any objects that have a public `alpha` property,
         * and then adds the given value to each of their `alpha` properties.
         * 
         * The optional `step` property is applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `IncAlpha(group.getChildren(), value, step)`
         * @param items The array of items to be updated by this action.
         * @param value The amount to be added to the `alpha` property.
         * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function IncAlpha&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, value: number, step?: number, index?: number, direction?: number): G;

        /**
         * Takes an array of Game Objects, or any objects that have a public `x` property,
         * and then adds the given value to each of their `x` properties.
         * 
         * The optional `step` property is applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `IncX(group.getChildren(), value, step)`
         * @param items The array of items to be updated by this action.
         * @param value The amount to be added to the `x` property.
         * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function IncX&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, value: number, step?: number, index?: number, direction?: number): G;

        /**
         * Takes an array of Game Objects, or any objects that have public `x` and `y` properties,
         * and then adds the given value to each of them.
         * 
         * The optional `stepX` and `stepY` properties are applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `IncXY(group.getChildren(), x, y, stepX, stepY)`
         * @param items The array of items to be updated by this action.
         * @param x The amount to be added to the `x` property.
         * @param y The amount to be added to the `y` property. If `undefined` or `null` it uses the `x` value. Default x.
         * @param stepX This is added to the `x` amount, multiplied by the iteration counter. Default 0.
         * @param stepY This is added to the `y` amount, multiplied by the iteration counter. Default 0.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function IncXY&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, x: number, y?: number, stepX?: number, stepY?: number, index?: number, direction?: number): G;

        /**
         * Takes an array of Game Objects, or any objects that have a public `y` property,
         * and then adds the given value to each of their `y` properties.
         * 
         * The optional `step` property is applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `IncY(group.getChildren(), value, step)`
         * @param items The array of items to be updated by this action.
         * @param value The amount to be added to the `y` property.
         * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function IncY&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, value: number, step?: number, index?: number, direction?: number): G;

        /**
         * Takes an array of Game Objects and positions them on evenly spaced points around the perimeter of a Circle.
         * 
         * If you wish to pass a `Phaser.GameObjects.Circle` Shape to this function, you should pass its `geom` property.
         * @param items An array of Game Objects. The contents of this array are updated by this Action.
         * @param circle The Circle to position the Game Objects on.
         * @param startAngle Optional angle to start position from, in radians. Default 0.
         * @param endAngle Optional angle to stop position at, in radians. Default 6.28.
         */
        function PlaceOnCircle&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, circle: Phaser.Geom.Circle, startAngle?: number, endAngle?: number): G;

        /**
         * Takes an array of Game Objects and positions them on evenly spaced points around the perimeter of an Ellipse.
         * 
         * If you wish to pass a `Phaser.GameObjects.Ellipse` Shape to this function, you should pass its `geom` property.
         * @param items An array of Game Objects. The contents of this array are updated by this Action.
         * @param ellipse The Ellipse to position the Game Objects on.
         * @param startAngle Optional angle to start position from, in radians. Default 0.
         * @param endAngle Optional angle to stop position at, in radians. Default 6.28.
         */
        function PlaceOnEllipse&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, ellipse: Phaser.Geom.Ellipse, startAngle?: number, endAngle?: number): G;

        /**
         * Positions an array of Game Objects on evenly spaced points of a Line.
         * @param items An array of Game Objects. The contents of this array are updated by this Action.
         * @param line The Line to position the Game Objects on.
         */
        function PlaceOnLine&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, line: Phaser.Geom.Line): G;

        /**
         * Takes an array of Game Objects and positions them on evenly spaced points around the perimeter of a Rectangle.
         * 
         * Placement starts from the top-left of the rectangle, and proceeds in a clockwise direction.
         * If the `shift` parameter is given you can offset where placement begins.
         * @param items An array of Game Objects. The contents of this array are updated by this Action.
         * @param rect The Rectangle to position the Game Objects on.
         * @param shift An optional positional offset. Default 0.
         */
        function PlaceOnRectangle&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, rect: Phaser.Geom.Rectangle, shift?: number): G;

        /**
         * Takes an array of Game Objects and positions them on evenly spaced points around the edges of a Triangle.
         * 
         * If you wish to pass a `Phaser.GameObjects.Triangle` Shape to this function, you should pass its `geom` property.
         * @param items An array of Game Objects. The contents of this array are updated by this Action.
         * @param triangle The Triangle to position the Game Objects on.
         * @param stepRate An optional step rate, to increase or decrease the packing of the Game Objects on the lines. Default 1.
         */
        function PlaceOnTriangle&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, triangle: Phaser.Geom.Triangle, stepRate?: number): G;

        /**
         * Play an animation on all Game Objects in the array that have an Animation component.
         * 
         * You can pass either an animation key, or an animation configuration object for more control over the playback.
         * @param items An array of Game Objects. The contents of this array are updated by this Action.
         * @param key The string-based key of the animation to play, or an Animation instance, or a `PlayAnimationConfig` object.
         * @param ignoreIfPlaying If this animation is already playing then ignore this call. Default false.
         */
        function PlayAnimation&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, key: string | Phaser.Animations.Animation | Phaser.Types.Animations.PlayAnimationConfig, ignoreIfPlaying?: boolean): G;

        /**
         * Takes an array of Game Objects, or any objects that have a public property as defined in `key`,
         * and then adds the given value to it.
         * 
         * The optional `step` property is applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `PropertyValueInc(group.getChildren(), key, value, step)`
         * @param items The array of items to be updated by this action.
         * @param key The property to be updated.
         * @param value The amount to be added to the property.
         * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function PropertyValueInc&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, key: string, value: number, step?: number, index?: number, direction?: number): G;

        /**
         * Takes an array of Game Objects, or any objects that have a public property as defined in `key`,
         * and then sets it to the given value.
         * 
         * The optional `step` property is applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `PropertyValueSet(group.getChildren(), key, value, step)`
         * @param items The array of items to be updated by this action.
         * @param key The property to be updated.
         * @param value The amount to set the property to.
         * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function PropertyValueSet&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, key: string, value: number, step?: number, index?: number, direction?: number): G;

        /**
         * Takes an array of Game Objects and positions them at random locations within the Circle.
         * 
         * If you wish to pass a `Phaser.GameObjects.Circle` Shape to this function, you should pass its `geom` property.
         * @param items An array of Game Objects. The contents of this array are updated by this Action.
         * @param circle The Circle to position the Game Objects within.
         */
        function RandomCircle&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, circle: Phaser.Geom.Circle): G;

        /**
         * Takes an array of Game Objects and positions them at random locations within the Ellipse.
         * 
         * If you wish to pass a `Phaser.GameObjects.Ellipse` Shape to this function, you should pass its `geom` property.
         * @param items An array of Game Objects. The contents of this array are updated by this Action.
         * @param ellipse The Ellipse to position the Game Objects within.
         */
        function RandomEllipse&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, ellipse: Phaser.Geom.Ellipse): G;

        /**
         * Takes an array of Game Objects and positions them at random locations on the Line.
         * 
         * If you wish to pass a `Phaser.GameObjects.Line` Shape to this function, you should pass its `geom` property.
         * @param items An array of Game Objects. The contents of this array are updated by this Action.
         * @param line The Line to position the Game Objects randomly on.
         */
        function RandomLine&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, line: Phaser.Geom.Line): G;

        /**
         * Takes an array of Game Objects and positions them at random locations within the Rectangle.
         * @param items An array of Game Objects. The contents of this array are updated by this Action.
         * @param rect The Rectangle to position the Game Objects within.
         */
        function RandomRectangle&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, rect: Phaser.Geom.Rectangle): G;

        /**
         * Takes an array of Game Objects and positions them at random locations within the Triangle.
         * 
         * If you wish to pass a `Phaser.GameObjects.Triangle` Shape to this function, you should pass its `geom` property.
         * @param items An array of Game Objects. The contents of this array are updated by this Action.
         * @param triangle The Triangle to position the Game Objects within.
         */
        function RandomTriangle&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, triangle: Phaser.Geom.Triangle): G;

        /**
         * Takes an array of Game Objects, or any objects that have a public `rotation` property,
         * and then adds the given value to each of their `rotation` properties.
         * 
         * The optional `step` property is applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `Rotate(group.getChildren(), value, step)`
         * @param items The array of items to be updated by this action.
         * @param value The amount to be added to the `rotation` property (in radians).
         * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function Rotate&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, value: number, step?: number, index?: number, direction?: number): G;

        /**
         * Rotates each item around the given point by the given angle.
         * @param items An array of Game Objects. The contents of this array are updated by this Action.
         * @param point Any object with public `x` and `y` properties.
         * @param angle The angle to rotate by, in radians.
         */
        function RotateAround&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, point: object, angle: number): G;

        /**
         * Rotates an array of Game Objects around a point by the given angle and distance.
         * @param items An array of Game Objects. The contents of this array are updated by this Action.
         * @param point Any object with public `x` and `y` properties.
         * @param angle The angle to rotate by, in radians.
         * @param distance The distance from the point of rotation in pixels.
         */
        function RotateAroundDistance&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, point: object, angle: number, distance: number): G;

        /**
         * Takes an array of Game Objects, or any objects that have a public `scaleX` property,
         * and then adds the given value to each of their `scaleX` properties.
         * 
         * The optional `step` property is applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `ScaleX(group.getChildren(), value, step)`
         * @param items The array of items to be updated by this action.
         * @param value The amount to be added to the `scaleX` property.
         * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function ScaleX&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, value: number, step?: number, index?: number, direction?: number): G;

        /**
         * Takes an array of Game Objects, or any objects that have public `scaleX` and `scaleY` properties,
         * and then adds the given value to each of them.
         * 
         * The optional `stepX` and `stepY` properties are applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `ScaleXY(group.getChildren(), scaleX, scaleY, stepX, stepY)`
         * @param items The array of items to be updated by this action.
         * @param scaleX The amount to be added to the `scaleX` property.
         * @param scaleY The amount to be added to the `scaleY` property. If `undefined` or `null` it uses the `scaleX` value.
         * @param stepX This is added to the `scaleX` amount, multiplied by the iteration counter. Default 0.
         * @param stepY This is added to the `scaleY` amount, multiplied by the iteration counter. Default 0.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function ScaleXY&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, scaleX: number, scaleY?: number, stepX?: number, stepY?: number, index?: number, direction?: number): G;

        /**
         * Takes an array of Game Objects, or any objects that have a public `scaleY` property,
         * and then adds the given value to each of their `scaleY` properties.
         * 
         * The optional `step` property is applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `ScaleY(group.getChildren(), value, step)`
         * @param items The array of items to be updated by this action.
         * @param value The amount to be added to the `scaleY` property.
         * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function ScaleY&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, value: number, step?: number, index?: number, direction?: number): G;

        /**
         * Takes an array of Game Objects, or any objects that have the public property `alpha`
         * and then sets it to the given value.
         * 
         * The optional `step` property is applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `SetAlpha(group.getChildren(), value, step)`
         * @param items The array of items to be updated by this action.
         * @param value The amount to set the property to.
         * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function SetAlpha&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, value: number, step?: number, index?: number, direction?: number): G;

        /**
         * Takes an array of Game Objects, or any objects that have the public property `blendMode`
         * and then sets it to the given value.
         * 
         * The optional `step` property is applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `SetBlendMode(group.getChildren(), value)`
         * @param items The array of items to be updated by this action.
         * @param value The amount to set the property to.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function SetBlendMode&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, value: number, index?: number, direction?: number): G;

        /**
         * Takes an array of Game Objects, or any objects that have the public property `depth`
         * and then sets it to the given value.
         * 
         * The optional `step` property is applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `SetDepth(group.getChildren(), value, step)`
         * @param items The array of items to be updated by this action.
         * @param value The amount to set the property to.
         * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function SetDepth&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, value: number, step?: number, index?: number, direction?: number): G;

        /**
         * Passes all provided Game Objects to the Input Manager to enable them for input with identical areas and callbacks.
         * @param items An array of Game Objects. The contents of this array are updated by this Action.
         * @param hitArea Either an input configuration object, or a geometric shape that defines the hit area for the Game Object. If not specified a Rectangle will be used.
         * @param hitAreaCallback A callback to be invoked when the Game Object is interacted with. If you provide a shape you must also provide a callback.
         */
        function SetHitArea&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, hitArea: any, hitAreaCallback: Phaser.Types.Input.HitAreaCallback): G;

        /**
         * Takes an array of Game Objects, or any objects that have the public properties `originX` and `originY`
         * and then sets them to the given values.
         * 
         * The optional `stepX` and `stepY` properties are applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `SetOrigin(group.getChildren(), originX, originY, stepX, stepY)`
         * @param items The array of items to be updated by this action.
         * @param originX The amount to set the `originX` property to.
         * @param originY The amount to set the `originY` property to. If `undefined` or `null` it uses the `originX` value.
         * @param stepX This is added to the `originX` amount, multiplied by the iteration counter. Default 0.
         * @param stepY This is added to the `originY` amount, multiplied by the iteration counter. Default 0.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function SetOrigin&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, originX: number, originY?: number, stepX?: number, stepY?: number, index?: number, direction?: number): G;

        /**
         * Takes an array of Game Objects, or any objects that have the public property `rotation`
         * and then sets it to the given value.
         * 
         * The optional `step` property is applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `SetRotation(group.getChildren(), value, step)`
         * @param items The array of items to be updated by this action.
         * @param value The amount to set the property to.
         * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function SetRotation&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, value: number, step?: number, index?: number, direction?: number): G;

        /**
         * Takes an array of Game Objects, or any objects that have the public properties `scaleX` and `scaleY`
         * and then sets them to the given values.
         * 
         * The optional `stepX` and `stepY` properties are applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `SetScale(group.getChildren(), scaleX, scaleY, stepX, stepY)`
         * @param items The array of items to be updated by this action.
         * @param scaleX The amount to set the `scaleX` property to.
         * @param scaleY The amount to set the `scaleY` property to. If `undefined` or `null` it uses the `scaleX` value.
         * @param stepX This is added to the `scaleX` amount, multiplied by the iteration counter. Default 0.
         * @param stepY This is added to the `scaleY` amount, multiplied by the iteration counter. Default 0.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function SetScale&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, scaleX: number, scaleY?: number, stepX?: number, stepY?: number, index?: number, direction?: number): G;

        /**
         * Takes an array of Game Objects, or any objects that have the public property `scaleX`
         * and then sets it to the given value.
         * 
         * The optional `step` property is applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `SetScaleX(group.getChildren(), value, step)`
         * @param items The array of items to be updated by this action.
         * @param value The amount to set the property to.
         * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function SetScaleX&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, value: number, step?: number, index?: number, direction?: number): G;

        /**
         * Takes an array of Game Objects, or any objects that have the public property `scaleY`
         * and then sets it to the given value.
         * 
         * The optional `step` property is applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `SetScaleY(group.getChildren(), value, step)`
         * @param items The array of items to be updated by this action.
         * @param value The amount to set the property to.
         * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function SetScaleY&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, value: number, step?: number, index?: number, direction?: number): G;

        /**
         * Takes an array of Game Objects, or any objects that have the public properties `scrollFactorX` and `scrollFactorY`
         * and then sets them to the given values.
         * 
         * The optional `stepX` and `stepY` properties are applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `SetScrollFactor(group.getChildren(), scrollFactorX, scrollFactorY, stepX, stepY)`
         * @param items The array of items to be updated by this action.
         * @param scrollFactorX The amount to set the `scrollFactorX` property to.
         * @param scrollFactorY The amount to set the `scrollFactorY` property to. If `undefined` or `null` it uses the `scrollFactorX` value.
         * @param stepX This is added to the `scrollFactorX` amount, multiplied by the iteration counter. Default 0.
         * @param stepY This is added to the `scrollFactorY` amount, multiplied by the iteration counter. Default 0.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function SetScrollFactor&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, scrollFactorX: number, scrollFactorY?: number, stepX?: number, stepY?: number, index?: number, direction?: number): G;

        /**
         * Takes an array of Game Objects, or any objects that have the public property `scrollFactorX`
         * and then sets it to the given value.
         * 
         * The optional `step` property is applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `SetScrollFactorX(group.getChildren(), value, step)`
         * @param items The array of items to be updated by this action.
         * @param value The amount to set the property to.
         * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function SetScrollFactorX&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, value: number, step?: number, index?: number, direction?: number): G;

        /**
         * Takes an array of Game Objects, or any objects that have the public property `scrollFactorY`
         * and then sets it to the given value.
         * 
         * The optional `step` property is applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `SetScrollFactorY(group.getChildren(), value, step)`
         * @param items The array of items to be updated by this action.
         * @param value The amount to set the property to.
         * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function SetScrollFactorY&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, value: number, step?: number, index?: number, direction?: number): G;

        /**
         * Takes an array of Game Objects, or any objects that have the public method setTint() and then updates it to the given value(s). You can specify tint color per corner or provide only one color value for `topLeft` parameter, in which case whole item will be tinted with that color.
         * @param items An array of Game Objects. The contents of this array are updated by this Action.
         * @param topLeft The tint being applied to top-left corner of item. If other parameters are given no value, this tint will be applied to whole item.
         * @param topRight The tint to be applied to top-right corner of item.
         * @param bottomLeft The tint to be applied to the bottom-left corner of item.
         * @param bottomRight The tint to be applied to the bottom-right corner of item.
         */
        function SetTint&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, topLeft: number, topRight?: number, bottomLeft?: number, bottomRight?: number): G;

        /**
         * Takes an array of Game Objects, or any objects that have the public property `visible`
         * and then sets it to the given value.
         * 
         * To use this with a Group: `SetVisible(group.getChildren(), value)`
         * @param items The array of items to be updated by this action.
         * @param value The value to set the property to.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function SetVisible&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, value: boolean, index?: number, direction?: number): G;

        /**
         * Takes an array of Game Objects, or any objects that have the public property `x`
         * and then sets it to the given value.
         * 
         * The optional `step` property is applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `SetX(group.getChildren(), value, step)`
         * @param items The array of items to be updated by this action.
         * @param value The amount to set the property to.
         * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function SetX&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, value: number, step?: number, index?: number, direction?: number): G;

        /**
         * Takes an array of Game Objects, or any objects that have the public properties `x` and `y`
         * and then sets them to the given values.
         * 
         * The optional `stepX` and `stepY` properties are applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `SetXY(group.getChildren(), x, y, stepX, stepY)`
         * @param items The array of items to be updated by this action.
         * @param x The amount to set the `x` property to.
         * @param y The amount to set the `y` property to. If `undefined` or `null` it uses the `x` value. Default x.
         * @param stepX This is added to the `x` amount, multiplied by the iteration counter. Default 0.
         * @param stepY This is added to the `y` amount, multiplied by the iteration counter. Default 0.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function SetXY&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, x: number, y?: number, stepX?: number, stepY?: number, index?: number, direction?: number): G;

        /**
         * Takes an array of Game Objects, or any objects that have the public property `y`
         * and then sets it to the given value.
         * 
         * The optional `step` property is applied incrementally, multiplied by each item in the array.
         * 
         * To use this with a Group: `SetY(group.getChildren(), value, step)`
         * @param items The array of items to be updated by this action.
         * @param value The amount to set the property to.
         * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
         * @param index An optional offset to start searching from within the items array. Default 0.
         * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
         */
        function SetY&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, value: number, step?: number, index?: number, direction?: number): G;

        /**
         * Iterate through the items array changing the position of each element to be that of the element that came before
         * it in the array (or after it if direction = 1)
         * 
         * The first items position is set to x/y.
         * 
         * The final x/y coords are returned
         * @param items An array of Game Objects. The contents of this array are updated by this Action.
         * @param x The x coordinate to place the first item in the array at.
         * @param y The y coordinate to place the first item in the array at.
         * @param direction The iteration direction. 0 = first to last and 1 = last to first. Default 0.
         * @param output An optional objec to store the final objects position in.
         */
        function ShiftPosition&lt;G extends Phaser.GameObjects.GameObject[], O extends Phaser.Math.Vector2&gt;(items: G, x: number, y: number, direction?: number, output?: O): O;

        /**
         * Shuffles the array in place. The shuffled array is both modified and returned.
         * @param items An array of Game Objects. The contents of this array are updated by this Action.
         */
        function Shuffle&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G): G;

        /**
         * Smootherstep is a sigmoid-like interpolation and clamping function.
         * 
         * The function depends on three parameters, the input x, the "left edge" and the "right edge", with the left edge being assumed smaller than the right edge. The function receives a real number x as an argument and returns 0 if x is less than or equal to the left edge, 1 if x is greater than or equal to the right edge, and smoothly interpolates, using a Hermite polynomial, between 0 and 1 otherwise. The slope of the smoothstep function is zero at both edges. This is convenient for creating a sequence of transitions using smoothstep to interpolate each segment as an alternative to using more sophisticated or expensive interpolation techniques.
         * @param items An array of Game Objects. The contents of this array are updated by this Action.
         * @param property The property of the Game Object to interpolate.
         * @param min The minimum interpolation value.
         * @param max The maximum interpolation value.
         * @param inc Should the values be incremented? `true` or set (`false`) Default false.
         */
        function SmootherStep&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, property: string, min: number, max: number, inc?: boolean): G;

        /**
         * Smoothstep is a sigmoid-like interpolation and clamping function.
         * 
         * The function depends on three parameters, the input x, the "left edge" and the "right edge", with the left edge being assumed smaller than the right edge. The function receives a real number x as an argument and returns 0 if x is less than or equal to the left edge, 1 if x is greater than or equal to the right edge, and smoothly interpolates, using a Hermite polynomial, between 0 and 1 otherwise. The slope of the smoothstep function is zero at both edges. This is convenient for creating a sequence of transitions using smoothstep to interpolate each segment as an alternative to using more sophisticated or expensive interpolation techniques.
         * @param items An array of Game Objects. The contents of this array are updated by this Action.
         * @param property The property of the Game Object to interpolate.
         * @param min The minimum interpolation value.
         * @param max The maximum interpolation value.
         * @param inc Should the values be incremented? `true` or set (`false`) Default false.
         */
        function SmoothStep&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, property: string, min: number, max: number, inc?: boolean): G;

        /**
         * Takes an array of Game Objects and then modifies their `property` so the value equals, or is incremented, by the
         * calculated spread value.
         * 
         * The spread value is derived from the given `min` and `max` values and the total number of items in the array.
         * 
         * For example, to cause an array of Sprites to change in alpha from 0 to 1 you could call:
         * 
         * ```javascript
         * Phaser.Actions.Spread(itemsArray, 'alpha', 0, 1);
         * ```
         * @param items An array of Game Objects. The contents of this array are updated by this Action.
         * @param property The property of the Game Object to spread.
         * @param min The minimum value.
         * @param max The maximum value.
         * @param inc Should the values be incremented? `true` or set (`false`) Default false.
         */
        function Spread&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, property: string, min: number, max: number, inc?: boolean): G;

        /**
         * Takes an array of Game Objects and toggles the visibility of each one.
         * Those previously `visible = false` will become `visible = true`, and vice versa.
         * @param items An array of Game Objects. The contents of this array are updated by this Action.
         */
        function ToggleVisible&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G): G;

        /**
         * Wrap each item's coordinates within a rectangle's area.
         * @param items An array of Game Objects. The contents of this array are updated by this Action.
         * @param rect The rectangle.
         * @param padding An amount added to each side of the rectangle during the operation. Default 0.
         */
        function WrapInRectangle&lt;G extends Phaser.GameObjects.GameObject[]&gt;(items: G, rect: Phaser.Geom.Rectangle, padding?: number): G;

    }

    namespace Animations {
        /**
         * A Frame based Animation.
         * 
         * Animations in Phaser consist of a sequence of `AnimationFrame` objects, which are managed by
         * this class, along with properties that impact playback, such as the animations frame rate
         * or delay.
         * 
         * This class contains all of the properties and methods needed to handle playback of the animation
         * directly to an `AnimationState` instance, which is owned by a Sprite, or similar Game Object.
         * 
         * You don't typically create an instance of this class directly, but instead go via
         * either the `AnimationManager` or the `AnimationState` and use their `create` methods,
         * depending on if you need a global animation, or local to a specific Sprite.
         */
        class Animation {
            /**
             * 
             * @param manager A reference to the global Animation Manager
             * @param key The unique identifying string for this animation.
             * @param config The Animation configuration.
             */
            constructor(manager: Phaser.Animations.AnimationManager, key: string, config: Phaser.Types.Animations.Animation);

            /**
             * A reference to the global Animation Manager.
             */
            manager: Phaser.Animations.AnimationManager;

            /**
             * The unique identifying string for this animation.
             */
            key: string;

            /**
             * A frame based animation (as opposed to a bone based animation)
             */
            type: string;

            /**
             * Extract all the frame data into the frames array.
             */
            frames: Phaser.Animations.AnimationFrame[];

            /**
             * The frame rate of playback in frames per second (default 24 if duration is null)
             */
            frameRate: number;

            /**
             * How long the animation should play for, in milliseconds.
             * If the `frameRate` property has been set then it overrides this value,
             * otherwise the `frameRate` is derived from `duration`.
             */
            duration: number;

            /**
             * How many ms per frame, not including frame specific modifiers.
             */
            msPerFrame: number;

            /**
             * Skip frames if the time lags, or always advanced anyway?
             */
            skipMissedFrames: boolean;

            /**
             * The delay in ms before the playback will begin.
             */
            delay: number;

            /**
             * Number of times to repeat the animation. Set to -1 to repeat forever.
             */
            repeat: number;

            /**
             * The delay in ms before the a repeat play starts.
             */
            repeatDelay: number;

            /**
             * Should the animation yoyo (reverse back down to the start) before repeating?
             */
            yoyo: boolean;

            /**
             * Should the GameObject's `visible` property be set to `true` when the animation starts to play?
             */
            showOnStart: boolean;

            /**
             * Should the GameObject's `visible` property be set to `false` when the animation finishes?
             */
            hideOnComplete: boolean;

            /**
             * Global pause. All Game Objects using this Animation instance are impacted by this property.
             */
            paused: boolean;

            /**
             * Gets the total number of frames in this animation.
             */
            getTotalFrames(): number;

            /**
             * Calculates the duration, frame rate and msPerFrame values.
             * @param target The target to set the values on.
             * @param totalFrames The total number of frames in the animation.
             * @param duration The duration to calculate the frame rate from.
             * @param frameRate The frame ate to calculate the duration from.
             */
            calculateDuration(target: Phaser.Animations.Animation, totalFrames: number, duration: number, frameRate: number): void;

            /**
             * Add frames to the end of the animation.
             * @param config Either a string, in which case it will use all frames from a texture with the matching key, or an array of Animation Frame configuration objects.
             */
            addFrame(config: string | Phaser.Types.Animations.AnimationFrame[]): this;

            /**
             * Add frame/s into the animation.
             * @param index The index to insert the frame at within the animation.
             * @param config Either a string, in which case it will use all frames from a texture with the matching key, or an array of Animation Frame configuration objects.
             */
            addFrameAt(index: number, config: string | Phaser.Types.Animations.AnimationFrame[]): this;

            /**
             * Check if the given frame index is valid.
             * @param index The index to be checked.
             */
            checkFrame(index: number): boolean;

            /**
             * Called internally when this Animation first starts to play.
             * Sets the accumulator and nextTick properties.
             * @param state The Animation State belonging to the Game Object invoking this call.
             */
            protected getFirstTick(state: Phaser.Animations.AnimationState): void;

            /**
             * Returns the AnimationFrame at the provided index
             * @param index The index in the AnimationFrame array
             */
            protected getFrameAt(index: number): Phaser.Animations.AnimationFrame;

            /**
             * Creates AnimationFrame instances based on the given frame data.
             * @param textureManager A reference to the global Texture Manager.
             * @param frames Either a string, in which case it will use all frames from a texture with the matching key, or an array of Animation Frame configuration objects.
             * @param defaultTextureKey The key to use if no key is set in the frame configuration object.
             */
            getFrames(textureManager: Phaser.Textures.TextureManager, frames: string | Phaser.Types.Animations.AnimationFrame[], defaultTextureKey?: string): Phaser.Animations.AnimationFrame[];

            /**
             * Called internally. Sets the accumulator and nextTick values of the current Animation.
             * @param state The Animation State belonging to the Game Object invoking this call.
             */
            getNextTick(state: Phaser.Animations.AnimationState): void;

            /**
             * Returns the frame closest to the given progress value between 0 and 1.
             * @param value A value between 0 and 1.
             */
            getFrameByProgress(value: number): Phaser.Animations.AnimationFrame;

            /**
             * Advance the animation frame.
             * @param state The Animation State to advance.
             */
            nextFrame(state: Phaser.Animations.AnimationState): void;

            /**
             * Returns the animation last frame.
             */
            getLastFrame(): Phaser.Animations.AnimationFrame;

            /**
             * Called internally when the Animation is playing backwards.
             * Sets the previous frame, causing a yoyo, repeat, complete or update, accordingly.
             * @param state The Animation State belonging to the Game Object invoking this call.
             */
            previousFrame(state: Phaser.Animations.AnimationState): void;

            /**
             * Removes the given AnimationFrame from this Animation instance.
             * This is a global action. Any Game Object using this Animation will be impacted by this change.
             * @param frame The AnimationFrame to be removed.
             */
            removeFrame(frame: Phaser.Animations.AnimationFrame): this;

            /**
             * Removes a frame from the AnimationFrame array at the provided index
             * and updates the animation accordingly.
             * @param index The index in the AnimationFrame array
             */
            removeFrameAt(index: number): this;

            /**
             * Called internally during playback. Forces the animation to repeat, providing there are enough counts left
             * in the repeat counter.
             * @param state The Animation State belonging to the Game Object invoking this call.
             */
            repeatAnimation(state: Phaser.Animations.AnimationState): void;

            /**
             * Converts the animation data to JSON.
             */
            toJSON(): Phaser.Types.Animations.JSONAnimation;

            /**
             * Called internally whenever frames are added to, or removed from, this Animation.
             */
            updateFrameSequence(): this;

            /**
             * Pauses playback of this Animation. The paused state is set immediately.
             */
            pause(): this;

            /**
             * Resumes playback of this Animation. The paused state is reset immediately.
             */
            resume(): this;

            /**
             * Destroys this Animation instance. It will remove all event listeners,
             * remove this animation and its key from the global Animation Manager,
             * and then destroy all Animation Frames in turn.
             */
            destroy(): void;

        }

        /**
         * A single frame in an Animation sequence.
         * 
         * An AnimationFrame consists of a reference to the Texture it uses for rendering, references to other
         * frames in the animation, and index data. It also has the ability to modify the animation timing.
         * 
         * AnimationFrames are generated automatically by the Animation class.
         */
        class AnimationFrame {
            /**
             * 
             * @param textureKey The key of the Texture this AnimationFrame uses.
             * @param textureFrame The key of the Frame within the Texture that this AnimationFrame uses.
             * @param index The index of this AnimationFrame within the Animation sequence.
             * @param frame A reference to the Texture Frame this AnimationFrame uses for rendering.
             * @param isKeyFrame Is this Frame a Keyframe within the Animation? Default false.
             */
            constructor(textureKey: string, textureFrame: string | number, index: number, frame: Phaser.Textures.Frame, isKeyFrame?: boolean);

            /**
             * The key of the Texture this AnimationFrame uses.
             */
            textureKey: string;

            /**
             * The key of the Frame within the Texture that this AnimationFrame uses.
             */
            textureFrame: string | number;

            /**
             * The index of this AnimationFrame within the Animation sequence.
             */
            index: number;

            /**
             * A reference to the Texture Frame this AnimationFrame uses for rendering.
             */
            frame: Phaser.Textures.Frame;

            /**
             * Is this the first frame in an animation sequence?
             */
            readonly isFirst: boolean;

            /**
             * Is this the last frame in an animation sequence?
             */
            readonly isLast: boolean;

            /**
             * A reference to the AnimationFrame that comes before this one in the animation, if any.
             */
            readonly prevFrame: Phaser.Animations.AnimationFrame;

            /**
             * A reference to the AnimationFrame that comes after this one in the animation, if any.
             */
            readonly nextFrame: Phaser.Animations.AnimationFrame;

            /**
             * Additional time (in ms) that this frame should appear for during playback.
             * The value is added onto the msPerFrame set by the animation.
             */
            duration: number;

            /**
             * What % through the animation does this frame come?
             * This value is generated when the animation is created and cached here.
             */
            readonly progress: number;

            /**
             * Is this Frame a KeyFrame within the Animation?
             */
            isKeyFrame: boolean;

            /**
             * Generates a JavaScript object suitable for converting to JSON.
             */
            toJSON(): Phaser.Types.Animations.JSONAnimationFrame;

            /**
             * Destroys this object by removing references to external resources and callbacks.
             */
            destroy(): void;

        }

        /**
         * The Animation Manager.
         * 
         * Animations are managed by the global Animation Manager. This is a singleton class that is
         * responsible for creating and delivering animations and their corresponding data to all Game Objects.
         * Unlike plugins it is owned by the Game instance, not the Scene.
         * 
         * Sprites and other Game Objects get the data they need from the AnimationManager.
         */
        class AnimationManager extends Phaser.Events.EventEmitter {
            /**
             * 
             * @param game A reference to the Phaser.Game instance.
             */
            constructor(game: Phaser.Game);

            /**
             * A reference to the Phaser.Game instance.
             */
            protected game: Phaser.Game;

            /**
             * A reference to the Texture Manager.
             */
            protected textureManager: Phaser.Textures.TextureManager;

            /**
             * The global time scale of the Animation Manager.
             * 
             * This scales the time delta between two frames, thus influencing the speed of time for the Animation Manager.
             */
            globalTimeScale: number;

            /**
             * The Animations registered in the Animation Manager.
             * 
             * This map should be modified with the {@link #add} and {@link #create} methods of the Animation Manager.
             */
            protected anims: Phaser.Structs.Map&lt;string, Phaser.Animations.Animation&gt;;

            /**
             * A list of animation mix times.
             * 
             * See the {@link #setMix} method for more details.
             */
            mixes: Phaser.Structs.Map&lt;string, Phaser.Animations.Animation&gt;;

            /**
             * Whether the Animation Manager is paused along with all of its Animations.
             */
            paused: boolean;

            /**
             * The name of this Animation Manager.
             */
            name: string;

            /**
             * Registers event listeners after the Game boots.
             */
            boot(): void;

            /**
             * Adds a mix between two animations.
             * 
             * Mixing allows you to specify a unique delay between a pairing of animations.
             * 
             * When playing Animation A on a Game Object, if you then play Animation B, and a
             * mix exists, it will wait for the specified delay to be over before playing Animation B.
             * 
             * This allows you to customise smoothing between different types of animation, such
             * as blending between an idle and a walk state, or a running and a firing state.
             * 
             * Note that mixing is only applied if you use the `Sprite.play` method. If you opt to use
             * `playAfterRepeat` or `playAfterDelay` instead, those will take pririty and the mix
             * delay will not be used.
             * 
             * To update an existing mix, just call this method with the new delay.
             * 
             * To remove a mix pairing, see the `removeMix` method.
             * @param animA The string-based key, or instance of, Animation A.
             * @param animB The string-based key, or instance of, Animation B.
             * @param delay The delay, in milliseconds, to wait when transitioning from Animation A to B.
             */
            addMix(animA: string | Phaser.Animations.Animation, animB: string | Phaser.Animations.Animation, delay: number): this;

            /**
             * Removes a mix between two animations.
             * 
             * Mixing allows you to specify a unique delay between a pairing of animations.
             * 
             * Calling this method lets you remove those pairings. You can either remove
             * it between `animA` and `animB`, or if you do not provide the `animB` parameter,
             * it will remove all `animA` mixes.
             * 
             * If you wish to update an existing mix instead, call the `addMix` method with the
             * new delay.
             * @param animA The string-based key, or instance of, Animation A.
             * @par