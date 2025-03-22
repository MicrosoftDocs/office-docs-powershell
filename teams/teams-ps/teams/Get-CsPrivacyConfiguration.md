---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
applicable: Skype for Business Online
online version: https://learn.microsoft.com/powershell/module/teams/get-csprivacyconfiguration
schema: 2.0.0
---

# Get-CsPrivacyConfiguration

## SYNOPSIS
Returns information about the privacy configuration settings currently in use in your organization.
Privacy configuration settings help determine how much information users make available to other users.
This cmdlet was introduced in Lync Server 2010.

## SYNTAX

### Identity (Default)
```
Get-CsPrivacyConfiguration [[-Identity] <String>] [-MsftInternalProcessingMode <String>]
 [-ProgressAction <ActionPreference>] [<CommonParameters>]
```

### Filter
```
Get-CsPrivacyConfiguration [-MsftInternalProcessingMode <String>] [-Filter <String>]
 [-ProgressAction <ActionPreference>] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server gives users the opportunity to share a wealth of presence information with other people: they can publish a photograph of themselves; they can provide detailed location information; they can have presence information automatically made available to everyone in the organization (as opposed to having this information available only to people on their Contacts list).

Some users will welcome the opportunity to make this information available to their colleagues; other users might be more reluctant to share this data.
(For example, many people might be hesitant about having their photo included in their presence data.) As a general rule, users have control over what information they will (or will not) share; for example, users can select or clear a check box in order to control whether or not their location information is shared with others.
In addition, the privacy configuration cmdlets enable administrators to manage privacy settings for their users.
In some cases, administrators can enable or disable settings; for example, if the property AutoInitiateContacts is set to True, then team members will automatically be added to each user's Contacts list; if set to False, team members will not be automatically be added to each user's Contacts list.

In other cases, administrators can configure the default values in Skype for Business Server while still giving users the right to change these values.
For example, by default location data is published for users, although users do have the right to stop location publication.
By setting the PublishLocationDataByDefault property to False, administrators can change this behavior: in that case, location data will not be published by default, although users will still have the right to publish this data if they choose.

Privacy configuration settings can be applied at the global scope, the site scope, and at the service scope (albeit only for the User Server service).
The Get-CsPrivacyConfiguration cmdlet enables you to retrieve information about all the privacy configuration settings currently in use in your organization.

## EXAMPLES

### Example 1
```
Get-CsPrivacyConfiguration
```

The command shown in Example 1 returns all the privacy configuration settings currently in use in the organization.

### Example 2
```
Get-CsPrivacyConfiguration -Identity site:Redmond
```

Example 2 returns a single collection of privacy configuration settings: the settings that have the Identity site:Redmond.

### Example 3
```
Get-CsPrivacyConfiguration -Filter "site:*"
```

In Example 3, information is returned for all the privacy configuration settings that have been assigned to the site scope.
To do this, the Filter parameter is included, along with the filter value "site:*".
That filter value ensures that only settings where the Identity (the only property you can filter on) begins with the characters "site:".

### Example 4
```
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
{{ Fill MsftInternalProcessingMode Description }}

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

### -ProgressAction
{{ Fill ProgressAction Description }}

```yaml
Type: ActionPreference
Parameter Sets: (All)
Aliases: proga

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

[New-CsPrivacyConfiguration]()

[Remove-CsPrivacyConfiguration]()

[Set-CsPrivacyConfiguration]()

