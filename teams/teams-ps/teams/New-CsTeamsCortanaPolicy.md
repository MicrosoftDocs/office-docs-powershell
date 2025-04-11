---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamscortanapolicy
applicable: Microsoft Teams
title: New-CsTeamsCortanaPolicy
schema: 2.0.0
manager: amehta
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# New-CsTeamsCortanaPolicy

## SYNOPSIS
The CsTeamsCortanaPolicy cmdlets enable administrators to control settings for Cortana voice assistant in Microsoft Teams.

## SYNTAX

```
New-CsTeamsCortanaPolicy [-Tenant <System.Guid>] [-Description <String>] [-CortanaVoiceInvocationMode <String>]
 [-AllowCortanaVoiceInvocation <Boolean>] [-AllowCortanaAmbientListening <Boolean>]
 [-AllowCortanaInContextSuggestions <Boolean>] [-Identity] <XdsIdentity> [-InMemory] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The CsTeamsCortanaPolicy cmdlets enable administrators to control settings for Cortana voice assistant in Microsoft Teams. Specifically, these specify if a user can use Cortana voice assistant in Microsoft Teams and Cortana invocation behavior via CortanaVoiceInvocationMode parameter -
* Disabled - Cortana voice assistant is disabled
* PushToTalkUserOverride - Cortana voice assistant is enabled but without wake-word ("Hey Cortana") invocation
* WakeWordPushToTalkUserOverride - Cortana voice assistant is enabled with wake-word ("Hey Cortana") invocation on devices where wake-word is supported

This cmdlet creates a new Teams Cortana policy.  Custom policies can then be assigned to users using the Grant-CsTeamsCortanaPolicy cmdlet.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsCortanaPolicy -Identity MyCortanaPolicy -CortanaVoiceInvocationMode PushToTalkUserOverride
```

In this example, a new Teams Cortana Policy is created. Cortana voice invocation mode is set to 'push to talk' i.e. Cortana in Teams can be invoked by tapping on the Cortana mic button only. Wake word ("Hey Cortana") invocation is not allowed.

## PARAMETERS

### -AllowCortanaAmbientListening
This parameter is reserved for internal Microsoft use.

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

### -AllowCortanaInContextSuggestions
This parameter is reserved for internal Microsoft use.

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

### -AllowCortanaVoiceInvocation
This parameter is reserved for internal Microsoft use.

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

### -CortanaVoiceInvocationMode
The value of this field indicates if Cortana is enabled and mode of invocation.
* Disabled - Cortana voice assistant is turned off and cannot be used.
* PushToTalkUserOverride - Cortana voice assistant is enabled but without wake-word ("Hey Cortana") invocation
* WakeWordPushToTalkUserOverride - Cortana voice assistant is enabled with wake-word ("Hey Cortana") invocation on devices where wake-word is supported

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

### -Description
Provide a description of your policy to identify purpose of creating it.

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
The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

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
Unique identifier for Teams cortana policy you're creating.

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

### -InMemory
Creates an object reference without actually committing the object as a permanent change. If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-.

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

### -Tenant
Globally unique identifier (GUID) of the tenant account whose external user communication policy are being created. For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

```yaml
Type: System.Guid
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
