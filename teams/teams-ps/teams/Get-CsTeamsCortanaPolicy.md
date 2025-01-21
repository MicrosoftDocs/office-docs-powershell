---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamscortanapolicy
applicable: Microsoft Teams
title: Get-CsTeamsCortanaPolicy
schema: 2.0.0
manager: amehta
author: akshbhat-msft
ms.author: serdars
ms.reviewer:
---

# Get-CsTeamsCortanaPolicy

## SYNOPSIS
The CsTeamsCortanaPolicy cmdlets enable administrators to control settings for Cortana voice assistant in Microsoft Teams.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsCortanaPolicy [-Tenant <System.Guid>] [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsCortanaPolicy [-Tenant <System.Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION

The CsTeamsCortanaPolicy cmdlets enable administrators to control settings for Cortana voice assistant in Microsoft Teams. Specifically, if a user can use Cortana voice assistant in Microsoft Teams and determines Cortana invocation behavior via CortanaVoiceInvocationMode parameter -

* Disabled - Cortana voice assistant is disabled
* PushToTalkUserOverride - Cortana voice assistant is enabled but without wake-word ("Hey Cortana") invocation
* WakeWordPushToTalkUserOverride - Cortana voice assistant is enabled with wake-word ("Hey Cortana") invocation on devices where wake-word is supported

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsCortanaPolicy
```
In the first example, the Get-CsTeamsCortanaPolicy cmdlet is called without specifying any additional parameters. This causes the Get-CsTeamsCortanaPolicy cmdlet to return a collection of all the Cortana voice assistant policies configured for use in your organization.

## PARAMETERS

### -Filter

Enables you to use wildcards when specifying the policy (or policies) to be retrieved. For example, this syntax returns all the policies that have been configured at the site scope: -Filter "site:". This syntax returns all the policies that have been configured at the per-user scope: -Filter "tag:".
You cannot use both the Filter and the Identity parameters in the same command.

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

Unique identifier for the policy to be returned. To return the global policy, use this syntax: -Identity global. To return a policy configured at the site scope, use syntax similar to this: -Identity "site:Redmond". To return a policy configured at the service scope, use syntax similar to this: -Identity "Registrar:atl-cs-001.litwareinc.com".

Policies can also be configured at the per-user scope. To return one of these policies, use syntax similar to this: -Identity "SalesDepartmentPolicy".
If this parameter is not included then all of Cortana voice assistant policies configured for use in your organization will be returned.

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

### -LocalStore

Retrieves the Cortana voice assistant policy data from the local replica of the Central Management store rather than from the Central Management store itself.

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

Globally unique identifier (GUID) of the Skype for Business Online tenant account whose Cortana voice assistant policies are being returned.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
