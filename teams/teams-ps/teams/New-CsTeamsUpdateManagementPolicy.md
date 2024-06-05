---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/new-csteamsupdatemanagementPolicy
applicable: Skype for Business Online
title: New-CsTeamsUpdateManagementPolicy
schema: 2.0.0
manager: gnamun
ms.author: vargasj
author: vargasj
ms.reviewer:
---

# New-CsTeamsUpdateManagementPolicy

## SYNOPSIS

This cmdlet can be used to create a new policity to manage the visibility of some Teams in-product messages. Executing the cmdlet will suppress the corresponding category of messages from appearing for the specified user group.

## SYNTAX

```
New-CsTeamsUpdateManagementPolicy [-WhatIf] [-Confirm] [[-Identity] <Object>] [-InMemory]
[-DisabledInProductMessages <Boolean>]
```

## EXAMPLES

### Example 1
Disable the in-product messages with the category "What’s New".

```
New-CsTeamsUpdateManagementPolicy -Identity "Campaign Policy" -DisabledInProductMessages @("91382d07-8b89-444c-bbcb-cfe43133af33")
```

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppress all non-fatal errors.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
A unique identifier.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
The InMemory parameter creates an object reference without actually committing the object as a permanent change.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisabledInProductMessages
List of IDs of the categories of the in-product messages that will be disabled. You can choose one of the categories from this table:

| ID | Campaign Category |
| -- | -- |
| 91382d07-8b89-444c-bbcb-cfe43133af33 | What’s New |
| edf2633e-9827-44de-b34c-8b8b9717e84c | Conferences |

```yaml
Type: List
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: @()
Accept pipeline input: False
Accept wildcard characters: False
```
