---
applicable: Microsoft Teams
author: tonywoodruff
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: sandrao
Module Name: MicrosoftTeams
ms.author: anwoodru
ms.reviewer: kponnus
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsipphonepolicy
schema: 2.0.0
title: Set-CsTeamsIPPhonePolicy
---

# Set-CsTeamsIPPhonePolicy

## SYNOPSIS

Set-CsTeamsIPPhonePolicy enables you to modify the properties of an existing Teams phone policy settings.

## SYNTAX

```
Set-CsTeamsIPPhonePolicy [[-Identity] <XdsIdentity>]
 [-AllowBetterTogether <String>]
 [-AllowHomeScreen <String>]
 [-AllowHotDesking <Boolean>]
 [-Confirm]
 [-Description <String>]
 [-Force]
 [-HotDeskingIdleTimeoutInMinutes <Int>]
 [-Instance <Object>]
 [-SearchOnCommonAreaPhoneMode <String>]
 [-SignInMode <String>]
 [-Tenant <Guid>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION

Set-CsTeamsIPPhonePolicy enables you to modify the properties of an existing TeamsIPPhonePolicy.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsIPPhonePolicy -Identity CommonAreaPhone -SignInMode CommonAreaPhoneSignin
```
This example shows the SignInMode "CommonAreaPhoneSignIn" being set against the policy named "CommonAreaPhone".

## PARAMETERS

### -AllowBetterTogether
Determines whether Better Together mode is enabled, phones can lock and unlock in an integrated fashion when connected to their Windows PC running a 64-bit Teams desktop client.
Possible values this parameter can take:

- Enabled
- Disabled

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowHomeScreen
Determines whether the Home Screen feature of the Teams IP Phones is enabled.
Possible values this parameter can take:

- Enabled
- EnabledUserOverride
- Disabled

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: EnabledUserOverride
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowHotDesking
Determines if the hot desking feature is enabled or not. Set this to TRUE to enable. Set this to FALSE to disable hot desking mode.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

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

### -Description
Free form text that can be used by administrators as desired.

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

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes and suppresses the display of any non-fatal error message that might arise when running the command.
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

### -HotDeskingIdleTimeoutInMinutes
Determines the idle timeout value in minutes for the signed in user account. When the timeout is reached, the account is logged out.

```yaml
Type: Int
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The identity of the policy. To specify the global policy for the organization, use "global". To specify any other policy provide the name of that policy.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchOnCommonAreaPhoneMode
Determines whether a user can look up contacts from the tenant's global address book when the phone is signed into the Common Area Phone Mode. Set this to ENABLED to enable the feature. Set this to DISABLED to disable the feature.

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

### -SignInMode
Determines the sign in mode for the device when signing in to Teams.
Possible Values:
- 'UserSignIn: Enables the individual user's Teams experience on the phone'
- 'CommonAreaPhoneSignIn: Enables a Common Area Phone experience on the phone'
- 'MeetingSignIn: Enables the meeting/conference room experience on the phone'

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

### -Tenant
Internal Microsoft use only.

```yaml
Type: Guid
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
