---
external help file: MicrosoftTeams-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsvoiceapplicationspolicy
schema: 2.0.0
title: Get-CsTeamsVoiceApplicationsPolicy
---

# Get-CsTeamsVoiceApplicationsPolicy

## SYNOPSIS
Use the Get-CsTeamsVoiceApplicationsPolicy cmdlet to get Teams voice applications policy information. TeamsVoiceApplications policy governs what permissions the supervisors/users have over auto attendants and call queues.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsVoiceApplicationsPolicy [[-Identity] <String>]
 [<CommonParameters>]
```

### Filter
```
Get-CsTeamsVoiceApplicationsPolicy [-Filter <String>]
 [<CommonParameters>]
```

## DESCRIPTION

TeamsVoiceApplicationsPolicy is used for Supervisor Delegated Administration which allows tenant admins to permit certain users to make changes to auto attendant and call queue configurations.

## EXAMPLES

### EXAMPLE 1
```
Get-CsTeamsVoiceApplicationsPolicy
```
The command shown in Example 1 returns information for all the Teams voice applications policies configured for use in the tenant.

### EXAMPLE 2
```
Get-CsTeamsVoiceApplicationsPolicy -Identity "SDA-Allow-All"
```
In Example 2, information is returned for a single Teams voice applications policy; the policy with the Identity SDA-Allow-All.

### EXAMPLE 3
```
Get-CsTeamsVoiceApplicationsPolicy -Filter "tag:*"
```
The command shown in Example 3 returns information about all the Teams voice applications policies configured at the per-user scope. To do this, the command uses the Filter parameter and the filter value "tag:*"; that filter value limits the returned data to policies that have an Identity that begins with the string value "tag:".

## PARAMETERS

### -Filter
Enables you to use wildcards when retrieving one or more Teams voice applications policies. For example, to return all the policies configured at the per-user scope, use this syntax:

-Filter "tag:*"

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
Unique identifier of the Teams voice applications policy to be retrieved. To return the global policy, use this syntax:

-Identity global

To return a policy configured at the per-user scope, use syntax like this:

-Identity "SDA-Allow-All"

You cannot use wildcard characters when specifying the Identity.

If neither the Identity nor the Filter parameters are specified, then Get-CsTeamsVoiceApplicationsPolicy returns all the Teams voice applications policies configured for use in the tenant.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Set-CsTeamsVoiceApplicationsPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsvoiceapplicationspolicy)

[Grant-CsTeamsVoiceApplicationsPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsvoiceapplicationspolicy)

[Remove-CsTeamsVoiceApplicationsPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamsvoiceapplicationspolicy)

[New-CsTeamsVoiceApplicationsPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsvoiceapplicationspolicy)
