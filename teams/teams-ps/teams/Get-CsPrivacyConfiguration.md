---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Get-CsPrivacyConfiguration
online version: https://learn.microsoft.com/powershell/module/teams/Get-CsPrivacyConfiguration
schema: 2.0.0
---

# Get-CsPrivacyConfiguration

## SYNOPSIS

Returns information about the privacy configuration settings currently in use in your organization.
Privacy configuration settings help determine how much information users make available to other users.

## SYNTAX

### Identity (Default)

```powershell
Get-CsPrivacyConfiguration [[-Identity] <String>] [-MsftInternalProcessingMode <String>] [<CommonParameters>]
```

### Filter

```powershell
Get-CsPrivacyConfiguration [-MsftInternalProcessingMode <String>] [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION
Privacy configuration settings can be applied at the global scope, the site scope, and at the service scope (albeit only for the User Server service).
The Get-CsPrivacyConfiguration cmdlet enables you to retrieve information about all the privacy configuration settings currently in use in your organization.

## EXAMPLES

### Example 1

```powershell
Get-CsPrivacyConfiguration
```

The command shown in Example 1 returns all the privacy configuration settings currently in use in the organization.

### Example 2

```powershell
Get-CsPrivacyConfiguration -Identity site:Redmond
```

Example 2 returns a single collection of privacy configuration settings: the settings that have the Identity site:Redmond.

### Example 3

```powershell
Get-CsPrivacyConfiguration -Filter "site:*"
```

In Example 3, information is returned for all the privacy configuration settings that have been assigned to the site scope.
To do this, the Filter parameter is included, along with the filter value "site:*".
That filter value ensures that only settings where the Identity (the only property you can filter on) begins with the characters "site:".

### Example 4

```powershell
Get-CsPrivacyConfiguration | Where-Object {$_.EnablePrivacyMode -eq $True}
```

The command shown in Example 4 returns information about all the privacy configuration settings where privacy mode has been enabled.
This is done by first calling the Get-CsPrivacyConfiguration cmdlet without any parameters in order to return a collection of all the privacy settings.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the EnablePrivacyMode property is equal to True.

## PARAMETERS

### -Identity

Unique identifier for the privacy configuration settings to be retrieved.
To return the global settings, use this syntax:

\`-Identity global\`

To return settings configured at the site scope, use syntax similar to this:

\`-Identity site:Redmond\`

To modify settings at the service level, use syntax like this:

\`-Identity service:UserServer:atl-cs-001.litwareinc.com\`

If this parameter is not specified then the Get-CsPrivacyConfiguration cmdlet returns all the privacy configuration settings currently in use in your organization.

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

### -Filter

Enables you to use wildcards to return one or more collections of privacy configuration settings.
For example, to return all the settings configured at the site scope, you can use this syntax:

\`-Filter "site:*"\`

To return all the settings configured at the service scope, use this syntax:

\`-Filter "service:*"\`

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

### -MsftInternalProcessingMode

For internal use only.

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

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PrivacyConfiguration

## NOTES

## RELATED LINKS
[Set-CsPrivacyConfiguration](Set-CsPrivacyConfiguration.md)

