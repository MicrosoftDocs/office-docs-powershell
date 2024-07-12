---
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Module Name: Microsoft.Teams.ConfigAPI.Cmdlets
online version: https://learn.microsoft.com/powershell/module/teams/export-csacquiredphonenumber
applicable: Microsoft Teams
title: Export-CsAcquiredPhoneNumber
author: pavellatif
ms.author: pavellatif
ms.reviewer:
manager: roykuntz
schema: 2.0.0
---

# Export-CsAcquiredPhoneNumber

## SYNOPSIS
This cmdlet exports the list of phone numbers acquired by Teams Phone tenant. 

## SYNTAX

```powershell
Export-CsAcquiredPhoneNumber [-Property <string>]
```

## DESCRIPTION
This cmdlet exports all the acquired phone numbers by the tenant to a file. The cmdlet is an asynchronus operation and will return an OrderId. [Get-CsExportAcquiredPhoneNumberStatus](Get-CsExportAcquiredPhoneNumberStatus.md) cmdlet can be used to check the status of the OrderId including the download link to exported file. 

By default, this cmdlet returns all the phone numbers acquired by the tenant with all corresponding properties in the results. The tenant admin may indicate specific properties as an input to get a list with only selected properties in the file.

## EXAMPLES

### Example 1
```powershell
Export-CsAcquiredPhoneNumber
```
```output
OrderId         : 0e923e2c-ab0e-4b7a-be5a-906be8c
```
This example displays the OrderId of the export acquired phone numbers operation. The OrderId can be used to get the download link for the file.

### Example 2
```powershell
Export-CsAcquiredPhoneNumber -Property "TelephoneNumber, NumberType, AssignmentStatus"
```
```output
OrderId         : 0e923e2c-ab0e-6h8c-be5a-906be8c
```
This example displays the OrderId of the export acquired phone numbers operation. This file will only contain the properties indicated. 


## PARAMETERS

### -Property
Filters the returned results to only show the indicated properties in the file. 
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

#### Available properties to use are: 

```yaml
- TelephoneNumber
- OperatorId
- NumberType
- LocationId
- CivicAddressId
- NetworkSiteId
- AvailableCapabilities
- AcquiredCapabilities
- BlockId
- RangeId
- AssignmentStatus
- PlaceName
- ActivationState
- PartnerName
- IsOperatorConnect
- IsoCountryCode
- PortInOrderStatus
- DsuSupported
- CapabilityUpdateSupported
- LocationUpdateSupported
- AcquisitionDate
- TargetId
- TargetType
- AssignmentCategory
- SmsCampaignBriefs
- CallingProfileId
- IsoSubdivisionCode
- NumberSource
- ResourceAccountSharedCallingPolicySupported
- SupportedCustomerActions
- ReverseNumberLookup
- RoutingOptions
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS
```yaml
OrderId
```

## NOTES
The cmdlet is available in Teams PowerShell module 6.1.0 or later. 

The cmdlet is only available in commercial and GCC cloud instances.

## RELATED LINKS
[Get-CsExportAcquiredPhoneNumberStatus](Get-CsExportAcquiredPhoneNumberStatus.md)