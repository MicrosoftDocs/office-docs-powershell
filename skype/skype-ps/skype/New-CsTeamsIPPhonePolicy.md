---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Module Name: Skype for Business Online
online version: https://docs.microsoft.com/powershell/module/skype/new-csteamsipphonepolicy
applicable: Skype for Business Online
title: New-CSTeamsIPPhonePolicy
author: tonywoodruff
ms.author: anwoodru
ms.reviewer: kponnus
manager: sandrao
schema: 2.0.0
---

# New-CsTeamsIPPhonePolicy

## SYNOPSIS

New-CSTeamsIPPhonePolicy allows you to create a policy to manage features related to Teams phone experiences. Teams phone policies determine the features that are available to users.

## SYNTAX

```
New-CsTeamsIPPhonePolicy [-Description <String>] [-HotDeskingIdleTimeoutInMinutes <Int>]

 [-AllowHotDesking <Boolean>] [[-Identity] <XdsIdentity>] [-Tenant <Guid>] [-InMemory] [-SignInMode <Object>]
 [-WhatIf] [-Confirm] [-Force] [-SearchOnCommonAreaPhoneMode <Object>] [-AsJob]
```

## DESCRIPTION

The New-CSTeamsIPPhonePolicy cmdlet allows you to create a policy to manage features related to Teams phone experiences assigned to a user account used to sign into a Teams phone. 

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsIPPhonePolicy -Identity CommonAreaPhone -SignInMode CommonAreaPhoneSignin
```
This example shows a new policy being created called "CommonAreaPhone" setting the SignInMode as "CommonAreaPhoneSignIn".

## PARAMETERS

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
Type: Object
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

### -AsJob
Indicates that this cmdlet runs as a background job.

When you specify the AsJob parameter, the command immediately returns an object that represents the background job. You can continue to work in the session while the job finishes. The job is created on the local computer and the results from the Skype for Business Online session are automatically returned to the local computer. To get the job results, use the Receive-Job cmdlet.

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

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
