---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/get-csonlinetelephonenumberinventoryareas
applicable: Skype for Business Online
title: Get-CsOnlineTelephoneNumberInventoryAreas
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsOnlineTelephoneNumberInventoryAreas

## SYNOPSIS
Use the `Get-CsOnlineTelephoneNumberInventoryAreas` cmdlet to retrieve the geographical areas where specified inventory types are supported.

## SYNTAX

```
Get-CsOnlineTelephoneNumberInventoryAreas [-Tenant <Guid>] -RegionalGroup <String>
 -CountryOrRegion <String> [-Area <String>] -InventoryType <String> [-DomainController <Fqdn>] [-Force]
 [<CommonParameters>]
```

## DESCRIPTION
Following is an example of the console output for the Get-CsOnlineTelephoneNumberInventoryAreas cmdlet.

Get-CsOnlineTelephoneNumberInventoryAreas -InventoryType Subscriber -RegionalGroup NOAM -CountryOrRegion US

RunspaceId : 8fa40044-7bcf-465b-b7c8-76e54f124c8d

Id : IL

DefaultName : Illinois

Cities : {}

RunspaceId : 8fa40044-7bcf-465b-b7c8-76e54f124c8d

Id : MA

DefaultName : Massachusetts

Cities : {}

RunspaceId : 8fa40044-7bcf-465b-b7c8-76e54f124c8d

Id : NY

DefaultName : New York

Cities : {}

RunspaceId : 8fa40044-7bcf-465b-b7c8-76e54f124c8d

Id : OR

DefaultName : Oregon

Cities : {}

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOnlineTelephoneNumberInventoryAreas -InventoryType Subscriber -RegionalGroup NOAM -CountryOrRegion US
```

This example returns the areas with Subscriber inventory in the specified region and country.


## PARAMETERS

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

### None

## OUTPUTS

### Deserialized.Microsoft.Rtc.Management.Hosted.Bvd.Types.InventoryArea
Instance or array of the objects.

## NOTES

## RELATED LINKS

