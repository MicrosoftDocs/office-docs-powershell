---
external help file: Microsoft.Rtc.Management.dll-Help.xml
online version: https://learn.microsoft.com/powershell/module/teams/Get-CsMainlineAttendantQuestionAnswerFlow
applicable: Microsoft Teams
title: Get-CsMainlineAttendantQuestionAnswerFlow
schema: 2.0.0
ms.reviewer:
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Get-CsMainlineAttendantQuestionAnswerFlow

## SYNOPSIS
The Get-CsMainlineAttendantQuestionAnswerFlow cmdlet returns the identified Mainline attendant question and answer flow.

## SYNTAX

```
Get-CsMainlineAttendantQuestionAnswerFlow [-Identity <Guid>] [-Tenant <Guid>] [-First <Int32>] [-Skip <Int32>] [-ExcludeContent <Switch>] [-Sort <String>] [-Descending <Switch>] [-NameFilter <String>] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsMainlineAttendantQuestionAnswerFlow cmdlet lets you retrieve information about the Mainline attendant question and answer flows n your organization.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsMainlineAttendantQuestionAnswerFlow
```

This example gets the first 100 Mainline attendant question and answer flows in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsMainlineAttendantQuestionAnswerFlow -Identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01
```

This example gets the Mainline attendant question and answer flow with the identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01. If no question and answer flow exists with the identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01, then this example generates an error.

## PARAMETERS

### -Identity
PARAMVALUE: Guid

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

### -Tenant
PARAMVALUE: Guid

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

### -First
The First parameter gets the first N appointment flows, up to a maximum of 100 at a time. 
When not specified, the default behavior is to return the first 100 question and answer flows. It is intended to be used in conjunction with the `-Skip` parameter for pagination purposes.
If a number greater than 100 is supplied, the request will fail.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: 100
Accept pipeline input: False
Accept wildcard characters: False
```

### -Skip
The Skip parameter skips the first N appointment flows. It is intended to be used in conjunction with the `-First` parameter for pagination purposes.

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

### -ExcludeContent
The ExcludeContent parameter only displays the Name and Id of the question and answer flow.

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

### -Sort
The Sort parameter specifies the property used to sort.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: Name
Accept pipeline input: False
Accept wildcard characters: False
```

### -Descending
The Descending parameter sorts appointment booking flows in descending order

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

### -NameFilter
The NameFilter parameter returns question and answer booking flows where the name contains specified string

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Identity
Represents the unique identifier of a question and answer booking flow.

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.CallQueue.Models.CallQueue

## NOTES

## RELATED LINKS

