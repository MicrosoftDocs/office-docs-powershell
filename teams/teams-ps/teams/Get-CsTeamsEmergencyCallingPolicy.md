---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsemergencycallingpolicy
applicable: Microsoft Teams
title: Get-CsTeamsEmergencyCallingPolicy
author: jenstrier
ms.author: serdars
manager: roykuntz
ms.reviewer: chenc
schema: 2.0.0
---

# Get-CsTeamsEmergencyCallingPolicy

## SYNOPSIS

## SYNTAX

### Identity (Default)
```
Get-CsTeamsEmergencyCallingPolicy [[-Identity] <string>] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsEmergencyCallingPolicy [-Filter <string>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet returns one or more emergency calling policies. Emergency calling policy is used for the life cycle of emergency calling experience for the security desk and Teams client location experience.

## EXAMPLES

### Example 1
```powershell
Get-CsTeamsEmergencyCallingPolicy
```

Retrieves all emergency calling policies that are available in your scope.

### Example 2
```powershell
Get-CsTeamsEmergencyCallingPolicy -Identity TestECP
```

Retrieves an emergency calling policy with the identity TestECP

### Example 3
```powershell
Get-CsTeamsEmergencyCallingPolicy -Filter Test*
```

Retrieves all emergency calling policies with Identity starting with Test.

### Example 4
```powershell
(Get-CsTeamsEmergencyCallingPolicy -Identity TestECP).ExtendedNotifications
```
```output
EmergencyDialString       : 112
NotificationGroup         : alert2@contoso.com
NotificationDialOutNumber :
NotificationMode          : ConferenceUnMuted

EmergencyDialString       : 911
NotificationGroup         : alert3@contoso.com
NotificationDialOutNumber : +14255551234
NotificationMode          : NotificationOnly
```

This example displays extended notifications set on emergency calling policy with the identity TestECP.

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
The Filter parameter allows you to limit the number of results based on filters on Identity you specify.

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

### System.Object

## NOTES

## RELATED LINKS

[New-CsTeamsEmergencyCallingPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsemergencycallingpolicy)

[Grant-CsTeamsEmergencyCallingPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsemergencycallingpolicy)

[Remove-CsTeamsEmergencyCallingPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsemergencycallingpolicy)

[Set-CsTeamsEmergencyCallingPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsemergencycallingpolicy)
