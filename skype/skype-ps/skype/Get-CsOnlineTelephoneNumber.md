---
external help file: 
applicable: Skype for Business Online
title: Get-CsOnlineTelephoneNumber
schema: 2.0.0
---

# Get-CsOnlineTelephoneNumber

## SYNOPSIS
Use the Get-CsOnlineTelephoneNumber to retrieve telephone numbers from the Business Voice Directory.

## SYNTAX

```
Get-CsOnlineTelephoneNumber [-ActivationState <Object>] [-Assigned <Object>] [-BypassDualWrite <Object>]
 [-CapitalOrMajorCity <Object>] [-DomainController <Object>] [-ExpandLocation] [-Force]
 [-InventoryType <Object>] [-IsNotAssigned] [-ResultSize <Object>] [-TelephoneNumber <Object>]
 [-TelephoneNumberGreaterThan <Object>] [-TelephoneNumberLessThan <Object>]
 [-TelephoneNumberStartsWith <Object>] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Here is an example of the output of the Get-CsOnlineTelephoneNumber cmdlet.

RunspaceId : f90303a9-c6a8-483c-b3b3-a5b8cdbab19c

CallingProfile : BandwidthUS

InventoryType : Service

CityCode : NOAM-US-NY-NY

Id : 19294450177

O365Region : NOAM

SourceType : Tnm

TargetType : caa

TargetMeta : ;BridgeId=5bc815ae-d9e9-4fb6-af74-cf4fa73ceaa6

User :

BridgeNumber :

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOnlineTelephoneNumber -TelephoneNumber 19294450177
```

This example gets the attributes of a specific phone number.

### -------------------------- Example 2 --------------------------
```
Get-CsOnlineTelephoneNumber -CapitalOrMajorCity NOAM-US-NY-NY
```

This example gets the phone numbers with the city code designating New York, New York.


## PARAMETERS

### -ActivationState
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

### -Assigned
Specifies the function of the telephone number.
The acceptable values are:

"caa" for numbers assigned to conferencing functions.

"user" for numbers assigned to public switched telephone network (PSTN) functions.

The values for the Assigned parameter are case-sensitive.

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

### -CapitalOrMajorCity
Specifies the city by a concatenated string in the form: region-country-area-city.
For example, "NOAM-US-OR-PO" would specify Portland, Oregon.
For a list of geographical codes see Skype for Business geographical codes (http://go.microsoft.com/fwlink/?LinkId=615951).

The values for the CapitalOrMajorCity parameter are case-sensitive.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: CityCode
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

### -ExpandLocation
PARAMVALUE: SwitchParameter

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

### -InventoryType
Specifies the target telephone number type for the cmdlet.
Acceptable values are:

"Service" for numbers assigned to conferencing support.

"Subscriber" for numbers supporting public switched telephone network (PSTN) functions.

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

### -IsNotAssigned
Specifying this switch parameter will return only telephone numbers which are not assigned.

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
Specifies the number of records returned by the cmdlet.
The result size can be set to any whole number between 0 and 2147483647, inclusive.
If set to 0, the command will run, but no data will be returned.

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

### -TelephoneNumber
Specifies the target telephone number.
For example: 

`-TelephoneNumber tel:+18005551234, or -TelephoneNumber +14251234567`

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

### -TelephoneNumberGreaterThan
Specifies a telephone number used by the cmdlet as the lower boundary of the telephone numbers returned.
The telephone numbers returned will all be greater than the number provided.
The telephone number should be in E.164 format.

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

### -TelephoneNumberLessThan
Specifies a telephone number used by the cmdlet as the upper boundary of the telephone numbers returned.
The telephone numbers returned will all be less than the number provided.
The telephone number should be in E.164 format.

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

### -TelephoneNumberStartsWith
Specifies the digits that the returned telephone numbers must begin with.
To return numbers in the 425 area code, use this syntax: -TelephoneNumberStartsWith 425.
To return numbers that are in the 206 area code and that begin with 88, use this syntax: -TelephoneNumberStartsWith 20688.
You can use up to nine digits.

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

### None


## OUTPUTS

### Deserialized.Microsoft.Skype.EnterpriseVoice.BVDClient.Number
An instance or array of the objects.

## NOTES


## RELATED LINKS
