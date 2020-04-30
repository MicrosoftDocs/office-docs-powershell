---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/set-csusercallforwardingsettings
applicable: Skype for Business Server 2019
title: Set-CsUserCallForwardingSettings
schema: 2.0.0
manager: rogupta
author: hirenshah1
ms.author: hirshah
ms.reviewer:
---

# Set-CsUserCallForwardingSettings

## SYNOPSIS
This cmdlet modifies the specified user's call forwarding settings. This cmdlet returns the specified user's call forwarding settings as an object, and displays the same on the screen, in case of success. In case of failure, the appropriate error message is shown.

## SYNTAX

### DisableForwarding
```
Set-CsUserCallForwardingSettings [-DisableForwarding] [-SettingsActiveWorkHours] [-UnansweredToVoicemail]
 [-UnansweredToOther <String>] [-UnansweredWaitTime <Int32>] [-User] <String> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### EnableForwarding
```
Set-CsUserCallForwardingSettings -EnableForwarding <String> [-SettingsActiveWorkHours]
 [-DelegateRingWaitTime <Int32>] [-Delegates <System.Management.Automation.PSListModifier`1[System.String]>]
 [-User] <String> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### EnableSimulRing
```
Set-CsUserCallForwardingSettings -EnableSimulRing <String> [-SettingsActiveWorkHours] [-UnansweredToVoicemail]
 [-UnansweredToOther <String>] [-UnansweredWaitTime <Int32>] [-TeamDelegateRingWaitTime <Int32>]
 [-Delegates <System.Management.Automation.PSListModifier`1[System.String]>]
 [-Team <System.Management.Automation.PSListModifier`1[System.String]>] [-User] <String> [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The feature enables the use of SEFAUtil functionality in PowerShell. SEFAUtil (Secondary Extension Feature Activation) enables Skype server administrators and helpdesk agents to configure delegate-ringing, call-forwarding and Group Call Pickup settings on behalf of a Skype server user. This tool also allows administrators to query the call-routing settings that are published for a particular user.
The cmdlets introduced in this feature can only be run by members of the following groups for On-prem deployments, per the access level specified below:
•	CsAdministrator - Get and Set for all cmdlets
•	CsVoiceAdministrator - Get and Set for all cmdlets
•	CsServerAdministrator - Get and Set for all cmdlets
•	CsHelpDesk - Get for all cmdlets
Server auto-discovery needs to be enabled. There are no additional licensing requirements for use of the cmdlets.

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Server 2019CU1

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DelegateRingWaitTime
Specifies the time, in seconds, to wait before ringing delegates.
Acceptable inputs: 0, 5, 10


```yaml
Type: Int32
Parameter Sets: EnableForwarding
Aliases:
Applicable: Skype for Business Server 2019CU1

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Delegates
Specifies list of delegates that calls will be forwarded to. This parameter can only be used with EnableForwarding and EnableSimulRing parameters.

```yaml
Type: System.Management.Automation.PSListModifier`1[System.String]
Parameter Sets: EnableForwarding, EnableSimulRing
Aliases:
Applicable: Skype for Business Server 2019CU1

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableForwarding
This is a switch parameter that disables forwarding. Cannot be used with the EnableSimulRing and EnableForwarding parameters.

```yaml
Type: SwitchParameter
Parameter Sets: DisableForwarding
Aliases:
Applicable: Skype for Business Server 2019CU1

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableForwarding
Enables forwarding to the specified destination. Cannot be used with the EnableSimulRing and DisableForwarding parameters.

```yaml
Type: String
Parameter Sets: EnableForwarding
Aliases:
Applicable: Skype for Business Server 2019CU1

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableSimulRing
This is a switch parameter that enables forwarding to the specified destination. Cannot be used along with the DisableForwarding and EnableForwarding parameters.
oSimulRingDestination can be a phone number, delegates, or team call group.
	Acceptable input formats: "<phone number>", Team, Delegates


```yaml
Type: String
Parameter Sets: EnableSimulRing
Aliases:
Applicable: Skype for Business Server 2019CU1

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SettingsActiveWorkHours
Switch parameter that specifies that settings should apply during work hours defined in Outlook. When this is not specified, settings apply all the time by default.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Server 2019CU1

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Team
Specifies list of team members that calls will be forwarded to. The add and remove switches will add and remove specified users from the Team Members list. The replace parameter will set the list to the specified list, wiping out the previous list. Add and remove can be used together, but neither of them can be used along with replace.
o	Acceptable input formats for add/remove/replace list: The inputs can be a single user address (in one of the below formats), or a comma separated list of user addresses, in the 4 standard formats that Identity parameter accepts.


```yaml
Type: System.Management.Automation.PSListModifier`1[System.String]
Parameter Sets: EnableSimulRing
Aliases:
Applicable: Skype for Business Server 2019CU1

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamDelegateRingWaitTime
{{ Fill TeamDelegateRingWaitTime Description }}

```yaml
Type: Int32
Parameter Sets: EnableSimulRing
Aliases:
Applicable: Skype for Business Server 2019CU1

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnansweredToOther
{{ Fill UnansweredToOther Description }}

```yaml
Type: String
Parameter Sets: DisableForwarding, EnableSimulRing
Aliases:
Applicable: Skype for Business Server 2019CU1

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnansweredToVoicemail
{{ Fill UnansweredToVoicemail Description }}

```yaml
Type: SwitchParameter
Parameter Sets: DisableForwarding, EnableSimulRing
Aliases:
Applicable: Skype for Business Server 2019CU1

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnansweredWaitTime
{{ Fill UnansweredWaitTime Description }}

```yaml
Type: Int32
Parameter Sets: DisableForwarding, EnableSimulRing
Aliases:
Applicable: Skype for Business Server 2019CU1

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
{{ Fill User Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases: DisplayName, SipAddress, Identity
Applicable: Skype for Business Server 2019CU1

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
