---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-compliancesearchaction
applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance
title: Get-ComplianceSearchAction
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-ComplianceSearchAction

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-ComplianceSearchAction cmdlet to view information about compliance search actions.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Get-ComplianceSearchAction [[-Identity] <ComplianceSearchActionIdParameter>]
 [-Case <String>]
 [-Details]
 [-DomainController <Fqdn>]
 [-IncludeCredential]
 [-Organization <OrganizationIdParameter>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

### Preview
```
Get-ComplianceSearchAction [-Preview]
 [-Case <String>]
 [-Details]
 [-DomainController <Fqdn>]
 [-IncludeCredential]
 [-Organization <OrganizationIdParameter>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

### Purge
```
Get-ComplianceSearchAction [-Purge]
 [-Case <String>]
 [-Details]
 [-DomainController <Fqdn>]
 [-IncludeCredential]
 [-Organization <OrganizationIdParameter>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

### Export
```
Get-ComplianceSearchAction [-Export]
 [-Case <String>]
 [-Details]
 [-DomainController <Fqdn>]
 [-IncludeCredential]
 [-Organization <OrganizationIdParameter>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
After you create and run a compliance search using the New-ComplianceSearch cmdlet, and start the search using the Start-ComplianceSearch cmdlet, you assign a search action using the New-ComplianceSearchAction cmdlet. You use the Get-ComplianceSearchAction cmdlet to track the progress of the compliance search action.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

In on-premises Exchange, this cmdlet is available in the Mailbox Search role. By default, this role is assigned only to the Discovery Management role group.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ComplianceSearchAction
```

This example shows a summary list of all compliance search actions.

### Example 2
```powershell
Get-ComplianceSearchAction -Identity "Case 1234_Preview" | Format-List
```

This example shows details about the compliance search action named "Case 1234_Preview"

## PARAMETERS

### -Identity
The Identity parameter specifies the compliance search action that you want to view. You can use any value that uniquely identifies the compliance search action. For example:

- Name: The compliance search action name uses the syntax `"Compliance Search Name_Action"`. For example, `"Case 1234_Preview"`.
- JobRunId (GUID)

You can't use this parameter with the Export, Preview, or Purge parameters.

When you use the Identity parameter, more details are returned in the results. For example:

- In the Results line, the values of the Item count, Total size, and Details properties are populated.
- Location lines are added to the results.
- The NumBindings property value is populated. This property includes the primary mailbox, the main archive, and any additional archives for users included in the search. NumBindings is not the number of users included in the search, because each included user could have or not have a combination of a primary mailbox, a main archive, and additional archives.
- The affected location properties (for example, ExchangeLocation) are populated.
- The CaseName property value is populated.

```yaml
Type: ComplianceSearchActionIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Case
This parameter is available only in the cloud-based service.

The Case parameter filters the results by the name of the specified case. If the value contains spaces, enclose the value in quotation marks.

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

### -Details
The Details switch specifies whether to include detailed information in the results. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is functional only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Export
**Note**: After May 26, 2025, this parameter is no longer functional. For more information, see [Upcoming changes to Microsoft Purview eDiscovery](https://techcommunity.microsoft.com/blog/microsoft-security-blog/upcoming-changes-to-microsoft-purview-ediscovery/4405084).

The Export switch filters the results by Export compliance search actions. You don't need to specify a value with this switch.

You can't use this switch with the Identity, Preview, or Purge parameters.

```yaml
Type: SwitchParameter
Parameter Sets: Export
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeCredential
The IncludeCredential switch specifies whether to include the credential in the results. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization
This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Preview
The Preview switch filters the results by Preview compliance search actions. You don't need to specify a value with this switch.

You can't use this switch with the Export, Identity, or Purge parameters.

```yaml
Type: SwitchParameter
Parameter Sets: Preview
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Purge
**Note**: In Security & Compliance PowerShell, this parameter is available only in the Search and Purge role. By default, this role is assigned only to the Organization Management and Data Investigator role groups.

The Purge switch filters the results by Purge compliance search actions. You don't need to specify a value with this switch.

You can't use this switch with the Export, Identity, or Preview parameters.

```yaml
Type: SwitchParameter
Parameter Sets: Purge
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance

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
Applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance

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
