---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/new-teamsshiftspolicy
schema: 2.0.0
---

# New-CsTeamsShiftsPolicy

## SYNOPSIS

This cmdlet allows you to create a new TeamsShiftPolicy instance and set it's properties.

## SYNTAX

```
New-CsTeamsShiftsPolicy [-Identity] <XdsIdentity> [-EnableShiftPresence <Boolean>]
 [-ShiftNoticeFrequency <String>] [-ShiftNoticeMessageType <String>] [-ShiftNoticeMessageCustom <String>]
 [-AccessType <String>] [-AccessGracePeriodMinutes <Int64>] [-EnableScheduleOwnerPermissions <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet allows you to create a TeamsShiftPolicy instance. Use this to also set the policy name, schedule owner permissions, user's shift based presence (EnableShiftPresence) and Teams off shift warning message-specific settings (ShiftNoticeMessageType, ShiftNoticeMessageCustom, ShiftNoticeFrequency, AccessGracePeriodMinutes).


## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsShiftsPolicy -Identity OffShiftAccessMessage1Always
```

Creates a new instance of TeamsShiftsPolicy called OffShiftAccessMessage1Always and applies the default values to its settings.

### Example 2
```powershell
PS C:\> New-CsTeamsShiftsPolicy -Identity OffShiftAccessMessage1Always -EnableShiftPresence $true -ShiftNoticeFrequency always -ShiftNoticeMessageType Message1 -AccessType UnrestrictedAccess_TeamsApp -AccessGracePeriodMinutes 5 -EnableScheduleOwnerPermissions $false
```

Creates a new instance of TeamsShiftsPolicy called OffShiftAccessMessage1Always and applies the provided values to its settings.

## PARAMETERS

### -Identity
Policy instance name.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
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

### -EnableShiftPresence
Indicates whether a user is given shift-based presence (On shift, Off shift, or Busy). This must be set in order to have any off shift warning message-specific settings.

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

### -ShiftNoticeFrequency
Frequency of warning dialog displayed when user opens Teams. Select one of Always, ShowOnceOnChange, Never.

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

### -ShiftNoticeMessageType
The warning message is shown in the blocking dialog when a user access Teams off shift hours. Select one of 7 Microsoft provided messages, a default message or a custom message. 
'Message1' - Your employer does not authorize or approve of the use of its network, applications, systems, or tools by non-exempt or hourly employees during their non-working hours. By accepting, you acknowledge that your use of Teams while off shift is not authorized and you will not be compensated.
'Message2' - Accessing this app outside working hours is voluntary. You won't be compensated for time spent on Teams. Refer to your employer's guidelines on using this app outside working hours. By accepting, you acknowledge that you understand the statement above.
'Message3' - You won't be compensated for time using Teams. By accepting, you acknowledge that you understand the statement above.
'Message4' - You're not authorized to use Teams while off shift. By accepting, you acknowledge your use of Teams is against your employer's policy.
'Message5' - Access to Teams is turned off during non-working hours. You will be able to access the app when your next shift starts.
'Message6' - Your employer does not authorize or approve of the use of its network, applications, systems, or tools by non-exempt or hourly employees during their non-working hours. Access to corporate resources are only allowed during approved working hours and should be recorded as hours worked in your employer’s timekeeping system.
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

### -AccessGracePeriodMinutes
Indicates the grace period time in minutes between when the first shift starts or last shift ends and when access is blocked.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[Get-CsTeamsShiftsPolicy](Get-CsTeamsShiftsPolicy.md)

[Set-CsTeamsShiftsPolicy](New-CsTeamsShiftsPolicy.md)

[Remove-CsTeamsShiftsPolicy](Remove-CsTeamsShiftsPolicy.md)

[Grant-CsTeamsShiftsPolicy](Grant-CsTeamsShiftsPolicy.md)
