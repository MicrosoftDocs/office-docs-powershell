---
external help file: Microsoft.Exchange.TransportMailControl-Help.xml
applicable: Office 365 Security & Compliance Center
title: New-OrganizationSegment
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# New-OrganizationSegment

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the New-OrganizationSegment cmdlet with the UserGroupFilter parameter that corresponds to the [attribute](https://docs.microsoft.com/Office365/SecurityCompliance/information-barriers-attributes) you want to use to define segments of users in the Office 365 Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-OrganizationSegment [-Name] <String> -UserGroupFilter <String>
 [-Confirm]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-OrganizationSegment -Name "HR" -UserGroupFilter "Department -eq 'HR'"
```

In this example, a segment called HR is defined using HR, a value in the Department attribute.

### -------------------------- Example 2 --------------------------
```
New-OrganizationSegment -Name "NotSales" -UserGroupFilter "Department -ne 'Sales'"
```

In this example, we defined a segment called NotSales that includes everyone who is not in Sales. The "-ne" portion of the cmdlet refers to "not equals."

### -------------------------- Example 3 --------------------------
```
New-OrganizationSegment -Name "LocalFTE" -UserGroupFilter "Location -eq 'Local'" and "Position -ne 'Temporary'"
```

In this example, we defined a segment called LocalFTE that includes people who are locally located and whose positions are not listed as Temporary.

## PARAMETERS

### -Name
The Name parameter specifies the unique name for the organization segment. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserGroupFilter
{{ Fill UserGroupFilter Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch doesn't work in the Office 365 Security & Compliance Center.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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

Example: `New-OrganizationSegment -Name "HR" -UserGroupFilter "Department -eq 'HR'"`

```
RunspaceId          : GUID
Type                : OrganizationSegment
UserGroupFilter     : Department -eq 'HR'
ExoSegmentId        : SegmentIdGUID
ObjectVersion       : GUID
CreatedBy           : Lee Gu
LastModifiedBy      : Lee Gu
Comment             :
ModificationTimeUtc : 5/15/2019 4:41:27 PM
CreationTimeUtc     : 5/15/2019 4:41:27 PM
Identity            : FFO.serverurl/Microsoft Exchange Hosted Organizations/tenantname.onmicrosoft.com/Configuration/HR
Id                  : FFO.serverurl/Microsoft Exchange Hosted Organizations/tenantname.onmicrosoft.com/Configuration/HR
ExchangeVersion     : 0.20 (15.0.0.0)
Name                : HR
DistinguishedName   : CN=HR,CN=Configuration,CN=tenantname.onmicrosoft.com,OU=Microsoft Exchange Hosted Organizations,DC=FFO,DC=extest,DC=microsoft,DC=com
ObjectCategory      :
ObjectClass         : {msExchUnifiedPolicy}
WhenChanged         : 5/15/2019 9:41:27 AM
WhenCreated         : 5/15/2019 9:41:27 AM
WhenChangedUTC      : 5/15/2019 4:41:27 PM
WhenCreatedUTC      : 5/15/2019 4:41:27 PM
ExchangeObjectId    : GUID
OrganizationId      : FFO.serverurl/Microsoft Exchange Hosted Organizations/tenantname.onmicrosoft.com - FFO.serverurl/Microsoft Exchange Hosted Organizations/tenantname.onmicrosoft.com/Configuration
Guid                : GUID
OriginatingServer   :
IsValid             : True
ObjectState         : New

```

## NOTES

## RELATED LINKS

[Online Version](https://docs.microsoft.com/powershell/module/exchange/policy-and-compliance/new-organizationsegment)

[Attributes for information barrier policies](https://docs.microsoft.com/Office365/SecurityCompliance/information-barriers-attributes)

[Define policies for information barriers](https://docs.microsoft.com/office365/securitycompliance/information-barriers-policies)
