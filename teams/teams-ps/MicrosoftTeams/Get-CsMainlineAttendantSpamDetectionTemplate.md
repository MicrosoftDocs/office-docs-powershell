---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.dll-Help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csmainlineattendantspamdetectiontemplate
schema: 2.0.0
title: Get-CsMainlineAttendantSpamDetectionTemplate
---

# Get-CsMainlineAttendantSpamDetectionTemplate

## SYNOPSIS

The Get-CsMainlineAttendantSpamDetectionTemplate cmdlet returns a list of spam detection templates that have been configured in the tenant.

## SYNTAX

```
Get-CsMainlineAttendantSpamDetectionTemplate [-Identity <string>] [-Tenant <Guid>] [-First <Int32>] [-Skip <Int32>] [-ExcludeContent <Switch>] [-Sort <String>] [-Descending <Switch>] [-NameFilter <String>] [<CommonParameters>]
```

## DESCRIPTION

The Get-CsMainlineAttendantSpamDetectionTemplate cmdlet returns a list of spam detection templates that have been configured in the tenant.

> [!CAUTION]
> Teams Phone Agent (formerly Mainline Attendant) is currently only available to customers in the [Frontier](https://www.microsoft.com/microsoft-365-copilot/frontier-program) Public Preview program.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsMainlineAttendantSpamDetectionTemplate 
```

This example will return a list of all the spam detection templates configured in the tenant.

### -------------------------- Example 2 --------------------------
```
Get-CsMainlineAttendantSpamDetectionTemplate -Id 3a4b3d9b-91d8-4fbf-bcff-6907f325842d
```

This example retrieves the Spam Detection template with the Identity 3a4b3d9b-91d8-4fbf-bcff-6907f325842d

## Parameters

### -Descending

The Descending parameter sorts the Spam Detection templates in descending order

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

### -ExcludeContent

The ExcludeContent parameter only displays the Name and Id of the Spam Detection template.

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

### -First

The First parameter gets the first N Spam Detection templates, up to a maximum of 100 at a time.

When not specified, the default behavior is to return the first 100 templates. It is intended to be used in conjunction with the `-Skip` parameter for pagination purposes.

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

### -Identity

Represents the unique identifier of a spam detection template.

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

### -NameFilter

The NameFilter parameter returns Spam Detection templates where name contains specified string

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

### -Skip

The Skip parameter skips the first N templates. It is intended to be used in conjunction with the `-First` parameter for pagination purposes.

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

### -Tenant

This parameter is reserved for Microsoft internal use only.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.CallQueue.Models.CallQueue

## NOTES

## RELATED LINKS

