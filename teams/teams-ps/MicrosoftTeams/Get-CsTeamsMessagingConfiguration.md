---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/microsoftteams/Get-CsTeamsMessagingConfiguration
schema: 2.0.0
title: Get-CsTeamsMessagingConfiguration
---

# Get-CsTeamsMessagingConfiguration

## SYNOPSIS

TeamsMessagingConfiguration determines the messaging settings for users. This cmdlet returns your organization's current settings.

## SYNTAX

### Identity (Default)

```powershell
Get-CsTeamsMessagingConfiguration [[-Identity] <String>] [<CommonParameters>]
```

### Filter

```powershell
Get-CsTeamsMessagingConfiguration [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION

TeamsMessagingConfiguration determines the messaging settings for users.

## EXAMPLES

### Example 1

```powershell
PS C:\> Get-CsTeamsMessagingConfiguration
```

The command shown in Example 1 returns teams messaging configuration information for the current tenant.

## PARAMETERS

### -Filter

Enables you to use wildcard characters in order to return a collection of tenant messaging configuration settings. Because each tenant is limited to a single, global collection of the messaging configuration settings there is no need to use the Filter parameter.

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

Specifies the collection of tenant messaging configuration settings to be returned. Because each tenant is limited to a single, global collection of messaging settings there is no need include this parameter when calling the cmdlet. If you do choose to use the Identity parameter you must also include the Tenant parameter.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
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

[Set-CsTeamsMessagingConfiguration](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingconfiguration)
