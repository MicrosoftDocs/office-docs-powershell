---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/teams/get-cstenantlicensingconfiguration
schema: 2.0.0
title: Get-CsTenantLicensingConfiguration
---

# Get-CsTenantLicensingConfiguration

## SYNOPSIS
Indicates whether licensing information for the specified tenant is available in the Teams admin center.

## SYNTAX

### Identity (Default)
```
Get-CsTenantLicensingConfiguration [[-Identity] <String>] [-MsftInternalProcessingMode <String>]
 [<CommonParameters>]
```

### Filter
```
Get-CsTenantLicensingConfiguration [-MsftInternalProcessingMode <String>] [-Filter <String>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-CsTenantLicensingConfiguration cmdlet indicates whether licensing information for the specified tenant is available in the Teams admin center.
The cmdlet returns information similar to this:

Identity : GlobalStatus : Enabled

If the Status is equal to Enabled then licensing information is available in the admin center.
If not, then licensing information is not available in the admin center.

## EXAMPLES

### Example 1
```
Get-CsTenantLicensingConfiguration
```

The command shown in Example 1 returns licensing configuration information for the current tenant:

## PARAMETERS

### -Filter
Enables you to use wildcard characters in order to return a collection of tenant licensing configuration settings.
Because each tenant is limited to a single, global collection of licensing configuration settings there is no need to use the Filter parameter.

```yaml
Type: String
Parameter Sets: Filter
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the collection of tenant licensing configuration settings to be returned.
Because each tenant is limited to a single, global collection of licensing settings there is no need include this parameter when calling the Get-CsTenantLicensingConfiguration cmdlet.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:
applicable: Microsoft Teams

Required: False
Position: 2
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Deserialized.Microsoft.Rtc.Management.WritableConfig.Settings.TenantConfiguration.TenantLicensingConfiguration

## NOTES

## RELATED LINKS

[Get-CsTenant](https://learn.microsoft.com/powershell/module/teams/get-cstenant)
