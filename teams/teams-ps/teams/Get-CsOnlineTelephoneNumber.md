---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csonlinetelephonenumber
applicable: Microsoft Teams
title: Get-CsOnlineTelephoneNumber
schema: 2.0.0
manager: bulenteg
author: jenstrier
ms.author: serdars
ms.reviewer:
---

# Get-CsOnlineTelephoneNumber

## SYNOPSIS
Use the `Get-CsOnlineTelephoneNumber` to retrieve telephone numbers from the Business Voice Directory.

**Note**: This cmdlet has been deprecated. Use the new [Get-CsPhoneNumberAssignment](https://learn.microsoft.com/powershell/module/teams/get-csphonenumberassignment) cmdlet instead. For Microsoft 365 GCC High and DoD cloud instances use the new [Get-CshybridTelephoneNumber](https://learn.microsoft.com/powershell/module/teams/get-cshybridtelephonenumber) cmdlet instead.

## SYNTAX

```
Get-CsOnlineTelephoneNumber [-ActivationState <String>] [-Assigned <MultiValuedProperty>] [-CapitalOrMajorCity <String>] [-DomainController <Fqdn>] [-ExpandLocation] [-Force] [-InventoryType <MultiValuedProperty>] [-IsNotAssigned] [-ResultSize <UInt32>] [-TelephoneNumber <String>] [-TelephoneNumberGreaterThan <String>] [-TelephoneNumberLessThan <String>] [-TelephoneNumberStartsWith <String>] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
Use the `Get-CsOnlineTelephoneNumber` to retrieve telephone numbers from the Business Voice Directory.
Note: By default the result size is limited to 500 items, specify a higher result size using ResultSize parameter.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Get-CsOnlineTelephoneNumber -TelephoneNumber 19294450177
```

This example gets the attributes of a specific phone number.

### -------------------------- Example 2 --------------------------
```
PS C:\> Get-CsOnlineTelephoneNumber -CapitalOrMajorCity NOAM-US-NY-NY
```

```output
RunspaceId : f90303a9-c6a8-483c-b3b3-a5b8cdbab19c

ActivationState : Activated

BridgeNumber :

CallingProfile : BandwidthUS

InventoryType : Service

CityCode : NOAM-US-NY-NY

Id : 19294450177

InventoryType : Service

Location :

O365Region : NOAM

SourceType : Tnm

TargetType : caa

Tenant :

TenantId :

UserId :

IsManagedByServiceDesk : True

PortInOrderStatus :
```

This example gets the phone numbers with the city code designating New York, New York.

## PARAMETERS

### -ActivationState
This parameter is reserved for internal Microsoft use.

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

### -Assigned
Specifies the function of the telephone number.
The acceptable values are:

* "caa" for numbers assigned to conferencing functions.

* "user" for numbers assigned to public switched telephone network (PSTN) functions.

The values for the Assigned parameter are case-sensitive.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CapitalOrMajorCity
Specifies the city by a concatenated string in the form: region-country-area-city.
For example, "NOAM-US-OR-PO" would specify Portland, Oregon.

The values for the CapitalOrMajorCity parameter are case-sensitive.

```yaml
Type: String
Parameter Sets: (All)
Aliases: CityCode
applicable: Microsoft Teams

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
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExpandLocation
Displays the location parameter with its value.

```yaml
Type: SwitchParameter
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
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InventoryType
Specifies the target telephone number type for the cmdlet.
Acceptable values are:

* "Service" for numbers assigned to conferencing support, call queue or auto attendant.

* "Subscriber" for numbers supporting public switched telephone network (PSTN) functions.

The values for the InventoryType parameter are case-sensitive.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

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
applicable: Microsoft Teams

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
Type: UInt32
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

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

### -TelephoneNumberGreaterThan
Specifies a telephone number used by the cmdlet as the lower boundary of the telephone numbers returned.
The telephone numbers returned will all be greater than the number provided.
The telephone number should be in E.164 format.

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

### -TelephoneNumberLessThan
Specifies a telephone number used by the cmdlet as the upper boundary of the telephone numbers returned.
The telephone numbers returned will all be less than the number provided.
The telephone number should be in E.164 format.

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

### -TelephoneNumberStartsWith
Specifies the digits that the returned telephone numbers must begin with.
To return numbers in the North American Numbering Plan 425 area code, use this syntax: -TelephoneNumberStartsWith 1425.
To return numbers that are in the 206 area code and that begin with 88, use this syntax: -TelephoneNumberStartsWith 120688.
You can use up to nine digits.

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

### -Tenant
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Deserialized.Microsoft.Skype.EnterpriseVoice.BVDClient.Number
An instance or array of the objects.

## NOTES

## RELATED LINKS
[Remove-CsOnlineTelephoneNumber](https://learn.microsoft.com/powershell/module/teams/remove-csonlinetelephonenumber)
