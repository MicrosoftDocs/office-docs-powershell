---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csonlinelislocation
applicable: Microsoft Teams
title: Get-CsOnlineLisLocation
schema: 2.0.0
manager: bulenteg
author: jenstrier
ms.author: serdars
ms.reviewer:
---

# Get-CsOnlineLisLocation

## SYNOPSIS
Use the Get-CsOnlineLisLocation cmdlet to retrieve information on previously defined locations in the Location Information Service (LIS.)

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

## DESCRIPTION

## EXAMPLES

### Example 1
```
Get-CsOnlineLisLocation -City Seattle -ResultSize 25 -ValidationStatus Validated
```

This example returns a maximum of 25 validated locations in Seattle.

### Example 2
```
Get-CsOnlineLisLocation -CivicAddressId a363a9b8-1acd-41de-916a-296c7998a024
```

This example returns the locations associated with a civic address specified by its unique identifier.

### Example 3
```
Get-CsOnlineLisLocation -Location "3rd Floor Cafe"
```

This example returns the location described as the "3rd Floor Cafe".

### Example 4
```
Get-CsOnlineLisLocation -LocationId 5aa884e8-d548-4b8e-a289-52bfd5265a6e
```

This example returns the information on one location specified by its unique identifier.

## PARAMETERS

### -CivicAddressId
Specifies the identification number of the civic address that is associated with the target locations.

```yaml
Type: Guid
Parameter Sets: UseCivicAddressId
Aliases:
Applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Location
Specifies an administrator defined description of the location to retrieve.
For example, "2nd Floor Cafe", "Main Lobby", or "Office 250".

```yaml
Type: String
Parameter Sets: UseLocation
Aliases:
Applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentStatus

**Note:** This parameter has been deprecated from the Teams PowerShell Module version 3.0.0 or later.

Specifies whether the retrieved locations have been assigned to users or not.
Valid inputs are "Assigned", or "Unassigned".

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -City
Specifies the city of the target location.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -CountryOrRegion
Specifies the country or region of the target location.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Description
Specifies the administrator defined description of the civic address that is associated with the target locations.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

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
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocationId
Specifies the unique identifier of the target location.

```yaml
Type: Guid
Parameter Sets: UseLocationId
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -NumberOfResultsToSkip
Specifies the number of results to skip.
If there are a large number of locations, you can limit the number of results by using the ResultSize parameter.
If you limited the first cmdlet execution to 25 results, and want to look at the next 25 locations, then you leave ResultSize at 25 and set NumberOfResultsToSkip to 25 to omit the first 25 you've reviewed.
For example the command below will return locations 26-50 for Seattle.

\`Get-CsOnlineLisLocation -City Seattle -ResultSize 25 -NumberOfResultsToSkip 25\`

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopulateNumberOfTelephoneNumbers
If present, the PopulateNumberOfTelephoneNumbers switch causes the cmdlet to provide the number of telephone numbers at the returned locations.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopulateNumberOfVoiceUsers
If present, the PopulateNumberOfVoiceUsers switch causes the cmdlet to provide the number of voice users at the returned locations.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: True
Accept wildcard characters: False
```

### -ResultSize
Specifies the maximum number of results to return.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ValidationStatus
Specifies the validation status of the addresses to be returned.
Valid inputs are: Validated, Invalid, and Notvalidated.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

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

### Returns an instance, or instances of emergency location objects.

## NOTES

## RELATED LINKS

[Set-CsOnlineLisLocation](https://learn.microsoft.com/powershell/module/teams/set-csonlinelislocation)

[New-CsOnlineLisLocation](https://learn.microsoft.com/powershell/module/teams/new-csonlinelislocation)

[Remove-CsOnlineLisLocation](https://learn.microsoft.com/powershell/module/teams/remove-csonlinelislocation)
