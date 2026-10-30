---
applicable: Microsoft Teams
author: pavellatif
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: pavellatif
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlineliscivicaddress
schema: 2.0.0
title: Get-CsOnlineLisCivicAddress
---

# Get-CsOnlineLisCivicAddress

## SYNOPSIS
Use the Get-CsOnlineLisCivicAddress cmdlet to retrieve information about existing emergency civic addresses defined in the Location Information Service (LIS).

## SYNTAX

```
Get-CsOnlineLisCivicAddress [-AssignmentStatus <string>] [-City <string>] [-CivicAddressId <guid>] [-CountryOrRegion <string>]
[-Description <string>] [-Force] [-LocationId <guid>] [-NumberOfResultsToSkip <int>] [-PopulateNumberOfTelephoneNumbers] [-PopulateNumberOfVoiceUsers]
[-ResultSize <long>] [-Filter <string>] [-ValidationStatus <string>] [<CommonParameters>]
```

## DESCRIPTION
Returns one or more emergency civic addresses.

Use the Filter parameter to retrieve civic addresses that match a filter expression, such as addresses in a list of countries or regions or addresses with a matching description.

## EXAMPLES

###  Example 1
```powershell
Get-CsOnlineLisCivicAddress -CivicAddressId abcd1234-abcd-1234-abcd-1234abcd5678
```

This example returns the civic address with the specified identification.

###  Example 2
```powershell
Get-CsOnlineLisCivicAddress -City Seattle
```

This example returns all the civic addresses in the city of Seattle.

### Example 3: Filter by country or region
```powershell
Get-CsOnlineLisCivicAddress -Filter "Country -in ['CA', 'US']"
```

This example returns civic addresses in Canada or the United States.
The `-in` operator matches any value in the comma-separated list enclosed in square brackets.

### Example 4: Match part of a description
```powershell
Get-CsOnlineLisCivicAddress -Filter "Description -like '*office*'"
```

This example returns civic addresses whose descriptions contain "office".
The asterisks match text before or after "office".

### Example 5: Combine filter conditions
```powershell
Get-CsOnlineLisCivicAddress -Filter "Country -eq 'US' -and City -like 'Sea*'"
```

This example returns civic addresses in the United States whose city names start with "Sea".
The `-and` operator requires both conditions to match.

### Example 6: Exclude a description
```powershell
Get-CsOnlineLisCivicAddress -Filter "Description -ne 'boxes'"
```

This example returns civic addresses whose descriptions aren't equal to "boxes".

## PARAMETERS

### -AssignmentStatus

> Applicable: Microsoft Teams

> [!NOTE]
> This parameter is deprecated from the Teams PowerShell Module version 3.0.0 or later.

Specifies whether the retrieved addresses are assigned to users.
Valid inputs are "Assigned" or "Unassigned".

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

### -City

> Applicable: Microsoft Teams

Specifies the city of the target civic address.

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

### -CivicAddressId

> Applicable: Microsoft Teams

Specifies the identity of the civic address to return.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CountryOrRegion

> Applicable: Microsoft Teams

Specifies the country or region of the target civic address.

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

### -Description

> Applicable: Microsoft Teams

Specifies the administrator defined description of the target civic address.

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

### -Force

> Applicable: Microsoft Teams

The `-Force` parameter suppresses warning and confirmation messages.  
It can be useful in scripting to suppress interactive prompts.
If you don't provide the `-Force` parameter in the command, the command prompts you for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter

> Applicable: Microsoft Teams

Filters civic addresses by property values.
For example, use `Country -in ['CA', 'US']` to match a list of countries or regions, or `Description -like '*office*'` to match part of a description.
Use `-eq` for equality, `-ne` for inequality, and `-and` to combine conditions.

Pass the filter expression as a string, with double quotation marks around the expression and single quotation marks around string values.
For `-in`, enclose the comma-separated values in square brackets.

> [!NOTE]
> The `-Filter` parameter is available in Teams PowerShell module 8.0.0 or later.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocationId

> Applicable: Microsoft Teams

This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberOfResultsToSkip

> Applicable: Microsoft Teams

Specifies the number of results to skip.
If there are a large number of civic addresses, you can limit the number of results by using the `ResultSize` parameter.
If you limited the first cmdlet execution to 25 results, and want to look at the next 25 locations, then you leave `ResultSize` at 25 and set `NumberOfResultsToSkip` to 25 to omit the first 25 results you reviewed.
For example, the following command returns civic addresses 26-50 for Seattle.

\`Get-CsOnlineLisCivicAddress -City Seattle -ResultSize 25 -NumberOfResultsToSkip 25\`

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopulateNumberOfTelephoneNumbers

> Applicable: Microsoft Teams

If present, the `PopulateNumberOfTelephoneNumbers` switch causes the cmdlet to provide the number of phone numbers at the returned addresses.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopulateNumberOfVoiceUsers

> Applicable: Microsoft Teams

If present, the `-PopulateNumberOfVoiceUsers` switch causes the cmdlet to provide the number of voice users at the returned addresses.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Microsoft Teams

Specifies the maximum number of results to return.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ValidationStatus

> Applicable: Microsoft Teams

Specifies the validation status of the addresses to return.
Valid inputs are: `Valid`, `Invalid`, and `NotValidated`.

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
This cmdlet supports the common parameters: `-Debug`, `-ErrorAction`, `-ErrorVariable`, `-InformationAction`, `-InformationVariable`, `-OutVariable`, `-OutBuffer`, `-PipelineVariable`, `-Verbose`, `-WarningAction`, and `-WarningVariable`. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## Notes

## Related links
[Set-CsOnlineLisCivicAddress](./Set-CsOnlineLisCivicAddress.md)

[New-CsOnlineLisCivicAddress](./New-CsOnlineLisCivicAddress.md)

[Remove-CsOnlineLisCivicAddress](./Remove-CsOnlineLisCivicAddress.md)
