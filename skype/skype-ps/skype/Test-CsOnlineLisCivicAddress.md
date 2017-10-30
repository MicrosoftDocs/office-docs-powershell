---
external help file: 
applicable: Skype for Business Online
title: Test-CsOnlineLisCivicAddress
schema: 2.0.0
---

# Test-CsOnlineLisCivicAddress


## SYNOPSIS
Use the `Test-CsOnlineLisCivicAddress` cmdlet to verify that a civic address exists in the master street address guide (MSAG), and is suitable for emergency dispatch.


## SYNTAX

```
Test-CsOnlineLisCivicAddress [-CivicAddressId <Object>] [-CompanyName <Object>] [-CountryOrRegion <Object>]
 [-BypassDualWrite <Object>] [-City <Object>] [-CompanyTaxId <Object>] [-Description <Object>]
 [-DomainController <Object>] [-Force] [-HouseNumber <Object>] [-HouseNumberSuffix <Object>]
 [-PostalCode <Object>] [-PostDirectional <Object>] [-PreDirectional <Object>] [-StateOrProvince <Object>]
 [-StreetName <Object>] [-StreetSuffix <Object>] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```


## DESCRIPTION
The `Test-CsOnlineLisCivicAddress` cmdlet operates in two modes.

Validate and report: When called along with a list of address parameters, the cmdlet will test the address and report the result.
Neither the address, nor the validation status is saved in the Location Information Service (LIS.) Use this mode to verify the address before creating it using the `New-CsOnlineLisCivicAddress` cmdlet.

Validate and save: When called with only the CivicAddressId parameter specified, the cmdlet will test the address and, if validated, save the validation status in the Location Information Service (LIS.)

The `Test-CsOnlineLisCivicAddress` produces three results:

Accepted as is: The address entered (validate and report mode), or specified (validate and save mode) is valid.

Accepted with changes: The address entered or specified would be valid with changes.
The changes required are specified in the output.

Rejected: The address entered or specified cannot be found, and no suggested changes can be defined.
The output will contain the reason the validation failed.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-CsOnlineLisCivicAddress -CivicAddressId a363a9b8-1acd-41de-916a-296c7998a024
```

This example tests emergency dispatch suitability for the civic address with the specified identification.


### -------------------------- Example 2 --------------------------
```
Test-CsOnlineLisCivicAddress -HouseNumber 3910 -StreetName Smith -StreetSuffix Street -PostDirectional NE -City Redmond -StateorProvince Washington -CountryOrRegion US -PostalCode 98052 -Description "Puget Sound" -CompanyName Contoso
```

This examples tests the emergency dispatch suitability for the civic address specified by address definition parameters.


## PARAMETERS

### -CivicAddressId
Specifies the identification number of the civic address to test.
If specified, no other address definition parameters are allowed.
Civic address identities can be discovered by using the `Get-CsOnlineLisCivicAddress` cmdlet.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompanyName
Specifies the name of your organization.

```yaml
Type: Object
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
Specifies the country or region of the civic address.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
PARAMVALUE: $true | $false

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -City
Specifies the city of the civic address.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompanyTaxId
PARAMVALUE: String

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Specifies an administrator defined description of the civic address.

```yaml
Type: Object
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
Type: Object
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

### -HouseNumber
Specifies the numeric portion of the civic address.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HouseNumberSuffix
Specifies the numeric suffix of the civic address.
For example, if the property was multiplexed, the HouseNumberSuffix parameter would be the multiplex specifier: "425A Smith Avenue", or "425B Smith Avenue".

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PostalCode
Specifies the postal code of the civic address.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PostDirectional
Specifies the directional attribute of the civic address which follows the street name.
For example, "425 Smith Avenue NE".

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreDirectional
Specifies the directional attribute of the civic address which precedes the street name.
For example, "425 NE Smith Avenue ".

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StateOrProvince
Specifies the state or province of the new civic address.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StreetName
Specifies the street name of the civic address.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StreetSuffix
Specifies a modifier of the street name of the civic address.
The street suffix will typically be something like street, avenue, way, or boulevard.

```yaml
Type: Object
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
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
The address accepts pipelined input from the `Get-CsOnlineLisCivicAddress` cmdlet.

## OUTPUTS

###  
None

## NOTES

## RELATED LINKS
