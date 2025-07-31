---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manger: roykuntz
Module Name: MicrosoftTeams
ms.author: serdars
ms.reviewer: chenc, vaddank
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamsemergencycallroutingpolicy
schema: 2.0.0
title: New-CsTeamsEmergencyCallRoutingPolicy
---

# New-CsTeamsEmergencyCallRoutingPolicy

## SYNOPSIS
This cmdlet creates a new Teams Emergency Call Routing policy with one or more emergency number.

## SYNTAX

```
New-CsTeamsEmergencyCallRoutingPolicy [-Identity] <string> [-AllowEnhancedEmergencyServices <bool>]
 [-Description <string>] [-EmergencyNumbers <Object>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a new Teams Emergency Call Routing policy with one or more emergency numbers. Teams Emergency Call Routing policy is used for the life cycle of emergency call routing - emergency numbers and routing configuration.

## EXAMPLES

### Example 1
```powershell
$en1 =  New-CsTeamsEmergencyNumber -EmergencyDialString "911" -EmergencyDialMask "933" -OnlinePSTNUsage "USE911"
New-CsTeamsEmergencyCallRoutingPolicy -Identity "Test" -EmergencyNumbers @{add=$en1} -AllowEnhancedEmergencyServices:$true -Description "test"
```

This example first creates a new Teams emergency number object and then creates a Teams Emergency Call Routing policy with this emergency number object.
Note that the OnlinePSTNUsage specified in the first command must previously exist. Note that the resulting object from the New-CsTeamsEmergencyNumber only exists in memory, so you must apply it to a policy to be used.
Note that {@add=....} will try to append a new emergency number to the values taken from the global instance.

### Example 2
```powershell
$en1 =  New-CsTeamsEmergencyNumber -EmergencyDialString "911" -EmergencyDialMask "933" -OnlinePSTNUsage "USE911"
New-CsTeamsEmergencyCallRoutingPolicy -Identity "testecrp" -EmergencyNumbers $en1 -AllowEnhancedEmergencyServices:$true -Description "test"
```
This example overrides the global emergency numbers from the global instance.

## PARAMETERS

### -AllowEnhancedEmergencyServices
Flag to enable Enhanced Emergency Services.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

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

### -Description
The Description parameter describes the Teams Emergency Call Routing policy - what it's for, what type of user it applies to and any other information that helps to identify the purpose of this policy. Maximum characters: 512.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmergencyNumbers
One or more emergency number objects obtained from the [New-CsTeamsEmergencyNumber](https://learn.microsoft.com/powershell/module/teams/new-csteamsemergencynumber) cmdlet.

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

### -Identity
The Identity parameter is a unique identifier that designates the name of the policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
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

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Set-CsTeamsEmergencyCallRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsemergencycallroutingpolicy)

[Grant-CsTeamsEmergencyCallRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsemergencycallroutingpolicy)

[Remove-CsTeamsEmergencyCallRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsemergencycallroutingpolicy)

[Get-CsTeamsEmergencyCallRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsemergencycallroutingpolicy)

[New-CsTeamsEmergencyNumber](https://learn.microsoft.com/powershell/module/teams/new-csteamsemergencynumber)
