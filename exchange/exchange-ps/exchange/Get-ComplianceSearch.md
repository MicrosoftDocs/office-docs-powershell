---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-compliancesearch
applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance Center
title: Get-ComplianceSearch
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-ComplianceSearch

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-ComplianceSearch cmdlet to view estimate compliance searches in Exchange Server 2016 and in the Security & Compliance Center. After you use the New-ComplianceSearchAction cmdlet to define a preview action for the compliance search, use the Get-ComplianceSearchAction cmdlet to view the results of the compliance search.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ComplianceSearch [[-Identity] <ComplianceSearchIdParameter>]
 [-Case <String>]
 [-DomainController <Fqdn>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

This cmdlet is available in the Mailbox Search role. By default, this role is assigned only to the Discovery Management role group and not to the Organization Management role group.

You need to be assigned permissions in the Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in the Security & Compliance Center](https://docs.microsoft.com/microsoft-365/security/office-365-security/permissions-in-the-security-and-compliance-center).

## EXAMPLES

### Example 1
```powershell
Get-ComplianceSearch
```

This example shows a summary list of all compliance searches.

### Example 2
```powershell
Get-ComplianceSearch -Identity "Case 1234" | Format-List
```

This examples show details of the compliance search named Case 1234.

## PARAMETERS

### -Identity
The Identity parameter specifies the compliance search that you want to view.

You can use any value that uniquely identifies the compliance search. For example:

- Name
- JobRunId (GUID)

You can find these values by running the command Get-ComplianceSearch | Format-Table -Auto Name,JobRunId,Status

To improve the performance of this cmdlet, some compliance search properties aren't returned if you don't specify the identity of the compliance search. These properties are:

- Items
- Size
- SuccessResults
- NumBindings
- ExchangeLocation
- SharePointLocation
- OneDriveLocation

To view these properties, you need to use the Identity parameter in the command.

```yaml
Type: ComplianceSearchIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance Center

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Case
This parameter is available only in the cloud-based service.

The Case parameter filters the results by the name of a Core eDiscovery case that the compliance search is associated with. If the value contains spaces, enclose the value in quotation marks.

You can't use this parameter to view compliance searches associated with Advanced eDiscovery cases.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
