---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-mailboxsearch
schema: 2.0.0
title: Get-MailboxSearch
---

# Get-MailboxSearch

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Get-MailboxSearch cmdlet to view mailbox searches that are in progress, complete or stopped.

**Note**: As of October 2020, the \*-MailboxSearch cmdlets are retired in Exchange Online PowerShell. Use the \*-ComplianceSearch cmdlets in Security & Compliance PowerShell instead. For more information, see [Retirement of legacy eDiscovery tools](https://learn.microsoft.com/purview/ediscovery-legacy-retirement).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### SearchObjectIdentity
```
Get-MailboxSearch [[-Identity] <SearchObjectIdParameter>]
 [-DomainController <Fqdn>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

### EwsStoreObjectIdentity
```
Get-MailboxSearch [[-Identity] <EwsStoreObjectIdParameter>]
 [-ShowDeletionInProgressSearches]
 [-DomainController <Fqdn>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

### InPlaceHoldIdentity
```
Get-MailboxSearch -InPlaceHoldIdentity <String>
 [-ShowDeletionInProgressSearches]
 [-DomainController <Fqdn>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
In on-premises Exchange, a mailbox search is used to perform an In-Place eDiscovery or to place users on an In-Place Hold. Use the Get-MailboxSearch cmdlet to retrieve details of either type of mailbox search.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailboxSearch -ResultSize "unlimited"
```

This example retrieves a list of all mailbox searches.

### Example 2
```powershell
Get-MailboxSearch "Project Hamilton" | Format-List
```

This example retrieves all properties for the mailbox search Project Hamilton.

The Identity parameter is positional, which means you can use it without the -Identity label in the supported location in the command (in this case, first). For more information about positional parameters, see [About Parameters](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_parameters).

### Example 3
```powershell
(Get-Mailbox Mark).InPlaceHolds

Get-MailboxSearch -InPlaceHoldIdentity 9953d0f0fd03415e949d4b41c5a28cbb
```

This example retrieves the In-Place Holds that a user is placed on. The first command outputs GUIDs of In-Place Holds. The last command retrieves a mailbox search based on the GUID of the In-Place Hold that the user is placed on.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Identity parameter specifies the name of the search query. If a name isn't provided, all mailbox search queries are returned.

To improve the performance of this cmdlet in Exchange Online, some mailbox search properties aren't returned if you don't specify the name of a mailbox search. These properties are:

- SourceMailboxes
- Sources
- SearchQuery
- ResultsLink
- PreviewResultsLink
- Errors

To view these properties, you have to provide the name of a mailbox search.

```yaml
Type: SearchObjectIdParameter
Parameter Sets: EwsStoreObjectIdentity, SearchObjectIdentity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -InPlaceHoldIdentity

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The InPlaceHoldIdentity parameter specifies the GUID of an In-Place Hold. Use this parameter to search for an In-Place Hold that a user is placed on. GUIDs of all In-Place Holds that a user is placed on are added to the user's InPlaceHolds property. You can retrieve the property by using the Get-Mailbox cmdlet.

```yaml
Type: String
Parameter Sets: InPlaceHoldIdentity
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

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

### -ShowDeletionInProgressSearches

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: EwsStoreObjectIdentity, InPlaceHoldIdentity
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

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
