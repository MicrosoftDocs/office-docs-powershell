---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamsvirtualappointmentspolicy
title: Set-CsTeamsVirtualAppointmentsPolicy
schema: 2.0.0
author: emmanuelrocha001
ms.author: erocha
manager: sonaggarwal
---

# Set-CsTeamsVirtualAppointmentsPolicy

## SYNOPSIS
This cmdlet is used to update an instance of TeamsVirtualAppointmentsPolicy.

## SYNTAX

```
Set-CsTeamsVirtualAppointmentsPolicy [-EnableSmsNotifications <Boolean>] [-Identity] <String> [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Updates any of the properties of an existing instance of TeamsVirtualAppointmentsPolicy.

## EXAMPLES

### Example 1

```powershell
PS> Set-CsTeamsVirtualAppointmentsPolicy -Identity ExistingPolicyInstance -EnableSmsNotifications $false
```

Updates the `EnableSmsNotifications` field of a given policy.

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
This property specifies whether your users can choose to send SMS text notifications to external guests in meetings that they schedule using a virtual appointment template meeting.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
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

### System.Void

## NOTES

## RELATED LINKS
[Get-CsTeamsVirtualAppointmentsPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsvirtualappointmentspolicy)

[New-CsTeamsVirtualAppointmentsPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsvirtualappointmentspolicy)

[Remove-CsTeamsVirtualAppointmentsPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsvirtualappointmentspolicy)

[Grant-CsTeamsVirtualAppointmentsPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsvirtualappointmentspolicy)
