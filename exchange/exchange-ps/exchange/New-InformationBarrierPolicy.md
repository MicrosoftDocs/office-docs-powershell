---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-informationbarrierpolicy
applicable: Security & Compliance
title: New-InformationBarrierPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-InformationBarrierPolicy

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-InformationBarrierPolicy cmdlet to create information barrier policies in the Microsoft Purview compliance portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### OrganizationSegmentAllowedFilter
```
New-InformationBarrierPolicy [-Name] <String> -AssignedSegment <String> -SegmentAllowedFilter <String>
 [-Comment <String>]
 [-Confirm]
 [-Force]
 [-ModerationAllowed <Boolean>]
 [-State <EopInformationBarrierPolicyState>]
 [-WhatIf]
 [<CommonParameters>]
```

### OrganizationSegmentsAllowed
```
New-InformationBarrierPolicy [-Name] <String> -AssignedSegment <String> -SegmentsAllowed <MultiValuedProperty>
 [-Comment <String>]
 [-Confirm]
 [-Force]
 [-ModerationAllowed <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

### OrganizationSegmentsBlocked
```
New-InformationBarrierPolicy [-Name] <String> -AssignedSegment <String> -SegmentsBlocked <MultiValuedProperty>
 [-Comment <String>]
 [-Confirm]
 [-Force]
 [-ModerationAllowed <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Information barrier policies are not in effect until you set them to active status, and then apply the policies:

- (If needed): [Block communications between segments](https://learn.microsoft.com/purview/information-barriers-policies#scenario-1-block-communications-between-segments).
- After all of your policies are defined: [Apply information barrier policies](https://learn.microsoft.com/purview/information-barriers-policies#step-4-apply-ib-policies).

For more information, see [Information barrier policies](https://learn.microsoft.com/purview/information-barriers-policies).

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
New-InformationBarrierPolicy -Name "Sales-Research" -AssignedSegment "Sales" -SegmentsBlocked "Research" -State Inactive
```

This example creates an inactive policy named *Sales-Research* for a segment named *Sales*. When active and applied, this policy prevents people in *Sales* from communicating with people in the segment named *Research*.

### Example 2
```powershell
New-InformationBarrierPolicy -Name "Manufacturing-HR" -AssignedSegment "Manufacturing" -SegmentsAllowed "Manufacturing","HR" -State Inactive
```

This example creates an inactive policy named *Manufacturing-HR* for a segment named *Manufacturing*. When active and applied, this policy allows people in *Manufacturing* to communicate only with people in the segment named *HR*. (In this example, Manufacturing can't communicate with users who aren't in HR.)

### Example 3
```powershell
New-InformationBarrierPolicy -Name "Research-HRManufacturing" -AssignedSegment "Research" -SegmentsAllowed "Research","HR","Manufacturing" -State Inactive
```

This example creates a policy that allows the *Research* segment to communicate with only *HR* and *Manufacturing*.

## PARAMETERS

### -Name
The Name parameter specifies a unique name for the information barrier policy that you want to create. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignedSegment
The AssignedSegment parameter specifies the Name value of segment that you want to include in the information barrier policy. You can find existing segments by running the following command: `Get-OrganizationSegment | Format-List Name,UserGroupFilter`.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SegmentAllowedFilter
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: OrganizationSegmentAllowedFilter
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SegmentsAllowed
The SegmentsAllowed parameter specifies the segments that are allowed to communicate with the segment in this policy (users defined by the AssignedSegment parameter). Only these specified segments can communicate with the segment in this policy.

You identify the segment by its Name value. If the value contains spaces, enclose the value in quotation marks ("). You can specify multiple segments separated by commas ("Segment1","Segment2",..."SegmentN").

You can't use this parameter with the SegmentsBlocked parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: OrganizationSegmentsAllowed
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SegmentsBlocked
The SegmentsBlocked parameter specifies the segments that aren't allowed to communicate with the segment in this policy (users defined by the AssignedSegment parameter). You can specify multiple segments separated by commas ("Segment1","Segment2",..."SegmentN").

You identify the segment by its Name value. If the value contains spaces, enclose the value in quotation marks ("). You can specify multiple segments separated by commas ("Segment1","Segment2",..."SegmentN").

You can't use this parameter with the SegmentsAllowed parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: OrganizationSegmentsBlocked
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment
The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch doesn't work on this cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModerationAllowed
{{ Fill ModerationAllowed Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -State
The State parameter specifies whether the information barrier policy is active or inactive. Valid values are:

- Active
- Inactive (This is the default value.)

```yaml
Type: EopInformationBarrierPolicyState
Parameter Sets: (All)
Aliases:
Accepted values: Inactive, Active
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch doesn't work in Security & Compliance PowerShell.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Define policies for information barriers](https://learn.microsoft.com/purview/information-barriers-policies)
