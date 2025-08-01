---
applicable: Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skype/set-csstorageserviceconfiguration
schema: 2.0.0
title: Set-CsStorageServiceConfiguration
---

# Set-CsStorageServiceConfiguration

## SYNOPSIS
Modifies existing instances of the Skype for Business Server Storage Service.
The storage service provides a common infrastructure that enables Skype for Business Server components to use Exchange as a back-end data store.
Note that, at this point in time, there are no property values that can be modified by using this cmdlet.

## SYNTAX

### Identity
```
Set-CsStorageServiceConfiguration [[-Identity] <XdsIdentity>] [-Confirm]
 [-EnableAsyncAdaptorTaskAbort <Boolean>] [-EnableAutoImportFlushedData <Boolean>]
 [-EnableFabricReplicationSetReduction <Boolean>] [-FabricInvalidStateTimeoutDuration <UInt64>] [-Force]
 [-WhatIf] [<CommonParameters>]
```

### Instance
```
Set-CsStorageServiceConfiguration [-Confirm] [-EnableAsyncAdaptorTaskAbort <Boolean>]
 [-EnableAutoImportFlushedData <Boolean>] [-EnableFabricReplicationSetReduction <Boolean>]
 [-FabricInvalidStateTimeoutDuration <UInt64>] [-Force] [-Instance <PSObject>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Skype for Business Server Storage Service enables Skype for Business Server components, such as archiving, to use Exchange as a back-end data store.
This helps to reduce operating costs: for example, you do not need to have separate storage solutions for Exchange archiving and for Skype for Business Server archiving.
The Storage Service also enables Skype for Business Server to leverage the heavy investment that has been made in Exchange archiving and storage and prevents administrators from having to use multiple tools to retrieve archived data.

Separate instances of the Skype for Business Server Storage Service can be configured at the global, site and service scope (for the Registrar service only).
By default, Skype for Business Server provides you with a single, global collection of Storage Service configuration settings.
Administrators have the option of creating custom settings by using the `New-CsStorageServiceConfiguration` cmdlet.
At this point in time, however, these Storage service instances do not include any settings that can managed by using the `Set-CsStorageServiceConfiguration` cmdlet.

Skype for Business Server Control Panel: The functions carried out by the `Set-CsStorageServiceConfiguration` cmdlet are not available in the Skype for Business Server Control Panel.

## EXAMPLES

### Example 1
At this point in time there are no property values that can be modified by using the Set-CsStorageServiceConfiguration cmdlet.


## PARAMETERS

### -EnableAsyncAdaptorTaskAbort

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

PARAMVALUE: $true | $false

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

### -EnableAutoImportFlushedData

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

PARAMVALUE: $true | $false

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

### -EnableFabricReplicationSetReduction

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

PARAMVALUE: $true | $false

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

### -FabricInvalidStateTimeoutDuration

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

PARAMVALUE: UInt64

```yaml
Type: UInt64
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Suppresses the display of any nonfatal error message that might occur when running the command.

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

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Unique identifier for the storage service configuration settings to be modified.
Storage service configuration settings can be applied to the global, site, or service scope (for the Registrar service only).

To modify the global settings, use this syntax:

`-Identity "global"`

To modify settings configured at the site scope, use syntax similar to this:

`-Identity "site:Redmond"`

To modify settings at the service level, use syntax similar to this:

`-Identity "service:Registar:atl-cs-001.litwareinc.com"`

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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

### -Confirm

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.

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

### -WhatIf

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Describes what would happen if you executed the command without actually executing the command.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.StorageService.StorageServiceSettings
The `Set-CsStorageServiceConfiguration` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.StorageService.StorageServiceSettings object.

## OUTPUTS

### None
The `Set-CsStorageServiceConfiguration` cmdlet does not return any data or objects.

## NOTES

## RELATED LINKS

[Get-CsStorageServiceConfiguration](Get-CsStorageServiceConfiguration.md)

[New-CsStorageServiceConfiguration](New-CsStorageServiceConfiguration.md)

[Remove-CsStorageServiceConfiguration](Remove-CsStorageServiceConfiguration.md)
