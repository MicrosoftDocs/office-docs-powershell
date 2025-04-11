---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csonlineliscivicaddress
applicable: Microsoft Teams
title: Get-CsOnlineLisCivicAddress
schema: 2.0.0
manager: bulenteg
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Get-CsOnlineLisCivicAddress

## SYNOPSIS
Use the Get-CsOnlineLisCivicAddress cmdlet to retrieve information about existing emergency civic addresses defined in the Location Information Service (LIS).

## SYNTAX

```
Get-CsOnlineLisCivicAddress [-AssignmentStatus <string>] [-City <string>] [-CivicAddressId <guid>] [-CountryOrRegion <string>]
[-Description <string>] [-Force] [-LocationId <guid>] [-NumberOfResultsToSkip <int>] [-PopulateNumberOfTelephoneNumbers] [-PopulateNumberOfVoiceUsers]
[-ResultSize <long>] [-ValidationStatus <string>] [<CommonParameters>]
```

## DESCRIPTION
Returns one or more emergency civic addresses.

## EXAMPLES

###  Example 1
```powershell
Get-CsOnlineLisCivicAddress -CivicAddressId 235678321ee38d9a5-33dc-4a32-9fb8-f234cedb91ac
```

This example returns the civic address with the specified identification.

###  Example 2
```powershell
Get-CsOnlineLisCivicAddress -City Seattle
```

This example returns all the civic addresses in the city of Seattle.

## PARAMETERS

### -AssignmentStatus

**Note:** This parameter has been deprecated from the Teams PowerShell Module version 3.0.0 or later.

Specifies whether the retrieved addresses have been assigned to users or not.
Valid inputs are "Assigned", or "Unassigned".

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

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
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CivicAddressId
Specifies the identity of the civic address to return.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

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
applicable: Microsoft Teams

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
applicable: Microsoft Teams

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
applicable: Microsoft Teams

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
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberOfResultsToSkip
Specifies the number of results to skip.
If there are a large number of civic addresses, you can limit the number of results by using the ResultSize parameter.
If you limited the first cmdlet execution to 25 results, and want to look at the next 25 locations, then you leave ResultSize at 25 and set NumberOfResultsToSkip to 25 to omit the first 25 you've reviewed.
For example the command below will return civic addresses 26-50 for Seattle.

\`Get-CsOnlineLisCivicAddress -City Seattle -ResultSize 25 -NumberOfResultsToSkip 25\`

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopulateNumberOfTelephoneNumbers
If present, the PopulateNumberOfTelephoneNumbers switch causes the cmdlet to provide the number of phone numbers at the returned addresses.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopulateNumberOfVoiceUsers
If present, the PopulateNumberOfVoiceUsers switch causes the cmdlet to provide the number of voice users at the returned addresses.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

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
applicable: Microsoft Teams

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
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
[Set-CsOnlineLisCivicAddress](https://learn.microsoft.com/powershell/module/teams/set-csonlineliscivicaddress)

[New-CsOnlineLisCivicAddress](https://learn.microsoft.com/powershell/module/teams/new-csonlineliscivicaddress)

[Remove-CsOnlineLisCivicAddress](https://learn.microsoft.com/powershell/module/teams/remove-csonlineliscivicaddress)
