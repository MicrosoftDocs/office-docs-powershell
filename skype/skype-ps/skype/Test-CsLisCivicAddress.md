---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Test-CsLisCivicAddress
schema: 2.0.0
---

# Test-CsLisCivicAddress

## SYNOPSIS
Tests one or more civic addresses against the Master Street Address Guide.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Test-CsLisCivicAddress [-City <String>] [-Country <String>] [-HouseNumber <String>]
 [-HouseNumberSuffix <String>] [-PostalCode <String>] [-PostDirectional <String>] [-PreDirectional <String>]
 [-State <String>] [-StreetName <String>] [-StreetSuffix <String>] [-UpdateValidationStatus] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
In an Enterprise Voice implementation with Enhanced 9-1-1 (E9-1-1), user locations are determined based on location maps that map a subnet, port, switch, or wireless access point to a location.
(In the absence of a connection to a mapped location, the user may be asked to input their location manually.) The addresses of these locations must be validated against the Master Street Address Guide (MSAG) by the E9-1-1 Network Routing Provider.
This cmdlet uses the web service of that provider to validate mapped addresses.
You can set up a service provider by calling the `Set-CsLisServiceProvider` cmdlet.

If you want to update the MSAGValid property of the civic address, be sure to include the UpdateValidationStatus parameter in your call to the `Test-CsLisCivicAddress` cmdlet.
Use the `Get-CsLisCivicAddress` cmdlet to retrieve civic addresses.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-CsLisCivicAddress -HouseNumber 1234 -HouseNumberSuffix "" -PreDirectional "" -StreetName Main -StreetSuffix St -PostDirectional "" -City Redmond -State WA -PostalCode 99999 -Country US -UpdateValidationStatus
```

This command validates the address with the properties matching the values specified in these parameters against the Master Street Address Guide.
Notice the inclusion of the UpdateValidationStatus parameter at the end: this will update the MSAGValid property of the address.


### -------------------------- Example 2 --------------------------
```
Get-CsLisCivicAddress | Test-CsLisCivicAddress -UpdateValidationStatus
```

This example shows how to test all LIS civic addresses.
The example begins with a call to the `Get-CsLisCivicAddress` cmdlet to retrieve all civic addresses defined in the location database.
These addresses are piped to the `Test-CsLisCivicAddress` cmdlet, which uses the E9-1-1 Network Routing Provider web service to validate each address.


## PARAMETERS

### -City
The location city.

Maximum length: 64 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Country
The country/region this location is in.

Maximum length: 2 characters

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -HouseNumber
The house number of the location.
For a company, this is the number on the street where the company is located.

Maximum length: 10 characters

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -HouseNumberSuffix
Additional information for the house number, such as 1/2 or A.
For example, 1234 1/2 Oak Street or 1234 A Elm Street.

Maximum length: 5 characters

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -PostalCode
The postal code associated with this location.

Maximum length: 10 characters

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -PostDirectional
The directional designation of a street name.
For example, NE or NW for Main Street NE or 7th Avenue NW.

Maximum length: 2 characters

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -PreDirectional
The directional designation for a street name that precedes the name of the street.
For example, NE or NW for NE Main Street or NW 7th Avenue.

Maximum length: 2 characters

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -State
The state or province associated with this location.

Maximum length: 2 characters

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -StreetName
The name of the street for this location.

Maximum length: 60 characters

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -StreetSuffix
The type of street designated in a street name, such as Street, Avenue, or Court.

Maximum length: 10 characters

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -UpdateValidationStatus
Including this parameter will change the MSAGValid property of the civic address depending on whether the address is validated through this cmdlet.
If the address is valid, MSAGValid will be set to True.
Omitting this parameter will leave the MSAGValid value unchanged.

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

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
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

###  
Accepts pipelined input containing a Location Information Server (LIS) civic address object.

## OUTPUTS

###  
This cmdlet does not return a value.

## NOTES

## RELATED LINKS

[Get-CsLisCivicAddress](Get-CsLisCivicAddress.md)

