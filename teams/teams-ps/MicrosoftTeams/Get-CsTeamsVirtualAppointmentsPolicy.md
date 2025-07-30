---
author: emmanuelrocha001
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
manager: sonaggarwal
Module Name: MicrosoftTeams
ms.author: erocha
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsvirtualappointmentspolicy
schema: 2.0.0
title: Get-CsTeamsVirtualAppointmentsPolicy
---

# Get-CsTeamsVirtualAppointmentsPolicy

## SYNOPSIS
This cmdlet is used to fetch policy instances of TeamsVirtualAppointmentsPolicy.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsVirtualAppointmentsPolicy [[-Identity] <String>] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsVirtualAppointmentsPolicy [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION
Fetches instances of TeamsVirtualAppointmentsPolicy. Each policy object contains a property called `EnableSmsNotifications`. This property specifies whether your users can choose to send SMS text notifications to external guests in meetings that they schedule using a virtual appointment meeting template.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsVirtualAppointmentsPolicy
```
```output
Identity                 EnableSmsNotifications
--------                 ----------------------
Global                                     True
Tag:sms-enabled                            True
Tag:sms-disabled                          False
```
Fetches all the policy instances currently available.

### Example 2
```powershell
PS C:\> Get-CsTeamsVirtualAppointmentsPolicy -Identity sms-enabled
```
```output
Identity                 EnableSmsNotifications
--------                 ----------------------
Tag:sms-enabled                            True
```
Fetches an instance of a policy with a known identity.

### Example 3
```powershell
PS C:\> Get-CsTeamsVirtualAppointmentsPolicy -Filter *sms*
```
```output
Identity                 EnableSmsNotifications
--------                 ----------------------
Tag:sms-enabled                            True
Tag:sms-disabled                          False
```
The `Filter` parameter can be used to fetch policy instances based on partial matches on Identity.

Note: _The "Tag:" prefix can be ignored when specifying the identity._

## PARAMETERS

### -Filter
This parameter can be used to fetch policy instances based on partial matches on the Identity field.

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

### -Identity
This parameter can be used to fetch a specific instance of the policy.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

## OUTPUTS

### TeamsVirtualAppointmentsPolicy.Cmdlets.TeamsVirtualAppointmentsPolicy

## NOTES

## RELATED LINKS
[New-CsTeamsVirtualAppointmentsPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsvirtualappointmentspolicy)

[Remove-CsTeamsVirtualAppointmentsPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsvirtualappointmentspolicy)

[Set-CsTeamsVirtualAppointmentsPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsvirtualappointmentspolicy)

[Grant-CsTeamsVirtualAppointmentsPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsvirtualappointmentspolicy)
