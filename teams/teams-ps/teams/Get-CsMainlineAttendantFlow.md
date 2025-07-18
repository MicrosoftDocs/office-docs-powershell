---
external help file: Microsoft.Rtc.Management.dll-Help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csmainlineattendantflow
applicable: Microsoft Teams
title: Get-CsMainlineAttendantFlow
author: tomkau
ms.author: tomkau
manager: bulenteg
ms.reviewer:
schema: 2.0.0
---

# Get-CsMainlineAttendantFlow 

## SYNOPSIS
Creates new Call Queue in your Skype for Business Online organization.

## SYNTAX

```
Get-CsMainlineAttendantFlow  [-MaConfigId <String>] [-Type <String>] [-FlowId <String>] [-Tenant <Guid>] [<CommonParameters>]
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
Get-CsMainlineAttendantFlow -MaConfig 0b31bbe5-e2a0-4117-9b6f-956bca6023f8
```

This example will list all the Mainline Attendant flows associated with the specific configuration id.

### Example 3
```
Get-CsMainlineAttendantFlow -Type Type 1 | Type 2
```

This example will list all the Mainline Attendant flows with the specified type.

### Example 4
```
Get-CsMainlineAttendantFlow -FlowId 956bca6-e2a0-4117-9b6f-023f80b31bbe5
```

This example will list the Mainline Attendant flow with the specified flow id.

## PARAMETERS

### -MaConfigId
The Mainline Attendant configuration Id

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

### -Type
The Mainline Attendant flow type

PARAMVALUE: Type 1 | Type 2

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

### -FlowId
The Mainline Attendant flow id

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

### Microsoft.Rtc.Management.Hosted.CallQueue.Models.CallQueue

## NOTES

## RELATED LINKS

