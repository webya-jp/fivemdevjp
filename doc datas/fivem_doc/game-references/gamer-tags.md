---
title: Gamer tags
weight: 760
---

![All flags enabled](/HeadDisplayExample2.png 'All flags enabled')

**Gamer tag** (also known as **head display**) - is an UI element above player character, which can display text and various icons. The control is carried out by enabling components. Usually used to display player's name.

For each component you can: show/hide, change opacity, change colour.

## Components list

| ID  | Name                   |
| --- | ---------------------- |
| 0   | GAMER_NAME             |
| 1   | CREW_TAG               |
| 2   | healthArmour           |
| 3   | BIG_TEXT               |
| 4   | AUDIO_ICON             |
| 5   | MP_USING_MENU          |
| 6   | MP_PASSIVE_MODE        |
| 7   | WANTED_STARS           |
| 8   | MP_DRIVER              |
| 9   | MP_CO_DRIVER           |
| 10  | MP_TAGGED              |
| 11  | GAMER_NAME_NEARBY      |
| 12  | ARROW                  |
| 13  | MP_PACKAGES            |
| 14  | INV_IF_PED_FOLLOWING   |
| 15  | RANK_TEXT              |
| 16  | MP_TYPING              |
| 17  | MP_BAG_LARGE           |
| 18  | MP_TAG_ARROW           |
| 19  | MP_GANG_CEO            |
| 20  | MP_GANG_BIKER          |
| 21  | BIKER_ARROW            |
| 22  | MC_ROLE_PRESIDENT      |
| 23  | MC_ROLE_VICE_PRESIDENT |
| 24  | MC_ROLE_ROAD_CAPTAIN   |
| 25  | MC_ROLE_SARGEANT       |
| 26  | MC_ROLE_ENFORCER       |
| 27  | MC_ROLE_PROSPECT       |
| 28  | MP_TRANSMITTER         |
| 29  | MP_BOMB                |

## Simple usage

### Lua

For a more complete example, see the stock `playernames` resource included in the server package, or the documentation for the resource.

```lua
local mpGamerTabs = {}

for i = 0, 255 do
  if NetworkIsPlayerActive(i) and i ~= PlayerId() then
    local ped = GetPlayerPed(i)

    -- change the ped, because changing player models may recreate the ped
    if not mpGamerTabs[i] or mpGamerTabs[i].ped ~= ped then
      local nameTag = ('%s [%d]'):format(GetPlayerName(i), GetPlayerServerId(i))

      if mpGamerTabs[i] then
        RemoveMpGamerTag(mpGamerTabs[i].tag)
      end

      mpGamerTabs[i] = {
        tag = CreateMpGamerTagWithCrewColor(i, nameTag, false, false, '', 0, 0, 0, 0),
        ped = ped
      }
    end

    SetMpGamerTagVisibility(mpGamerTabs[i].tag, 4, NetworkIsPlayerTalking(i))
  elseif mpGamerTabs[i] then
    RemoveMpGamerTag(mpGamerTabs[i].tag)

    mpGamerTabs[i] = nil
  end
end
```

## Example

### Lua

```lua
-- Create gamer info
local gamerTagId = CreateMpGamerTagWithCrewColor(
  ped, -- Ped to which gamer info will be assigned
  "User name", -- String to display for flag ""
  false, -- Is private crew
  false, -- Is R* crew
  "", -- Crew name
  0, -- Crew rank
  0, -- red
  0, -- green
  0 -- blue
)
```

### C\#

```csharp
// Create gamer info
// assuming using static CitizenFX.Core.API;
int gamerTagId = CreateMpGamerTagWithCrewColor(
  ped.Handle, // Ped to which gamer info will be assigned
  "User name", // String to display for flag ""
  false, // Is private crew
  false, // Is R* crew
  "", // Crew name
  0, // Crew rank
  0, // red
  0, // green
  0  // blue
);
```

## Toggling flags

### Lua

```lua
-- Toggle components
SetMpGamerTagVisibility(
  gamerTagId,
  component,
  bool -- Toggle
)
```

### C\#

```csharp
// Toggle flags
SetMpGamerTagVisibility(
  gamerTagId,
  component,
  toggle
);
```

## Changing flags colour

### Lua

```lua
-- Change component colour
SetMpGamerTagColour(
  gamerTagId,
  component,
  colour -- 0 - 255
)
```

### C\#

```csharp
// Change component colour
Function.Call(
  (Hash)0x613ED644950626AE,
  (int)gamerTagId,
  (int)component,
  (int)colour // 0 - 255
);
```

## Changing flags opacity

### Lua

```lua
-- Change component opacity
SetMpGamerTagAlpha(
  gamerTagId,
  component,
  opacity -- 0 - 255
)
```

### C\#

```csharp
// Changes flag opacity
Function.Call(
  (Hash)0xD48FE545CD46F857,
  (int)gamerTagId,
  (int)component,
  (int)opacity // 0 - 255
);
```

## Special flags controls

### Wanted level

For the **WantedStar** flag you can set number that will be shown inside of star icon:

### Lua

```lua
-- Set the number that will be set inside the wanted star icon
SetMpGamerTagWantedLevel(
  gamerTagId,
  wantedLevel -- 0 - 5
)
```

### C\#

```csharp
// Set the number that will be set inside the wanted star icon
Function.Call(
  Hash._SET_HEAD_DISPLAY_WANTED,
  (int)gamerTagId,
  (int)wantedLevel // 0 - 5
);
```

### Health bar colour

Health bar has 0 opacity by default. Colour of health bar changes using it's own native:

### Lua

```lua
-- Change health bar colour
SetMpGamerTagHealthBarColour(
  gamerTagId,
  colour -- 0 - 255
)
```

### C\#

```csharp
// Change health bar colour
Function.Call(
  (Hash)0x3158C77A7E888AB4,
  (int)gamerTagId,
  (int)colour // 0 - 255
);
```
