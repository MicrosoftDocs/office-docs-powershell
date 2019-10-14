---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsOnlineLisCivicAddress
schema: 2.0.0
manager: bulenteg
author: junya
ms.author: junya
ms.reviewer:
---

# Get-CsOnlineLisCivicAddress

## SYNOPSIS
Use the Get-CsOnlineLisCivicAddress cmdlet to retrieve information about existing emergency civic addresses defined in the Location Information Service (LIS.)

## SYNTAX

```
Get-CsOnlineLisCivicAddress [-CivicAddressId <Guid>] [-LocationId <Guid>]
 [-PopulateNumberOfVoiceUsers] [-PopulateNumberOfTelephoneNumbers] [-AssignmentStatus <String>]
 [-City <String>] [-CountryOrRegion <String>] [-Description <String>] [-ValidationStatus <String>]
 [-ResultSize <Int32>] [-NumberOfResultsToSkip <Int32>] [-Tenant <Guid>] [-DomainController <Fqdn>] [-Force]
 [<CommonParameters>]
```

## DESCRIPTION


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOnlineLisCivicAddress -CivicAddressId 235678321ee38d9a5-33dc-4a32-9fb8-f234cedb91ac
```

This example returns the civic address with the specified identification.



### -------------------------- Example 2 --------------------------
```
Get-CsOnlineLisCivicAddress -City Seattle
```

This example returns all the civic addresses in the city of Seattle.


## PARAMETERS

### -AssignmentStatus
Specifies whether the retrieved addresses have been assigned to users or not.
Valid inputs are "Assigned", or "Unassigned".

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

### -City
Specifies the city of the target civic address.

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

### -CivicAddressId
Specifies the identification number of the civic address to return.

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

### -CountryOrRegion
Specifies the country or region of the target civic address.

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

### -Description
Specifies the administrator defined description of the target civic address.

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
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocationId
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

### -NumberOfResultsToSkip
Specifies the number of results to skip.
If there are a large number of civic addresses, you can limit the number of returns by using the ResultSize parameter.
If you limited the first cmdlet execution to 25 results, and want to look at the next 25 locations, then you leave ResultSize at 25 and set NumberOfResultsToSkip to 25 to omit the first 25 you've reviewed.
For example the command below will return civic addresses 26-50 for Seattle.

\`Get-CsOnlineLisCivicAddress -City Seattle -ResultSize 25 -NumberOfResultsToSkip 25\`

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopulateNumberOfVoiceUsers
If present, the PopulateNumberOfVoiceUsers switch causes the cmdlet to provide the number of voice users at the returned addresses.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
Specifies the maximum number of results to return.

```yaml
Type: Int32
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

### -ValidationStatus
Specifies the validation status of the addresses to be returned.
Valid inputs are: Valid, Invalid, and Notvalidated.

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

### -PopulateNumberOfTelephoneNumbers
{{Fill PopulateNumberOfTelephoneNumbers Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None


## OUTPUTS

### One or more instances of civic address objects.


## NOTES


## RELATED LINKS

