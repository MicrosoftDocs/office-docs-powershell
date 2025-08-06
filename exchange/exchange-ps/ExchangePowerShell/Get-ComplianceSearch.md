---
applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-compliancesearch
schema: 2.0.0
title: Get-ComplianceSearch
---

# Get-ComplianceSearch

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Get-ComplianceSearch cmdlet to view estimate compliance searches in Exchange Server 2016 or later and in the Microsoft Purview compliance portal. After you use the New-ComplianceSearchAction cmdlet to define a preview action for the compliance search, use the Get-ComplianceSearchAction cmdlet to view the results of the compliance search.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ComplianceSearch [[-Identity] <ComplianceSearchIdParameter>]
 [-Case <String>]
 [-DomainController <Fqdn>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

In on-premises Exchange, this cmdlet is available in the Mailbox Search role. By default, this role is assigned only to the Discovery Management role group.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

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

> Applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance

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

**Note**: The NumBindings property includes the primary mailbox, the main archive, and any additional archives for users included in the search. NumBindings is not the number of users included in the search, because each included user could have or not have a combination of a primary mailbox, a main archive, and additional archives.

```yaml
Type: ComplianceSearchIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Case

> Applicable: Security & Compliance

This parameter is available only in the cloud-based service.

The Case parameter filters the results by the name of an eDiscovery Standard case that the compliance search is associated with. If the value contains spaces, enclose the value in quotation marks.

You can't use this parameter to view compliance searches associated with eDiscovery Premium cases.

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

### -DomainController

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

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
