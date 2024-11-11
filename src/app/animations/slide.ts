import { animate, state, style, transition, trigger } from '@angular/animations';
import { AnimationsCustomCurves, AnimationsCustomDurations } from './defaults';



// -----------------------------------------------------------------------------------------------------
// @ Slide in top
// -----------------------------------------------------------------------------------------------------
const slideInTop = trigger('slideInTop',
    [
        state('void',
            style({
                transform: 'translate3d(0, -100%, 0)',
            }),
        ),

        state('*',
            style({
                transform: 'translate3d(0, 0, 0)',
            }),
        ),

        // Prevent the transition if the state is false
        transition('void => false', []),

        // Transition
        transition('void => *', animate('{{timings}}'),
            {
                params: {
                    timings: `${AnimationsCustomDurations.entering} ${AnimationsCustomCurves.deceleration}`,
                },
            },
        ),
    ],
);

// -----------------------------------------------------------------------------------------------------
// @ Slide in bottom
// -----------------------------------------------------------------------------------------------------
const slideInBottom = trigger('slideInBottom',
    [
        state('void',
            style({
                transform: 'translate3d(0, 100%, 0)',
            }),
        ),

        state('*',
            style({
                transform: 'translate3d(0, 0, 0)',
            }),
        ),

        // Prevent the transition if the state is false
        transition('void => false', []),

        // Transition
        transition('void => *', animate('{{timings}}'),
            {
                params: {
                    timings: `${AnimationsCustomDurations.entering} ${AnimationsCustomCurves.deceleration}`,
                },
            },
        ),
    ],
);

// -----------------------------------------------------------------------------------------------------
// @ Slide in left
// -----------------------------------------------------------------------------------------------------
const slideInLeft = trigger('slideInLeft',
    [
        state('void',
            style({
                transform: 'translate3d(-100%, 0, 0)',
            }),
        ),

        state('*',
            style({
                transform: 'translate3d(0, 0, 0)',
            }),
        ),

        // Prevent the transition if the state is false
        transition('void => false', []),

        // Transition
        transition('void => *', animate('{{timings}}'),
            {
                params: {
                    timings: `${AnimationsCustomDurations.entering} ${AnimationsCustomCurves.deceleration}`,
                },
            },
        ),
    ],
);

// -----------------------------------------------------------------------------------------------------
// @ Slide in right
// -----------------------------------------------------------------------------------------------------
const slideInRight = trigger('slideInRight',
    [
        state('void',
            style({
                transform: 'translate3d(100%, 0, 0)',
            }),
        ),

        state('*',
            style({
                transform: 'translate3d(0, 0, 0)',
            }),
        ),

        // Prevent the transition if the state is false
        transition('void => false', []),

        // Transition
        transition('void => *', animate('{{timings}}'),
            {
                params: {
                    timings: `${AnimationsCustomDurations.entering} ${AnimationsCustomCurves.deceleration}`,
                },
            },
        ),
    ],
);

// -----------------------------------------------------------------------------------------------------
// @ Slide out top
// -----------------------------------------------------------------------------------------------------
const slideOutTop = trigger('slideOutTop',
    [
        state('*',
            style({
                transform: 'translate3d(0, 0, 0)',
            }),
        ),

        state('void',
            style({
                transform: 'translate3d(0, -100%, 0)',
            }),
        ),

        // Prevent the transition if the state is false
        transition('false => void', []),

        // Transition
        transition('* => void', animate('{{timings}}'),
            {
                params: {
                    timings: `${AnimationsCustomDurations.exiting} ${AnimationsCustomCurves.acceleration}`,
                },
            },
        ),
    ],
);

// -----------------------------------------------------------------------------------------------------
// @ Slide out bottom
// -----------------------------------------------------------------------------------------------------
const slideOutBottom = trigger('slideOutBottom',
    [
        state('*',
            style({
                transform: 'translate3d(0, 0, 0)',
            }),
        ),

        state('void',
            style({
                transform: 'translate3d(0, 100%, 0)',
            }),
        ),

        // Prevent the transition if the state is false
        transition('false => void', []),

        // Transition
        transition('* => void', animate('{{timings}}'),
            {
                params: {
                    timings: `${AnimationsCustomDurations.exiting} ${AnimationsCustomCurves.acceleration}`,
                },
            },
        ),
    ],
);

// -----------------------------------------------------------------------------------------------------
// @ Slide out left
// -----------------------------------------------------------------------------------------------------
const slideOutLeft = trigger('slideOutLeft',
    [
        state('*',
            style({
                transform: 'translate3d(0, 0, 0)',
            }),
        ),

        state('void',
            style({
                transform: 'translate3d(-100%, 0, 0)',
            }),
        ),

        // Prevent the transition if the state is false
        transition('false => void', []),

        // Transition
        transition('* => void', animate('{{timings}}'),
            {
                params: {
                    timings: `${AnimationsCustomDurations.exiting} ${AnimationsCustomCurves.acceleration}`,
                },
            },
        ),
    ],
);

// -----------------------------------------------------------------------------------------------------
// @ Slide out right
// -----------------------------------------------------------------------------------------------------
const slideOutRight = trigger('slideOutRight',
    [
        state('*',
            style({
                transform: 'translate3d(0, 0, 0)',
            }),
        ),

        state('void',
            style({
                transform: 'translate3d(100%, 0, 0)',
            }),
        ),

        // Prevent the transition if the state is false
        transition('false => void', []),

        // Transition
        transition('* => void', animate('{{timings}}'),
            {
                params: {
                    timings: `${AnimationsCustomDurations.exiting} ${AnimationsCustomCurves.acceleration}`,
                },
            },
        ),
    ],
);

export { slideInTop, slideInBottom, slideInLeft, slideInRight, slideOutTop, slideOutBottom, slideOutLeft, slideOutRight };
