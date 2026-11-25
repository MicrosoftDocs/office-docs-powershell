---
applicable: Microsoft Teams
author: pavellatif
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: pavellatif
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlinelislocation
schema: 2.0.0
title: Get-CsOnlineLisLocation
---

# Get-CsOnlineLisLocation

## SYNOPSIS
Use the Get-CsOnlineLisLocation cmdlet to retrieve information on previously defined locations in the Location Information Service (LIS).

## SYNTAX

### GetByLocationID (Default)
```
Get-CsOnlineLisLocation [-AssignmentStatus <string>] [-City <string>] [-CountryOrRegion <string>] [-Description <string>] [-Force]
 [-NumberOfResultsToSkip <int>] [-PopulateNumberOfTelephoneNumbers] [-PopulateNumberOfVoiceUsers] [-ResultSize <long>] [-ValidationStatus <string>]
 [<CommonParameters>]
```

### UseCivicAddressId
```
Get-CsOnlineLisLocation -CivicAddressId <guid> [-AssignmentStatus <string>] [-City <string>] [-CountryOrRegion <string>] [-Description <string>]
 [-Force] [-NumberOfResultsToSkip <int>] [-PopulateNumberOfTelephoneNumbers] [-PopulateNumberOfVoiceUsers] [-ResultSize <long>]
 [-ValidationStatus <string>] [<CommonParameters>]
```

### UseLocation
```
Get-CsOnlineLisLocation -Location <string> [-AssignmentStatus <string>] [-City <string>] [-CountryOrRegion <string>] [-Description <string>]
 [-Force] [-NumberOfResultsToSkip <int>] [-PopulateNumberOfTelephoneNumbers] [-PopulateNumberOfVoiceUsers] [-ResultSize <long>]
 [-ValidationStatus <string>] [<CommonParameters>]
```

### UseLocationId
```
Get-CsOnlineLisLocation [-AssignmentStatus <string>] [-City <string>] [-CountryOrRegion <string>] [-Description <string>] [-Force]
 [-NumberOfResultsToSkip <int>] [-PopulateNumberOfTelephoneNumbers] [-PopulateNumberOfVoiceUsers] [-ResultSize <long>] [-ValidationStatus <string>]
 [-LocationId <guid>] [<CommonParameters>]
```

### UseFilter
```
Get-CsOnlineLisLocation -Filter <string> [-AssignmentStatus <string>] [-City <string>] [-CountryOrRegion <string>] [-Description <string>]
 [-Force] [-NumberOfResultsToSkip <int>] [-PopulateNumberOfTelephoneNumbers] [-PopulateNumberOfVoiceUsers] [-ResultSize <long>]
 [-ValidationStatus <string>] [<CommonParameters>]
```

## DESCRIPTION

Returns emergency locations defined in the Location Information Service (LIS).
Retrieve locations by their civic address ID, location ID, or location description, or use the Filter parameter to match property values.
The Filter parameter uses a separate parameter set and can't be combined with CivicAddressId, Location, or LocationId.

## EXAMPLES

### Example 1
```powershell
Get-CsOnlineLisLocation -City Seattle -ResultSize 25 -ValidationStatus Validated
```

This example returns a maximum of 25 validated locations in Seattle.

### Example 2
```powershell
Get-CsOnlineLisLocation -CivicAddressId abcd1234-abcd-1234-abcd-1234abcd5678
```

This example returns the locations associated with a civic address specified by its unique identifier.

### Example 3
```powershell
Get-CsOnlineLisLocation -Location "3rd Floor Cafe"
```

This example returns the location described as the "3rd Floor Cafe".

### Example 4
```powershell
Get-CsOnlineLisLocation -LocationId 11111111-1111-1111-1111-111111111111
```

This example returns the information on one location specified by its unique identifier.

### Example 5: Filter by country or region
```powershell
Get-CsOnlineLisLocation -Filter "CountryOrRegion -in ['CA', 'US']"
```

This example returns locations in Canada or the United States.
The `-in` operator matches any value in the comma-separated list enclosed in square brackets.

### Example 6: Match part of a description
```powershell
Get-CsOnlineLisLocation -Filter "Description -like '*office*'"
```

This example returns locations whose descriptions contain "office".
The asterisks match text before or after "office".

### Example 7: Combine filter conditions
```powershell
Get-CsOnlineLisLocation -Filter "CountryOrRegion -eq 'US' -and City -like 'Sea*'"
```

This example returns locations in the United States whose city names start with "Sea".
The `-and` operator requires both conditions to match.

### Example 8: Exclude a description
```powershell
Get-CsOnlineLisLocation -Filter "Description -ne 'boxes'"
```

This example returns locations whose descriptions aren't equal to "boxes".

## PARAMETERS

### -AssignmentStatus

> Applicable: Microsoft Teams

> [!NOTE]
> This parameter is deprecated in the Teams PowerShell Module version 3.0.0 or later.

Specifies whether the retrieved locations are assigned to users.
Valid inputs are `Assigned` or `Unassigned`.

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

Specifies the city of the target location.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -CivicAddressId

> Applicable: Microsoft Teams

Specifies the identification number of the civic address that's associated with the target locations.

```yaml
Type: Guid
Parameter Sets: UseCivicAddressId
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -CountryOrRegion

> Applicable: Microsoft Teams

Specifies the country or region of the target location.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Description

> Applicable: Microsoft Teams

Specifies the administrator-defined description of the civic address that's associated with the target locations.

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

Specifies whether to suppress warning and confirmation messages.  
This parameter is useful in scripting to suppress interactive prompts.  
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

Filters locations by property values.
For example, use `CountryOrRegion -in ['CA', 'US']` to match a list of countries or regions, or `Description -like '*office*'` to match part of a description.
Use `-eq` for equality, `-ne` for inequality, and `-and` to combine conditions.

Pass the filter expression as a string, with double quotation marks around the expression and single quotation marks around string values.
For `-in`, enclose the comma-separated values in square brackets.
This parameter is required in the UseFilter parameter set and can't be combined with CivicAddressId, Location, or LocationId.

> [!NOTE]
> The `-Filter` parameter is available in Teams PowerShell module 8.0.0 or later.

```yaml
Type: System.String
Parameter Sets: UseFilter
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Location

> Applicable: Microsoft Teams

Specifies an administrator-defined description of the location to retrieve.
For example, "2nd Floor Cafe", "Main Lobby", or "Office 250".

```yaml
Type: String
Parameter Sets: UseLocation
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocationId

> Applicable: Microsoft Teams

Specifies the unique identifier of the target location.

```yaml
Type: Guid
Parameter Sets: UseLocationId
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -NumberOfResultsToSkip

> Applicable: Microsoft Teams

Specifies the number of results to skip.
If there are a large number of locations, you can limit the number of results by using the `ResultSize` parameter.  
If you limited the first cmdlet execution to 25 results, and want to look at the next 25 locations, then you leave `ResultSize` at 25 and set `NumberOfResultsToSkip` to 25 to omit the first 25 locations you reviewed.  
For example, the following command returns locations 26-50 for Seattle:  

`Get-CsOnlineLisLocation -City Seattle -ResultSize 25 -NumberOfResultsToSkip 25`

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

If present, the `PopulateNumberOfTelephoneNumbers` switch causes the cmdlet to provide the number of telephone numbers at the returned locations.

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

If present, the `-PopulateNumberOfVoiceUsers` switch causes the cmdlet to provide the number of voice users at the returned locations.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: True
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
Valid inputs are: `Validated`, `Invalid`, and `NotValidated`.

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

### None

## OUTPUTS

### PSObject
Returns an instance or multiple instances of emergency location objects.

## NOTES

## RELATED LINKS

[Set-CsOnlineLisLocation](./Set-CsOnlineLisLocation.md)

[New-CsOnlineLisLocation](./New-CsOnlineLisLocation.md)

[Remove-CsOnlineLisLocation](./Remove-CsOnlineLisLocation.md)
