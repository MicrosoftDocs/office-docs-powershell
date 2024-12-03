---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/set-teamsshiftspolicy
schema: 2.0.0
---

# Set-CsTeamsShiftsPolicy

## SYNOPSIS

This cmdlet allows you to set or update properties of a TeamsShiftPolicy instance, including Teams off shift warning message-specific settings.

## SYNTAX

```powershell
Set-CsTeamsShiftsPolicy [-ShiftNoticeFrequency <String>] [-ShiftNoticeMessageType <String>]
 [-ShiftNoticeMessageCustom <String>] [-AccessType <String>] [-AccessGracePeriodMinutes <Int64>]
 [-EnableScheduleOwnerPermissions <Boolean>] [-Identity] <String> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet allows you to set or update properties of a TeamsShiftPolicy instance. Use this to set the policy name and Teams off shift warning message-specific settings (ShiftNoticeMessageType, ShiftNoticeMessageCustom, ShiftNoticeFrequency, AccessGracePeriodMinutes).

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsShiftsPolicy -Identity OffShiftAccess_WarningMessage1_AlwaysShowMessage -ShiftNoticeMessageType Message1 -ShiftNoticeFrequency always -AccessGracePeriodMinutes 5
```
In this example, the policy instance is called "OffShiftAccess_WarningMessage1_AlwaysShowMessage", a warning message (Message 1) will always be displayed to the user on opening Teams during off shift hours.

## PARAMETERS

### -Identity
Policy instance name.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:
Applicable: Microsoft Teams
Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccessType
Indicates the Teams access type granted to the user. Today, only unrestricted access to Teams app is supported.
Use 'UnrestrictedAccess_TeamsApp' as the value for this setting, or is set by default.
For Teams Off Shift Access Control, the option to show the user a blocking dialog message is supported. Once the user accepts this message, it is audit logged and the user has usual access to Teams. Set other off shift warning message-specific settings to configure off shift access controls for the user.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: UnrestrictedAccess_TeamsApp
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShiftNoticeMessageType
The warning message is shown in the blocking dialog when a user access Teams off shift hours. Select one of 7 Microsoft provided messages, a default message or a custom message.
'Message1' - Your employer does not authorize or approve of the use of its network, applications, systems, or tools by non-exempt or hourly employees during their non-working hours. By accepting, you acknowledge that your use of Teams while off shift is not authorized and you will not be compensated.
'Message2' - Accessing this app outside working hours is voluntary. You won't be compensated for time spent on Teams. Refer to your employer's guidelines on using this app outside working hours. By accepting, you acknowledge that you understand the statement above.
'Message3' - You won't be compensated for time using Teams. By accepting, you acknowledge that you understand the statement above.
'Message4' - You're not authorized to use Teams while off shift. By accepting, you acknowledge your use of Teams is against your employer's policy.
'Message5' - Access to Teams is turned off during non-working hours. You will be able to access the app when your next shift starts.
'Message6' - Your employer does not authorize or approve of the use of its network, applications, systems, or tools by non-exempt or hourly employees during their non-working hours. Access to corporate resources are only allowed during approved working hours and should be recorded as hours worked in your employer's timekeeping system.
'Message7' - Your employer has turned off access to Teams during non-working hours. Refer to your employer's guidelines on using this app outside working hours.
'DefaultMessage' - You aren't authorized to use Microsoft Teams during non-working hours and will only be compensated for using it during approved working hours.
'CustomMessage'

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: DefaultMessage
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShiftNoticeMessageCustom
Provide a custom message. Must set ShiftNoticeMessageType to 'CustomMessage' to enforce this.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShiftNoticeFrequency
Frequency of warning dialog displayed when user opens Teams. Set one of Always, ShowOnceOnChange, Never.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: Always
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccessGracePeriodMinutes
Indicates the grace period time in minutes between when the first shift starts, or last shift ends and when access is blocked.

```yaml
Type: Int64
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableScheduleOwnerPermissions
Indicates whether a user can manage a Shifts schedule as a team member.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: False
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

[Get-CsTeamsShiftsPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftspolicy)

[New-CsTeamsShiftsPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsshiftspolicy)

[Remove-CsTeamsShiftsPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsshiftspolicy)

[Grant-CsTeamsShiftsPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsshiftspolicy)
