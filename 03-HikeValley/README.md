## Problem Statement

During the last hike of an avid hiker, he took exactly **steps**. Hikes always start and end at sea level, where each step up or down represents a 1-unit change in altitude.

- The initial sea level is 0.
- A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
- A valley is a sequence of consecutive steps below sea level, ending with a step up to sea level.

We need to determine the number of valleys and mountains the hiker traversed.

## Input for the `trackHikerPath` Function

- **Steps:** The number of steps in the hike
- **Path:** A string that describes the path (U: uphill, D: downhill)

## Input Example

- **Steps:** 8
- **Path:** "UDDDUUUUDD"

## Expected Output

**Count of Valleys:** 1
**Count of Mountains:** 1
