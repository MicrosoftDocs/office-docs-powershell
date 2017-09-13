---
external help file: 
applicable: Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsStorageServiceConfiguration

## SYNOPSIS
Removes existing instances of the Skype for Business Server Storage Service.
The storage service provides a common infrastructure that enables Skype for Business Server components to use Skype for Business Server as a back-end data store.

## SYNTAX

```
Remove-CsStorageServiceConfiguration [-Identity] <XdsIdentity> [-Confirm] [-Force] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Skype for Business Server Storage Service enables Skype for Business Server components (such as archiving) to use Exchange as a back-end data store.
This helps to reduce operating costs: for example, you do not need to have separate storage solutions for Exchange archiving and for Skype for Business Server archiving.
The Storage Service also enables Skype for Business Server to leverage the heavy investment that has been made in Exchange archiving and storage and prevents administrators from having to use multiple tools to retrieve archived data.

Separate instances of the Skype for Business Server Storage Service can be configured at the global, site and service scope (for the Registrar service only).
By default, Skype for Business Server provides you with a single, global collection of Storage Service configuration settings.
However, administrators have the option of creating custom settings by using the `New-CsStorageServiceConfiguration` cmdlet.
Those custom settings can later be deleted by using the `Remove-CsStorageServiceConfiguration` cmdlet.

The `Remove-CsStorageServiceConfiguration` cmdlet can also be run against the global settings collection.
In that case, however, the global collection will not be deleted.
Instead, any properties within the global collection will be reset to their default values.

Skype for Business Server Control Panel: The functions carried out by the `Remove-CsStorageServiceConfiguration` cmdlet are not available in the Skype for Business Server Control Panel.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsStorageServiceConfiguration -Identity "site:Redmond"
```

The command shown in Example 1 deletes the storage service configuration settings applied to the Redmond site.


### -------------------------- Example 2 --------------------------
```
Get-CsStorageServiceConfiguration -Filter "site:*" | Remove-CsStorageServiceConfiguration
```

In Example 2, all the storage service settings applied to the site scope are deleted.
To carry out this task, the command first uses the `Get-CsStorageServiceConfiguration` cmdlet and the Filter parameter to return all the settings configured at the site scope.
That collection is then piped to the `Remove-CsStorageServiceConfiguration` cmdlet, which deletes each item in the collection.


## PARAMETERS

### -Identity
Unique identifier for the collection of storage service configuration settings to be removed.
To remove a collection applied to the site scope, use syntax similar to this:

`-Identity "site:Redmond"`

To remove a collection applied to the service scope, use syntax like this:

`-Identity "service:Registrar:atl-cs-001.litwareinc.com"`

Note that you can also run the `Remove-CsStorageServiceConfiguration` cmdlet against the global collection of settings.
In that case, however, the global settings will not actually be removed.
Instead, the properties within that collection will all be reset to their default values.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

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

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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

###  
The `Remove-CsStorageServiceConfiguration` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.StorageService.StorageServiceSettings object.

## OUTPUTS

###  
None.
The `Remove-CsStorageServiceConfiguration` cmdlet does not return any objects or data.

## NOTES

## RELATED LINKS

[Get-CsStorageServiceConfiguration]()

[New-CsStorageServiceConfiguration]()

[Set-CsStorageServiceConfiguration]()
