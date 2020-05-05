---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Module Name: Skype for Business Online
online version: https://docs.microsoft.com/powershell/module/skype/set-csteamsipphonepolicy
applicable: Skype for Business Online
title: Set-CSTeamsIPPhonePolicy
author: tonywoodruff
ms.author: anwoodru
ms.reviewer: kponnus
manager: sandrao
schema: 2.0.0
---

# Set-CsTeamsIPPhonePolicy

## SYNOPSIS

Set-CSTeamsIPPhonePolicy enables you to modify the properties of an existing Teams phone policy settings.

## SYNTAX

```
Set-CsTeamsIPPhonePolicy [-Description <Object>] [-HotDeskingIdleTimeoutInMinutes <Object>]
 [-SearchOnCommonAreaPhoneMode <Object>] [-AllowHotDesking <Object>] [[-Identity] <Object>] [-Tenant <Object>]
 [-SignInMode <Object>] [-WhatIf] [-Confirm] [-Force] [-Instance <Object>] [-AsJob]
```

## DESCRIPTION

Set-CSTeamsIPPhonePolicy enables you to modify the properties of an existing TeamsIPPhonePolicy.

## EXAMPLES

### Example 1
```powershell
PS C:\>  Set-CsTeamsIPPhonePolicy -Identity CommonAreaPhone -SignInMode CommonAreaPhoneSignin
```

{{ Add example description here }}

## PARAMETERS

### -AllowHotDesking
Determines if the hot desking feature is enabled or not. Set this to TRUE to enable. Set this to FALSE to disable hot desking mode. 

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
Type: Object
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
Type: Object
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
Type: Object
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
Type: Object
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

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
