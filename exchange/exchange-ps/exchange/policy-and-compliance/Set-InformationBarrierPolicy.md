---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: Set-InformationBarrierPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# Set-InformationBarrierPolicy

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Set-InformationBarrierPolicy cmdlet to modify information barrier policies in the Office 365 Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### OrganizationSegmentsAllowed
```
Set-InformationBarrierPolicy -Identity <PolicyIdParameter> [-SegmentsAllowed <MultiValuedProperty>]
 [-Comment <String>]
 [-State <EopInformationBarrierPolicyState>]
 [<CommonParameters>]
```

### OrganizationSegmentAllowedFilter
```
Set-InformationBarrierPolicy -Identity <PolicyIdParameter> [-SegmentAllowedFilter <String>]
 [-Comment <String>]
 [-State <EopInformationBarrierPolicyState>]
 [<CommonParameters>]
```

### OrganizationSegmentsBlocked
```
Set-InformationBarrierPolicy -Identity <PolicyIdParameter> [-SegmentsBlocked <MultiValuedProperty>]
 [-Comment <String>]
 [-State <EopInformationBarrierPolicyState>]
 [<CommonParameters>]
```

## DESCRIPTION
For more information, see [Information barrier policies](https://docs.microsoft.com/office365/securitycompliance/information-barriers-policies).

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
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
Applicable: Office 365 Security & Compliance Center
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
Applicable: Office 365 Security & Compliance Center
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
Type:
Parameter Sets: OrganizationSegmentsAllowed
Aliases:
Applicable: Office 365 Security & Compliance Center
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
Applicable: Office 365 Security & Compliance Center
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
Type:
Parameter Sets: OrganizationSegmentsBlocked
Aliases:
Applicable: Office 365 Security & Compliance Center
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
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://docs.microsoft.com/powershell/module/exchange/policy-and-compliance/set-informationbarrierpolicy)

[Define policies for information barriers](https://docs.microsoft.com/office365/securitycompliance/information-barriers-policies)

[New-InformationBarrierPolicy](New-InformationBarrierPolicy.md)
