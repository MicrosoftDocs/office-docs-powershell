---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsConferencingConfiguration
schema: 2.0.0
---

# Get-CsConferencingConfiguration

## SYNOPSIS
Returns information about the conference configuration settings for your organization.
Conference settings determine such things as the maximum-allowed size for conference content and handouts, the content grace period (that is, the amount of time content will be stored before being deleted), and the URLs for the internal and external downloads of the supported client.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsConferencingConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsConferencingConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
For conferences, management and administration is split between two sets of cmdlets.
If you want to manage the things users can and cannot do (for example, can users invite anonymous participants to join a conference, are users allowed to offer application sharing in a conference, or are users allowed to transfer files within a conference), then you need to use the CsConferencingPolicy cmdlets.

In addition to user activities, administrators need to manage the Skype for Business Server Web Conferencing service.
For example, administrators need to be able to do such things as specify the maximum amount of content storage allotted to a single conference and to specify the grace period before that conference content is automatically deleted.
They also need to be able to specify the ports used for activities such as application sharing and file transfer.

These latter activities can be managed by using the CsConferencingConfiguration cmdlets.
These cmdlets enable you to manage the actual servers themselves.
The CsConferencingConfiguration cmdlets (which can be applied to the global, the site, and the service scopes) aren't used to specify whether or not a user can share applications during a conference; if application sharing is allowed, however, these cmdlets enable you to indicate which ports should be used for that activity.
Likewise, the cmdlets enable you to specify such things as storage limits and expiration periods, as well as pointers to internal and external URLs where users can obtain conferencing help and resources.

The Get-CsConferencingConfiguration cmdlet provides a way for administrators to return information about all the conferencing configuration settings currently in use in their organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsConferencingConfiguration
```

Example 1 returns information about all the conferencing configuration settings currently in use in the organization.
This is done by calling the Get-CsConferencingConfiguration cmdlet without any parameters.

### -------------------------- Example 2 --------------------------
```
Get-CsConferencingConfiguration -Identity site:Redmond
```

In Example 2, conferencing configuration information is returned for the Redmond site (-Identity site:Redmond).
Because Identities must be unique, this command will always return, at most, a single collection of conferencing configuration settings.

### -------------------------- Example 3 --------------------------
```
Get-CsConferencingConfiguration -Filter "site:*"
```

The command shown in Example 3 returns information about all the conferencing configuration settings that have been applied at the site scope.
To do this, the Get-CsConferencingConfiguration cmdlet is called along with the Filter parameter; the filter value "site:*" ensures that only settings that have an Identity that begins with the string value 'site:" are returned.

### -------------------------- Example 4 --------------------------
```
Get-CsConferencingConfiguration | Where-Object {$_.Organization -ne "Litwareinc"}
```

Example 4 returns information about all the conferencing configuration settings where the organization is not set to Litwareinc.
To carry out this task, the command first calls the Get-CsConferencingConfiguration cmdlet without any parameters; this returns a collection of all the conferencing configuration settings used in the organization.
The resulting collection is then piped to the Where-Object cmdlet, which selects only those settings where the Organization property is not equal to Litwareinc.

### -------------------------- Example 5 --------------------------
```
Get-CsConferencingConfiguration | Where-Object {$_.MaxContentStorageMB -gt 100}
```

In Example 5, information is returned only for those conferencing configuration settings where the maximum content storage space is greater than 100 megabytes.
To do this, the command first calls the Get-CsConferencingConfiguration cmdlet without any parameters in order to return a collection of all your conferencing configuration settings.
This collection is then piped to the Where-Object cmdlet, which picks out those settings that where the content storage space is greater than 100 megabytes.



## PARAMETERS

### -Identity
Unique identifier for the collection of conferencing configuration settings to be retrieved.
To retrieve the global settings, use this syntax: -Identity global.
To retrieve settings configured at the site scope, use syntax similar to this: -Identity "site:Redmond".
To retrieve settings configured at the service scope, use syntax similar to this: -Identity "service:ConferencingServer:atl-cs-001.litwareinc.com".

If this parameter is not included, then the Get-CsConferencingConfiguration cmdlet will return all the conferencing configuration settings currently in use in your organization.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcards when specifying the Identity of the conferencing configuration settings to be returned.
For example, this syntax returns all the settings configured at the site scope: -Filter "site:*".
This syntax returns all the settings configured at the service scope: -Filter "service:*".

Note that you cannot use both the Identity and the Filter parameters in the same command.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the conferencing configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.WebConf.ConfSettings


## NOTES


## RELATED LINKS

[New-CsConferencingConfiguration](New-CsConferencingConfiguration.md)

[Remove-CsConferencingConfiguration](Remove-CsConferencingConfiguration.md)

[Set-CsConferencingConfiguration](Set-CsConferencingConfiguration.md)

