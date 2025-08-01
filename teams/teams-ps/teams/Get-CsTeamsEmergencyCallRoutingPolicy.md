---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsemergencycallroutingpolicy
applicable: Microsoft Teams
title: Get-CsTeamsEmergencyCallRoutingPolicy
author: serdarsoysal
ms.author: serdars
manager: roykuntz
ms.reviewer: chenc
schema: 2.0.0
---

# Get-CsTeamsEmergencyCallRoutingPolicy

## SYNOPSIS
This cmdlet returns one or more Emergency Call Routing policies.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsEmergencyCallRoutingPolicy [[-Identity] <string>] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsEmergencyCallRoutingPolicy [-Filter <string>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet returns one or more Emergency Call Routing policies. This policy is used for the life cycle of emergency call routing - emergency numbers and routing configuration.

## EXAMPLES

### Example 1
```powershell
Get-CsTeamsEmergencyCallRoutingPolicy
```

Retrieves all emergency call routing policies that are available in your scope.

### Example 2
```powershell
Get-CsTeamsEmergencyCallRoutingPolicy -Identity TestECRP
```

Retrieves one emergency call routing policy specifying the identity.

### Example 3
```powershell
Get-CsTeamsEmergencyCallRoutingPolicy -Filter 'Test*'
```

Retrieves all emergency call routing policies with identity starting with Test.

## PARAMETERS

### -Identity
Specify the policy that you would like to retrieve.

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

### -Filter
 Enables you to use wildcard characters when indicating the policy (or policies) to be returned.

```yaml
Type: String
Parameter Sets: Filter
Aliases:

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

## NOTES

## RELATED LINKS

[New-CsTeamsEmergencyCallRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsemergencycallroutingpolicy)

[Set-CsTeamsEmergencyCallRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsemergencycallroutingpolicy)

[Grant-CsTeamsEmergencyCallRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsemergencycallroutingpolicy)

[Remove-CsTeamsEmergencyCallRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsemergencycallroutingpolicy)
