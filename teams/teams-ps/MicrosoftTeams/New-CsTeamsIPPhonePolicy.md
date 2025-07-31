---
applicable: Microsoft Teams
author: tonywoodruff
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: sandrao
Module Name: MicrosoftTeams
ms.author: anwoodru
ms.reviewer: kponnus
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamsipphonepolicy
schema: 2.0.0
title: New-CsTeamsIPPhonePolicy
---

# New-CsTeamsIPPhonePolicy

## SYNOPSIS

New-CsTeamsIPPhonePolicy allows you to create a policy to manage features related to Teams phone experiences. Teams phone policies determine the features that are available to users.

## SYNTAX

```
New-CsTeamsIPPhonePolicy [[-Identity] <XdsIdentity>]
 [-AllowBetterTogether <String>]
 [-AllowHomeScreen <String>]
 [-AllowHotDesking <Boolean>]
 [-Confirm]
 [-Description <String>]
 [-Force]
 [-HotDeskingIdleTimeoutInMinutes <Int>]
 [-InMemory]
 [-SearchOnCommonAreaPhoneMode <Object>]
 [-SignInMode <String>]
 [-Tenant <Guid>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION

The New-CsTeamsIPPhonePolicy cmdlet allows you to create a policy to manage features related to Teams phone experiences assigned to a user account used to sign into a Teams phone.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsIPPhonePolicy -Identity CommonAreaPhone -SignInMode CommonAreaPhoneSignin
```
This example shows a new policy being created called "CommonAreaPhone" setting the SignInMode as "CommonAreaPhoneSignIn".

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
Determines whether hot desking mode is enabled. Set this to TRUE to enable. Set this to FALSE to disable hot desking mode.

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
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The identity of the policy that you want to create.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchOnCommonAreaPhoneMode
Determines whether a user can search the Global Address List in Common Area Phone Mode. Set this to ENABLED to enable the feature. Set this to DISABLED to disable the feature.

```yaml
Type: Object
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

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
