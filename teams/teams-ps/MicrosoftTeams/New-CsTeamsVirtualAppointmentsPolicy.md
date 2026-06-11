---
author: emmanuelrocha001
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
manager: sonaggarwal
Module Name: MicrosoftTeams
ms.author: erocha
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsvirtualappointmentspolicy
schema: 2.0.0
title: New-CsTeamsVirtualAppointmentsPolicy
---

# New-CsTeamsVirtualAppointmentsPolicy

## SYNOPSIS
This cmdlet is used to create a new instance of the TeamsVirtualAppointmentsPolicy.

## SYNTAX

```
New-CsTeamsVirtualAppointmentsPolicy [-EnableSmsNotifications <Boolean>] [-Identity] <String> [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Creates a new instance of the TeamsVirtualAppointmentsPolicy. This policy can be used to tailor the virtual appointment template meeting experience. The parameter `EnableSmsNotifications` allows you to specify whether your users can choose to send SMS text notifications to external guests in meetings that they schedule using the virtual appointment meeting template.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsVirtualAppointmentsPolicy -Identity sms-enabled
```
```output
Identity                 EnableSmsNotifications
--------                 ----------------------
Tag:sms-enabled                            True
```
Creates a new policy instance with the identity enable-sms. `EnableSmsNotifications` will default to true if it is not specified.

### Example 2
```powershell
PS C:\> New-CsTeamsVirtualAppointmentsPolicy -Identity disable-sms -EnableSmsNotifications $false
```
```output
Identity                 EnableSmsNotifications
--------                 ----------------------
Tag:sms-enabled                            False
```
Creates a new policy instance with the identity sms-disabled. `EnableSmsNotifications` is set to the value specified in the command.

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

### -EnableSmsNotifications

> Applicable: Microsoft Teams

This property specifies whether your users can choose to send SMS text notifications to external guests in meetings that they schedule using a virtual appointment template meeting.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

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
Name of the new policy instance to be created.

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

### System.String

## OUTPUTS

### TeamsVirtualAppointmentsPolicy.Cmdlets.TeamsVirtualAppointmentsPolicy

## NOTES

## RELATED LINKS
[Get-CsTeamsVirtualAppointmentsPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsvirtualappointmentspolicy)

[Remove-CsTeamsVirtualAppointmentsPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamsvirtualappointmentspolicy)

[Set-CsTeamsVirtualAppointmentsPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsvirtualappointmentspolicy)

[Grant-CsTeamsVirtualAppointmentsPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsvirtualappointmentspolicy)
