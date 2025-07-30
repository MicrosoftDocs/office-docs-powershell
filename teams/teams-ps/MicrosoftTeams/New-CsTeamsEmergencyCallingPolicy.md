---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: serdars
ms.reviewer: chenc
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamsemergencycallingpolicy
schema: 2.0.0
title: New-CsTeamsEmergencyCallingPolicy
---

# New-CsTeamsEmergencyCallingPolicy

## SYNOPSIS

## SYNTAX

```
New-CsTeamsEmergencyCallingPolicy [-Identity] <string> [-ExtendedNotifications <PSListModifier[TeamsEmergencyCallingExtendedNotification]>]
 [-NotificationGroup <string>] [-NotificationDialOutNumber <string>] [-ExternalLocationLookupMode <ExternalLocationLookupMode>]
 [-NotificationMode <NotificationMode>] [-EnhancedEmergencyServiceDisclaimer <string>] [-Description <string>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
 ```

## DESCRIPTION
This cmdlet creates a new Teams Emergency Calling policy. Emergency calling policy is used for the life cycle of emergency calling experience for the security desk and Teams client location experience.

## EXAMPLES

### Emergency calling policy Example 1
In the following example, ECP1, an emergency calling policy with identify ECP1 is configured with full security desk configuration. Extended notifications for the test emergency number, 933, are set to null.
**ECP1**
<ul>
    <li>Notification group: alert@contoso.com</li>
    <li>Notification Dial Out Number - 14255551234</li>
    <li>Notification Mode - Conferenced in and are unmuted</li>
    <li>External Lookup Mode - On</li>
</ul>

```powershell
$en1 = New-CsTeamsEmergencyCallingExtendedNotification -EmergencyDialString "933"
New-CsTeamsEmergencyCallingPolicy -Identity ECP1 -Description "Test ECP1" -NotificationGroup "alert@contoso.com" -NotificationDialOutNumber "+14255551234" -NotificationMode ConferenceUnMuted -ExternalLocationLookupMode Enabled -ExtendedNotifications @{add=$en1}
```

### Emergency calling policy Example 2
In the following example, ECP2, an emergency calling policy with identify ECP2 is configured with both 911 and 933 in the extended notification settings. Extended notifications for the test emergency number 911 are set to notify two groups separated by ";" and for 933 are set to null.
**ECP2**
<ul>
    <li>Notification group: null</li>
    <li>Notification Dial Out Number - null</li>
    <li>Notification Mode - null</li>
    <li>External Lookup Mode - On</li>
</ul>

```powershell
$en1 = New-CsTeamsEmergencyCallingExtendedNotification -EmergencyDialString "911" -NotificationGroup "alert@contoso.com;567@contoso.com" -NotificationDialOutNumber "+14255551234" -NotificationMode ConferenceUnMuted
$en2 = New-CsTeamsEmergencyCallingExtendedNotification -EmergencyDialString "933"
New-CsTeamsEmergencyCallingPolicy -Identity ECP2 -Description "Test ECP2" -ExternalLocationLookupMode Enabled -ExtendedNotifications @{add=$en1,$en2}
```

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

### -Description
The Description parameter describes the Teams Emergency Calling policy - what it is for, what type of user it applies to and any other information that helps to identify the purpose of this policy. Maximum characters: 512.

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

### -EnhancedEmergencyServiceDisclaimer
Allows the tenant administrator to configure a text string, which is shown at the top of the Calls app. The user can acknowledge the string by selecting OK. The string will be shown on client restart. The disclaimer can be up to 350 characters.

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

### -ExtendedNotifications

A list of one or more instances of TeamsEmergencyCallingExtendedNotification. Each TeamsEmergencyCallingExtendedNotification should use a unique EmergencyDialString.

If an extended notification is found for an emergency phone number based on the EmergencyDialString parameter the extended notification will be controlling the notification. If no extended notification is found the notification settings on the policy instance itself will be used.

```yaml
Type: System.Management.Automation.PSListModifier[Microsoft.Teams.Policy.Administration.Cmdlets.Core.TeamsEmergencyCallingExtendedNotification]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalLocationLookupMode
Enable ExternalLocationLookupMode. This mode allow users to set Emergency addresses for remote locations.

```yaml
Type: Microsoft.Teams.Policy.Administration.Cmdlets.Core.ExternalLocationLookupMode
Parameter Sets: (All)
Aliases:
Accepted values: Disabled, Enabled

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
 The Identity parameter is a unique identifier that designates the name of the policy

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

### -NotificationDialOutNumber
This parameter represents the PSTN number which can be dialed out if NotificationMode is set to either of the two Conference values. The PSTN phone cannot be unmuted even when the NotificationMode is set to ConferenceUnMuted.

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

### -NotificationGroup
NotificationGroup is an email list of users and groups to be notified of an emergency call via Teams chat. Individual users or groups are separated by ";", for instance, "group1@contoso.com;group2@contoso.com". A maximum of 10 e-mail addresses can be specified and a maximum of 50 users in total can be notified. Both UPN and SMTP address are accepted when adding users directly.

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

### -NotificationMode
The type of conference experience for security desk notification.
Possible values are NotificationOnly, ConferenceMuted, and ConferenceUnMuted.

```yaml
Type: Microsoft.Teams.Policy.Administration.Cmdlets.Core.NotificationMode
Parameter Sets: (All)
Aliases:
Accepted values: NotificationOnly, ConferenceMuted, ConferenceUnMuted

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

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-CsTeamsEmergencyCallingPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsemergencycallingpolicy)

[Grant-CsTeamsEmergencyCallingPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsemergencycallingpolicy)

[Remove-CsTeamsEmergencyCallingPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsemergencycallingpolicy)

[Set-CsTeamsEmergencyCallingPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsemergencycallingpolicy)

[New-CsTeamsEmergencyCallingExtendedNotification](https://learn.microsoft.com/powershell/module/teams/new-csteamsemergencycallingextendednotification)
