---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/skype/new-csteamsemergencycallingpolicy
applicable: Microsoft Teams
title: New-CsTeamsEmergencyCallingPolicy
author: jenstrier
ms.author: jenstr
manager: roykuntz
ms.reviewer: chenc
schema: 2.0.0
---

# New-CsTeamsEmergencyCallingPolicy

## SYNOPSIS

## SYNTAX

```
New-CsTeamsEmergencyCallingPolicy [-Identity] <string> [-Description <string>] [-EnhancedEmergencyServiceDisclaimer <string>]
 [-ExternalLocationLookupMode <string>] [-NotificationDialOutNumber <string>] [-NotificationGroup <string>]
 [-NotificationMode <Object>] [-WhatIf] [-Confirm] [<CommonParameters>]
 ```

## DESCRIPTION
This cmdlet creates a new Teams Emergency Calling policy. Emergency calling policy is used for the life cycle of emergency calling experience for the security desk and Teams client location experience.

## EXAMPLES

### Example 1
```powershell
New-CsTeamsEmergencyCallingPolicy -Identity testECP -Description "Test ECP" -NotificationGroup "alert@contoso.com" -NotificationDialOutNumber "+14255551234" -NotificationMode NotificationOnly -ExternalLocationLookupMode Enabled
```

This example creates a Teams Emergency Calling policy that has an identity of testECP, where a notification group and number is being defined, the external location lookup mode is enabled and also the type of notification.

### Example 2
```powershell
PS C:>  New-CsTeamsEmergencyCallingPolicy -Identity "testECP2" -NotificationGroup "123@gh.com;567@test.com"
```

 This example creates a Teams Emergency Calling policy that has an identity of testECP2, with default settings except for the Notification Group. This parameter expects a single string with all users and groups separated with ";".

## PARAMETERS

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
Allows the tenant administrator to configure a text string, which is shown at the top of the Calls app. The user can acknowledge the string by selecting OK. The string will be shown on client restart.

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

### -ExternalLocationLookupMode
Enable ExternalLocationLookupMode. This mode allow users to set Emergency addresses for remote locations.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Accepted values: Disabled, Enabled

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotificationDialOutNumber
This parameter represents the PSTN number which can be dialed out if NotificationMode is set to either of the two Conference values.

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
NotificationGroup is a email list of users and groups to be notified of an emergency call. Individual users or groups are separated by ";", for instance "group1@contoso.com;group2@contoso.com". A maximum of 50 users can be notified.

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
The type of conference experience for security desk notification. Support for the ConferenceUnMuted mode is pending.

```yaml
Type: Microsoft.Rtc.Management.WritableConfig.Policy.Teams.NotificationMode
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

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[Get-CsTeamsEmergencyCallingPolicy](Get-CsTeamsEmergencyCallingPolicy.md)

[Grant-CsTeamsEmergencyCallingPolicy](Grant-CsTeamsEmergencyCallingPolicy.md)

[Remove-CsTeamsEmergencyCallingPolicy](Remove-CsTeamsEmergencyCallingPolicy.md)

[Set-CsTeamsEmergencyCallingPolicy](Set-CsTeamsEmergencyCallingPolicy.md)
