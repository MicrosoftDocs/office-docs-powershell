---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamscortanapolicy
applicable: Microsoft Teams
title: Set-CsTeamsCortanaPolicy
schema: 2.0.0
manager: amehta
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Set-CsTeamsCortanaPolicy

## SYNOPSIS
The CsTeamsCortanaPolicy cmdlets enable administrators to control settings for Cortana voice assistant in Microsoft Teams.

## SYNTAX

### Identity (Default)
```
Set-CsTeamsCortanaPolicy [-Tenant <System.Guid>] [-Description <String>] [-CortanaVoiceInvocationMode <String>]
 [-AllowCortanaVoiceInvocation <Boolean>] [-AllowCortanaAmbientListening <Boolean>]
 [-AllowCortanaInContextSuggestions <Boolean>] [[-Identity] <XdsIdentity>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### Instance
```
Set-CsTeamsCortanaPolicy [-Tenant <System.Guid>] [-Description <String>] [-CortanaVoiceInvocationMode <String>]
 [-AllowCortanaVoiceInvocation <Boolean>] [-AllowCortanaAmbientListening <Boolean>]
 [-AllowCortanaInContextSuggestions <Boolean>] [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
The CsTeamsCortanaPolicy cmdlets enable administrators to control settings for Cortana voice assistant in Microsoft Teams. Specifically, these specify if a user can use Cortana voice assistant in Microsoft Teams and Cortana invocation behavior via CortanaVoiceInvocationMode parameter -
* Disabled - Cortana voice assistant is disabled
* PushToTalkUserOverride - Cortana voice assistant is enabled but without wake-word ("Hey Cortana") invocation
* WakeWordPushToTalkUserOverride - Cortana voice assistant is enabled with wake-word ("Hey Cortana") invocation on devices where wake-word is supported

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsCortanaPolicy -Identity MyCortanaPolicy -CortanaVoiceInvocationMode Disabled
```
In this example, Cortana voice assistant is set to disabled.

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
Identity for the policy you're modifying. To modify the global policy, use this syntax: -Identity global. To modify a per-user policy, use syntax similar to this: -Identity MyCortanaPolicy.
If you do not specify an Identity the Set-CsTeamsCortanaPolicy cmdlet will automatically modify the global policy.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
