---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/remove-csteamsemergencycallroutingpolicy
applicable: Microsoft Teams
title: Remove-CsTeamsEmergencyCallRoutingPolicy
author: jenstrier
ms.author: jenstr
manager: roykuntz
ms.reviewer: chenc
schema: 2.0.0
---

# Remove-CsTeamsEmergencyCallRoutingPolicy

## SYNOPSIS
This cmdlet removes an existing Teams Emergency Call Routing policy.

## SYNTAX

```
Remove-CsTeamsEmergencyCallRoutingPolicy [-Identity] <string> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes an existing Teams Emergency Call Routing policy.

## EXAMPLES

### Example 1
```powershell
Remove-CsTeamsEmergencyCallRoutingPolicy -Identity TestECRP
```

This example removes Teams Emergency Call Routing policy with identity TestECRP.

### Example 1
```powershell
Remove-CsTeamsEmergencyCallRoutingPolicy -Identity Global
```

This example resets the Teams Emergency Call Routing policy Global instance to its default values.

## PARAMETERS

### -Identity
The Identity parameter is the unique identifier of the Teams Emergency Call Routing policy to remove.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
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

## OUTPUTS

## NOTES

## RELATED LINKS

[New-CsTeamsEmergencyCallRoutingPolicy](New-CsTeamsEmergencyCallRoutingPolicy.md)

[Grant-CsTeamsEmergencyCallRoutingPolicy](Grant-CsTeamsEmergencyCallRoutingPolicy.md)

[Set-CsTeamsEmergencyCallRoutingPolicy](Set-CsTeamsEmergencyCallRoutingPolicy.md)

[Get-CsTeamsEmergencyCallRoutingPolicy](Get-CsTeamsEmergencyCallRoutingPolicy.md)
