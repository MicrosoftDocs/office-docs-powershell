---
external help file: 
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsStorageServiceConfiguration
schema: 2.0.0
---

# New-CsStorageServiceConfiguration

## SYNOPSIS
Creates new instances of the Skype for Business Server Storage Service.
The storage service provides a common infrastructure that enables Skype for Business Server components to use Exchange as a backend data store.

## SYNTAX

```
New-CsStorageServiceConfiguration [-Identity] <XdsIdentity> [-Confirm] [-EnableAsyncAdaptorTaskAbort <Boolean>]
 [-EnableAutoImportFlushedData <Boolean>] [-EnableFabricReplicationSetReduction <Boolean>]
 [-FabricInvalidStateTimeoutDuration <UInt64>] [-Force] [-InMemory] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Skype for Business Server Storage Service enables Skype for Business Server components, such as archiving, to use Exchange as a back-end data store.
This helps to reduce operating costs: for example, you do not need to have separate storage solutions for Exchange archiving and for Skype for Business Server archiving.
The Storage Service also enables Skype for Business Server to leverage the heavy investment that has been made in Exchange archiving and storage; and prevents administrators from having to use multiple tools to retrieve archived data.

Separate instances of the Skype for Business Server Storage Service can be configured at the global, site and service scope (for the Registrar service only).
By default, Skype for Business Server provides you with a single, global collection of Storage Service configuration settings.
However, administrators have the option of creating custom settings by using the `New-CsStorageServiceConfiguration` cmdlet.
Those custom settings can later be deleted by using the `Remove-CsStorageServiceConfiguration` cmdlet.

Skype for Business Server Control Panel: The functions carried out by the `New-CsStorageServiceConfiguration` cmdlet are not available in the Skype for Business Server Control Panel.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-CsStorageServiceConfiguration -Identity "site:Redmond"
```

The command shown in Example 1 creates a new collection of storage service configuration settings applied to the Redmond site.


## PARAMETERS

### -Identity
Unique identifier for the new collection of storage service configuration settings to be created.
Storage service settings can be created at the site scope or the service scope (but only for the Registrar service).
To create a new collections of settings at the site scope, use syntax similar to this:

`-Identity "site:Redmond"`

To create settings at the service scope, use syntax similar to this:

`-Identity "service:Registrar:atl-cs-001.litwareinc.com"`

Note that your command will fail if the specified site or service already hosts a collection of storage service configuration settings.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableAsyncAdaptorTaskAbort
PARAMVALUE: $true | $false

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableAutoImportFlushedData
PARAMVALUE: $true | $false

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableFabricReplicationSetReduction
PARAMVALUE: $true | $false

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FabricInvalidStateTimeoutDuration
PARAMVALUE: UInt64

```yaml
Type: UInt64
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any nonfatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
None.
The `New-CsStorageServiceConfiguration` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `New-CsStorageServiceConfiguration` cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.StorageService.StorageServiceSettings object.

## NOTES

## RELATED LINKS

[Get-CsStorageServiceConfiguration](Get-CsStorageServiceConfiguration.md)

[Remove-CsStorageServiceConfiguration](Remove-CsStorageServiceConfiguration.md)

[Set-CsStorageServiceConfiguration](Set-CsStorageServiceConfiguration.md)

