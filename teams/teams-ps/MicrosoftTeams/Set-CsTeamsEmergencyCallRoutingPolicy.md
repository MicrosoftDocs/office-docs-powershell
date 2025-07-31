---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: serdars
ms.reviewer: chenc
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamsemergencycallroutingpolicy
schema: 2.0.0
title: Set-CsTeamsEmergencyCallRoutingPolicy
---

# Set-CsTeamsEmergencyCallRoutingPolicy

## SYNOPSIS
This cmdlet modifies an existing Teams Emergency Call Routing Policy.

## SYNTAX

### Identity (Default)
```
Set-CsTeamsEmergencyCallRoutingPolicy [[-Identity] <string>] [-AllowEnhancedEmergencyServices <bool>]
 [-Description <string>] [-EmergencyNumbers <Object>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet modifies an existing Teams Emergency Call Routing Policy. Teams Emergency Call Routing policy is used for the life cycle of emergency call routing - emergency numbers and routing configuration

## EXAMPLES

### Example 1
```powershell
Set-CsTeamsEmergencyCallRoutingPolicy -Identity "Test" -AllowEnhancedEmergencyServices:$false -Description "test"
```

This example modifies an existing Teams Emergency Call Routing Policy.

### Example 2
```powershell
$en1 =  New-CsTeamsEmergencyNumber -EmergencyDialString "911" -EmergencyDialMask "933" -OnlinePSTNUsage "USE911"
$en2 =  New-CsTeamsEmergencyNumber -EmergencyDialString "112" -EmergencyDialMask "9112" -OnlinePSTNUsage "DKE911"
Set-CsTeamsEmergencyCallRoutingPolicy -Identity "Test" -EmergencyNumbers @{add=$en1,$en2}
```

This example first creates new Teams emergency number objects and then adds these Teams emergency numbers to an existing Teams Emergency Call Routing policy.

### Example 3
```powershell
$en1 =  New-CsTeamsEmergencyNumber -EmergencyDialString "112" -EmergencyDialMask "9112" -OnlinePSTNUsage "DKE911"
Set-CsTeamsEmergencyCallRoutingPolicy -Identity "Test" -EmergencyNumbers @{remove=$en1}
```

This example first creates a new Teams emergency number object and then removes that Teams emergency number from an existing Teams Emergency Call Routing policy.

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
Provides a description of the Teams Emergency Call Routing policy to identify the purpose of setting it.

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
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs. The cmdlet is not run.

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

## OUTPUTS

## NOTES

## RELATED LINKS

[New-CsTeamsEmergencyCallRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsemergencycallroutingpolicy)

[Grant-CsTeamsEmergencyCallRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsemergencycallroutingpolicy)

[Remove-CsTeamsEmergencyCallRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsemergencycallroutingpolicy)

[Get-CsTeamsEmergencyCallRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsemergencycallroutingpolicy)

[New-CsTeamsEmergencyNumber](https://learn.microsoft.com/powershell/module/teams/new-csteamsemergencynumber)
