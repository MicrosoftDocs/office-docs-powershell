---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-informationbarrierpolicy
applicable: Security & Compliance
title: Set-InformationBarrierPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Set-InformationBarrierPolicy

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Set-InformationBarrierPolicy cmdlet to modify information barrier policies in the Microsoft Purview compliance portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### OrganizationSegmentsAllowed
```
Set-InformationBarrierPolicy -Identity <PolicyIdParameter>
 [-SegmentsAllowed <MultiValuedProperty>]
 [-Comment <String>]
 [-Confirm]
 [-ModerationAllowed <Boolean>]
 [-Force]
 [-State <EopInformationBarrierPolicyState>]
 [-WhatIf]
 [<CommonParameters>]
```

### OrganizationSegmentAllowedFilter
```
Set-InformationBarrierPolicy -Identity <PolicyIdParameter>
 [-SegmentAllowedFilter <String>]
 [-Comment <String>]
 [-Confirm]
 [-Force]
 [-ModerationAllowed <Boolean>]
 [-State <EopInformationBarrierPolicyState>]
 [-WhatIf]
 [<CommonParameters>]
```

### OrganizationSegmentsBlocked
```
Set-InformationBarrierPolicy -Identity <PolicyIdParameter>
 [-SegmentsBlocked <MultiValuedProperty>]
 [-Comment <String>]
 [-Confirm]
 [-Force]
 [-ModerationAllowed <Boolean>]
 [-State <EopInformationBarrierPolicyState>]
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
Set-InformationBarrierPolicy -Identity 43c37853-ea10-4b90-a23d-ab8c93772471 -State Active
```

This example activates the specified inactive information barrier policy.

## PARAMETERS

### -Identity
The Identity parameter specifies the information barrier policy that you want to modify. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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
This parameter is reserved for internal Microsoft use.

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

### -SegmentsAllowed
The SegmentsAllowed parameter specifies the segments that are allowed to communicate with the segment in this policy (users defined by the AssignedSegment parameter). Only these specified segments can communicate with the segment in this policy.

You identify the segment by its Name value. If the value contains spaces, enclose the value in quotation marks ("). You can specify multiple segments separated by commas ("Segment1","Segment2",..."SegmentN").

You can't use this parameter with the SegmentsBlocked parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: OrganizationSegmentsAllowed
Aliases:
Applicable: Security & Compliance

Required: False
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

Required: False
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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -State
The State parameter specifies whether the information barrier policy is active or inactive. Valid values are:

- Active
- Inactive

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

[New-InformationBarrierPolicy](https://learn.microsoft.com/powershell/module/exchange/new-informationbarrierpolicy)
