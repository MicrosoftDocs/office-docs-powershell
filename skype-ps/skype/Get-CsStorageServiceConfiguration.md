---
external help file: 
applicable: Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsStorageServiceConfiguration

## SYNOPSIS
Returns information about existing instances of the Skype for Business Server Storage Service.
The storage service provides a common infrastructure that enables Skype for Business Server components to use Exchange as a back-end data store.

## SYNTAX

### Filter
```
Get-CsStorageServiceConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsStorageServiceConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
The Skype for Business Server Storage Service enables Skype for Business Server components (such as archiving) to use Exchange as a back-end data store.
This helps to reduce operating costs; for example, you do not need to have separate storage solutions for Exchange archiving and for Skype for Business Server archiving.
The Storage Service also enables Skype for Business Server to leverage the heavy investment that has been made in Exchange archiving and storage, and prevents administrators from having to use multiple tools to retrieve archived data.

Separate instances of the Skype for Business Server Storage Service can be configured at the global, site, and service scope (for the Registrar service only).
By default, Skype for Business Server provides you with a single, global collection of Storage Service configuration settings.
However, administrators have the option of creating custom setting collections by using the New-CsStorageServiceConfiguration cmdlet.
Information about all of these Storage Service settings can be returned by using the Get-CsStorageServiceConfiguration cmdlet.

Skype for Business Server Control Panel: The functions carried out by the Get-CsStorageServiceConfiguration cmdlet are not available in the Skype for Business Server Control Panel.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsStorageServiceConfiguration
```

The command shown in Example 1 returns information about all the storage service configuration settings in use in your organization.

### -------------------------- Example 2 --------------------------
```
Get-CsStorageServiceConfiguration -Identity "site:Redmond"
```

In Example 2, information is returned for a single collection of storage service configuration settings: the collection of settings applied to the Redmond site.

### -------------------------- Example 3 --------------------------
```
Get-CsStorageServiceConfiguration -Filter "service:*"
```

Example 3 returns information for all the storage service configuration settings applied at the service scope.
To do this, the command uses the Filter parameter and the filter value "service:*".
That filter value limits returned data to collections that have an Identity that begins with the string value "service:".


## PARAMETERS

### -Filter
Enables you to use wildcards when retrieving one or more collections of storage service configuration settings.
For example, to return all the settings configured at the site scope, use this syntax:

`-Filter "site:*"`

To return all the settings configured at the service scope, use this syntax:

`-Filter "service:*"`

Note that you cannot use both the Filter parameter and the Identity parameter in the same command.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the storage service configuration settings to be returned.
Storage service configuration settings can be applied to the global, site, or service scope (for the Registrar service only).
To return a complete collection of storage service configuration settings, omit the Identity parameter altogether:

`Get-CsStorageServiceConfiguration`

Alternatively, you can use the Identity parameter to retrieve information for a specific collection of storage service configuration settings.
To return just the global settings, use this syntax:

`-Identity "global"`

To return settings configured at the site scope, use syntax similar to this:

`-Identity "site:Redmond"`

To return settings at the service level, use syntax similar to this:

`-Identity "service:Registrr:atl-cs-001.litwareinc.com"`

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the storage service configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

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

### Microsoft.Rtc.Management.WritableConfig.Settings.StorageService.StorageServiceSettings


## NOTES


## RELATED LINKS

[New-CsStorageServiceConfiguration]()

[Remove-CsStorageServiceConfiguration]()

[Set-CsStorageServiceConfiguration]()