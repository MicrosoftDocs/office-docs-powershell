---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.dll-Help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csmainlineattendantflow
schema: 2.0.0
title: Get-CsMainlineAttendantFlow
---

# Get-CsMainlineAttendantFlow 

## SYNOPSIS
The Get-CsMainlineAttendantFlow cmdlet returns information about the Mainline Attendant flows configured in your organization

## SYNTAX

```
Get-CsMainlineAttendantFlow  [-ConfigurationId <String>] [-Type <String>] [-Identity <String>] [-First <UInt32>] [-Skip <UInt32>] [-NameFilter <String>] [-Sort <String>] [-Descending] [-ExcludeContent] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsMainlineAttendantFlow cmdlet returns information about the Mainline Attendant flows configured in your organization.

> [!CAUTION]
> This cmdlet will only work for customers that are participating in the Voice Applications private preview for these features. General Availability for this functionality has not been determined at this time.

## EXAMPLES

### Example 1
```
Get-CsMainlineAttendantFlow 
```

This example will list all the Mainline Attendant flows in the tenant.

### Example 2
```
Get-CsMainlineAttendantFlow -ConfigurationId 0b31bbe5-e2a0-4117-9b6f-956bca6023f8
```

This example will list all the Mainline Attendant flows associated with the specific configuration id.

### Example 3
```
Get-CsMainlineAttendantFlow -Type AppointmentBooking
```

This example will list all the Mainline Attendant Appointment flows.

### Example 4
```
Get-CsMainlineAttendantFlow -Type QuestionAnswer
```

This example will list all the Mainline Attendant Question and Answer flows with the specified type.

### Example 5
```
Get-CsMainlineAttendantFlow -Identity 956bca6-e2a0-4117-9b6f-023f80b31bbe5
```

This example will list the Mainline Attendant flow with the specified identity.

## PARAMETERS

### -ConfigurationId
The Mainline Attendant configuration Id

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

### -Type
The Mainline Attendant flow type

PARAMVALUE: AppointmentBooking | QuestionAnswer

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

### -Identity
The Mainline Attendant identity

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

### -First

The First parameter gets the first N Mainline Attendant flows, up to a maximum of 100 at a time. 
When not specified, the default behavior is to return the first 100 Mainline Attendant flows. It is intended to be used in conjunction with the `-Skip` parameter for pagination purposes.
If a number greater than 100 is supplied, the request will fail.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: 100
Accept pipeline input: False
Accept wildcard characters: False
```

### -Skip

The Skip parameter skips the first N Mainline Attendant flows. It is intended to be used in conjunction with the `-First` parameter for pagination purposes.

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

### -ExcludeContent

The ExcludeContent parameter only displays the Name and Id of the Mainline Attendant flow.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Sort

The Sort parameter specifies the property used to sort.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: Name
Accept pipeline input: False
Accept wildcard characters: False
```

### -Descending

The Descending parameter sorts Mainline Attendant flows in descending order

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NameFilter

The NameFilter parameter returns appointment booking flows where the name contains specified string

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.CallQueue.Models.CallQueue

## NOTES

## RELATED LINKS

