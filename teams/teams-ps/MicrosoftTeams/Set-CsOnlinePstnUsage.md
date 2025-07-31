---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csonlinepstnusage
schema: 2.0.0
title: Set-CsOnlinePstnUsage
---

# Set-CsOnlinePstnUsage

## SYNOPSIS
Modifies a set of strings that identify the allowed online public switched telephone network (PSTN) usages. This cmdlet can be used to add usages to the list of online PSTN usages or remove usages from the list.

## SYNTAX

### Identity (Default)
```
Set-CsOnlinePstnUsage [[-Identity] <string>] [-Usage <Object>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Online PSTN usages are string values that are used for call authorization. An online PSTN usage links an online voice policy to a route. The `Set-CsOnlinePstnUsage` cmdlet is used to add or remove phone usages to or from the usage list. This list is global so it can be used by policies and routes throughout the tenant.

This cmdlet is used when configuring Microsoft Phone System Direct Routing.

## EXAMPLES

### Example 1
```
PS C:\> Set-CsOnlinePstnUsage -Identity global -Usage @{add="International"}
```

This command adds the string "International" to the current list of available PSTN usages.

### Example 2
```
PS C:\> Set-CsOnlinePstnUsage -Identity global -Usage @{remove="Local"}
```

This command removes the string "Local" from the list of available PSTN usages.

### Example 3
```
PS C:\> Set-CsOnlinePstnUsage -Usage @{remove="Local"}
```

The command in this example performs the exact same action as the command in Example 2: it removes the "Local" PSTN usage. This example shows the command without the Identity parameter specified. The only Identity available to the Set-CsOnlinePstnUsage cmdlet is the Global identity; omitting the Identity parameter defaults to Global.

### Example 4
```
PS C:\> Set-CsOnlinePstnUsage -Usage @{replace="International","Restricted"}
```

This command replaces everything in the usage list with the values International and Restricted. All previously existing usages are removed.

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

### -Identity
The scope at which these settings are applied. The Identity for this cmdlet is always Global.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Usage
Contains a list of allowable usage strings. These entries can be any string value.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[Get-CsOnlinePstnUsage](https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlinepstnusage)
