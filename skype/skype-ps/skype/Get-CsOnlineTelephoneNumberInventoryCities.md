---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/get-csonlinetelephonenumberinventorycities
applicable: Skype for Business Online
title: Get-CsOnlineTelephoneNumberInventoryCities
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsOnlineTelephoneNumberInventoryCities

## SYNOPSIS
Use the `Get-CsOnlineTelephoneNumberInventoryCities` to retrieve the cities that support a given inventory type within a geographical area.

## SYNTAX

```
Get-CsOnlineTelephoneNumberInventoryCities [-Tenant <Guid>] -RegionalGroup <String>
 -CountryOrRegion <String> -Area <String> [-CapitalOrMajorCity <String>] -InventoryType <String>
 [-DomainController <Fqdn>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
Following is an example of the `Get-CsOnlineTelephoneNumberInventoryCities` cmdlet's console output.

Get-CsOnlineTelephoneNumberInventoryCities -InventoryType Service -RegionalGroup NOAM -CountryOrRegion US -Area NY

RunspaceId : 1374aa93-75c4-4679-b765-6efc22f97563

Id : NY

DefaultName : New York City

GeoCode : NOAM-US-NY-NY

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOnlineTelephoneNumberInventoryCities -InventoryType Service -RegionalGroup NOAM -CountryOrRegion US -Area NY
```

The following example retrieves the cities defined as supporting "Service" inventory types in New York state.

### -------------------------- Example 2 --------------------------
```
Get-CsOnlineTelephoneNumberInventoryCities -InventoryType Subscriber -RegionalGroup NOAM -CountryOrRegion US -Area NY
```

The following example retrieves the cities defined as supporting "Subscriber" inventory types in New York state.


## PARAMETERS

### -Area
Specifies the target geographical area for the cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CountryOrRegion
Specifies the target country for the cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases: Country
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InventoryType
Specifies the target telephone number type for the cmdlet.
Acceptable values are:

"Service" for numbers assigned to conferencing support.

"Subscriber" for numbers supporting public switched telephone network (PSTN) functions.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RegionalGroup
Specifies the target geographical region for the cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases: Region
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CapitalOrMajorCity
Specifies the target geographical city for the cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases: City
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: DC
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None

## OUTPUTS

### Deserialized.Microsoft.Rtc.Management.Hosted.Bvd.Types.InventoryCity
Instance or array of the object.

## NOTES

## RELATED LINKS

