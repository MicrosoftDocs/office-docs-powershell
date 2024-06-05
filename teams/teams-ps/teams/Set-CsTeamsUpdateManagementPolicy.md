---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/set-csteamsupdatemanagementPolicy
applicable: Skype for Business Online
title: Set-CsTeamsUpdateManagementPolicy
schema: 2.0.0
manager: gnamun
ms.author: vargasj
author: vargasj
ms.reviewer:
---

# Set-CsTeamsUpdateManagementPolicy

## SYNOPSIS

Use this cmdlet to modify a Teams Update Management policy.

## SYNTAX

```
Set-CsTeamsUpdateManagementPolicy [-WhatIf] [-Confirm] [-Force] [[-Identity] <Object>]
 [-DisabledInProductMessages <Boolean>]
```

## DESCRIPTION
Modifies a Teams Update Management policy.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsUpdateManagementPolicy -Identity "Campaign Policy" -DisabledInProductMessages @("91382d07-8b89-444c-bbcb-cfe43133af33")
```

In this example, the policy "Campaign Policy" is modified, disabling the in-product messages with the category "What’s New".

## PARAMETERS

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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
Suppresses any confirmation prompts that would otherwise be displayed before making changes and suppresses the display of any non-fatal error message that might arise when running the command.

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
The unique identifier of the policy.

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
