---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsOnlineLisLocation
schema: 2.0.0
---

# Get-CsOnlineLisLocation

## SYNOPSIS
Use the Get-CsOnlineLisLocation cmdlet to retrieve information on previously defined locations in the Location Information Service (LIS.)

## SYNTAX

```
Get-CsOnlineLisLocation [-CivicAddressId <Object>] [-Location <Object>] [-AssignmentStatus <Object>]
 [-BypassDualWrite <Object>] [-City <Object>] [-CountryOrRegion <Object>] [-Description <Object>]
 [-DomainController <Object>] [-Force] [-LocationId <Object>] [-NumberOfResultsToSkip <Object>]
 [-PopulateNumberOfVoiceUsers] [-ResultSize <Object>] [-Tenant <Object>] [-ValidationStatus <Object>] [-AsJob]
 [-PopulateNumberOfTelephoneNumbers] [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOnlineLisLocation -City Seattle -ResultSize 25 -ValidationStatus Validated
```

This example returns a maximum of 25 validated locations in Seattle.

### -------------------------- Example 2 --------------------------
```
Get-CsOnlineLisLocation -CivicAddressId a363a9b8-1acd-41de-916a-296c7998a024
```

This example returns the locations associated with a civic address specified by its unique identifier.

### -------------------------- Example 3 --------------------------
```
Get-CsOnlineLisLocation -Location "3rd Floor Cafe"
```

This example returns the location described as the "3rd Floor Cafe".

### -------------------------- Example 4 --------------------------
```
Get-CsOnlineLisLocation -LocationId 5aa884e8-d548-4b8e-a289-52bfd5265a6e
```

This example returns the information on one location specified by its unique identifier.


## PARAMETERS

### -CivicAddressId
Specifies the identification number of the civic address that is associated with the target locations.

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

### -Location
Specifies an administrator defined description of the location to retrieve.
For example, "2nd Floor Cafe", "Main Lobby", or "Office 250".

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

### -AssignmentStatus
Specifies whether the retrieved locations have been assigned to users or not.
Valid inputs are "Assigned", or "Unassigned".

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
Specifies the city of the target location.

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
Specifies the country or region of the target location.

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
Specifies the administrator defined description of the civic address that is associated with the target locations.

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

### -LocationId
Specifies the unique identifier of the target location.

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

### -NumberOfResultsToSkip
Specifies the number of results to skip.
If there are a large number of locations, you can limit the number of returns by using the ResultSize parameter.
If you limited the first cmdlet execution to 25 results, and want to look at the next 25 locations, then you leave ResultSize at 25 and set NumberOfResultsToSkip to 25 to omit the first 25 you've reviewed.
For example the command below will return locations 26-50 for Seattle.

`Get-CsOnlineLisLocation -City Seattle -ResultSize 25 -NumberOfResultsToSkip 25`

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

### -PopulateNumberOfVoiceUsers
If present, the PopulateNumberOfVoiceUsers switch causes the cmdlet to provide the number of voice users at the returned locations.

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

### -ResultSize
Specifies the maximum number of results to return.

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

### -ValidationStatus
Specifies the validation status of the addresses to be returned.
Valid inputs are: Valid, Invalid, and Notvalidated.

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

### -PopulateNumberOfTelephoneNumbers
{{Fill PopulateNumberOfTelephoneNumbers Description}}

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

### None


## OUTPUTS

### Returns an instance, or instances of emergency location objects.


## NOTES


## RELATED LINKS

