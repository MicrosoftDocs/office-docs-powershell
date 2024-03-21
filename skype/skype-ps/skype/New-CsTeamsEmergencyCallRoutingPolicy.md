---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/skype/new-csteamsemergencycallroutingpolicy
applicable: Microsoft Teams
title: New-CsTeamsEmergencyCallRoutingPolicy
author: jenstrier
ms.author: serdars
manger: roykuntz
ms.reviewer: chenc, vaddank
schema: 2.0.0
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

## PARAMETERS

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
One or more emergency number objects obtained from the [New-CsTeamsEmergencyNumber](new-csteamsemergencynumber.md) cmdlet.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[Set-CsTeamsEmergencyCallRoutingPolicy](Set-CsTeamsEmergencyCallRoutingPolicy.md)

[Grant-CsTeamsEmergencyCallRoutingPolicy](Grant-CsTeamsEmergencyCallRoutingPolicy.md)

[Remove-CsTeamsEmergencyCallRoutingPolicy](Remove-CsTeamsEmergencyCallRoutingPolicy.md)

[Get-CsTeamsEmergencyCallRoutingPolicy](Get-CsTeamsEmergencyCallRoutingPolicy.md)

[New-CsTeamsEmergencyNumber](New-CsTeamsEmergencyNumber.md)
